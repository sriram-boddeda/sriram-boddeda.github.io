import React, { useState } from "react";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Education", href: "#education" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

const Navbar: React.FC = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur bg-white/70 dark:bg-gray-900/70 shadow-sm">
      <div className="container mx-auto flex items-center justify-between px-4 py-3">
        <a href="#about" className="font-semibold text-primary text-lg">
          Sriram
        </a>
        <button
          className="md:hidden text-foreground"
          onClick={() => setOpen(!open)}
          aria-label="Toggle navigation"
        >
          ☰
        </button>
        <ul
          className={`flex flex-col md:flex-row md:space-x-6 font-mono text-sm mt-4 md:mt-0 ${
            open ? "flex" : "hidden md:flex"
          }`}
        >
          {navItems.map((item) => (
            <li key={item.href} className="py-1">
              <a
                href={item.href}
                className="hover:text-primary transition-colors"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
