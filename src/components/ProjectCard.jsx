import { FaGithub, FaArrowUpRightFromSquare } from 'react-icons/fa6';
import './ProjectCard.css';

export default function ProjectCard({
  title,
  problem,
  description,
  highlight,
  tags = [],
  github,
  demo,
  image,
  category,
  isFeatured = false,
}) {
  // Build links array from truthy URLs only to prevent rendering disabled/empty links
  const links = [
    github && {
      key: 'github',
      label: `${title} on GitHub`,
      url: github,
      icon: <FaGithub size={18} aria-hidden="true" />,
    },
    demo && {
      key: 'demo',
      label: `${title} Live Demo`,
      url: demo,
      icon: <FaArrowUpRightFromSquare size={16} aria-hidden="true" />,
    },
  ].filter(Boolean);

  return (
    <article className={`project-card ${isFeatured ? 'project-card--featured' : ''}`}>
      {/* Optional screenshot rendered at top with aspect-ratio 16/9, lazy loading */}
      {image && (
        <div className="project-card-image-wrapper">
          <img
            src={image}
            alt={`Screenshot of ${title}`}
            className="project-card-image"
            loading="lazy"
            width="600"
            height="337"
          />
        </div>
      )}

      <div className="project-card-body">
        <div className="project-card-header">
          <div>
            {category && <span className="project-category-badge">{category}</span>}
            <h3 className="project-title">{title}</h3>
          </div>

          {/* Render mapped links array only if valid URLs exist */}
          {links.length > 0 && (
            <div className="project-links">
              {links.map((link) => (
                <a
                  key={link.key}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-icon-link"
                  aria-label={link.label}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          )}
        </div>

        {/* One-line problem statement */}
        {problem && <p className="project-problem">{problem}</p>}

        {/* What I built description */}
        <p className="project-description">{description}</p>

        {/* Technical highlight */}
        {highlight && (
          <div className="project-highlight">
            <span className="project-highlight-label">Highlight:</span> {highlight}
          </div>
        )}

        {/* Tech Pills */}
        <div className="project-tags">
          {tags.map((tag) => (
            <span key={tag} className="project-tag-pill">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
}
