import React from "react";
import { motion } from "framer-motion";
import "./Footer.css";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <footer className="footer">
      <div className="footer-bg-blob-1"></div>
      <div className="footer-bg-blob-2"></div>

      <motion.div
        className="footer-content"
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        <motion.div className="footer-logo" variants={item}>
          <a href="#home" aria-label="Go to home section">
            <span>Venkat Pantham</span>
          </a>
        </motion.div>

        <motion.div className="footer-links" variants={item}>
          <a href="#skills">Skills</a>
          <a href="#experience">Experience</a>
          <a href="#projects">Projects</a>
          <a href="#education">Education</a>
          <a href="#contact">Contact</a>
        </motion.div>

        <motion.div className="footer-social" variants={item}>
          <a
            href="https://github.com/venkatpantham"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
          >
            <i className="fab fa-github"></i>
          </a>
          <a
            href="https://linkedin.com/in/venkat-pantham"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
          >
            <i className="fab fa-linkedin"></i>
          </a>
          <a
            href="mailto:venkatpantham7@gmail.com"
            target="_blank"
            rel="noreferrer"
            aria-label="Email"
          >
            <i className="fas fa-envelope"></i>
          </a>
        </motion.div>
      </motion.div>

      <motion.div
        className="footer-bottom"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        viewport={{ once: true }}
      >
        <p>&copy; {currentYear} Venkat Pantham. All rights reserved.</p>
        <p>
          <span className="role">Software Engineer & Full-Stack Developer</span>
        </p>
      </motion.div>
    </footer>
  );
};

export default Footer;
