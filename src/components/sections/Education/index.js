import React from "react";
import { motion } from "framer-motion";
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
    <div className="education-container">
      <div className="section-title-container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Education
        </motion.h2>
      </div>
      <motion.p
        className="section-subtitle"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        My academic background
      </motion.p>

      <motion.div
        className="education-content"
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        {education.map((edu, index) => (
          <motion.div key={index} className="education-card" variants={item}>
            <div className="education-header">
              <h3>{edu.school}</h3>
              <span className="education-period">{edu.period}</span>
            </div>
            <div className="education-body">
              <div className="degree-container">
                <h4>{edu.degree}</h4>
                {edu.gpa && <span className="gpa">GPA: {edu.gpa}</span>}
              </div>
              <div className="coursework">
                <h5>Coursework:</h5>
                <ul>
                  {edu.courses.map((course, i) => (
                    <li key={i}>{course}</li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      <div className="certifications">
        <h3>Certifications</h3>
        <motion.div
          className="certification-grid"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              className="certification-item"
              variants={item}
            >
              <i className={`fas ${cert.icon}`}></i>
              <span>{cert.name}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Education;
