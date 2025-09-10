import React from "react";
import { ExperienceData } from "../types/portfolioTypes";
import { motion } from "framer-motion";

interface ExperienceProps {
  data: ExperienceData;
  index: number;
}

const ExperienceCard: React.FC<ExperienceProps> = ({ data, index }) => {
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
        {/* Object declaration */}
        <div className="font-mono text-sm mb-6">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-gray-500 dark:text-gray-400 text-xs">
              {String(index).padStart(2, "0")}
            </span>
            <span className="text-purple-600 dark:text-purple-400">const</span>
            <span className="text-blue-600 dark:text-blue-400 font-semibold">
              {data.company.replace(/\s+/g, "")}
            </span>
            <span className="text-gray-600 dark:text-gray-400">=</span>
            <span className="text-yellow-600 dark:text-yellow-400">{"{"}</span>
          </div>
        </div>

        {/* Main content */}
        <div className="pl-4 space-y-4">
          {/* Role and period */}
          <div className="space-y-2">
            <div className="font-mono text-sm">
              <span className="text-red-500 dark:text-red-400">role</span>
              <span className="text-gray-600 dark:text-gray-400">: </span>
              <span className="text-green-600 dark:text-green-400">
                "{data.role}"
              </span>
              <span className="text-gray-600 dark:text-gray-400">,</span>
            </div>
            <div className="font-mono text-sm">
              <span className="text-red-500 dark:text-red-400">period</span>
              <span className="text-gray-600 dark:text-gray-400">: </span>
              <span className="text-green-600 dark:text-green-400">
                "{formatDate(data.startDate)} - {formatDate(data.endDate)}"
              </span>
              <span className="text-gray-600 dark:text-gray-400">,</span>
            </div>
          </div>

          {/* Achievements */}
          {data.achievements && data.achievements.length > 0 && (
            <div className="font-mono text-sm">
              <div className="mb-2">
                <span className="text-red-500 dark:text-red-400">
                  achievements
                </span>
                <span className="text-gray-600 dark:text-gray-400">: [</span>
              </div>
              <div className="pl-4 space-y-1">
                {data.achievements.map((achievement, idx) => (
                  <div key={idx} className="flex items-start gap-2">
                    <span className="text-green-600 dark:text-green-400 text-xs mt-1">
                      ▸
                    </span>
                    <span className="text-gray-700 dark:text-gray-300 text-xs leading-relaxed">
                      {achievement}
                    </span>
                  </div>
                ))}
              </div>
              <div className="mt-2">
                <span className="text-gray-600 dark:text-gray-400">],</span>
              </div>
            </div>
          )}

          {/* Technologies */}
          {data.technologies && data.technologies.length > 0 && (
            <div className="font-mono text-sm">
              <div className="mb-3">
                <span className="text-red-500 dark:text-red-400">stack</span>
                <span className="text-gray-600 dark:text-gray-400">: [</span>
              </div>
              <div className="flex flex-wrap gap-2 pl-4 mb-2">
                {data.technologies.map((tech, idx) => (
                  <span
                    key={idx}
                    className="bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 px-3 py-1 rounded-full text-xs font-medium border border-blue-200 dark:border-blue-700 hover:bg-blue-100 dark:hover:bg-blue-900/50 transition-colors"
                  >
                    {tech}
                  </span>
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

export default ExperienceCard;
