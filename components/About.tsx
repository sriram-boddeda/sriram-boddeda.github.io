"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { AboutData } from "@/types/portfolioTypes";

type AboutProps = {
  data: AboutData;
};

const About: React.FC<AboutProps> = ({ data }) => {
  return (
    <section className="py-20 bg-gray-100 dark:bg-[#121212] text-gray-800 dark:text-[#dcdcdc] overflow-hidden font-mono">
      <div className="container mx-auto px-6 md:px-12 lg:px-16 xl:px-20 relative">
        {/* Background Elements */}
        <div className="absolute inset-0 w-full h-full pointer-events-none">
          <div className="absolute top-10 left-0 w-72 h-72 bg-gradient-to-br from-blue-400 to-transparent dark:from-blue-700 rounded-full opacity-10 dark:opacity-20 filter blur-2xl"></div>
          <div className="absolute bottom-10 right-0 w-72 h-72 bg-gradient-to-br from-green-400 to-transparent dark:from-green-700 rounded-full opacity-10 dark:opacity-20 filter blur-2xl"></div>
        </div>

        <motion.div
          className="flex flex-col lg:flex-row items-center justify-between gap-12 relative z-10"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Text Content */}
          <div className="lg:w-1/2 text-left space-y-6">
            <h1 className="text-3xl sm:text-4xl font-extrabold leading-tight text-gray-800 dark:text-[#55F991]">
              {data.name}
            </h1>
            <h2 className="text-xl sm:text-2xl font-semibold text-blue-600 dark:text-blue-400">
              {data.title}
            </h2>
            <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300">
              {data.bio}
            </p>

            {/* Skills */}
            <motion.div
              className="flex flex-wrap gap-2 mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              {data.skills.map((skill, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-green-400 text-xs font-medium rounded-md"
                >
                  {skill}
                </span>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              <a
                href={data.ctaLink}
                className="inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-blue-600 hover:bg-blue-700 dark:bg-green-600 dark:hover:bg-green-700 transition duration-300"
              >
                {data.ctaText}
              </a>
              <a
                href={data.resumeLink}
                className="inline-flex items-center justify-center px-6 py-3 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm text-base font-medium text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 transition duration-300"
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
                <FaGithub size={24} />
              </a>
              <a
                href={data.socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400 transition duration-300"
              >
                <FaLinkedin size={24} />
              </a>
            </div>
          </div>

          {/* Profile Image */}
          <motion.div
            className="lg:w-5/12 w-full"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="relative w-80 h-80 mx-auto lg:w-96 lg:h-96 rounded-lg overflow-hidden shadow-lg">
              <Image
                src={data.profileImage}
                alt={data.name}
                fill
                style={{ objectFit: "cover" }}
                className="rounded-lg"
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
