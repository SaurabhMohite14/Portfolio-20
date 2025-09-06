"use client"

import type React from "react"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Code, Database, Server, Settings } from "lucide-react"
import { Canvas } from "@react-three/fiber"
import { OrbitControls, Torus, MeshDistortMaterial, Float } from "@react-three/drei"
import { Suspense } from "react"
import { motion } from "framer-motion"

function SkillTorus({ color }: { color: string }) {
  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={1}>
      <Torus args={[0.8, 0.3, 16, 100]} rotation={[0.5, 0.5, 0]}>
        <MeshDistortMaterial color={color} attach="material" distort={0.2} speed={1} roughness={0} />
      </Torus>
    </Float>
  )
}

function AnimatedSkillIcon({ icon, delay = 0 }: { icon: React.ReactNode; delay?: number }) {
  return (
    <motion.div
      initial={{ scale: 0, rotate: -180 }}
      whileInView={{ scale: 1, rotate: 0 }}
      transition={{
        duration: 0.8,
        delay,
        type: "spring",
        stiffness: 200,
        damping: 10,
      }}
      whileHover={{
        scale: 1.3,
        rotate: 360,
        transition: { duration: 0.6 },
      }}
      className="mx-auto mb-4 p-3 bg-primary/10 rounded-full w-fit group-hover:bg-primary/20 transition-all duration-300 hover:shadow-lg hover:shadow-primary/25"
    >
      <div className="text-primary">{icon}</div>
    </motion.div>
  )
}

export function Skills() {
  const skillCategories = [
    {
      title: "Languages & Frameworks",
      icon: <Code className="h-6 w-6" />,
      skills: ["C#", ".NET Core", "React.js", "JavaScript", "Java", "Python", "HTML/CSS", "jQuery"],
      color: "#06b6d4",
    },
    {
      title: "Database & Cloud",
      icon: <Database className="h-6 w-6" />,
      skills: ["SQL Server", "PostgreSQL", "MySQL", "MongoDB", "Azure", "AWS", "Cloud Integration"],
      color: "#f97316",
    },
    {
      title: "Tools & Platforms",
      icon: <Server className="h-6 w-6" />,
      skills: ["Git", "Docker", "Jenkins", "Jira", "Visual Studio", "RESTful APIs", "Microservices"],
      color: "#8b5cf6",
    },
    {
      title: "PLM & Enterprise",
      icon: <Settings className="h-6 w-6" />,
      skills: ["SolidWorks", "ENOVIA", "DELMIA", "CATIA", "SAP Integration", "Agile Development"],
      color: "#10b981",
    },
  ]

  return (
    <section
      id="skills"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-muted/20 via-primary/5 to-secondary/10 relative overflow-hidden"
    >
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 bg-primary/30 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-secondary/30 rounded-full blur-xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-accent/20 rounded-full blur-lg animate-pulse delay-500"></div>
        <Canvas camera={{ position: [0, 0, 10] }}>
          <Suspense fallback={null}>
            <ambientLight intensity={0.5} />
            <directionalLight position={[10, 10, 5]} intensity={1} />
            <SkillTorus color="#06b6d4" />
            <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.5} />
          </Suspense>
        </Canvas>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-balance mb-4 heading-display">Skills & Expertise</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty text-body">
            Technologies and tools I use to build enterprise-grade solutions
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
            >
              <Card className="h-full hover:scale-105 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 group bg-card/80 backdrop-blur-sm border-border/50">
                <CardHeader className="text-center pb-4">
                  <AnimatedSkillIcon icon={category.icon} delay={index * 0.2} />
                  <CardTitle className="text-lg heading-modern">{category.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.div
                        key={skillIndex}
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{
                          duration: 0.4,
                          delay: index * 0.1 + skillIndex * 0.05,
                        }}
                        whileHover={{ scale: 1.1 }}
                      >
                        <Badge
                          variant="secondary"
                          className="text-xs hover:bg-primary/20 hover:text-primary transition-all duration-300 cursor-default"
                        >
                          {skill}
                        </Badge>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
