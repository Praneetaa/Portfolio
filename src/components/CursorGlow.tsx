import { useEffect, useRef } from "react";
const CursorGlow = () => {
   const glowRef = useRef<HTMLDivElement>(null);

   useEffect(() => {
      let frame: number;
      let x = window.innerWidth / 2;
      let y = window.innerHeight / 2;

      const handleMove = (e: MouseEvent) => {
         x = e.clientX;
         y = e.clientY;
         glowRef.current?.classList.add("is-active");
         cancelAnimationFrame(frame);
         frame = requestAnimationFrame(() => {
            glowRef.current?.style.setProperty("--gx", `${x}px`);
            glowRef.current?.style.setProperty("--gy", `${y}px`);
         });
      };

      // Fires when the pointer leaves the browser viewport
      const handleDocMouseLeave = (e: MouseEvent) => {
         if (!e.relatedTarget) {
            glowRef.current?.classList.remove("is-active");
         }
      };

      window.addEventListener("mousemove", handleMove);
      document.addEventListener("mouseleave", handleDocMouseLeave);

      return () => {
         window.removeEventListener("mousemove", handleMove);
         document.removeEventListener("mouseleave", handleDocMouseLeave);
         cancelAnimationFrame(frame);
      };
   }, []);

   return <div ref={glowRef} className="cursor-glow" aria-hidden="true" />;
};

export default CursorGlow;