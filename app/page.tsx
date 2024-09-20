"use client";

import React from "react";
import Head from "next/head";
import Hero from "@/components/Hero";
import About from "@/components/About";
import TechnicalSkills from "@/components/TechnicalSkills";
import Contact from "@/components/Contact";
import Projects from "@/components/Projects";
import WorkExperience from "@/components/WorkExperience";
import Education from "@/components/Education";
import portfolioData from "@/data/portfolioData.json";
import { PortfolioData } from "@/types/portfolioTypes";

const Home: React.FC = () => {
  const {
    hero,
    about,
    projects,
    experiences,
    education,
    technicalSkills,
    contact,
  } = portfolioData as PortfolioData;

  return (
    <>
      <Head>
        <title>{about.name} - Portfolio</title>
        <meta name="description" content={`Portfolio of ${about.name}`} />
        {/* Add more meta tags as needed */}
      </Head>

      <main>
        <Hero data={hero} />
        <About data={about} />
        <Projects data={projects} />
        <WorkExperience data={experiences} />
        <Education data={education} />
        <TechnicalSkills data={technicalSkills} />
        <Contact data={contact} />
      </main>

      <footer className="py-4 text-center bg-gray-100 dark:bg-gray-900">
        <p>
          &copy; {new Date().getFullYear()} {about.name}. All rights reserved.
        </p>
      </footer>
    </>
  );
};

export default Home;
