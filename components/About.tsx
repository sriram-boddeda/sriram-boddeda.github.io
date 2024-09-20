"use client";

import React from "react";
import Image from "next/image";
import { AboutData } from "@/types/portfolioTypes";
import { motion } from "framer-motion";

interface AboutProps {
  data: AboutData;
}

const About: React.FC<AboutProps> = ({ data }) => {
  return (
    <section
      id="about"
      className="py-20 bg-gray-100 dark:bg-[#121212] text-gray-800 dark:text-[#dcdcdc]"
    >
      <div className="container mx-auto px-6 md:px-12 lg:px-16 xl:px-20">
        {/* Background Elements */}
        <div className="absolute inset-0 w-full h-full pointer-events-none">
          <div className="absolute top-10 left-0 w-72 h-72 bg-gradient-to-br from-green-400 to-transparent dark:from-green-700 rounded-full opacity-10 dark:opacity-20 filter blur-2xl"></div>
          <div className="absolute bottom-10 right-0 w-72 h-72 bg-gradient-to-br from-blue-400 to-transparent dark:from-blue-700 rounded-full opacity-10 dark:opacity-20 filter blur-2xl"></div>
        </div>

        <motion.div
          className="flex flex-col lg:flex-row items-center justify-between gap-12 relative z-10"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Image Column */}
          <div className="lg:w-5/12 w-full">
            <motion.div
              className="relative w-96 h-96 mx-auto lg:mx-0 rounded-lg overflow-hidden border-4 border-gray-200 dark:border-[#333] shadow-xl"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <Image
                src={data.profileImage}
                alt={data.name}
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
                priority
              />
              {/* Terminal-style frame */}
              <div className="absolute inset-0 border-t-2 border-gray-300 dark:border-gray-600 rounded-lg p-2">
                <div className="flex items-center gap-1">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Content Column */}
          <div className="lg:w-7/12 w-full text-center lg:text-left space-y-4">
            <h2 className="text-3xl font-mono font-semibold tracking-wider text-gray-800 dark:text-[#dcdcdc] mb-4">
              <span className="text-gray-500">{"//"}</span> About Me
            </h2>
            <h3 className="text-2xl font-mono font-bold text-gray-700 dark:text-green-400">
              {data.name}
            </h3>
            <p className="text-lg font-mono text-gray-600 dark:text-[#a9a9a9] leading-relaxed">
              {data.bio}
            </p>

            {/* Social Links */}
            <div className="flex justify-center lg:justify-start space-x-6 mb-8">
              {Object.entries(data.socialLinks).map(([platform, url]) => (
                <a
                  key={platform}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-500 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400 transition duration-300"
                >
                  <i className={`fab fa-${platform} text-2xl`}></i>
                </a>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex justify-center lg:justify-start gap-6">
              <a
                href={data.resumeLink}
                className="inline-block border-2 border-gray-800 text-gray-800 dark:border-green-500 dark:text-green-500 py-2 px-6 hover:bg-gray-800 hover:text-white dark:hover:bg-green-500 dark:hover:text-black font-mono rounded-lg transition duration-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                Download Resume
              </a>
              <a
                href="#contact"
                className="inline-block border-2 border-gray-800 text-gray-800 dark:border-gray-400 dark:text-gray-400 py-2 px-6 hover:bg-gray-800 hover:text-white dark:hover:bg-gray-400 dark:hover:text-black font-mono rounded-lg transition duration-300"
              >
                Contact Me
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
