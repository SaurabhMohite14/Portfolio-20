"use client"

import { Button } from "@/components/ui/button"
import { ArrowDown, Github, Linkedin, Mail, Download } from "lucide-react"
import { Canvas } from "@react-three/fiber"
import { Float } from "@react-three/drei"
import { Suspense, useState, useEffect } from "react"
import { motion } from "framer-motion"
import { FloatingElements } from "./floating-elements"

function AnimatedWords({ words, delay = 0 }: { words: string[]; delay?: number }) {
  return (
    <div className="flex flex-wrap gap-2">
      {words.map((word, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0, y: 20, rotateX: 90 }}
          animate={{ opacity: 1, y: 0, rotateX: 0 }}
          transition={{
            duration: 0.6,
            delay: delay + index * 0.05,
            type: "spring",
            stiffness: 100,
          }}
          className="inline-block"
        >
          {word}
        </motion.span>
      ))}
    </div>
  )
}

function TypewriterText({ text, delay = 0 }: { text: string; delay?: number }) {
  const [displayText, setDisplayText] = useState("")
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const timer = setTimeout(
      () => {
        if (currentIndex < text.length) {
          setDisplayText((prev) => prev + text[currentIndex])
          setCurrentIndex((prev) => prev + 1)
        }
      },
      delay + currentIndex * 50,
    )

    return () => clearTimeout(timer)
  }, [currentIndex, text, delay])

  return (
    <span className="inline-block">
      {displayText}
      <span className="animate-pulse text-primary">|</span>
    </span>
  )
}

export function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 relative overflow-hidden gradient-dark"
    >
      <div className="absolute inset-0 w-full h-full opacity-30">
        <Canvas camera={{ position: [0, 0, 5] }}>
          <Suspense fallback={null}>
            <ambientLight intensity={0.4} />
            <directionalLight position={[10, 10, 5]} intensity={0.8} />
            <pointLight position={[-10, -10, -5]} color="#a855f7" intensity={0.6} />
            <spotLight position={[0, 10, 0]} color="#3b82f6" intensity={0.5} />

            <Float speed={1.2} rotationIntensity={0.8} floatIntensity={1.5}>
              <mesh position={[-2, 1, 0]} rotation={[0, 0, Math.PI / 4]}>
                <boxGeometry args={[0.8, 0.8, 0.8]} />
                <meshStandardMaterial color="#3b82f6" transparent opacity={0.7} />
              </mesh>
            </Float>

            <Float speed={1.8} rotationIntensity={1.2} floatIntensity={2}>
              <mesh position={[2, -1, -1]} rotation={[Math.PI / 3, 0, 0]}>
                <octahedronGeometry args={[0.6]} />
                <meshStandardMaterial color="#a855f7" transparent opacity={0.6} />
              </mesh>
            </Float>

            <Float speed={0.8} rotationIntensity={0.5} floatIntensity={1}>
              <mesh position={[0, 2, -2]}>
                <tetrahedronGeometry args={[0.5]} />
                <meshStandardMaterial color="#06b6d4" transparent opacity={0.5} />
              </mesh>
            </Float>
          </Suspense>
        </Canvas>
      </div>

      <FloatingElements />

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center lg:text-left"
        >
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-6"
          >
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-lg sm:text-xl text-secondary font-medium block mb-2 text-body"
            >
              👋 Hello, I'm
            </motion.span>
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-balance heading-display">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 0.5 }}
                className="relative inline-block"
              >
                <motion.span
                  className="text-blue-400 relative inline-block"
                  animate={{
                    scale: [1, 1.02, 1],
                  }}
                  transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
                  style={{
                    background: "linear-gradient(45deg, #60a5fa, #a855f7)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                    color: "#60a5fa", // fallback color
                  }}
                >
                  <AnimatedWords words={["Saurabh", "Mohite"]} delay={0.8} />
                </motion.span>
                <motion.div
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.8, delay: 1.5 }}
                  className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-secondary origin-left animate-text-shimmer"
                />
              </motion.div>
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mb-8"
          >
            <h2 className="text-xl sm:text-2xl text-muted-foreground text-balance heading-modern">
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: 1.8 }}>
                <TypewriterText text="Full Stack Developer & PLM Solutions Expert" delay={2000} />
              </motion.div>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mb-8"
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 2.5 }}
              className="text-lg text-muted-foreground max-w-2xl text-body leading-relaxed"
            >
              <AnimatedWords
                words={[
                  "2+",
                  "years",
                  "of",
                  "experience",
                  "building",
                  "scalable",
                  "enterprise",
                  "solutions",
                  "with",
                  "modern",
                  "technologies",
                ]}
                delay={3}
              />
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center mb-12"
          >
            <Button
              size="lg"
              onClick={() => scrollToSection("projects")}
              className="text-lg px-8 py-3 hover:scale-105 transition-all duration-300 glow-blue bg-primary hover:bg-primary/90 group"
            >
              <span>View My Work</span>
              <ArrowDown className="ml-2 h-4 w-4 group-hover:translate-y-1 transition-transform" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="text-lg px-8 py-3 bg-transparent border-secondary text-secondary hover:bg-secondary/10 hover:scale-105 transition-all duration-300 group"
            >
              <Download className="mr-2 h-4 w-4 group-hover:scale-110 transition-transform" />
              <span>Download Resume</span>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="flex justify-center lg:justify-start space-x-6 mb-12"
          >
            <motion.div whileHover={{ scale: 1.2, rotate: 5 }} whileTap={{ scale: 0.9 }}>
              <Button
                variant="ghost"
                size="sm"
                className="p-3 hover:text-primary transition-all duration-300 hover:bg-primary/10 rounded-full"
              >
                <Github className="h-6 w-6" />
                <span className="sr-only">GitHub</span>
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.2, rotate: -5 }} whileTap={{ scale: 0.9 }}>
              <Button
                variant="ghost"
                size="sm"
                className="p-3 hover:text-primary transition-all duration-300 hover:bg-primary/10 rounded-full"
              >
                <Linkedin className="h-6 w-6" />
                <span className="sr-only">LinkedIn</span>
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.2, rotate: 5 }} whileTap={{ scale: 0.9 }}>
              <Button
                variant="ghost"
                size="sm"
                className="p-3 hover:text-secondary transition-all duration-300 hover:bg-secondary/10 rounded-full"
              >
                <Mail className="h-6 w-6" />
                <span className="sr-only">Email</span>
              </Button>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="flex justify-center lg:justify-start"
          >
            <Button
              variant="ghost"
              size="sm"
              onClick={() => scrollToSection("about")}
              className="animate-bounce hover:text-secondary transition-colors duration-300 group"
            >
              <ArrowDown className="h-6 w-6 group-hover:translate-y-1 transition-transform" />
              <span className="sr-only">Scroll to about section</span>
            </Button>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50, scale: 0.8 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex justify-center lg:justify-end relative"
        >
          <motion.div
            animate={{
              y: [0, -10, 0],
            }}
            transition={{
              duration: 4,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
            className="relative"
          >
            <div className="relative w-80 h-96 sm:w-96 sm:h-[28rem] lg:w-[28rem] lg:h-[32rem]">
              <motion.img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ChatGPT_Image_Sep_7__2025_at_11_50_43_AM-removebg-preview-Y7AIrz8Zj2FcPqZjhHRQCGeMKJ02Cr.png"
                alt="Saurabh Mohite - Full Stack Developer Action Figure"
                className="w-full h-full object-contain rounded-2xl shadow-2xl"
                whileHover={{
                  scale: 1.05,
                  rotateY: 5,
                  rotateX: 5,
                }}
                transition={{ duration: 0.3 }}
              />
              {/* Glow effect behind the image */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-2xl blur-xl -z-10 animate-pulse" />
              {/* Floating particles around the image */}
              <motion.div
                className="absolute -top-4 -right-4 w-3 h-3 bg-primary rounded-full"
                animate={{
                  y: [0, -20, 0],
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: 3,
                  repeat: Number.POSITIVE_INFINITY,
                  delay: 0,
                }}
              />
              <motion.div
                className="absolute -bottom-4 -left-4 w-2 h-2 bg-secondary rounded-full"
                animate={{
                  y: [0, -15, 0],
                  opacity: [0.3, 0.8, 0.3],
                }}
                transition={{
                  duration: 4,
                  repeat: Number.POSITIVE_INFINITY,
                  delay: 1,
                }}
              />
              <motion.div
                className="absolute top-1/2 -right-6 w-1.5 h-1.5 bg-accent rounded-full"
                animate={{
                  x: [0, 10, 0],
                  opacity: [0.4, 1, 0.4],
                }}
                transition={{
                  duration: 2.5,
                  repeat: Number.POSITIVE_INFINITY,
                  delay: 0.5,
                }}
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
