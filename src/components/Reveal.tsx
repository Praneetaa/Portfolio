import { useEffect, useRef, useState } from "react";
import type { ReactNode, ElementType } from "react";

interface RevealProps {
   children: ReactNode;
   /** Delay in ms before the reveal animation starts, for staggering groups of items. */
   delay?: number;
   /** Element/tag to render as. Defaults to "div". */
   as?: ElementType;
   className?: string;
}

/**
 * Wraps content and fades/slides it into view the first time it scrolls
 * into the viewport. Pairs with the `.reveal` / `.reveal.is-visible`
 * classes defined in index.css.
 */
const Reveal = ({ children, delay = 0, as: Tag = "div", className = "" }: RevealProps) => {
   const ref = useRef<HTMLElement | null>(null);
   const [isVisible, setIsVisible] = useState(false);

   useEffect(() => {
      const node = ref.current;
      if (!node) return;

      const observer = new IntersectionObserver(
         ([entry]) => {
            if (entry.isIntersecting) {
               setIsVisible(true);
               observer.disconnect();
            }
         },
         { threshold: 0.15 }
      );

      observer.observe(node);
      return () => observer.disconnect();
   }, []);

   return (
      <Tag
         ref={ref}
         className={`reveal ${isVisible ? "is-visible" : ""} ${className}`}
         style={{ transitionDelay: isVisible ? `${delay}ms` : "0ms" }}
      >
         {children}
      </Tag>
   );
};

export default Reveal;