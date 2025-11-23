import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ArrowRight, Target, TrendingUp, Users, Zap } from "lucide-react"
import Link from "next/link"

export default function BrandStrategyPage() {
  return (
    <>
      <Header />
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
              Brand
              <br />
              Strategy
            </h1>
            <p className="text-2xl md:text-3xl text-muted-foreground max-w-2xl text-pretty">
              We craft powerful brand strategies that position you for market dominance and lasting success.
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
                    <Target className="w-6 h-6 text-accent-foreground" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-2">Market Positioning</h3>
                    <p className="text-muted-foreground text-lg">
                      We identify your unique market position and craft strategies that differentiate you from
                      competitors.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center flex-shrink-0">
                    <Users className="w-6 h-6 text-accent-foreground" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-2">Audience Research</h3>
                    <p className="text-muted-foreground text-lg">
                      Deep-dive into your target audience to understand their needs, behaviors, and decision-making
                      processes.
                    </p>
                  </div>
                </div>
              </div>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center flex-shrink-0">
                    <TrendingUp className="w-6 h-6 text-accent-foreground" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-2">Growth Strategy</h3>
                    <p className="text-muted-foreground text-lg">
                      Develop comprehensive roadmaps for sustainable growth and market expansion.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center flex-shrink-0">
                    <Zap className="w-6 h-6 text-accent-foreground" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-2">Brand Architecture</h3>
                    <p className="text-muted-foreground text-lg">
                      Structure your brand portfolio and define relationships between parent and sub-brands.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="py-20 px-6 md:px-12 lg:px-24">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-6xl md:text-8xl font-bold mb-16 text-balance">Our Process</h2>
            <div className="space-y-8">
              {[
                {
                  step: "01",
                  title: "Discovery",
                  desc: "We immerse ourselves in your business, industry, and competitive landscape.",
                },
                {
                  step: "02",
                  title: "Research",
                  desc: "Comprehensive market and audience analysis to uncover opportunities.",
                },
                { step: "03", title: "Strategy", desc: "Develop your unique positioning and strategic framework." },
                {
                  step: "04",
                  title: "Implementation",
                  desc: "Create actionable roadmaps and guidelines for execution.",
                },
              ].map((item) => (
                <div
                  key={item.step}
                  className="border-t border-border pt-8 group hover:border-accent transition-colors"
                >
                  <div className="flex flex-col md:flex-row md:items-center gap-6">
                    <span className="text-8xl font-bold text-accent">{item.step}</span>
                    <div className="flex-1">
                      <h3 className="text-4xl font-bold mb-3 group-hover:text-accent transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-xl text-muted-foreground text-pretty">{item.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-32 px-6 md:px-12 lg:px-24 bg-accent text-accent-foreground">
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-6xl md:text-8xl font-bold mb-8 text-balance">Ready to Build Your Brand?</h2>
            <Link
              href="/#contact"
              className="inline-flex items-center gap-3 px-12 py-6 bg-background text-foreground rounded-full text-xl font-bold hover:scale-105 transition-transform"
            >
              Let's Talk
              <ArrowRight className="w-6 h-6" />
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}