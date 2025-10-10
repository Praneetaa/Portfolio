import { useState } from "react";
import Navigation from "./components/Navigation";
import "./App.css";

function App() {
   return (
      <div className="bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100 transition-colors duration-300">
         <Navigation />
      </div>
   );
}

export default App;
