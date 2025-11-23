import { FlyingMenu } from "@/components/flying-menu"
import { Footer } from "@/components/footer"
import { ArrowRight, Beaker, Heart, Users } from "lucide-react"
import Link from "next/link"

export default function StudioPage() {
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
              The
              <br />
              Studio
            </h1>
            <p className="text-2xl md:text-3xl text-muted-foreground max-w-3xl text-pretty">
              This is where the magic happens. A space dedicated to bold ideas, radical collaboration, and digital
              craftsmanship.
            </p>
          </div>
        </section>

        <section className="py-20 px-6 md:px-12 lg:px-24 bg-muted/20">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-6xl md:text-8xl font-bold mb-16 text-balance">Our Space</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
              <div className="col-span-2 md:col-span-1 aspect-[4/3] bg-background rounded-3xl overflow-hidden group">
                <img
                  src="/placeholder.svg?height=600&width=800&query=modern+office"
                  alt="Studio space"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="aspect-[4/3] bg-background rounded-3xl overflow-hidden group">
                <img
                  src="/placeholder.svg?height=600&width=800&query=design+collaboration"
                  alt="Team collaboration"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="aspect-[4/3] bg-background rounded-3xl overflow-hidden group">
                <img
                  src="/placeholder.svg?height=600&width=800&query=whiteboard+ideas"
                  alt="Whiteboard with ideas"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="col-span-2 aspect-[2/1] bg-background rounded-3xl overflow-hidden group">
                <img
                  src="/placeholder.svg?height=600&width=1200&query=creative+desk+setup"
                  alt="Creative desk setup"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 px-6 md:px-12 lg:px-24">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-6xl md:text-8xl font-bold mb-16 text-balance">Our Culture</h2>
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

        <section className="py-32 px-6 md:px-12 lg:px-24 bg-accent text-accent-foreground">
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-6xl md:text-8xl font-bold mb-8 text-balance">Become Part of the Story</h2>
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