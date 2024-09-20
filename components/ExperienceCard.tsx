import React from "react";
import { ExperienceData } from "../types/portfolioTypes";
import { motion } from "framer-motion";

interface ExperienceProps {
  data: ExperienceData;
  isLeft: boolean;
}

const ExperienceCard: React.FC<ExperienceProps> = ({ data, isLeft }) => {
  return (
    <motion.div
      className={`bg-gray-100 dark:bg-[#1e1e1e] text-gray-800 dark:text-[#dcdcdc] rounded-lg shadow-lg overflow-hidden border border-gray-300 dark:border-gray-700 ${
        isLeft ? "md:mr-6" : "md:ml-6"
      }`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -5, boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)" }}
    >
      <div className="p-6">
        {/* Company and Role */}
        <div className="font-mono mb-4">
          <h2 className="text-xl font-bold text-blue-600 dark:text-blue-400">
            <span className="text-gray-800 dark:text-green-400">const</span>{" "}
            {data.company}{" "}
            <span className="text-gray-800 dark:text-green-400">=</span> {"{"}
          </h2>
          <div className="pl-4">
            <p>
              <span className="text-purple-600 dark:text-purple-400">
                role:
              </span>{" "}
              '{data.role}',
            </p>
            <p>
              <span className="text-purple-600 dark:text-purple-400">
                period:
              </span>{" "}
              '{`${data.startDate} - ${data.endDate}`}',
            </p>
          </div>
        </div>

        {/* Description */}
        <div className="font-mono mb-4">
          <p className="text-gray-600 dark:text-gray-400">
            // {data.description}
          </p>
        </div>

        {/* Achievements */}
        {data.achievements && data.achievements.length > 0 && (
          <div className="mb-4">
            <h4 className="font-mono font-semibold text-gray-700 dark:text-gray-300">
              achievements: [
            </h4>
            <ul className="list-none pl-4 font-mono text-gray-600 dark:text-gray-400">
              {data.achievements.map((achievement, index) => (
                <li key={index}>
                  '{achievement}'
                  {index !== data.achievements.length - 1 ? "," : ""}
                </li>
              ))}
            </ul>
            <p className="font-mono text-gray-700 dark:text-gray-300">],</p>
          </div>
        )}

        {/* Technologies */}
        {data.technologies && data.technologies.length > 0 && (
          <div className="mb-4">
            <h4 className="font-mono font-semibold text-gray-700 dark:text-gray-300">
              technologies: [
            </h4>
            <div className="flex flex-wrap gap-2 pl-4">
              {data.technologies.map((tech, index) => (
                <span
                  key={index}
                  className="bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-green-400 text-xs font-mono px-2.5 py-0.5 rounded-md"
                >
                  '{tech}'{index !== data.technologies.length - 1 ? "," : ""}
                </span>
              ))}
            </div>
            <p className="font-mono text-gray-700 dark:text-gray-300">],</p>
          </div>
        )}

        {/* Closing bracket */}
        <p className="font-mono text-gray-800 dark:text-green-400">{"}"}</p>
      </div>
    </motion.div>
  );
};

export default ExperienceCard;
