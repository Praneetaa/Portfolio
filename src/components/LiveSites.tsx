import { ArrowUpRight } from "lucide-react";
import Reveal from "./Reveal";
import kayoDev from "../assets/sites/kayodev.webp";
import lcicWebsite from "../assets/designs/lcic-website.webp";

interface LiveSite {
   title: string;
   url: string;
   image: string;
   description: string;
   /** Who did what. */
   credits: string[];
   tags: string[];
   /** Optional small note, e.g. if someone else maintains it now. */
   note?: string;
}

const sites: LiveSite[] = [
   {
      title: "KaYo Devs",
      url: "https://kayodev.com/",
      image: kayoDev,
      description:
         "The studio I co-founded to design and build for freelance clients. I designed the website, including a project-finder that helps businesses say what they need in one click.",
      credits: ["Co-founder", "Design: me", "Development: a teammate"],
      tags: ["Figma Make", "Next.js"],
   },
   {
      title: "LCIC Website",
      url: "https://lcic.icosiam.com/",
      image: lcicWebsite,
      description:
         "Official website for Language Center International College, Siam University. I built and launched it, then kept improving its pages, navigation and UI.",
      credits: ["Built & launched by me", "2023–2025"],
      tags: ["WordPress", "Elementor"],
      note: "Now maintained by another team, so the live site may differ from my version.",
   },
];

export default function LiveSites() {
   return (
      <div className="max-w-6xl mx-auto mb-16">
         <p className="text-xs font-semibold uppercase tracking-wider text-accent mb-5 text-left">
            Live websites
         </p>
         <div className="grid md:grid-cols-2 gap-6">
            {sites.map((site, i) => (
               <Reveal key={site.title} delay={i * 100}>
                  <a
                     href={site.url}
                     target="_blank"
                     rel="noopener noreferrer"
                     className="group glass-card p-0 overflow-hidden flex flex-col h-full text-left hover:glow-effect hover:-translate-y-1 transition-smooth"
                  >
                     {/* Browser frame */}
                     <div className="border-b border-border">
                        <div className="flex items-center gap-1.5 px-3 py-2 bg-secondary/80">
                           <span className="w-2.5 h-2.5 rounded-full bg-red-400/80" />
                           <span className="w-2.5 h-2.5 rounded-full bg-yellow-400/80" />
                           <span className="w-2.5 h-2.5 rounded-full bg-green-400/80" />
                           <span className="ml-3 text-[11px] text-muted-foreground truncate">
                              {site.url.replace(/^https?:\/\//, "").replace(/\/$/, "")}
                           </span>
                        </div>
                        <div className="aspect-[16/10] overflow-hidden bg-white">
                           <img
                              src={site.image}
                              alt={`${site.title} website`}
                              loading="lazy"
                              className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                           />
                        </div>
                     </div>

                     <div className="p-6 flex flex-col flex-1">
                        <div className="flex items-start justify-between gap-3 mb-2">
                           <h3 className="text-xl font-bold text-foreground m-0">
                              {site.title}
                           </h3>
                           <span className="shrink-0 flex items-center gap-1 text-sm font-semibold text-primary">
                              Visit site
                              <ArrowUpRight
                                 size={16}
                                 className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                              />
                           </span>
                        </div>
                        <p className="text-sm text-muted-foreground leading-relaxed mt-0 mb-4">
                           {site.description}
                        </p>
                        <div className="flex flex-wrap gap-2 mt-auto">
                           {[...site.credits, ...site.tags].map((tag) => (
                              <span
                                 key={tag}
                                 className="px-2.5 py-1 rounded-md text-xs font-medium bg-secondary text-secondary-foreground"
                              >
                                 {tag}
                              </span>
                           ))}
                        </div>
                        {site.note && (
                           <p className="text-xs italic text-muted-foreground/70 mt-3 mb-0">
                              {site.note}
                           </p>
                        )}
                     </div>
                  </a>
               </Reveal>
            ))}
         </div>
      </div>
   );
}
