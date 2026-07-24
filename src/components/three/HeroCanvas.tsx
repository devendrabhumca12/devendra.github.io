import { useState } from 'react'
import { Canvas } from '@react-three/fiber'
import { FloatingDevice } from './FloatingDevice'

export function HeroCanvas() {
  const [lost, setLost] = useState(false)

  if (lost) return null

  return (
    <Canvas
      dpr={[1, 1.5]}
      camera={{ position: [0, 0, 4.2], fov: 40 }}
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
      <directionalLight position={[-3, -1, -2]} intensity={0.4} color="#4c8dff" />
      <FloatingDevice reduceMotion={false} />
    </Canvas>
  )
}
