import { motion } from "framer-motion";
import { FiArrowDown, FiArrowUpRight } from "react-icons/fi";
import "./index.css";

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-background">
        <img
          src="/images/hero.jpg"
          alt="Tulas International School campus"
        />
      </div>

      <div className="hero-overlay"></div>

      <div className="container hero-content">
        <motion.div
          className="hero-text"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="hero-label">
            THE MODERN GURUKUL
          </span>

          <h1>
            Education that
            <span> shapes tomorrow.</span>
          </h1>

          <p>
            A learning environment where academic excellence,
            character and opportunity come together to help students
            discover their potential.
          </p>

          <div className="hero-buttons">
            <a href="#about" className="primary-btn">
              Explore TIS
              <FiArrowUpRight />
            </a>

            <a href="#admissions" className="secondary-btn">
              Apply Now
            </a>
          </div>
        </motion.div>
      </div>

      <a href="#about" className="scroll-indicator">
        <span>Scroll to explore</span>
        <FiArrowDown />
      </a>
    </section>
  );
}

export default Hero;