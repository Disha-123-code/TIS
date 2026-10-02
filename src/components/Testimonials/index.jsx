import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import { useState } from "react";

import "./index.css";

const testimonials = [
  {
    name: "Tashi Tsering",
    relation: "F/O Jigmet Skaldon",
    text: "I would like to convey a big thanks to the Management and Teachers of Tulas International School for taking good care of my son.",
  },
  {
    name: "Namita Agarwal",
    relation: "M/O Krishna Agarwal",
    text: "Tulas gives a comprehensive environment for our child to grow. The sports, academics and extra-curricular activities have helped Krishna in knowing himself better.",
  },
  {
    name: "Sandeep Kumar",
    relation: "F/O Aryan",
    text: "Our experience is very amazing with school. Staff is very cooperative and supportive. Our son always admires the school whenever we talk with him.",
  },
  {
    name: "Pinky Sharma",
    relation: "M/O Swastik Sharma",
    text: "I am happy and satisfied with the wonderful experience of my son in this school. Teachers are very good and supportive.",
  },
];

function Testimonials() {
  const [active, setActive] = useState(0);

  const next = () => {
    setActive((current) =>
      current === testimonials.length - 1 ? 0 : current + 1
    );
  };

  const previous = () => {
    setActive((current) =>
      current === 0 ? testimonials.length - 1 : current - 1
    );
  };

  const testimonial = testimonials[active];

  return (
    <section className="testimonials section">
      <div className="section-container">
        <div className="testimonial-header reveal">
          <div>
            <span className="eyebrow">PARENT VOICES</span>

            <h2 className="section-title">
              What our community
              <span>says.</span>
            </h2>
          </div>

          <div className="testimonial-controls">
            <button
              onClick={previous}
              aria-label="Previous testimonial"
            >
              <FiArrowLeft />
            </button>

            <button
              onClick={next}
              aria-label="Next testimonial"
            >
              <FiArrowRight />
            </button>
          </div>
        </div>

        <div className="testimonial-box reveal">
          <span className="quote-mark">“</span>

          <blockquote>
            {testimonial.text}
          </blockquote>

          <div className="testimonial-person">
            <div className="testimonial-avatar">
              {testimonial.name.charAt(0)}
            </div>

            <div>
              <strong>{testimonial.name}</strong>
              <span>{testimonial.relation}</span>
            </div>
          </div>

          <div className="testimonial-count">
            <span>
              {String(active + 1).padStart(2, "0")}
            </span>
            <div></div>
            <span>
              {String(testimonials.length).padStart(2, "0")}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;