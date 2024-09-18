import React from "react";
import { motion } from "framer-motion";
import Header from "./components/Header";
import About from "./components/About";
import Projects from "./components/Projects";
import ChemicalScience from "./components/ChemicalScience";
import Contact from "./components/Contact";
// import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="bg-gradient-to-br from-pink-50 to-purple-100 min-h-screen">
      <Header />
      <motion.main
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="container mx-auto px-4 py-8"
      >
        {/* <Intro /> */}
        <About />
        <Projects />
        <ChemicalScience />
        {/* <Skills /> */}
        <Contact />
      </motion.main>
      {/* <Footer /> */}
    </div>
  );
};

export default App;
