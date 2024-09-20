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

const Home: React.FC = () => {
  const { about, projects, experiences, education, technicalSkills, contact } =
    portfolioData as PortfolioData;

  return (
    <>
      <main>
        <HeroAbout data={about} />
        <Projects data={projects} />
        <WorkExperience data={experiences} />
        <Education data={education} />
        <TechnicalSkills data={technicalSkills} />
        <Contact data={contact} />
      </main>

      <footer className="py-6 text-center bg-gray-100 dark:bg-[#121212] border-t border-gray-300 dark:border-gray-700">
        <div className="container mx-auto px-4">
          <p className="text-md text-gray-600 dark:text-gray-300">
            &copy; {new Date().getFullYear()} {about.name}. All rights reserved.
          </p>
        </div>
      </footer>
    </>
  );
};

export default Home;
