import React from "react";
import { LazyMotion, domAnimation, m as motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendarAlt,
  faCertificate,
  faChalkboardUser,
  faCheckCircle,
  faMedal,
} from "@fortawesome/free-solid-svg-icons";
import "./Education.css";

const Education = () => {
  const education = [
    {
      school: "University of Maryland, Baltimore County",
      degree: "Master's, Computer Science",
      period: "Aug 2023 - May 2025",
      gpa: "3.7",
      courses: [
        "Design and Analysis of Algorithms",
        "Intro to Machine Learning",
        "Intro to Data Science",
        "Advanced Computer Architecture",
      ],
    },
    {
      school: "Jawaharlal Nehru Technological University, Kakinada",
      degree: "Bachelor's, Computer Science",
      period: "Aug 2016 - May 2020",
      courses: [
        "C, C++, Java, Python, R and Linux Programming",
        "Data Structures",
        "Mobile Computing",
        "Web Technologies",
      ],
    },
  ];

  const certifications = [
    {
      name: "AWS Certified Solutions Architect",
      icon: "fa-certificate",
    },
    {
      name: "Master Micro Services with Spring Boot and Spring Cloud",
      icon: "fa-certificate",
    },
    {
      name: "Full-Stack Web Development with React Specialization",
      icon: "fa-certificate",
    },
    {
      name: "JavaScript Algorithms and Data Structures",
      icon: "fa-certificate",
    },
  ];

  return (
    <div className="education-container">
      <div className="section-title-container">
        <h2 className="section-title">Education</h2>
      </div>
      <p className="section-subtitle">My academic background</p>

      <div className="education-content">
        {education.map((edu, index) => (
          <div key={index} className="education-card">
            <div className="education-header">
              <h3>{edu.school}</h3>
              <span className="education-period">
                <FontAwesomeIcon icon={faCalendarAlt} className="fa-icon" />
                {edu.period}
              </span>
            </div>

            <div className="education-body">
              <div className="degree-container">
                <div className="degree-title">
                  <FontAwesomeIcon icon={faMedal} className="fa-icon" />
                  <h4>{edu.degree}</h4>
                </div>
                {edu.gpa && <span className="gpa">GPA: {edu.gpa}</span>}
              </div>
              <div className="coursework">
                <span className="coursework-title">
                  <FontAwesomeIcon
                    icon={faChalkboardUser}
                    className="fa-icon"
                  />
                  <h5>Coursework:</h5>
                </span>
                <ul>
                  {edu.courses.map((course, i) => (
                    <li key={i}>
                      <FontAwesomeIcon
                        icon={faCheckCircle}
                        className="fa-icon"
                      />
                      {course}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="certifications">
        <h3>Certifications</h3>
        <LazyMotion features={domAnimation}>
          <motion.div className="certification-grid">
            {certifications.map((cert, index) => (
              <div key={index} className="certification-item">
                <FontAwesomeIcon icon={faCertificate} className="fa-icon" />
                <span>{cert.name}</span>
              </div>
            ))}
          </motion.div>
        </LazyMotion>
      </div>
    </div>
  );
};

export default Education;
