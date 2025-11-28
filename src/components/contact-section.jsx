"use client"

import { Mail } from "lucide-react"
import { TallyForm } from "@/components/tally-form"

export function ContactSection() {
  return (
    <section id="contact" className="py-16 sm:py-20 md:py-24 lg:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-accent/10 via-transparent to-transparent" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[6rem] sm:text-[10rem] md:text-[15rem] lg:text-[20rem] xl:text-[25rem] font-black text-foreground/5 leading-none pointer-events-none select-none whitespace-nowrap">
        LET'S TALK
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-full bg-accent text-accent-foreground mb-6 sm:mb-8 animate-float">
            <Mail className="w-8 h-8 sm:w-10 sm:w-10 md:w-12 md:h-12" />
          </div>

          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl font-black mb-6 sm:mb-8 text-balance leading-none">
            Ready to create something <span className="italic text-accent">extraordinary?</span>
          </h2>

          <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-muted-foreground mb-10 sm:mb-12 md:mb-16 max-w-3xl mx-auto font-medium leading-relaxed">
            Let's discuss how we can elevate your brand and drive real business results.
          </p>

          <div className="bg-card/50 backdrop-blur-sm border border-border/20 rounded-3xl p-2 md:p-3 max-w-2xl mx-auto">
            <TallyForm />
          </div>
        </div>
      </div>
    </section>
  )
}