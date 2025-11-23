import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ArrowRight, Mail, Phone, MapPin } from "lucide-react"
import Link from "next/link"

export default function ContactPage() {
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
              Let's
              <br />
              Connect
            </h1>
            <p className="text-2xl md:text-3xl text-muted-foreground max-w-2xl text-pretty">
              Ready to create something extraordinary? We'd love to hear from you.
            </p>
          </div>
        </section>

        <section className="py-20 px-6 md:px-12 lg:px-24">
          <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-5xl md:text-6xl font-bold mb-12">Get in Touch</h2>
              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-accent-foreground" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-1">Email</h3>
                    <a
                      href="mailto:hey@enchante.digital"
                      className="text-lg text-muted-foreground hover:text-accent transition-colors"
                    >
                      hey@enchante.digital
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-accent-foreground" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-1">Phone</h3>
                    <a
                      href="tel:+1234567890"
                      className="text-lg text-muted-foreground hover:text-accent transition-colors"
                    >
                      +1 (234) 567-890
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-accent-foreground" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-1">Location</h3>
                    <p className="text-lg text-muted-foreground">
                      San Francisco, CA
                      <br />
                      United States
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-muted/20 rounded-3xl p-8 md:p-12">
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-bold mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-6 py-4 rounded-full bg-background border border-border focus:border-accent outline-none transition-colors"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-bold mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-6 py-4 rounded-full bg-background border border-border focus:border-accent outline-none transition-colors"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-bold mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={6}
                    className="w-full px-6 py-4 rounded-3xl bg-background border border-border focus:border-accent outline-none transition-colors resize-none"
                    placeholder="Tell us about your project..."
                  />
                </div>
                <button
                  type="submit"
                  className="w-full px-8 py-4 bg-accent text-accent-foreground rounded-full font-bold text-lg hover:scale-105 transition-transform"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}