import Reveal from "./Reveal";

interface SectionHeaderProps {
   /** Section number shown in the rule, e.g. "04". */
   number: string;
   /** Short uppercase label at the end of the rule, e.g. "Services". */
   label: string;
   title: string;
   subtitle?: string;
   /** Optional handwritten note shown beside the heading. */
   note?: string;
   className?: string;
   /** Set false when the header is already inside a Reveal. */
   reveal?: boolean;
}

/** Small hand-drawn curved arrow that pairs with handwritten notes. */
export function HandArrow({ className = "" }: { className?: string }) {
   return (
      <svg
         width="34"
         height="26"
         viewBox="0 0 34 26"
         fill="none"
         stroke="currentColor"
         strokeWidth="2"
         strokeLinecap="round"
         strokeLinejoin="round"
         className={className}
         aria-hidden="true"
      >
         <path d="M32 3C22 2 10 6 5 20" />
         <path d="M2 14l3 7 7-3" />
      </svg>
   );
}

const SectionHeader = ({
   number,
   label,
   title,
   subtitle,
   note,
   className = "mb-14 max-w-6xl mx-auto",
   reveal = true,
}: SectionHeaderProps) => {
   const content = (
      <div className="text-left">
         <div className="section-rule">
            <span className="section-rule-num">{number}</span>
            <span className="section-rule-label">{label}</span>
         </div>
         <div className="flex flex-wrap items-end gap-x-6 gap-y-2">
            <h2 className="text-foreground m-0">
               {title}
               <span className="text-primary">.</span>
            </h2>
            {note && (
               <span className="hand-note mb-2">
                  <HandArrow className="shrink-0" />
                  {note}
               </span>
            )}
         </div>
         {subtitle && (
            <p className="text-muted-foreground max-w-xl mt-4 mb-0">
               {subtitle}
            </p>
         )}
      </div>
   );

   return reveal ? (
      <Reveal className={className}>{content}</Reveal>
   ) : (
      <div className={className}>{content}</div>
   );
};

export default SectionHeader;
