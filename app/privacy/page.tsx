import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

export default function PrivacyPage() {
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
            <h1 className="text-6xl md:text-8xl font-bold mb-6 text-balance">Privacy Policy</h1>
            <p className="text-xl text-muted-foreground mb-4">Last updated: January 2025</p>
          </div>
        </section>

        <section className="pb-20 px-6 md:px-12 lg:px-24">
          <div className="max-w-4xl mx-auto prose prose-lg prose-invert">
            <div className="space-y-8 text-muted-foreground">
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-4">Introduction</h2>
                <p className="text-lg leading-relaxed">
                  At PMD, we take your privacy seriously. This Privacy Policy explains how we collect, use,
                  disclose, and safeguard your information when you visit our website or use our services.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-foreground mb-4">Information We Collect</h2>
                <p className="text-lg leading-relaxed mb-4">
                  We collect information that you provide directly to us, including:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-lg">
                  <li>Name and contact information</li>
                  <li>Email address and phone number</li>
                  <li>Project details and requirements</li>
                  <li>Payment information (processed securely through third-party providers)</li>
                </ul>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-foreground mb-4">How We Use Your Information</h2>
                <p className="text-lg leading-relaxed mb-4">We use the information we collect to:</p>
                <ul className="list-disc pl-6 space-y-2 text-lg">
                  <li>Provide, maintain, and improve our services</li>
                  <li>Process your requests and transactions</li>
                  <li>Send you updates and marketing communications</li>
                  <li>Respond to your inquiries and support needs</li>
                </ul>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-foreground mb-4">Data Security</h2>
                <p className="text-lg leading-relaxed">
                  We implement appropriate technical and organizational security measures to protect your personal
                  information against unauthorized access, alteration, disclosure, or destruction.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-foreground mb-4">Your Rights</h2>
                <p className="text-lg leading-relaxed">
                  You have the right to access, correct, or delete your personal information. You may also opt out of
                  marketing communications at any time.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-foreground mb-4">Contact Us</h2>
                <p className="text-lg leading-relaxed">
                  If you have any questions about this Privacy Policy, please contact us at{" "}
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