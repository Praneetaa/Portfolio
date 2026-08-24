import { Globe2, Code2, Sparkles, Search, Wrench } from "lucide-react";
import { SiWordpress } from "react-icons/si";
import type { LucideIcon } from "lucide-react";
import type { IconType } from "react-icons";
import Reveal from "./Reveal";

interface Service {
   icon: LucideIcon | IconType;
   title: string;
   description: string;
}

const services: Service[] = [
   {
      icon: Globe2,
      title: "Website Design",
      description: "Creating modern and user-friendly designs.",
   },
   {
      icon: Code2,
      title: "Web Development",
      description: "Building fast, secure & scalable websites.",
   },
   {
      icon: SiWordpress,
      title: "WordPress",
      description: "Custom WordPress themes & solutions.",
   },
   {
      icon: Sparkles,
      title: "UI/UX Design",
      description: "Designing intuitive user experiences.",
   },
   {
      icon: Search,
      title: "SEO Optimization",
      description: "Improving visibility & search rankings.",
   },
   {
      icon: Wrench,
      title: "Maintenance",
      description: "Ongoing support & website maintenance.",
   },
];

const Services = () => {
   return (
      <section id="services" className="relative py-20 overflow-hidden">
         <div
            className="floating-orb w-72 h-72 -top-20 right-0"
            style={{
               background:
                  "color-mix(in oklch, var(--color-accent), transparent 65%)",
            }}
         />
         <div className="container-padding">
            <Reveal className="text-center mb-16">
               <span className="section-kicker justify-center">What I Offer</span>
               <h2 className="gradient-text mb-4">Services</h2>
               <p className="text-muted-foreground">
                  Ways I can help bring your ideas to life
               </p>
            </Reveal>

            <Reveal
               delay={100}
               className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto"
            >
               {services.map((service) => {
                  const Icon = service.icon;
                  return (
                     <div
                        key={service.title}
                        className="glass-card text-left hover:-translate-y-1 hover:glow-effect transition-smooth"
                     >
                        <div className="w-12 h-12 rounded-xl bg-primary/15 border border-primary/30 flex items-center justify-center mb-4">
                           <Icon size={22} className="text-primary" />
                        </div>
                        <h4 className="font-semibold text-foreground mb-2">
                           {service.title}
                        </h4>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                           {service.description}
                        </p>
                     </div>
                  );
               })}
            </Reveal>
         </div>
      </section>
   );
};

export default Services;
