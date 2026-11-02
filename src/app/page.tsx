import Navbar from "@/components/navbar";

import ProjectsSection from "@/components/projects-section";
import ExperienceSection from "@/components/experience-section";
import EducationSection from "@/components/education-section";
import CertificatesSection from "@/components/certificates-section";
import SkillsSection from "@/components/skills-section";
import ContactSection from "@/components/contact-section";
import Footer from "@/components/footer";
import HeroSection from "@/components/hero-section.tsx";

import AboutLamp from "@/components/about-lamp";

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <Navbar />
      <HeroSection />
      <AboutLamp />

      <ProjectsSection />
      <ExperienceSection />
      <EducationSection />
      <CertificatesSection />
      <SkillsSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
