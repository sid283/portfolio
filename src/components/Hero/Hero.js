import { forwardRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faReact, 
  faJs, 
  faHtml5, 
  faCss3Alt, 
  faSass, 
  faGitAlt,
  
} from '@fortawesome/free-brands-svg-icons';
import { faCode, faEnvelope,faFileDownload} from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import './Hero.scss';
import { ReactComponent as NextJsIcon } from '../../assets/icons/nextjs.svg';
import { ReactComponent as ReduxIcon } from '../../assets/icons/redux.svg';
import { ReactComponent as TypeScriptIcon } from '../../assets/icons/typescript.svg';
import { ReactComponent as VueIcon } from '../../assets/icons/vue.svg';

const Hero = forwardRef((props, ref) => {
  return (
    <header ref={ref} className="hero">
      <h1>Hi, I'm Siddalinga Koudi</h1>
      <h2>Web Engineer @ Truecaller</h2>
      <p className="intro">Passionate Frontend Developer with experience in crafting responsive web applications using React and Next.js. Committed to enhancing user experience through thoughtful design and robust functionality.
</p>
      
      {/* Add social links */}
      <div className="social-links">
        <a 
          href="https://github.com/sid283" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="social-link"
          aria-label="GitHub Profile"
        >
          <FontAwesomeIcon icon={faGithub} size="2x" />
        </a>
        <a 
          href="https://linkedin.com/in/siddalinga" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="social-link"
          aria-label="LinkedIn Profile"
        >
          <FontAwesomeIcon icon={faLinkedin} size="2x" />
        </a>
        <a 
          href="mailto:siddaling.gkoudi@gmail.com" 
          className="social-link"
          aria-label="Email Contact"
        >
          <FontAwesomeIcon icon={faEnvelope} size="2x" />
        </a>
        <a 
          href="https://drive.google.com/file/d/1FcgjLAWr7UvcsqRVKXV52-J0RY8rmld0/view?usp=sharing"
          download="Siddalinga_Koudi_Resume.pdf"
          className="social-link"
          aria-label="Download Resume"
          target="_blank"
        >
          <FontAwesomeIcon icon={faFileDownload} size="2x" />
        </a>
      </div>

      {/* Add a CTA button */}
      <button className="cta-button" onClick={() => window.location.href = '#projects'}>
        <span>View My Work</span>
        <FontAwesomeIcon icon={faCode} className="cta-icon" />
      </button>

      {/* Add tech stack */}
      <div className="tech-stack">
        <p>Tech I love working with:</p>
        <div className="tech-icons">
          <span><FontAwesomeIcon icon={faReact} />React</span>
          <span><NextJsIcon />Next.js</span>
          <span><FontAwesomeIcon icon={faJs} />JavaScript</span>
          <span><FontAwesomeIcon icon={faHtml5} />HTML</span>
          <span><FontAwesomeIcon icon={faCss3Alt} />CSS</span>
          <span><FontAwesomeIcon icon={faSass} />SCSS</span>
          <span><ReduxIcon />Redux</span>
          <span><TypeScriptIcon />TypeScript</span>
          <span><FontAwesomeIcon icon={faGitAlt} />Git</span>
          <span><VueIcon />Vue.js</span>
        </div>
      </div>
    </header>
  );
});

export default Hero; 