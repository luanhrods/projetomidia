"use client"

import { useState, useEffect } from "react"
import { ArrowRight, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
    const handleMouseMove = (event: MouseEvent) => {
      setMousePosition({ x: event.clientX, y: event.clientY })
    }
    window.addEventListener("mousemove", handleMouseMove)
    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
    }
  }, [])

  let backgroundX = 0
  let backgroundY = 0
  let contentX = 0
  let contentY = 0

  if (isMounted) {
    const centerX = window.innerWidth / 2
    const centerY = window.innerHeight / 2
    backgroundX = (mousePosition.x - centerX) * -0.02
    backgroundY = (mousePosition.y - centerY) * -0.02
    contentX = (mousePosition.x - centerX) * 0.01
    contentY = (mousePosition.y - centerY) * 0.01
  }

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-background via-background to-card pt-24 pb-12 sm:pt-28 md:pt-32 lg:pt-20">
      <div
        className="absolute inset-0 z-0 overflow-hidden transition-transform duration-300 ease-out"
        style={{ transform: `translate(${backgroundX}px, ${backgroundY}px)` }}
      >
        <div className="absolute w-96 h-96 bg-accent/10 rounded-full blur-3xl left-1/4 top-1/4 animate-pulse" />
        <div className="absolute w-96 h-96 bg-accent/5 rounded-full blur-3xl right-1/4 bottom-1/4 animate-pulse delay-1000" />
      </div>

      {/* Content */}
      <div
        className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 transition-transform duration-300 ease-out"
        style={{ transform: `translate(${contentX}px, ${contentY}px)` }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full border-2 border-accent bg-accent/10 text-accent font-bold mb-6 sm:mb-8 animate-pulse mt-6 sm:mt-8 text-sm sm:text-base">
            <Sparkles className="h-3 w-3 sm:h-4 sm:w-4" />
            <span>Award-Winning Studio</span>
          </div>

          <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl xl:text-[12rem] 2xl:text-[14rem] font-black leading-[0.85] mb-8 sm:mb-10 text-balance">
            We craft <span className="italic text-accent block mt-4 sm:mt-6 lg:mt-8 animate-pulse">bold</span>
            <span className="block mt-2 sm:mt-4">digital</span>
            <span className="block mt-2 sm:mt-4">experiences</span>
          </h1>

          <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-muted-foreground max-w-4xl mb-10 sm:mb-12 lg:mb-16 text-pretty leading-relaxed font-bold">
            A creative agency pushing boundaries in branding, design, and digital innovation for ambitious brands
            worldwide.
          </p>

          <div className="flex flex-col sm:flex-row flex-wrap gap-4 sm:gap-6">
            <Button
              size="lg"
              className="group text-lg sm:text-xl md:text-2xl px-10 sm:px-12 md:px-14 py-7 sm:py-8 md:py-9 bg-accent hover:bg-accent/90 text-accent-foreground font-black rounded-full shadow-2xl hover:shadow-accent/50 transition-all hover:scale-110 w-full sm:w-auto"
            >
              See Our Work
              <ArrowRight className="ml-2 h-6 w-6 sm:h-7 sm:w-7 group-hover:translate-x-2 transition-transform" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-lg sm:text-xl md:text-2xl px-10 sm:px-12 md:px-14 py-7 sm:py-8 md:py-9 border-4 border-foreground hover:bg-foreground hover:text-background font-black rounded-full transition-all hover:scale-110 bg-transparent w-full sm:w-auto"
            >
              Start a Project
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}