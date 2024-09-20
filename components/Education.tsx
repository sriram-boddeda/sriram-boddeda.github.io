import React from "react";
import { EducationData } from "@/types/portfolioTypes";
import EducationCard from "./EducationCard";
import TimelineDateRange from "./TimelineDateRange";
import { motion } from "framer-motion";

interface EducationsProps {
  data: EducationData[];
}

const Education: React.FC<EducationsProps> = ({ data }) => {
  return (
    <section
      id="education"
      className="py-20 bg-gray-100 dark:bg-[#121212] text-gray-800 dark:text-[#dcdcdc]"
    >
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
            // Educational Background
          </h2>

          <div className="relative">
            {/* Timeline - hidden on mobile */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-blue-300 dark:bg-blue-700 hidden md:block"></div>

            <div className="space-y-12">
              {data.map((edu, index) => (
                <motion.div
                  key={edu.id || index}
                  className="relative"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  {/* Timeline node - hidden on mobile */}
                  <div className="absolute left-1/2 top-0 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-blue-400 dark:bg-blue-600 rounded-full border-4 border-white dark:border-[#121212] shadow-lg z-20 hidden md:block"></div>

                  {/* Education card */}
                  <div className="md:flex md:items-center">
                    <div className="md:w-5/12 mb-8 md:mb-0">
                      {index % 2 === 0 ? (
                        <EducationCard data={edu} isLeft={true} />
                      ) : (
                        <div className="md:hidden">
                          <EducationCard data={edu} isLeft={false} />
                        </div>
                      )}
                    </div>
                    <TimelineDateRange
                      startDate={edu.startDate}
                      endDate={edu.endDate}
                    />
                    <div className="md:w-5/12">
                      {index % 2 !== 0 && (
                        <div className="hidden md:block">
                          <EducationCard data={edu} isLeft={false} />
                        </div>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;
