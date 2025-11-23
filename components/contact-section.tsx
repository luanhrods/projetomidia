"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Mail, MessageCircle } from "lucide-react"
import { useState } from "react"

export function ContactSection() {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <section id="contact" className="py-16 sm:py-20 md:py-24 lg:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-accent/10 via-transparent to-transparent" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[6rem] sm:text-[10rem] md:text-[15rem] lg:text-[20rem] xl:text-[25rem] font-black text-foreground/5 leading-none pointer-events-none select-none whitespace-nowrap">
        LET'S TALK
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-full bg-accent text-accent-foreground mb-6 sm:mb-8 animate-float">
            <MessageCircle className="w-8 h-8 sm:w-10 sm:w-10 md:w-12 md:h-12" />
          </div>

          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl font-black mb-6 sm:mb-8 text-balance leading-none">
            Ready to create something <span className="italic text-accent">extraordinary?</span>
          </h2>

          <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-muted-foreground mb-10 sm:mb-12 md:mb-16 max-w-3xl mx-auto font-medium leading-relaxed">
            Let's discuss how we can elevate your brand and drive real business results.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-stretch sm:items-center">
            <Button
              size="lg"
              className="group text-lg sm:text-xl px-10 sm:px-12 py-6 sm:py-8 bg-accent hover:bg-accent/90 text-accent-foreground font-black rounded-full shadow-2xl hover:shadow-accent/50 transition-all hover:scale-110 w-full sm:w-auto"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              Start a Project
              <ArrowRight
                className={`ml-2 sm:ml-3 h-5 w-5 sm:h-6 sm:w-6 transition-transform duration-300 ${isHovered ? "translate-x-2" : ""}`}
              />
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="text-lg sm:text-xl px-10 sm:px-12 py-6 sm:py-8 bg-transparent border-2 border-foreground hover:bg-foreground hover:text-background font-black rounded-full transition-all hover:scale-110 w-full sm:w-auto"
            >
              <Mail className="mr-2 sm:mr-3 h-5 w-5 sm:h-6 sm:w-6" />
              <span className="truncate">hey@enchante.digital</span>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
