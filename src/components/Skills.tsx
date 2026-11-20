import { useState } from "react";
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
import Reveal from "./Reveal";
import SectionHeader from "./SectionHeader";

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

export default function Skills() {
   const [activeTab, setActiveTab] = useState<TabType>("Frontend");

   return (
      <section id="skills" className="relative py-20 overflow-hidden">
         <div className="container-padding relative">
            {/* Technical Skills */}
            <SectionHeader number="08" label="Skills" title="Tools I work with" subtitle="The languages, frameworks and design tools I use day to day." />
   
            <Reveal
               delay={100}
               className="max-w-6xl mx-auto text-left"
            >
               <div className="inline-flex gap-2 p-1.5 rounded-[14px] bg-secondary/60 mb-8">
                  {(Object.keys(technicalSkills) as TabType[]).map((tab) => {
                     const SectionIcon = sectionIcons[tab];
                     const isActive = tab === activeTab;
                     return (
                        <button
                           key={tab}
                           type="button"
                           onClick={() => setActiveTab(tab)}
                           className={`flex items-center gap-2 px-5 py-2.5 rounded-[var(--radius-btn)] text-sm font-semibold transition-smooth ${
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
   );
}
