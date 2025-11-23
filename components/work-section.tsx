"use client"

import { useState } from "react"
import { ArrowUpRight } from "lucide-react"

export function WorkSection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  const projects = [
    {
      title: "Quantum",
      category: "Tech Startup",
      image: "/placeholder.svg?height=800&width=1200",
      color: "from-accent/20 to-transparent",
    },
    {
      title: "Horizon",
      category: "Fashion Brand",
      image: "/placeholder.svg?height=800&width=1200",
      color: "from-foreground/20 to-transparent",
    },
    {
      title: "Nexus",
      category: "FinTech",
      image: "/placeholder.svg?height=800&width=1200",
      color: "from-accent/30 to-transparent",
    },
  ]

  return (
    <section id="work" className="py-16 sm:py-20 md:py-24 lg:py-32 relative">
      <div className="absolute top-10 sm:top-20 left-0 text-[8rem] sm:text-[12rem] md:text-[16rem] lg:text-[20rem] font-black text-foreground/5 leading-none pointer-events-none select-none">
        WORK
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="mb-12 sm:mb-16 md:mb-20 lg:mb-24">
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black mb-4 sm:mb-6 leading-none">
            Selected Work
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground max-w-2xl font-medium">
            Projects that define brands and drive results
          </p>
        </div>

        <div className="space-y-16 sm:space-y-20 md:space-y-24 lg:space-y-32">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="group cursor-pointer"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl border-2 sm:border-4 border-foreground/10 group-hover:border-accent transition-all duration-500 shadow-2xl group-hover:shadow-accent/20">
                <div
                  className={`absolute inset-0 bg-gradient-to-t ${project.color} z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                />

                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full aspect-video object-cover group-hover:scale-110 transition-transform duration-700"
                />

                <div className="absolute inset-0 z-20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="bg-accent text-accent-foreground rounded-full p-4 sm:p-6 transform scale-50 group-hover:scale-100 transition-transform duration-500">
                    <ArrowUpRight className="h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12" />
                  </div>
                </div>
              </div>

              <div className="mt-4 sm:mt-6 md:mt-8 flex items-center justify-between gap-4">
                <div className="flex-1 min-w-0">
                  <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black mb-1 sm:mb-2 group-hover:text-accent transition-colors truncate">
                    {project.title}
                  </h3>
                  <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground font-medium">{project.category}</p>
                </div>
                <div
                  className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black transition-all duration-500 flex-shrink-0 ${
                    hoveredIndex === index ? "text-accent translate-x-2 sm:translate-x-4" : "text-muted/20"
                  }`}
                >
                  0{index + 1}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
