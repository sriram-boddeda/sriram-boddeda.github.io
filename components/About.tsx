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
      className="py-20 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800"
    >
      <div className="container mx-auto px-6 md:px-12 lg:px-16 xl:px-20">
        <motion.div
          className="flex flex-col lg:flex-row items-center justify-between gap-12"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Image Column */}
          <div className="lg:w-5/12 w-full">
            <motion.div
              className="relative w-96 h-96 mx-auto lg:mx-0 rounded-lg shadow-xl overflow-hidden"
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
              {/* Decorative Element */}
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-500 to-teal-400 opacity-20 mix-blend-multiply rounded-lg"></div>
            </motion.div>
          </div>

          {/* Content Column */}
          <div className="lg:w-7/12 w-full text-center lg:text-left">
            <h2 className="text-4xl font-extrabold text-gray-800 dark:text-gray-100 mb-6">
              About Me
            </h2>
            <h3 className="text-2xl font-semibold text-blue-600 dark:text-blue-400 mb-4">
              {data.name}
            </h3>
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-8">
              {data.bio}
            </p>

            {/* Skills or Interests (Optional) */}
            {/* <div className="flex flex-wrap gap-3 mb-8">
              {data.skills.map((skill, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-gray-200 text-gray-700 dark:bg-gray-800 dark:text-gray-300 rounded-full text-sm"
                >
                  {skill}
                </span>
              ))}
            </div> */}

            {/* Social Links */}
            <div className="flex justify-center lg:justify-start space-x-6 mb-8">
              {Object.entries(data.socialLinks).map(([platform, url]) => (
                <a
                  key={platform}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-blue-500 dark:hover:text-blue-400 transition duration-300"
                >
                  <i className={`fab fa-${platform} text-2xl`}></i>
                </a>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex justify-center lg:justify-start gap-6">
              <a
                href={data.resumeLink}
                className="inline-block bg-blue-600 text-white py-3 px-6 rounded-lg shadow-lg hover:bg-blue-700 transition duration-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                Download Resume
              </a>
              <a
                href="#contact"
                className="inline-block bg-gray-200 text-gray-800 dark:bg-gray-800 dark:text-gray-200 py-3 px-6 rounded-lg shadow-lg hover:bg-gray-300 dark:hover:bg-gray-700 transition duration-300"
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
