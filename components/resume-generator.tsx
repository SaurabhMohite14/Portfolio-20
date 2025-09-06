"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Download, FileText, Eye } from "lucide-react"

export function ResumeGenerator() {
  const [isGenerating, setIsGenerating] = useState(false)
  const [showPreview, setShowPreview] = useState(false)

  const resumeData = {
    name: "Saurabh Mohite",
    title: "Full Stack Developer",
    contact: {
      phone: "7448196608",
      email: "saurabhmohite2214@gmail.com",
      linkedin: "LinkedIn Profile",
    },
    summary:
      "Full Stack Developer with 2+ years of experience in PLM-aligned software solutions, integrating RESTful APIs, SAP, and microservices into scalable enterprise applications.",
    skills: {
      languages: ["C#", ".NET Core", "JavaScript", "React.js", "Python", "Java"],
      databases: ["SQL Server", "MySQL", "MongoDB", "PostgreSQL"],
      tools: ["Docker", "Jenkins", "Azure", "AWS", "Git", "Jira"],
      plm: ["SolidWorks", "ENOVIA", "DELMIA", "Catia"],
    },
    experience: [
      {
        title: "Full Stack Developer",
        company: "Sanchi Solutions Pvt. Ltd",
        period: "01/2024 - Present",
        achievements: [
          "Boosted system efficiency by 40% through RESTful API engineering",
          "Created reusable UI components increasing user engagement by 30%",
          "Integrated SAP APIs for real-time inventory sync",
        ],
      },
    ],
    education: [
      {
        degree: "Post Graduation Diploma - Advanced Computing",
        institution: "CDAC",
        period: "03/2023 - 09/2023",
      },
      {
        degree: "Bachelor of Engineering - Mechanical Engineering",
        institution: "Pune University",
        period: "06/2018 - 05/2022",
      },
    ],
    certifications: [
      "3DExperience Engineer Certification - SolidWorks, Enovia, Delmia",
      "Programming with Python - Internshala",
    ],
  }

  const generateResume = async () => {
    setIsGenerating(true)
    // Simulate resume generation with more realistic timing
    setTimeout(() => {
      setIsGenerating(false)
      setShowPreview(true)
    }, 1500)
  }

  const downloadResume = () => {
    const resumeContent = `
SAURABH MOHITE
Full Stack Developer
Phone: ${resumeData.contact.phone} | Email: ${resumeData.contact.email}

SUMMARY
${resumeData.summary}

TECHNICAL SKILLS
Languages & Frameworks: ${resumeData.skills.languages.join(", ")}
Databases: ${resumeData.skills.databases.join(", ")}
Tools & Platforms: ${resumeData.skills.tools.join(", ")}
PLM Software: ${resumeData.skills.plm.join(", ")}

PROFESSIONAL EXPERIENCE
${resumeData.experience
  .map(
    (exp) => `
${exp.title} - ${exp.company}
${exp.period}
${exp.achievements.map((achievement) => `• ${achievement}`).join("\n")}
`,
  )
  .join("\n")}

EDUCATION
${resumeData.education
  .map(
    (edu) => `
${edu.degree}
${edu.institution} | ${edu.period}
`,
  )
  .join("\n")}

CERTIFICATIONS
${resumeData.certifications.map((cert) => `• ${cert}`).join("\n")}
    `.trim()

    const element = document.createElement("a")
    const file = new Blob([resumeContent], { type: "text/plain" })
    element.href = URL.createObjectURL(file)
    element.download = "Saurabh_Mohite_Resume.txt"
    document.body.appendChild(element)
    element.click()
    document.body.removeChild(element)
  }

  return (
    <div className="mb-16">
      <Card className="bg-card/80 backdrop-blur-sm border-border shadow-lg">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-foreground">
            <FileText className="h-5 w-5 text-primary" />
            Interactive Resume Generator
          </CardTitle>
          <CardDescription className="text-muted-foreground">
            Generate a formatted resume from structured data - perfect for ATS systems and quick sharing
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="flex flex-wrap gap-4">
            <Button
              onClick={generateResume}
              disabled={isGenerating}
              className="bg-primary hover:bg-primary/90 text-primary-foreground"
            >
              {isGenerating ? (
                <>
                  <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                  Generating...
                </>
              ) : (
                "Generate Resume"
              )}
            </Button>
            <Button
              variant="outline"
              onClick={() => setShowPreview(!showPreview)}
              className="border-border hover:bg-accent"
            >
              <Eye className="h-4 w-4 mr-2" />
              {showPreview ? "Hide" : "Show"} Preview
            </Button>
            {showPreview && (
              <Button onClick={downloadResume} variant="secondary" className="bg-secondary hover:bg-secondary/80">
                <Download className="h-4 w-4 mr-2" />
                Download Resume
              </Button>
            )}
          </div>

          {showPreview && (
            <div className="bg-muted/50 p-6 rounded-lg border border-border backdrop-blur-sm">
              <div className="space-y-6">
                <div className="text-center border-b border-border pb-4">
                  <h1 className="text-2xl font-bold text-primary">{resumeData.name}</h1>
                  <p className="text-lg text-foreground">{resumeData.title}</p>
                  <div className="flex justify-center gap-4 mt-2 text-sm text-muted-foreground">
                    <span>{resumeData.contact.phone}</span>
                    <span>{resumeData.contact.email}</span>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-secondary-foreground mb-2">Summary</h3>
                  <p className="text-foreground text-sm leading-relaxed">{resumeData.summary}</p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-secondary-foreground mb-3">Skills</h3>
                  <div className="space-y-3">
                    <div>
                      <h4 className="text-sm font-medium text-muted-foreground mb-2">Languages & Frameworks</h4>
                      <div className="flex flex-wrap gap-2">
                        {resumeData.skills.languages.map((skill) => (
                          <Badge
                            key={skill}
                            variant="secondary"
                            className="bg-primary/10 text-primary border-primary/20"
                          >
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h4 className="text-sm font-medium text-muted-foreground mb-2">Databases & Tools</h4>
                      <div className="flex flex-wrap gap-2">
                        {[...resumeData.skills.databases, ...resumeData.skills.tools].map((skill) => (
                          <Badge
                            key={skill}
                            variant="outline"
                            className="border-accent-foreground/20 text-accent-foreground"
                          >
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-secondary-foreground mb-3">Experience</h3>
                  {resumeData.experience.map((exp, index) => (
                    <div key={index} className="border-l-2 border-primary pl-4">
                      <h4 className="font-semibold text-foreground">{exp.title}</h4>
                      <p className="text-primary text-sm">
                        {exp.company} • {exp.period}
                      </p>
                      <ul className="mt-2 space-y-1">
                        {exp.achievements.map((achievement, i) => (
                          <li key={i} className="text-sm text-muted-foreground">
                            • {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-secondary-foreground mb-3">Education</h3>
                  {resumeData.education.map((edu, index) => (
                    <div key={index} className="border-l-2 border-primary pl-4">
                      <h4 className="font-semibold text-foreground">{edu.degree}</h4>
                      <p className="text-primary text-sm">
                        {edu.institution} • {edu.period}
                      </p>
                    </div>
                  ))}
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-secondary-foreground mb-3">Certifications</h3>
                  <ul className="mt-2 space-y-1">
                    {resumeData.certifications.map((cert, i) => (
                      <li key={i} className="text-sm text-muted-foreground">
                        • {cert}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  )
}
