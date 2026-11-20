import { useState, type ImgHTMLAttributes } from "react";
import { ImageOff } from "lucide-react";

type LazyImageProps = ImgHTMLAttributes<HTMLImageElement> & {
   src?: string;
   /** Classes for the wrapper. Use "w-full h-full" when the parent has a fixed size. */
   wrapperClassName?: string;
   /**
    * Space to reserve while the image loads (an <img> has no height until it
    * does), e.g. "aspect-[16/10]". Dropped once the image is in.
    */
   placeholderClassName?: string;
};

/**
 * <img> that lazy-loads by default and shows a shimmer skeleton until the
 * image arrives, so slow connections see a placeholder instead of an empty,
 * broken-looking box. The image fades in once loaded.
 */
export default function LazyImage({
   src,
   className = "",
   wrapperClassName = "",
   placeholderClassName = "",
   loading = "lazy",
   decoding = "async",
   onLoad,
   onError,
   ...rest
}: LazyImageProps) {
   // Keyed by src so switching images resets to the loading state.
   const [result, setResult] = useState<{
      src: string | undefined;
      state: "loaded" | "error";
   } | null>(null);
   const state = result && result.src === src ? result.state : "loading";

   return (
      <span
         className={`relative block ${wrapperClassName} ${
            state === "loaded" ? "" : placeholderClassName
         }`}
      >
         {state !== "loaded" && (
            <span
               aria-hidden="true"
               className={`absolute inset-0 flex items-center justify-center ${
                  state === "loading"
                     ? "img-skeleton"
                     : "bg-secondary text-muted-foreground"
               }`}
            >
               {state === "error" && <ImageOff size={28} />}
            </span>
         )}
         <img
            {...rest}
            src={src}
            loading={loading}
            decoding={decoding}
            className={`${className} transition-opacity duration-500 ${
               state === "loaded" ? "opacity-100" : "opacity-0"
            }`}
            onLoad={(e) => {
               setResult({ src, state: "loaded" });
               onLoad?.(e);
            }}
            onError={(e) => {
               setResult({ src, state: "error" });
               onError?.(e);
            }}
         />
      </span>
   );
}
