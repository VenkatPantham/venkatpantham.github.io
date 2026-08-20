import React, { useState } from "react";
import { LazyMotion, domAnimation, m as motion } from "framer-motion";
import "./Experience.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBriefcase,
  faMapMarkerAlt,
  faClock,
  faTrophy,
  faChevronDown,
  faChevronUp,
} from "@fortawesome/free-solid-svg-icons";

const Experience = () => {
  const [expandedId, setExpandedId] = useState(null);

  const experiences = [
    {
      company: "Amazon Web Services (AWS)",
      position: "Software Development Engineer",
      period: "Aug 2025 - Present",
      location: "Greater Seattle Area",
      jobType: "Full-time",
      duration: "1 year+",
      summary:
        "Building and operating managed database features on the Amazon RDS for SQL Server team, supporting reliability, availability, and performance at scale.",
      keyPoint:
        "Contributing to a managed database service that powers mission-critical workloads for enterprise customers worldwide.",
      achievements: [
        "Contributed to the SQL Server audit log publishing to Amazon CloudWatch feature",
        "Delivering engine-level features for Amazon RDS for SQL Server",
        "Driving operational excellence through on-call and monitoring",
      ],
      responsibilities: [
        "Contributed to the feature enabling SQL Server audit logs to be published to Amazon CloudWatch, giving customers centralized visibility into database activity for security and compliance.",
        "Developing and maintaining features for Amazon RDS for SQL Server, focusing on database engine reliability, availability, and performance for workloads running at scale.",
        "Automating provisioning, patching, backup, and failover workflows to reduce operational overhead and improve the managed database experience.",
        "Participating in the on-call rotation to diagnose and resolve production issues, strengthening monitoring, alarming, and observability across the service.",
        "Contributing to internal AI initiatives, applying generative AI and automation to improve developer productivity and operational workflows.",
        "Collaborating with cross-functional AWS teams through design reviews and code reviews, following AWS's operational excellence and security best practices.",
      ],
      technologies: [
        "AWS",
        "Amazon RDS",
        "SQL Server",
        "Java",
        "C#",
        "Distributed Systems",
        "Databases",
      ],
    },
    {
      company: "MatrixIntelligence",
      position: "Software Development Engineer",
      period: "Jun 2025 - Aug 2025",
      location: "United States",
      jobType: "Full-time",
      duration: "3 months",
      summary:
        "Returned full-time to advance the geospatial routing platform, optimizing routing algorithms and deepening ArcGIS-based route intelligence.",
      keyPoint:
        "Reduced routing calculation time by 40% and improved network efficiency by 20%.",
      achievements: [
        "Reduced routing calculation time by 40%",
        "Improved overall network efficiency by 20%",
        "Cut manual interventions by 35% via ArcGIS integration",
      ],
      responsibilities: [
        "Crafted advanced routing algorithms with efficient data structures, reducing calculation time by 40% and improving overall network efficiency by 20% for faster, more accurate path selection.",
        "Deepened ArcGIS integration to incorporate real-time geographic data into route optimization, enabling precise route decisions and reducing manual interventions by 35%.",
      ],
      technologies: [
        "Spring Boot",
        "React",
        "ArcGIS",
        "Java",
        "Algorithms",
        "PostgreSQL",
      ],
    },
    {
      company: "Matrix Intelligence",
      position: "Software Development Engineer Intern",
      period: "Jun 2024 - Aug 2024",
      location: "Santa Clara, CA",
      jobType: "Internship",
      duration: "3 months",
      summary:
        "Built the foundation of the geospatial routing platform, delivering a modern UI and scalable Spring Boot endpoints for fiber route calculations.",
      keyPoint:
        "Improved task completion speed by 25% and system responsiveness by 30%.",
      achievements: [
        "Improved task completion speed by 25%",
        "Increased system responsiveness by 30%",
      ],
      responsibilities: [
        "Designed a modern UI using React, Redux, and Material UI, significantly enhancing user interaction and operational efficiency and improving task completion speed by 25%.",
        "Introduced over 10 optimized Spring Boot endpoints to streamline multi-layer fiber route calculations, increasing system responsiveness by 30% and reducing latency.",
      ],
      technologies: [
        "React",
        "Redux",
        "Material UI",
        "Spring Boot",
        "Java",
        "PostgreSQL",
      ],
    },
    {
      company: "Aspire InfoLabs",
      position: "Software Engineer",
      period: "Oct 2020 - Aug 2023",
      location: "Hyderabad, India",
      jobType: "Full-time",
      duration: "3 years",
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
      period: "May 2019 - Jul 2019",
      location: "Remote",
      jobType: "Internship",
      duration: "3 months",
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
    setExpandedId(expandedId === index ? null : index);
  };

  return (
    <div className="experience-container">
      <div className="section-title-container">
        <h2 className="section-title">Work Experience</h2>
      </div>
      <p className="section-subtitle">My professional journey</p>

      <div className="experience-timeline">
        {experiences.map((exp, index) => (
          <div
            key={index}
            className={`timeline-item ${index % 2 === 0 ? "left" : "right"}`}
          >
            <div className="timeline-marker"></div>
            <div className="timeline-date">{exp.period}</div>
            <LazyMotion features={domAnimation}>
              <motion.div
                className={`timeline-content ${
                  expandedId === index ? "expanded" : ""
                }`}
                onClick={() => toggleExpand(index)}
              >
                <div className="timeline-header">
                  <h3>{exp.position}</h3>
                  <div className="job-type-badge">
                    <FontAwesomeIcon icon={faBriefcase} className="fa-icon" />{" "}
                    {exp.jobType}
                  </div>

                  <div className="company-wrapper">
                    <div className="company-badge">
                      <span>{exp.company}</span>
                    </div>
                    <div className="role-details">
                      <span className="location">
                        <FontAwesomeIcon
                          icon={faMapMarkerAlt}
                          className="fa-icon"
                        />{" "}
                        {exp.location}
                      </span>
                      <span className="duration">
                        <FontAwesomeIcon icon={faClock} className="fa-icon" />
                        {exp.duration}
                      </span>
                    </div>
                  </div>

                  <div className="summary-wrapper">
                    <p className="job-summary">{exp.summary}</p>
                    <div className="achievement-highlight">
                      <FontAwesomeIcon icon={faTrophy} className="fa-icon" />
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
                >
                  <FontAwesomeIcon
                    icon={expandedId === index ? faChevronUp : faChevronDown}
                    className="fa-icon"
                  />
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
            </LazyMotion>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
