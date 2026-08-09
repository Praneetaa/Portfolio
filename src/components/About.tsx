import { Code2, Palette } from "lucide-react";
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
} from "react-icons/si";
import { FaJava } from "react-icons/fa6";
import { SiWordpress, SiElementor } from "react-icons/si";
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
import Reveal from "./Reveal";

const About = () => {
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
               { name: "Branding & Identity", icon: Fingerprint, color: "#F97316" },
               { name: "Typography", icon: Type, color: "#38BDF8" },
               { name: "Print Design", icon: Printer, color: "#A3A3A3" },
               { name: "Layout & Grid Systems", icon: Grid, color: "#34D399" },
            ],
         },
      ],
   };

   const softSkills = [
      {
         title: "Creative Problem Solving",
         description:
            "Finding unique solutions to challenges with creativity and logic.",
      },
      {
         title: "Team Collaboration",
         description: "Communicating effectively and working well with others.",
      },
      {
         title: "Growth Mindset",
         description:
            "Always learning, improving, and embracing new opportunities.",
      },
      {
         title: "Adaptability",
         description: "Thriving in fast-changing environments and tools.",
      },
   ];

   return (
      <section id="about" className="relative py-20 overflow-hidden">
         <div
            className="floating-orb w-72 h-72 bottom-0 -left-16"
            style={{
               background:
                  "color-mix(in oklch, var(--color-primary), transparent 68%)",
            }}
         />
         <div className="container-padding w-full">
            {/* Header */}
            <Reveal className="text-center mb-12">
               <span className="section-kicker">Get To Know Me</span>
               <h2 className="gradient-text mb-12">About Me</h2>
               <div className="glass-card-feature max-w-5xl mx-auto">
                  <p className="text-lg leading-relaxed text-muted-foreground">
                     I'm an Information Technology graduate specializing in web development, web design, and graphic design. I enjoy creating modern, user-friendly websites and visual designs that combine creativity with functionality. I focus on building clean, effective digital solutions that deliver a great user experience.<br/> <br/>

I'm always looking for opportunities to learn, grow, and create meaningful work. I enjoy solving problems, bringing ideas to life, and helping businesses build a strong digital presence.
                  </p>
               </div>
            </Reveal>

            {/* Soft Skills */}
            <Reveal className="max-w-6xl mx-auto mt-16 text-center">
               <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                  {softSkills.map((skill, index) => (
                     <div
                        key={index}
                        className="glass-card hover:scale-[1.02] hover:-translate-y-1 transition-smooth group"
                     >
                        <h4 className="font-semibold mb-2 text-foreground group-hover:text-primary transition-smooth">
                           {skill.title}
                        </h4>
                        <p className="text-sm text-muted-foreground">
                           {skill.description}
                        </p>
                     </div>
                  ))}
               </div>
            </Reveal>

            {/* Technical Skills */}
            <Reveal className="max-w-6xl mx-auto mt-16 text-center" delay={100}>
               <h3 className="mb-6 font-medium text-primary">
                  Technical Skills
               </h3>
               <div className="grid lg:grid-cols-2 gap-8">
                  {(Object.keys(technicalSkills) as TabType[]).map((tab) => {
                     const SectionIcon = sectionIcons[tab];
                     return (
                        <div key={tab} className="glass-card text-left">
                           <div className="flex items-center gap-2 mb-6">
                              <div className="w-9 h-9 rounded-lg bg-gradient-to-r from-purple-500 to-blue-600 flex items-center justify-center shrink-0">
                                 <SectionIcon size={18} className="text-white" />
                              </div>
                              <h4 className="font-semibold text-foreground">
                                 {sectionLabels[tab]}
                              </h4>
                           </div>
                           <div className="space-y-6">
                              {technicalSkills[tab].map((group) => (
                                 <div key={group.group}>
                                    <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-3">
                                       {group.group}
                                    </p>
                                    <div className="flex flex-wrap gap-3">
                                       {group.skills.map((skill, index) => {
                                          const SkillIcon = skill.icon;
                                          return (
                                             <div
                                                key={index}
                                                className="flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium text-foreground hover:scale-[1.05] transition-smooth"
                                                style={{
                                                   backgroundColor:
                                                      "var(--color-secondary)",
                                                }}
                                             >
                                                <SkillIcon
                                                   size={16}
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
                        </div>
                     );
                  })}
               </div>
            </Reveal>
         </div>
      </section>
   );
};

export default About;