import { motion } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";
import { academicPrograms } from "../../data/schoolData";
import "./index.css";

function Academics() {
  return (
    <section className="academics section-padding" id="academics">
      <div className="container">
        <div className="section-heading-row">
          <div>
            <span className="section-label">
              Academic Journey
            </span>

            <h2 className="section-title">
              Learning with purpose.
            </h2>
          </div>

          <p className="section-description">
            TIS follows the CBSE course structure while emphasising
            reasoning, analytical thinking, project-based learning
            and experiential education.
          </p>
        </div>

        <div className="academic-grid">
          {academicPrograms.map((program, index) => (
            <motion.article
              className="academic-card"
              key={program.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.12,
              }}
            >
              <span className="academic-number">
                0{index + 1}
              </span>

              <div>
                <span className="academic-subtitle">
                  {program.subtitle}
                </span>

                <h3>{program.title}</h3>

                <p>{program.description}</p>

                <a href="#contact">
                  Learn more
                  <FiArrowUpRight />
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Academics;