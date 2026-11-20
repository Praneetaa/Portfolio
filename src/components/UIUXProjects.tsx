import { useEffect, useState } from "react";
import {
   Monitor,
   Smartphone,
   MousePointer2,
   Maximize2,
   X,
   Check,
   ArrowUpRight,
} from "lucide-react";
import Reveal from "./Reveal";
import LazyImage from "./LazyImage";
import spillHomeDesktop from "../assets/uiux/spill-the-tea-home-desktop.webp";
import spillHomeMobile from "../assets/uiux/spill-the-tea-home-mobile.webp";
import spillAboutDesktop from "../assets/uiux/spill-the-tea-about-desktop.webp";
import spillAboutMobile from "../assets/uiux/spill-the-tea-about-mobile.webp";
import spillMenuDesktop from "../assets/uiux/spill-the-tea-menu-desktop.webp";
import spillMenuMobile from "../assets/uiux/spill-the-tea-menu-mobile.webp";
import preciseCover from "../assets/designs/precise-digital-website.webp";
import preciseSitemap from "../assets/uiux/precise-sitemap.webp";
import preciseAdminFlow from "../assets/uiux/precise-admin-flow.webp";
import preciseWidgetStates from "../assets/uiux/precise-widget-states.webp";
import preciseWidgetConfig from "../assets/uiux/precise-widget-config.webp";
import precisePrototype from "../assets/uiux/precise-prototype.webp";
import beaconnLanding from "../assets/uiux/beaconn-landing.webp";
import beaconnFind from "../assets/uiux/beaconn-find-internships.webp";
import beaconnEvents from "../assets/uiux/beaconn-events.webp";
import beaconnSaved from "../assets/uiux/beaconn-saved.webp";
import beaconnApplications from "../assets/uiux/beaconn-applications.webp";
import beaconnEmployer from "../assets/uiux/beaconn-employer-dashboard.webp";
import beaconnManageEvents from "../assets/uiux/beaconn-manage-events.webp";

type ViewMode = "desktop" | "mobile";

interface ThoughtNote {
   title: string;
   text: string;
}

interface DesignPage {
   name: string;
   /** Full-length page exports. Provide at least one. */
   desktop?: string;
   mobile?: string;
   /**
    * A single image shown as-is (cover mockup, sitemap, user flow…),
    * with click-to-enlarge. Use instead of desktop/mobile.
    */
   image?: string;
   /** One or two lines on what this page is for / why it looks this way. */
   caption?: string;
   /** Optional: "In Progress", "Wireframe", etc. Omit when finished. */
   status?: string;
}

interface UIUXProject {
   /**
    * "website": tall full-page exports, scrolled inside the frame.
    * "app": single phone screens, shown whole with no scrolling.
    */
   kind?: "website" | "app" | "webapp";
   title: string;
   summary: string;
   /** Who did what, shown under the title. */
   credits: string[];
   tools: string[];
   pages: DesignPage[];
   notes: ThoughtNote[];
   /** Optional "What I designed" checklist, for big projects. */
   highlights?: string[];
   /** Optional line under the card, e.g. "full project available on request". */
   footnote?: string;
   /** Optional: "In Progress", "Concept", etc. Omit when finished. */
   status?: string;
   /** Optional link to a Figma prototype. */
   prototypeUrl?: string;
   /** Optional link to the live, deployed product. */
   liveUrl?: string;
   /** Optional demo login shown under the live link, e.g. "email · password". */
   demoLogin?: string;
}

/**
 * UI/UX work. To add a project: export the full pages from Figma
 * (PNG/PDF), convert to .webp in src/assets/uiux/, import them above
 * and add an entry here.
 */
const projects: UIUXProject[] = [
   {
      title: "PRECISE IoT Core",
      summary:
         "Industry 4.0 IoT monitoring platform for an Energy Management System, where admins build live dashboards from a drag-and-drop widget library.",
      credits: [
         "UI/UX Design Intern",
         "Precise Digital Economy Co., Ltd.",
      ],
      tools: ["Figma"],
      pages: [
         {
            name: "Overview",
            image: preciseCover,
            caption:
               "Project Portal → Dashboard Overview → Widget Canvas, responsive across desktop, tablet and mobile.",
         },
         {
            name: "Sitemap",
            image: preciseSitemap,
            caption:
               "Five areas mapped out before any screens: dashboard management, the builder canvas, the widget library, widget configuration and widget templates.",
         },
         {
            name: "Admin flow",
            image: preciseAdminFlow,
            caption:
               "How an admin creates a dashboard: from the dashboard list to a saved, configured dashboard.",
         },
         {
            name: "Widget states",
            image: preciseWidgetStates,
            caption:
               "Every widget designed in every state: empty, loading, error and live data, so nothing breaks when data is missing or late.",
         },
         {
            name: "Widget config",
            image: preciseWidgetConfig,
            caption:
               "Configuration panels for KPI, gauge, table and chart widgets, where admins connect data and choose how it's displayed.",
         },
         {
            name: "Prototype",
            image: precisePrototype,
            caption:
               "The interactive Figma prototype, linking the Project Portal, Dashboard List, Widget Canvas and every widget.",
         },
      ],
      highlights: [
         "17 widget types, from charts to alarms",
         "Empty, loading, error & live states",
         "Widget configuration panels",
         "Components & Figma variables",
         "Interactive prototype",
         "Sitemap & user flows",
      ],
      footnote:
         "Happy to walk through the full project in an interview.",
      notes: [
         {
            title: "Structure before screens",
            text: "A complex product needed a clear map first, so I planned the sitemap and user flows before designing any interface.",
         },
         {
            title: "A reusable widget system",
            text: "17 widgets across 7 categories, from real-time tables and charts to gauges and alerts, all built from shared components.",
         },
         {
            title: "Colour only where it means something",
            text: "Colour is reserved for real signals like alarm severity and device status, so important changes stand out at a glance.",
         },
         {
            title: "Consistent states everywhere",
            text: "Every widget follows the same standard states, so empty, loading and error screens look and behave the same across the platform.",
         },
         {
            title: "Designed to be built",
            text: "I reviewed designs with project managers and developers throughout, keeping every screen practical to implement.",
         },
      ],
   },
   {
      kind: "webapp",
      liveUrl: "https://beaconn-virid.vercel.app",
      demoLogin: "napat@student.th · Demo1234!",
      title: "Beaconn",
      summary:
         "Career development platform where students find internships and career events, and organisations post and manage them. My 16-week IT capstone project.",
      credits: ["Capstone project", "UI/UX design & full-stack build"],
      tools: ["React", "Tailwind CSS", "Node.js", "MongoDB"],
      pages: [
         {
            name: "Landing",
            desktop: beaconnLanding,
            caption:
               "Says what Beaconn does in one line, with live counts and a preview built from real listings.",
         },
         {
            name: "Internships",
            desktop: beaconnFind,
            caption:
               "Student view. A Coming up strip for the next event and deadline, then internships with stipend, mode and deadline at a glance.",
         },
         {
            name: "Events",
            desktop: beaconnEvents,
            caption:
               "Student view. Calendar date stubs and a seats-left bar, so it is clear when an event is and whether there is still room.",
         },
         {
            name: "Saved",
            desktop: beaconnSaved,
            caption:
               "Student view. Saved internships and events in one place, ready to apply or register later.",
         },
         {
            name: "My applications",
            desktop: beaconnApplications,
            caption:
               "Student view. Every application and its status in one tracker, so students do not need follow-up emails.",
         },
         {
            name: "Employer dashboard",
            desktop: beaconnEmployer,
            caption:
               "Organisation view. Real numbers with weekly change, the latest applicants and each role's deadline and applicant count.",
         },
         {
            name: "Manage events",
            desktop: beaconnManageEvents,
            caption:
               "Organisation view. Every posted event with its registrations, and quick edit, close and delete actions.",
         },
      ],
      notes: [
         {
            title: "Two roles, two experiences",
            text: "Students and organisations each get their own dashboard, and the navigation only shows what's relevant to each role.",
         },
         {
            title: "Search comes first",
            text: "Finding an opportunity is the main job for students, so search and filters sit at the top of their dashboard.",
         },
         {
            title: "Everything tracked in one place",
            text: "Saved internships and events, applications and event registrations each have a page, with clear statuses instead of guesswork.",
         },
         {
            title: "Built to be clear, not busy",
            text: "One navy for actions, neutral greys for everything else and colour only for status and deadlines keep a data-heavy platform easy to scan.",
         },
         {
            title: "Designed and built end to end",
            text: "I designed the interface and built it with React, Tailwind, Node.js, Express and MongoDB, including role-based access.",
         },
      ],
   },
   {
      title: "Spill The Tea",
      summary:
         "Website for a neighbourhood café, designed for desktop and mobile.",
      credits: ["UI/UX design: me", "Development: team project"],
      tools: ["Figma"],
      pages: [
         {
            name: "Home",
            desktop: spillHomeDesktop,
            mobile: spillHomeMobile,
            caption:
               "Gets visitors to the menu or a table booking as fast as possible.",
         },
         {
            name: "About",
            desktop: spillAboutDesktop,
            mobile: spillAboutMobile,
            caption:
               "Tells the café's story, with the gallery and team adding a personal, local feel.",
         },
         {
            name: "Menu",
            desktop: spillMenuDesktop,
            mobile: spillMenuMobile,
            caption:
               "Layout wireframe. Coffee, Tea and Pastries tabs let people jump straight to what they want, and on mobile the cards become compact rows that are quicker to scan.",
            status: "Wireframe",
         },
      ],
      notes: [
         {
            title: "A palette taken from the drinks",
            text: "Warm browns and creams echo tea and coffee, with rounded Poppins headings to make the site feel cozy rather than corporate.",
         },
         {
            title: "The two main actions come first",
            text: "Most café visitors want the menu or a table, so “View Menu” and “Book a Table” sit right in the hero, with the menu as the filled, primary button.",
         },
         {
            title: "Show the food before the pitch",
            text: "Customer Favorites comes straight after the hero. Photos and prices build appetite before any “why choose us” copy.",
         },
         {
            title: "Trust before the ask",
            text: "Benefits and customer reviews come before the final “Ready to Spill the Tea?” block with opening hours and location.",
         },
         {
            title: "Rethought for mobile, not just shrunk",
            text: "Full-width buttons for thumbs, a hamburger menu, stacked cards, and the reviews become a swipeable carousel.",
         },
      ],
   },
];

const tabClass = (isActive: boolean) =>
   `flex shrink-0 whitespace-nowrap items-center gap-2 px-4 py-2 rounded-[var(--radius-btn)] text-sm font-semibold capitalize transition-smooth ${
      isActive
         ? "bg-primary text-primary-foreground shadow-lg"
         : "text-muted-foreground hover:text-foreground"
   }`;

function ScreenViewer({ project }: { project: UIUXProject }) {
   const [pageIndex, setPageIndex] = useState(0);
   const [view, setView] = useState<ViewMode>("desktop");
   const isApp = project.kind === "app";
   const isWebApp = project.kind === "webapp";
   const [zoomed, setZoomed] = useState<string | null>(null);

   const page = project.pages[pageIndex];
   const available = (["desktop", "mobile"] as ViewMode[]).filter(
      (mode) => page[mode]
   );
   // Fall back if the chosen device isn't available for this page.
   const activeView = available.includes(view) ? view : available[0];
   const src = page[activeView];

   return (
      <div className="min-w-0 w-full flex flex-col items-center gap-4">
         <div className="w-full flex flex-wrap items-center justify-center gap-3">
            {project.pages.length > 1 && (
               <div
                  className="inline-flex max-w-full overflow-x-auto custom-scrollbar gap-1 p-1 rounded-[14px] bg-secondary/60"
                  role="group"
                  aria-label="Page"
               >
                  {project.pages.map((p, i) => (
                     <button
                        key={p.name}
                        type="button"
                        onClick={(e) => {
                           setPageIndex(i);
                           // Keep the chosen tab visible when the row scrolls.
                           e.currentTarget.scrollIntoView({
                              behavior: "smooth",
                              block: "nearest",
                              inline: "center",
                           });
                        }}
                        aria-pressed={i === pageIndex}
                        className={tabClass(i === pageIndex)}
                     >
                        {p.name}
                     </button>
                  ))}
               </div>
            )}

            {available.length > 1 && (
               <div
                  className="inline-flex gap-1 p-1 rounded-[14px] bg-secondary/60"
                  role="group"
                  aria-label="Device"
               >
                  {available.map((mode) => {
                     const Icon = mode === "desktop" ? Monitor : Smartphone;
                     return (
                        <button
                           key={mode}
                           type="button"
                           onClick={() => setView(mode)}
                           aria-pressed={mode === activeView}
                           aria-label={mode}
                           title={mode === "desktop" ? "Desktop" : "Mobile"}
                           className={tabClass(mode === activeView)}
                        >
                           <Icon size={16} />
                        </button>
                     );
                  })}
               </div>
            )}
         </div>

         {page.image ? (
            <button
               key={`${pageIndex}-image`}
               type="button"
               onClick={() => setZoomed(page.image ?? null)}
               className="protect-content group relative w-full rounded-xl overflow-hidden border border-foreground/10 shadow-2xl bg-white cursor-zoom-in animate-fade-in"
               onContextMenu={(e) => e.preventDefault()}
               aria-label={`Enlarge ${page.name}`}
            >
               <LazyImage
                  src={page.image}
                  alt={`${project.title} ${page.name}`}
                  className="protected-img w-full max-h-[520px] object-contain"
                  placeholderClassName="aspect-[16/10]"
                  draggable={false}
               />
               <span className="absolute bottom-3 right-3 flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-black/60 text-white text-xs font-medium opacity-80 group-hover:opacity-100 transition-smooth">
                  <Maximize2 size={12} />
                  Click to enlarge
               </span>
            </button>
         ) : activeView === "desktop" ? (
            <div className="w-full rounded-xl overflow-hidden border border-foreground/10 shadow-2xl bg-card">
               {/* Browser chrome */}
               <div className="flex items-center gap-1.5 px-3 py-2 bg-secondary/80 border-b border-foreground/10">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-400/80" />
                  <span className="w-2.5 h-2.5 rounded-full bg-yellow-400/80" />
                  <span className="w-2.5 h-2.5 rounded-full bg-green-400/80" />
               </div>
               {isWebApp ? (
                  // Screen-sized screenshots: show whole, click to enlarge.
                  <button
                     key={`${pageIndex}-desktop`}
                     type="button"
                     onClick={() => setZoomed(src ?? null)}
                     className="protect-content group relative block w-full cursor-zoom-in animate-fade-in"
                     onContextMenu={(e) => e.preventDefault()}
                     aria-label={`Enlarge ${page.name}`}
                  >
                     <LazyImage
                        src={src}
                        alt={`${project.title} ${page.name} screen`}
                        className="protected-img w-full"
                        placeholderClassName="aspect-[16/10]"
                        draggable={false}
                     />
                     <span className="absolute bottom-3 right-3 flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-black/60 text-white text-xs font-medium opacity-0 group-hover:opacity-100 transition-smooth">
                        <Maximize2 size={12} />
                        Click to enlarge
                     </span>
                  </button>
               ) : (
                  <div
                     key={`${pageIndex}-desktop`}
                     className="protect-content custom-scrollbar h-[360px] sm:h-[460px] md:h-[520px] overflow-y-auto animate-fade-in"
                     onContextMenu={(e) => e.preventDefault()}
                  >
                     <LazyImage
                        src={src}
                        alt={`${project.title} ${page.name} page, desktop design`}
                        className="protected-img w-full"
                        placeholderClassName="h-full"
                        draggable={false}
                     />
                  </div>
               )}
            </div>
         ) : (
            <div className="w-[260px] sm:w-[280px] rounded-[2.25rem] p-2.5 bg-neutral-900 border border-foreground/15 shadow-2xl">
               <div
                  key={`${pageIndex}-mobile`}
                  className={`protect-content custom-scrollbar rounded-[1.75rem] bg-white animate-fade-in ${
                     isApp
                        ? "overflow-hidden"
                        : "h-[480px] sm:h-[540px] overflow-y-auto"
                  }`}
                  onContextMenu={(e) => e.preventDefault()}
               >
                  <LazyImage
                     src={src}
                     alt={`${project.title} ${page.name} page, mobile design`}
                     className="protected-img w-full"
                     placeholderClassName={isApp ? "aspect-[9/19]" : "h-full"}
                     draggable={false}
                  />
               </div>
            </div>
         )}

         {(page.caption || page.status) && (
            <p className="text-sm text-muted-foreground text-center max-w-lg m-0">
               {page.status && (
                  <span className="inline-block align-middle mr-2 px-2.5 py-0.5 text-[11px] font-semibold rounded-full bg-accent/20 text-accent border border-accent/30">
                     {page.status}
                  </span>
               )}
               {page.caption}
            </p>
         )}

         {!isApp && !isWebApp && !page.image && (
            <p className="flex items-center gap-1.5 text-xs text-muted-foreground/80 m-0">
               <MousePointer2 size={12} />
               Scroll inside the frame to see the full page
            </p>
         )}

         {zoomed && (
            <ImageLightbox
               src={zoomed}
               alt={`${project.title} ${page.name}`}
               onClose={() => setZoomed(null)}
            />
         )}
      </div>
   );
}

/** Full-screen view for detailed images like sitemaps; scrolls if wider than the screen. */
function ImageLightbox({
   src,
   alt,
   onClose,
}: {
   src: string;
   alt: string;
   onClose: () => void;
}) {
   useEffect(() => {
      const onKeyDown = (e: KeyboardEvent) => {
         if (e.key === "Escape") onClose();
      };
      document.addEventListener("keydown", onKeyDown);
      document.body.style.overflow = "hidden";
      return () => {
         document.removeEventListener("keydown", onKeyDown);
         document.body.style.overflow = "";
      };
   }, [onClose]);

   return (
      <div
         className="fixed inset-0 z-[60] bg-black/85 backdrop-blur-sm flex flex-col animate-fade-in"
         onClick={onClose}
         role="dialog"
         aria-modal="true"
         aria-label={alt}
      >
         <div className="flex justify-end p-4">
            <button
               type="button"
               onClick={onClose}
               aria-label="Close"
               className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-smooth"
            >
               <X size={22} />
            </button>
         </div>
         <div className="custom-scrollbar flex-1 overflow-auto px-4 pb-6">
            <LazyImage
               src={src}
               alt={alt}
               loading="eager"
               onClick={(e) => e.stopPropagation()}
               onContextMenu={(e) => e.preventDefault()}
               draggable={false}
               className="protected-img mx-auto w-auto max-w-[1400px] sm:max-w-[min(1800px,95vw)] rounded-lg bg-white"
               placeholderClassName="mx-auto w-full max-w-[1400px] aspect-[16/10] rounded-lg overflow-hidden"
            />
         </div>
      </div>
   );
}

function ProjectShowcase({ project }: { project: UIUXProject }) {
   return (
      <div className="glass-card-feature p-5 md:p-8 grid lg:grid-cols-[1.35fr_1fr] gap-8 lg:gap-10 items-start">
         <ScreenViewer project={project} />

         <div className="text-left">
            <div className="flex flex-wrap items-center gap-2 mb-2">
               <h3 className="text-2xl font-bold text-foreground m-0">
                  {project.title}
               </h3>
               {project.status && (
                  <span className="px-3 py-1 text-xs font-semibold rounded-full bg-accent/20 text-accent border border-accent/30">
                     {project.status}
                  </span>
               )}
            </div>
            <p className="text-muted-foreground mt-0 mb-3">{project.summary}</p>

            <div className="flex flex-wrap gap-2 mb-6">
               {[...project.credits, ...project.tools].map((tag) => (
                  <span
                     key={tag}
                     className="px-3 py-1.5 rounded-full text-xs font-medium text-foreground bg-secondary"
                  >
                     {tag}
                  </span>
               ))}
            </div>

            {project.highlights && (
               <div className="mb-7">
                  <p className="text-xs font-semibold uppercase tracking-wider text-accent mb-3">
                     What I designed
                  </p>
                  <ul className="list-none p-0 m-0 grid sm:grid-cols-2 gap-x-4 gap-y-2">
                     {project.highlights.map((item) => (
                        <li
                           key={item}
                           className="flex items-center gap-2 text-sm text-foreground/85"
                        >
                           <Check size={14} className="text-primary shrink-0" />
                           {item}
                        </li>
                     ))}
                  </ul>
               </div>
            )}

            <p className="text-xs font-semibold uppercase tracking-wider text-accent mb-4">
               My thought process
            </p>
            <ol className="space-y-4 list-none p-0 m-0">
               {project.notes.map((note, i) => (
                  <li key={note.title} className="flex gap-3">
                     <span className="shrink-0 w-7 h-7 rounded-full bg-primary/15 border border-primary/30 text-primary text-xs font-bold flex items-center justify-center">
                        {i + 1}
                     </span>
                     <div>
                        <p className="font-semibold text-foreground text-sm m-0">
                           {note.title}
                        </p>
                        <p className="text-sm text-muted-foreground leading-relaxed mt-1 mb-0">
                           {note.text}
                        </p>
                     </div>
                  </li>
               ))}
            </ol>

            {(project.liveUrl || project.prototypeUrl) && (
               <div className="flex flex-wrap gap-3 mt-6">
                  {project.liveUrl && (
                     <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-primary inline-flex items-center gap-2"
                     >
                        View live site
                        <ArrowUpRight size={18} />
                     </a>
                  )}
                  {project.prototypeUrl && (
                     <a
                        href={project.prototypeUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-outline inline-flex items-center gap-2"
                     >
                        View Prototype
                     </a>
                  )}
               </div>
            )}

            {project.demoLogin && (
               <p className="text-xs text-muted-foreground mt-3 mb-0">
                  Try it with the demo student login:{" "}
                  <span className="font-medium text-foreground">
                     {project.demoLogin}
                  </span>
               </p>
            )}

            {project.footnote && (
               <p className="hand-note !text-xl mt-7 mb-0 !transform-none">
                  {project.footnote}
               </p>
            )}
         </div>
      </div>
   );
}

export default function UIUXProjects() {
   return (
      <div className="max-w-6xl mx-auto space-y-10">
         {projects.map((project, i) => (
            <Reveal key={project.title} delay={i * 100}>
               <ProjectShowcase project={project} />
            </Reveal>
         ))}
      </div>
   );
}
