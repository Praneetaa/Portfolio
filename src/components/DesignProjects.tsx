import { useEffect, useState } from "react";
import {
   PenTool,
   FileText,
   Layout,
   BarChart3,
   CreditCard,
   Monitor,
   Share2,
   Award,
   Mail,
   Flag,
   BadgeCheck,
   Search,
   X,
   type LucideIcon,
} from "lucide-react";

import ceyloraFlyer from "../assets/designs/ceylora-flyer.webp";
import ceyloraBizCard from "../assets/designs/ceylora-business-card.webp";
import denovaBizCard from "../assets/designs/Denova-business-card.webp";
import kaiFloLogo from "../assets/designs/kai-flo-logo.webp";
import lcicBizCard from "../assets/designs/lcic-business-card.webp";
import lcicCertificate from "../assets/designs/lcic-certificate.webp";
import lcicInfograph from "../assets/designs/lcic-infograph.webp";
import lcicInvitation from "../assets/designs/lcic-invitation-card.webp";
import lcicRollupBanner from "../assets/designs/lcic-rollup-banner.webp";
import lcicSocialPost from "../assets/designs/lcic-social-media-post.webp";
import lcicStamp from "../assets/designs/lcic-stamp-of-approval.webp";
import lcicBrochure from "../assets/designs/lcic-trifold-brochure.webp";
import lcicWebsite from "../assets/designs/lcic-website.webp";
import nextxusLogo from "../assets/designs/nextxus-logo.webp";
import photographyClubLogo from "../assets/designs/photography-club-logo.webp";
import preciseDigitalFlyer from "../assets/designs/precise-digital-flyer.webp";
import preciseDigitalWebsite from "../assets/designs/precise-digital-webiste.webp";
import shopifyWebsite from "../assets/designs/shopify-website.webp";
import spillTheTeaWebsite from "../assets/designs/spill-the-tea-website.webp";
import ceyloraLogo from "../assets/designs/ceylora-logo.webp";

interface DesignCategory {
   icon: LucideIcon;
   /** Matches `DesignPiece.category` so the filter tabs can select by it. */
   key: string;
   title: string;
   description: string | string[];
}

interface DesignPiece {
   category: string;
   title: string;
   image?: string;
   /** Short blurb shown in the popup — the brief + a design decision worth calling out. */
   description: string | string[];
   /**
    * Optional close-up/flat version to show in the popup instead of the
    * mockup shown in the grid. Falls back to `image` when not provided.
    */
   detailImage?: string;
   /** Optional set of alternate versions/explorations for this piece. */
   variations?: string[];
   /** Tools/software used to create this piece, shown in the popup. */
   tools?: string[];
   /** Shown in the "Featured" filter option — pick a handful across categories. */
   featured?: boolean;
}

const categories: DesignCategory[] = [
   {
      icon: PenTool,
      key: "Logo",
      title: "Logo Design",
      description:
         "Distinct, memorable marks that capture a brand's identity at a glance.",
   },
   {
      icon: FileText,
      key: "Brochure",
      title: "Brochure Design",
      description:
         "Multi-panel layouts that tell a brand's story with clarity and flow.",
   },
   {
      icon: Layout,
      key: "Flyer",
      title: "Flyer Design",
      description: "Bold, eye-catching flyers built to grab attention fast.",
   },
   {
      icon: BarChart3,
      key: "Infographic",
      title: "Infographics",
      description:
         "Turning complex data into visuals that are easy to read and share.",
   },
   {
      icon: CreditCard,
      key: "Business Card",
      title: "Business Cards",
      description:
         "Compact, polished designs that make a strong first impression.",
   },
   {
      icon: Monitor,
      key: "Website",
      title: "Website & UI Mockups",
      description:
         "Clean, responsive page designs mocked up across desktop, tablet, and mobile.",
   },
   {
      icon: Share2,
      key: "Social Media",
      title: "Social Media Posts",
      description:
         "Scroll-stopping graphics sized and styled for social feeds.",
   },
   {
      icon: Award,
      key: "Certificate",
      title: "Certificates",
      description:
         "Formal certificates of appreciation and completion, ready to print.",
   },
   {
      icon: Mail,
      key: "Invitation",
      title: "Invitations",
      description:
         "Event invitations and posters that set the tone before people even arrive.",
   },
   {
      icon: Flag,
      key: "Banner",
      title: "Banners",
      description:
         "Roll-up and display banners built for events and exhibitions.",
   },
   {
      icon: BadgeCheck,
      key: "Seal",
      title: "Badges & Seals",
      description:
         "Approval seals and badge marks used to signal trust and credibility.",
   },
];

/**
 * Real design work. Add new pieces here as more come in —
 * just import the image above and add an entry to either column.
 */
const columnA: DesignPiece[] = [
   { category: "Flyer", title: "Ceylora Flyer", image: ceyloraFlyer, description: [
      "Brand: Ceylora is a startup fashion brand launching its first designer eyewear collection.",
      "Purpose: Grand launch and promotional flyer designed to introduce the collection.",
      "Visual Direction: Luxury-focused design aligned with Ceylora’s cream-and-gold brand identity.",
      "Layout: Structured product grid to create a clean, curated presentation across different eyewear styles.",
      "Design Approach: Balanced promotional messaging and product visuals without unnecessary distractions, maintaining a premium fashion aesthetic."
   ], tools: ["Canva"], featured: true },
   { category: "Business Card", title: "Denova Business Card", image: denovaBizCard, description: [
    "Brand: DeNova Technologies delivers machinery and software that improve manufacturing efficiency and quality for apparel and industrial manufacturers across Sri Lanka, Bangladesh, and New Zealand.",
    "Purpose: Professional business card designed to present contact information clearly while reinforcing the brand identity.",
    "Visual Direction: Clean, modern design using Denova’s navy and white brand palette.",
    "Layout: Divided into a clear identity section and an organized contact-information section for easy scanning.",
    "Design Approach: Balanced multiple contact details without making the card feel crowded, incorporating the client's existing geometric \"D\" logo as a subtle brand signature."
  ], tools: ["Figma"] },
   { category: "Business Card", title: "LCIC Business Card", image: lcicBizCard, description: [
    "Brand: Language Center International College, known as LCIC, is an educational language institution at Siam University.",
    "Purpose: Business card designed to present contact information while representing LCIC in a professional way.",
    "Visual Direction: Clean and professional design using LCIC's red, blue, and gold brand colors.",
    "Layout: Organized to keep the contact details clear and easy to read while giving the brand a strong presence.",
    "Design Approach: Focused on making the card readable and distinctive, with the bold red element and LCIC's existing crest helping the card stand out while keeping the overall design professional."
  ], tools: ["Canva"], featured: true },
   { category: "Business Card", title: "Ceylora Business Card", image: ceyloraBizCard, description: [
      "Brand: Ceylora is a startup fashion brand.",
      "Purpose: Business card for the co-founder, for in-person client meetings.",
      "Visual Direction: Elegant gold-on-white design matching the brand's cream-and-gold identity, keeping every touchpoint consistent.",
      "Layout: Front dedicated entirely to the logo and tagline for a strong first impression; back holds the name, title, contact details, and a QR code to the store.",
      "Design Approach: Used a diagonal gold sweep on the back to echo the luxury feel of the front without repeating the exact same layout twice.",
   ], tools: ["Figma"] },
   { category: "Certificate", title: "LCIC Certificate", image: lcicCertificate, description: [
      "Brand: Language Center International College, known as LCIC, is an educational language institution at Siam University.",
      "Purpose: Certificate of appreciation for participants of the \"SU Talk: Gender Equality\" event.",
      "Visual Direction: Formal, ceremonial design using a dark red theatre-stage aesthetic with gold accents so it feels credible and print-ready.",
      "Layout: Centered certificate structure with LCIC branding at the top, a spotlighted microphone motif, and signature lines for authenticity.",
      "Design Approach: Focused on making the certificate feel like a genuine keepsake rather than a generic template, tying the stage imagery back to the actual event.",
   ], tools: ["Canva"] },
   { category: "Infographic", title: "LCIC Infographic", image: lcicInfograph, description: [
      "Brand: Language Center International College, known as LCIC, is an educational language institution at Siam University.",
      "Purpose: Course-placement infographic helping students see which English course track applies to them based on their test scores.",
      "Visual Direction: Bright, color-coded, icon-led design to make a data-heavy topic easy to scan.",
      "Layout: Three parallel color-coded columns, Foundation Builder, Standard Path, and Fast Track, let a student follow one path from top to bottom.",
      "Design Approach: Prioritized clarity over decoration, turning a confusing set of academic rules into a simple visual decision tree.",
   ], tools: ["Canva"], featured: true },
   { category: "Invitation", title: "LCIC Invitation Card", image: lcicInvitation, description: [
      "Brand: Language Center International College, known as LCIC, is an educational language institution at Siam University.",
      "Purpose: Event invitation for the \"SU Talk: Gender Equality\" talk, inviting students to register and attend.",
      "Visual Direction: Dramatic, theatrical red-and-gold design so it feels credible and print-ready.",
      "Layout: Centered headline hierarchy with event details (date, time, location) and a QR code for registration placed prominently.",
      "Design Approach: Included the UN SDG 5 badge to connect the talk to a larger cause.",
   ], tools: ["Canva"] },
   { category: "Banner", title: "LCIC Roll-Up Banner", image: lcicRollupBanner, description: [
      "Brand: Language Center International College, known as LCIC, is an educational language institution at Siam University.",
      "Purpose: Exhibition/event roll-up banner promoting LCIC with the tagline \"Bridging Language, Building Confidence.\"",
      "Visual Direction: Photo-led design using real campus photography in a bold diamond-shaped collage.",
      "Layout: Photo collage at the top, tagline in the middle, and a QR code with location details at the bottom.",
      "Design Approach: Built to be read at a glance from a distance, favoring one strong photo-and-typography combination over dense text.",
   ], tools: ["Canva"] },
   { category: "Social Media", title: "LCIC Social Media Post", image: lcicSocialPost, description: [
      "Brand: Language Center International College, known as LCIC, is an educational language institution at Siam University.",
      "Purpose: Announcement post for an upcoming SI Test (placement exam), sharing the date, time, room, and rules.",
      "Visual Direction: Bold, high-contrast red-and-blue design meant to stop the scroll while still reading as an official notice.",
      "Layout: A split layout puts key logistics in labeled bars on one side, with a real photo of students in an exam hall on the other.",
      "Design Approach: Balanced urgency (bold headline, red CTA) with clarity (clearly labeled date/time/room) so it works as both a social post and a functional notice.",
   ], tools: ["Canva"] },
   { category: "Seal", title: "LCIC Stamp of Approval", image: lcicStamp, description: [
      "Brand: Language Center International College, known as LCIC, is an educational language institution at Siam University.",
      "Purpose: A reusable trust mark stamped onto other LCIC materials, such as certificates, brochures, and banners, to signal official approval.",
      "Visual Direction: Monochrome badge design using a laurel wreath and crest, similar to a formal seal.",
      "Layout: Circular badge format with a centered crest and wraparound text.",
      "Design Approach: Kept to a single color so it never clashes with whatever background or brand color it ends up stamped on.",
   ], tools: ["Canva"] },
];

const columnB: DesignPiece[] = [
   { category: "Brochure", title: "LCIC Trifold Brochure", image: lcicBrochure, description: [
      "Brand: Language Center International College, known as LCIC, is an educational language institution at Siam University.",
      "Purpose: Full recruitment brochure introducing the language center, its mission, and its courses.",
      "Visual Direction: Consistent with LCIC's red, blue, and gold wave brand system, using real campus photography and a quote-led cover.",
      "Layout: A six-panel trifold with the cover, contact panel, and QR code on the front, and the About Us section, mission, and course tables on the inside.",
      "Design Approach: Focused on information hierarchy, splitting a large amount of course information into three clear categories instead of one long list.",
   ], tools: ["Canva"], featured: true },
   { category: "Website", title: "LCIC Website", image: lcicWebsite, description: [
      "Brand: Language Center International College, known as LCIC, is an educational language institution at Siam University.",
      "Purpose: Official website for prospective students to learn about courses and apply.",
      "Visual Direction: Professional, credibility-focused design leading with LCIC's actual global rankings.",
      "Layout: Full-width hero banner, ranking badges beneath it, responsive across desktop, tablet, and mobile.",
      "Design Approach: Built in WordPress as a real, editable site rather than a static mockup, prioritizing trust signals above the fold.",
   ], tools: ["WordPress"], featured: true },
   { category: "Logo", title: "Nextxus", image: nextxusLogo, description: [
      "Brand: Nextxus is the identity I created for PRECISE IoT Core, my IoT device monitoring platform.",
      "Purpose: A primary logo mark and wordmark representing the platform's core idea, which is connected devices reporting into one central hub.",
      "Visual Direction: Modern, tech-forward mark built around orbit and connectivity, mirroring how the platform visualizes a device network.",
      "Layout: Four nodes orbiting a central hub, paired with a bold blue wordmark below.",
      "Design Approach: The orbit paths cross to form a subtle \"X,\" while the central hub reflects the platform's role as the single point where every connected device is managed.",
   ], tools: ["Figma"], featured: true },
   { category: "Logo", title: "Photography Club", image: photographyClubLogo, description: [
      "Brand: SUIC Photography is the university's photography club.",
      "Purpose: Club crest/logo representing the group on campus and on social media.",
      "Visual Direction: Formal, badge-style design similar to an academic seal, matching the club's institutional context.",
      "Layout: Circular badge with the department name arced around the top and a camera icon as the central focal point.",
      "Design Approach: Designed to stay legible and recognisable even at small icon or profile-picture size.",
   ], tools: ["Canva"] },
   { category: "Flyer", title: "Precise Digital Flyer", image: preciseDigitalFlyer, description: [
      "Brand: Precise Digital Economy Co., Ltd. is the Industry 4.0 technology company I interned with as a UI/UX Designer.",
      "Purpose: Marketing flyer for their exhibition at the Fortinet OT Security Summit 2026, explaining their OT (Operational Technology) network security services to attendees.",
      "Visual Direction: Professional, tech-focused design using a blue gradient background with network and security iconography.",
      "Layout: A three-block structure covering Key Benefits, Current Challenges, and Ideal For instead of one long paragraph, with a bold red \"SECURITY\" as the visual anchor.",
      "Design Approach: Built to be scannable for a busy decision-maker, prioritizing structure over dense technical copy.",
   ], tools: ["Canva", "Figma"] },
   { category: "Logo", title: "Ceylora", image: ceyloraLogo, description: [
      "Brand: Ceylora is a startup fashion brand.",
      "Purpose: Primary logo mark, usable standalone at icon size (favicon, social avatar).",
      "Visual Direction: Elegant, gold-on-cream luxury aesthetic matching the brand's eyewear collection.",
      "Layout: A cursive \"L\" nested inside a blockier \"C\" outline, paired with the full \"CeYlOrA\" wordmark and tagline.",
      "Design Approach: I designed it for two read distances, so it stays legible as a full mark up close and still recognisable as one letterform from far away.",
   ], tools: ["Figma"] },
   { category: "Logo", title: "Kai Flo", image: kaiFloLogo, description: [
      "Brand: Kai Flo is a digital workforce operations platform that helps businesses manage employee attendance, daily tasks, leave requests, and files in one system.",
      "Purpose: Primary logo mark and wordmark for brand identity.",
      "Visual Direction: Modern, minimal line-art style using a single teal color for a clean, contemporary feel.",
      "Layout: A continuous stack icon representing the continuous flow of data within one system, paired with a simple sans-serif wordmark below.",
      "Design Approach: I kept it to one color and one continuous line weight so the mark stays flexible, working equally well in single-color print or as a small app icon.",
   ], tools: ["Canva"] },
   { category: "Website", title: "PRECISE IoT Core", image: preciseDigitalWebsite, description: [
      "Project: PRECISE IoT Core, an IoT device monitoring platform I designed as UI/UX Designer Intern at Precise Digital Economy Co., Ltd. for an Industry 4.0 Energy Management System.",
      "Purpose: Manage projects, organize dashboards, and build them out with a drag-and-drop widget canvas.",
      "Visual Direction: Clean, functional enterprise design prioritizing legibility and real-time readability.",
      "Layout: Project Portal → Dashboard Overview → Widget Canvas, responsive across desktop, tablet, and mobile.",
      "Design Approach: A reusable widget system (17 widgets, 7 categories) with color reserved for real signals like alarm severity and device status.",
   ], tools: ["Figma"] },
   { category: "Website", title: "Shopify Website", image: shopifyWebsite, description: [
      "Brand: Sticker Heaven is an e-commerce brand selling decorative stickers.",
      "Purpose: Online storefront built to sell stickers and decor products to a young, playful audience.",
      "Visual Direction: Bright, colorful design led by product photography, kept simple so the products stay the focus.",
      "Layout: Hero banner, \"Limited Edition\" product grid, About Us section, and a Collections showcase.",
      "Design Approach: Built as an actual Shopify store, using a bright teal header against mostly white space so busy product photography doesn't compete with the UI.",
   ], tools: ["Shopify"] },
   { category: "Website", title: "Spill The Tea", image: spillTheTeaWebsite, description: [
      "Project: Spill The Tea Café is a group project I built for my Website Design course at Siam University with a five-person team, where I handled the wireframes, the theme and color selection, and the About page.",
      "Purpose: A café website focused on menu browsing and table booking, with a working contact form and booking system built on PHP and MySQL.",
      "Visual Direction: I chose a warm, muted brown-and-cream palette to symbolize tea and coffee, paired with the Poppins font for a calm and inviting feel.",
      "Layout: I created the wireframes for every page, which set the structure the rest of the team built the site from, including the homepage's \"Customer Favorites\" showcase and its \"View Menu\" and \"Book a Table\" calls to action.",
      "Design Approach: I aimed for an inviting, cozy corner spot feeling instead of a generic food-app look, since that warmth is what actually draws café visitors in.",
   ], tools: ["Figma"] },
];

function DesignCard({
   piece,
   onSelect,
}: {
   piece: DesignPiece;
   onSelect: (piece: DesignPiece) => void;
}) {
   return (
      <div
         className="protect-content glass-card p-0 overflow-hidden hover:-translate-y-1 hover:glow-effect transition-smooth group cursor-pointer"
         role="button"
         tabIndex={0}
         draggable={false}
         onDragStart={(e) => e.preventDefault()}
         onContextMenu={(e) => e.preventDefault()}
         onClick={() => onSelect(piece)}
         onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
               e.preventDefault();
               onSelect(piece);
            }
         }}
      >
         <div className="relative aspect-[4/5] overflow-hidden bg-black/20">
            {piece.image ? (
               <img
                  src={piece.image}
                  alt={piece.title}
                  className="protected-img w-full h-full object-contain object-center transition-transform duration-500 ease-out group-hover:scale-110"
                  loading="lazy"
                  draggable={false}
                  onDragStart={(e) => e.preventDefault()}
                  onContextMenu={(e) => e.preventDefault()}
               />
            ) : (
               <div className="w-full h-full bg-secondary" />
            )}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-smooth" />
            <span className="absolute bottom-2 left-2 text-white/90 font-semibold text-xs px-3 py-1 rounded-full bg-black/40 backdrop-blur-sm">
               {piece.category}
            </span>
         </div>
      </div>
   );
}

function DesignModal({
   piece,
   onClose,
}: {
   piece: DesignPiece;
   onClose: () => void;
}) {
   useEffect(() => {
      const onKeyDown = (e: KeyboardEvent) => {
         if (e.key === "Escape") onClose();
      };
      document.addEventListener("keydown", onKeyDown);
      document.body.style.overflow = "hidden";
      return () => {
         document.removeEventListener("keydown", onKeyDown);
         document.body.style.overflow = "";
      };
   }, [onClose]);

   const detailSrc = piece.detailImage || piece.image;

   return (
      <div
         className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8 bg-black/70 backdrop-blur-sm animate-fade-in"
         onClick={onClose}
      >
         <div
            className="relative w-full max-w-5xl max-h-[90vh] glass-card-feature p-0 overflow-hidden grid md:grid-cols-2"
            onClick={(e) => e.stopPropagation()}
         >
            <button
               onClick={onClose}
               aria-label="Close"
               className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/50 hover:bg-black/70 transition-smooth"
            >
               <X size={20} className="text-white" />
            </button>

            {/* Left — full image */}
            <div
               className="protect-content relative w-full h-64 md:h-full max-h-[90vh] overflow-hidden bg-black/20 flex items-center justify-center"
               draggable={false}
               onDragStart={(e) => e.preventDefault()}
               onContextMenu={(e) => e.preventDefault()}
            >
               {detailSrc ? (
                  <img
                     src={detailSrc}
                     alt={piece.title}
                     className="protected-img w-full h-full object-contain"
                     draggable={false}
                     onDragStart={(e) => e.preventDefault()}
                     onContextMenu={(e) => e.preventDefault()}
                  />
               ) : (
                  <div className="w-full h-full bg-secondary" />
               )}
            </div>

            {/* Right — info */}
            <div className="custom-scrollbar p-6 md:p-8 text-left overflow-y-auto max-h-[90vh]">
               <span className="inline-block px-3 py-1 mb-3 text-xs font-semibold rounded-full bg-accent/20 text-accent border border-accent/30">
                  {piece.category}
               </span>
               <h3 className="text-2xl font-bold text-foreground mb-3">
                  {piece.title}
               </h3>
               {Array.isArray(piece.description) ? (
  <ul className="text-muted-foreground leading-relaxed list-disc pl-5 space-y-2">
    {piece.description.map((item, index) => (
      <li key={index}>{item}</li>
    ))}
  </ul>
) : (
  <p className="text-muted-foreground leading-relaxed">
    {piece.description}
  </p>
)}

               {piece.tools && piece.tools.length > 0 && (
                  <div className="mt-6">
                     <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-3">
                        Tools Used
                     </p>
                     <div className="flex flex-wrap gap-2">
                        {piece.tools.map((tool) => (
                           <span
                              key={tool}
                              className="px-3 py-1.5 rounded-full text-xs font-medium text-foreground"
                              style={{ backgroundColor: "var(--color-secondary)" }}
                           >
                              {tool}
                           </span>
                        ))}
                     </div>
                  </div>
               )}

               {piece.variations && piece.variations.length > 0 && (
                  <div className="mt-6">
                     <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-3">
                        Variations
                     </p>
                     <div className="protect-content grid grid-cols-2 gap-3">
                        {piece.variations.map((src, i) => (
                           <img
                              key={i}
                              src={src}
                              alt={`${piece.title} variation ${i + 1}`}
                              className="protected-img w-full aspect-[4/5] object-contain rounded-lg border border-foreground/10"
                              draggable={false}
                              onDragStart={(e) => e.preventDefault()}
                              onContextMenu={(e) => e.preventDefault()}
                           />
                        ))}
                     </div>
                  </div>
               )}
            </div>
         </div>
      </div>
   );
}

const allPieces: DesignPiece[] = [...columnA, ...columnB];
const featuredPieces = allPieces.filter((piece) => piece.featured);

export default function DesignProjects() {
   const loopA = [...columnA, ...columnA];
   const loopB = [...columnB, ...columnB];
   const [selected, setSelected] = useState<DesignPiece | null>(null);
   const [activeCategory, setActiveCategory] = useState<string | null>(null);
   const [categorySearch, setCategorySearch] = useState("");
   const [isFilterOpen, setIsFilterOpen] = useState(false);

   const filteredPieces = activeCategory
      ? allPieces.filter((piece) => piece.category === activeCategory)
      : featuredPieces;

   const activeLabel = activeCategory
      ? categories.find((c) => c.key === activeCategory)?.title ?? "Featured"
      : "Featured";

   const showFeaturedOption = "featured".includes(categorySearch.toLowerCase());
   const visibleCategories = categories.filter((category) =>
      category.title.toLowerCase().includes(categorySearch.toLowerCase())
   );

   function selectCategory(key: string | null) {
      setActiveCategory(key);
      setCategorySearch("");
      setIsFilterOpen(false);
   }

   return (
      <div className="grid md:grid-cols-[1.1fr_1fr] gap-8 md:gap-10 max-w-6xl mx-auto items-start">
         {/* Left — two columns of designs, scrolling in opposite directions.
             Hidden entirely on phone (purely decorative, no room to breathe there);
             the filter/search panel becomes the whole view on mobile. */}
         <div className="hidden sm:grid sm:grid-cols-2 gap-4 md:gap-6">
            <div className="marquee-col h-[560px] md:h-[700px]">
               <div
                  className="marquee-track dir-up"
                  style={{ animationDuration: "54s" }}
               >
                  {loopA.map((piece, i) => (
                     <DesignCard
                        key={`a-${piece.title}-${i}`}
                        piece={piece}
                        onSelect={setSelected}
                     />
                  ))}
               </div>
            </div>
            <div className="marquee-col h-[560px] md:h-[700px]">
               <div
                  className="marquee-track dir-down"
                  style={{ animationDuration: "54s" }}
               >
                  {loopB.map((piece, i) => (
                     <DesignCard
                        key={`b-${piece.title}-${i}`}
                        piece={piece}
                        onSelect={setSelected}
                     />
                  ))}
               </div>
            </div>
         </div>

         {/* Right — filterable browser: type to search categories, pick one to see every piece in it */}
         <div className="glass-card md:sticky md:top-28 self-start p-5 md:p-7">
            <div className="relative mb-5">
               <div className="flex items-center gap-2 bg-card/60 border border-foreground/10 rounded-lg px-3 py-2 focus-within:border-primary/50 transition-smooth">
                  <Search size={16} className="text-muted-foreground shrink-0" />
                  <input
                     type="text"
                     value={isFilterOpen ? categorySearch : activeLabel}
                     onFocus={() => {
                        setIsFilterOpen(true);
                        setCategorySearch("");
                     }}
                     onChange={(e) => setCategorySearch(e.target.value)}
                     onBlur={() =>
                        window.setTimeout(() => setIsFilterOpen(false), 150)
                     }
                     placeholder="Search categories..."
                     className="w-full bg-transparent text-sm text-foreground placeholder:text-muted-foreground/60 focus:outline-none"
                  />
               </div>

               {isFilterOpen && (
                  <div className="custom-scrollbar absolute z-10 mt-2 w-full max-h-64 overflow-y-auto glass-card p-2 space-y-1">
                     {showFeaturedOption && (
                        <button
                           type="button"
                           onMouseDown={(e) => e.preventDefault()}
                           onClick={() => selectCategory(null)}
                           className={`w-full flex items-center justify-between px-3 py-2 rounded-lg text-sm text-left transition-smooth ${
                              activeCategory === null
                                 ? "bg-primary text-primary-foreground"
                                 : "hover:bg-card/80 text-foreground"
                           }`}
                        >
                           <span>Featured</span>
                           <span className="text-xs opacity-70">
                              {featuredPieces.length}
                           </span>
                        </button>
                     )}
                     {visibleCategories.map((category) => {
                        const count = allPieces.filter(
                           (piece) => piece.category === category.key
                        ).length;
                        if (count === 0) return null;
                        const Icon = category.icon;
                        return (
                           <button
                              type="button"
                              key={category.key}
                              onMouseDown={(e) => e.preventDefault()}
                              onClick={() => selectCategory(category.key)}
                              className={`w-full flex items-center gap-2 px-3 py-2 rounded-lg text-sm text-left transition-smooth ${
                                 activeCategory === category.key
                                    ? "bg-primary text-primary-foreground"
                                    : "hover:bg-card/80 text-foreground"
                              }`}
                           >
                              <Icon size={14} className="shrink-0" />
                              <span className="flex-1">{category.title}</span>
                              <span className="text-xs opacity-70">{count}</span>
                           </button>
                        );
                     })}
                     {!showFeaturedOption && visibleCategories.length === 0 && (
                        <p className="px-3 py-2 text-sm text-muted-foreground">
                           No categories match "{categorySearch}"
                        </p>
                     )}
                  </div>
               )}
            </div>

            <div className="custom-scrollbar grid grid-cols-1 sm:grid-cols-2 gap-5 max-h-[560px] md:max-h-[660px] overflow-y-auto pr-1">
               {filteredPieces.map((piece, i) => (
                  <DesignCard
                     key={`filter-${piece.title}-${i}`}
                     piece={piece}
                     onSelect={setSelected}
                  />
               ))}
            </div>
         </div>

         {selected && (
            <DesignModal piece={selected} onClose={() => setSelected(null)} />
         )}
      </div>
   );
}