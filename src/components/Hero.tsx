import { useState, useEffect } from "react";
import { ArrowRight, Download } from "lucide-react";
import profilePic from "../assets/profilePicture.webp";
import { socialLinks } from "../data/socialLinks.ts";
import Reveal from "./Reveal";

const Hero = () => {
   const [displayText, setDisplayText] = useState("");
   const [currentIndex, setCurrentIndex] = useState(0);
   const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
   const [isDeleting, setIsDeleting] = useState(false);

   const phrases = [
      "IT Student & Tech Explorer",
      "Website Developer",
      "Web & Graphic Designer",
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
      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, [currentIndex, currentPhraseIndex, isDeleting]);

   return (
      <section className="relative min-h-screen flex items-center py-10 overflow-hidden">
         {/* Ambient floating orbs for extra depth */}
         <div
            className="floating-orb w-72 h-72 -top-10 -left-10"
            style={{
               background:
                  "color-mix(in oklch, var(--color-primary), transparent 60%)",
            }}
         />
         <div
            className="floating-orb w-80 h-80 bottom-0 right-0"
            style={{
               background:
                  "color-mix(in oklch, var(--color-accent), transparent 65%)",
               animationDelay: "2s",
            }}
         />

         <div className="container-padding relative flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-16">
            {/* Flip card profile image */}
            <Reveal className="flip-card-container w-64 h-64 md:w-80 md:h-80 shrink-0">
               <div className="flip-card">
                  {/* Front */}
                  <div className="flip-card-face border-4 border-foreground">
                     <img
                        src={profilePic}
                        alt="Profile"
                        className="w-full h-full object-cover scale-151 translate-y-15"
                     />
                  </div>
                  {/* Back — clickable contact info */}
                  <div className="flip-card-face flip-card-back border-4 border-foreground">
                     <p className="text-primary-foreground font-semibold text-lg mb-3">
                        Let's Connect
                     </p>
                     <div className="flex items-center gap-4">
                        {socialLinks.map((link) => (
                           <a
                              key={link.label}
                              href={link.href}
                              target="_blank"
                              rel="noopener noreferrer"
                              title={link.label}
                              className="p-3 rounded-full bg-white/15 hover:bg-white/30 transition-smooth"
                           >
                              <link.icon
                                 size={20}
                                 className="text-primary-foreground"
                              />
                           </a>
                        ))}
                     </div>
                  </div>
               </div>
            </Reveal>

            <Reveal
               delay={150}
               className="animate-slide-up text-center lg:text-left order-1 lg:order-2 flex-1 max-w-2xl"
            >
               <h3 className="font-medium text-muted-foreground light:text-primary pb-2">
                  👋 Hey there! I'm
               </h3>
               <h1 className="text-5xl md:text-6xl lg:text-7xl gradient-text mb-6">
                  Praneeta Pradhan
               </h1>
               <div className="text-2xl md:text-3xl text-foreground mb-8 h-12 flex items-center justify-center lg:justify-start">
                  <span className="inline-block">
                     {displayText}
                     <span className="animate-pulse ml-1 text-primary">|</span>
                  </span>
               </div>
               <p className="text-lg mb-12 leading-relaxed">
                  Passionate about technology, code, and design. Always eager
                  to learn and create something amazing.
               </p>

               <div
                  className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start "
                  style={{ animationDelay: "0.3s" }}
               >
                  <button
                     className="btn btn-primary inline-flex items-center justify-center gap-2"
                     onClick={() => {
                        window.open(
                           "https://drive.google.com/uc?export=download&id=1Q70v7izRAK-UuTlBY45jiAjRZyDCxsFR",
                           "_blank"
                        );
                     }}
                  >
                     Download Resume <Download size={20} />
                  </button>
                  <a
                     href="#projects"
                     className="btn btn-outline inline-flex items-center justify-center gap-2"
                  >
                     View Projects
                     <ArrowRight size={20} />
                  </a>
               </div>
            </Reveal>
         </div>
      </section>
   );
};

export default Hero;