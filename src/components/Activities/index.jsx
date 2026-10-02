import { motion } from "framer-motion";
import { activities } from "../../data/schoolData";
import "./index.css";

function Activities() {
  return (
    <section className="activities section-padding" id="activities">
      <div className="container">
        <div className="activities-heading">
          <span className="section-label">
            Life at TIS
          </span>

          <h2 className="section-title">
            Discover beyond academics.
          </h2>

          <p className="section-description">
            Sports, clubs, arts and student activities create
            opportunities for students to explore interests,
            develop confidence and experience campus life.
          </p>
        </div>

        <div className="activities-grid">
          {activities.map((activity, index) => (
            <motion.article
              className="activity-card"
              key={activity.title}
              initial={{ opacity: 0, scale: 0.94 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
              }}
            >
              <img
                src={activity.image}
                alt={activity.title}
              />

              <div className="activity-content">
                <span>0{index + 1}</span>

                <h3>{activity.title}</h3>

                <p>{activity.description}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Activities;