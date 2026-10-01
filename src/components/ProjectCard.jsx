import React from 'react';
import { FaGithub, FaArrowUpRightFromSquare } from 'react-icons/fa6';
import './ProjectCard.css';

export default function ProjectCard({ title, description, tags, github, demo }) {
  const hasGithub = github && github !== '#' && github !== '';
  const hasDemo = demo && demo !== '#' && demo !== '';

  return (
    <div className="project-card">
      <div>
        <div className="project-card-header">
          <h3 className="project-title">{title}</h3>
          <div className="project-links">
            {hasGithub ? (
              <a
                href={github}
                target="_blank"
                rel="noopener noreferrer"
                className="project-icon-link"
                aria-label={`GitHub repository for ${title}`}
                title="View GitHub Repository"
              >
                <FaGithub size={20} />
              </a>
            ) : (
              <span 
                className="project-icon-link disabled"
                title="TODO: Add GitHub Repository Link"
              >
                <FaGithub size={20} />
              </span>
            )}

            {hasDemo ? (
              <a
                href={demo}
                target="_blank"
                rel="noopener noreferrer"
                className="project-icon-link"
                aria-label={`Live demo for ${title}`}
                title="View Live Demo"
              >
                <FaArrowUpRightFromSquare size={18} />
              </a>
            ) : (
              <span 
                className="project-icon-link disabled"
                title="TODO: Add Live Demo Link"
              >
                <FaArrowUpRightFromSquare size={18} />
              </span>
            )}
          </div>
        </div>

        <p className="project-description">{description}</p>
      </div>

      <div className="project-tags">
        {tags && tags.map((tag) => (
          <span key={tag} className="project-tag-pill">
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}
