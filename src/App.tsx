import Navigation from "./components/Navigation";
import { Analytics } from "@vercel/analytics/react";
import Hero from "./components/Hero";
import Background from "./components/Background";
import Services from "./components/Services";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import Preloader from "./components/Preloader";

function App() {
   return (
      <div className="min-h-screen bg-background">
         <Analytics />
         <Preloader />
         <Navigation />
         <main>
            <Hero />
            <Background />
            <Projects />
            <Services />
            <Contact />
         </main>
         <Footer />
         <ScrollToTop />
      </div>
   );
}

export default App;
