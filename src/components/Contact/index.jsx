import { useState } from "react";
import { FiMail, FiMapPin, FiPhone } from "react-icons/fi";
import { motion } from "framer-motion";
import "./index.css";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    setSubmitted(true);

    setFormData({
      name: "",
      email: "",
      phone: "",
      message: "",
    });
  };

  return (
    <section className="contact section-padding" id="contact">
      <div className="container">
        <div className="contact-grid">
          <motion.div
            className="contact-info"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="section-label">
              Contact TIS
            </span>

            <h2 className="section-title">
              Let's start a conversation.
            </h2>

            <p className="section-description">
              Have questions about admissions or life at TIS?
              Get in touch with the school.
            </p>

            <div className="contact-items">
              <div className="contact-item">
                <FiMapPin />

                <div>
                  <strong>Address</strong>
                  <span>
                    Dhoolkot, P.O – Selaqui,
                    Chakrata Road, Dehradun-248011,
                    Uttarakhand
                  </span>
                </div>
              </div>

              <div className="contact-item">
                <FiPhone />

                <div>
                  <strong>Phone</strong>

                  <a href="tel:+919837983791">
                    +91-9837983791
                  </a>

                  <a href="tel:01352699444">
                    0135-2699444
                  </a>
                </div>
              </div>

              <div className="contact-item">
                <FiMail />

                <div>
                  <strong>Email</strong>

                  <a href="mailto:info@tis.edu.in">
                    info@tis.edu.in
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="contact-form-wrapper"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <form
              className="contact-form"
              onSubmit={handleSubmit}
            >
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">
                    Full Name
                  </label>

                  <input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Your name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">
                    Email
                  </label>

                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="you@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="phone">
                  Phone
                </label>

                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  placeholder="Your phone number"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">
                  Message
                </label>

                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  placeholder="How can we help?"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="primary-btn submit-btn"
              >
                Send Enquiry
              </button>

              {submitted && (
                <p className="success-message">
                  Thank you! Your enquiry has been
                  recorded for this demo.
                </p>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Contact;