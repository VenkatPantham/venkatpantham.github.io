import React, { useState, useEffect } from "react";
import { useTheme } from "../../../App";
import "./Header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSun,
  faMoon,
  faBars,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";

const NavBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleNavClick = (e, targetId) => {
    setIsMenuOpen(false);

    if (window.innerWidth <= 767) {
      e.preventDefault();
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        // For mobile, use a custom scroll with an offset
        const offset = 100;
        const elementPosition = targetElement.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - offset;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      }
    }
  };

  return (
    <nav className={`navbar ${isScrolled ? "scrolled" : ""}`}>
      <div className="navbar-container">
        <a
          href="#home"
          className="navbar-logo"
          onClick={(e) => handleNavClick(e, "home")}
        >
          <span className="logo-text">Venkat Pantham</span>
        </a>

        <div className="theme-toggle" onClick={toggleTheme}>
          <FontAwesomeIcon
            icon={theme === "dark" ? faSun : faMoon}
            className="fa-icon"
          />
        </div>

        <div className="menu-icon" onClick={toggleMenu}>
          <FontAwesomeIcon icon={isMenuOpen ? faTimes : faBars} />
        </div>

        <ul className={`nav-menu ${isMenuOpen ? "active" : ""}`}>
          <li className="nav-item">
            <a
              href="#skills"
              className="nav-link"
              onClick={(e) => handleNavClick(e, "skills")}
            >
              Skills
            </a>
          </li>
          <li className="nav-item">
            <a
              href="#experience"
              className="nav-link"
              onClick={(e) => handleNavClick(e, "experience")}
            >
              Experience
            </a>
          </li>
          <li className="nav-item">
            <a
              href="#projects"
              className="nav-link"
              onClick={(e) => handleNavClick(e, "projects")}
            >
              Projects
            </a>
          </li>
          <li className="nav-item">
            <a
              href="#education"
              className="nav-link"
              onClick={(e) => handleNavClick(e, "education")}
            >
              Education
            </a>
          </li>
          <li className="nav-item">
            <a
              href="#contact"
              className="nav-link"
              onClick={(e) => handleNavClick(e, "contact")}
            >
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
