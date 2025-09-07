"use client"

import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Skills } from "@/components/skills"
import { Projects } from "@/components/projects"
import { Experience } from "@/components/experience"
import { LivePlayground } from "@/components/live-playground"
import { AdminDashboard } from "@/components/admin-dashboard"
import { Contact } from "@/components/contact"
import { Navigation } from "@/components/navigation"
import { LoadingScreen } from "@/components/loading-screen"
import { SmoothScroll } from "@/components/smooth-scroll"
import { CreativeCursor } from "@/components/creative-cursor"

export default function Home() {
  return (
    <>
      <LoadingScreen />
      <SmoothScroll />
      <CreativeCursor />
      <div className="min-h-screen bg-background">
        <Navigation />
        <main>
          <Hero />
          <div data-scroll>
            <About />
          </div>
          <div data-scroll>
            <Skills />
          </div>
          <div data-scroll>
            <Projects />
          </div>
          <div data-scroll>
            <LivePlayground />
          </div>
          <div data-scroll>
            <Experience />
          </div>
          
          <div data-scroll>
            <AdminDashboard />
          </div>
          <div data-scroll>
            <Contact />
          </div>
        </main>
      </div>
    </>
  )
}
