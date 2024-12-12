import { forwardRef } from 'react';
import './Experience.scss';
import { ReactComponent as NextJsIcon } from '../../assets/icons/nextjs.svg';
import { ReactComponent as ReduxIcon } from '../../assets/icons/redux.svg';
import { ReactComponent as TypeScriptIcon } from '../../assets/icons/typescript.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faReact, 
  faJs, 
  faHtml5, 
  faCss3Alt, 
  faSass, 
  faGitAlt
} from '@fortawesome/free-brands-svg-icons';
import { faCode } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { ReactComponent as VueIcon } from '../../assets/icons/vue.svg';


const Experience = forwardRef((props, ref) => {
  // Helper function to map technology names to icons with colors
  const getTechIcon = (tech) => {
    const icons = {
      'React.js': <span style={{ color: '#61DAFB' }}><FontAwesomeIcon icon={faReact} size="lg" /></span>,
      'JavaScript': <span style={{ color: '#F7DF1E' }}><FontAwesomeIcon icon={faJs} size="lg" /></span>,
      'TypeScript': <span style={{ color: '#3178C6' }}><TypeScriptIcon className="tech-icon" /></span>,
      'Redux': <span ><ReduxIcon className="tech-icon" /></span>,
      'HTML/CSS': <span style={{ color: '#E34F26' }}><FontAwesomeIcon icon={faHtml5} size="lg" /></span>,
      'CSS': <span style={{ color: '#1572B6' }}><FontAwesomeIcon icon={faCss3Alt} size="lg" /></span>,
      'SASS': <span style={{ color: '#CC6699' }}><FontAwesomeIcon icon={faSass} size="lg" /></span>,
      'Git': <span style={{ color: '#F05032' }}><FontAwesomeIcon icon={faGitAlt} size="lg" /></span>,
      'Vue.js': <span ><VueIcon className="tech-icon" /></span>,
      'Next.js': <span ><NextJsIcon className="tech-icon" /></span>,
    };
    return icons[tech];
  };

  const experiences = [
    {
      company: "Truecaller",
      role: "Web Engineer",
      duration: "2024 - Present",
      location: "Bengaluru, India",
      responsibilities: [
        "Developing and maintaining web applications for Ads pod",
        "Optimizing application performance and user experience",
        "Developing creatives for user engagement ads",
        "Writing clean, maintainable, and well-documented code"
      ],
      technologies: ["Vue.js", "JavaScript", "HTML/CSS","SASS"]
    },
    {
      company: "Park+",
      role: "SDE 2",
      duration: "2023 - 2024",
      location: "Gurugram, India",
      responsibilities: [
        "Programmed the 'Check Your Friends' Cars' feature, which synced 380,000 users' phonebook contacts and integrated multiple APIs to provide detailed information on user cars, dealership origins, service history, and test drive bookings",
        "Designed an intuitive frontend for a car test driving platform, facilitating seamless test drive bookings. The initiative garnered substantial success, attracting 18,000 leads per month",
        "Built web pages for showcasing new cars, featuring a comprehensive car listing with advanced filters, a car comparison tool, and integration of a 360° and panorama view feature for immersive vehicle exploration",
        "Created detailed screen animations, like surprise gift envelopes, featuring rewards such as cashback, discounts, free petrol, or jackpot spins, resulting in a 10% increase in user engagement",
        "Implemented a user challan feature enabling users to check vehicle challans with a single click and settle them in court through our platform. Approximately 10,000 challans were settled through the platform last year",
        "Established an anti-pollution and vote pledge feature, securing 200,000 pledges on the platform"
      ],
      technologies: ["React.js", "Redux", "Next.js", "SASS", "HTML/CSS","JavaScript","TypeScript","Git"]
    },
    {
      company: "Park+",
      role: "SDE 1",
      duration: "2022 - 2023",
      location: "Gurugram, India",
      responsibilities: [
        "Architected a bill payments feature, achieving 100,000 monthly transactions",
        "Crafted UI components for the Park+ community product, enhancing user interaction",
        "Engineered a tool for effortless background video uploads using pre-signed URLs, reducing media upload time by 60%",
        "Developed a quiz product from scratch, integrating sophisticated animations, result functionalities, and surprise rewards, resulting in a 6% boost in user engagement",
        "Introduced an offence reporter feature to encourage user engagement, resulting in 5,000 offences uploaded on the platform by users"
      ],
      technologies: ["React.js", "Redux", "Next.js", "SASS", "HTML/CSS","JavaScript","TypeScript","Git"]
    }
  ];

  return (
    <section ref={ref} className="experience">
      <h2 className="section-title">Experience</h2>
      {experiences.map((exp, index) => (
        <div key={index} className="experience-card">
          <h3>{exp.company}</h3>
          <p className="role"><strong>{exp.role}</strong></p>
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