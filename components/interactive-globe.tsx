"use client"

import { useRef, useMemo } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { Sphere, Line } from "@react-three/drei"
import type * as THREE from "three"

function NetworkVisualization() {
  const groupRef = useRef<THREE.Group>(null)

  const nodes = useMemo(() => {
    const temp = []
    for (let i = 0; i < 12; i++) {
      const angle = (i / 12) * Math.PI * 2
      const radius = 1.5 + Math.random() * 0.5
      const x = Math.cos(angle) * radius
      const y = (Math.random() - 0.5) * 2
      const z = Math.sin(angle) * radius
      temp.push({
        x,
        y,
        z,
        color: i % 3 === 0 ? "#60a5fa" : i % 3 === 1 ? "#c084fc" : "#10b981",
        scale: 0.8 + Math.random() * 0.4,
      })
    }
    return temp
  }, [])

  const connections = useMemo(() => {
    const temp: { start: [number, number, number]; end: [number, number, number]; opacity: number }[] = []
    for (let i = 0; i < nodes.length; i++) {
      for (let j = i + 1; j < nodes.length; j++) {
        const distance = Math.sqrt(
          Math.pow(nodes[i].x - nodes[j].x, 2) +
            Math.pow(nodes[i].y - nodes[j].y, 2) +
            Math.pow(nodes[i].z - nodes[j].z, 2),
        )
        if (distance < 2.5) {
          temp.push({
            start: [nodes[i].x, nodes[i].y, nodes[i].z],
            end: [nodes[j].x, nodes[j].y, nodes[j].z],
            opacity: 1 - distance / 2.5,
          })
        }
      }
    }
    return temp
  }, [nodes])

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.008
      groupRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.3) * 0.1
    }
  })

  return (
    <group ref={groupRef}>
      {/* Network Nodes */}
      {nodes.map((node, index) => (
        <Sphere key={index} args={[0.08, 16, 16]} position={[node.x, node.y, node.z]} scale={node.scale}>
          <meshBasicMaterial color={node.color} transparent opacity={0.9} />
        </Sphere>
      ))}

      {/* Connection Lines */}
      {connections.map((connection, index) => (
        <Line
          key={index}
          points={[connection.start, connection.end]}
          color="#60a5fa"
          lineWidth={1}
          transparent
          opacity={connection.opacity * 0.4}
        />
      ))}

      {/* Central Hub */}
      <Sphere args={[0.15, 32, 32]} position={[0, 0, 0]}>
        <meshBasicMaterial color="#ffffff" transparent opacity={0.8} />
      </Sphere>
    </group>
  )
}

function DataStreams() {
  const streamsRef = useRef<THREE.Group>(null)

  useFrame((state) => {
    if (streamsRef.current) {
      streamsRef.current.rotation.y -= 0.005
    }
  })

  const streams = useMemo(() => {
    const temp = []
    for (let i = 0; i < 8; i++) {
      const angle = (i / 8) * Math.PI * 2
      const radius = 2.5
      const x = Math.cos(angle) * radius
      const z = Math.sin(angle) * radius
      temp.push({ x, z, delay: i * 0.5 })
    }
    return temp
  }, [])

  return (
    <group ref={streamsRef}>
      {streams.map((stream, index) => (
        <mesh key={index} position={[stream.x, Math.sin(Date.now() * 0.001 + stream.delay) * 0.5, stream.z]}>
          <sphereGeometry args={[0.04, 8, 8]} />
          <meshBasicMaterial color="#10b981" transparent opacity={0.7} />
        </mesh>
      ))}
    </group>
  )
}

export function InteractiveGlobe() {
  return (
    <div className="w-full h-64 relative overflow-hidden rounded-lg bg-gradient-to-br from-slate-900 via-emerald-900/20 to-blue-900/20">
      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent z-10 pointer-events-none" />

      <Canvas camera={{ position: [0, 0, 4], fov: 45 }}>
        <ambientLight intensity={0.4} color="#60a5fa" />
        <pointLight position={[5, 5, 5]} intensity={1.2} color="#60a5fa" />
        <pointLight position={[-5, -5, -5]} intensity={0.8} color="#10b981" />
        <pointLight position={[0, 5, 0]} intensity={0.6} color="#c084fc" />

        <DataStreams />
        <NetworkVisualization />
      </Canvas>

      <div className="absolute inset-0 pointer-events-none">
        <svg className="w-full h-full opacity-20">
          <defs>
            <linearGradient id="dataGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#10b981" stopOpacity="0.8" />
              <stop offset="50%" stopColor="#60a5fa" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#c084fc" stopOpacity="0.4" />
            </linearGradient>
          </defs>
          <circle
            cx="50%"
            cy="50%"
            r="80"
            stroke="url(#dataGradient)"
            strokeWidth="1"
            fill="none"
            className="animate-pulse"
          />
          <circle
            cx="50%"
            cy="50%"
            r="120"
            stroke="url(#dataGradient)"
            strokeWidth="1"
            fill="none"
            className="animate-pulse"
            style={{ animationDelay: "1s" }}
          />
          <circle
            cx="50%"
            cy="50%"
            r="160"
            stroke="url(#dataGradient)"
            strokeWidth="1"
            fill="none"
            className="animate-pulse"
            style={{ animationDelay: "2s" }}
          />
        </svg>
      </div>
    </div>
  )
}
