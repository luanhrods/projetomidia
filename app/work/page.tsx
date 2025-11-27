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
      "O desafio era criar uma identidade de marca forte e memorável para a Contentia.app, um novo player no mercado de software. A marca precisava comunicar confiança, inovação e simplicidade para se destacar em um setor competitivo.",
    solution:
      "Desenvolvemos uma identidade visual completa, desde o logotipo até a paleta de cores e tipografia. A solução focou em um design limpo e moderno, com um ícone que representa a conexão e a fluidez de conteúdo. Criamos um brandbook detalhado para garantir consistência em todas as plataformas.",
    results:
      "A nova marca foi recebida com entusiasmo, ajudando a Contentia.app a garantir sua primeira rodada de investimentos. O feedback dos usuários iniciais destacou a aparência profissional e confiável do aplicativo, um fator crucial para a adoção inicial.",
  },
  {
    id: "roastory",
    title: "The Roastory Coffee",
    category: "Website Design & Coding",
    image: "/placeholder.svg?height=900&width=1600&query=roastory+coffee+website+mockup",
    challenge:
      "The Roastory, uma cafeteria de cafés especiais, precisava de um site de e-commerce que refletisse a qualidade premium de seus produtos. O site existente era lento, difícil de navegar e não transmitia a paixão da marca pelo café.",
    solution:
      "Projetamos e desenvolvemos um site personalizado do zero, focado em uma experiência de usuário imersiva. Utilizamos fotografia de alta qualidade, uma navegação intuitiva e um processo de checkout simplificado. O site foi construído com tecnologias modernas para garantir velocidade e responsividade.",
    results:
      "O novo site resultou em um aumento de 120% nas vendas online nos primeiros três meses. O tempo médio de permanência na página dobrou, e a taxa de conversão aumentou em 75%, estabelecendo The Roastory como uma marca de café online de destaque.",
  },
  {
    id: "coffee-package",
    title: "Coffee Package Study",
    category: "Product & Packaging Design",
    image: "/placeholder.svg?height=900&width=1600&query=specialty+coffee+packaging",
    challenge:
      "O objetivo era criar um design de embalagem para uma nova linha de cafés especiais que se destacasse nas prateleiras e contasse a história da origem de cada grão. A embalagem precisava ser atraente, informativa e sustentável.",
    solution:
      "Criamos um sistema de design de embalagens modular, com ilustrações únicas para cada região produtora de café. Utilizamos materiais reciclados e um layout que prioriza a informação, educando o consumidor sobre o produto. A paleta de cores vibrantes e a tipografia elegante diferenciaram o produto da concorrência.",
    results:
      "O design da embalagem foi premiado em um concurso de design e ajudou o produto a garantir listagem em grandes redes de varejo. As vendas superaram as projeções em 40% no primeiro semestre, com muitos clientes citando a embalagem como o principal motivo da compra.",
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
                      <h3 className="text-2xl font-bold mb-3">O Desafio</h3>
                      <p className="text-lg text-muted-foreground leading-relaxed">{project.challenge}</p>
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold mb-3">A Solução</h3>
                      <p className="text-lg text-muted-foreground leading-relaxed">{project.solution}</p>
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold mb-3">Resultados</h3>
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