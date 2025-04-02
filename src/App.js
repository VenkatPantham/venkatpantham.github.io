import React, {
  useState,
  useEffect,
  createContext,
  useContext,
  lazy,
  Suspense,
} from "react";
// Critical components loaded eagerly
import Header from "./components/layout/Header";
import Hero from "./components/sections/Hero";
import SEOHelmet from "./components/SEO/Helmet";
import Loader from "./components/layout/Loader";

// Lazy load non-critical components
const Skills = lazy(() => import("./components/sections/Skills"));
const Experience = lazy(() => import("./components/sections/Experience"));
const Projects = lazy(() => import("./components/sections/Projects"));
const Education = lazy(() => import("./components/sections/Education"));
const Contact = lazy(() => import("./components/sections/Contact"));
const Footer = lazy(() => import("./components/layout/Footer"));

// Create theme context
export const ThemeContext = createContext({
  theme: "light",
  toggleTheme: () => {},
});

// Theme toggle hook
export const useTheme = () => useContext(ThemeContext);

function App() {
  const [theme, setTheme] = useState("light");

  // Theme toggle function
  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
  };

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <SEOHelmet />
      <div className="app">
        <Header />
        <main>
          <section id="home">
            <Hero />
          </section>
          <Suspense fallback={<Loader />}>
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
            <Footer />
          </Suspense>
        </main>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
