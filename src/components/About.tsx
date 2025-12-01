import { useState } from "react";

const About = () => {
   type TabType = "Frontend" | "Design" | "Learning";
   const [activeTab, setActiveTab] = useState<TabType>("Frontend");

   const technicalSkills: Record<TabType, { name: string; level: number }[]> = {
      Frontend: [
         { name: "HTML/CSS", level: 90 },
         { name: "React", level: 60 },
         { name: "Tailwind CSS", level: 60 },
         { name: "JavaScript", level: 70 },
         { name: "TypeScript", level: 50 },
      ],
      Design: [
         { name: "Figma", level: 80 },
         { name: "Canva", level: 95 },
         { name: "UI Composition", level: 80 },
         { name: "Color Theory", level: 85 },
         { name: "Wireframing", level: 75 },
      ],
      Learning: [
         { name: "Node.js", level: 40 },
         { name: "Express.js", level: 35 },
         { name: "MongoDB", level: 50 },
         { name: "APIs", level: 45 },
         { name: "GitHub Collaboration", level: 65 },
      ],
   };

   const softSkills = [
      {
         title: "Creative Problem Solving",
         description:
            "Finding unique solutions to challenges with creativity and logic.",
      },
      {
         title: "Team Collaboration",
         description: "Communicating effectively and working well with others.",
      },
      {
         title: "Growth Mindset",
         description:
            "Always learning, improving, and embracing new opportunities.",
      },
      {
         title: "Adaptability",
         description: "Thriving in fast-changing environments and tools.",
      },
   ];

   return (
      <section
         id="about"
         className="min-h-screen flex items-center bg-background py-10"
      >
         <div className="container-padding w-full">
            {/* Header */}
            <div className="text-center mb-12">
               <h1 className="gradient-text mb-12">About Me</h1>
               <div className="glass-card max-w-5xl mx-auto">
                  <p className="text-lg leading-relaxed text-muted-foreground">
                     I'm a passionate IT student with a strong foundation in web
                     development and a keen interest in building modern,
                     user-friendly applications. My journey in technology
                     started with curiosity and has evolved into a commitment to
                     continuous learning and growth. While I'm early in my
                     career, I bring fresh perspectives, enthusiasm, and a
                     problem-solving mindset. I'm actively seeking opportunities
                     to contribute to meaningful projects and learn from
                     experienced professionals.
                  </p>
               </div>
            </div>

            {/* Skills Section */}
            <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto mt-16">
               {/* Soft Skills */}
               <div className="text-center">
                  <h3 className="mb-6  font-medium text-primary">
                     Soft Skills
                  </h3>
                  <div className="grid gap-4">
                     {softSkills.map((skill, index) => (
                        <div
                           key={index}
                           className="glass-card hover:scale-[1.02] transition-smooth group"
                        >
                           <h4 className="font-semibold mb-2 text-foreground group-hover:text-primary transition-smooth">
                              {skill.title}
                           </h4>
                           <p className="text-sm text-muted-foreground">
                              {skill.description}
                           </p>
                        </div>
                     ))}
                  </div>
               </div>

               {/* Technical Tabs */}
               <div className="text-center">
                  <h3 className=" font-medium mb-6 text-primary">
                     Technical Skills
                  </h3>
                  {/* Tab Container */}
                  <div className="relative bg-slate-900/50 backdrop-blur-sm rounded-xl p-1.5 mb-8 inline-flex w-full">
                     {/* Sliding Background */}
                     <div
                        className="absolute top-1.5 bottom-1.5 rounded-xl bg-gradient-to-r from-purple-500 to-blue-600 transition-all duration-300 ease-out"
                        style={{
                           width: `${
                              100 /
                              (Object.keys(technicalSkills) as TabType[]).length
                           }%`,
                           left: `${
                              ((
                                 Object.keys(technicalSkills) as TabType[]
                              ).indexOf(activeTab) *
                                 100) /
                              (Object.keys(technicalSkills) as TabType[]).length
                           }%`,
                        }}
                     />

                     {/* Tab Buttons */}
                     {(Object.keys(technicalSkills) as TabType[]).map((tab) => (
                        <button
                           key={tab}
                           onClick={() => setActiveTab(tab)}
                           className={`relative z-10 flex-1 py-3 px-6 rounded-xl font-medium transition-colors duration-300 ${
                              activeTab === tab
                                 ? "text-white"
                                 : "text-muted-foreground hover:text-foreground"
                           }`}
                        >
                           {tab}
                        </button>
                     ))}
                  </div>

                  {/* Skill Bars */}
                  <div className="glass-card">
                     <div className="space-y-6">
                        {technicalSkills[activeTab].map((skill, index) => (
                           <div key={index}>
                              <div className="flex justify-between mb-2 text-sm">
                                 <span className="font-medium text-foreground">
                                    {skill.name}
                                 </span>
                                 <span className="text-primary font-semibold">
                                    {skill.level}%
                                 </span>
                              </div>
                              <div
                                 className="h-2.5 rounded-full overflow-hidden"
                                 style={{
                                    backgroundColor: "var(--color-secondary)",
                                 }}
                              >
                                 <div
                                    className="h-full rounded-full transition-all duration-1000 ease-out"
                                    style={{
                                       width: `${skill.level}%`,
                                       background:
                                          "linear-gradient(to right, var(--color-primary), var(--color-accent))",
                                    }}
                                 ></div>
                              </div>
                           </div>
                        ))}
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>
   );
};

export default About;
