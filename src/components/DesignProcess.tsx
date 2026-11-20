import {
   Search,
   LayoutTemplate,
   PenTool,
   Code2,
   ShieldCheck,
   Send,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import Reveal from "./Reveal";
import SectionHeader from "./SectionHeader";

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
      <section id="process" className="relative py-20 overflow-hidden">
         <div className="container-padding">
            <SectionHeader number="07" label="Process" title="How I work" subtitle="From first idea to a live, working site" />

            <Reveal
               delay={100}
               className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-x-6 gap-y-10 max-w-6xl mx-auto text-left"
            >
               {steps.map((step, index) => {
                  const Icon = step.icon;
                  return (
                     <div
                        key={step.title}
                        className="group border-t-2 border-border hover:border-primary pt-5 transition-smooth"
                     >
                        <div className="flex items-center justify-between mb-4">
                           <span className="font-display font-extrabold text-3xl text-primary leading-none">
                              {String(index + 1).padStart(2, "0")}
                           </span>
                           <Icon
                              size={18}
                              className="text-muted-foreground group-hover:text-primary transition-smooth"
                           />
                        </div>
                        <h4 className="font-semibold text-foreground text-base mb-1">
                           {step.title}
                        </h4>
                        <p className="text-sm text-muted-foreground leading-snug m-0">
                           {step.description}
                        </p>
                     </div>
                  );
               })}
            </Reveal>
         </div>
      </section>
   );
};

export default DesignProcess;
