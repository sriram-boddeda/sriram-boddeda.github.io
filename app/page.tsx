"use client";

import React from "react";
import Head from "next/head";
import Hero from "@/components/Hero";
import About from "@/components/About";
import TechnicalSkills from "@/components/TechnicalSkills";
import Contact from "@/components/Contact";
import portfolioData from "@/data/portfolioData.json";
import { PortfolioData } from "@/types/portfolioTypes";
import Projects from "@/components/Projects";
import WorkExperience from "@/components/WorkExperience";
import Education from "@/components/Education";

const Home: React.FC = () => {
  const data: PortfolioData = portfolioData;

  return (
    <>
      <Head>
        <title>{data.about.name} - Portfolio</title>
        <meta name="description" content={`Portfolio of ${data.about.name}`} />
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>

      <main>
        <Hero data={data.hero} />
        <About data={data.about} />
        <Projects data={data.projects} />
        <WorkExperience data={data.experiences} />
        <Education data={data.education} />
        <TechnicalSkills data={data.technicalSkills} />
        <Contact data={data.contact} />
      </main>

      <footer className="py-4 text-center">
        <p>
          &copy; {new Date().getFullYear()} {data.about.name}. All rights
          reserved.
        </p>
      </footer>
    </>
  );
};

export default Home;
