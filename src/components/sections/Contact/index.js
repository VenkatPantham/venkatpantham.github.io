import React, { useState } from "react";
import { LazyMotion, domAnimation } from "framer-motion";
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

  return (
    <div className="contact-container">
      <div className="section-title-container">
        <h2 className="section-title">Get In Touch</h2>
      </div>
      <p className="section-subtitle">
        Feel free to reach out if you have any questions
      </p>

      <div className="contact-content">
        <div className="contact-info">
          <div className="contact-item">
            <FontAwesomeIcon icon={faEnvelope} className="fa-icon" />
            <div>
              <h3>Email</h3>
              <p>venkatpantham7@gmail.com</p>
            </div>
          </div>

          <div className="contact-item">
            <FontAwesomeIcon icon={faMapMarkerAlt} className="fa-icon" />
            <div>
              <h3>Location</h3>
              <p>Baltimore, Maryland</p>
            </div>
          </div>

          <div className="contact-item">
            <FontAwesomeIcon icon={faPhoneAlt} className="fa-icon" />
            <div>
              <h3>Phone</h3>
              <p>+1 (202) 656-4229</p>
            </div>
          </div>

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

        <LazyMotion features={domAnimation}>
          <div className="contact-form-container">
            {submitted ? (
              <div className="form-success">
                <FontAwesomeIcon icon={faCheckCircle} className="fa-icon" />
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
              </div>
            ) : (
              <form className="contact-form" onSubmit={handleSubmit}>
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
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                  ></textarea>
                </div>

                {error && (
                  <div className="error-message">
                    <FontAwesomeIcon
                      icon={faExclamationTriangle}
                      className="fa-icon"
                    />
                    {error}
                  </div>
                )}

                <button type="submit" className="submit-btn" disabled={loading}>
                  {loading ? "Sending..." : "Send Message"}
                  <span className="submit-icon">
                    <FontAwesomeIcon icon={faPaperPlane} className="fa-icon" />
                  </span>
                </button>
              </form>
            )}
          </div>
        </LazyMotion>
      </div>
    </div>
  );
};

export default Contact;
