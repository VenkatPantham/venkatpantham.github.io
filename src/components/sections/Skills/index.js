import React from "react";
import { motion } from "framer-motion";
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

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <div className="skills-container">
      <div className="section-title-container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          My Skills
        </motion.h2>
      </div>
      <motion.p
        className="section-subtitle"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        Technologies and tools I work with
      </motion.p>

      <motion.div
        className="skills-grid"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
      >
        {skills.map((skillGroup, index) => (
          <motion.div key={index} className="skill-card" variants={item}>
            <h3>{skillGroup.category}</h3>
            <div className="skill-items">
              {skillGroup.items.map((skill, i) => (
                <div key={i} className="skill-item">
                  <span>{skill}</span>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Skills;
