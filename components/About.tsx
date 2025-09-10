"use client";

import React from "react";
import Image from "next/image";
import { AboutData } from "@/types/portfolioTypes";
import { GitHubIcon, LinkedInIcon } from "./icons/icons";

type AboutProps = {
  data: AboutData;
};

const About: React.FC<AboutProps> = ({ data }) => {
  return (
    <section className="py-16 bg-transparent text-gray-800 dark:text-[#dcdcdc] font-mono">
      <div className="container mx-auto px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20">
        <div
          className={`grid ${"grid-cols-1 gap-12"
            } md:grid-cols-2 md:gap-16 items-center`}
        >
          {/* Profile Image */}
          <div className="w-full flex justify-center">
            {/* <div className="relative w-full h-auto rounded-lg overflow-hidden shadow-xl border border-gray-300 dark:border-gray-600"> */}
            <Image
              src={data.profileImage}
              alt={`${data.name} portrait`}
              width={400}
              height={650}
              sizes="(max-width: 768px) 60vw, 400px"
              priority
              className="object-cover rounded-lg"
            />
            {/* </div> */}
          </div>

          {/* Content */}
          <div className="flex flex-col">
            <h1 className="text-4xl font-extrabold text-gray-900 dark:text-[#55F991] tracking-tight mb-4">
              {data.name}
            </h1>
            <h2 className="text-2xl font-semibold text-blue-600 dark:text-blue-400 mb-4">
              {data.title}
            </h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-8 leading-relaxed">
              {data.bio}
            </p>

            {/* Skills */}
            <div className="flex flex-wrap gap-3 mb-8">
              {data.skills.map((skill, index) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-green-400 text-sm font-medium rounded-lg shadow-md"
                >
                  {skill}
                </span>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 mb-8">
              <a
                href={data.ctaLink}
                className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow-lg text-base font-semibold hover:bg-blue-700 transition duration-300"
              >
                {data.ctaText}
              </a>
              <a
                href={data.resumeLink}
                className="px-6 py-3 bg-gray-100 text-gray-800 border border-gray-300 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-300 rounded-lg shadow-lg text-base font-semibold hover:bg-gray-200 dark:hover:bg-gray-700 transition duration-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                Resume
              </a>
            </div>

            {/* Social Links */}
            <div className="flex space-x-6">
              <a
                href={data.socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub profile"
                className="text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition duration-300"
              >
                <GitHubIcon size={28} />
              </a>
              <a
                href={data.socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn profile"
                className="text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition duration-300"
              >
                <LinkedInIcon size={24} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
