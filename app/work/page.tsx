import { FlyingMenu } from "@/components/flying-menu"
import { Footer } from "@/components/footer"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

export default function WorkPage() {
  return (
    <>
      <FlyingMenu />
      <main className="min-h-screen bg-background">
        <section className="pt-32 pb-20 px-6 md:px-12 lg:px-24">
          <div className="max-w-7xl mx-auto">
            <Link
              href="/"
              className="inline-flex items-center text-muted-foreground hover:text-foreground transition-colors mb-8"
            >
              <ArrowRight className="w-4 h-4 mr-2 rotate-180" />
              Back to Home
            </Link>
            <h1 className="text-[8vw] md:text-[120px] lg:text-[160px] font-bold leading-[0.9] tracking-tight mb-6 text-balance">
              Our
              <br />
              Work
            </h1>
            <p className="text-2xl md:text-3xl text-muted-foreground max-w-2xl text-pretty">
              A showcase of brands we've transformed through bold creativity and strategic thinking.
            </p>
          </div>
        </section>

        <section className="py-20 px-6 md:px-12 lg:px-24">
          <div className="max-w-7xl mx-auto space-y-24">
            {[
              {
                title: "TechVision",
                category: "Brand Identity & Web Design",
                desc: "Complete rebrand for a leading AI startup, including visual identity and digital presence.",
              },
              {
                title: "LuxeWear",
                category: "E-commerce & Digital Marketing",
                desc: "Luxury fashion brand launch with custom e-commerce platform and integrated marketing.",
              },
              {
                title: "GreenEarth",
                category: "Brand Strategy & Content",
                desc: "Sustainable lifestyle brand positioning and content strategy driving 300% growth.",
              },
              {
                title: "FinanceFlow",
                category: "Visual Identity & App Design",
                desc: "Modern fintech app with bold visual identity and intuitive user experience.",
              },
            ].map((project, i) => (
              <div key={project.title} className="group cursor-pointer">
                <div className="relative aspect-[16/9] bg-muted/20 rounded-3xl overflow-hidden mb-6 hover:scale-[1.02] transition-transform">
                  <img
                    src={`/placeholder.svg?height=800&width=1400&query=${project.title} project showcase`}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                  <div>
                    <h3 className="text-5xl md:text-6xl font-bold mb-2 group-hover:text-accent transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-xl text-accent">{project.category}</p>
                  </div>
                  <p className="text-xl text-muted-foreground max-w-md text-pretty">{project.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="py-32 px-6 md:px-12 lg:px-24 bg-accent text-accent-foreground">
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-6xl md:text-8xl font-bold mb-8 text-balance">Start Your Project</h2>
            <Link
              href="/#contact"
              className="inline-flex items-center gap-3 px-12 py-6 bg-background text-foreground rounded-full text-xl font-bold hover:scale-105 transition-transform"
            >
              Let's Collaborate
              <ArrowRight className="w-6 h-6" />
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
