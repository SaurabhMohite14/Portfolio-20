"use client"

import { useEffect } from "react"

export function SmoothScroll() {
  useEffect(() => {
    const handleScroll = () => {
      const elements = document.querySelectorAll("[data-scroll]")

      elements.forEach((element) => {
        const rect = element.getBoundingClientRect()
        const isVisible = rect.top < window.innerHeight && rect.bottom > 0

        if (isVisible) {
          element.classList.add("animate-fade-in-up")
        }
      })
    }

    // Add smooth scroll CSS
    document.documentElement.style.scrollBehavior = "smooth"

    window.addEventListener("scroll", handleScroll)
    handleScroll() // Initial check

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return null
}
