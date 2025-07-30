import { forwardRef } from "react";
import "./Experience.scss";
import { ReactComponent as NextJsIcon } from "../../assets/icons/nextjs.svg";
import { ReactComponent as ReduxIcon } from "../../assets/icons/redux.svg";
import { ReactComponent as TypeScriptIcon } from "../../assets/icons/typescript.svg";
import { ReactComponent as NuxtIcon } from "../../assets/icons/nuxt.svg";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faReact,
  faJs,
  faHtml5,
  faCss3Alt,
  faSass,
  faGitAlt,
} from "@fortawesome/free-brands-svg-icons";
import { faCode } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { ReactComponent as VueIcon } from "../../assets/icons/vue.svg";

const Experience = forwardRef((props, ref) => {
  // Helper function to map technology names to icons with colors
  const getTechIcon = (tech) => {
    const icons = {
      "React.js": (
        <span style={{ color: "#61DAFB" }}>
          <FontAwesomeIcon icon={faReact} size="lg" />
        </span>
      ),
      JavaScript: (
        <span style={{ color: "#F7DF1E" }}>
          <FontAwesomeIcon icon={faJs} size="lg" />
        </span>
      ),
      TypeScript: (
        <span style={{ color: "#3178C6" }}>
          <TypeScriptIcon className="tech-icon" />
        </span>
      ),
      Redux: (
        <span>
          <ReduxIcon className="tech-icon" />
        </span>
      ),
      "HTML/CSS": (
        <span style={{ color: "#E34F26" }}>
          <FontAwesomeIcon icon={faHtml5} size="lg" />
        </span>
      ),
      CSS: (
        <span style={{ color: "#1572B6" }}>
          <FontAwesomeIcon icon={faCss3Alt} size="lg" />
        </span>
      ),
      SASS: (
        <span style={{ color: "#CC6699" }}>
          <FontAwesomeIcon icon={faSass} size="lg" />
        </span>
      ),
      Git: (
        <span style={{ color: "#F05032" }}>
          <FontAwesomeIcon icon={faGitAlt} size="lg" />
        </span>
      ),
      "Vue.js": (
        <span>
          <VueIcon className="tech-icon" />
        </span>
      ),
      "Next.js": (
        <span>
          <NextJsIcon className="tech-icon" />
        </span>
      ),
      Nuxt: (
        <span>
          <NuxtIcon className="tech-icon" />
        </span>
      ),
    };
    return icons[tech];
  };

  const experiences = [
    {
      company: "Truecaller",
      role: "SDE Frontend",
      duration: "2024 - Present",
      location: "Bengaluru, India",
      responsibilities: [
        "Migrated the TAS portal from Webpack to Vite, resulting in 60% faster local build times and a 30% reduction in initial load time, boosting developer productivity and app performance.",
        "Initiated unit testing for the TAS portal, improving code reliability and reducing QA turnaround time by 25%.",
        "Implemented a comprehensive Creative Preview dashboard supporting 16+ ad formats, cutting QA time by 40% and accelerating campaign validation.",
        "Delivered advanced creatives for Amazon Prime, including a 3D swipeable carousel and a futuristic moods-based experience, leading to a 12% uplift in CTR during pilot campaigns.",
      ],
      technologies: [
        "React.js",
        "Vue.js",
        "Nuxt",
        "JavaScript",
        "HTML/CSS",
        "SASS",
        "Git",
      ],
    },
    {
      company: "Park+",
      role: "SDE 2",
      duration: "2023 - 2024",
      location: "Gurugram, India",
      responsibilities: [
        "Programmed the 'Check Your Friends' Cars' feature, syncing 380,000 users' phonebook contacts and integrating multiple APIs to provide detailed car information, dealership origins, service history, and test drive bookings.",
        "Designed an intuitive frontend for a car test driving platform, enabling seamless bookings and generating 18,000 leads per month, boosting user engagement and lead conversion.",
        "Built the 'New Cars' feature with listings, filters, a comparison tool, and 360°/panorama views — increasing user time on page by 5% and tool usage by 8%.",
        "Created detailed screen animations, such as surprise gift envelopes with rewards like cashback, discounts, free petrol, or jackpot spins, resulting in a 10% increase in user engagement.",
        "Implemented a user challan feature enabling users to check vehicle challans with a single click and settle them in court through our platform. Approximately 10,000 challans were settled through the platform last year",
        "Established an anti-pollution and vote pledge feature, securing 200,000 pledges on the platform",
      ],
      technologies: [
        "React.js",
        "Redux",
        "Next.js",
        "SASS",
        "HTML/CSS",
        "JavaScript",
        "TypeScript",
        "Git",
      ],
    },
    {
      company: "Park+",
      role: "SDE 1",
      duration: "2022 - 2023",
      location: "Gurugram, India",
      responsibilities: [
        "Architected a unified bill payments feature supporting electricity, water, mobile recharge, and 17 other bill categories, driving 100,000+ monthly transactions and showcasing strong user adoption.",
        "Constructed a vehicle verification flow with exclusive discounts, resulting in 450,000+ verified users.",
        "Maintained the Valet App using React Native; implemented Booking and Delivery OTP flows, reducing failed deliveries by 30%.",
        "Crafted UI components for the Park+ community product, enhancing the feed page and profile features — leading to a 7% increase in user engagement and a 10% rise in profile interactions.",
        "Engineered a tool for background video uploads using pre-signed URLs, reducing media upload time by 60%.",
        "Introduced an offence reporter feature to encourage user engagement, resulting in 5,000 offences uploaded on the platform by users",
      ],
      technologies: [
        "React.js",
        "Redux",
        "Next.js",
        "SASS",
        "HTML/CSS",
        "JavaScript",
        "TypeScript",
        "Git",
      ],
    },
  ];

  return (
    <section ref={ref} className="experience">
      <h2 className="section-title">Experience</h2>
      {experiences.map((exp, index) => (
        <div key={index} className="experience-card">
          <h3>{exp.company}</h3>
          <p className="role">
            <strong>{exp.role}</strong>
          </p>
          <p className="duration">{exp.duration}</p>
          <p className="location">{exp.location}</p>
          <ul className="responsibilities">
            {exp.responsibilities.map((responsibility, idx) => (
              <li key={idx}>{responsibility}</li>
            ))}
          </ul>
          <div className="technologies">
            {exp.technologies.map((tech, idx) => (
              <span key={idx} className="tech-tag" title={tech}>
                {getTechIcon(tech)}
              </span>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
});

export default Experience;
