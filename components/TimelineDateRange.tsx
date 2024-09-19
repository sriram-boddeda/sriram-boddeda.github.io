import React from "react";
import { format, parseISO } from "date-fns";

const formatDate = (dateString: string) => {
  if (dateString === "Present") return "Present";
  const date = parseISO(dateString);
  return format(date, "MMM yyyy");
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
    <div className="md:w-2/12 flex justify-center mb-4 md:mb-0">
      <div className="text-sm font-semibold text-blue-600 bg-blue-100 py-2 px-4 rounded-full shadow-sm">
        {formatDate(startDate)} - {formatDate(endDate)}
      </div>
    </div>
  );
};

export default TimelineDateRange;
