import { FlyingMenu } from "@/components/flying-menu"
import { HeroSection } from "@/components/hero-section"
import { ServicesSection } from "@/components/services-section"
import { WorkSection } from "@/components/work-section"
import { ApproachSection } from "@/components/approach-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <>
      <FlyingMenu />
      <main>
        <HeroSection />
        <WorkSection />
        <ServicesSection />
        <ApproachSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  )
}
