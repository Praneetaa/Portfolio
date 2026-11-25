import CodingProjects from "./CodingProjects";
import DesignProjects from "./DesignProjects";
import UIUXProjects, { CapstoneFeature } from "./UIUXProjects";
import LiveSites from "./LiveSites";
import SectionHeader from "./SectionHeader";

export default function Projects() {
   return (
      <>
         <section id="uiux-projects" className="relative py-20 overflow-x-clip">
            <div className="container-padding">
               <SectionHeader number="03" label="UI/UX" title="UI/UX projects" subtitle="Interfaces I've designed, and the thinking behind them" note="every screen designed by me" />
               <UIUXProjects />
            </div>
         </section>

         <section id="design-projects" className="relative py-20">
            <div className="container-padding">
               <SectionHeader number="04" label="Graphic design" title="Design projects" subtitle="Branding, print and digital pieces for brands, events and startups." note="tap one for the story" />
               <DesignProjects />
            </div>
         </section>

         <section id="projects" className="relative py-20 overflow-hidden">
            <div className="container-padding">
               <SectionHeader number="05" label="Built & shipped" title="Websites & code" subtitle="My capstone project, live websites I've worked on, and my latest code on GitHub." />
               <CapstoneFeature />
               <LiveSites />
               <p className="max-w-6xl mx-auto text-xs font-semibold uppercase tracking-wider text-accent mb-5 text-left">
                  Latest on GitHub
               </p>
               <CodingProjects />
            </div>
         </section>
      </>
   );
}