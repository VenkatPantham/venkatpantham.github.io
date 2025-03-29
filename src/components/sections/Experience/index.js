import React, { useState } from "react";
import { motion } from "framer-motion";
import "./Experience.css";

const Experience = () => {
  const [expandedId, setExpandedId] = useState(null);

  const experiences = [
    {
      company: "Matrix Intelligence",
      position: "Software Development Engineer Intern",
      period: "Jun 2023 - Aug 2023",
      location: "Baltimore, MD",
      jobType: "Full-time",
      duration: "3 months",
      summary:
        "Enhanced system responsiveness, routing efficiency, and secure geospatial data handling with ArcGIS integration.",
      keyPoint:
        "Improved system responsiveness by 35%. Enhanced routing accuracy and efficiency.",
      achievements: [
        "Reduced processing time by 30%",
        "Increased stakeholder engagement by 25%",
      ],
      responsibilities: [
        "Increased system responsiveness by 35% by implementing scalable Spring Boot endpoints and adding ArcGIS support, strengthening geospatial data handling, enabling real-time location tracking, and allowing faster map rendering.",
        "Optimized routing calculation time by crafting advanced algorithms with efficient data structures, which minimized processing delays and refined path selection for real-time navigation and enhanced traffic analysis for accurate routing decisions.",
        "Boosted operational efficiency by 30% by launching a new UI featuring ArcGIS integration and OAuth-secured access, improving user interactions, ensuring secure authentication for data access, and simplifying role-based permissions.",
      ],
      technologies: [
        "Python",
        "AWS Lambda",
        "SQS",
        "SNS",
        "S3",
        "React",
        "D3.js",
        "PostgreSQL",
      ],
    },
    {
      company: "Aspire InfoLabs",
      position: "Software Engineer",
      period: "Jul 2021 - Jul 2022",
      location: "Hyderabad, India",
      jobType: "Full-time",
      duration: "1 year",
      summary:
        "Led frontend development for healthcare management platforms with focus on performance optimization.",
      keyPoint: "Achieved 150k+ downloads and reduced app crashes by 50%.",
      achievements: [
        "Increased user engagement by 30%",
        "Enabled 25% growth in user base",
        "Reduced page load times by 40%",
      ],
      responsibilities: [
        "Attracted 20,000+ active users in six months by building a multi-platform healthcare app with real-time chat and secure payment systems, synchronizing data across devices, and collaborating within Agile sprints with designers and engineers.",
        "Reduced app crashes by 50% by engineering a React Native tracking application linked with Apple Health, identifying and resolving stability issues using Crashlytics and systematic debugging to enhance reliability and user trust.",
        "Refined a NodeJS-based subsea solution, leveraging MongoDB and GraphQL to streamline data storage, retrieval, and processing, which decreased query response times and accommodated larger datasets efficiently for real-time analytics.",
        "Achieved 150k+ downloads globally by leading the creation of a healthcare ecosystem for virtual consultations and medical transport, enabling seamless deployments across Android and iOS platforms while preserving cross-platform compatibility.",
        "Enhanced website traffic by revamping the company site and admin portal with interactive animations, restructuring navigation, simplifying content management, and optimizing documentation for better maintainability and developer collaboration.",
      ],
      technologies: [
        "React",
        "TypeScript",
        "Material-UI",
        "Node.js",
        "Express",
        "MongoDB",
        "Redis",
        "Docker",
      ],
    },
    {
      company: "Edyst",
      position: "Full-Stack Development Intern",
      period: "Jan 2021 - Jun 2021",
      location: "Remote",
      jobType: "Internship",
      duration: "6 months",
      summary:
        "Built a scalable food-ordering platform with optimized performance and seamless deployment.",
      keyPoint: "Supported 1,000+ users and improved order processing speed.",
      achievements: ["Optimized routing speed", "90% on-time delivery rate"],
      responsibilities: [
        "Developed a scalable MERN stack food-ordering platform for 1,000+ users, supporting 20 API endpoints, optimizing database queries for reduced load times, and accelerating data handling speed for faster and more reliable order management.",
        "Transformed design mock-ups into precise, responsive React components, achieving layout consistency across devices and browsers, and deployed the front-end on Netlify and back-end on AWS to streamline development, increase server stability, and ensure high availability.",
      ],
      technologies: [
        "JavaScript",
        "React",
        "Redux",
        "Node.js",
        "MongoDB",
        "WebSockets",
        "Jest",
      ],
    },
  ];

  const toggleExpand = (index) => {
    // If already expanded, collapse it
    if (expandedId === index) {
      setExpandedId(null);
    }
    // If another item is expanded, collapse it first then expand the new one
    else {
      setExpandedId(index);
    }
  };

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

  return (
    <div className="experience-container">
      <div className="section-title-container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Work Experience
        </motion.h2>
      </div>
      <motion.p
        className="section-subtitle"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        My professional journey
      </motion.p>

      <motion.div
        className="experience-timeline"
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            className={`timeline-item ${index % 2 === 0 ? "left" : "right"}`}
            variants={item}
          >
            <div className="timeline-marker"></div>
            <motion.div
              className="timeline-date"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              {exp.period}
            </motion.div>
            <motion.div
              className={`timeline-content ${
                expandedId === index ? "expanded" : ""
              }`}
              transition={{ type: "spring", stiffness: 300 }}
              onClick={() => toggleExpand(index)}
            >
              <div className="timeline-header">
                <h3>{exp.position}</h3>
                <div className="job-type-badge">
                  <i className="fas fa-briefcase"></i> {exp.jobType}
                </div>

                <div className="company-wrapper">
                  <div className="company-badge">
                    <span>{exp.company}</span>
                  </div>
                  <div className="role-details">
                    <span className="location">
                      <i className="fas fa-map-marker-alt"></i> {exp.location}
                    </span>
                    <span className="duration">
                      <i className="far fa-clock"></i> {exp.duration}
                    </span>
                  </div>
                </div>

                <div className="summary-wrapper">
                  <p className="job-summary">{exp.summary}</p>
                  <div className="achievement-highlight">
                    <i className="fas fa-trophy"></i>
                    <span>{exp.keyPoint}</span>
                  </div>

                  <div className="tech-pills">
                    {exp.technologies.slice(0, 5).map((tech, techIndex) => (
                      <span key={techIndex} className="tech-pill">
                        {tech}
                      </span>
                    ))}
                    {exp.technologies.length > 5 && (
                      <span className="tech-pill">
                        +{exp.technologies.length - 5} more
                      </span>
                    )}
                  </div>
                </div>
              </div>

              <div
                className="expand-indicator"
                onClick={(e) => {
                  e.stopPropagation();
                  toggleExpand(index);
                }}
                title={expandedId === index ? "Show less" : "Show more"}
                aria-label={expandedId === index ? "Show less" : "Show more"}
              >
                <i className="fas fa-chevron-down"></i>
              </div>

              <div className="timeline-body">
                <div className="achievements">
                  <h4>Key Achievements</h4>
                  <div className="achievements-list">
                    {exp.achievements.map((achievement, achIndex) => (
                      <div className="achievement-item" key={achIndex}>
                        {achievement}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="responsibilities">
                  <h4>Responsibilities</h4>
                  <ul>
                    {exp.responsibilities.map((resp, respIndex) => (
                      <li key={respIndex}>{resp}</li>
                    ))}
                  </ul>
                </div>

                <div className="tech-used">
                  <h4>Technologies Used</h4>
                  <div className="tech-grid">
                    {exp.technologies.map((tech, techIndex) => (
                      <div key={techIndex} className="tech-item">
                        {tech}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Experience;
