import { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ExternalLink, Code, AlertTriangle } from "lucide-react";
import { SiGithub } from "react-icons/si";

// Define the type
interface GitHubRepo {
   id: number;
   name: string;
   description: string | null;
   html_url: string;
   homepage: string | null;
   language: string | null;
   topics: string[];
   stargazers_count: number;
}
const GITHUB_USERNAME = "Praneetaa";

/**
 * Extra details for repos, keyed by repo name. Used when the repo on GitHub
 * has no website link or description set; GitHub's own values win if present.
 */
const REPO_OVERRIDES: Record<
   string,
   { homepage?: string; description?: string }
> = {
   "Internship-Portal": {
      homepage: "https://beaconn-virid.vercel.app",
      description:
         "Beaconn: a career platform where students find internships and events, and organisations post and manage them. MERN stack.",
   },
};

function getSlidesToShow() {
   if (window.innerWidth < 640) return 1;
   if (window.innerWidth < 1024) return 2;
   return 3;
}

export default function CodingProjects() {
   const [projects, setProjects] = useState<GitHubRepo[]>([]);
   const [loading, setLoading] = useState(true);
   const [error, setError] = useState<string | null>(null);
   const [slidesToShow, setSlidesToShow] = useState(getSlidesToShow);

   useEffect(() => {
      fetchProjects();
      // Background refresh: update data silently so the carousel isn't
      // torn down and replaced by skeletons every 5 minutes.
      const interval = setInterval(
         () => fetchProjects({ silent: true }),
         5 * 60 * 1000
      );

      // Cleanup when component unmounts
      return () => clearInterval(interval);
   }, []);

   useEffect(() => {
      const handleResize = () => setSlidesToShow(getSlidesToShow());
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
   }, []);

   const fetchProjects = async ({ silent = false } = {}) => {
      try {
         if (!silent) setLoading(true);

         const response = await fetch(
            `https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=10`
         );

         if (!response.ok) {
            throw new Error("Failed to fetch repositories");
         }

         const data: GitHubRepo[] = (
            (await response.json()) as GitHubRepo[]
         ).map((repo) => {
            const extra = REPO_OVERRIDES[repo.name];
            return extra
               ? {
                    ...repo,
                    homepage: repo.homepage || extra.homepage || null,
                    description: repo.description || extra.description || null,
                 }
               : repo;
         });

         // Sort by stars (most popular first)
         const sorted = data.sort(
            (a, b) => b.stargazers_count - a.stargazers_count
         );

         setProjects(sorted);
         setError(null);
      } catch (err) {
         console.error("❌ Error:", err);
         // A failed background refresh keeps the projects already on screen.
         if (silent) return;
         const message = err instanceof Error ? err.message : "Unknown error";
         setError(message);
      } finally {
         setLoading(false);
      }
   };

   const sliderSettings = {
      dots: true,
      arrows: true,
      infinite: projects.length > slidesToShow,
      speed: 500,
      slidesToShow,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 4000,
      pauseOnHover: true,
   };

   // Loading state
   if (loading) {
      return (
         <div
            className="grid gap-6"
            style={{
               gridTemplateColumns: `repeat(${slidesToShow}, minmax(0, 1fr))`,
            }}
         >
            {Array.from({ length: slidesToShow }).map((_, i) => (
               <ProjectCardSkeleton key={i} />
            ))}
         </div>
      );
   }

   // Error state
   if (error) {
      return (
         <div className="flex items-center justify-center py-12">
            <div className="glass-card max-w-md text-center">
               <AlertTriangle size={28} className="mx-auto mb-3 text-red-400" />
               <p className="font-semibold text-foreground mb-1">
                  Couldn't load projects
               </p>
               <p className="text-sm text-muted-foreground mb-5">
                  GitHub's API may be temporarily rate-limited. Try again, or
                  view my work directly on GitHub.
               </p>
               <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <button onClick={() => fetchProjects()} className="btn btn-primary">
                     Try Again
                  </button>
                  <a
                     href={`https://github.com/${GITHUB_USERNAME}`}
                     target="_blank"
                     rel="noopener noreferrer"
                     className="btn btn-outline inline-flex items-center justify-center gap-2"
                  >
                     <SiGithub size={16} />
                     View on GitHub
                  </a>
               </div>
            </div>
         </div>
      );
   }

   return (
      <div>
         {projects.length === 0 ? (
            <div className="text-center py-12 text-muted-foreground">
               No projects found.
            </div>
         ) : (
            <Slider {...sliderSettings}>
               {projects.map((project) => (
                  <div key={project.id} className="px-3 pt-2 pb-3">
                     <ProjectCard project={project} />
                  </div>
               ))}
            </Slider>
         )}

         <div className="text-center mt-10">
            <a
               href={`https://github.com/${GITHUB_USERNAME}`}
               target="_blank"
               rel="noopener noreferrer"
               className="btn btn-outline inline-flex items-center justify-center gap-2"
            >
               <SiGithub size={18} />
               See More on GitHub
            </a>
         </div>
      </div>
   );
}
/** "spill_the-tea_cafe" → "Spill The Tea Cafe" */
function formatRepoName(name: string) {
   return name
      .split(/[-_]+/)
      .filter(Boolean)
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
}

function ProjectCardSkeleton() {
   return (
      <div className="glass-card min-h-[260px] flex flex-col animate-pulse">
         <div className="flex items-start justify-between mb-3">
            <div className="h-6 w-2/3 rounded bg-secondary" />
            <div className="h-5 w-20 rounded-full bg-secondary" />
         </div>
         <div className="space-y-2 mb-5">
            <div className="h-3 w-full rounded bg-secondary" />
            <div className="h-3 w-4/5 rounded bg-secondary" />
         </div>
         <div className="flex gap-2 mb-5">
            <div className="h-6 w-16 rounded-md bg-secondary" />
            <div className="h-6 w-16 rounded-md bg-secondary" />
         </div>
         <div className="mt-auto h-10 w-full rounded-lg bg-secondary" />
      </div>
   );
}

interface ProjectCardProps {
   project: GitHubRepo;
}

function ProjectCard({ project }: ProjectCardProps) {
   const [isHovered, setIsHovered] = useState(false);
   // Language first, then up to 3 topics, without duplicates
   // (a repo's topic is often the same as its language).
   const tags = [project.language, ...(project.topics ?? []).slice(0, 3)]
      .filter((t): t is string => !!t)
      .filter(
         (t, i, all) =>
            all.findIndex((x) => x.toLowerCase() === t.toLowerCase()) === i
      );

   return (
      <div
         className={`glass-card overflow-hidden p-0 min-h-[260px] flex flex-col text-left transition-smooth ${
            isHovered ? "glow-effect -translate-y-1" : ""
         }`}
         onMouseEnter={() => setIsHovered(true)}
         onMouseLeave={() => setIsHovered(false)}
      >
         {/* Content */}
         <div className="p-6 flex flex-col flex-1">
            <h3 className="text-xl font-bold text-foreground mt-0 mb-2 line-clamp-1">
               {formatRepoName(project.name)}
            </h3>

            <p
               className={`text-sm leading-relaxed mt-0 mb-5 line-clamp-2 ${
                  project.description
                     ? "text-muted-foreground"
                     : "text-muted-foreground/60 italic"
               }`}
            >
               {project.description || "No description yet. See the code on GitHub."}
            </p>

            <div className="flex flex-wrap gap-2 mb-5">
               {tags.map((tag) => (
                  <span
                     key={tag}
                     className="px-2.5 py-1 rounded-md text-xs font-medium bg-secondary text-secondary-foreground"
                  >
                     {tag}
                  </span>
               ))}
            </div>

            <div className="flex gap-3 mt-auto">
               <a
                  href={project.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`btn flex items-center justify-center gap-2 ${
                     project.homepage
                        ? "btn-inactive flex-1"
                        : "btn-primary w-full"
                  }`}
               >
                  <Code size={18} />
                  <span className="text-sm font-semibold">Code</span>
               </a>
               {project.homepage && (
                  <a
                     href={project.homepage}
                     target="_blank"
                     rel="noopener noreferrer"
                     className="btn btn-primary flex-1 flex items-center justify-center gap-2"
                  >
                     <ExternalLink size={18} />
                     <span className="text-sm font-semibold">Demo</span>
                  </a>
               )}
            </div>
         </div>
      </div>
   );
}