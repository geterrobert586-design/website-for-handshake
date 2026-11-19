import { AboutSection, ContactSection, ExperienceSection, HeroSection, PortfolioFooter, PortfolioHeader, ProjectsSection, SkillsSection } from "@/components/portfolio-sections"
import { WorkOrderDemo } from "@/components/work-order-demo"

export default function Page() {
  return (
    <>
      <PortfolioHeader />
      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <WorkOrderDemo />
        <ExperienceSection />
        <ContactSection />
      </main>
      <PortfolioFooter />
    </>
  )
}

