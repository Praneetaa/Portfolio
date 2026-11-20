import { useState } from "react";
import { ArrowRight, FileText, Mail, Check } from "lucide-react";
import profilePic from "../assets/profilePicture.webp";
import { socialLinks, contactEmail } from "../data/socialLinks.ts";
import Reveal from "./Reveal";
import SectionHeader from "./SectionHeader";

const Hero = () => {
   const [isCardFlipped, setIsCardFlipped] = useState(false);
   const [emailCopied, setEmailCopied] = useState(false);

   const copyEmail = () => {
      navigator.clipboard.writeText(contactEmail);
      setEmailCopied(true);
      setTimeout(() => setEmailCopied(false), 2000);
   };

   return (
      <>
      <section id="about" className="relative overflow-hidden">
         <div className="container-padding relative min-h-screen flex items-center pt-16 pb-8">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center w-full">
               {/* Left — ID card, drops in and swings on load, flips to socials on hover */}
               <div className="flex justify-center">
                  <div className="id-card-drop">
                     <div className="id-card-strap">
                        <span className="id-card-strap-text">Portfolio</span>
                        <div className="id-card-strap-dot" aria-hidden="true" />
                     </div>
                     <div
                        className={`flip-card-container id-card-container cursor-pointer ${
                           isCardFlipped ? "is-flipped" : ""
                        }`}
                        role="button"
                        tabIndex={0}
                        aria-label={
                           isCardFlipped
                              ? "Show ID card front"
                              : "Show contact links"
                        }
                        onClick={() => setIsCardFlipped((prev) => !prev)}
                        onKeyDown={(e) => {
                           if (e.key === "Enter" || e.key === " ") {
                              e.preventDefault();
                              setIsCardFlipped((prev) => !prev);
                           }
                        }}
                     >
                        <div className="flip-card">
                           {/* Front */}
                           <div className="id-card-face">
                              <div className="id-card-photo-wrap">
                                 <img
                                    src={profilePic}
                                    alt="Praneeta Pradhan"
                                    className="id-card-photo"
                                 />
                              </div>
                              <div className="id-card-deco" aria-hidden="true">
                                 <span className="id-card-badge">
                                    Open to Work
                                 </span>
                                 <span className="id-card-deco-sq id-card-deco-sq-1" />
                                 <span className="id-card-deco-sq id-card-deco-sq-2" />
                                 <span className="id-card-deco-sq id-card-deco-sq-3" />
                                 <span className="id-card-deco-sq id-card-deco-sq-4" />
                                 <span className="id-card-deco-sq id-card-deco-sq-5" />
                                 <span className="id-card-deco-sq id-card-deco-sq-6" />
                              </div>
                              <div className="id-card-body">
                                 <h1 className="id-card-name">
                                    Praneeta Pradhan
                                 </h1>
                                 <p className="id-card-role">
                                    UI/UX Designer &amp; Web Developer
                                 </p>
                                 <p className="id-card-detail id-card-detail-1">
                                    BSc in Information Technology
                                 </p>
                                 <p className="id-card-detail id-card-detail-2">
                                    +5 Years in Designing
                                 </p>
                              </div>
                              <div className="id-card-strip">
                                 <div className="id-card-strip-highlight" />
                              </div>
                           </div>
                           {/* Back — clickable contact info */}
                           <div className="id-card-face id-card-back">
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
                                       onClick={(e) => e.stopPropagation()}
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
                     </div>
                  </div>
               </div>

               {/* Right — About Me */}
               <Reveal delay={150} className="text-left">
                  <SectionHeader
                     number="01"
                     label="About"
                     title="UI/UX designer who builds what she designs"
                     note="hi, I'm Praneeta!"
                     className="mb-6"
                     reveal={false}
                  />
                  <p className="text-lg leading-relaxed text-muted-foreground mb-4">
                     I'm a BSc Information Technology graduate who designs
                     interfaces in Figma and builds them in React. Most
                     recently I was a UI/UX Design Intern at Precise Digital
                     Economy, designing an IoT dashboard platform from
                     sitemap to developer handoff.
                  </p>
                  <p className="text-lg leading-relaxed text-muted-foreground mb-6">
                     I like turning messy problems into clear, simple
                     screens, then seeing them through to a working product.
                     A background in graphic design means I care about the
                     details too.
                  </p>

                  <a
                     href={`mailto:${contactEmail}`}
                     onClick={(e) => {
                        e.preventDefault();
                        copyEmail();
                     }}
                     className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-smooth mb-8"
                  >
                     {emailCopied ? <Check size={18} /> : <Mail size={18} />}
                     {emailCopied ? "Copied to clipboard!" : contactEmail}
                  </a>

                  <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                     <a
                        href="https://drive.google.com/file/d/1ZZtVyv4x2gdjOjvaI2VvzZfGsvLHhsZ4/view?usp=sharing"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-primary inline-flex items-center justify-center gap-2"
                     >
                        View Resume <FileText size={20} />
                     </a>
                     <a
                        href="#uiux-projects"
                        className="btn btn-outline inline-flex items-center justify-center gap-2"
                     >
                        View Projects
                        <ArrowRight size={20} />
                     </a>
                  </div>
               </Reveal>
            </div>
         </div>
      </section>


      </>
   );
};

export default Hero;
