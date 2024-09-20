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
    light: "☀️",
    dark: "🌙",
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

  const buttonStyle = {
    fontFamily: "Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace",
    fontSize: "12px",
    lineHeight: "1.5",
    padding: "8px 12px",
    borderRadius: "6px",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
    transition: "all 0.3s ease",
    cursor: "pointer",
    userSelect: "none" as const,
    whiteSpace: "nowrap" as const,
  };

  return (
    <div
      style={{
        position: "fixed",
        top: "16px",
        right: "16px",
        zIndex: 9999,
      }}
    >
      <button
        onClick={toggleTheme}
        style={{
          ...buttonStyle,
          backgroundColor: currentTheme === "dark" ? "#1e1e1e" : "#f4f4f4",
          color: currentTheme === "dark" ? "#d4d4d4" : "#333",
          border:
            currentTheme === "dark" ? "1px solid #454545" : "1px solid #d1d1d1",
        }}
        className="hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transform hover:scale-105"
        aria-label="Toggle theme"
      >
        <pre style={{ margin: 0, padding: 0 }}>
          <code>
            <span style={{ color: "#569cd6" }}>const</span>{" "}
            <span style={{ color: "#4ec9b0" }}>theme</span>{" "}
            <span style={{ color: "#d4d4d4" }}>=</span>{" "}
            <span style={{ color: "#ce9178" }}>
              {`"${themeEmoji[theme as keyof typeof themeEmoji]}"`}
            </span>
            <span style={{ color: "#d4d4d4" }}>;</span>{" "}
            <span style={{ color: "#6a9955" }}>{`// ${theme}`}</span>
          </code>
        </pre>
      </button>
    </div>
  );
};

export default ThemeToggleButton;
