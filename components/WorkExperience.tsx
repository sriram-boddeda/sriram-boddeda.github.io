import React from "react";
import ExperienceCard from "./ExperienceCard";
import { ExperienceData } from "@/types/portfolioTypes";
import TimelineDateRange from "./TimelineDateRange";
import { motion } from "framer-motion";

interface WorkExperienceProps {
  data: ExperienceData[];
}

const WorkExperience: React.FC<WorkExperienceProps> = ({ data }) => {
  return (
    <section
      id="experience"
      className="py-20 text-gray-800 dark:text-[#dcdcdc]"
    >
      <div className="container mx-auto px-6 md:px-12 lg:px-16 xl:px-20 relative">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10"
        >
          <h2 className="text-3xl font-mono font-semibold tracking-wider text-gray-800 dark:text-[#dcdcdc] mb-16 text-center">
            <span className="text-gray-500">{"//"}</span> Professional Journey
          </h2>

          <div className="relative">
            {/* Timeline - hidden on mobile */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-blue-300 dark:bg-blue-700 hidden md:block"></div>

            <div className="space-y-12">
              {data.map((experience, index) => (
                <motion.div
                  key={experience.id || index}
                  className="relative"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  {/* Timeline node - hidden on mobile */}
                  <div className="absolute left-1/2 top-0 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-blue-500 rounded-full border-4 border-white dark:border-[#121212] shadow-lg z-20 hidden md:block"></div>

                  {/* Experience card */}
                  <div className="md:flex md:items-center">
                    <div className="md:w-5/12 mb-8 md:mb-0">
                      {index % 2 === 0 ? (
                        <ExperienceCard data={experience} isLeft={true} />
                      ) : (
                        <div className="md:hidden">
                          <ExperienceCard data={experience} isLeft={false} />
                        </div>
                      )}
                    </div>
                    <TimelineDateRange
                      startDate={experience.startDate}
                      endDate={experience.endDate}
                    />
                    <div className="md:w-5/12">
                      {index % 2 !== 0 && (
                        <div className="hidden md:block">
                          <ExperienceCard data={experience} isLeft={false} />
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

export default WorkExperience;
