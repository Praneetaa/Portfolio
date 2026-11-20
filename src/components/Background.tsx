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
            { name: "Express.js", icon: SiExpress, color: "currentColor" },
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
            { name: "GitHub Collaboration", icon: SiGithub, color: "currentColor" },
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

interface TimelineEvent {
   year: string;
   title: string;
}

const events: TimelineEvent[] = [
   { year: "2023", title: "Student Assistant - Media & IT Support, LCIC" },
   { year: "2025", title: "Career Development Site - Final Year Project" },
   {
      year: "2026",
      title: "UI/UX Design Intern, Precise Digital Economy Co., Ltd.",
   },
   { year: "2026", title: "Took Part in Skylab Hackathon: AI Series" },
   { year: "2026", title: "Graduated BSc in Information Technology" },
];

function Journey() {
   return (
      <ol className="relative list-none p-0 m-0 space-y-5">
         {/* Connecting line */}
         <span
            aria-hidden="true"
            className="absolute top-2 bottom-2 left-[13px] w-px bg-primary opacity-40"
         />
         {[...events].reverse().map((event, i) => {
            const isLatest = i === 0;
            return (
               <li
                  key={event.title}
                  className="relative grid grid-cols-[28px_1fr] gap-x-3 items-start"
               >
                  <span className="relative flex items-center justify-center w-7 h-7">
                     {isLatest && (
                        <>
                           <span className="absolute inset-0 rounded-full bg-accent/40 animate-ping" />
                           <span className="absolute inset-0 m-auto w-6 h-6 rounded-full ring-2 ring-accent" />
                        </>
                     )}
                     <span className="relative w-3.5 h-3.5 rounded-full bg-primary ring-4 ring-card" />
                  </span>
                  <span className="pt-0.5">
                     <span className="flex items-center gap-2 font-bold text-primary text-sm">
                        {event.year}
                        {isLatest && (
                           <span className="text-[10px] font-semibold uppercase tracking-wide text-accent">
                              Latest
                           </span>
                        )}
                     </span>
                     <span className="block text-sm text-muted-foreground leading-snug mt-0.5">
                        {event.title}
                     </span>
                  </span>
               </li>
            );
         })}
      </ol>
   );
}

function Tools() {
   const [activeTab, setActiveTab] = useState<TabType>("Frontend");

   return (
      <>
         <div className="inline-flex gap-1 p-1 rounded-[12px] bg-secondary/60 mb-5">
            {(Object.keys(technicalSkills) as TabType[]).map((tab) => {
               const TabIcon = sectionIcons[tab];
               const isActive = tab === activeTab;
               return (
                  <button
                     key={tab}
                     type="button"
                     onClick={() => setActiveTab(tab)}
                     aria-pressed={isActive}
                     className={`flex items-center gap-2 px-4 py-1.5 rounded-[var(--radius-btn)] text-sm font-semibold transition-smooth ${
                        isActive
                           ? "bg-primary text-primary-foreground shadow-lg"
                           : "text-muted-foreground hover:text-foreground"
                     }`}
                  >
                     <TabIcon size={15} />
                     {sectionLabels[tab]}
                  </button>
               );
            })}
         </div>

         <div key={activeTab} className="space-y-4 animate-fade-in">
            {technicalSkills[activeTab].map((group) => (
               <div key={group.group}>
                  <p className="text-[11px] font-semibold uppercase tracking-wider text-accent m-0 mb-2">
                     {group.group}
                  </p>
                  <div className="flex flex-wrap gap-2">
                     {group.skills.map((skill) => {
                        const SkillIcon = skill.icon;
                        return (
                           <span
                              key={skill.name}
                              className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium text-foreground bg-secondary"
                           >
                              <SkillIcon
                                 size={15}
                                 className="shrink-0"
                                 style={{ color: skill.color }}
                              />
                              {skill.name}
                           </span>
                        );
                     })}
                  </div>
               </div>
            ))}
         </div>
      </>
   );
}

const panelLabel =
   "text-xs font-semibold uppercase tracking-wider text-muted-foreground m-0 mb-5";

/** Journey and tools side by side in one compact section. */
export default function Background() {
   return (
      <section id="background" className="relative pt-20 pb-4 overflow-hidden">
         <div className="container-padding">
            <SectionHeader
               number="02"
               label="Background"
               title="Journey & tools"
               subtitle="Where I've been so far, and the tools I use to design and build."
               className="mb-10 max-w-6xl mx-auto"
            />

            <div className="max-w-6xl mx-auto grid lg:grid-cols-[1fr_1.5fr] gap-6 text-left">
               <Reveal delay={100} className="glass-card">
                  <p className={panelLabel}>My journey so far</p>
                  <Journey />
               </Reveal>

               <Reveal delay={150} className="glass-card">
                  <p className={panelLabel}>Tools I work with</p>
                  <Tools />
               </Reveal>
            </div>
         </div>
      </section>
   );
}
