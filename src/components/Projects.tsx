import CodingProjects from "./CodingProjects";
import DesignProjects from "./DesignProjects";
import Reveal from "./Reveal";

export default function Projects() {
   return (
      <>
       <section id="design-projects" className="relative py-20 px-6">
            <div
               className="floating-orb w-80 h-80 -bottom-10 -right-16"
               style={{
                  background:
                     "color-mix(in oklch, var(--color-accent), transparent 70%)",
               }}
            />
            <div className="container-padding">
               <Reveal className="text-center mb-16">
                  <span className="section-kicker justify-center">Portfolio</span>
                  <h2 className="gradient-text mb-4">Design Projects</h2>
                  <p className="text-muted-foreground">
                     A look at my branding and print design work
                  </p>
               </Reveal>
               <DesignProjects />
            </div>
         </section>

         <section id="projects" className="relative py-20 px-6 overflow-hidden">
            <div
               className="floating-orb w-72 h-72 -top-10 -left-10"
               style={{
                  background:
                     "color-mix(in oklch, var(--color-primary), transparent 68%)",
               }}
            />
            <div className="container-padding">
               <Reveal className="text-center mb-16">
                  <span className="section-kicker justify-center">Portfolio</span>
                  <h2 className="gradient-text mb-4">Coding Projects</h2>
                  <p className="text-muted-foreground">
                     Showcasing my latest work from GitHub
                  </p>
               </Reveal>
               <CodingProjects />
            </div>
         </section>

        
      </>
   );
}