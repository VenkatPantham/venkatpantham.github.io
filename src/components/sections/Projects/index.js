import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./Projects.css";

const Projects = () => {
  const [filter, setFilter] = useState("all");

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
      category: "ai",
      github: "https://github.com/venkatpantham/xrdaas",
      demo: "https://xrdaas-demo.example.com",
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
      category: "data",
      github: "https://github.com/venkatpantham/maryland-crime-analysis",
      demo: "https://maryland-crime-analysis.example.com",
    },
    {
      id: 3,
      title: "Healthcare Mobile App",
      description:
        "Built a multi-platform healthcare app with real-time chat and secure payment systems that attracted 20,000+ active users in six months. Implemented cross-device data synchronization and collaborated within Agile sprints with designers and engineers to create a seamless user experience.",
      technologies: [
        "React Native",
        "Node.js",
        "MongoDB",
        "Socket.io",
        "Payment Gateway",
      ],
      category: "mobile",
      github: "https://github.com/venkatpantham/healthcare-app",
      demo: "https://healthcare-app.example.com",
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
      category: "fullstack",
      github: "https://github.com/venkatpantham/food-ordering",
      demo: "https://food-ordering-platform.example.com",
    },
  ];

  const filteredProjects =
    filter === "all"
      ? projects
      : projects.filter((project) => project.category === filter);

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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

  const filterAnimation = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
        ease: "easeOut",
      },
    },
  };

  return (
    <div className="projects-container">
      <div className="section-title-container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Projects
        </motion.h2>
      </div>
      <motion.p
        className="section-subtitle"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        Some of my recent work
      </motion.p>

      <motion.div
        className="project-filters"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={container}
      >
        <motion.button
          className={`filter-btn ${filter === "all" ? "active" : ""}`}
          onClick={() => setFilter("all")}
          variants={filterAnimation}
        >
          All
        </motion.button>
        <motion.button
          className={`filter-btn ${filter === "ai" ? "active" : ""}`}
          onClick={() => setFilter("ai")}
          variants={filterAnimation}
        >
          AI/ML
        </motion.button>
        <motion.button
          className={`filter-btn ${filter === "data" ? "active" : ""}`}
          onClick={() => setFilter("data")}
          variants={filterAnimation}
        >
          Data Science
        </motion.button>
        <motion.button
          className={`filter-btn ${filter === "mobile" ? "active" : ""}`}
          onClick={() => setFilter("mobile")}
          variants={filterAnimation}
        >
          Mobile
        </motion.button>
        <motion.button
          className={`filter-btn ${filter === "fullstack" ? "active" : ""}`}
          onClick={() => setFilter("fullstack")}
          variants={filterAnimation}
        >
          Full Stack
        </motion.button>
      </motion.div>

      <AnimatePresence mode="wait">
        <motion.div
          className="projects-grid"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          layout
          key={filter}
          exit={{ opacity: 0 }}
        >
          {filteredProjects.map((project) => (
            <motion.div
              className="project-card"
              key={project.id}
              variants={item}
              layout
            >
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
                {/* <div className="project-links">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="project-link"
                    >
                      <i className="fab fa-github"></i> Code
                    </a>
                  )}
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noreferrer"
                      className="project-link"
                    >
                      <i className="fas fa-external-link-alt"></i> Demo
                    </a>
                  )}
                </div> */}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default Projects;
