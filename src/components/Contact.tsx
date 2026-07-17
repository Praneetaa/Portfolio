import { Mail, Github, Linkedin, MessageSquare } from "lucide-react";

const Contact = () => {
   const socialLinks = [
      {
         icon: Mail,
         label: "Email",
         href: "mailto:your.email@example.com",
         color: "hover:text-red-400",
      },
      {
         icon: Github,
         label: "GitHub",
         href: "https://github.com/yourusername",
         color: "hover:text-gray-400",
      },
      {
         icon: Linkedin,
         label: "LinkedIn",
         href: "https://linkedin.com/in/yourprofile",
         color: "hover:text-blue-400",
      },
   ];

   return (
      <section
         id="contact"
         className="min-h-screen flex items-center bg-background py-10"
      >
         <div className="container-padding w-full">
            <div className="text-center mb-12">
               <h2 className="gradient-text mb-4">Let's Connect</h2>
               <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  I'm excited to connect with fellow developers and collaborate
                  on projects.
               </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
               {/* Contact Info */}
               <div className="space-y-6">
                  <div className="glass-card">
                     <h3 className="text-2xl font-semibold mb-4 text-primary">
                        Get in Touch
                     </h3>
                     <p className="text-muted-foreground mb-6 leading-relaxed">
                        Whether you have a project idea, want to discuss
                        technology, or just want to say hello, I'd love to hear
                        from you!
                     </p>

                     <div className="space-y-4 text-left">
                        {socialLinks.map((link, index) => (
                           <a
                              key={index}
                              href={link.href}
                              target="_blank"
                              rel="noopener noreferrer"
                              className={`flex items-center gap-4 py-1 px-4 rounded-xl bg-card/15 border border-foreground/10 hover:bg-primary/5 transition-smooth group ${link.color}`}
                           >
                              <div className="bg-background/90 p-2 rounded-full transition-smooth">
                                 <link.icon className="w-5 h-5" />
                              </div>
                              <div>
                                 <p className="font-medium text-foreground">
                                    {link.label}
                                 </p>
                                 <p className="text-sm text-muted-foreground">
                                    Connect with me on{" "}
                                    {link.label.toLowerCase()}
                                 </p>
                              </div>
                           </a>
                        ))}
                     </div>
                  </div>

                  <div className="glass-card">
                     <h4 className="text-lg font-semibold mb-4 text-foreground text-left">
                        Open to
                     </h4>
                     <ul className="space-y-3 text-muted-foreground">
                        <li className="flex items-center gap-3">
                           <div
                              className="w-2 h-2 rounded-full"
                              style={{
                                 backgroundColor: "var(--color-primary)",
                              }}
                           ></div>
                           Internship opportunities
                        </li>
                        <li className="flex items-center gap-3">
                           <div
                              className="w-2 h-2 rounded-full"
                              style={{ backgroundColor: "var(--color-accent)" }}
                           ></div>
                           Mentorship and guidance
                        </li>
                        <li className="flex items-center gap-3">
                           <div
                              className="w-2 h-2 rounded-full"
                              style={{
                                 backgroundColor: "var(--color-primary)",
                              }}
                           ></div>
                           Collaboration on projects
                        </li>
                        <li className="flex items-center gap-3">
                           <div
                              className="w-2 h-2 rounded-full"
                              style={{ backgroundColor: "var(--color-accent)" }}
                           ></div>
                           Learning opportunities
                        </li>
                     </ul>
                  </div>
               </div>

               {/* Contact Form */}
               <div className="glass-card">
                  <div className="flex items-center gap-3 mb-6">
                     <MessageSquare
                        className="w-6 h-6"
                        style={{ color: "var(--color-primary)" }}
                     />
                     <h3 className="text-2xl font-semibold text-foreground">
                        Send a Message
                     </h3>
                  </div>

                  <form
                     className="space-y-6"
                     onSubmit={(e) => e.preventDefault()}
                  >
                     <div className="space-y-4 text-left justify-start">
                        <div>
                           <label
                              htmlFor="name"
                              className="block text-sm font-medium mb-2 text-foreground"
                           >
                              Name
                           </label>
                           <input
                              id="name"
                              placeholder="Your name"
                              className="w-full px-4 py-3 rounded-xl  transition-smooth text-foreground bg-card/60 border border-foreground/10"
                           />
                        </div>

                        <div>
                           <label
                              htmlFor="email"
                              className="block text-sm font-medium mb-2 text-foreground"
                           >
                              Email
                           </label>
                           <input
                              id="email"
                              type="email"
                              placeholder="your.email@example.com"
                              className="w-full px-4 py-3 rounded-xl transition-smooth text-foreground bg-transparent"
                              style={{
                                 backgroundColor:
                                    "color-mix(in oklch, var(--color-card), transparent 40%)",
                                 border:
                                    "1px solid color-mix(in oklch, var(--color-foreground), transparent 90%)",
                              }}
                           />
                        </div>

                        <div>
                           <label
                              htmlFor="subject"
                              className="block text-sm font-medium mb-2 text-foreground"
                           >
                              Subject
                           </label>
                           <input
                              id="subject"
                              placeholder="What's this about?"
                              className="w-full px-4 py-3 rounded-xl transition-smooth text-foreground bg-transparent"
                              style={{
                                 backgroundColor:
                                    "color-mix(in oklch, var(--color-card), transparent 40%)",
                                 border:
                                    "1px solid color-mix(in oklch, var(--color-foreground), transparent 90%)",
                              }}
                           />
                        </div>

                        <div>
                           <label
                              htmlFor="message"
                              className="block text-sm font-medium mb-2 text-foreground"
                           >
                              Message
                           </label>
                           <textarea
                              id="message"
                              placeholder="Tell me about your project or just say hello!"
                              rows={5}
                              className="w-full px-4 py-3 rounded-xl transition-smooth resize-none text-foreground bg-transparent"
                              style={{
                                 backgroundColor:
                                    "color-mix(in oklch, var(--color-card), transparent 40%)",
                                 border:
                                    "1px solid color-mix(in oklch, var(--color-foreground), transparent 90%)",
                              }}
                           />
                        </div>
                     </div>

                     <button
                        type="submit"
                        className="btn btn-primary w-full py-3 text-lg glow-effect"
                     >
                        Send Message
                     </button>
                  </form>
               </div>
            </div>
         </div>
      </section>
   );
};

export default Contact;
