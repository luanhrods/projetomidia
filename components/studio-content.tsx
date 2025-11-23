"use client"

import { motion } from "framer-motion"
import { ArrowRight, Beaker, BrainCircuit, Brush, Eye, Heart, Users } from "lucide-react"
import Link from "next/link"

const fadeIn = {
  initial: { opacity: 0, y: 30 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99] },
  },
}

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.15,
    },
  },
}

export function StudioContent() {
  const teamMembers = [
    { name: "Alex Johnson", role: "Creative Director" },
    { name: "Maria Garcia", role: "Lead Strategist" },
    { name: "Chen Wei", role: "Art Director" },
    { name: "Samira Khan", role: "Head of Development" },
    { name: "David Lee", role: "Senior Designer" },
  ]

  return (
    <main className="min-h-screen bg-background overflow-hidden">
      <motion.section
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={staggerContainer}
        className="pt-32 pb-20 px-6 md:px-12 lg:px-24"
      >
        <div className="max-w-7xl mx-auto">
          <motion.div variants={fadeIn}>
            <Link
              href="/"
              className="inline-flex items-center text-muted-foreground hover:text-foreground transition-colors mb-8"
            >
              <ArrowRight className="w-4 h-4 mr-2 rotate-180" />
              Back to Home
            </Link>
          </motion.div>
          <motion.h1
            variants={fadeIn}
            className="text-[8vw] md:text-[120px] lg:text-[160px] font-bold leading-[0.9] tracking-tight mb-6 text-balance"
          >
            Where Art
            <br />
            Meets Ambition
          </motion.h1>
          <motion.p variants={fadeIn} className="text-2xl md:text-3xl text-muted-foreground max-w-3xl text-pretty">
            We are a collective of artists, strategists, and innovators dedicated to crafting digital legacies. This is
            our story.
          </motion.p>
        </div>
      </motion.section>

      <motion.section
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeIn}
        className="py-20 px-6 md:px-12 lg:px-24"
      >
        <div className="max-w-7xl mx-auto grid md:grid-cols-5 gap-12 items-center">
          <div className="md:col-span-2 aspect-w-1 aspect-h-1">
            <img
              src="/placeholder.svg?height=800&width=800&query=wise+founder+portrait+monochrome"
              alt="Founder Sérgio Rodrigues"
              className="w-full h-full object-cover rounded-3xl grayscale"
            />
          </div>
          <div className="md:col-span-3 text-left">
            <h2 className="text-4xl font-bold mb-4">Our Founder's Legacy</h2>
            <p className="text-lg text-muted-foreground mb-4">In loving memory of</p>
            <h3 className="text-5xl font-bold mb-2">Sérgio Rodrigues</h3>
            <p className="text-xl text-muted-foreground mb-6">(1980 - 2023)</p>
            <blockquote className="text-2xl md:text-3xl font-medium leading-tight text-balance border-l-4 border-accent pl-6">
              "We don't just build websites or design logos. We build legacies. Every pixel, every word, is a step
              towards creating something timeless."
            </blockquote>
            <p className="mt-6 text-lg text-muted-foreground">
              Sérgio founded this agency over 20 years ago with a singular vision: to merge fearless creativity with
              strategic precision. His passion is the cornerstone of our studio, and his legacy inspires every project
              we undertake.
            </p>
          </div>
        </div>
      </motion.section>

      <motion.section
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, amount: 0.2 }}
        variants={staggerContainer}
        className="py-20 px-6 md:px-12 lg:px-24 bg-muted/20"
      >
        <div className="max-w-7xl mx-auto">
          <motion.h2 variants={fadeIn} className="text-6xl md:text-8xl font-bold mb-16 text-balance">
            Our Philosophy
          </motion.h2>
          <motion.div
            variants={staggerContainer}
            className="grid md:grid-cols-3 gap-8"
          >
            <motion.div variants={fadeIn} className="p-8 bg-background rounded-3xl">
              <div className="w-16 h-16 rounded-full bg-accent flex items-center justify-center mb-6">
                <Eye className="w-8 h-8 text-accent-foreground" />
              </div>
              <h3 className="text-3xl font-bold mb-4">Design with Intent</h3>
              <p className="text-lg text-muted-foreground">
                Beauty without purpose is meaningless. Every design choice is deliberate, strategic, and crafted to
                evoke emotion and drive action.
              </p>
            </motion.div>
            <motion.div variants={fadeIn} className="p-8 bg-background rounded-3xl">
              <div className="w-16 h-16 rounded-full bg-accent flex items-center justify-center mb-6">
                <BrainCircuit className="w-8 h-8 text-accent-foreground" />
              </div>
              <h3 className="text-3xl font-bold mb-4">Strategy as Art</h3>
              <p className="text-lg text-muted-foreground">
                We see strategy as a creative discipline. We blend data-driven insights with imaginative thinking to
                paint a clear path to success.
              </p>
            </motion.div>
            <motion.div variants={fadeIn} className="p-8 bg-background rounded-3xl">
              <div className="w-16 h-16 rounded-full bg-accent flex items-center justify-center mb-6">
                <Brush className="w-8 h-8 text-accent-foreground" />
              </div>
              <h3 className="text-3xl font-bold mb-4">Technology as Canvas</h3>
              <p className="text-lg text-muted-foreground">
                Code is our paintbrush. We use cutting-edge technology not just for function, but to create immersive
                and unforgettable digital experiences.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      <motion.section
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeIn}
        className="py-32 px-6 md:px-12 lg:px-24 text-center"
      >
        <h2 className="text-5xl md:text-7xl font-bold mb-6 text-balance">
          Our vision is to craft digital legacies.
        </h2>
        <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto text-pretty">
          We don't build for trends that fade. We build for impact that endures. We partner with ambitious brands to
          create work that will be celebrated not just today, but for years to come.
        </p>
      </motion.section>

      <motion.section
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, amount: 0.2 }}
        variants={staggerContainer}
        className="py-20 px-6 md:px-12 lg:px-24 bg-muted/20"
      >
        <div className="max-w-7xl mx-auto text-center">
          <motion.h2 variants={fadeIn} className="text-6xl md:text-8xl font-bold mb-16 text-balance">
            Meet the Artisans
          </motion.h2>
          <motion.div
            variants={staggerContainer}
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8"
          >
            {teamMembers.map((member) => (
              <motion.div variants={fadeIn} key={member.name} className="group">
                <div className="aspect-square bg-background rounded-3xl mb-4 overflow-hidden">
                  <img
                    src={`/placeholder.svg?height=400&width=400&query=creative+team+member+${member.name}`}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <h4 className="text-xl font-bold">{member.name}</h4>
                <p className="text-muted-foreground">{member.role}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      <motion.section
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, amount: 0.5 }}
        variants={fadeIn}
        className="py-32 px-6 md:px-12 lg:px-24 bg-accent text-accent-foreground"
      >
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-6xl md:text-8xl font-bold mb-8 text-balance">Become Part of Our Next Chapter</h2>
          <Link
            href="/#contact"
            className="inline-flex items-center gap-3 px-12 py-6 bg-background text-foreground rounded-full text-xl font-bold hover:scale-105 transition-transform"
          >
            Let's Collaborate
            <ArrowRight className="w-6 h-6" />
          </Link>
        </div>
      </motion.section>
    </main>
  )
}