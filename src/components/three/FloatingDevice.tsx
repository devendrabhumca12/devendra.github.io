import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { RoundedBox } from '@react-three/drei'
import type { Group } from 'three'

interface FloatingDeviceProps {
  reduceMotion: boolean
}

export function FloatingDevice({ reduceMotion }: FloatingDeviceProps) {
  const group = useRef<Group>(null)
  const pointer = useRef({ x: 0, y: 0 })

  useFrame((state, delta) => {
    if (!group.current) return

    if (!reduceMotion) {
      pointer.current.x = state.pointer.x
      pointer.current.y = state.pointer.y
      group.current.rotation.y +=
        (pointer.current.x * 0.5 - group.current.rotation.y) * delta * 2
      group.current.rotation.x +=
        (-pointer.current.y * 0.3 - group.current.rotation.x) * delta * 2
      group.current.position.y = Math.sin(state.clock.elapsedTime * 0.6) * 0.08
    }
  })

  return (
    <group ref={group} rotation={[0, 0.15, 0]}>
      <RoundedBox args={[1.4, 2.9, 0.14]} radius={0.16} smoothness={6}>
        <meshStandardMaterial color="#1c1d22" metalness={0.6} roughness={0.25} />
      </RoundedBox>
      <mesh position={[0, 0, 0.075]}>
        <planeGeometry args={[1.24, 2.68]} />
        <meshStandardMaterial
          color="#0a0a0c"
          emissive="#132038"
          emissiveIntensity={0.5}
          roughness={0.4}
        />
      </mesh>
    </group>
  )
}
