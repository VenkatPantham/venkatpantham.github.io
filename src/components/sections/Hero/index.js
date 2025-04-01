import React, { useState, useEffect, useCallback, useMemo } from "react";
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

  return (
    <div className="hero-container">
      <div className="hero-bg-shape hero-shape-1"></div>
      <div className="hero-content">
        <div className="hero-text">
          <span className="greeting">Hello, I'm</span>
          <h1>Venkat Pantham</h1>
          <h2>
            <span className="typing-text">{text}</span>
            <span className="cursor">|</span>
          </h2>
          <p>
            Detail-oriented Software Engineer with experience in full-stack
            development and AI/ML solutions. Proficient in building secure,
            scalable applications with React, Node.js, and Python. Passionate
            about solving complex problems through innovative technology.
          </p>
          <div className="hero-btns">
            <a
              href={`${process.env.PUBLIC_URL}/resume.pdf`}
              className="btn secondary-btn"
              download="Venkat_Pantham_Resume.pdf"
              rel="noreferrer"
            >
              <i className="fas fa-download"></i> Download Resume
            </a>
          </div>
          <div className="social-links">
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
          </div>
        </div>
        <div className="hero-image-container">
          <div className="blob-effect"></div>
          <div className="profile-circle">
            <img
              src={profilePic}
              alt="Venkat Pantham"
              className="profile-img"
              loading="eager"
              decoding="async"
              fetchpriority="high"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
