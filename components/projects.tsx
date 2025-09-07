import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github } from "lucide-react"
import { Canvas } from "@react-three/fiber"
import { OrbitControls, Cylinder, Float } from "@react-three/drei"
import { Suspense } from "react"

function ProjectCylinder() {
  return (
    <Float speed={1.5} rotationIntensity={0.5} floatIntensity={1}>
      <Cylinder args={[1, 1, 2, 8]} rotation={[0, 0, 0.5]}>
        <meshLambertMaterial color="#8b5cf6" />
      </Cylinder>
    </Float>
  )
}

export function Projects() {
  const projects = [
    {
      title: "CRM Portal for Manufacturing Enterprise",
      description:
        "Designed and deployed a role-based CRM system integrated with SAP for real-time inventory management. Features customizable dashboards, dynamic role matrix, and seamless UI/UX for shop floor and management personnel.",
      image: "/crm-dashboard-manufacturing.jpg",
      technologies: [".NET Core", "React.js", "SAP Integration", "PostgreSQL", "Azure"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      title: "Financial Data Warehousing Platform",
      description:
        "Built a secure data management system for large-scale financial records with token-based authentication, 2FA, dynamic dashboards, and custom XBRL.NET-based package for XML import functionality.",
      image: "/financial-data-dashboard-analytics.jpg",
      technologies: ["C#", ".NET Core", "SQL Server", "XBRL.NET", "Azure"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      title: "LegalTech SaaS Application",
      description:
        "Engineered a subscription-based legal data access platform with advanced security layers, AI-powered chatbot, prompt-based Q&A functionality, and integrated payment gateway for international clients.",
      image: "/legal-tech-saas-platform.jpg",
      technologies: ["React.js", "AI Integration", "Payment Gateway", "JWT", "MongoDB"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      title: "Attendance & Employee Management App",
      description:
        "Built cross-platform system with web app and .NET MAUI mobile app, featuring geofencing, role-based access, location-specific attendance rules, and real-time reporting dashboards.",
      image: "/employee-attendance-mobile-app.jpg",
      technologies: [".NET MAUI", "React.js", "Geofencing", "SQL Server", "Azure"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      title: "On-Demand Logistics Integration Platform",
      description:
        "Engineered centralized logistics system integrating APIs from Zomato, Swiggy, BigBasket with automated rider allocation, dynamic payout calculation engine, and real-time tracking dashboards.",
      image: "/logistics-tracking-dashboard.png",
      technologies: ["Java", "J2EE", "React.js", "API Integration", "MySQL"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      title: "Smart Exam Portal",
      description:
        "Developed intuitive exam interface with React and ASP.NET backend, processing 100+ exams monthly with enhanced student experience and improved management efficiency.",
      image: "/online-exam-portal-interface.jpg",
      technologies: ["React.js", "ASP.NET", "SQL Server", "Azure"],
      liveUrl: "#",
      githubUrl: "#",
    },
  ]

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="absolute top-20 right-10 w-32 h-32 opacity-20">
        <Canvas camera={{ position: [0, 0, 5] }}>
          <Suspense fallback={null}>
            <ambientLight intensity={0.5} />
            <directionalLight position={[10, 10, 5]} intensity={1} />
            <ProjectCylinder />
            <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={1} />
          </Suspense>
        </Canvas>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-balance mb-4">Featured Projects</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Enterprise solutions and applications I've built throughout my career
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="overflow-hidden group hover:shadow-lg transition-all duration-300 hover:scale-[1.02]"
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={`${project.title} screenshot`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-xl group-hover:text-primary transition-colors">{project.title}</CardTitle>
                <CardDescription className="text-pretty">{project.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge
                      key={techIndex}
                      variant="outline"
                      className="text-xs hover:bg-primary hover:text-primary-foreground transition-colors"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
                {/* <div className="flex gap-3">
                  <Button size="sm" asChild className="hover:scale-105 transition-transform">
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Live Demo
                    </a>
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    asChild
                    className="hover:scale-105 transition-transform bg-transparent"
                  >
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="h-4 w-4 mr-2" />
                      Code
                    </a>
                  </Button>
                </div> */}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
