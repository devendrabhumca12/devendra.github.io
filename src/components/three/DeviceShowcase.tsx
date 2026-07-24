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
        pointer.current.x = state.pointer.x
        pointer.current.y = state.pointer.y
        group.current.rotation.y +=
          (pointer.current.x * 0.5 - group.current.rotation.y) * delta * 2
        group.current.rotation.x +=
          (-pointer.current.y * 0.3 - group.current.rotation.x) * delta * 2
      } else {
        group.current.rotation.y += autoRotateSpeed * delta
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
