import { EducationData } from "@/types/portfolioTypes";
import React from "react";
import EducationCard from "./EducationCard";
import TimelineDateRange from "./TimelineDateRange";

interface EducationsProps {
  data: EducationData[];
}

const Education: React.FC<EducationsProps> = ({ data }) => {
  return (
    <section
      id="education"
      className="py-20 bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-800"
    >
      <div className="container mx-auto px-4 relative">
        <h2 className="text-4xl font-extrabold text-center text-gray-800 dark:text-white mb-16 tracking-tight">
          Educational Background
        </h2>
        <div className="relative">
          {/* Timeline - hidden on mobile */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-blue-300 dark:bg-blue-700 hidden md:block"></div>

          <div className="space-y-12">
            {data.map((edu, index) => (
              <div key={edu.id || index} className="relative">
                {/* Timeline node - hidden on mobile */}
                <div className="absolute left-1/2 top-0 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-blue-400 dark:bg-blue-600 rounded-full border-4 border-white dark:border-gray-800 shadow-lg z-20 hidden md:block"></div>

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
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
