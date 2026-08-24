import { useState } from "react";
import { ArrowRight, FileText, Mail, Code2, Palette } from "lucide-react";
import {
   SiHtml5,
   SiCss,
   SiJavascript,
   SiReact,
   SiTailwindcss,
   SiTypescript,
   SiFigma,
   SiNodedotjs,
   SiExpress,
   SiMongodb,
   SiGithub,
   SiSupabase,
   SiMysql,
   SiPhp,
   SiCplusplus,
   SiPython,
   SiWordpress,
   SiElementor,
} from "react-icons/si";
import { FaJava } from "react-icons/fa6";
import {
   LayoutGrid,
   Palette as ColorIcon,
   PenTool,
   Boxes,
   Image,
   Layers,
   Shapes,
   Fingerprint,
   Type,
   Printer,
   Grid,
} from "lucide-react";
import type { IconType } from "react-icons";
import type { LucideIcon } from "lucide-react";
import profilePic from "../assets/profilePicture.webp";
import { socialLinks, contactEmail } from "../data/socialLinks.ts";
import Reveal from "./Reveal";
import Timeline from "./Timeline";

type TabType = "Frontend" | "Design";

const sectionIcons: Record<TabType, LucideIcon> = {
   Frontend: Code2,
   Design: Palette,
};

const sectionLabels: Record<TabType, string> = {
   Frontend: "Development",
   Design: "Design",
};

type Skill = { name: string; icon: IconType | LucideIcon; color: string };
type SkillGroup = { group: string; skills: Skill[] };

const technicalSkills: Record<TabType, SkillGroup[]> = {
   Frontend: [
      {
         group: "Languages",
         skills: [
            { name: "HTML5", icon: SiHtml5, color: "#E34F26" },
            { name: "CSS3", icon: SiCss, color: "#1572B6" },
            { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
            { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
            { name: "PHP", icon: SiPhp, color: "#777BB4" },
            { name: "C++", icon: SiCplusplus, color: "#00599C" },
            { name: "Java", icon: FaJava, color: "#F89820" },
            { name: "Python", icon: SiPython, color: "#3776AB" },
         ],
      },
      {
         group: "Frameworks & Libraries",
         skills: [
            { name: "React", icon: SiReact, color: "#61DAFB" },
            { name: "Tailwind CSS", icon: SiTailwindcss, color: "#38BDF8" },
            { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
            { name: "Express.js", icon: SiExpress, color: "#FFFFFF" },
         ],
      },
      {
         group: "Databases & Backend",
         skills: [
            { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
            { name: "Supabase", icon: SiSupabase, color: "#3ECF8E" },
            { name: "MySQL", icon: SiMysql, color: "#4479A1" },
         ],
      },
      {
         group: "Tools & Workflow",
         skills: [
            { name: "APIs", icon: Boxes, color: "#A78BFA" },
            { name: "GitHub Collaboration", icon: SiGithub, color: "#FFFFFF" },
            { name: "WordPress", icon: SiWordpress, color: "#21759B" },
            { name: "Elementor", icon: SiElementor, color: "#92003B" },
         ],
      },
   ],
   Design: [
      {
         group: "Design Tools",
         skills: [
            { name: "Figma", icon: SiFigma, color: "#F24E1E" },
            { name: "Canva", icon: Image, color: "#00C4CC" },
            { name: "Photoshop", icon: Layers, color: "#31A8FF" },
            { name: "Affinity Designer", icon: Shapes, color: "#392990" },
         ],
      },
      {
         group: "Design Skills",
         skills: [
            { name: "UI Composition", icon: LayoutGrid, color: "#A78BFA" },
            { name: "Color Theory", icon: ColorIcon, color: "#F472B6" },
            { name: "Wireframing", icon: PenTool, color: "#A78BFA" },
            {
               name: "Branding & Identity",
               icon: Fingerprint,
               color: "#F97316",
            },
            { name: "Typography", icon: Type, color: "#38BDF8" },
            { name: "Print Design", icon: Printer, color: "#A3A3A3" },
            { name: "Layout & Grid Systems", icon: Grid, color: "#34D399" },
         ],
      },
   ],
};

const Hero = () => {
   const [activeTab, setActiveTab] = useState<TabType>("Frontend");
   const [isCardFlipped, setIsCardFlipped] = useState(false);

   return (
      <>
      <section id="about" className="relative overflow-hidden">
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
               <Reveal delay={150} className="text-center lg:text-left">
                  <span className="section-kicker justify-center lg:justify-start">
                     Get To Know Me
                  </span>
                  <h2 className="gradient-text mb-6">About Me</h2>
                  <p className="text-lg leading-relaxed text-muted-foreground mb-4">
                     I'm an Information Technology graduate specializing in
                     web development, web design, and graphic design. I enjoy
                     creating modern, user-friendly websites and visual
                     designs that combine creativity with functionality. I
                     focus on building clean, effective digital solutions
                     that deliver a great user experience.
                  </p>
                  <p className="text-lg leading-relaxed text-muted-foreground mb-6">
                     I'm always looking for opportunities to learn, grow, and
                     create meaningful work. I enjoy solving problems,
                     bringing ideas to life, and helping businesses build a
                     strong digital presence.
                  </p>

                  <a
                     href={`mailto:${contactEmail}`}
                     className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-smooth mb-8"
                  >
                     <Mail size={18} />
                     {contactEmail}
                  </a>

                  <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                     <a
                        href="https://drive.google.com/file/d/13IG92Wn2sux4fUxOgHIq7oRuUM1S10q9/view"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-primary inline-flex items-center justify-center gap-2"
                     >
                        View Resume <FileText size={20} />
                     </a>
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
         </div>
      </section>

      <Timeline />

      <section className="relative pt-4 pb-16 md:pt-6 md:pb-20 overflow-hidden">
         <div className="container-padding relative">
            {/* Technical Skills */}
            <Reveal className="text-center mb-16">
               <span className="section-kicker justify-center">
                  What I Know
               </span>
               <h2 className="gradient-text mb-4">Technical Skills</h2>
               <p className="text-muted-foreground">
                  Tools and technologies I use to bring ideas to life
               </p>
            </Reveal>

            <Reveal
               delay={100}
               className="max-w-5xl mx-auto text-center"
            >
               <div className="inline-flex gap-2 p-1.5 rounded-full bg-secondary/60 mb-8">
                  {(Object.keys(technicalSkills) as TabType[]).map((tab) => {
                     const SectionIcon = sectionIcons[tab];
                     const isActive = tab === activeTab;
                     return (
                        <button
                           key={tab}
                           type="button"
                           onClick={() => setActiveTab(tab)}
                           className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold transition-smooth ${
                              isActive
                                 ? "text-primary-foreground shadow-lg"
                                 : "text-muted-foreground hover:text-foreground"
                           }`}
                           style={
                              isActive
                                 ? { backgroundColor: "var(--color-primary)" }
                                 : undefined
                           }
                        >
                           <SectionIcon size={16} />
                           {sectionLabels[tab]}
                        </button>
                     );
                  })}
               </div>

               <div
                  key={activeTab}
                  className="grid sm:grid-cols-2 gap-4 text-left animate-fade-in"
               >
                  {technicalSkills[activeTab].map((group) => (
                        <div
                           key={group.group}
                           className="glass-card hover:scale-[1.02] hover:-translate-y-1 transition-smooth"
                        >
                           <p className="text-xs font-semibold uppercase tracking-wider text-accent mb-4">
                              {group.group}
                           </p>
                           <div className="flex flex-wrap gap-3">
                              {group.skills.map((skill, index) => {
                                 const SkillIcon = skill.icon;
                                 return (
                                    <div
                                       key={index}
                                       className="flex items-center gap-2 px-4 py-2.5 rounded-full text-sm font-medium text-foreground hover:scale-[1.05] transition-smooth"
                                       style={{
                                          backgroundColor:
                                             "var(--color-secondary)",
                                       }}
                                    >
                                       <SkillIcon
                                          size={20}
                                          className="shrink-0"
                                          style={{ color: skill.color }}
                                       />
                                       {skill.name}
                                    </div>
                                 );
                              })}
                           </div>
                        </div>
                     ))}
               </div>
            </Reveal>
         </div>
      </section>
      </>
   );
};

export default Hero;
