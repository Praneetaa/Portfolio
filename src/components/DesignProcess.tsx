import {
   Search,
   LayoutTemplate,
   PenTool,
   Code2,
   ShieldCheck,
   Send,
   ChevronRight,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import Reveal from "./Reveal";

interface ProcessStep {
   icon: LucideIcon;
   title: string;
   description: string;
}

const steps: ProcessStep[] = [
   {
      icon: Search,
      title: "Research",
      description: "Understanding goals & audience.",
   },
   {
      icon: LayoutTemplate,
      title: "Wireframe",
      description: "Planning structure & layout.",
   },
   {
      icon: PenTool,
      title: "UI Design",
      description: "Designing clean interfaces.",
   },
   {
      icon: Code2,
      title: "Development",
      description: "Building with clean code.",
   },
   {
      icon: ShieldCheck,
      title: "Testing",
      description: "Ensure quality & performance.",
   },
   {
      icon: Send,
      title: "Launch",
      description: "Deploy & make it live.",
   },
];

const DesignProcess = () => {
   return (
      <section id="process" className="relative py-20 px-6 overflow-hidden">
         <div
            className="floating-orb w-72 h-72 -top-10 -left-16"
            style={{
               background:
                  "color-mix(in oklch, var(--color-primary), transparent 68%)",
            }}
         />
         <div className="container-padding">
            <Reveal className="text-center mb-16">
               <span className="section-kicker justify-center">How I Work</span>
               <h2 className="gradient-text mb-4">Design Process</h2>
               <p className="text-muted-foreground">
                  From first idea to a live, working site
               </p>
            </Reveal>

            <Reveal
               delay={100}
               className="flex overflow-x-auto md:overflow-visible items-start gap-4 md:gap-2 max-w-6xl mx-auto pb-4 md:pb-0 snap-x"
            >
               {steps.map((step, index) => {
                  const Icon = step.icon;
                  const isLast = index === steps.length - 1;
                  return (
                     <div
                        key={step.title}
                        className="flex items-start flex-shrink-0 md:flex-1"
                     >
                        <div className="flex flex-col items-center text-center w-32 md:w-auto snap-start">
                           <div className="w-14 h-14 rounded-full bg-primary/15 border border-primary/30 flex items-center justify-center mb-4 shrink-0">
                              <Icon size={22} className="text-primary" />
                           </div>
                           <h4 className="font-semibold text-foreground text-sm mb-1">
                              {step.title}
                           </h4>
                           <p className="text-xs text-muted-foreground leading-snug">
                              {step.description}
                           </p>
                        </div>
                        {!isLast && (
                           <ChevronRight
                              size={18}
                              className="hidden md:block text-muted-foreground/40 mt-6 mx-1 shrink-0"
                           />
                        )}
                     </div>
                  );
               })}
            </Reveal>
         </div>
      </section>
   );
};

export default DesignProcess;
