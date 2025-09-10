import React from "react";
import { EducationData } from "@/types/portfolioTypes";
import EducationCard from "./EducationCard";
import { motion } from "framer-motion";

interface EducationsProps {
  data: EducationData[];
}

const Education: React.FC<EducationsProps> = ({ data }) => {
  return (
    <section id="education" className="py-20 text-gray-800 dark:text-[#dcdcdc]">
      <div className="container mx-auto px-6 md:px-12 lg:px-16 xl:px-20">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-mono font-bold tracking-wider text-gray-800 dark:text-[#dcdcdc] mb-4 text-center">
            <span className="text-green-500 dark:text-green-400">const</span>{" "}
            <span className="text-blue-600 dark:text-blue-400">education</span>{" "}
            <span className="text-gray-600 dark:text-gray-400">=</span>{" "}
            <span className="text-yellow-600 dark:text-yellow-400">[</span>
          </h2>
          <p className="text-center text-gray-600 dark:text-gray-400 mb-16 font-mono">
            <span className="text-gray-500">{"//"}</span> Academic foundation
            and continuous learning
          </p>

          <div className="relative max-w-4xl mx-auto">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-emerald-500 via-blue-500 to-emerald-500 hidden md:block"></div>

            <div className="space-y-12">
              {data.map((edu, index) => (
                <motion.div
                  key={edu.id || index}
                  className="relative"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                >
                  {/* Timeline node */}
                  <div className="absolute left-6 top-8 w-4 h-4 bg-emerald-500 rounded-full border-4 border-white dark:border-[#0a0a0a] shadow-lg z-10 hidden md:block">
                    <div className="absolute inset-1 bg-white dark:bg-[#0a0a0a] rounded-full"></div>
                  </div>

                  {/* Card container */}
                  <div className="md:ml-16">
                    <EducationCard data={edu} index={index} />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="text-center mt-8">
            <p className="text-4xl font-mono font-bold text-yellow-600 dark:text-yellow-400">
              ];
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;
