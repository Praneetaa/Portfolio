import Navigation from "./components/Navigation";
import About from "./components/About";
import Hero from "./components/Hero";
import Stats from "./components/Stats";
import Services from "./components/Services";
import DesignProcess from "./components/DesignProcess";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import CursorGlow from "./components/CursorGlow";
import ScrollToTop from "./components/ScrollToTop";
import Timeline from "./components/TimeLine";
import "./App.css";

function App() {
   return (
      <div className="min-h-screen bg-bg">
         <Navigation />
         <CursorGlow />
         <main>
            <Hero />
            <Stats />
            <Timeline />
            <About />
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
