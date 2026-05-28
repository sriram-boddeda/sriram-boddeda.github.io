"use client";

import React, { useState, useEffect, useSyncExternalStore } from "react";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import Logo from "./Logo";

const sections = [
  { id: "about", label: "About" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "education", label: "Education" },
  { id: "skills", label: "Skills" },
  { id: "contact", label: "Contact" },
];

const themeEmoji = {
  light: "💡",
  dark: "🌚",
  system: "🖥️",
} as const;

const ThemeCode = ({ theme }: { theme: string }) => (
  <span className="font-mono text-[11px] leading-none whitespace-nowrap">
    <span className="text-blue-500">const</span>{" "}
    <span className="text-teal-500">theme</span>{" "}
    <span className="text-gray-400">=</span>{" "}
    <span className="text-yellow-500">
      &quot;
      <span className="text-sm align-middle inline-block mx-px">
        {themeEmoji[theme as keyof typeof themeEmoji] || themeEmoji.system}
      </span>
      &quot;
    </span>
    <span className="text-gray-400">;</span>{" "}
    <span className="text-green-500">{`// ${theme}`}</span>
  </span>
);

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("about");
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { theme, setTheme, systemTheme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;

  // Hydration-safe mount detection — returns false during SSR and first client render,
  // then switches to true after hydration without needing setState in an effect
  const mounted = useSyncExternalStore(
    () => () => {}, // no-op subscribe — value changes once, on first render
    () => true,     // client snapshot
    () => false     // server snapshot (used during hydration too)
  );

  const toggleTheme = () => {
    if (theme === "system") {
      setTheme("light");
    } else if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("system");
    }
  };

  // Track scroll for background opacity
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Track active section via IntersectionObserver
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.3, rootMargin: "-80px 0px -20% 0px" }
    );

    sections.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      setMobileOpen(false);
    }
  };

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
        scrolled || mobileOpen
          ? "bg-white/70 dark:bg-neutral-900/70 backdrop-blur-xl shadow-sm shadow-black/5"
          : "bg-transparent"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-14 sm:h-16">
          {/* Logo */}
          <button
            onClick={() => scrollToSection("about")}
            className="flex-shrink-0 hover:opacity-80 transition-opacity"
            aria-label="Home"
          >
            <Logo />
          </button>

          {/* Desktop nav links */}
          <div className="hidden md:flex items-center gap-1">
            {sections.map(({ id, label }) => (
              <button
                key={id}
                onClick={() => scrollToSection(id)}
                className={`relative px-3 py-1.5 rounded-lg text-xs font-mono transition-all duration-300 ${
                  activeSection === id
                    ? "text-gray-900 dark:text-gray-100"
                    : "text-gray-400 dark:text-gray-500 hover:text-gray-700 dark:hover:text-gray-300"
                }`}
              >
                {label}
                {activeSection === id && (
                  <motion.div
                    layoutId="nav-active"
                    className="absolute bottom-0 left-3 right-3 h-0.5 bg-gray-400 dark:bg-gray-500 rounded-full"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </button>
            ))}
          </div>

          {/* Right side: theme toggle + mobile hamburger */}
          <div className="flex items-center gap-2 sm:gap-3 md:pr-2">
            {/* Desktop: full code-themed toggle */}
            <button
              onClick={toggleTheme}
              className="hidden md:block px-3 py-1.5 rounded-md border border-gray-200 dark:border-neutral-700 
                bg-white/50 dark:bg-neutral-800/50
                hover:bg-gray-100 dark:hover:bg-neutral-700
                transition-all duration-300"
              aria-label="Toggle theme"
            >
              {mounted ? (
                <ThemeCode theme={currentTheme || "system"} />
              ) : (
                <span className="font-mono text-[11px] leading-none whitespace-nowrap opacity-0">
                  loading
                </span>
              )}
            </button>

            {/* Mobile: compact emoji toggle */}
            <button
              onClick={toggleTheme}
              className="md:hidden p-2 rounded-lg text-sm hover:bg-gray-100 dark:hover:bg-neutral-800 transition-all duration-300"
              aria-label="Toggle theme"
            >
              <span className="text-lg leading-none">
                {mounted
                  ? (themeEmoji[currentTheme as keyof typeof themeEmoji] || themeEmoji.system)
                  : ""}
              </span>
            </button>

            {/* Mobile hamburger */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-neutral-800 transition-colors"
              aria-label="Toggle menu"
            >
              <div className="w-5 h-0.5 bg-gray-500 dark:bg-gray-400 mb-1 transition-all" />
              <div className="w-5 h-0.5 bg-gray-500 dark:bg-gray-400 mb-1 transition-all" />
              <div className="w-5 h-0.5 bg-gray-500 dark:bg-gray-400 transition-all" />
            </button>
          </div>
        </div>

        {/* Mobile nav menu */}
        {mobileOpen && (
          <motion.div
            className="md:hidden pb-4 border-t border-gray-200 dark:border-neutral-800"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
          >
            <div className="flex flex-col gap-0.5 pt-2 pb-3">
              {/* Mobile theme toggle at top */}
              <div className="px-2 pb-3 mb-2 border-b border-gray-200 dark:border-neutral-700">
                <button
                  onClick={toggleTheme}
                  className="w-full px-3 py-2.5 rounded-lg border border-gray-300 dark:border-neutral-600
                    bg-gray-50 dark:bg-neutral-800
                    hover:bg-gray-100 dark:hover:bg-neutral-700
                    active:bg-gray-200 dark:active:bg-neutral-600
                    transition-all duration-200"
                  aria-label="Toggle theme"
                >
                  {mounted ? (
                    <ThemeCode theme={currentTheme || "system"} />
                  ) : (
                    <span className="font-mono text-[11px] leading-none whitespace-nowrap opacity-0">
                      loading
                    </span>
                  )}
                </button>
              </div>
              {sections.map(({ id, label }) => (
                <button
                  key={id}
                  onClick={() => scrollToSection(id)}
                  className={`px-4 py-2.5 rounded-lg text-sm font-mono text-left transition-all ${
                    activeSection === id
                      ? "bg-gray-100 dark:bg-neutral-800 text-gray-900 dark:text-gray-100 font-semibold"
                      : "text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-neutral-800/50 hover:text-gray-800 dark:hover:text-gray-200"
                  }`}
                >
                  {label}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
};

export default Navbar;
