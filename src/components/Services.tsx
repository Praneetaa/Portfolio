import { useEffect, useRef, useState } from "react";
import {
   Code2,
   Sparkles,
   Wrench,
   Check,
   PenTool,
   Megaphone,
} from "lucide-react";
import { SiWordpress } from "react-icons/si";
import type { LucideIcon } from "lucide-react";
import type { IconType } from "react-icons";
import Reveal from "./Reveal";
import SectionHeader from "./SectionHeader";

interface Service {
   icon: LucideIcon | IconType;
   title: string;
   description: string;
   /** What's included — 3 short points. */
   includes: string[];
}

const services: Service[] = [
   {
      icon: Sparkles,
      title: "UI/UX & Web Design",
      description:
         "From sitemaps and user flows to polished Figma designs for websites, apps and dashboards, made to be practical for developers to build.",
      includes: [
         "User flows & wireframes",
         "Responsive website & app designs",
         "Prototypes & developer handoff",
      ],
   },
   {
      icon: Code2,
      title: "Web Development",
      description:
         "Turning designs into fast, responsive websites built with clean, maintainable code.",
      includes: [
         "React, TypeScript & Tailwind",
         "Responsive on every screen",
         "Back ends with Node.js & MongoDB",
      ],
   },
   {
      icon: SiWordpress,
      title: "WordPress",
      description:
         "Custom WordPress sites you can update yourself, like the LCIC website I built and launched with Elementor.",
      includes: [
         "Custom pages with Elementor",
         "Easy-to-edit content",
         "Ongoing page & UI improvements",
      ],
   },
   {
      icon: PenTool,
      title: "Graphic Design",
      description:
         "Logos, branding and print materials designed around your brand, refined with you through feedback and revisions.",
      includes: [
         "Logos & brand identity",
         "Flyers, brochures & banners",
         "Business cards & certificates",
      ],
   },
   {
      icon: Megaphone,
      title: "Social Media Content",
      description:
         "Posts, graphics and short videos that keep your channels active. I created 50+ Facebook posts a year for LCIC.",
      includes: [
         "Post & announcement graphics",
         "Reels, video editing & thumbnails",
         "Tracking reach & engagement",
      ],
   },
   {
      icon: Wrench,
      title: "Maintenance",
      description:
         "Ongoing support to keep your website updated, secure and running smoothly.",
      includes: [
         "Content & image updates",
         "Bug fixes",
         "Plugin & software updates",
      ],
   },
];

const Services = () => {
   const [activeIndex, setActiveIndex] = useState(0);
   const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

   // Highlight whichever card is crossing the middle of the screen.
   useEffect(() => {
      const observer = new IntersectionObserver(
         (entries) => {
            entries.forEach((entry) => {
               if (entry.isIntersecting) {
                  const index = Number(
                     (entry.target as HTMLElement).dataset.index
                  );
                  setActiveIndex(index);
               }
            });
         },
         { rootMargin: "-45% 0px -45% 0px" }
      );
      cardRefs.current.forEach((card) => card && observer.observe(card));
      return () => observer.disconnect();
   }, []);

   const scrollToCard = (index: number) => {
      cardRefs.current[index]?.scrollIntoView({
         behavior: "smooth",
         block: "center",
      });
   };

   const ActiveIcon = services[activeIndex].icon;

   return (
      <section id="services" className="relative py-20 overflow-x-clip">
         <div className="container-padding">
            <div className="grid lg:grid-cols-[1fr_1.15fr] gap-10 lg:gap-16 max-w-6xl mx-auto items-start">
               {/* Left — stays in place while the cards scroll (desktop) */}
               <div className="lg:sticky lg:top-28 text-left">
                  <Reveal>
                     <SectionHeader
                        number="03"
                        label="Services"
                        title="What I can do for you"
                        className="mb-4"
                        reveal={false}
                     />
                     <p className="text-muted-foreground max-w-md">
                        From the first sketch to a live website, and support
                        after launch.
                     </p>

                     {/* Progress list — desktop only */}
                     <div className="hidden lg:flex items-start gap-6 mt-10">
                        <div className="shrink-0 w-20 h-20 rounded-2xl bg-card border border-primary/40 flex items-center justify-center">
                           <ActiveIcon
                              key={activeIndex}
                              size={34}
                              className="text-primary animate-fade-in"
                           />
                        </div>
                        <ul className="list-none p-0 m-0 space-y-1.5">
                           {services.map((service, i) => {
                              const isActive = i === activeIndex;
                              return (
                                 <li key={service.title}>
                                    <button
                                       type="button"
                                       onClick={() => scrollToCard(i)}
                                       className={`flex items-center gap-3 text-sm transition-smooth ${
                                          isActive
                                             ? "text-primary font-semibold"
                                             : "text-muted-foreground hover:text-foreground"
                                       }`}
                                    >
                                       <span
                                          className={`h-0.5 rounded-full bg-current transition-all duration-500 ${
                                             isActive ? "w-8" : "w-3"
                                          }`}
                                       />
                                       {service.title}
                                    </button>
                                 </li>
                              );
                           })}
                        </ul>
                     </div>

                     <a
                        href="#contact"
                        className="btn btn-primary hidden lg:inline-flex mt-10"
                     >
                        Work With Me
                     </a>
                  </Reveal>
               </div>

               {/* Right — scrolling service cards */}
               <div className="space-y-6 lg:space-y-8 lg:py-[8vh]">
                  {services.map((service, i) => {
                     const Icon = service.icon;
                     const isActive = i === activeIndex;
                     return (
                        <div
                           key={service.title}
                           ref={(el) => {
                              cardRefs.current[i] = el;
                           }}
                           data-index={i}
                           className={`text-left transition-all duration-500 ${
                              isActive
                                 ? "glass-card-feature lg:scale-100"
                                 : "glass-card lg:opacity-50 lg:scale-[0.97]"
                           }`}
                        >
                           <div className="flex items-center justify-between gap-4 mb-3">
                              <h4 className="font-semibold text-foreground m-0 flex items-center gap-3">
                                 <Icon size={20} className="text-primary shrink-0" />
                                 {service.title}
                              </h4>
                              <span className="font-display font-extrabold text-3xl text-foreground/15 leading-none">
                                 {String(i + 1).padStart(2, "0")}
                              </span>
                           </div>
                           <p className="text-sm text-muted-foreground leading-relaxed mt-0 mb-4">
                              {service.description}
                           </p>
                           <ul className="list-none p-0 m-0 grid sm:grid-cols-2 gap-x-4 gap-y-2">
                              {service.includes.map((item) => (
                                 <li
                                    key={item}
                                    className="flex items-center gap-2 text-sm text-foreground/80"
                                 >
                                    <Check
                                       size={14}
                                       className="text-accent shrink-0"
                                    />
                                    {item}
                                 </li>
                              ))}
                           </ul>
                        </div>
                     );
                  })}

                  <div className="text-center lg:hidden pt-2">
                     <a href="#contact" className="btn btn-primary inline-flex">
                        Work With Me
                     </a>
                  </div>
               </div>
            </div>
         </div>
      </section>
   );
};

export default Services;
