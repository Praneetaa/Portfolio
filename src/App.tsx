import { useState } from "react";
import Navigation from "./components/Navigation";
import About from "./components/About";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import "./App.css";

function App() {
   return (
      <div className="min-h-screen bg-bg">
         <Navigation />
         <main>
            <Hero />
            <About />
            <Projects />
            <Contact />
         </main>
         <Footer />
      </div>
   );
}

export default App;
