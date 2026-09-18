import React from 'react';
import { FaXTwitter, FaGithub, FaLinkedin } from 'react-icons/fa6';
import './Footer.css';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: 'X',
      icon: <FaXTwitter size={20} />,
      url: 'https://x.com/saanchijainnn',
      ariaLabel: 'X profile saanchijainnn',
    },
    {
      name: 'GitHub',
      icon: <FaGithub size={20} />,
      url: 'https://github.com/saanchijainnn',
      ariaLabel: 'GitHub profile',
    },
    {
      name: 'LinkedIn',
      icon: <FaLinkedin size={20} />,
      url: 'https://linkedin.com/in/saanchijainnn',
      ariaLabel: 'LinkedIn profile',
    },
  ];

  return (
    <footer className="footer-container">
      <div className="container footer-content">
        <div className="footer-brand">
          <span className="footer-logo">Saanchi</span>
        </div>

        <div className="footer-socials">
          {socialLinks.map((social) => (
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
