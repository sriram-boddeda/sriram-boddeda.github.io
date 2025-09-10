import React, { useState } from "react";
import { ProjectData } from "@/types/portfolioTypes";
import { motion } from "framer-motion";
import { GitHubIcon } from "./icons/icons";

interface ProjectProps {
  data: ProjectData;
}

const ProjectCard: React.FC<ProjectProps> = ({ data }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="bg-white dark:bg-[#1e1e1e] text-gray-800 dark:text-[#dcdcdc] rounded-lg shadow-lg overflow-hidden h-full flex flex-col"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -5, boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)" }}
    >
      <div className="p-6 flex-grow">
        {/* Project Title */}
        <h2 className="text-xl font-bold text-blue-600 dark:text-blue-400">
          <span className="text-gray-800 dark:text-green-400">const</span>{" "}
          {data.title}{" "}
          <span className="text-gray-800 dark:text-green-400">=</span>{" "}
          <span className="font-medium text-gray-800 dark:text-green-400">
            {"{"}
          </span>
        </h2>

        {/* Project Description */}
        <div
          className="relative"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <p className="text-gray-600 dark:text-gray-400 mb-4 font-mono line-clamp-3">
            <span className="text-gray-500">{"//"}</span> {data.description}
          </p>
          {isHovered && (
            <div className="absolute z-10 bg-gray-100 dark:bg-[#2e2e2e] text-gray-800 dark:text-[#dcdcdc] p-2 rounded shadow-lg border border-gray-300 dark:border-gray-600 w-full">
              {data.description}
            </div>
          )}
        </div>

        {/* Technologies Section */}
        <div className="mb-4">
          <h3 className="text-sm font-mono font-semibold text-gray-700 dark:text-gray-400 mb-2">
            <span className="text-purple-600 dark:text-purple-400">
              technologies
            </span>
            : [
          </h3>
          <div className="flex flex-wrap gap-2 pl-4">
            {data.technologies.map((tech, index) => (
              <span
                key={index}
                className="bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-green-400 text-xs font-mono px-2.5 py-0.5 rounded-md"
              >
                &apos;{tech}&apos;
                {index !== data.technologies.length - 1 ? "," : ""}
              </span>
            ))}
          </div>
          <h3 className="text-sm font-mono font-semibold text-gray-700 dark:text-gray-400 mt-2">
            ],
          </h3>
        </div>
      </div>

      {/* Footer Section */}
      <div className="p-6 mt-auto">
        <div className="flex justify-between items-center font-mono">
          {/* View Project Button */}
            <motion.a
              href={data.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-4 py-2 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-blue-400 rounded-md hover:bg-gray-300 dark:hover:bg-gray-600 transition duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              viewProject()
            </motion.a>

          {/* GitHub Link */}
          {data.github && (
            <motion.a
              href={data.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="View source on GitHub"
              className="text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-white transition duration-300"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              {/* <svg
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
              </svg> */}
              <GitHubIcon />
            </motion.a>
          )}
        </div>
        {/* Closing Bracket */}
        <p className="font-medium font-mono text-gray-800 dark:text-green-400">
          {"}"}
        </p>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
