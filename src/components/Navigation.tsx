import { useState, useEffect } from "react";
import { Menu, X, Moon, Sun } from "lucide-react";
import ThemeToggle from "./ThemeToggle";

const Navigation = () => {
   const navItems = [
      { href: "#about", label: "About" },
      { href: "#skills", label: "Skills" },
      { href: "#projects", label: "Projects" },
      { href: "#contact", label: "Contact" },
   ];

   const [scrolled, setScrolled] = useState(false);
   const [isMenuOpen, setIsMenuOpen] = useState(false);

   useEffect(() => {
      const handleScroll = () => {
         setScrolled(window.scrollY > 50);
      };
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
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
         className={`fixed top-0 left-0 right-0 z-50 ${
            scrolled
               ? "bg-card/95 backdrop-blur-md shadow-lg border-b border-card/20"
               : "bg-transparent"
         }`}
      >
         <div className="container mx-auto px-4 sm:px-6 ">
            <div className="flex justify-between item-center py-4">
               {/*Logo*/}
               <button
                  className="gradient-text text-2xl font-bold tracking-wide"
                  onClick={scrollToTop}
               >
                  Portfolio
               </button>

               {/*Desktop Navigation*/}
               <div className="hidden md:flex item-center space-x-6">
                  {navItems.map((item) => (
                     <button
                        key={"web" + item.href}
                        onClick={() => scrollToSection(item.href)}
                        className=" relative group nav-btn"
                     >
                        {item.label}
                        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-smooth duration-500"></span>
                     </button>
                  ))}
                  <ThemeToggle />
                  <button
                     onClick={() => scrollToSection("#contact")}
                     className="btn btn-primary font-medium transition-smooth hidden md:flex cursor-pointer"
                  >
                     Hire Me
                  </button>
               </div>

               {/* Mobile Menu Button */}
               <div className="flex md:hidden items-center gap-3">
                  <ThemeToggle />

                  <button
                     onClick={() => setIsMenuOpen(!isMenuOpen)}
                     className="p-2 rounded-lg btn-toggle"
                  >
                     {isMenuOpen ? (
                        <X size={24} />
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
                           className="w-full py-3 px-4 rounded-lg text-foreground transition-smooth text-left hover:bg-card hover:text-primary"
                        >
                           {item.label}
                        </button>
                     ))}
                  </div>
               </div>
            )}
         </div>
      </nav>
   );
};
export default Navigation;
