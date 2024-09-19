import React from "react";
import { TechnicalSkillData } from "../types/portfolioTypes";
import { motion } from "framer-motion";

interface TechnicalSkillsProps {
  data: TechnicalSkillData[];
}

const TechnicalSkills: React.FC<TechnicalSkillsProps> = ({ data }) => {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-4xl font-bold text-center mb-16 text-gray-800 dark:text-white"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Technical Skills
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {data.map((skill, index) => (
            <motion.div
              key={skill.category || index}
              className="bg-white dark:bg-gray-700 rounded-lg shadow-md overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="bg-blue-600 dark:bg-blue-800 p-4">
                <h3 className="text-xl font-semibold text-white">
                  {skill.category}
                </h3>
              </div>
              <ul className="p-6 space-y-3">
                {skill.skills.map((item, idx) => (
                  <li key={item || idx} className="flex items-center">
                    <svg
                      className="w-5 h-5 mr-3 text-green-500 dark:text-green-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <span className="text-gray-700 dark:text-gray-200">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechnicalSkills;
