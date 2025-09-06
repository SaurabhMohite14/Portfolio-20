"use client"

import { motion } from "framer-motion"
import { Canvas } from "@react-three/fiber"
import { Float, Text3D, Center } from "@react-three/drei"
import { Suspense } from "react"

function FloatingCode() {
  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
      <Center>
        <Text3D font="/fonts/helvetiker_regular.typeface.json" size={0.3} height={0.05} curveSegments={12}>
          {"</>"}
          <meshStandardMaterial color="#60a5fa" />
        </Text3D>
      </Center>
    </Float>
  )
}

function FloatingReact() {
  return (
    <Float speed={1.5} rotationIntensity={1} floatIntensity={2}>
      <Center>
        <Text3D font="/fonts/helvetiker_regular.typeface.json" size={0.2} height={0.03} curveSegments={12}>
          React
          <meshStandardMaterial color="#a855f7" />
        </Text3D>
      </Center>
    </Float>
  )
}

export function FloatingElements() {
  return (
    <div className="absolute inset-0 w-full h-full pointer-events-none">
      {/* Floating particles */}
      <motion.div
        className="absolute top-20 left-10 w-2 h-2 bg-primary rounded-full"
        animate={{
          y: [0, -20, 0],
          opacity: [0.3, 1, 0.3],
        }}
        transition={{
          duration: 3,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute top-40 right-20 w-3 h-3 bg-secondary rounded-full"
        animate={{
          y: [0, -30, 0],
          x: [0, 10, 0],
          opacity: [0.5, 1, 0.5],
        }}
        transition={{
          duration: 4,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
          delay: 1,
        }}
      />

      <motion.div
        className="absolute bottom-40 left-20 w-1 h-1 bg-accent rounded-full"
        animate={{
          y: [0, -15, 0],
          opacity: [0.4, 1, 0.4],
        }}
        transition={{
          duration: 2.5,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
          delay: 0.5,
        }}
      />

      {/* 3D floating elements */}
      <div className="absolute top-32 right-32 w-32 h-32 opacity-60">
        <Canvas camera={{ position: [0, 0, 5] }}>
          <Suspense fallback={null}>
            <ambientLight intensity={0.5} />
            <pointLight position={[10, 10, 10]} />
            <FloatingCode />
          </Suspense>
        </Canvas>
      </div>

      <div className="absolute bottom-32 left-32 w-24 h-24 opacity-50">
        <Canvas camera={{ position: [0, 0, 5] }}>
          <Suspense fallback={null}>
            <ambientLight intensity={0.5} />
            <pointLight position={[10, 10, 10]} />
            <FloatingReact />
          </Suspense>
        </Canvas>
      </div>
    </div>
  )
}
