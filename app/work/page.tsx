import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

const projects = [
  {
    id: "contentia",
    title: "Contentia.app",
    category: "Branding & Visual Identity",
    image: "/placeholder.svg?height=900&width=1600&query=contentia+app+logo",
    challenge:
      "The challenge was to create a strong and memorable brand identity for Contentia.app, a new player in the software market. The brand needed to communicate trust, innovation, and simplicity to stand out in a competitive industry.",
    solution:
      "We developed a complete visual identity, from the logo to the color palette and typography. The solution focused on a clean, modern design with an icon representing connection and content fluidity. We created a detailed brand book to ensure consistency across all platforms.",
    results:
      "The new brand was received with enthusiasm. Initial user feedback highlighted the application's professional and trustworthy appearance, a crucial factor for early adoption.",
  },
  {
    id: "roastory",
    title: "The Roastory Coffee",
    category: "Website Design & Coding",
    image: "/placeholder.svg?height=900&width=1600&query=roastory+coffee+website+mockup",
    challenge:
      "The Roastory, a specialty coffee shop, needed a website that reflected the premium quality of its products. The existing site was slow, difficult to navigate, and failed to convey the brand's passion for coffee.",
    solution:
      "We designed and developed a custom website from scratch, focusing on an immersive user experience. We used high-quality photography, intuitive navigation, and a simplified layout. The site was built with modern technologies to ensure speed and responsiveness.",
    results:
      "The new website reflected well on new customers and helped people find the coffee shop's location and information easily. The immersive experience established The Roastory as a standout local coffee brand.",
  },
  {
    id: "cacador-de-carros",
    title: "Caçador de Carros 
    
    (Car Hunter)",
    category: "Web Design & Development",
    image: "/placeholder.svg?height=900&width=1600&query=car+hunter+website+mockup",
    challenge:
      "The challenge was to design and develop a car buying and selling platform for a prominent automotive journalist and YouTuber with over 470,000 subscribers. The platform needed to reflect his strong personal brand, be highly trustworthy, and provide a seamless user experience for both buyers and sellers.",
    solution:
      "We built a custom, high-performance web platform focusing on intuitive navigation, powerful search filters, and a clean interface. The design reinforces the founder's personal brand identity, integrating his content and expertise to build user trust. The development focused on security, scalability, and a mobile-first approach.",
    results:
      "The platform launched successfully, receiving positive feedback for its user-friendly design and robust functionality. It effectively translated the founder's authority into a digital marketplace, creating a new revenue stream and strengthening his brand ecosystem.",
  },
]

export default function WorkPage() {
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
          <div className="max-w-7xl mx-auto space-y-24 md:space-y-32">
            {projects.map((project, i) => (
              <div key={project.id} id={project.id} className="scroll-mt-24">
                <div className="relative aspect-[16/9] bg-muted/20 rounded-3xl overflow-hidden mb-8">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="grid lg:grid-cols-3 gap-8 md:gap-12">
                  <div className="lg:col-span-1">
                    <h2 className="text-4xl md:text-5xl font-bold text-accent mb-2">{project.title}</h2>
                    <p className="text-lg text-muted-foreground">{project.category}</p>
                  </div>
                  <div className="lg:col-span-2 space-y-8">
                    <div>
                      <h3 className="text-2xl font-bold mb-3">The Challenge</h3>
                      <p className="text-lg text-muted-foreground leading-relaxed">{project.challenge}</p>
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold mb-3">The Solution</h3>
                      <p className="text-lg text-muted-foreground leading-relaxed">{project.solution}</p>
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold mb-3">Results</h3>
                      <p className="text-lg text-muted-foreground leading-relaxed">{project.results}</p>
                    </div>
                  </div>
                </div>
                {i < projects.length - 1 && <hr className="mt-24 md:mt-32 border-border/50" />}
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