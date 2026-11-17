import { useState } from "react";
import { MessageSquare } from "lucide-react";
import emailjs from "@emailjs/browser";
import { socialLinks, contactEmail } from "../data/socialLinks";
import Reveal from "./Reveal";
import SectionHeader from "./SectionHeader";

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
   // Spam protection: bots fill in every field (including the hidden one)
   // and submit instantly; real visitors do neither.
   const [honeypot, setHoneypot] = useState("");
   const [loadedAt] = useState(() => Date.now());

   const handleChange = (
      e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
   ) => {
      const { id, value } = e.target;
      setFormData((prev) => ({ ...prev, [id]: value }));
   };

   const handleSubmit = async (e: React.FormEvent) => {
      e.preventDefault();

      // Looks like a bot: pretend it worked, but don't send anything.
      if (honeypot || Date.now() - loadedAt < 3000) {
         setStatus("success");
         setFormData({ name: "", email: "", subject: "", message: "" });
         return;
      }

      setStatus("sending");

      try {
         await emailjs.send(
            SERVICE_ID,
            TEMPLATE_ID,
            {
               from_name: formData.name,
               name: formData.name,
               from_email: formData.email,
               email: formData.email,
               user_email: formData.email,
               reply_to: formData.email,
               subject: formData.subject,
               title: formData.subject,
               message: `${formData.message}\n\n---\nFrom: ${formData.name} <${formData.email}>`,
               to_email: contactEmail,
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
      <section id="contact" className="relative py-20 overflow-hidden">
         <div className="container-padding w-full">
            <SectionHeader number="09" label="Contact" title="Let's work together" subtitle="Have a project in mind, a role to fill, or just want to say hello? I'd love to hear from you." note="say hi!" />

            <Reveal
               as="div"
               delay={100}
               className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto"
            >
               {/* Contact Info */}
               <div className="space-y-6">
                  <div className="glass-card text-left">
                     <h3 className="text-2xl font-semibold mt-0 mb-5 text-foreground">
                        Find me online
                     </h3>

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
                                    {link.detail}
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
                     {/* Hidden trap field for bots; real visitors never see it */}
                     <div
                        aria-hidden="true"
                        style={{ position: "absolute", left: "-10000px", width: 1, height: 1, overflow: "hidden" }}
                     >
                        <label htmlFor="website">Website</label>
                        <input
                           id="website"
                           name="website"
                           type="text"
                           tabIndex={-1}
                           autoComplete="off"
                           value={honeypot}
                           onChange={(e) => setHoneypot(e.target.value)}
                        />
                     </div>
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