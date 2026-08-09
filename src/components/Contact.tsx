import { useState } from "react";
import { MessageSquare } from "lucide-react";
import emailjs from "@emailjs/browser";
import { socialLinks } from "../data/socialLinks";
import Reveal from "./Reveal";


const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID as string;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID as string;
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY as string;

type FormStatus = "idle" | "sending" | "success" | "error";

const Contact = () => {
   const [formData, setFormData] = useState({
      name: "",
      email: "",
      subject: "",
      message: "",
   });
   const [status, setStatus] = useState<FormStatus>("idle");

   const handleChange = (
      e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
   ) => {
      const { id, value } = e.target;
      setFormData((prev) => ({ ...prev, [id]: value }));
   };

   const handleSubmit = async (e: React.FormEvent) => {
      e.preventDefault();
      setStatus("sending");

      try {
         await emailjs.send(
            SERVICE_ID,
            TEMPLATE_ID,
            {
               from_name: formData.name,
               from_email: formData.email,
               subject: formData.subject,
               message: formData.message,
               to_email: "praneetap20@gmail.com",
            },
            PUBLIC_KEY
         );
         setStatus("success");
         setFormData({ name: "", email: "", subject: "", message: "" });
      } catch (err) {
         console.error("EmailJS error:", err);
         setStatus("error");
      }
   };

   return (
      <section
         id="contact"
         className="relative py-20 overflow-hidden"
      >
         <div
            className="floating-orb w-80 h-80 bottom-0 -left-20"
            style={{
               background:
                  "color-mix(in oklch, var(--color-primary), transparent 65%)",
            }}
         />
         <div className="container-padding w-full">
            <Reveal className="text-center mb-12">
               <span className="section-kicker justify-center">Get In Touch</span>
               <h2 className="gradient-text mb-4">Let's Connect</h2>
               <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  I'm excited to connect with fellow developers and collaborate
                  on projects.
               </p>
            </Reveal>

            <Reveal
               as="div"
               delay={100}
               className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto"
            >
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
                           Designing brand identities &amp; visuals
                        </li>
                        <li className="flex items-center gap-3">
                           <div
                              className="w-2 h-2 rounded-full"
                              style={{ backgroundColor: "var(--color-accent)" }}
                           ></div>
                           Building websites &amp; web apps
                        </li>
                        <li className="flex items-center gap-3">
                           <div
                              className="w-2 h-2 rounded-full"
                              style={{
                                 backgroundColor: "var(--color-primary)",
                              }}
                           ></div>
                           Internship &amp; full-time roles
                        </li>
                        <li className="flex items-center gap-3">
                           <div
                              className="w-2 h-2 rounded-full"
                              style={{ backgroundColor: "var(--color-accent)" }}
                           ></div>
                           Freelance &amp; collaborative projects
                        </li>
                     </ul>
                  </div>
               </div>

               {/* Contact Form */}
               <div className="glass-card-feature">
                  <div className="flex items-center gap-3 mb-6">
                     <MessageSquare
                        className="w-6 h-6"
                        style={{ color: "var(--color-primary)" }}
                     />
                     <h3 className="text-2xl font-semibold text-foreground">
                        Send a Message
                     </h3>
                  </div>

                  <form className="space-y-6" onSubmit={handleSubmit}>
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
                              value={formData.name}
                              onChange={handleChange}
                              required
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
                              value={formData.email}
                              onChange={handleChange}
                              required
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
                              value={formData.subject}
                              onChange={handleChange}
                              required
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
                              value={formData.message}
                              onChange={handleChange}
                              required
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
                        disabled={status === "sending"}
                        className="btn btn-primary w-full py-3 text-lg glow-effect disabled:opacity-60 disabled:cursor-not-allowed"
                     >
                        {status === "sending" ? "Sending..." : "Send Message"}
                     </button>

                     {status === "success" && (
                        <p className="text-sm text-center text-primary">
                           Thanks for reaching out! Your message has been sent.
                        </p>
                     )}
                     {status === "error" && (
                        <p className="text-sm text-center text-red-400">
                           Something went wrong. Please try again or email me
                           directly.
                        </p>
                     )}
                  </form>
               </div>
            </Reveal>
         </div>
      </section>
   );
};

export default Contact;