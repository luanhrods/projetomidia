import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ArrowRight, BarChart3, Megaphone, Search, Mail } from "lucide-react"
import Link from "next/link"

export default function DigitalMarketingPage() {
  return (
    <>
      <Header />
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
              Digital
              <br />
              Marketing
            </h1>
            <p className="text-2xl md:text-3xl text-muted-foreground max-w-2xl text-pretty">
              Data-driven campaigns that drive growth, engagement, and measurable results.
            </p>
          </div>
        </section>

        <section className="py-20 px-6 md:px-12 lg:px-24 bg-muted/20">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-6xl md:text-8xl font-bold mb-16 text-balance">Our Services</h2>
            <div className="grid md:grid-cols-2 gap-12">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center flex-shrink-0">
                    <Search className="w-6 h-6 text-accent-foreground" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-2">SEO & SEM</h3>
                    <p className="text-muted-foreground text-lg">
                      Dominate search rankings with strategic optimization and paid search campaigns.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center flex-shrink-0">
                    <Megaphone className="w-6 h-6 text-accent-foreground" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-2">Social Media Marketing</h3>
                    <p className="text-muted-foreground text-lg">
                      Build communities and drive engagement across all social platforms.
                    </p>
                  </div>
                </div>
              </div>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-accent-foreground" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-2">Email Marketing</h3>
                    <p className="text-muted-foreground text-lg">
                      Personalized campaigns that convert subscribers into loyal customers.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center flex-shrink-0">
                    <BarChart3 className="w-6 h-6 text-accent-foreground" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-2">Analytics & Reporting</h3>
                    <p className="text-muted-foreground text-lg">
                      Track, measure, and optimize every aspect of your digital presence.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-32 px-6 md:px-12 lg:px-24 bg-accent text-accent-foreground">
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-6xl md:text-8xl font-bold mb-8 text-balance">Ready to Grow?</h2>
            <Link
              href="/#contact"
              className="inline-flex items-center gap-3 px-12 py-6 bg-background text-foreground rounded-full text-xl font-bold hover:scale-105 transition-transform"
            >
              Let's Talk Strategy
              <ArrowRight className="w-6 h-6" />
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}