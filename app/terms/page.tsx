import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

export default function TermsPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-background">
        <section className="pt-32 pb-20 px-6 md:px-12 lg:px-24">
          <div className="max-w-4xl mx-auto">
            <Link
              href="/"
              className="inline-flex items-center text-muted-foreground hover:text-foreground transition-colors mb-8"
            >
              <ArrowRight className="w-4 h-4 mr-2 rotate-180" />
              Back to Home
            </Link>
            <h1 className="text-6xl md:text-8xl font-bold mb-6 text-balance">Terms of Service</h1>
            <p className="text-xl text-muted-foreground mb-4">Last updated: January 2025</p>
          </div>
        </section>

        <section className="pb-20 px-6 md:px-12 lg:px-24">
          <div className="max-w-4xl mx-auto prose prose-lg prose-invert">
            <div className="space-y-8 text-muted-foreground">
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-4">Agreement to Terms</h2>
                <p className="text-lg leading-relaxed">
                  By accessing or using PMD's services, you agree to be bound by these Terms of Service. If
                  you disagree with any part of these terms, you may not access our services.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-foreground mb-4">Services</h2>
                <p className="text-lg leading-relaxed">
                  PMD provides digital design and marketing services including but not limited to brand
                  strategy, visual identity, web design, digital marketing, content creation, and social media
                  management.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-foreground mb-4">Project Terms</h2>
                <p className="text-lg leading-relaxed mb-4">
                  All projects are subject to individual agreements that outline:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-lg">
                  <li>Scope of work and deliverables</li>
                  <li>Timeline and milestones</li>
                  <li>Payment terms and schedule</li>
                  <li>Intellectual property rights</li>
                  <li>Revision and approval processes</li>
                </ul>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-foreground mb-4">Payment Terms</h2>
                <p className="text-lg leading-relaxed">
                  Payment terms are outlined in individual project agreements. Typically, we require a deposit before
                  work begins, with the balance due upon project completion or according to agreed milestones.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-foreground mb-4">Intellectual Property</h2>
                <p className="text-lg leading-relaxed">
                  Upon full payment, clients receive ownership of final deliverables as specified in the project
                  agreement. PMD retains the right to showcase work in our portfolio unless otherwise
                  agreed.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-foreground mb-4">Limitation of Liability</h2>
                <p className="text-lg leading-relaxed">
                  PMD shall not be liable for any indirect, incidental, special, consequential, or punitive
                  damages resulting from your use or inability to use our services.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-foreground mb-4">Termination</h2>
                <p className="text-lg leading-relaxed">
                  Either party may terminate a project agreement with written notice. Fees for work completed up to the
                  termination date remain due and payable.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-foreground mb-4">Changes to Terms</h2>
                <p className="text-lg leading-relaxed">
                  We reserve the right to modify these terms at any time. We will notify clients of any material changes
                  via email or through our website.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-foreground mb-4">Contact</h2>
                <p className="text-lg leading-relaxed">
                  For questions about these Terms of Service, please contact us at{" "}
                  <a href="mailto:hey@projetomidia.com" className="text-accent hover:underline">
                    hey@projetomidia.com
                  </a>
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}