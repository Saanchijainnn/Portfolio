import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaCopy, FaCheck, FaLinkedin, FaGithub, FaPaperPlane } from 'react-icons/fa6';
import { fadeUp } from '../animations';
import './Contact.css';

const EMAIL_ADDRESS = 'saanchi2315@gmail.com';
const LINKEDIN_URL = 'https://linkedin.com/in/saanchijainnn';
const GITHUB_URL = 'https://github.com/saanchijainnn';

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const [status, setStatus] = useState('idle'); // idle | sending | success | error
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    _gotcha: '', // Honeypot field
  });

  // Read environment variable dynamically
  const formEndpoint = import.meta.env.VITE_FORM_ENDPOINT;

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL_ADDRESS);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      // Fallback if clipboard API is restricted
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formEndpoint) return;

    // Honeypot check: if bot fills honeypot, reject silently
    if (formData._gotcha) {
      setStatus('success');
      return;
    }

    setStatus('sending');

    try {
      const response = await fetch(formEndpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
        }),
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '', _gotcha: '' });
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="contact-section">
      <div className="container">
        {/* Section Header with default cream section title */}
        <div className="section-header">
          <h2 className="section-title">Get In Touch</h2>
          <p className="section-subtitle contact-subtitle">
            Have a project in mind, an internship opportunity, or just want to connect?
          </p>
        </div>

        <motion.div
          className="contact-container-inner"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Direct Contact Row */}
          <div className="contact-direct-card">
            <div className="contact-email-block">
              <span className="contact-email-label">
                <FaEnvelope size={16} aria-hidden="true" /> Direct Email
              </span>
              <a href={`mailto:${EMAIL_ADDRESS}`} className="contact-email-link">
                {EMAIL_ADDRESS}
              </a>
              <button
                type="button"
                className="contact-copy-btn"
                onClick={handleCopyEmail}
                aria-label={copied ? 'Email address copied' : 'Copy email address'}
              >
                {copied ? <FaCheck size={14} aria-hidden="true" /> : <FaCopy size={14} aria-hidden="true" />}
                <span>{copied ? 'Copied!' : 'Copy Email'}</span>
              </button>

              {/* Accessible live region for screen readers */}
              <span className="sr-only" role="status" aria-live="polite">
                {copied ? 'Email address copied to clipboard' : ''}
              </span>
            </div>

            <div className="contact-direct-buttons">
              <a
                href={LINKEDIN_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline contact-direct-btn"
              >
                <FaLinkedin size={18} aria-hidden="true" />
                <span>LinkedIn</span>
              </a>
              <a
                href={GITHUB_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline contact-direct-btn"
              >
                <FaGithub size={18} aria-hidden="true" />
                <span>GitHub</span>
              </a>
            </div>
          </div>

          {/* Render form below as secondary ONLY if VITE_FORM_ENDPOINT exists */}
          {formEndpoint && (
            <form className="contact-form" onSubmit={handleSubmit}>
              <h3 className="contact-form-heading">Send Me a Message</h3>

              {/* Hidden Honeypot Field */}
              <input
                type="text"
                name="_gotcha"
                value={formData._gotcha}
                onChange={handleChange}
                className="contact-honeypot"
                tabIndex={-1}
                autoComplete="off"
                aria-hidden="true"
              />

              <div className="contact-group">
                <label htmlFor="contact-name" className="contact-label">
                  Your Name
                </label>
                <input
                  type="text"
                  id="contact-name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Saanchi Jain"
                  required
                  autoComplete="name"
                  className="contact-input"
                />
              </div>

              <div className="contact-group">
                <label htmlFor="contact-email" className="contact-label">
                  Your Email
                </label>
                <input
                  type="email"
                  id="contact-email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="saanchi@example.com"
                  required
                  autoComplete="email"
                  className="contact-input"
                />
              </div>

              <div className="contact-group">
                <label htmlFor="contact-message" className="contact-label">
                  Message
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Hello Saanchi, I'd like to discuss an opportunity..."
                  required
                  rows={5}
                  className="contact-textarea"
                />
              </div>

              {/* Status feedback message */}
              {status !== 'idle' && (
                <div
                  role="status"
                  aria-live="polite"
                  className={`contact-status-msg contact-status-msg--${status}`}
                >
                  {status === 'sending' && 'Sending message...'}
                  {status === 'success' && 'Thank you! Your message has been sent successfully.'}
                  {status === 'error' && 'Something went wrong. Please try again or use direct email.'}
                </div>
              )}

              <button
                type="submit"
                disabled={status === 'sending'}
                className="btn btn-primary contact-submit-btn"
              >
                <span>{status === 'sending' ? 'Sending...' : 'Send Message'}</span>
                <FaPaperPlane size={16} aria-hidden="true" />
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}
