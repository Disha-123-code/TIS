import {
  FiInstagram,
  FiFacebook,
  FiYoutube,
  FiArrowUpRight,
} from "react-icons/fi";
import "./index.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-main">
          <div className="footer-brand">
            <a href="#home" className="footer-logo">
              <span className="logo-mark">T</span>

              <span className="logo-text">
                TULAS
                <small>INTERNATIONAL SCHOOL</small>
              </span>
            </a>

            <p>
              A modern learning environment where students
              are encouraged to learn, explore and grow.
            </p>
          </div>

          <div className="footer-column">
            <h3>Explore</h3>

            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#academics">Academics</a>
            <a href="#facilities">Facilities</a>
          </div>

          <div className="footer-column">
            <h3>Discover</h3>

            <a href="#activities">Activities</a>
            <a href="#admissions">Admissions</a>
            <a href="#contact">Contact</a>
          </div>

          <div className="footer-column footer-contact">
            <h3>Contact</h3>

            <a href="tel:+919837983791">
              +91-9837983791
            </a>

            <a href="mailto:info@tis.edu.in">
              info@tis.edu.in
            </a>

            <span>
              Dhoolkot, P.O – Selaqui,
              Chakrata Road, Dehradun
            </span>
          </div>
        </div>

        <div className="footer-bottom">
          <p>
            © 2026 Tulas International School.
            All Rights Reserved.
          </p>

          <div className="social-links">
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
            >
              <FiInstagram />
            </a>

            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noreferrer"
              aria-label="Facebook"
            >
              <FiFacebook />
            </a>

            <a
              href="https://www.youtube.com/"
              target="_blank"
              rel="noreferrer"
              aria-label="YouTube"
            >
              <FiYoutube />
            </a>

            <a href="#home" aria-label="Back to top">
              <FiArrowUpRight />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;