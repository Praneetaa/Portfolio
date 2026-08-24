import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import ThemeToggle from "./ThemeToggle";
import pLogoDark from "../assets/p-logo-dark.svg";
import pLogoLight from "../assets/p-logo-light.svg";

const Navigation = () => {
   const navItems = [
      { href: "#about", label: "About" },
      { href: "#services", label: "Services" },
      { href: "#design-projects", label: "Projects" },
      { href: "#process", label: "Process" },
      { href: "#contact", label: "Contact" },
   ];

   const [scrolled, setScrolled] = useState(false);
   const [isMenuOpen, setIsMenuOpen] = useState(false);
   const [activeSection, setActiveSection] = useState("");

   useEffect(() => {
      const handleScroll = () => {
         setScrolled(window.scrollY > 50);
         // Near the very top of the page, always treat "About" as active —
         // it's the first section and starts at y=0, which is an edge case
         // the IntersectionObserver band below doesn't reliably catch.
         if (window.scrollY < 100) {
            setActiveSection("#about");
         }
      };
      handleScroll();
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
   }, []);

   useEffect(() => {
      const sections = navItems
         .map((item) => document.querySelector(item.href))
         .filter((el): el is Element => el !== null);

      const observer = new IntersectionObserver(
         (entries) => {
            entries.forEach((entry) => {
               if (entry.isIntersecting) {
                  setActiveSection(`#${entry.target.id}`);
               }
            });
         },
         { rootMargin: "-45% 0px -45% 0px" }
      );

      sections.forEach((section) => observer.observe(section));
      return () => observer.disconnect();
      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, []);

   const scrollToTop = () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
      setIsMenuOpen(false);
   };
   const scrollToSection = (href: string) => {
      const element = document.querySelector(href);
      if (element) {
         element.scrollIntoView({
            behavior: "smooth",
            block: "start",
         });
      }
      setIsMenuOpen(false);
   };

   return (
      <nav
         className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
            scrolled
               ? "bg-card/80 backdrop-blur-md shadow-lg border-b border-foreground/10"
               : "bg-transparent"
         }`}
      >
         <div className="container mx-auto px-4 sm:px-6 ">
            <div className="flex justify-between items-center py-4 gap-2">
               {/*Logo*/}
               <button
                  onClick={scrollToTop}
                  aria-label="Back to top"
                  className="shrink-0"
               >
                  <img
                     src={pLogoDark}
                     alt="Praneeta Pradhan"
                     className="dark-logo h-9 md:h-12 w-auto"
                  />
                  <img
                     src={pLogoLight}
                     alt="Praneeta Pradhan"
                     className="light-logo h-9 md:h-12 w-auto"
                  />
               </button>

               {/*Desktop Navigation*/}
               <div className="hidden md:flex items-center space-x-6">
                  {navItems.map((item) => {
                     const isActive = activeSection === item.href;
                     return (
                        <button
                           key={"web" + item.href}
                           onClick={() => scrollToSection(item.href)}
                           className={`relative group transition-smooth ${
                              isActive
                                 ? "text-primary font-semibold"
                                 : "text-foreground hover:text-primary"
                           }`}
                        >
                           {item.label}
                           <span
                              className={`absolute -bottom-1 left-0 h-0.5 bg-primary transition-all duration-500 ${
                                 isActive ? "w-full" : "w-0 group-hover:w-full"
                              }`}
                           ></span>
                        </button>
                     );
                  })}
                  <ThemeToggle />
                  <button
                     onClick={() => scrollToSection("#contact")}
                     className="btn btn-primary font-medium transition-smooth hidden md:flex cursor-pointer"
                  >
                     Work With Me
                  </button>
               </div>

               {/* Mobile Menu Button */}
               <div className="flex md:hidden items-center gap-2 shrink-0">
                  <ThemeToggle />

                  <button
                     onClick={() => setIsMenuOpen(!isMenuOpen)}
                     aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                     className="p-2 rounded-lg btn-toggle"
                  >
                     {isMenuOpen ? (
                        <X size={24} className="text-foreground" />
                     ) : (
                        <Menu size={24} className="text-foreground" />
                     )}
                  </button>
               </div>
            </div>

            {isMenuOpen && (
               <div className="md:hidden pb-4">
                  <div className="glass-card rounded-lg p-2 space-y-1">
                     {navItems.map((item) => (
                        <button
                           key={"mobile" + item.href}
                           onClick={() => scrollToSection(item.href)}
                           className={`w-full py-3 px-4 rounded-lg transition-smooth text-left ${
                              activeSection === item.href
                                 ? "text-primary font-semibold bg-card/60"
                                 : "text-foreground"
                           }`}
                        >
                           {item.label}
                        </button>
                     ))}
                     <button
                        onClick={() => scrollToSection("#contact")}
                        className="btn btn-primary w-full font-medium transition-smooth"
                     >
                        Work With Me
                     </button>
                  </div>
               </div>
            )}
         </div>
      </nav>
   );
};
export default Navigation;
