"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Canvas } from "@react-three/fiber"
import { OrbitControls, Box, MeshWobbleMaterial } from "@react-three/drei"
import { Suspense } from "react"
import { motion } from "framer-motion"

function AnimatedCube() {
  return (
    <Box args={[2, 2, 2]} rotation={[0.4, 0.2, 0]}>
      <MeshWobbleMaterial color="#f97316" attach="material" factor={1} speed={2} roughness={0} />
    </Box>
  )
}

export function About() {
  return (
    <section
      id="about"
      className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-background via-background/95 to-primary/5 relative overflow-hidden"
    >
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 bg-primary/20 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-secondary/20 rounded-full blur-xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-accent/10 rounded-full blur-2xl animate-pulse delay-500"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-balance mb-4 heading-display">About Me</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty text-body">
            Full Stack Developer specializing in enterprise PLM solutions and modern web technologies
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="w-full h-90 bg-muted rounded-lg mb-6 flex items-center justify-center relative overflow-hidden">
              <div className="absolute inset-0">
                <Canvas camera={{ position: [0, 0, 5] }}>
                  <Suspense fallback={null}>
                    <ambientLight intensity={0.5} />
                    <directionalLight position={[10, 10, 5]} intensity={1} />
                    <AnimatedCube />
                    <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={2} />
                  </Suspense>
                </Canvas>
              </div>
              <img
                src="/self.png"
                alt="Saurabh Mohite - Professional headshot"
                className="w-full h-full object-cover rounded-lg relative z-10"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <p className="text-base text-pretty leading-relaxed text-body">
              I'm a passionate Full Stack Developer with 2+ years of experience in PLM-aligned software solutions,
              specializing in integrating RESTful APIs, SAP, and microservices into scalable enterprise applications.
            </p>

            <p className="text-base text-pretty leading-relaxed text-body">
              I've led integration projects that enhanced customer satisfaction by over 40% and boosted system
              efficiency through microservices architecture. My background in Mechanical Engineering gives me a unique
              perspective on solving complex technical challenges.
            </p>

            <p className="text-base text-pretty leading-relaxed text-body">
              Currently working at Sanchi Solutions, I focus on building scalable web and mobile applications, creating
              reusable UI components, and orchestrating CI/CD pipelines using modern technologies like .NET Core,
              React.js, and Azure DevOps.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-6">
              <Card className="hover:scale-105 transition-transform duration-300 hover:shadow-lg">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-primary mb-2">10+</div>
                  <div className="text-sm text-muted-foreground">Projects Completed</div>
                </CardContent>
              </Card>
              <Card className="hover:scale-105 transition-transform duration-300 hover:shadow-lg">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-primary mb-2">2+</div>
                  <div className="text-sm text-muted-foreground">Years Experience</div>
                </CardContent>
              </Card>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
