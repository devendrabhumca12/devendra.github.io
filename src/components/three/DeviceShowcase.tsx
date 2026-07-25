import { useEffect, useRef, useState } from 'react'
import { useFrame } from '@react-three/fiber'
import { RoundedBox, useTexture } from '@react-three/drei'
import type { Group, Mesh, MeshStandardMaterial } from 'three'
import { getSheenTexture, getVignetteTexture } from './screenOverlayTextures'

interface DeviceShowcaseProps {
  images: string[]
  reduceMotion: boolean
  followPointer?: boolean
  autoRotateSpeed?: number
  cycleInterval?: number
}

export function DeviceShowcase({
  images,
  reduceMotion,
  followPointer = false,
  autoRotateSpeed = 0.15,
  cycleInterval = 2600,
}: DeviceShowcaseProps) {
  const group = useRef<Group>(null)
  const screenA = useRef<Mesh>(null)
  const screenB = useRef<Mesh>(null)
  const pointer = useRef({ x: 0, y: 0 })
  const textures = useTexture(images)
  const [index, setIndex] = useState(0)
  const [fade, setFade] = useState(0)
  const textureList = Array.isArray(textures) ? textures : [textures]

  useEffect(() => {
    if (textureList.length < 2 || reduceMotion) return
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % textureList.length)
      setFade(0)
    }, cycleInterval)
    return () => clearInterval(id)
  }, [textureList.length, cycleInterval, reduceMotion])

  useFrame((state, delta) => {
    if (!group.current) return

    if (!reduceMotion) {
      if (followPointer) {
        // Clamp: a pointer event recorded far outside the canvas (e.g. a
        // click elsewhere on a tall page) can report NDC coordinates well
        // beyond ±1, which would otherwise spin the device edge-on and
        // leave it stuck there until the pointer re-enters the canvas.
        pointer.current.x = Math.max(-1, Math.min(1, state.pointer.x))
        pointer.current.y = Math.max(-1, Math.min(1, state.pointer.y))
        group.current.rotation.y +=
          (pointer.current.x * 0.5 - group.current.rotation.y) * delta * 2
        group.current.rotation.x +=
          (-pointer.current.y * 0.3 - group.current.rotation.x) * delta * 2
        // Hard safety clamp on the output itself, independent of how we got
        // here — the screen must never rotate far enough to go edge-on.
        group.current.rotation.y = Math.max(-0.5, Math.min(0.5, group.current.rotation.y))
        group.current.rotation.x = Math.max(-0.3, Math.min(0.3, group.current.rotation.x))
      } else {
        // Bounded sway rather than a full spin — a continuous 360° rotation
        // would periodically turn the screen away from the camera.
        group.current.rotation.y = Math.sin(state.clock.elapsedTime * autoRotateSpeed) * 0.35
      }
      group.current.position.y = Math.sin(state.clock.elapsedTime * 0.6) * 0.08
    }

    if (fade < 1) {
      setFade((f) => Math.min(1, f + delta * 2.2))
    }
    const matA = screenA.current?.material as MeshStandardMaterial | undefined
    const matB = screenB.current?.material as MeshStandardMaterial | undefined
    if (matA) matA.opacity = 1
    if (matB) matB.opacity = fade
  })

  const current = textureList[index]
  const previous = textureList[(index - 1 + textureList.length) % textureList.length]

  return (
    <group ref={group} rotation={[0, 0.15, 0]}>
      <RoundedBox args={[1.4, 2.9, 0.14]} radius={0.16} smoothness={6}>
        <meshStandardMaterial color="#1c1d22" metalness={0.7} roughness={0.2} />
      </RoundedBox>

      <mesh ref={screenA} position={[0, 0, 0.076]}>
        <planeGeometry args={[1.24, 2.68]} />
        <meshStandardMaterial map={previous} roughness={0.5} />
      </mesh>
      <mesh ref={screenB} position={[0, 0, 0.077]}>
        <planeGeometry args={[1.24, 2.68]} />
        <meshStandardMaterial map={current} roughness={0.5} transparent opacity={0} />
      </mesh>

      <mesh position={[0, 0, 0.0775]}>
        <planeGeometry args={[1.24, 2.68]} />
        <meshBasicMaterial map={getVignetteTexture()} transparent depthWrite={false} />
      </mesh>

      <mesh position={[0, 1.27, 0.078]} rotation={[0, 0, Math.PI / 2]}>
        <capsuleGeometry args={[0.045, 0.22, 4, 8]} />
        <meshStandardMaterial color="#050506" roughness={0.6} />
      </mesh>

      <mesh position={[0, 0, 0.079]}>
        <planeGeometry args={[1.24, 2.68]} />
        <meshBasicMaterial map={getSheenTexture()} transparent depthWrite={false} />
      </mesh>
    </group>
  )
}
