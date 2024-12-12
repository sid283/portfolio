import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Hero from './components/Hero/Hero';
import Experience from './components/Experience/Experience';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';
import Navbar from './components/Navbar/Navbar';
import './App.scss';

gsap.registerPlugin(ScrollTrigger);

function App() {
  const headerRef = useRef(null);
  const experienceRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  useEffect(() => {
    // Initial animation for header
    gsap.from(headerRef.current, {
      duration: 1.5,
      y: 100,
      opacity: 0,
      ease: "power4.out"
    });

    // Scroll-triggered animations
    gsap.from(".experience-card", {
      scrollTrigger: {
        trigger: experienceRef.current,
        start: "top center",
        toggleActions: "play none none reverse"
      },
      y: 50,
      opacity: 0,
      duration: 1,
      stagger: 0.2
    });

    // Project cards animation
    gsap.from(".project-card", {
      scrollTrigger: {
        trigger: projectsRef.current,
        start: "top center",
        toggleActions: "play none none reverse"
      },
      scale: 0.8,
      opacity: 0,
      duration: 0.8,
      stagger: 0.3
    });

    // Add contact section animation
    gsap.from(".contact-section", {
      scrollTrigger: {
        trigger: contactRef.current,
        start: "top center",
        toggleActions: "play none none reverse"
      },
      y: 50,
      opacity: 0,
      duration: 1
    });
  }, []);

  return (
    <div className="portfolio">
      <Navbar />
      <section id="hero">
        <Hero ref={headerRef} />
      </section>
      <section id="experience">
        <Experience ref={experienceRef} />
      </section>
      <section id="contact">
        <Contact ref={contactRef} />
      </section>
    </div>
  );
}

export default App;
