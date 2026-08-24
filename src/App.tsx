import Navigation from "./components/Navigation";
import { Analytics } from "@vercel/analytics/react";
import Hero from "./components/Hero";
import Services from "./components/Services";
import DesignProcess from "./components/DesignProcess";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import CursorGlow from "./components/CursorGlow";
import ScrollToTop from "./components/ScrollToTop";
import Preloader from "./components/Preloader";

function App() {
   return (
      <div className="min-h-screen bg-background">
         <Analytics />
         <Preloader />
         <Navigation />
         <CursorGlow />
         <main>
            <Hero />
            <Services />
            <Projects />
            <DesignProcess />
            <Contact />
         </main>
         <Footer />
         <ScrollToTop />
      </div>
   );
}

export default App;
