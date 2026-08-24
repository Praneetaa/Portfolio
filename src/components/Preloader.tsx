import { useEffect, useState } from "react";
import pLogoDark from "../assets/p-logo-dark.svg";
import pLogoLight from "../assets/p-logo-light.svg";

const MIN_DISPLAY_MS = 500;
const MAX_WAIT_MS = 2500;
const FADE_MS = 400;

const Preloader = () => {
   const [isVisible, setIsVisible] = useState(true);
   const [isFadingOut, setIsFadingOut] = useState(false);

   useEffect(() => {
      const start = Date.now();
      let finished = false;

      const finish = () => {
         if (finished) return;
         finished = true;
         const remaining = Math.max(MIN_DISPLAY_MS - (Date.now() - start), 0);
         window.setTimeout(() => {
            setIsFadingOut(true);
            window.setTimeout(() => setIsVisible(false), FADE_MS);
         }, remaining);
      };

      if (document.readyState === "complete") {
         finish();
      } else {
         window.addEventListener("load", finish);
      }
      const maxTimer = window.setTimeout(finish, MAX_WAIT_MS);

      return () => {
         window.removeEventListener("load", finish);
         window.clearTimeout(maxTimer);
      };
   }, []);

   if (!isVisible) return null;

   return (
      <div
         className={`fixed inset-0 z-[100] flex flex-col items-center justify-center gap-6 bg-background transition-opacity duration-[400ms] ${
            isFadingOut ? "opacity-0 pointer-events-none" : "opacity-100"
         }`}
      >
         <img
            src={pLogoDark}
            alt="Praneeta Pradhan"
            className="dark-logo h-14 w-auto animate-pulse"
         />
         <img
            src={pLogoLight}
            alt="Praneeta Pradhan"
            className="light-logo h-14 w-auto animate-pulse"
         />
         <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary" />
      </div>
   );
};

export default Preloader;
