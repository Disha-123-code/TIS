import Navbar from "./components/Navbar/index.jsx";
import Hero from "./components/Hero/index.jsx";
import About from "./components/About/index.jsx";
import Academics from "./components/Academics/index.jsx";
import Facilities from "./components/Facilities/index.jsx";
import WhyTIS from "./components/WhyTIS/index.jsx";
import Activities from "./components/Activities/index.jsx";
import Testimonials from "./components/Testimonials/index.jsx";
import AdmissionsCTA from "./components/AdmissionsCTA/index.jsx";
import Contact from "./components/Contact/index.jsx";
import Footer from "./components/Footer/index.jsx";
import ScrollProgress from "./components/ScrollProgress/index.jsx";

import "./App.css";

function App() {
  return (
    <>
      <ScrollProgress />

      <Navbar />

      <main>
        <Hero />
        <About />
        <Academics />
        <Facilities />
        <WhyTIS />
        <Activities />
        <Testimonials />
        <AdmissionsCTA />
        <Contact />
      </main>

      <Footer />
    </>
  );
}

export default App;