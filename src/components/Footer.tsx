const Footer = () => {
   const currentDate = new Date();
   const year = currentDate.getFullYear();

   return (
      <footer className="py-12 border-t border-foreground/10">
         <div className="container-padding">
            <div className="text-center space-y-4">
               <div className="flex items-center justify-center gap-2 text-muted-foreground">
                  <span>Built by using React, TypeScript & Tailwind CSS</span>
               </div>

               <p className="text-muted-foreground">
                  {year} © All rights reserved.
               </p>

               <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
                  <span>Designed & Developed by</span>
                  <span className="gradient-text font-semibold">
                     Praneeta Pradhan
                  </span>
               </div>
            </div>
         </div>
      </footer>
   );
};
export default Footer;
