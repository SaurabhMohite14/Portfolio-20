"use client"

import { useEffect, useRef } from "react"
import { motion } from "framer-motion"

export function GhibliAvatar() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    canvas.width = 300
    canvas.height = 400

    let frame = 0
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Background glow
      const gradient = ctx.createRadialGradient(150, 200, 0, 150, 200, 200)
      gradient.addColorStop(0, "rgba(59, 130, 246, 0.1)")
      gradient.addColorStop(1, "rgba(168, 85, 247, 0.05)")
      ctx.fillStyle = gradient
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // Character silhouette with animation
      ctx.save()
      ctx.translate(150, 200)

      // Floating animation
      const floatY = Math.sin(frame * 0.02) * 5
      ctx.translate(0, floatY)

      // Head
      ctx.fillStyle = "#3b82f6"
      ctx.beginPath()
      ctx.arc(0, -80, 40, 0, Math.PI * 2)
      ctx.fill()

      // Body
      ctx.fillStyle = "#1e40af"
      ctx.fillRect(-25, -40, 50, 80)

      // Arms with slight movement
      const armSwing = Math.sin(frame * 0.03) * 5
      ctx.fillStyle = "#2563eb"
      ctx.fillRect(-40, -20 + armSwing, 15, 40)
      ctx.fillRect(25, -20 - armSwing, 15, 40)

      // Legs
      ctx.fillStyle = "#1d4ed8"
      ctx.fillRect(-20, 40, 15, 40)
      ctx.fillRect(5, 40, 15, 40)

      // Magical particles
      for (let i = 0; i < 8; i++) {
        const angle = frame * 0.01 + (i * Math.PI) / 4
        const x = Math.cos(angle) * (60 + Math.sin(frame * 0.02) * 10)
        const y = Math.sin(angle) * (60 + Math.cos(frame * 0.02) * 10)

        ctx.fillStyle = `rgba(168, 85, 247, ${0.6 + Math.sin(frame * 0.05 + i) * 0.4})`
        ctx.beginPath()
        ctx.arc(x, y, 3, 0, Math.PI * 2)
        ctx.fill()
      }

      ctx.restore()
      frame++
      requestAnimationFrame(animate)
    }

    animate()
  }, [])

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1, delay: 0.5 }}
      className="relative"
    >
      <canvas
        ref={canvasRef}
        className="rounded-2xl shadow-2xl border border-primary/20"
        style={{ filter: "drop-shadow(0 0 20px rgba(59, 130, 246, 0.3))" }}
      />
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
        className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-r from-primary to-secondary rounded-full opacity-60"
      />
    </motion.div>
  )
}
