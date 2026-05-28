import React from "react";

const Logo = ({ className = "h-7 sm:h-8 w-auto" }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 370 100"
    className={className}
  >
    <defs>
      <style>{`
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
        .cursor {
          animation: blink 1s step-end infinite;
        }
      `}</style>
    </defs>
    <g
      fontFamily="Monaco, 'Fira Code', 'Courier New', monospace"
      fontWeight="bold"
      fontSize="80"
      textAnchor="middle"
      className="text-gray-800 dark:text-gray-200"
    >
      {/* Main text: < SB /> with green SB */}
      <text x="185" y="72" fill="currentColor">
        <tspan>{'< '}</tspan>
        <tspan fill="#55F991">SB</tspan>
        <tspan>{' />'}</tspan>
      </text>

      {/* Blinking cursor positioned after the /> */}
      <text
        x="358"
        y="72"
        fill="currentColor"
        fontSize="70"
        textAnchor="start"
        className="cursor"
      >
        _
      </text>

      {/* Green underline accent under SB */}
      <line
        x1="120"
        y1="83"
        x2="202"
        y2="83"
        stroke="#55F991"
        strokeWidth="3"
        strokeLinecap="round"
      />
    </g>
  </svg>
);

export default Logo;
