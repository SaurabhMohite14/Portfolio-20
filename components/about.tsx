"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Canvas } from "@react-three/fiber"
import { OrbitControls, Box, MeshWobbleMaterial } from "@react-three/drei"
import { Suspense } from "react"
import { motion } from "framer-motion"
import { GraduationCap, Award, BookOpen, Code } from "lucide-react"

function AnimatedCube() {
  return (
    <Box args={[2, 2, 2]} rotation={[0.4, 0.2, 0]}>
      <MeshWobbleMaterial color="#f97316" attach="material" factor={1} speed={2} roughness={0} />
    </Box>
  )
}

function AnimatedIcon({ icon: Icon, delay = 0 }: { icon: any; delay?: number }) {
  return (
    <motion.div
      initial={{ scale: 0, rotate: -180 }}
      animate={{ scale: 1, rotate: 0 }}
      transition={{
        duration: 0.8,
        delay,
        type: "spring",
        stiffness: 200,
        damping: 10,
      }}
      whileHover={{
        scale: 1.2,
        rotate: 360,
        transition: { duration: 0.5 },
      }}
      className="p-4 bg-primary/10 rounded-full border-2 border-primary/20 hover:border-primary/50 transition-all duration-300"
    >
      <Icon className="h-8 w-8 text-primary" />
    </motion.div>
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

        <div className="grid md:grid-cols-2 gap-8 items-center mb-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="w-full h-80 bg-muted rounded-lg mb-6 flex items-center justify-center relative overflow-hidden">
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
                src="/professional-developer-headshot.png"
                alt="Saurabh Mohite - Professional headshot"
                className="w-full h-full object-cover rounded-lg relative z-10"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-4"
          >
            <p className="text-base text-pretty leading-relaxed text-body">
              I'm a passionate Full Stack Developer with 2+ years of experience in PLM-aligned software solutions,
              specializing in integrating RESTful APIs, SAP, and microservices into scalable enterprise applications.
            </p>

            <p className="text-base text-pretty leading-relaxed text-body">
              I've led integration projects that enhanced customer satisfaction by over 40% and boosted system
              efficiency through microservices architecture. My background in Mechanical Engineering gives me a unique
              perspective.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-4">
              <Card className="hover:scale-105 transition-transform">
                <CardContent className="p-4 text-center">
                  <div className="text-2xl font-bold text-primary mb-1">10+</div>
                  <div className="text-xs text-muted-foreground">Projects Completed</div>
                </CardContent>
              </Card>
              <Card className="hover:scale-105 transition-transform">
                <CardContent className="p-4 text-center">
                  <div className="text-2xl font-bold text-primary mb-1">2+</div>
                  <div className="text-xs text-muted-foreground">Years Experience</div>
                </CardContent>
              </Card>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-12"
        >
          <h3 className="text-2xl font-bold text-center mb-8 heading-display">Education</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-lg p-6 hover:shadow-lg transition-all duration-300"
            >
              <div className="flex items-center gap-4 mb-4">
                <AnimatedIcon icon={GraduationCap} delay={0.2} />
                <div>
                  <h4 className="font-semibold text-lg heading-modern">Post Graduation Diploma</h4>
                  <p className="text-primary font-medium">Advanced Computing - CDAC</p>
                  <p className="text-sm text-muted-foreground">March 2023 - September 2023</p>
                </div>
              </div>
              <div className="mt-4 space-y-2">
                <p className="text-sm text-muted-foreground">
                  <strong>Core Modules:</strong> Full Stack Development, Database Management, System Design
                </p>
                <p className="text-sm text-muted-foreground">
                  <strong>Technologies:</strong> Java, J2EE, React.js, Spring Boot, Microservices, REST APIs
                </p>
                <p className="text-sm text-muted-foreground">
                  <strong>Projects:</strong> Smart Exam Portal, Video Calling App with WebRTC
                </p>
                <div className="flex flex-wrap gap-2 mt-3">
                  <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full">Full Stack</span>
                  <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full">Microservices</span>
                  <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full">System Design</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-lg p-6 hover:shadow-lg transition-all duration-300"
            >
              <div className="flex items-center gap-4 mb-4">
                <AnimatedIcon icon={BookOpen} delay={0.4} />
                <div>
                  <h4 className="font-semibold text-lg heading-modern">Bachelor of Engineering</h4>
                  <p className="text-primary font-medium">Mechanical Engineering - Pune University</p>
                  <p className="text-sm text-muted-foreground">June 2018 - May 2022</p>
                </div>
              </div>
              <div className="mt-4 space-y-2">
                <p className="text-sm text-muted-foreground">
                  <strong>Specialization:</strong> Manufacturing Systems, CAD/CAM, Industrial Automation
                </p>
                <p className="text-sm text-muted-foreground">
                  <strong>Key Skills:</strong> Problem Solving, System Analysis, Process Optimization
                </p>
                <p className="text-sm text-muted-foreground">
                  <strong>Foundation:</strong> Strong analytical thinking and systematic approach to complex problems
                </p>
                <div className="flex flex-wrap gap-2 mt-3">
                  <span className="px-2 py-1 bg-secondary/10 text-secondary text-xs rounded-full">CAD Design</span>
                  <span className="px-2 py-1 bg-secondary/10 text-secondary text-xs rounded-full">Analytics</span>
                  <span className="px-2 py-1 bg-secondary/10 text-secondary text-xs rounded-full">Process Design</span>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h3 className="text-2xl font-bold text-center mb-8 heading-display">Certifications</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-lg p-6 hover:shadow-lg transition-all duration-300"
            >
              <div className="flex items-center gap-4 mb-4">
                <AnimatedIcon icon={Award} delay={0.6} />
                <div>
                  <h4 className="font-semibold text-lg heading-modern">3DExperience Engineer</h4>
                  <p className="text-primary font-medium">SolidWorks, Enovia, Delmia</p>
                  <p className="text-sm text-muted-foreground">PLM & Manufacturing Process Planning</p>
                </div>
              </div>
              <div className="mt-4 space-y-2">
                <p className="text-sm text-muted-foreground">
                  <strong>Expertise:</strong> Product Lifecycle Management, 3D Design, Manufacturing Simulation
                </p>
                <p className="text-sm text-muted-foreground">
                  <strong>Tools Mastered:</strong> SolidWorks CAD, ENOVIA PLM, DELMIA Manufacturing
                </p>
                <p className="text-sm text-muted-foreground">
                  <strong>Applications:</strong> Enterprise PLM workflows, collaborative 3D design, process planning
                </p>
                <div className="flex flex-wrap gap-2 mt-3">
                  <span className="px-2 py-1 bg-accent/10 text-accent text-xs rounded-full">PLM Systems</span>
                  <span className="px-2 py-1 bg-accent/10 text-accent text-xs rounded-full">3D Modeling</span>
                  <span className="px-2 py-1 bg-accent/10 text-accent text-xs rounded-full">Manufacturing</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-lg p-6 hover:shadow-lg transition-all duration-300"
            >
              <div className="flex items-center gap-4 mb-4">
                <AnimatedIcon icon={Code} delay={0.8} />
                <div>
                  <h4 className="font-semibold text-lg heading-modern">Programming with Python</h4>
                  <p className="text-primary font-medium">Internshala Certification</p>
                  <p className="text-sm text-muted-foreground">Python Fundamentals & OOP</p>
                </div>
              </div>
              <div className="mt-4 space-y-2">
                <p className="text-sm text-muted-foreground">
                  <strong>Curriculum:</strong> Python fundamentals, control structures, functions, OOP concepts
                </p>
                <p className="text-sm text-muted-foreground">
                  <strong>Practical Skills:</strong> File handling, data structures, algorithm implementation
                </p>
                <p className="text-sm text-muted-foreground">
                  <strong>Projects:</strong> Hands-on project work with real-world applications
                </p>
                <div className="flex flex-wrap gap-2 mt-3">
                  <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full">Python</span>
                  <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full">OOP</span>
                  <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full">Data Structures</span>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
