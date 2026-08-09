import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

const ScrollToTop = () => {
   const [visible, setVisible] = useState(false);

   useEffect(() => {
      const handleScroll = () => setVisible(window.scrollY > 400);
      handleScroll();
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
   }, []);

   return (
      <button
         onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
         aria-label="Back to top"
         className={`fixed bottom-6 right-6 z-40 p-3 rounded-full bg-primary text-primary-foreground shadow-lg glow-effect transition-smooth hover:scale-110 ${
            visible
               ? "opacity-100 translate-y-0 pointer-events-auto"
               : "opacity-0 translate-y-4 pointer-events-none"
         }`}
      >
         <ArrowUp size={20} />
      </button>
   );
};

export default ScrollToTop;
