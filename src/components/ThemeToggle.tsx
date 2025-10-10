import { useState } from "react";
import { Moon, Sun } from "lucide-react";

const ThemeToggle = () => {
   const [theme, setTheme] = useState("dark");

   const toggleTheme = () => {
      if (theme === "dark") {
         setTheme("light");
         document.documentElement.classList.add("light");
      } else {
         setTheme("dark");
         document.documentElement.classList.remove("light");
      }
   };

   return (
      <>
         {/* Theme Toggle */}
         <button
            onClick={toggleTheme}
            className="p-2 rounded-lg btn-toggle transition-smooth"
         >
            {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
         </button>
      </>
   );
};

export default ThemeToggle;
