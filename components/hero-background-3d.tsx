"use client"

import { useRef } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { Icosahedron } from "@react-three/drei"
import { Color } from "three"

function Scene() {
  const meshRef = useRef<THREE.Mesh>(null!)

  // Anima o objeto a cada frame
  useFrame((state, delta) => {
    if (meshRef.current) {
      // Rotação base
      meshRef.current.rotation.x += delta * 0.1
      meshRef.current.rotation.y += delta * 0.1

      // Interação com o mouse
      const { x, y } = state.mouse
      meshRef.current.rotation.x += y * delta * 0.2
      meshRef.current.rotation.y += x * delta * 0.2
    }
  })

  return (
    <>
      {/* Luz ambiente para iluminar a cena */}
      <ambientLight intensity={0.5} />
      {/* Luz direcional para criar reflexos */}
      <directionalLight position={[10, 10, 5]} intensity={1} />
      
      {/* O objeto 3D */}
      <Icosahedron ref={meshRef} args={[2, 0]}>
        <meshStandardMaterial wireframe wireframeLinewidth={0.5} color={new Color("hsl(var(--accent))")} />
      </Icosahedron>
    </>
  )
}

export function HeroBackground3D() {
  return (
    <div className="absolute inset-0 z-0 opacity-20">
      <Canvas>
        <Scene />
      </Canvas>
    </div>
  )
}