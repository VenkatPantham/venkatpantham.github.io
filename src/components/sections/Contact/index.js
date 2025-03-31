import React, { useState } from "react";
import { motion } from "framer-motion";
import "./Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      // Here you would normally send the form data to a server
      // For GitHub Pages, you might use a form service like Formspree

      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));

      setSubmitted(true);
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (err) {
      setError(
        "Sorry, there was an error submitting your message. Please try again."
      );
    } finally {
      setLoading(false);
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
    <div className="contact-container">
      <div className="section-title-container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Get In Touch
        </motion.h2>
      </div>
      <motion.p
        className="section-subtitle"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        Feel free to reach out if you have any questions
      </motion.p>

      <div className="contact-content">
        <motion.div
          className="contact-info"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          <motion.div className="contact-item" variants={item}>
            <i className="fas fa-envelope"></i>
            <div>
              <h3>Email</h3>
              <p>venkatpantham7@gmail.com</p>
            </div>
          </motion.div>

          <motion.div className="contact-item" variants={item}>
            <i className="fas fa-map-marker-alt"></i>
            <div>
              <h3>Location</h3>
              <p>Baltimore, Maryland</p>
            </div>
          </motion.div>

          <motion.div className="contact-item" variants={item}>
            <i className="fas fa-phone-alt"></i>
            <div>
              <h3>Phone</h3>
              <p>+1 (202) 656-4229</p>
            </div>
          </motion.div>

          <motion.div className="social-links-contact" variants={item}>
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
          </motion.div>
        </motion.div>

        <motion.div
          className="contact-form-container"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {submitted ? (
            <motion.div className="form-success" variants={item}>
              <i className="fas fa-check-circle"></i>
              <h3>Message Sent!</h3>
              <p>
                Thank you for reaching out. I'll get back to you as soon as
                possible.
              </p>
              <button
                className="send-another-btn"
                onClick={() => setSubmitted(false)}
              >
                Send Another Message
              </button>
            </motion.div>
          ) : (
            <motion.form
              className="contact-form"
              onSubmit={handleSubmit}
              variants={item}
            >
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>

              {error && <div className="error-message">{error}</div>}

              <button type="submit" className="submit-btn" disabled={loading}>
                {loading ? "Sending..." : "Send Message"}
              </button>
            </motion.form>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
