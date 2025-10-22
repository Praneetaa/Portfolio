import { useState, useEffect } from "react";
import { ArrowRight, Download } from "lucide-react";
import profilePic from "../assets/profilePicture.svg";

const Hero = () => {
   const [displayText, setDisplayText] = useState("");
   const [currentIndex, setCurrentIndex] = useState(0);
   const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
   const [isDeleting, setIsDeleting] = useState(false);

   const phrases = [
      "IT Student & Tech Explorer",
      "Aspiring Developer",
      "The Mind Behind the Pixels",
      "Turning Ideas into Code",
      "Creating Interactive Websites",
   ];

   useEffect(() => {
      const currentPhrase = phrases[currentPhraseIndex];

      const timeout = setTimeout(
         () => {
            if (!isDeleting) {
               if (currentIndex < currentPhrase.length) {
                  setDisplayText((prev) => prev + currentPhrase[currentIndex]);
                  setCurrentIndex((prev) => prev + 1);
               } else {
                  // Start deleting after a pause
                  setTimeout(() => setIsDeleting(true), 2000);
               }
            } else {
               if (currentIndex > 0) {
                  setDisplayText((prev) => prev.slice(0, -1));
                  setCurrentIndex((prev) => prev - 1);
               } else {
                  setIsDeleting(false);
                  setCurrentPhraseIndex((prev) => (prev + 1) % phrases.length);
               }
            }
         },
         isDeleting ? 50 : 100
      );

      return () => clearTimeout(timeout);
   }, [currentIndex, currentPhraseIndex, isDeleting, phrases]);

   return (
      <section className="min-h-screen flex items-center py-10">
         <div className="container-padding flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-16">
            <div className=" w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-foreground">
               <img
                  src={profilePic}
                  alt="Profile"
                  className="w-full h-full object-cover scale-151 translate-y-15"
               />
            </div>
            <div className="animate-slide-up text-center lg:text-left order-1 lg:order-2 flex-1 max-w-2xl">
               <h3 className="font-medium text-muted-foreground light:text-primary pb-2">
                  👋 Hey there! I'm
               </h3>
               <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 gradient-text">
                  Praneeta Pradhan
               </h1>
               <div className="text-2xl md:text-3xl text-foreground mb-8 h-12 flex items-center justify-center lg:justify-start">
                  <span className="inline-block">
                     {displayText}
                     <span className="animate-pulse ml-1 text-primary">|</span>
                  </span>
               </div>
               <p className="text-lg mb-12 leading-relaxed">
                  Passionate about technology and coding. Always eager to learn
                  and create something amazing.
               </p>

               <div
                  className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start "
                  style={{ animationDelay: "0.3s" }}
               >
                  <button className="btn btn-primary inline-flex items-center justify-center gap-2">
                     Download Resume <Download size={20} />
                  </button>
                  <button className="btn btn-primary inline-flex items-center justify-center gap-2">
                     View Projects
                     <ArrowRight size={20} />
                  </button>
               </div>
            </div>
         </div>
      </section>
   );
};

export default Hero;
