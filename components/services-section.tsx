"use client"

import { useState } from "react"
import { ArrowUpRight } from "lucide-react"
import Link from "next/link"

export function ServicesSection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  const services = [
    {
      number: "01",
      title: "Brand Strategy",
      description: "Defining your unique position in the market through research, positioning, and strategic planning.",
      href: "/services/brand-strategy",
    },
    {
      number: "02",
      title: "Visual Identity",
      description: "Creating distinctive visual systems that communicate your brand essence across all touchpoints.",
      href: "/services/visual-identity",
    },
    {
      number: "03",
      title: "Digital Design",
      description: "Crafting beautiful, functional digital experiences that engage and convert your audience.",
      href: "/services/web-design",
    },
    {
      number: "04",
      title: "Marketing",
      description: "Strategic campaigns that amplify your message and drive measurable business growth.",
      href: "/services/digital-marketing",
    },
  ]

  return (
    <section id="services" className="py-16 sm:py-20 md:py-24 lg:py-32 bg-card relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-accent/5 -skew-x-12 transform translate-x-1/3" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="mb-12 sm:mb-16 md:mb-20 lg:mb-24">
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black mb-4 sm:mb-6 leading-none">
            Our Services
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground max-w-2xl font-medium">
            Full-spectrum creative solutions designed to elevate your brand
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
          {services.map((service, index) => (
            <Link
              key={service.number}
              href={service.href}
              className="group relative bg-background border-2 border-foreground/10 hover:border-accent rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 transition-all duration-500 hover:scale-105 hover:shadow-2xl cursor-pointer block"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="absolute top-0 right-0 w-16 h-16 sm:w-20 sm:h-20 bg-accent/10 rounded-bl-2xl sm:rounded-bl-3xl flex items-center justify-center transition-all duration-300 group-hover:w-24 group-hover:h-24 sm:group-hover:w-32 sm:group-hover:h-32">
                <ArrowUpRight className="h-6 w-6 sm:h-8 sm:w-8 text-accent group-hover:scale-125 transition-transform" />
              </div>

              <div
                className={`text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black mb-4 sm:mb-6 transition-all duration-500 ${
                  hoveredIndex === index ? "text-accent scale-110" : "text-muted/30"
                }`}
              >
                {service.number}
              </div>

              <h3 className="text-2xl sm:text-3xl md:text-4xl font-black mb-3 sm:mb-4 group-hover:text-accent transition-colors">
                {service.title}
              </h3>

              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">{service.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
