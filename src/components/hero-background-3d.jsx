"use client"

import { useRef } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { Icosahedron } from "@react-three/drei"
import * as THREE from "three"

function Scene() {
  const meshRef = useRef(null)

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += delta * 0.1
      meshRef.current.rotation.y += delta * 0.1
      const { x, y } = state.mouse
      meshRef.current.rotation.x += y * delta * 0.2
      meshRef.current.rotation.y += x * delta * 0.2
    }
  })

  return (
    <>
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1} />
      <Icosahedron ref={meshRef} args={[2.5, 1]}>
        <meshStandardMaterial wireframe wireframeLinewidth={0.5} color={new THREE.Color("hsl(var(--accent))")} />
      </Icosahedron>
    </>
  )
}

export function HeroBackground3D() {
  return (
    <div className="w-full h-full">
      <Canvas>
        <Scene />
      </Canvas>
    </div>
  )
}