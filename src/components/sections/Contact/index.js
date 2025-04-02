import React, { useState } from "react";
import { LazyMotion, domAnimation, m as motion } from "framer-motion";
import "./Contact.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faMapMarkerAlt,
  faPhoneAlt,
  faCheckCircle,
  faPaperPlane,
  faExclamationTriangle,
} from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import emailjs from "@emailjs/browser";

// Replace these with your EmailJS credentials
const EMAILJS_SERVICE_ID = process.env.REACT_APP_EMAILJS_SERVICE_ID;
const EMAILJS_TEMPLATE_ID = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
const EMAILJS_PUBLIC_KEY = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;

// Initialize EmailJS
emailjs.init(EMAILJS_PUBLIC_KEY);

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    // Clear error when user starts typing
    if (error) setError(null);
  };

  const validateForm = () => {
    if (!formData.name.trim()) {
      setError("Name is required");
      return false;
    }
    if (!formData.email.trim()) {
      setError("Email is required");
      return false;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      setError("Please enter a valid email address");
      return false;
    }
    if (!formData.subject.trim()) {
      setError("Subject is required");
      return false;
    }
    if (!formData.message.trim()) {
      setError("Message is required");
      return false;
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsLoading(true);
    setError(null);

    try {
      await emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, {
        name: formData.name,
        email: formData.email,
        subject: formData.subject,
        message: formData.message,
      });

      setIsSuccess(true);
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (err) {
      setError("Failed to send message. Please try again later.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleSendAnother = () => {
    setIsSuccess(false);
    setError(null);
  };

  if (isSuccess) {
    return (
      <div className="contact-container">
        <LazyMotion features={domAnimation}>
          <motion.div className="form-success">
            <FontAwesomeIcon icon={faCheckCircle} className="fa-icon" />
            <h3>Message Sent Successfully!</h3>
            <p>Thank you for reaching out. I'll get back to you soon.</p>
            <button className="send-another-btn" onClick={handleSendAnother}>
              Send Another Message
            </button>
          </motion.div>
        </LazyMotion>
      </div>
    );
  }

  return (
    <div className="contact-container">
      <div className="section-title-container">
        <h2 className="section-title">Get In Touch</h2>
      </div>
      <p className="section-subtitle">
        Feel free to reach out to me for any questions or opportunities!
      </p>

      <LazyMotion features={domAnimation}>
        <motion.div className="contact-content">
          <div className="contact-info">
            <motion.div className="contact-item">
              <FontAwesomeIcon icon={faEnvelope} className="fa-icon" />
              <div>
                <h3>Email</h3>
                <p>venkatpantham7@gmail.com</p>
              </div>
            </motion.div>

            <motion.div className="contact-item">
              <FontAwesomeIcon icon={faMapMarkerAlt} className="fa-icon" />
              <div>
                <h3>Location</h3>
                <p>Baltimore, Maryland</p>
              </div>
            </motion.div>

            <motion.div className="contact-item">
              <FontAwesomeIcon icon={faPhoneAlt} className="fa-icon" />
              <div>
                <h3>Phone</h3>
                <p>+1 (202) 656-4229</p>
              </div>
            </motion.div>

            <div className="social-links-contact">
              <a
                href="https://github.com/venkatpantham"
                target="_blank"
                rel="noreferrer"
                aria-label="Visit my GitHub profile"
              >
                <FontAwesomeIcon icon={faGithub} className="fa-icon" />
              </a>
              <a
                href="https://linkedin.com/in/venkat-pantham"
                target="_blank"
                rel="noreferrer"
                aria-label="Connect with me on LinkedIn"
              >
                <FontAwesomeIcon icon={faLinkedin} className="fa-icon" />
              </a>
              <a
                href="mailto:venkatpantham7@gmail.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Send me an email"
              >
                <FontAwesomeIcon icon={faEnvelope} className="fa-icon" />
              </a>
            </div>
          </div>

          <motion.div className="contact-form-container">
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Name *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Your name"
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="your.email@example.com"
                />
              </div>
              <div className="form-group">
                <label htmlFor="subject">Subject *</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  placeholder="What is this regarding?"
                />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message *</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  placeholder="Your message here..."
                />
              </div>
              {error && (
                <motion.div className="error-message">
                  <FontAwesomeIcon
                    icon={faExclamationTriangle}
                    className="fa-icon"
                  />
                  {error}
                </motion.div>
              )}
              <motion.button
                type="submit"
                className="submit-btn"
                disabled={isLoading}
              >
                {isLoading ? "Sending..." : "Send Message"}
                <FontAwesomeIcon icon={faPaperPlane} className="fa-icon" />
              </motion.button>
            </form>
          </motion.div>
        </motion.div>
      </LazyMotion>
    </div>
  );
};

export default Contact;
