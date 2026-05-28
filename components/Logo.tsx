import React from "react";

const Logo = ({ className = "h-7 sm:h-8 w-auto" }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 300 100"
    className={className}
  >
    <defs>
      <filter id="logo-glow">
        <feGaussianBlur stdDeviation="0" result="coloredBlur" />
        <feMerge>
          <feMergeNode in="coloredBlur" />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>
    </defs>
    <g
      fontFamily="Monaco, monospace"
      fontWeight="bold"
      fontSize="80"
      textAnchor="middle"
      fill="currentColor"
      className="text-gray-800 dark:text-gray-200"
    >
      <text x="50%" y="70%">
        <tspan>&lt; </tspan>
        <tspan fill="#55F991">SB</tspan>
        <tspan> /&gt;</tspan>
      </text>
    </g>
  </svg>
);

export default Logo;
