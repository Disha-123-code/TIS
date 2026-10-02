import { motion } from "framer-motion";
import {
  FiBookOpen,
  FiHeart,
  FiActivity,
  FiUsers,
  FiMonitor,
  FiCompass,
} from "react-icons/fi";
import "./index.css";

const reasons = [
  {
    icon: <FiBookOpen />,
    title: "Academic Learning",
    description:
      "A CBSE-based learning environment with an emphasis on reasoning and analytical thinking.",
  },
  {
    icon: <FiHeart />,
    title: "Holistic Growth",
    description:
      "Opportunities across academics, arts, sports and student activities.",
  },
  {
    icon: <FiActivity />,
    title: "Sports",
    description:
      "A broad sports programme designed to encourage discipline, teamwork and wellbeing.",
  },
  {
    icon: <FiUsers />,
    title: "Student Community",
    description:
      "A supportive environment where students learn, collaborate and participate.",
  },
  {
    icon: <FiMonitor />,
    title: "Digital Learning",
    description:
      "Digital workstations and technology-supported learning experiences.",
  },
  {
    icon: <FiCompass />,
    title: "Future Focus",
    description:
      "Learning experiences that encourage confidence, curiosity and independent thinking.",
  },
];

function WhyTIS() {
  return (
    <section className="why-tis section-padding">
      <div className="container">
        <div className="why-header">
          <span className="section-label">
            Why TIS
          </span>

          <h2 className="section-title">
            More than a classroom.
          </h2>

          <p className="section-description">
            The TIS experience brings together learning,
            activities, community and opportunities for students
            to discover their strengths.
          </p>
        </div>

        <div className="reasons-grid">
          {reasons.map((reason, index) => (
            <motion.article
              className="reason-card"
              key={reason.title}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.08,
              }}
            >
              <div className="reason-icon">
                {reason.icon}
              </div>

              <h3>{reason.title}</h3>

              <p>{reason.description}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WhyTIS;