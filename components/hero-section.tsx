"use client"

import { ArrowRight, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { HeroBackground3D } from "./hero-background-3d"
import { useEffect, useState } from "react"

export function HeroSection() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }
    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-br from-background via-background to-card py-20 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
          {/* Left Column: Content */}
          <div
            className="relative z-10 col-start-1 row-start-1 animate-in fade-in slide-in-from-left-12 duration-1000"
            style={{ transform: `translateY(${scrollY * 0.1}px)` }}
          >
            <div className="inline-flex items-center gap-2 rounded-full border-2 border-accent bg-accent/10 px-3 py-1.5 text-sm font-bold text-accent sm:px-4 sm:py-2">
              <Sparkles className="h-3 w-3 sm:h-4 sm:w-4" />
              <span>Award-Winning Studio</span>
            </div>

            <h1 className="mt-6 text-5xl font-black leading-[1.05] text-balance sm:text-6xl md:text-7xl">
              We craft <span className="italic text-accent">bold</span> digital experiences
            </h1>

            <p className="mt-8 max-w-xl text-lg font-bold leading-relaxed text-muted-foreground text-pretty sm:text-xl">
              A creative agency pushing boundaries in branding, design, and digital innovation for ambitious brands
              worldwide.
            </p>

            <div className="mt-10 flex flex-col flex-wrap gap-4 sm:flex-row sm:gap-6">
              <Button
                size="lg"
                className="group w-full rounded-full bg-accent px-10 py-7 text-lg font-black text-accent-foreground shadow-2xl transition-all hover:scale-110 hover:bg-accent/90 hover:shadow-accent/50 sm:w-auto md:px-12 md:py-8 md:text-xl"
              >
                See Our Work
                <ArrowRight className="ml-2 h-6 w-6 transition-transform group-hover:translate-x-2" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="w-full rounded-full border-4 border-foreground bg-transparent px-10 py-7 text-lg font-black transition-all hover:scale-110 hover:bg-foreground hover:text-background sm:w-auto md:px-12 md:py-8 md:text-xl"
              >
                Start a Project
              </Button>
            </div>
          </div>

          {/* Right Column: 3D Object */}
          <div
            className="relative z-0 col-start-1 row-start-1 h-[500px] animate-in fade-in slide-in-from-right-12 duration-1000 lg:col-start-2 lg:h-[600px] opacity-40 lg:opacity-100"
            style={{ transform: `translateY(${scrollY * -0.2}px)` }}
          >
            <HeroBackground3D />
          </div>
        </div>
      </div>
    </section>
  )
}