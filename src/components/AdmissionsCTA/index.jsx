import { motion } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";
import "./index.css";

function AdmissionsCTA() {
  return (
    <section className="admissions" id="admissions">
      <div className="admissions-image">
        <img
          src="/images/students.jpg"
          alt="Students at Tulas International School"
        />
      </div>

      <div className="admissions-overlay"></div>

      <motion.div
        className="container admissions-content"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <span className="section-label">
          Admissions
        </span>

        <h2>
          Begin your journey
          <br />
          at Tulas.
        </h2>

        <p>
          Explore the TIS experience and discover opportunities
          for learning, growth and participation.
        </p>

        <div className="admissions-buttons">
          <a
            href="https://admission.tis.edu.in/"
            target="_blank"
            rel="noreferrer"
            className="primary-btn"
          >
            Apply Now
            <FiArrowUpRight />
          </a>

          <a href="#contact" className="secondary-btn">
            Enquire Now
          </a>
        </div>
      </motion.div>
    </section>
  );
}

export default AdmissionsCTA;