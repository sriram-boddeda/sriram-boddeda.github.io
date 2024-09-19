import React from "react";
import { ExperienceData } from "../types/portfolioTypes";

interface ExperienceProps {
  data: ExperienceData;
  isLeft: boolean;
}

const ExperienceCard: React.FC<ExperienceProps> = ({ data, isLeft }) => {
  return (
    <div
      className={`bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg transition-transform transform hover:scale-[1.02] hover:shadow-xl ${
        isLeft ? "md:mr-6" : "md:ml-6"
      }`}
    >
      <div className="flex flex-col md:flex-row items-center">
        <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center mb-4 md:mb-0 md:mr-4">
          {data.logo ? (
            <img
              src={data.logo}
              alt={data.company}
              className="w-12 h-12 rounded-full"
            />
          ) : (
            <span className="text-2xl font-bold text-blue-600 dark:text-blue-400">
              {data.company[0]}
            </span>
          )}
        </div>
        <div className="text-center md:text-left flex-grow">
          <h2 className="text-xl font-bold text-gray-800 dark:text-white">
            {data.role}
          </h2>
          <h3 className="text-lg text-blue-600 dark:text-blue-400">
            {data.company}
          </h3>
        </div>
      </div>
      <p className="text-gray-600 dark:text-gray-300 mt-4">
        {data.description}
      </p>
      {data.achievements && data.achievements.length > 0 && (
        <div className="mt-4">
          <h4 className="text-md font-semibold text-gray-700 dark:text-gray-200">
            Key Achievements:
          </h4>
          <ul className="list-disc list-outside ml-5 text-gray-600 dark:text-gray-300 space-y-1">
            {data.achievements.map((achievement, index) => (
              <li key={index}>{achievement}</li>
            ))}
          </ul>
        </div>
      )}
      {data.technologies && data.technologies.length > 0 && (
        <div className="mt-4">
          <h4 className="text-md font-semibold text-gray-700 dark:text-gray-200">
            Technologies Used:
          </h4>
          <div className="flex flex-wrap gap-2 mt-2">
            {data.technologies.map((tech, index) => (
              <span
                key={index}
                className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs font-medium px-2.5 py-0.5 rounded"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ExperienceCard;
