import React from "react";
import ExperienceCard from "./ExperienceCard";
import { ExperienceData } from "@/types/portfolioTypes";

interface WorkExperienceProps {
  data: ExperienceData[];
}

const WorkExperience: React.FC<WorkExperienceProps> = ({ data }) => {
  return (
    <section
      id="experience"
      className="py-20 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800"
    >
      <div className="container mx-auto px-4 relative">
        <h2 className="text-4xl font-extrabold text-center text-gray-800 dark:text-white mb-16 tracking-tight">
          Professional Journey
        </h2>
        <div className="relative">
          {/* Timeline - hidden on mobile */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-blue-300 dark:bg-blue-700 hidden md:block"></div>

          <div className="space-y-12">
            {data.map((experience, index) => (
              <div key={experience.id || index} className="relative">
                {/* Timeline node - hidden on mobile */}
                <div className="absolute left-1/2 top-0 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-blue-500 rounded-full border-4 border-white shadow-lg z-20 hidden md:block"></div>

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
                  <div className="md:w-2/12 flex justify-center mb-8 md:mb-0">
                    <div className="text-sm font-semibold text-blue-600 bg-blue-100 py-1 px-3 rounded-full shadow-sm">
                      {experience.startDate} - {experience.endDate || "Present"}
                    </div>
                  </div>
                  <div className="md:w-5/12">
                    {index % 2 !== 0 && (
                      <div className="hidden md:block">
                        <ExperienceCard data={experience} isLeft={false} />
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkExperience;
