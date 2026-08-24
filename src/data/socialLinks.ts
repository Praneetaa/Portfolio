import { Mail, Github, Linkedin } from "lucide-react";

export const contactEmail = "praneetap20@gmail.com";

export const socialLinks = [
   {
      icon: Mail,
      label: "Email",
      href: `mailto:${contactEmail}`,
      detail: contactEmail,
      color: "hover:text-red-400",
   },
   {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/Praneetaa",
      detail: "github.com/Praneetaa",
      color: "hover:text-gray-400",
   },
   {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/praneeta-pradhan-708515393/",
      detail: "linkedin.com/in/praneeta-pradhan",
      color: "hover:text-blue-400",
   },
];
