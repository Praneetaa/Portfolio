import Reveal from "./Reveal";

/**
 * Manually kept in sync with the data shown elsewhere on the site
 * (DesignProjects piece count, Services list, About's skill lists, Timeline).
 */
const stats = [
   { value: "18+", label: "Design Projects" },
   { value: "30+", label: "Skills & Tools" },
   { value: "6", label: "Services Offered" },
   { value: "3+", label: "Years Building" },
];

const Stats = () => {
   return (
      <section className="py-10">
         <div className="container-padding">
            <Reveal className="max-w-5xl mx-auto">
               <div className="glass-card-feature grid grid-cols-2 sm:grid-cols-4 gap-6 md:gap-8 text-center">
                  {stats.map((stat) => (
                     <div key={stat.label}>
                        <p className="text-3xl md:text-4xl font-extrabold gradient-text">
                           {stat.value}
                        </p>
                        <p className="text-xs md:text-sm text-muted-foreground mt-1">
                           {stat.label}
                        </p>
                     </div>
                  ))}
               </div>
            </Reveal>
         </div>
      </section>
   );
};

export default Stats;
