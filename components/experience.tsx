import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CalendarDays, MapPin, Briefcase, GraduationCap, Award, ChevronRight } from "lucide-react"
import { Canvas } from "@react-three/fiber"
import { OrbitControls, Cone, Float } from "@react-three/drei"
import { Suspense } from "react"

function ExperienceCone() {
  return (
    <Float speed={1} rotationIntensity={0.3} floatIntensity={0.5}>
      <Cone args={[1, 2, 8]} rotation={[0, 0, 0]}>
        <meshPhongMaterial color="#10b981" />
      </Cone>
    </Float>
  )
}

export function Experience() {
  const experiences = [
    {
      title: "Full Stack Developer",
      company: "Sanchi Solutions Pvt. Ltd",
      location: "India",
      period: "01/2024 - Present",
      description:
        "Collaborate with cross-functional teams to build scalable Web and Mobile applications aligned with product lifecycle workflows. Created reusable UI components increasing user engagement by 30% and boosted system efficiency by 40% through RESTful API engineering and microservices architecture.",
      technologies: [".NET Core", "React.js", "Azure", "PostgreSQL", "SAP Integration", "Jenkins"],
      achievements: [
        "Increased user engagement by 30%",
        "Boosted system efficiency by 40%",
        "Enhanced customer satisfaction by 40%",
      ],
    },
    {
      title: "Freelance Developer",
      company: "Freelance",
      location: "Remote",
      period: "01/2022 - 12/2023",
      description:
        "Designed web-based management systems and acted as both frontend and backend developer. Built logistics integration platforms, gym management systems, and education management platforms with cross-device accessibility.",
      technologies: ["React.js", "Java", "J2EE", "MySQL", "API Integration"],
      achievements: [
        "Built 5+ complete applications",
        "Integrated multiple third-party APIs",
        "Delivered cross-platform solutions",
      ],
    },
  ]

  const education = [
    {
      degree: "Post Graduation Diploma - Advanced Computing",
      school: "CDAC (Centre for Development of Advanced Computing)",
      location: "India",
      period: "03/2023 - 09/2023",
      description:
        "Intensive program covering advanced software development, full-stack technologies, and modern computing practices.",
      achievements: ["Smart Exam Portal Project", "Video Calling App Development"],
    },
    {
      degree: "Bachelor of Engineering - Mechanical Engineering",
      school: "Pune University",
      location: "Pune, India",
      period: "06/2018 - 05/2022",
      description:
        "Engineering degree with focus on mechanical systems, providing strong analytical and problem-solving foundation for software development.",
      achievements: ["Engineering Fundamentals", "Problem-solving Skills", "Technical Analysis"],
    },
  ]

  const certifications = [
    {
      title: "3DExperience Engineer Certification",
      description:
        "Trained in SolidWorks, Enovia, Delmia, and the 3DEXPERIENCE platform. Acquired practical skills for PLM, manufacturing process planning, and collaborative 3D design.",
      technologies: ["SolidWorks", "ENOVIA", "DELMIA", "3DEXPERIENCE"],
    },
    {
      title: "Programming with Python – Internshala",
      description:
        "Completed training covering Python fundamentals, control structures, functions, OOP, and file handling with hands-on project work.",
      technologies: ["Python", "OOP", "File Handling"],
    },
  ]

  return (
    <section
      id="experience"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-background via-muted/20 to-background relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-secondary/5"></div>
      <div className="absolute top-20 right-10 w-32 h-32 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-40 left-20 w-24 h-24 bg-secondary/10 rounded-full blur-2xl animate-pulse delay-1000"></div>

      <div className="absolute bottom-20 left-10 w-24 h-24 opacity-20">
        <Canvas camera={{ position: [0, 0, 5] }}>
          <Suspense fallback={null}>
            <ambientLight intensity={0.5} />
            <directionalLight position={[10, 10, 5]} intensity={1} />
            <ExperienceCone />
            <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={2} />
          </Suspense>
        </Canvas>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2
            className="text-3xl sm:text-4xl font-bold text-balance mb-4 text-blue-400"
            style={{
              background: "linear-gradient(to right, #60a5fa, #c084fc)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              color: "#60a5fa", // fallback color
            }}
          >
            Professional Journey
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            My career timeline showcasing growth in full-stack development and enterprise solutions
          </p>
        </div>

        <div className="space-y-16">
          <div>
            <div className="flex items-center justify-center mb-12">
              <div className="flex items-center gap-3 bg-primary/10 px-6 py-3 rounded-full">
                <Briefcase className="h-6 w-6 text-primary" />
                <h3 className="text-2xl font-semibold">Work Experience</h3>
              </div>
            </div>

            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-primary/50 to-transparent"></div>

              <div className="space-y-12">
                {experiences.map((exp, index) => (
                  <div key={index} className="relative flex items-start gap-8 group">
                    {/* Timeline dot */}
                    <div className="relative z-10 flex-shrink-0">
                      <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                        <Briefcase className="h-8 w-8 text-white" />
                      </div>
                      {/* Connecting line to card */}
                      <div className="absolute top-8 left-16 w-8 h-0.5 bg-gradient-to-r from-primary to-transparent"></div>
                    </div>

                    {/* Content card */}
                    <div className="flex-1 min-w-0">
                      <Card className="hover:shadow-xl transition-all duration-500 hover:scale-[1.02] border-l-4 border-l-primary group-hover:border-l-secondary">
                        <CardHeader className="pb-4">
                          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                            <div className="space-y-2">
                              <CardTitle className="text-xl lg:text-2xl flex items-center gap-2">
                                {exp.title}
                                <ChevronRight className="h-5 w-5 text-primary group-hover:translate-x-1 transition-transform" />
                              </CardTitle>
                              <CardDescription className="text-lg font-medium text-primary">
                                {exp.company}
                              </CardDescription>
                            </div>
                            <div className="flex flex-col lg:items-end gap-2">
                              <div className="flex items-center text-sm text-muted-foreground bg-muted/50 px-3 py-1 rounded-full">
                                <CalendarDays className="h-4 w-4 mr-2" />
                                {exp.period}
                              </div>
                              <div className="flex items-center text-sm text-muted-foreground bg-muted/50 px-3 py-1 rounded-full">
                                <MapPin className="h-4 w-4 mr-2" />
                                {exp.location}
                              </div>
                            </div>
                          </div>
                        </CardHeader>
                        <CardContent className="space-y-6">
                          <p className="text-pretty leading-relaxed text-muted-foreground">{exp.description}</p>

                          <div className="space-y-3">
                            <h4 className="font-semibold text-sm flex items-center gap-2">
                              <Award className="h-4 w-4 text-primary" />
                              Key Achievements:
                            </h4>
                            <div className="grid gap-2">
                              {exp.achievements.map((achievement, achIndex) => (
                                <div key={achIndex} className="flex items-center gap-3 text-sm">
                                  <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                                  <span className="text-muted-foreground">{achievement}</span>
                                </div>
                              ))}
                            </div>
                          </div>

                          <div className="space-y-3">
                            <h4 className="font-semibold text-sm">Technologies:</h4>
                            <div className="flex flex-wrap gap-2">
                              {exp.technologies.map((tech, techIndex) => (
                                <Badge
                                  key={techIndex}
                                  variant="secondary"
                                  className="text-xs hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-105"
                                >
                                  {tech}
                                </Badge>
                              ))}
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div>
            <div className="flex items-center justify-center mb-12">
              <div className="flex items-center gap-3 bg-secondary/10 px-6 py-3 rounded-full">
                <GraduationCap className="h-6 w-6 text-secondary" />
                <h3 className="text-2xl font-semibold">Education</h3>
              </div>
            </div>

            <div className="relative">
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-secondary via-secondary/50 to-transparent"></div>

              <div className="space-y-12">
                {education.map((edu, index) => (
                  <div key={index} className="relative flex items-start gap-8 group">
                    <div className="relative z-10 flex-shrink-0">
                      <div className="w-16 h-16 bg-gradient-to-br from-secondary to-primary rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                        <GraduationCap className="h-8 w-8 text-white" />
                      </div>
                      <div className="absolute top-8 left-16 w-8 h-0.5 bg-gradient-to-r from-secondary to-transparent"></div>
                    </div>

                    <div className="flex-1 min-w-0">
                      <Card className="hover:shadow-xl transition-all duration-500 hover:scale-[1.02] border-l-4 border-l-secondary group-hover:border-l-primary">
                        <CardHeader className="pb-4">
                          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                            <div className="space-y-2">
                              <CardTitle className="text-xl lg:text-2xl flex items-center gap-2">
                                {edu.degree}
                                <ChevronRight className="h-5 w-5 text-secondary group-hover:translate-x-1 transition-transform" />
                              </CardTitle>
                              <CardDescription className="text-lg font-medium text-secondary">
                                {edu.school}
                              </CardDescription>
                            </div>
                            <div className="flex flex-col lg:items-end gap-2">
                              <div className="flex items-center text-sm text-muted-foreground bg-muted/50 px-3 py-1 rounded-full">
                                <CalendarDays className="h-4 w-4 mr-2" />
                                {edu.period}
                              </div>
                              <div className="flex items-center text-sm text-muted-foreground bg-muted/50 px-3 py-1 rounded-full">
                                <MapPin className="h-4 w-4 mr-2" />
                                {edu.location}
                              </div>
                            </div>
                          </div>
                        </CardHeader>
                        <CardContent className="space-y-6">
                          <p className="text-pretty leading-relaxed text-muted-foreground">{edu.description}</p>
                          <div className="space-y-3">
                            <h4 className="font-semibold text-sm">Key Learnings:</h4>
                            <div className="flex flex-wrap gap-2">
                              {edu.achievements.map((achievement, achIndex) => (
                                <Badge
                                  key={achIndex}
                                  variant="outline"
                                  className="text-xs hover:bg-secondary hover:text-secondary-foreground transition-all duration-300 hover:scale-105"
                                >
                                  {achievement}
                                </Badge>
                              ))}
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div>
            <div className="flex items-center justify-center mb-12">
              <div className="flex items-center gap-3 bg-accent/10 px-6 py-3 rounded-full">
                <Award className="h-6 w-6 text-accent-foreground" />
                <h3 className="text-2xl font-semibold">Certifications</h3>
              </div>
            </div>

            <div className="relative">
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-accent via-accent/50 to-transparent"></div>

              <div className="space-y-12">
                {certifications.map((cert, index) => (
                  <div key={index} className="relative flex items-start gap-8 group">
                    <div className="relative z-10 flex-shrink-0">
                      <div className="w-16 h-16 bg-gradient-to-br from-accent to-primary rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                        <Award className="h-8 w-8 text-white" />
                      </div>
                      <div className="absolute top-8 left-16 w-8 h-0.5 bg-gradient-to-r from-accent to-transparent"></div>
                    </div>

                    <div className="flex-1 min-w-0">
                      <Card className="hover:shadow-xl transition-all duration-500 hover:scale-[1.02] border-l-4 border-l-accent group-hover:border-l-primary">
                        <CardHeader className="pb-4">
                          <CardTitle className="text-xl lg:text-2xl flex items-center gap-2">
                            {cert.title}
                            <ChevronRight className="h-5 w-5 text-accent group-hover:translate-x-1 transition-transform" />
                          </CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-6">
                          <p className="text-pretty leading-relaxed text-muted-foreground">{cert.description}</p>
                          <div className="space-y-3">
                            <h4 className="font-semibold text-sm">Technologies:</h4>
                            <div className="flex flex-wrap gap-2">
                              {cert.technologies.map((tech, techIndex) => (
                                <Badge
                                  key={techIndex}
                                  variant="secondary"
                                  className="text-xs hover:bg-accent hover:text-accent-foreground transition-all duration-300 hover:scale-105"
                                >
                                  {tech}
                                </Badge>
                              ))}
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
