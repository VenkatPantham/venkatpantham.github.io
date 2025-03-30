import React, { useState, useEffect, createContext, useContext } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Components
import Header from "./components/layout/Header";
import Hero from "./components/sections/Hero";
import Skills from "./components/sections/Skills";
import Experience from "./components/sections/Experience";
import Projects from "./components/sections/Projects";
import Education from "./components/sections/Education";
import Contact from "./components/sections/Contact";
import Footer from "./components/layout/Footer";

// Create theme context
export const ThemeContext = createContext({
  theme: "light",
  toggleTheme: () => {},
});

// Theme toggle hook
export const useTheme = () => useContext(ThemeContext);

function App() {
  const [loading, setLoading] = useState(true);
  const [theme, setTheme] = useState("light");

  // Theme toggle function
  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
  };

  useEffect(() => {
    // Set theme on mount
    document.documentElement.setAttribute("data-theme", theme);

    // Simulate loading
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <AnimatePresence>
        {loading ? (
          <motion.div
            key="loader"
            className="loader-container"
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="loader-content">
              <div className="loader-circle">
                <div className="loader-circle-inner"></div>
              </div>
              <motion.h2
                className="loader-title"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
              >
                Venkat Pantham
              </motion.h2>
              <motion.p
                className="loader-subtitle"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.5 }}
              >
                Portfolio
              </motion.p>
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="app"
            className="app"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Header />
            <main>
              <section id="home">
                <Hero />
              </section>
              <section id="skills">
                <Skills />
              </section>
              <section id="experience">
                <Experience />
              </section>
              <section id="projects">
                <Projects />
              </section>
              <section id="education">
                <Education />
              </section>
              <section id="contact">
                <Contact />
              </section>
            </main>
            <Footer />
          </motion.div>
        )}
      </AnimatePresence>
    </ThemeContext.Provider>
  );
}

export default App;
