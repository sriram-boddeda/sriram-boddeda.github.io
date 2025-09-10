"use client";

import React from "react";
import ProjectCard from "./ProjectCard";
import { ProjectData } from "@/types/portfolioTypes";
import { motion } from "framer-motion";

interface ProjectProps {
  data: ProjectData[];
}

const Projects: React.FC<ProjectProps> = ({ data }) => {
  return (
    <section id="projects" className="py-20 text-gray-800 dark:text-[#dcdcdc]">
      <div className="container mx-auto px-6 md:px-12 lg:px-16 xl:px-20">
        <motion.div
          className="relative z-10"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Section Title */}
          <h2 className="text-3xl font-mono font-semibold tracking-wider text-gray-800 dark:text-[#dcdcdc] mb-4 text-center">
            <span className="text-gray-500">{"//"}</span> Featured Projects
          </h2>
          <p className="text-lg font-mono text-gray-600 dark:text-[#a9a9a9] leading-relaxed text-center mb-12">
            Explore a selection of my most impactful and innovative projects,
            showcasing my skills and passion for development.
          </p>

          {/* Projects Grid */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { staggerChildren: 0.2 },
              },
            }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 items-stretch"
          >
            {data.map((project, index) => (
              <motion.div
                key={project.id || index}
                variants={{
                  hidden: { opacity: 0, y: 50 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
                }}
              >
                <ProjectCard data={project} index={index} />
              </motion.div>
            ))}
          </motion.div>

          {/* View All Projects Button */}
          {data.length > 6 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.5 }}
              className="text-center mt-16"
            >
              <a
                href="/all-projects"
                className="inline-block border-2 border-gray-800 text-gray-800 dark:border-green-500 dark:text-green-500 py-2 px-6 hover:bg-gray-800 hover:text-white dark:hover:bg-green-500 dark:hover:text-black font-mono rounded-lg transition duration-300"
              >
                View All Projects
                <span className="ml-2">→</span>
              </a>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
