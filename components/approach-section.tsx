"use client"

import { Lightbulb, Pencil, Rocket } from "lucide-react"
import { useState } from "react"

export function ApproachSection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  const steps = [
    {
      icon: Lightbulb,
      title: "Discover",
      description: "We immerse ourselves in your brand, industry, and audience to uncover unique opportunities.",
    },
    {
      icon: Pencil,
      title: "Design",
      description: "Our team crafts bold, purposeful solutions that bring your vision to life.",
    },
    {
      icon: Rocket,
      title: "Deliver",
      description: "We launch with precision and continue optimizing for maximum impact.",
    },
  ]

  return (
    <section
      id="approach"
      className="py-16 sm:py-20 md:py-24 lg:py-32 bg-primary text-primary-foreground relative overflow-hidden"
    >
      <div className="absolute top-10 sm:top-20 left-0 text-[6rem] sm:text-[10rem] md:text-[14rem] lg:text-[18rem] font-black text-primary-foreground/5 leading-none pointer-events-none select-none whitespace-nowrap">
        APPROACH
      </div>
      <div className="absolute top-0 left-0 w-full h-1 sm:h-2 bg-accent" />
      <div className="absolute bottom-0 left-0 w-full h-1 sm:h-2 bg-accent" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="mb-12 sm:mb-16 md:mb-20 lg:mb-24">
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black mb-4 sm:mb-6 leading-none">
            Our Approach
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl opacity-80 max-w-2xl font-medium">
            A proven process that transforms ideas into exceptional experiences
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-6 lg:gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon
            return (
              <div
                key={step.title}
                className="space-y-4 sm:space-y-6 bg-primary-foreground/5 backdrop-blur-sm p-6 sm:p-8 rounded-2xl sm:rounded-3xl border-2 border-primary-foreground/10 hover:border-accent transition-all duration-500 hover:scale-105 cursor-pointer"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <div
                  className={`w-16 h-16 sm:w-20 sm:h-20 rounded-full flex items-center justify-center transition-all duration-500 ${
                    hoveredIndex === index
                      ? "bg-accent text-accent-foreground scale-110 rotate-12"
                      : "bg-primary-foreground text-primary"
                  }`}
                >
                  <Icon className="w-8 h-8 sm:w-10 sm:h-10" />
                </div>
                <h3 className="text-3xl sm:text-4xl font-black">{step.title}</h3>
                <p className="text-base sm:text-lg opacity-80 leading-relaxed">{step.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}