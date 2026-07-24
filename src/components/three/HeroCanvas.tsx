import { Suspense, useState } from 'react'
import { Canvas } from '@react-three/fiber'
import { ContactShadows, Sparkles } from '@react-three/drei'
import { DeviceShowcase } from './DeviceShowcase'

export function HeroCanvas() {
  const [lost, setLost] = useState(false)

  if (lost) return null

  return (
    <Canvas
      dpr={[1, 1.5]}
      camera={{ position: [0, 0, 5.4], fov: 36 }}
      gl={{ antialias: true, alpha: true }}
      className="!absolute inset-0"
      onCreated={({ gl }) => {
        gl.domElement.addEventListener('webglcontextlost', (e) => {
          e.preventDefault()
          setLost(true)
        })
      }}
    >
      <ambientLight intensity={0.5} />
      <directionalLight position={[2, 3, 4]} intensity={1.2} />
      <directionalLight position={[-3, -1, -2]} intensity={0.5} color="#4c8dff" />
      <Sparkles count={60} scale={[6, 5, 3]} size={2} speed={0.15} opacity={0.4} color="#6ea3ff" />
      <Suspense fallback={null}>
        <DeviceShowcase
          images={['/case-studies/formeasy/home.webp']}
          reduceMotion={false}
          followPointer
        />
        <ContactShadows
          position={[0, -1.55, 0]}
          opacity={0.55}
          scale={6}
          blur={2.8}
          far={2}
          color="#000814"
        />
      </Suspense>
    </Canvas>
  )
}
