import React from "react";
import {
  LazyMotion,
  domAnimation,
  m as motion,
  AnimatePresence,
} from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import "./Projects.css";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "XR-DaaS - AI-Powered Chest X-ray Analysis",
      description:
        "Built a 95% accurate YOLOv8 model for chest X-ray abnormality detection, integrating OpenAI for AI-driven medical insights. Implemented HIPAA-compliant security with AES encryption, AWS S3 storage, and role-based access control. Launched a React & Flask-based web application with an intuitive UX, increasing AI adoption by 40% among doctors and patients.",
      technologies: [
        "React",
        "Flask",
        "Python",
        "YOLOv8",
        "OpenAI",
        "AWS S3",
        "AES Encryption",
      ],
      github: "https://github.com/VenkatPantham/xr-daas",
      demo: null,
    },
    {
      id: 2,
      title: "Maryland Crime Rate Analysis & Economic Correlation",
      description:
        "Predicted crime rates with 85% accuracy utilizing causal inference on 10 years of socio-economic data, uncovering crime-driving factors. Trained ML models, including XGBoost and time series forecasting, to identify connections between education, unemployment, and crime. Designed a Streamlit dashboard with real-time visualizations, deploying ML pipelines on AWS for insights and decision-making.",
      technologies: [
        "Python",
        "XGBoost",
        "Time Series",
        "Streamlit",
        "AWS",
        "Data Science",
        "ML",
      ],
      github: "https://github.com/VenkatPantham/SAFE-MD",
      demo: null,
    },
    {
      id: 3,
      title: "Tech News Curator",
      description:
        "A Python application that curates tech news from various sources, summarizes articles using OpenAI, and delivers them as markdown files or email digests. Features include multi-source scraping, AI-powered summarization, flexible output options, robust error handling, and comprehensive logging. Configurable via environment variables for tailored usage.",
      technologies: [
        "Python",
        "OpenAI",
        "Web Scraping",
        "Markdown",
        "Email Automation",
      ],
      github: "https://github.com/VenkatPantham/tech-news-curator",
      demo: null,
    },
    {
      id: 4,
      title: "Food Ordering Platform",
      description:
        "Developed a scalable MERN stack food-ordering platform for 1,000+ users, supporting 20 API endpoints. Optimized database queries for reduced load times and accelerated data handling speed for faster and more reliable order management. Deployed the front-end on Netlify and back-end on AWS.",
      technologies: [
        "MongoDB",
        "Express",
        "React",
        "Node.js",
        "AWS",
        "Netlify",
      ],
      github: null,
      demo: null,
    },
  ];

  return (
    <div className="projects-container">
      <div className="section-title-container">
        <h2 className="section-title">Projects</h2>
      </div>
      <p className="section-subtitle">Some of my recent work</p>

      <LazyMotion features={domAnimation}>
        <AnimatePresence mode="wait">
          <motion.div className="projects-grid" layout>
            {projects.map((project) => (
              <motion.div className="project-card" key={project.id} layout>
                <div className="project-info">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className="project-tech">
                    {project.technologies.map((tech, index) => (
                      <div key={index} className="tech-badge">
                        <span>{tech}</span>
                      </div>
                    ))}
                  </div>
                  <div className="project-links">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-link"
                      >
                        <FontAwesomeIcon icon={faGithub} className="fa-icon" />
                        Code
                      </a>
                    )}
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-link"
                      >
                        <FontAwesomeIcon icon={faLink} className="fa-icon" />
                        Demo
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </LazyMotion>
    </div>
  );
};

export default Projects;
