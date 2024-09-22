import React from "react";
import { TechnicalSkillData } from "../types/portfolioTypes";
import { motion } from "framer-motion";

interface TechnicalSkillsProps {
  data: TechnicalSkillData[];
}

const TechnicalSkills: React.FC<TechnicalSkillsProps> = ({ data }) => {
  return (
    <section className="py-20 bg-gray-100 dark:bg-[#121212] text-gray-800 dark:text-[#dcdcdc]">
      <div className="container mx-auto px-6 md:px-12 lg:px-16 xl:px-20 relative">
        {/* Background Elements */}
        <div className="absolute inset-0 w-full h-full pointer-events-none">
          <div className="absolute top-10 left-0 w-72 h-72 bg-gradient-to-br from-blue-400 to-transparent dark:from-blue-700 rounded-full opacity-10 dark:opacity-20 filter blur-2xl"></div>
          <div className="absolute bottom-10 right-0 w-72 h-72 bg-gradient-to-br from-green-400 to-transparent dark:from-green-700 rounded-full opacity-10 dark:opacity-20 filter blur-2xl"></div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10"
        >
          <h2 className="text-3xl font-mono font-semibold tracking-wider text-gray-800 dark:text-[#dcdcdc] mb-16 text-center">
            <span className="text-gray-500">{"//"}</span> Technical Skills
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {data.map((skill, index) => {
              return (
                <motion.div
                  key={skill.id || index}
                  className="bg-white dark:bg-[#1e1e1e] text-gray-800 dark:text-[#dcdcdc] rounded-lg shadow-lg overflow-hidden  p-4 font-mono"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  whileHover={{
                    y: -5,
                    boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
                  }}
                >
                  {/* Skill Category */}
                  <p className="text-lg font-semibold text-green-600 dark:text-green-400 mb-3">
                    <span className="text-gray-400 dark:text-gray-500">
                      {"//"}
                    </span>{" "}
                    {skill.category}
                  </p>

                  {/* Skills Array Declaration */}
                  <p className="text-base font-medium text-blue-600 dark:text-blue-400 mb-2">
                    const skills = [
                  </p>

                  {/* Skills List */}
                  <div className="pl-4 space-y-1">
                    {skill.skills.map((item, idx) => (
                      <p
                        key={idx}
                        className="text-base text-gray-700 dark:text-gray-300"
                      >
                        &#39;{item}&#39;
                        {idx !== skill.skills.length - 1 ? "," : ""}
                      </p>
                    ))}
                  </div>

                  {/* Array Closing Bracket */}
                  <p className="text-base font-medium text-blue-600 dark:text-blue-400 mt-2">
                    ];
                  </p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TechnicalSkills;
