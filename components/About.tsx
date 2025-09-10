"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { AboutData } from "@/types/portfolioTypes";
import { GitHubIcon, LinkedInIcon } from "./icons/icons";
import Technology from "./Technology";
import { motion } from "framer-motion";

type AboutProps = {
  data: AboutData;
};

const About: React.FC<AboutProps> = ({ data }) => {
  const [typedText, setTypedText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const roles = [
    "Full Stack Developer",
    "Software Engineer",
    "Problem Solver",
    "Code Enthusiast",
  ];

  useEffect(() => {
    const currentRole = roles[currentIndex];
    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          if (typedText.length < currentRole.length) {
            setTypedText(currentRole.slice(0, typedText.length + 1));
          } else {
            setTimeout(() => setIsDeleting(true), 2000);
          }
        } else {
          if (typedText.length > 0) {
            setTypedText(typedText.slice(0, -1));
          } else {
            setIsDeleting(false);
            setCurrentIndex((prev) => (prev + 1) % roles.length);
          }
        }
      },
      isDeleting ? 50 : 100
    );

    return () => clearTimeout(timeout);
  }, [typedText, currentIndex, isDeleting, roles]);

  return (
    <section className="min-h-screen flex items-center py-20 bg-transparent text-gray-800 dark:text-[#dcdcdc] relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-20 w-1 h-1 bg-green-500 rounded-full animate-ping"></div>
        <div className="absolute bottom-32 left-1/4 w-1.5 h-1.5 bg-purple-500 rounded-full animate-bounce"></div>
        <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-yellow-500 rounded-full animate-pulse"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content - Now comes first on mobile */}
          <motion.div
            className="flex flex-col order-2 lg:order-1"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Code-style introduction */}
            <motion.div
              className="font-mono text-sm text-gray-600 dark:text-gray-400 mb-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <span className="text-purple-600 dark:text-purple-400">
                const
              </span>{" "}
              <span className="text-blue-600 dark:text-blue-400">
                developer
              </span>{" "}
              <span className="text-gray-600 dark:text-gray-400">=</span>{" "}
              <span className="text-yellow-600 dark:text-yellow-400">
                {"{"}
              </span>
            </motion.div>

            <motion.div
              className="pl-4 mb-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              <div className="font-mono text-sm mb-2">
                <span className="text-red-500 dark:text-red-400">name</span>
                <span className="text-gray-600 dark:text-gray-400">: </span>
                <span className="text-green-600 dark:text-green-400">
                  &quot;{data.name}&quot;
                </span>
                <span className="text-gray-600 dark:text-gray-400">,</span>
              </div>
              <div className="font-mono text-sm mb-4">
                <span className="text-red-500 dark:text-red-400">role</span>
                <span className="text-gray-600 dark:text-gray-400">: </span>
                <span className="text-green-600 dark:text-green-400">
                  &quot;{typedText}&quot;<span className="animate-pulse">|</span>
                </span>
                <span className="text-gray-600 dark:text-gray-400">,</span>
              </div>
            </motion.div>

            {/* Main heading */}
            <motion.h1
              className="text-5xl lg:text-7xl font-bold mb-6 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <span className="text-gray-900 dark:text-white">
                {data.name.split(" ")[0]}
              </span>
              <br />
              <span className="text-blue-600 dark:text-blue-400">
                {data.name.split(" ").slice(1).join(" ")}
              </span>
            </motion.h1>

            {/* Bio */}
            <motion.p
              className="text-lg text-gray-700 dark:text-gray-300 mb-8 leading-relaxed max-w-lg"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              {data.bio}
            </motion.p>

            {/* Skills with enhanced styling */}
            <motion.div
              className="mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.0 }}
            >
              <div className="font-mono text-sm text-gray-600 dark:text-gray-400 mb-3">
                <span className="text-red-500 dark:text-red-400">skills</span>
                <span className="text-gray-600 dark:text-gray-400">: [</span>
              </div>
              <div className="flex flex-wrap gap-3 pl-4">
                {data.skills.map((skill, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 1.2 + index * 0.1 }}
                  >
                    <Technology name={skill} variant="pill" />
                  </motion.div>
                ))}
              </div>
              <div className="font-mono text-sm text-gray-600 dark:text-gray-400 mt-2">
                <span className="text-gray-600 dark:text-gray-400">],</span>
              </div>
            </motion.div>

            {/* CTA Buttons with enhanced styling */}
            <motion.div
              className="flex flex-wrap gap-4 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.4 }}
            >
              <motion.a
                href={data.ctaLink}
                className="inline-flex items-center justify-center px-8 py-4 bg-blue-600 text-white rounded-lg shadow-lg text-base font-semibold hover:bg-blue-700 hover:shadow-xl transition-all duration-300 font-mono"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                {data.ctaText}()
              </motion.a>
              <motion.a
                href={data.resumeLink}
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-transparent border-2 border-gray-300 dark:border-gray-600 text-gray-800 dark:text-gray-300 rounded-lg shadow-lg text-base font-semibold hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-300 font-mono"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                downloadCV()
              </motion.a>
            </motion.div>

            {/* Social Links */}
            <motion.div
              className="flex space-x-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.6 }}
            >
              <motion.a
                href={data.socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub profile"
                className="text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition-all duration-300"
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
              >
                <GitHubIcon size={32} />
              </motion.a>
              <motion.a
                href={data.socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn profile"
                className="text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition-all duration-300"
                whileHover={{ scale: 1.2, rotate: -5 }}
                whileTap={{ scale: 0.9 }}
              >
                <LinkedInIcon size={28} />
              </motion.a>
            </motion.div>

            {/* Closing bracket */}
            <motion.div
              className="font-mono text-sm text-gray-600 dark:text-gray-400 mt-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.8 }}
            >
              <span className="text-yellow-600 dark:text-yellow-400">
                {"}"}
              </span>
            </motion.div>
          </motion.div>

          {/* Profile Image with enhanced styling */}
          <motion.div
            className="w-full flex justify-center order-1 lg:order-2"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative">
              {/* Glowing background effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-lg blur-xl"></div>

              {/* Image container */}
              <motion.div
                className="relative bg-white dark:bg-gray-800 p-2 rounded-lg shadow-2xl"
                whileHover={{ y: -10, rotate: 2 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Image
                  src={data.profileImage}
                  alt={`${data.name} portrait`}
                  width={400}
                  height={500}
                  sizes="(max-width: 768px) 80vw, 400px"
                  priority
                  className="object-cover rounded-lg"
                />

                {/* Code overlay effect */}
                <div className="absolute top-4 left-4 bg-black/80 text-green-400 px-2 py-1 rounded text-xs font-mono">
                  <span className="animate-pulse">●</span> online
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
