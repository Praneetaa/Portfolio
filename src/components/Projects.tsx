import { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ExternalLink, Code } from "lucide-react";

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

export default function GitHubPortfolio() {
   const [projects, setProjects] = useState<GitHubRepo[]>([]);
   const [loading, setLoading] = useState(true);
   const [error, setError] = useState<string | null>(null);

   useEffect(() => {
      fetchProjects();
      const interval = setInterval(fetchProjects, 5 * 60 * 1000);

      // Cleanup when component unmounts
      return () => clearInterval(interval);
   }, []);

   const fetchProjects = async () => {
      try {
         setLoading(true);

         const response = await fetch(
            `https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=10`
         );

         if (!response.ok) {
            throw new Error("Failed to fetch repositories");
         }

         const data: GitHubRepo[] = await response.json();

         // Sort by stars (most popular first)
         const sorted = data.sort(
            (a, b) => b.stargazers_count - a.stargazers_count
         );

         setProjects(sorted);
         setError(null);

         console.log("✅ Fetched projects:", sorted); // Debug log
      } catch (err) {
         const message = err instanceof Error ? err.message : "Unknown error";
         setError(message);
         console.error("❌ Error:", err);
      } finally {
         setLoading(false);
      }
   };

   const sliderSettings = {
      dots: true,
      infinite: projects.length > 3,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 4000,
      pauseOnHover: true,
      responsive: [
         {
            breakpoint: 1024,
            settings: {
               slidesToShow: 2,
               infinite: projects.length > 2,
            },
         },
         {
            breakpoint: 640,
            settings: {
               slidesToShow: 1,
               infinite: projects.length > 1,
            },
         },
      ],
   };

   // Loading state
   if (loading) {
      return (
         <div className="min-h-screen bg-background flex items-center justify-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
         </div>
      );
   }

   // Error state
   if (error) {
      return (
         <div className="min-h-screen bg-background flex items-center justify-center p-8">
            <div className="glass-card max-w-md">
               <p className="text-red-400">Error: {error}</p>
               <button onClick={fetchProjects} className="btn btn-primary mt-4">
                  Try Again
               </button>
            </div>
         </div>
      );
   }

   return (
      <section id="projects" className="min-h-screen bg-background py-20 px-6">
         <div className="container-padding">
            <div className="text-center mb-16">
               <h1 className="gradient-text mb-4">My Projects</h1>
               <p className="text-muted-foreground">
                  Showcasing my latest work from GitHub
               </p>
            </div>

            {projects.length === 0 ? (
               <div className="text-center py-12 text-muted-foreground">
                  No projects found.
               </div>
            ) : (
               // Replace grid with Slider
               <Slider {...sliderSettings}>
                  {projects.map((project) => (
                     <div key={project.id} className="px-3">
                        <ProjectCard project={project} />
                     </div>
                  ))}
               </Slider>
            )}
         </div>
      </section>
   );
}
interface ProjectCardProps {
   project: GitHubRepo;
}

function ProjectCard({ project }: ProjectCardProps) {
   const [isHovered, setIsHovered] = useState(false);
   // GitHub's OpenGraph image (works for all repos!)
   const previewImage = `https://opengraph.githubassets.com/1/${GITHUB_USERNAME}/${project.name}`;

   return (
      <div
         className={`glass-card overflow-hidden p-0 transition-smooth ${
            isHovered ? "glow-effect -translate-y-2" : ""
         }`}
         onMouseEnter={() => setIsHovered(true)}
         onMouseLeave={() => setIsHovered(false)}
      >
         {/* Preview Section with Real Image */}
         <div className="h-52 relative overflow-hidden">
            <img
               src={previewImage}
               alt={`${project.name} preview`}
               className="w-full h-full object-cover"
            />

            {/* Gradient overlay for styling */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/40 via-primary/20 to-accent/40"></div>
         </div>

         {/* Content */}
         <div className="p-6">
            <div className="flex items-start justify-between mb-3">
               <h3 className="text-xl font-bold text-foreground flex-1 pr-2 line-clamp-1">
                  {project.name
                     .split("-")
                     .map(
                        (word) => word.charAt(0).toUpperCase() + word.slice(1)
                     )
                     .join(" ")}
               </h3>
               <span className="flex-shrink-0 px-3 py-1 text-xs font-medium rounded-full bg-accent/20 text-accent border border-accent/30">
                  Completed
               </span>
            </div>

            <p className="text-sm leading-relaxed mb-5 line-clamp-2 min-h-[2.5rem] text-muted-foreground">
               {project.description ||
                  "A modern, responsive project built with cutting-edge technologies."}
            </p>

            <div className="flex flex-wrap gap-2 mb-5">
               {project.language && (
                  <span className="px-3 py-1.5 rounded-md text-xs font-medium bg-secondary/80 text-secondary-foreground border border-foreground/15">
                     {project.language}
                  </span>
               )}
               {project.topics?.slice(0, 3).map((topic) => (
                  <span
                     key={topic}
                     className="px-3 py-1.5 rounded-md text-xs font-medium capitalize bg-secondary/80 text-secondary-foreground border border-foreground/15"
                  >
                     {topic}
                  </span>
               ))}
            </div>

            <div className="flex gap-3">
               <a
                  href={project.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-inactive flex-1 flex items-center justify-center gap-2"
               >
                  <Code size={18} />
                  <span className="text-sm font-semibold">Code</span>
               </a>
               <a
                  href={project.homepage || project.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary flex-1 flex items-center justify-center gap-2"
               >
                  <ExternalLink size={18} />
                  <span className="text-sm font-semibold">Demo</span>
               </a>
            </div>
         </div>
      </div>
   );
}
