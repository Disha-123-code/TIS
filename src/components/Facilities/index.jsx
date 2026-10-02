import { motion } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";
import { facilities } from "../../data/schoolData";
import "./index.css";

function Facilities() {
  return (
    <section className="facilities section-padding" id="facilities">
      <div className="container">
        <div className="facilities-header">
          <div>
            <span className="section-label">
              Campus & Facilities
            </span>

            <h2 className="section-title">
              Spaces designed to inspire.
            </h2>
          </div>

          <p className="section-description">
            From technology-enabled classrooms to sports,
            laboratories, libraries and residential facilities,
            TIS provides spaces for students to learn and grow.
          </p>
        </div>

        <div className="facility-grid">
          {facilities.map((facility, index) => (
            <motion.article
              className={`facility-card facility-${index}`}
              key={facility.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.08,
              }}
            >
              <img
                src={facility.image}
                alt={facility.title}
              />

              <div className="facility-overlay">
                <div>
                  <h3>{facility.title}</h3>
                  <p>{facility.description}</p>
                </div>

                <span className="facility-icon">
                  <FiArrowUpRight />
                </span>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Facilities;