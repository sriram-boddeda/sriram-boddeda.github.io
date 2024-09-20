"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { HeroData } from "@/types/portfolioTypes";

type HeroProps = {
  data: HeroData;
};

const Hero: React.FC<HeroProps> = ({ data }) => {
  const { name, title, description, ctaText, ctaLink, profileImage, skills } =
    data;

  return (
    <div className="relative min-h-screen flex items-center bg-[#0a0b1a] text-[#e0e0e0] dark:bg-[#1b1c2e] dark:text-[#e0e0e0] overflow-hidden font-mono">
      {/* Code-themed Background Animation */}
      <div className="absolute inset-0 opacity-20 pointer-events-none z-0">
        <div
          className="absolute inset-0 bg-repeat"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100' width='100px' height='100px'%3E%3Cg fill='%2355F991' fill-opacity='0.2'%3E%3Crect width='100' height='100' fill='none' stroke='%2355F991' stroke-width='0.5'/%3E%3Cpath d='M25 100 L50 0 L75 100 Z'/%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: "50px 50px",
          }}
        ></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 z-10 flex flex-col lg:flex-row items-center justify-between gap-8">
        {/* Text Content */}
        <motion.div
          className="lg:w-1/2 text-center lg:text-left"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight mb-2 text-[#55F991] dark:text-[#9dffbe]">
            {name}
          </h1>
          <p className="text-2xl sm:text-3xl font-semibold text-[#29ABE2] dark:text-[#6ed4ff] mb-4">
            {title}
          </p>
          <p className="text-base sm:text-lg text-[#BBBBBB] dark:text-[#CCCCCC] mb-6 max-w-lg">
            {description}
          </p>
          <motion.div
            className="flex flex-wrap gap-2 mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            {skills.map((skill, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-[#141528] text-[#55F991] dark:bg-[#2a2c47] dark:text-[#9dffbe] rounded-full text-xs border border-[#55F991] dark:border-[#9dffbe] animate-pulse"
              >
                {skill}
              </span>
            ))}
          </motion.div>
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <a
              href={ctaLink}
              className="inline-flex items-center justify-center px-6 py-3 border border-[#55F991] text-base font-medium rounded-md text-[#0a0b1a] bg-[#55F991] hover:bg-[#6ff99b] transition duration-300"
            >
              {ctaText}
              <svg
                className="ml-2 -mr-1 w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
            <a
              href="#projects"
              className="inline-flex items-center justify-center px-6 py-3 border border-[#555a7b] text-base font-medium rounded-md text-[#BBBBBB] dark:text-[#CCCCCC] hover:bg-[#1b1c2e] dark:hover:bg-[#313452] transition duration-300"
            >
              View Projects
            </a>
          </motion.div>
        </motion.div>

        {/* Profile Image with Animated Tech Elements */}
        <motion.div
          className="lg:w-[40%] mt-12 lg:mt-0 relative"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="relative w-full h-full aspect-square border border-[#55F991] dark:border-[#9dffbe] rounded-full p-4 bg-[#0a0b1a] dark:bg-[#1b1c2e] shadow-lg">
            <div className="absolute inset-x-auto inset-y-auto w-full h-full bg-gradient-to-br from-[#29ABE2] to-[#f97316] rounded-full opacity-30 animate-pulse"></div>
            <Image
              src={profileImage}
              alt="Profile"
              layout="fill"
              objectFit="cover"
              className="rounded-full shadow-2xl border-4 border-[#0a0b1a] dark:border-[#1b1c2e]"
            />
            {/* Tech Badges */}
            <div className="absolute -top-6 left-6 w-12 h-12 bg-[#F7DF1E] rounded-full flex items-center justify-center shadow-lg">
              <span className="text-xl font-bold text-[#000]">JS</span>
            </div>
            <div className="absolute -bottom-6 right-6 w-12 h-12 bg-[#306998] rounded-full flex items-center justify-center shadow-lg">
              <span className="text-xl font-bold text-white">Py</span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.8,
          duration: 0.8,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      >
        <svg
          className="w-6 h-6 text-[#555a7b] dark:text-[#9dffbe] animate-bounce"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </motion.div>
    </div>
  );
};

export default Hero;
