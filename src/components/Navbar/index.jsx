import { useState } from "react";
import { FiMenu, FiX, FiArrowUpRight } from "react-icons/fi";
import "./index.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="navbar">
      <div className="nav-container">
        <a href="#home" className="logo" onClick={closeMenu}>
          <span className="logo-mark">T</span>

          <span className="logo-text">
            TULAS
            <small>INTERNATIONAL SCHOOL</small>
          </span>
        </a>

        <nav className={`nav-links ${menuOpen ? "active" : ""}`}>
          <a href="#home" onClick={closeMenu}>
            Home
          </a>

          <a href="#about" onClick={closeMenu}>
            About
          </a>

          <a href="#academics" onClick={closeMenu}>
            Academics
          </a>

          <a href="#facilities" onClick={closeMenu}>
            Facilities
          </a>

          <a href="#activities" onClick={closeMenu}>
            Activities
          </a>

          <a href="#contact" onClick={closeMenu}>
            Contact
          </a>

          <a
            href="#admissions"
            className="nav-cta"
            onClick={closeMenu}
          >
            Apply Now
            <FiArrowUpRight />
          </a>
        </nav>

        <button
          className="mobile-menu-btn"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
        >
          {menuOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>
    </header>
  );
}

export default Navbar;