"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { AboutData } from "@/types/portfolioTypes";
import { GitHubIcon, LinkedInIcon } from "./icons/icons";

type AboutProps = {
  data: AboutData;
};

const About: React.FC<AboutProps> = ({ data }) => {
  return (
    <section className="py-20 bg-transparent text-gray-800 dark:text-[#dcdcdc] font-mono">
      <div className="container mx-auto px-6 md:px-12 lg:px-16 xl:px-20">
        <motion.div
          className="flex flex-col lg:flex-row items-center justify-between gap-12"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Profile Image */}
          <motion.div
            className="lg:w-1/3 w-full"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="relative w-80 h-80 mx-auto lg:w-96 lg:h-96 rounded-lg overflow-hidden border border-gray-300 dark:border-gray-600 shadow-xl transition-transform transform hover:scale-105">
              <Image
                src={data.profileImage}
                alt={data.name}
                fill
                style={{ objectFit: "cover" }}
                className="rounded-lg"
              />
            </div>
          </motion.div>

          {/* Text Content */}
          <div className="lg:w-2/3 text-left space-y-6">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-[#55F991] tracking-tight">
              {data.name}
            </h1>
            <h2 className="text-2xl font-semibold text-blue-600 dark:text-blue-400">
              {data.title}
            </h2>
            <p className="text-base text-gray-700 dark:text-gray-300">
              {data.bio}
            </p>

            {/* Skills */}
            <motion.div
              className="flex flex-wrap gap-3 mt-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              {data.skills.map((skill, index) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-green-400 text-xs font-medium rounded-md shadow-md transition-transform transform hover:scale-105"
                >
                  {skill}
                </span>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4 mt-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              <a
                href={data.ctaLink}
                className="inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-md text-base font-medium text-white bg-blue-600 hover:bg-blue-700 transition duration-300"
              >
                {data.ctaText}
              </a>
              <a
                href={data.resumeLink}
                className="inline-flex items-center justify-center px-6 py-3 border border-gray-300 dark:border-gray-600 rounded-md shadow-md text-base font-medium text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 transition duration-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                Resume
              </a>
            </motion.div>

            {/* Social Links */}
            <div className="flex justify-start space-x-6 mt-8">
              <a
                href={data.socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400 transition duration-300"
              >
                <GitHubIcon size={28} />
              </a>
              <a
                href={data.socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400 transition duration-300"
              >
                <LinkedInIcon size={24} />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
