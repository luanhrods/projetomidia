import { FlyingMenu } from "@/components/flying-menu"
import { Footer } from "@/components/footer"
import { ArrowRight, Palette, Layers, Type, ImageIcon } from "lucide-react"
import Link from "next/link"

export default function VisualIdentityPage() {
  return (
    <>
      <FlyingMenu />
      <main className="min-h-screen bg-background">
        {/* Hero Section */}
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
              Visual
              <br />
              Identity
            </h1>
            <p className="text-2xl md:text-3xl text-muted-foreground max-w-2xl text-pretty">
              Creating unforgettable visual systems that bring your brand to life across every touchpoint.
            </p>
          </div>
        </section>

        {/* What We Do */}
        <section className="py-20 px-6 md:px-12 lg:px-24 bg-muted/20">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-6xl md:text-8xl font-bold mb-16 text-balance">What We Do</h2>
            <div className="grid md:grid-cols-2 gap-12">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center flex-shrink-0">
                    <Palette className="w-6 h-6 text-accent-foreground" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-2">Logo Design</h3>
                    <p className="text-muted-foreground text-lg">
                      Iconic logos that capture your brand essence and remain memorable across all applications.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center flex-shrink-0">
                    <Type className="w-6 h-6 text-accent-foreground" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-2">Typography Systems</h3>
                    <p className="text-muted-foreground text-lg">
                      Custom typeface selection and hierarchies that enhance readability and brand personality.
                    </p>
                  </div>
                </div>
              </div>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center flex-shrink-0">
                    <Layers className="w-6 h-6 text-accent-foreground" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-2">Color Palettes</h3>
                    <p className="text-muted-foreground text-lg">
                      Strategic color systems that evoke emotion and ensure consistency across all materials.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center flex-shrink-0">
                    <ImageIcon className="w-6 h-6 text-accent-foreground" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-2">Brand Guidelines</h3>
                    <p className="text-muted-foreground text-lg">
                      Comprehensive documentation ensuring consistent brand application by anyone, anywhere.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Deliverables */}
        <section className="py-20 px-6 md:px-12 lg:px-24">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-6xl md:text-8xl font-bold mb-16 text-balance">Deliverables</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                "Primary & Secondary Logos",
                "Color Palette & Guidelines",
                "Typography System",
                "Icon Library",
                "Pattern & Texture Assets",
                "Brand Guidelines Document",
                "Digital Asset Pack",
                "Print-Ready Files",
                "Social Media Templates",
              ].map((item) => (
                <div
                  key={item}
                  className="p-8 bg-muted/20 rounded-3xl hover:bg-accent hover:text-accent-foreground transition-all hover:scale-105 group"
                >
                  <p className="text-xl font-bold">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-32 px-6 md:px-12 lg:px-24 bg-accent text-accent-foreground">
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-6xl md:text-8xl font-bold mb-8 text-balance">Let's Create Something Iconic</h2>
            <Link
              href="/#contact"
              className="inline-flex items-center gap-3 px-12 py-6 bg-background text-foreground rounded-full text-xl font-bold hover:scale-105 transition-transform"
            >
              Start Your Project
              <ArrowRight className="w-6 h-6" />
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
