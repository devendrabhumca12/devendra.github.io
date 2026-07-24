import { Suspense, useState } from 'react'
import { Canvas } from '@react-three/fiber'
import { ContactShadows } from '@react-three/drei'
import { DeviceShowcase } from './DeviceShowcase'

const SCREENSHOTS = [
  '/case-studies/formeasy/home.webp',
  '/case-studies/formeasy/requirements-photo.webp',
  '/case-studies/formeasy/result-ready.webp',
]

export function FormEasyCanvas() {
  const [lost, setLost] = useState(false)

  if (lost) return null

  return (
    <Canvas
      dpr={[1, 1.5]}
      camera={{ position: [0, 0, 4.4], fov: 38 }}
      gl={{ antialias: true, alpha: true }}
      onCreated={({ gl }) => {
        gl.domElement.addEventListener('webglcontextlost', (e) => {
          e.preventDefault()
          setLost(true)
        })
      }}
    >
      <ambientLight intensity={0.6} />
      <directionalLight position={[2, 3, 4]} intensity={1.1} />
      <directionalLight position={[-3, -1, -2]} intensity={0.4} color="#4c8dff" />
      <Suspense fallback={null}>
        <DeviceShowcase images={SCREENSHOTS} reduceMotion={false} cycleInterval={2400} />
        <ContactShadows
          position={[0, -1.55, 0]}
          opacity={0.5}
          scale={5}
          blur={2.6}
          far={2}
          color="#000814"
        />
      </Suspense>
    </Canvas>
  )
}
