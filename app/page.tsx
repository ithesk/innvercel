import { HeroSection } from "@/components/hero-section"
import { ServicesSection } from "@/components/services-section"
import { AboutSection } from "@/components/about-section"
import { PortfolioSection } from "@/components/portfolio-section"
import { PartnersSection } from "@/components/partners-section"
import { ContactSection } from "@/components/contact-section"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <HeroSection />
      <ServicesSection />
      <AboutSection />
      <PortfolioSection />
      <PartnersSection />
      <ContactSection />
    </main>
  )
}

