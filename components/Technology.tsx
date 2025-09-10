import React from "react";
import { motion } from "framer-motion";

interface TechnologyProps {
  name: string;
  variant?: "default" | "code" | "pill" | "minimal" | "icon";
  icon?: React.ReactNode;
  showComma?: boolean;
  className?: string;
}

const Technology: React.FC<TechnologyProps> = ({
  name,
  variant = "default",
  icon,
  showComma = false,
  className = "",
}) => {
  const baseClasses = "inline-flex items-center transition-colors duration-200";

  const variantClasses = {
    // For experience/education cards - code style
    code: "bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 px-3 py-1 rounded-full text-xs font-medium border border-blue-200 dark:border-blue-700 hover:bg-blue-100 dark:hover:bg-blue-900/50 font-mono",

    // For project cards - code style with quotes
    default:
      "bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-green-400 text-xs font-mono px-2.5 py-0.5 rounded-md",

    // For about section - pill style
    pill: "px-4 py-2 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-green-400 text-sm font-medium rounded-lg shadow-md",

    // For technical skills - with icons
    icon: "flex items-center bg-gray-100 dark:bg-neutral-800 rounded-md p-1 shadow-sm text-gray-700 dark:text-gray-300 text-sm",

    // Minimal style for compact displays
    minimal: "text-xs text-gray-600 dark:text-gray-400 font-mono",
  };

  const content = () => {
    switch (variant) {
      case "code":
        return (
          <span
            className={`${baseClasses} ${variantClasses.code} ${className}`}
          >
            {name}
            {showComma && <span className="ml-1 text-gray-500">,</span>}
          </span>
        );

      case "default":
        return (
          <span
            className={`${baseClasses} ${variantClasses.default} ${className}`}
          >
            &apos;{name}&apos;
            {showComma && (
              <span className="text-gray-600 dark:text-gray-400">,</span>
            )}
          </span>
        );

      case "pill":
        return (
          <span
            className={`${baseClasses} ${variantClasses.pill} ${className}`}
          >
            {name}
          </span>
        );

      case "icon":
        return (
          <div className={`${baseClasses} ${variantClasses.icon} ${className}`}>
            {icon && <span className="mr-2">{icon}</span>}
            <span>{name}</span>
            {showComma && <span className="ml-1 text-gray-500">,</span>}
          </div>
        );

      case "minimal":
        return (
          <span
            className={`${baseClasses} ${variantClasses.minimal} ${className}`}
          >
            {name}
            {showComma && <span className="text-gray-500">,</span>}
          </span>
        );

      default:
        return (
          <span
            className={`${baseClasses} ${variantClasses.default} ${className}`}
          >
            &apos;{name}&apos;
            {showComma && (
              <span className="text-gray-600 dark:text-gray-400">,</span>
            )}
          </span>
        );
    }
  };

  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
      className="inline-block"
    >
      {content()}
    </motion.div>
  );
};

export default Technology;
