import React from "react";
import { LazyMotion, domAnimation, m as motion } from "framer-motion";
import "./Footer.css";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-bg-blob-1"></div>
      <div className="footer-bg-blob-2"></div>
      <div className="footer-content">
        <div className="footer-logo">
          <a href="#home" aria-label="Go to home section">
            <span>Venkat Pantham</span>
          </a>
        </div>
        <div className="footer-links">
          <a href="#skills">Skills</a>
          <a href="#experience">Experience</a>
          <a href="#projects">Projects</a>
          <a href="#education">Education</a>
          <a href="#contact">Contact</a>
        </div>
        <LazyMotion features={domAnimation}>
          <motion.div className="footer-social">
            <a
              href="https://github.com/venkatpantham"
              target="_blank"
              rel="noreferrer"
              aria-label="Visit my GitHub profile"
            >
              <i className="fab fa-github"></i>
            </a>
            <a
              href="https://linkedin.com/in/venkat-pantham"
              target="_blank"
              rel="noreferrer"
              aria-label="Connect with me on LinkedIn"
            >
              <i className="fab fa-linkedin"></i>
            </a>
            <a
              href="mailto:venkatpantham7@gmail.com"
              target="_blank"
              rel="noreferrer"
              aria-label="Send me an email"
            >
              <i className="fas fa-envelope"></i>
            </a>
          </motion.div>
        </LazyMotion>
      </div>
      <div className="footer-bottom">
        <p>&copy; {currentYear} Venkat Pantham. All rights reserved.</p>
        <p>
          <span className="role">Software Engineer & Full-Stack Developer</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
