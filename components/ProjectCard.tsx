import React from "react";
import { ProjectData } from "@/types/portfolioTypes";
import { motion } from "framer-motion";
import { GitHubIcon } from "./icons/icons";

interface ProjectProps {
  data: ProjectData;
  index: number;
}

const ProjectCard: React.FC<ProjectProps> = ({ data, index }) => {
  // Truncate description to ensure consistent card heights
  const truncateDescription = (text: string, maxLength: number = 120) => {
    if (text.length <= maxLength) return text;
    return text.substring(0, maxLength).trim() + "...";
  };

  const demoHref = (data.link ?? "").trim();
  const githubHref = (data.github ?? "").trim();
  const showDemo = demoHref.length > 0;
  const showGithub = githubHref.length > 0;
  const showLinks = showDemo || showGithub;

  return (
    <motion.div
      className="bg-white dark:bg-[#1a1a1a] border border-gray-200 dark:border-gray-700 rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden group h-full flex flex-col"
      whileHover={{ y: -4, scale: 1.01 }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
    >
      <div className="p-8 flex-grow flex flex-col">
        {/* Object declaration */}
        <div className="font-mono text-sm mb-6">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-gray-500 dark:text-gray-400 text-xs">
              {String(index).padStart(2, "0")}
            </span>
            <span className="text-purple-600 dark:text-purple-400">const</span>
            <span className="text-blue-600 dark:text-blue-400 font-semibold">
              {data.title.replace(/\s+/g, "")}
            </span>
            <span className="text-gray-600 dark:text-gray-400">=</span>
            <span className="text-yellow-600 dark:text-yellow-400">{"{"}</span>
          </div>
        </div>

        {/* Main content - flex-grow to push footer down */}
        <div className="pl-4 space-y-4 flex-grow">
          {/* Description */}
          <div className="space-y-2">
            <div className="font-mono text-sm">
              <span className="text-red-500 dark:text-red-400">
                description
              </span>
              <span className="text-gray-600 dark:text-gray-400">: </span>
              <span className="text-green-600 dark:text-green-400">
                &quot;{truncateDescription(data.description)}&quot;
              </span>
              <span className="text-gray-600 dark:text-gray-400">,</span>
            </div>
          </div>

          {/* Technologies */}
          {data.technologies && data.technologies.length > 0 && (
            <div className="font-mono text-sm">
              <div className="mb-3">
                <span className="text-red-500 dark:text-red-400">stack</span>
                <span className="text-gray-600 dark:text-gray-400">: [</span>
              </div>
              <div className="flex flex-wrap gap-2 pl-4 mb-2">
                {data.technologies.slice(0, 4).map((tech, idx) => (
                  <span
                    key={idx}
                    className="bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 px-3 py-1 rounded-full text-xs font-medium border border-blue-200 dark:border-blue-700 hover:bg-blue-100 dark:hover:bg-blue-900/50 transition-colors"
                  >
                    {tech}
                  </span>
                ))}
                {data.technologies.length > 4 && (
                  <span className="text-gray-500 dark:text-gray-400 text-xs self-center">
                    +{data.technologies.length - 4} more
                  </span>
                )}
              </div>
              <div>
                <span className="text-gray-600 dark:text-gray-400">],</span>
              </div>
            </div>
          )}
        </div>

        {/* Links - Only show when at least one link exists */}
        {showLinks && (
          <div className="font-mono text-sm mt-auto">
            <div className="mb-2">
              <span className="text-red-500 dark:text-red-400">links</span>
              <span className="text-gray-600 dark:text-gray-400">: {"{"}</span>
            </div>
            <div className="pl-4 space-y-1">
              {showDemo && (
                <div className="flex items-center gap-2">
                  <span className="text-purple-600 dark:text-purple-400 text-xs">
                    demo:
                  </span>
                  <motion.a
                    href={demoHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 dark:text-blue-400 hover:underline text-xs"
                    whileHover={{ scale: 1.05 }}
                  >
                    &quot;view-project&quot;
                  </motion.a>
                  {showGithub && (
                    <span className="text-gray-600 dark:text-gray-400">,</span>
                  )}
                </div>
              )}
              {showGithub && (
                <div className="flex items-center gap-2">
                  <span className="text-purple-600 dark:text-purple-400 text-xs">
                    source:
                  </span>
                  <motion.a
                    href={githubHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 dark:text-blue-400 hover:underline text-xs flex items-center gap-1"
                    whileHover={{ scale: 1.05 }}
                  >
                    <GitHubIcon size={12} />
                    &quot;github&quot;
                  </motion.a>
                </div>
              )}
            </div>
            <div className="mt-2">
              <span className="text-gray-600 dark:text-gray-400">{"}"}</span>
            </div>
          </div>
        )}

        {/* Closing bracket */}
        <div className="font-mono text-sm mt-6">
          <span className="text-yellow-600 dark:text-yellow-400">{"}"}</span>
          <span className="text-gray-600 dark:text-gray-400">,</span>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
