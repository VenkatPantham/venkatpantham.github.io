import React from "react";
import { LazyMotion, domAnimation, m as motion } from "framer-motion";
import "./Skills.css";

const Skills = () => {
  const skills = [
    {
      category: "Languages",
      items: [
        "Java",
        "JavaScript",
        "TypeScript",
        "Python",
        "C++",
        "HTML",
        "CSS",
        "PHP",
      ],
    },
    {
      category: "Frameworks",
      items: [
        "React Native",
        "Node.js",
        "Express.js",
        "Next.js",
        "Spring Boot",
        "Flask",
      ],
    },
    {
      category: "Libraries",
      items: [
        "React.js",
        "Redux",
        "GraphQL",
        "Bootstrap",
        "Material UI",
        "Tailwind CSS",
        "Socket.io",
        "JUnit",
        "Jest",
      ],
    },
    {
      category: "Databases",
      items: ["SQL", "NoSQL", "PostgreSQL", "MongoDB"],
    },
    {
      category: "Tools & Platforms",
      items: [
        "Git",
        "Linux",
        "Docker",
        "Kubernetes",
        "AWS",
        "Salesforce",
        "JIRA",
        "VSCode",
        "Eclipse",
        "Postman",
      ],
    },
  ];

  return (
    <div className="skills-container">
      <div className="section-title-container">
        <h2 className="section-title">My Skills</h2>
      </div>
      <p className="section-subtitle">Technologies and tools I work with</p>

      <LazyMotion features={domAnimation}>
        <motion.div className="skills-grid">
          {skills.map((skillGroup, index) => (
            <div key={index} className="skill-card">
              <h3>{skillGroup.category}</h3>
              <div className="skill-items">
                {skillGroup.items.map((skill, i) => (
                  <div key={i} className="skill-item">
                    <span>{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </motion.div>
      </LazyMotion>
    </div>
  );
};

export default Skills;
