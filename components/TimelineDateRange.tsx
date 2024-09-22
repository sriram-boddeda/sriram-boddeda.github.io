import React from "react";
import { format, parseISO } from "date-fns";
import { CalendarIcon } from "./icons/icons";
// import { CalendarIcon } from "@heroicons/react/24/solid";

const formatDateRange = (startDate: string, endDate: string) => {
  if (endDate === "Present")
    return `${format(parseISO(startDate), "MMM yyyy")} - Present`;

  const start = parseISO(startDate);
  const end = parseISO(endDate);

  const startMonthYear = format(start, "MMM yyyy");
  const endMonthYear = format(end, "MMM yyyy");

  if (start.getFullYear() === end.getFullYear()) {
    if (start.getMonth() === end.getMonth()) {
      return `${format(start, "MMM d")} - ${format(end, "d yyyy")}`;
    }
    return `${startMonthYear} - ${endMonthYear}`;
  }

  return `${startMonthYear} - ${endMonthYear}`;
};

interface TimelineDateRangeProps {
  startDate: string;
  endDate: string;
}

const TimelineDateRange: React.FC<TimelineDateRangeProps> = ({
  startDate,
  endDate,
}) => {
  return (
    <div className="md:w-2/12 flex justify-center items-center mb-4 md:mb-0">
      <div className="font-mono text-sm bg-gray-100 dark:bg-[#1e1e1e] border border-gray-300 dark:border-gray-700 py-2 px-4 rounded-md shadow-sm flex items-center">
        <CalendarIcon
          className="w-5 h-5 dark:text-green-400 mr-2" // Change to desired color
          size={24}
        />

        <span className="text-gray-800 dark:text-[#dcdcdc]">
          {formatDateRange(startDate, endDate)}
        </span>
      </div>
    </div>
  );
};

export default TimelineDateRange;
