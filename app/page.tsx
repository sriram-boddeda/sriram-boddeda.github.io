"use client";

import React from "react";
import TechnicalSkills from "@/components/TechnicalSkills";
import Contact from "@/components/Contact";
import Projects from "@/components/Projects";
import WorkExperience from "@/components/WorkExperience";
import Education from "@/components/Education";
import portfolioData from "@/data/portfolioData.json";
import { PortfolioData } from "@/types/portfolioTypes";
import HeroAbout from "@/components/About";
import ParticleBackground from "@/components/ParticleBackground";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import BackToTop from "@/components/BackToTop";

const Home: React.FC = () => {
  const { about, projects, experiences, education, technicalSkills, contact } =
    portfolioData as PortfolioData;

  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="fixed inset-0 bg-grid-pattern bg-grid opacity-5"></div>
      <ParticleBackground />
      {/* Skip link for accessibility */}
      <a
        href="#about"
        className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 bg-background text-foreground px-3 py-2 rounded shadow z-50 border border-gray-300 dark:border-gray-700"
      >
        Skip to content
      </a>
      <Navbar />
      <main className="container mx-auto px-4 pt-16 relative z-10">
        <section id="about">
          <HeroAbout data={about} />
        </section>
        <section id="projects" className="snap-section">
          <Projects data={projects} />
        </section>
        <section id="experience" className="snap-section">
          <WorkExperience data={experiences} />
        </section>
        <section id="education" className="snap-section">
          <Education data={education} />
        </section>
        <section id="skills" className="snap-section">
          <TechnicalSkills data={technicalSkills} />
        </section>
        <section id="contact" className="snap-section">
          <Contact data={contact} />
        </section>
      </main>

      <footer className="py-6 text-center border-t border-gray-300 dark:border-gray-700 relative z-10">
        <p className="text-sm flex items-center justify-center gap-2">
          Made with{" "}
          <Image
            src="/Next.svg"
            alt="Next.js Logo"
            width={20}
            height={20}
            className="dark:invert"
          />{" "}
          by <span className="font-semibold">{about.name}</span>
        </p>
      </footer>
      <BackToTop />
    </div>
  );
};

export default Home;
