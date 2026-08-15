import { About } from "@/components/about";
import { Contact } from "@/components/contact";
import { ExperienceTimeline } from "@/components/experience-timeline";
import { Footer } from "@/components/footer";
import { Hero } from "@/components/hero";
import { Navbar } from "@/components/navbar";
import { Projects } from "@/components/projects";
import { ResumeCTA } from "@/components/resume-cta";
import { Skills } from "@/components/skills";
import { WhatIBuild } from "@/components/what-i-build";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <WhatIBuild />
        <ExperienceTimeline />
        <Projects />
        <Skills />
        <About />
        <ResumeCTA />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
