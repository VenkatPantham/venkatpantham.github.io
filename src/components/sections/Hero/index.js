import React, { useState, useEffect, useCallback, useMemo } from "react";
import { motion } from "framer-motion";
import "./Hero.css";
import profilePic from "../../../assets/profile.jpg";

const Hero = () => {
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  const titles = useMemo(
    () => ["Software Engineer", "Full Stack Developer"],
    []
  );
  const period = 2000; // How long to pause after typing

  const tick = useCallback(() => {
    const i = loopNum % titles.length;
    const fullText = titles[i];

    if (isDeleting) {
      // When deleting, remove a character and speed up typing
      setText(fullText.substring(0, text.length - 1));
      setTypingSpeed(70);
    } else {
      // When typing, add a character
      setText(fullText.substring(0, text.length + 1));
      setTypingSpeed(150);
    }

    // Handle the typing/deleting state changes
    if (!isDeleting && text === fullText) {
      // Just finished typing
      setTypingSpeed(period); // Wait after typing completes
      setIsDeleting(true);
    } else if (isDeleting && text === "") {
      // Just finished deleting
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
    }
  }, [text, isDeleting, loopNum, titles]);

  useEffect(() => {
    const ticker = setInterval(() => {
      tick();
    }, typingSpeed);

    return () => clearInterval(ticker);
  }, [tick, typingSpeed]);

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <div className="hero-container">
      <div className="hero-bg-shape hero-shape-1"></div>

      <div className="hero-content">
        <motion.div
          className="hero-text"
          variants={container}
          initial="hidden"
          animate="visible"
        >
          <motion.span className="greeting" variants={item}>
            Hello, I'm
          </motion.span>
          <motion.h1 variants={item}>Venkat Pantham</motion.h1>
          <motion.h2 variants={item}>
            <span className="typing-text">{text}</span>
            <span className="cursor">|</span>
          </motion.h2>
          <motion.p variants={item}>
            Detail-oriented Software Engineer with experience in full-stack
            development and AI/ML solutions. Proficient in building secure,
            scalable applications with React, Node.js, and Python. Passionate
            about solving complex problems through innovative technology.
          </motion.p>

          <motion.div className="hero-btns" variants={item}>
            <a
              href="/resume.pdf"
              className="btn secondary-btn"
              download="Venkat_Pantham_Resume.pdf"
              rel="noreferrer"
            >
              <i className="fas fa-download"></i> Download Resume
            </a>
          </motion.div>

          <motion.div className="social-links" variants={item}>
            <a
              href="https://github.com/venkatpantham"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub Profile"
            >
              <i className="fab fa-github"></i>
            </a>
            <a
              href="https://linkedin.com/in/venkatpantham"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn Profile"
            >
              <i className="fab fa-linkedin"></i>
            </a>
            <a
              href="mailto:venkatpantham7@gmail.com"
              aria-label="Email Contact"
            >
              <i className="fas fa-envelope"></i>
            </a>
          </motion.div>
        </motion.div>

        <div className="hero-image-container">
          <div className="blob-effect"></div>
          <div className="profile-circle">
            <img
              src={profilePic}
              alt="Venkat Pantham"
              className="profile-img"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
