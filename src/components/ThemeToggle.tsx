import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

function getInitialTheme() {
   const stored = localStorage.getItem("theme");
   if (stored === "light" || stored === "dark") return stored;
   return window.matchMedia("(prefers-color-scheme: light)").matches
      ? "light"
      : "dark";
}

const ThemeToggle = () => {
   const [theme, setTheme] = useState(getInitialTheme);

   useEffect(() => {
      document.documentElement.classList.toggle("light", theme === "light");
      localStorage.setItem("theme", theme);
   }, [theme]);

   const toggleTheme = () => {
      setTheme((prev) => (prev === "dark" ? "light" : "dark"));
   };

   return (
      <button
         onClick={toggleTheme}
         className="p-2 rounded-sm btn-toggle transition-smooth"
      >
         {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
      </button>
   );
};

export default ThemeToggle;
