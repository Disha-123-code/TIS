import { motion } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";
import { stats } from "../../data/schoolData";
import "./index.css";

function About() {
  return (
    <section className="about section-padding" id="about">
      <div className="container">
        <div className="about-grid">
          <motion.div
            className="about-image"
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <img
              src="/images/campus.jpg"
              alt="Tulas International School campus"
            />

            <div className="about-image-card">
              <strong>Since 2012</strong>
              <span>Growing with purpose</span>
            </div>
          </motion.div>

          <motion.div
            className="about-content"
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="section-label">About TIS</span>

            <h2 className="section-title">
              Where knowledge meets character.
            </h2>

            <p className="section-description">
              Tulas International School is a co-educational boarding
              and day school in Dehradun following the CBSE curriculum.
              The school combines academic learning with opportunities
              for sports, arts, activities and personal development.
            </p>

            <p className="section-description">
              TIS describes its educational approach as a modern
              Gurukul, bringing together contemporary learning
              facilities with values, discipline and character.
            </p>

            <a
              href="#academics"
              className="text-link"
            >
              Discover our approach
              <FiArrowUpRight />
            </a>
          </motion.div>
        </div>

        <div className="stats-grid">
          {stats.map((stat, index) => (
            <motion.div
              className="stat-item"
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
            >
              <strong>{stat.value}</strong>
              <span>{stat.label}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default About;