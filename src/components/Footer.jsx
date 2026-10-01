import { FaXTwitter, FaGithub, FaLinkedin } from 'react-icons/fa6';
import './Footer.css';

// Static social links array extracted outside component
const SOCIAL_LINKS = [
  {
    name: 'X',
    icon: <FaXTwitter size={20} aria-hidden="true" />,
    url: 'https://x.com/saanchijainnn',
    ariaLabel: 'Saanchi on X',
  },
  {
    name: 'GitHub',
    icon: <FaGithub size={20} aria-hidden="true" />,
    url: 'https://github.com/saanchijainnn',
    ariaLabel: 'Saanchi on GitHub',
  },
  {
    name: 'LinkedIn',
    icon: <FaLinkedin size={20} aria-hidden="true" />,
    url: 'https://linkedin.com/in/saanchijainnn',
    ariaLabel: 'Saanchi on LinkedIn',
  },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer-container">
      <div className="container footer-content">
        <div className="footer-brand">
          <span className="footer-logo">Saanchi</span>
          <span className="footer-built-with">Built with React and Vite</span>
        </div>

        <div className="footer-socials">
          {SOCIAL_LINKS.map((social) => (
            <a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon-link"
              aria-label={social.ariaLabel}
            >
              {social.icon}
            </a>
          ))}
        </div>

        <div className="footer-copyright">
          <p>© {currentYear} Saanchi. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
