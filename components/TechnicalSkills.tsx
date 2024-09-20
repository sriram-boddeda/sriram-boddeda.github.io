import React from "react";
import { TechnicalSkillData } from "../types/portfolioTypes";
import { motion } from "framer-motion";
import {
  CodeBracketIcon,
  ServerIcon,
  DevicePhoneMobileIcon,
} from "@heroicons/react/24/solid";

interface TechnicalSkillsProps {
  data: TechnicalSkillData[];
}

const iconMap: {
  [key: string]: React.ComponentType<React.SVGProps<SVGSVGElement>>;
} = {
  Languages: CodeBracketIcon,
  "Frameworks & Libraries": DevicePhoneMobileIcon,
  "Tools & Platforms": ServerIcon,
};

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
            // Technical Skills
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {data.map((skill, index) => {
              const Icon =
                iconMap[skill.category as keyof typeof iconMap] ||
                CodeBracketIcon;
              return (
                <motion.div
                  key={skill.id || index}
                  className="bg-white dark:bg-[#1e1e1e] rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-200 dark:border-gray-700"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="p-6 font-mono">
                    <div className="flex items-center mb-4">
                      <div className="w-10 h-10 flex items-center justify-center bg-blue-100 dark:bg-blue-900 rounded-full">
                        <Icon className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                      </div>
                      <h3 className="ml-4 text-lg font-semibold text-gray-800 dark:text-[#dcdcdc]">
                        {skill.category}
                      </h3>
                    </div>
                    <div className="mt-4">
                      <p className="text-blue-600 dark:text-blue-400">
                        const {skill.category.toLowerCase().replace(/\s+/g, "")}{" "}
                        = [
                      </p>
                      <div className="pl-4">
                        {skill.skills.map((item, idx) => (
                          <p
                            key={idx}
                            className="text-gray-700 dark:text-gray-300"
                          >
                            '{item}'{idx !== skill.skills.length - 1 ? "," : ""}
                          </p>
                        ))}
                      </div>
                      <p className="text-blue-600 dark:text-blue-400">];</p>
                    </div>
                  </div>
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
