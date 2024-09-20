import React from "react";
import { EducationData } from "../types/portfolioTypes";
import { motion } from "framer-motion";

interface EducationProps {
  data: EducationData;
  isLeft: boolean;
}

const EducationCard: React.FC<EducationProps> = ({ data, isLeft }) => {
  return (
    <motion.div
      className={`bg-gray-100 dark:bg-[#1e1e1e] text-gray-800 dark:text-[#dcdcdc] rounded-lg shadow-lg overflow-hidden border border-gray-300 dark:border-gray-700 ${
        isLeft ? "md:mr-6" : "md:ml-6"
      }`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -5, boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)" }}
    >
      <div className="p-6 font-mono">
        <h2 className="text-xl font-bold text-blue-600 dark:text-blue-400 mb-2">
          <span className="text-gray-800 dark:text-green-400">class</span>{" "}
          {data.institution.replace(/\s+/g, "")} {"{"}
        </h2>
        <div className="pl-4">
          <p>
            <span className="text-purple-600 dark:text-purple-400">
              degree:
            </span>{" "}
            &#39;{data.degree}&#39;,
          </p>
          <p>
            <span className="text-purple-600 dark:text-purple-400">
              period:
            </span>{" "}
            &#39;{`${data.startDate} - ${data.endDate}`}&#39;,
          </p>
          {data.gpa && (
            <p>
              <span className="text-purple-600 dark:text-purple-400">gpa:</span>{" "}
              {data.gpa},
            </p>
          )}
        </div>

        <div className="mt-4">
          <p className="text-gray-600 dark:text-gray-400">
            <span className="text-gray-500">{"//"}</span> {data.description}
          </p>
        </div>

        {data.relevantCourses && data.relevantCourses.length > 0 && (
          <div className="mt-4">
            <p className="font-semibold text-gray-700 dark:text-gray-300">
              relevantCourses: [
            </p>
            <ul className="list-none pl-4 text-gray-600 dark:text-gray-400">
              {data.relevantCourses.map((course, index) => (
                <li key={index}>
                  &#39;{course}&#39;
                  {index !== data.relevantCourses.length - 1 ? "," : ""}
                </li>
              ))}
            </ul>
            <p className="text-gray-700 dark:text-gray-300">],</p>
          </div>
        )}

        <p className="mt-4 text-gray-800 dark:text-green-400">{"}"}</p>
      </div>
    </motion.div>
  );
};

export default EducationCard;
