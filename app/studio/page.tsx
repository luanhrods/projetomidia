import { FlyingMenu } from "@/components/flying-menu"
import { Footer } from "@/components/footer"
import { ArrowRight, Beaker, Heart, Users } from "lucide-react"
import Link from "next/link"

export default function StudioPage() {
  const timelineEvents = [
    {
      year: "2004",
      title: "The Spark",
      description: "Sérgio Rodrigues founds the agency with a vision to merge bold creativity with strategic results.",
    },
    {
      year: "2012",
      title: "Digital Transformation",
      description: "Pioneering new digital-first strategies, expanding our services into web design and online marketing.",
    },
    {
      year: "2020",
      title: "Global Reach",
      description: "Expanding our team and client base internationally, working with ambitious brands worldwide.",
    },
    {
      year: "Today",
      title: "The Future of Craft",
      description: "Continuing to push boundaries in digital innovation, shaping the future of brand experiences.",
    },
  ]

  const teamMembers = [
    { name: "Alex Johnson", role: "Creative Director" },
    { name: "Maria Garcia", role: "Lead Strategist" },
    { name: "Chen Wei", role: "Art Director" },
    { name: "Samira Khan", role: "Head of Development" },
    { name: "David Lee", role: "Senior Designer" },
  ]

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
              Forged Over
              <br />
              20 Years
            </h1>
            <p className="text-2xl md:text-3xl text-muted-foreground max-w-3xl text-pretty">
              A legacy of digital craftsmanship, founded by Sérgio Rodrigues to build brands that endure and inspire.
            </p>
          </div>
        </section>

        <section className="py-20 px-6 md:px-12 lg:px-24">
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
            <div className="aspect-w-1 aspect-h-1">
              <img
                src="/placeholder.svg?height=800&width=800&query=creative+founder+portrait"
                alt="Founder Sérgio Rodrigues"
                className="w-full h-full object-cover rounded-3xl"
              />
            </div>
            <div className="text-left">
              <blockquote className="text-3xl md:text-4xl font-bold leading-tight text-balance">
                "We don't just build websites or design logos. We build legacies. Every pixel, every word, is a step
                towards creating something timeless."
              </blockquote>
              <cite className="mt-6 block text-xl font-bold not-italic">
                Sérgio Rodrigues
                <span className="block text-lg text-muted-foreground font-medium">Founder & Chief Creative Officer</span>
              </cite>
            </div>
          </div>
        </section>

        <section className="py-20 px-6 md:px-12 lg:px-24 bg-muted/20">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-6xl md:text-8xl font-bold mb-24 text-balance text-center">Our Journey</h2>
            <div className="relative">
              <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-border -translate-x-1/2" />
              {timelineEvents.map((event, index) => (
                <div
                  key={event.year}
                  className={`relative flex items-center mb-16 ${index % 2 === 0 ? "justify-start" : "justify-end"}`}
                >
                  <div
                    className={`w-1/2 ${index % 2 === 0 ? "pr-8 text-right" : "pl-8 text-left"}`}
                  >
                    <p className="text-2xl font-bold text-accent mb-2">{event.year}</p>
                    <h3 className="text-4xl font-bold mb-3">{event.title}</h3>
                    <p className="text-lg text-muted-foreground">{event.description}</p>
                  </div>
                  <div className="absolute left-1/2 -translate-x-1/2 w-4 h-4 bg-accent rounded-full border-4 border-background" />
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 px-6 md:px-12 lg:px-24">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-6xl md:text-8xl font-bold mb-16 text-balance">Our Philosophy</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="p-8 bg-muted/20 rounded-3xl">
                <div className="w-16 h-16 rounded-full bg-accent flex items-center justify-center mb-6">
                  <Beaker className="w-8 h-8 text-accent-foreground" />
                </div>
                <h3 className="text-3xl font-bold mb-4">Radical Curiosity</h3>
                <p className="text-lg text-muted-foreground">
                  We question everything. Our curiosity fuels innovation and leads to unexpected, brilliant solutions.
                </p>
              </div>
              <div className="p-8 bg-muted/20 rounded-3xl">
                <div className="w-16 h-16 rounded-full bg-accent flex items-center justify-center mb-6">
                  <Users className="w-8 h-8 text-accent-foreground" />
                </div>
                <h3 className="text-3xl font-bold mb-4">Intense Collaboration</h3>
                <p className="text-lg text-muted-foreground">
                  Great ideas are born from diverse perspectives. We work together, challenging and inspiring each
                  other.
                </p>
              </div>
              <div className="p-8 bg-muted/20 rounded-3xl">
                <div className="w-16 h-16 rounded-full bg-accent flex items-center justify-center mb-6">
                  <Heart className="w-8 h-8 text-accent-foreground" />
                </div>
                <h3 className="text-3xl font-bold mb-4">Craft with Passion</h3>
                <p className="text-lg text-muted-foreground">
                  We are obsessed with our craft. From the big picture to the smallest pixel, we pour our hearts into
                  our work.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 px-6 md:px-12 lg:px-24 bg-muted/20">
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-6xl md:text-8xl font-bold mb-16 text-balance">Meet the Artisans</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8">
              {teamMembers.map((member) => (
                <div key={member.name} className="group">
                  <div className="aspect-square bg-background rounded-3xl mb-4 overflow-hidden">
                    <img
                      src={`/placeholder.svg?height=400&width=400&query=creative+team+member+${member.name}`}
                      alt={member.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <h4 className="text-xl font-bold">{member.name}</h4>
                  <p className="text-muted-foreground">{member.role}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-32 px-6 md:px-12 lg:px-24 bg-accent text-accent-foreground">
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
        </section>
      </main>
      <Footer />
    </>
  )
}