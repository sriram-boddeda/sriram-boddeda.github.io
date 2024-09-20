import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";

const ThemeToggleButton: React.FC = () => {
  const { theme, setTheme, systemTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const currentTheme = theme === "system" ? systemTheme : theme;

  const themeEmoji = {
    light: "💡",
    dark: "🌚",
    system: "🖥️",
  };

  const toggleTheme = () => {
    if (theme === "system") {
      setTheme("light");
    } else if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("system");
    }
  };

  return (
    <div className="fixed top-4 right-4 z-50">
      <button
        onClick={toggleTheme}
        className={`
          font-mono text-xs leading-normal p-2 rounded-md shadow-md
          transition-all duration-300 ease-in-out transform hover:scale-105
          ${
            currentTheme === "dark"
              ? "bg-gray-800 text-gray-300 border border-gray-700 hover:bg-gray-700"
              : "bg-gray-100 text-gray-800 border border-gray-300 hover:bg-gray-200"
          }
        `}
        aria-label="Toggle theme"
      >
        <pre className="m-0 p-0">
          <code>
            <span className="text-blue-500">const</span>{" "}
            <span className="text-teal-500">theme</span>{" "}
            <span className="text-gray-500">=</span>{" "}
            <span className="text-yellow-500">
              &quot;
              <span className="text-lg align-middle inline-block mr-0.5">
                {themeEmoji[theme as keyof typeof themeEmoji]}
              </span>
              &quot;
            </span>
            <span className="text-gray-500">;</span>{" "}
            <span className="text-green-500">{`// ${theme}`}</span>
          </code>
        </pre>
      </button>
    </div>
  );
};

export default ThemeToggleButton;
