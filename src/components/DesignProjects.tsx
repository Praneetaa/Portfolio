import { useEffect, useState } from "react";
import { X } from "lucide-react";

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
import preciseDigitalWebsite from "../assets/designs/precise-digital-website.webp";
import shopifyWebsite from "../assets/designs/shopify-website.webp";
import spillTheTeaWebsite from "../assets/designs/spill-the-tea-website.webp";
import ceyloraLogo from "../assets/designs/ceylora-logo.webp";

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
      "Brand: Nextxus is the identity I created for PRECISE IoT Core, the IoT device monitoring platform I designed during my internship.",
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
      "Project: Spill The Tea Café is a project for my Website Design course at Siam University. I designed the entire UI/UX in Figma, and a five-person team, including me, built it.",
      "Purpose: A café website focused on menu browsing and table booking, with a working contact form and booking system built on PHP and MySQL.",
      "Visual Direction: I chose a warm, muted brown-and-cream palette to symbolize tea and coffee, paired with the Poppins font for a calm and inviting feel.",
      "Layout: I created the wireframes and final designs for every page, which set the structure the team built the site from, including the homepage's \"Customer Favorites\" showcase and its \"View Menu\" and \"Book a Table\" calls to action.",
      "Design Approach: I aimed for an inviting, cozy corner spot feeling instead of a generic food-app look, since that warmth is what actually draws café visitors in.",
   ], tools: ["Figma"] },
];

// Pinboard look: each piece is a print, tilted a little and taped to the board.
const TILTS = [-3, 2.5, -1.5, 3, -2.5, 1.5, -2, 2];
const TAPE_TILTS = [-4, 3, -2, 5, -3, 2];
const TAPE_COLORS = [
   "color-mix(in oklch, var(--color-primary), white 35%)",
   "color-mix(in oklch, var(--color-accent), white 25%)",
   "oklch(0.9 0.12 95)", // soft yellow
];

function DesignCard({
   piece,
   index,
   onSelect,
}: {
   piece: DesignPiece;
   index: number;
   onSelect: (piece: DesignPiece) => void;
}) {
   const style = {
      "--tilt": `${TILTS[index % TILTS.length]}deg`,
      "--tape-tilt": `${TAPE_TILTS[index % TAPE_TILTS.length]}deg`,
      "--tape-color": TAPE_COLORS[index % TAPE_COLORS.length],
      animationDelay: `${index * 60}ms`,
   } as React.CSSProperties;

   return (
      <div className="pin-drop mb-12 break-inside-avoid" style={style}>
         <div
            className="pin-card protect-content cursor-pointer"
            role="button"
            tabIndex={0}
            aria-label={`${piece.title}, ${piece.category}. Open details`}
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
            <span className="pin-tape" aria-hidden="true" />
            {piece.image ? (
               <img
                  src={piece.image}
                  alt={piece.title}
                  className="protected-img w-full h-auto rounded-[2px]"
                  loading="lazy"
                  draggable={false}
                  onDragStart={(e) => e.preventDefault()}
                  onContextMenu={(e) => e.preventDefault()}
               />
            ) : (
               <div className="aspect-[4/5] bg-neutral-200" />
            )}
            <p className="pin-label m-0">{piece.title}</p>
         </div>
      </div>
   );
}

/** "Brand: Ceylora is…" → { label: "Brand", text: "Ceylora is…" } */
function splitPoint(item: string) {
   const match = item.match(/^([^:]{2,30}):\s*([\s\S]*)$/);
   return match ? { label: match[1], text: match[2] } : { label: "", text: item };
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
   const points = Array.isArray(piece.description)
      ? piece.description.map(splitPoint)
      : null;

   return (
      <div
         className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8 bg-black/80 backdrop-blur-sm animate-fade-in"
         onClick={onClose}
      >
         <div
            className="relative w-full max-w-5xl max-h-[90vh] glass-card-feature p-0 overflow-hidden grid md:grid-cols-2"
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
            aria-label={piece.title}
         >
            <button
               onClick={onClose}
               aria-label="Close"
               className="absolute top-4 right-4 z-10 p-2 rounded-[var(--radius-btn)] bg-card border border-border text-foreground hover:border-primary hover:text-primary transition-smooth"
            >
               <X size={18} />
            </button>

            {/* Left — full image */}
            <div
               className="protect-content relative w-full h-64 md:h-full max-h-[90vh] overflow-hidden bg-secondary/50 flex items-center justify-center p-4"
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

            {/* Right — info, laid out like a spec sheet */}
            <div className="custom-scrollbar p-6 md:p-8 text-left overflow-y-auto max-h-[90vh]">
               <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary m-0 mb-2 pr-12">
                  {piece.category}
               </p>
               <h3 className="text-3xl font-extrabold text-foreground mt-0 mb-6 pr-12">
                  {piece.title}
                  <span className="text-primary">.</span>
               </h3>

               {points ? (
                  <dl className="m-0 border-t border-border">
                     {points.map((point, i) => (
                        <div
                           key={i}
                           className="grid sm:grid-cols-[8.5rem_1fr] gap-x-4 gap-y-1 py-3 border-b border-border"
                        >
                           <dt className="text-[11px] font-semibold uppercase tracking-[0.14em] text-muted-foreground pt-0.5">
                              {point.label}
                           </dt>
                           <dd className="m-0 text-sm text-foreground/85 leading-relaxed">
                              {point.text}
                           </dd>
                        </div>
                     ))}
                  </dl>
               ) : (
                  <p className="text-muted-foreground leading-relaxed">
                     {piece.description}
                  </p>
               )}

               {piece.tools && piece.tools.length > 0 && (
                  <div className="mt-6 flex flex-wrap items-center gap-2">
                     <span className="text-[11px] font-semibold uppercase tracking-[0.14em] text-muted-foreground mr-2">
                        Made with
                     </span>
                     {piece.tools.map((tool) => (
                        <span
                           key={tool}
                           className="px-2.5 py-1 rounded-md text-xs font-medium bg-secondary text-secondary-foreground"
                        >
                           {tool}
                        </span>
                     ))}
                  </div>
               )}

               {piece.variations && piece.variations.length > 0 && (
                  <div className="mt-6">
                     <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-muted-foreground mb-3">
                        Variations
                     </p>
                     <div className="protect-content grid grid-cols-2 gap-3">
                        {piece.variations.map((src, i) => (
                           <img
                              key={i}
                              src={src}
                              alt={`${piece.title} variation ${i + 1}`}
                              className="protected-img w-full aspect-[4/5] object-contain rounded-lg border border-border bg-secondary/50"
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

/** Four simple groups instead of a long list of categories. */
const groups: { key: string; label: string; match: (p: DesignPiece) => boolean }[] = [
   { key: "selected", label: "Selected", match: (p) => !!p.featured },
   {
      key: "branding",
      label: "Branding",
      match: (p) => ["Logo", "Business Card", "Seal"].includes(p.category),
   },
   {
      key: "print",
      label: "Print",
      match: (p) =>
         ["Flyer", "Brochure", "Banner", "Certificate", "Invitation", "Infographic"].includes(
            p.category
         ),
   },
   {
      key: "digital",
      label: "Digital",
      match: (p) => ["Website", "Social Media"].includes(p.category),
   },
];

export default function DesignProjects() {
   const [selected, setSelected] = useState<DesignPiece | null>(null);
   const [groupKey, setGroupKey] = useState("selected");

   const group = groups.find((g) => g.key === groupKey) ?? groups[0];
   const pieces = allPieces.filter(group.match);

   return (
      <div className="max-w-6xl mx-auto">
         {/* Tabs */}
         <div
            className="flex flex-wrap items-center gap-x-7 gap-y-2 border-b border-border mb-10"
            role="tablist"
            aria-label="Design categories"
         >
            {groups.map((g) => {
               const isActive = g.key === groupKey;
               const count = allPieces.filter(g.match).length;
               return (
                  <button
                     key={g.key}
                     type="button"
                     role="tab"
                     aria-selected={isActive}
                     onClick={() => setGroupKey(g.key)}
                     className={`relative -mb-px pb-3 text-sm font-semibold transition-smooth border-b-2 ${
                        isActive
                           ? "text-foreground border-primary"
                           : "text-muted-foreground border-transparent hover:text-foreground"
                     }`}
                  >
                     {g.label}
                     <span className="ml-1.5 text-xs font-medium text-muted-foreground">
                        {count}
                     </span>
                  </button>
               );
            })}
         </div>

         {/* Gallery: each piece keeps its natural shape */}
         <div className="pin-board">
            <div
               key={groupKey}
               className="columns-1 sm:columns-2 lg:columns-3 gap-8 lg:gap-10"
            >
               {pieces.map((piece, i) => (
                  <DesignCard
                     key={piece.title}
                     piece={piece}
                     index={i}
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
