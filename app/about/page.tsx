import { FlyingMenu } from "@/components/flying-menu"
import { Footer } from "@/components/footer"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

export default function AboutPage() {
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
              About
              <br />
              Enchantè
            </h1>
            <p className="text-2xl md:text-3xl text-muted-foreground max-w-2xl text-pretty">
              We're a digital design agency that believes in the power of bold creativity and strategic thinking.
            </p>
          </div>
        </section>

        <section className="py-20 px-6 md:px-12 lg:px-24 bg-muted/20">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-6xl md:text-8xl font-bold mb-12 text-balance">Our Story</h2>
            <div className="space-y-8 text-xl md:text-2xl text-muted-foreground max-w-4xl leading-relaxed">
              <p>
                Founded in 2018, Enchantè Digital emerged from a simple belief: brands deserve better. Better design,
                better strategy, and better results.
              </p>
              <p>
                We're not your typical agency. We don't follow trends—we create them. Every project is an opportunity to
                push boundaries and challenge conventions.
              </p>
              <p>
                Our team of designers, strategists, and developers share a passion for creating work that not only looks
                exceptional but drives real business impact.
              </p>
            </div>
          </div>
        </section>

        <section className="py-20 px-6 md:px-12 lg:px-24">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-6xl md:text-8xl font-bold mb-16 text-balance">Our Values</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "Bold Creativity",
                  desc: "We believe in taking risks and pushing creative boundaries to create truly memorable work.",
                },
                {
                  title: "Strategic Thinking",
                  desc: "Every decision is backed by research, data, and strategic insight.",
                },
                {
                  title: "Client Partnership",
                  desc: "We're not just vendors—we're partners invested in your success.",
                },
                { title: "Excellence", desc: "We obsess over details and never settle for 'good enough.'" },
                { title: "Innovation", desc: "We stay ahead of trends and constantly evolve our approach." },
                { title: "Integrity", desc: "We do what we say we'll do, transparently and honestly." },
              ].map((value) => (
                <div
                  key={value.title}
                  className="p-8 bg-muted/20 rounded-3xl hover:bg-accent hover:text-accent-foreground transition-all group"
                >
                  <h3 className="text-3xl font-bold mb-4">{value.title}</h3>
                  <p className="text-lg opacity-90">{value.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 px-6 md:px-12 lg:px-24 bg-muted/20">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-3 gap-16 text-center">
              <div>
                <div className="text-8xl font-bold text-accent mb-4">150+</div>
                <p className="text-2xl text-muted-foreground">Projects Delivered</p>
              </div>
              <div>
                <div className="text-8xl font-bold text-accent mb-4">50+</div>
                <p className="text-2xl text-muted-foreground">Happy Clients</p>
              </div>
              <div>
                <div className="text-8xl font-bold text-accent mb-4">25+</div>
                <p className="text-2xl text-muted-foreground">Industry Awards</p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-32 px-6 md:px-12 lg:px-24 bg-accent text-accent-foreground">
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-6xl md:text-8xl font-bold mb-8 text-balance">Let's Work Together</h2>
            <Link
              href="/#contact"
              className="inline-flex items-center gap-3 px-12 py-6 bg-background text-foreground rounded-full text-xl font-bold hover:scale-105 transition-transform"
            >
              Get in Touch
              <ArrowRight className="w-6 h-6" />
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
