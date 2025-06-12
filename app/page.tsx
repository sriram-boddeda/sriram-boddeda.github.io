"use client";

import React, { useEffect, useState } from "react";
import TechnicalSkills from "@/components/TechnicalSkills";
import Contact from "@/components/Contact";
import Projects from "@/components/Projects";
import WorkExperience from "@/components/WorkExperience";
import Education from "@/components/Education";
import portfolioData from "@/data/portfolioData.json";
import { PortfolioData } from "@/types/portfolioTypes";
import HeroAbout from "@/components/About";
import ThemeToggleButton from "@/components/ThemeToggleButton";
import ParticleBackground from "@/components/ParticleBackground";
import Image from "next/image";
// import Navbar from "@/components/Navbar";

const Home: React.FC = () => {
  const { about, projects, experiences, education, technicalSkills, contact } =
    portfolioData as PortfolioData;

  const [visibleSections, setVisibleSections] = useState<string[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSections((prev) => [...prev, entry.target.id]);
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll("section").forEach((section) => {
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="fixed inset-0 bg-grid-pattern opacity-5"></div>
      <ParticleBackground />
      {/* <Navbar /> */}
      <ThemeToggleButton />
      <main className="container mx-auto px-4 py-20 relative z-10">
        <section
          id="about"
          className={`${
            visibleSections.includes("about") ? "animate-fade-in" : "opacity-0"
          }`}
        >
          <HeroAbout data={about} />
        </section>
        <section
          id="projects"
          className={`${
            visibleSections.includes("projects")
              ? "animate-fade-in"
              : "opacity-0"
          }`}
        >
          <Projects data={projects} />
        </section>
        <section
          id="experience"
          className={`${
            visibleSections.includes("experience")
              ? "animate-fade-in"
              : "opacity-0"
          }`}
        >
          <WorkExperience data={experiences} />
        </section>
        <section
          id="education"
          className={`${
            visibleSections.includes("education")
              ? "animate-fade-in"
              : "opacity-0"
          }`}
        >
          <Education data={education} />
        </section>
        <section
          id="skills"
          className={`${
            visibleSections.includes("skills") ? "animate-fade-in" : "opacity-0"
          }`}
        >
          <TechnicalSkills data={technicalSkills} />
        </section>
        <section
          id="contact"
          className={` ${
            visibleSections.includes("contact")
              ? "animate-fade-in"
              : "opacity-0"
          }`}
        >
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
    </div>
  );
};

export default Home;
