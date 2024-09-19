import React from "react";
import { EducationData } from "../types/portfolioTypes";

interface EducationProps {
  data: EducationData;
  isLeft: boolean;
}

const EducationCard: React.FC<EducationProps> = ({ data, isLeft }) => {
  return (
    <div
      className={`bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 transition duration-300 ease-in-out hover:shadow-lg ${
        isLeft ? "md:mr-6" : "md:ml-6"
      }`}
    >
      <div className="flex flex-col md:flex-row items-center">
        <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center mb-4 md:mb-0 md:mr-4">
          {data.logo ? (
            <img
              src={data.logo}
              alt={data.institution}
              className="w-12 h-12 rounded-full"
            />
          ) : (
            <span className="text-2xl font-bold text-blue-600 dark:text-blue-400">
              {data.institution[0]}
            </span>
          )}
        </div>
        <div className="text-center md:text-left flex-grow">
          <h2 className="text-xl font-bold text-gray-800 dark:text-white">
            {data.degree}
          </h2>
          <h3 className="text-lg text-blue-600 dark:text-blue-400">
            {data.institution}
          </h3>
        </div>
      </div>
      <p className="text-gray-600 dark:text-gray-300 mt-4">
        {data.description}
      </p>
      {data.relevantCourses && data.relevantCourses.length > 0 && (
        <div className="mt-4">
          <h4 className="text-md font-semibold text-gray-700 dark:text-gray-200">
            Relevant Courses:
          </h4>
          <ul className="list-disc list-outside ml-5 text-gray-600 dark:text-gray-300 space-y-1 mt-2">
            {data.relevantCourses.map((course, index) => (
              <li key={index}>{course}</li>
            ))}
          </ul>
        </div>
      )}
      {data.gpa && (
        <div className="mt-4">
          <span className="text-sm font-semibold text-gray-700 dark:text-gray-200 bg-blue-100 dark:bg-blue-900 px-2 py-1 rounded">
            GPA: {data.gpa}
          </span>
        </div>
      )}
    </div>
  );
};

export default EducationCard;
