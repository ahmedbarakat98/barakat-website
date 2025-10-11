"use client";

import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [theme, setTheme] = useState<string>("light");

  
  useEffect(() => {
    const storedTheme = localStorage.getItem("hs_theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const html = document.documentElement;

    if (storedTheme === "dark" || (!storedTheme && prefersDark)) {
      html.classList.add("dark");
      setTheme("dark");
    } else {
      html.classList.remove("dark");
      setTheme("light");
    }
  }, []);

  
  const toggleTheme = (value: "light" | "dark") => {
    const html = document.documentElement;

    if (value === "dark") {
      html.classList.add("dark");
      localStorage.setItem("hs_theme", "dark");
      setTheme("dark");
    } else {
      html.classList.remove("dark");
      localStorage.setItem("hs_theme", "light");
      setTheme("light");
    }
  };

  return (
    <div className="flex cursor-pointer items-center gap-2">
      {theme === "light" && (
        <button
          type="button"
          onClick={() => toggleTheme("dark")}
          className="block font-medium text-gray-800 rounded-full hover:bg-gray-200 dark:text-gray-300 focus:outline-hidden focus:bg-gray-200"
        >
          <span className="inline-flex justify-center items-center w-9 h-9">
            <svg
              className="w-4 h-4"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
            </svg>
          </span>
        </button>
      )}

      {theme === "dark" && (
        <button
          type="button"
          onClick={() => toggleTheme("light")}
          className="block font-medium cursor-pointer  text-gray-800 rounded-full hover:bg-gray-200 dark:text-gray-300 focus:outline-hidden focus:bg-gray-200"
        >
          <span className="inline-flex justify-center items-center w-9 h-9">
            <svg
              className="w-4 h-4"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="4" />
              <path d="M12 2v2" />
              <path d="M12 20v2" />
              <path d="m4.93 4.93 1.41 1.41" />
              <path d="m17.66 17.66 1.41 1.41" />
              <path d="M2 12h2" />
              <path d="M20 12h2" />
              <path d="m6.34 17.66-1.41 1.41" />
              <path d="m19.07 4.93-1.41 1.41" />
            </svg>
          </span>
        </button>
      )}
    </div>
  );
}
