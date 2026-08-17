"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { FiSun, FiMoon } from "react-icons/fi";

export function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  // Evita el hydration mismatch esperando al montaje
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    // Retornamos un botón placeholder invisible para no romper el layout
    return <button className="w-10 h-10 invisible"></button>;
  }

  const isDark = theme === "dark";

  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="p-2 rounded-full cursor-pointer transition-all duration-300 hover:scale-125 hover:opacity-80 active:scale-90 flex items-center justify-center"
      aria-label="Toggle theme"
    >
      {isDark ? (
        <FiSun className="w-6 h-6 transition-all duration-300" />
      ) : (
        <FiMoon className="w-6 h-6 transition-all duration-300" />
      )}
    </button>
  );
}
