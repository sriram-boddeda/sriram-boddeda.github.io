import React from "react";
import { EducationData } from "../types/portfolioTypes";
import { motion } from "framer-motion";

interface EducationProps {
  data: EducationData;
  index: number;
}

const EducationCard: React.FC<EducationProps> = ({ data, index }) => {
  const formatDate = (dateStr: string) => {
    if (dateStr === "Present") return "Present";
    const [year, month] = dateStr.split("-");
    const monthNames = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];
    return `${monthNames[parseInt(month) - 1]} ${year}`;
  };

  return (
    <motion.div
      className="bg-white dark:bg-[#1a1a1a] border border-gray-200 dark:border-gray-700 rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden group"
      whileHover={{ y: -4, scale: 1.01 }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
    >
      <div className="p-8">
        {/* Class declaration */}
        <div className="font-mono text-sm mb-6">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-gray-500 dark:text-gray-400 text-xs">
              {String(index).padStart(2, "0")}
            </span>
            <span className="text-purple-600 dark:text-purple-400">class</span>
            <span className="text-blue-600 dark:text-blue-400 font-semibold">
              {data.institution.replace(/\s+/g, "")}
            </span>
            <span className="text-yellow-600 dark:text-yellow-400">{"{"}</span>
          </div>
        </div>

        {/* Main content */}
        <div className="pl-4 space-y-4">
          {/* Degree and period */}
          <div className="space-y-2">
            <div className="font-mono text-sm">
              <span className="text-red-500 dark:text-red-400">degree</span>
              <span className="text-gray-600 dark:text-gray-400">: </span>
              <span className="text-green-600 dark:text-green-400">
                &quot;{data.degree}&quot;
              </span>
              <span className="text-gray-600 dark:text-gray-400">,</span>
            </div>
            <div className="font-mono text-sm">
              <span className="text-red-500 dark:text-red-400">period</span>
              <span className="text-gray-600 dark:text-gray-400">: </span>
              <span className="text-green-600 dark:text-green-400">
                &quot;{formatDate(data.startDate)} - {formatDate(data.endDate)}&quot;
              </span>
              <span className="text-gray-600 dark:text-gray-400">,</span>
            </div>
            {data.gpa && (
              <div className="font-mono text-sm">
                <span className="text-red-500 dark:text-red-400">gpa</span>
                <span className="text-gray-600 dark:text-gray-400">: </span>
                <span className="text-orange-600 dark:text-orange-400">
                  {data.gpa}
                </span>
                <span className="text-gray-600 dark:text-gray-400">,</span>
              </div>
            )}
          </div>

          {/* Relevant Courses */}
          {data.relevantCourses && data.relevantCourses.length > 0 && (
            <div className="font-mono text-sm">
              <div className="mb-3">
                <span className="text-red-500 dark:text-red-400">courses</span>
                <span className="text-gray-600 dark:text-gray-400">: [</span>
              </div>
              <div className="grid grid-cols-1 gap-2 pl-4 mb-2">
                {data.relevantCourses.map((course, idx) => (
                  <div key={idx} className="flex items-start gap-2">
                    <span className="text-emerald-600 dark:text-emerald-400 text-xs mt-1">
                      ▸
                    </span>
                    <span className="text-gray-700 dark:text-gray-300 text-xs">
                      {course}
                    </span>
                  </div>
                ))}
              </div>
              <div>
                <span className="text-gray-600 dark:text-gray-400">]</span>
              </div>
            </div>
          )}
        </div>

        {/* Closing bracket */}
        <div className="font-mono text-sm mt-6">
          <span className="text-yellow-600 dark:text-yellow-400">{"}"}</span>
          <span className="text-gray-600 dark:text-gray-400">,</span>
        </div>
      </div>
    </motion.div>
  );
};

export default EducationCard;
