import Reveal from "./Reveal";

interface TimelineEvent {
   year: string;
   title: string;
}

// Recent Events Timeline (see Hero's Download Resume button).
const events: TimelineEvent[] = [
   {
      year: "2023",
      title: "Student Assistant - Media & IT Support, LCIC",
   },
   {
      year: "2025",
      title: "Career Development Site - Final Year Project",
   },
   {
      year: "2026",
      title: "UI/UX Design Intern, Precise System & Project Co.",
   },
   {
      year: "2026",
      title: "Took Part in Skylab Hackathon: AI Series",
   },
   { year: "2026", title: "Graduated BSc in Information Technology" },
];

const Timeline = () => {
   return (
      <section className="relative pt-10 pb-4 overflow-hidden">
         <div className="container-padding">
            <Reveal className="text-center mb-8">
               <span className="section-kicker justify-center">Timeline</span>
               <h2 className="gradient-text mb-4">My Journey</h2>
               <p className="text-muted-foreground">
                  A quick look at where I've been and what's next
               </p>
            </Reveal>

            <Reveal delay={100} className="relative max-w-5xl mx-auto">
               {/* Connecting line */}
               <div className="hidden md:block absolute left-0 right-0 top-[7px] h-px bg-primary opacity-40" />

               <div className="flex overflow-x-auto md:overflow-visible gap-10 md:gap-4 pb-4 md:pb-0 md:justify-between snap-x">
                  {events.map((event, i) => {
                     const isLatest = i === events.length - 1;
                     return (
                        <div
                           key={i}
                           className="relative flex-shrink-0 w-36 md:w-auto md:flex-1 flex flex-col items-center text-center snap-start"
                        >
                           <span className="relative flex items-center justify-center w-7 h-7">
                              {isLatest && (
                                 <>
                                    <span className="absolute inset-0 rounded-full bg-accent/40 animate-ping" />
                                    <span className="absolute inset-0 m-auto w-6 h-6 rounded-full ring-2 ring-accent" />
                                 </>
                              )}
                              <span className="relative w-3.5 h-3.5 rounded-full bg-primary ring-4 ring-background" />
                           </span>
                           <span className="mt-3 font-bold text-primary text-sm">
                              {event.year}
                           </span>
                           <span className="mt-1 text-xs md:text-sm text-muted-foreground leading-snug">
                              {event.title}
                           </span>
                           {isLatest && (
                              <span className="mt-1 text-[10px] font-semibold uppercase tracking-wide text-accent">
                                 Latest
                              </span>
                           )}
                        </div>
                     );
                  })}
               </div>
            </Reveal>
         </div>
      </section>
   );
};

export default Timeline;