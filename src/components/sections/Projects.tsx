import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Github } from 'lucide-react';
import SectionLabel from '../ui/SectionLabel';
import Tag from '../ui/Tag';
import PillButton from '../ui/PillButton';
import { PORTFOLIO_DATA } from '../../data/portfolio';

export const Projects: React.FC = () => {
  const { projects } = PORTFOLIO_DATA;
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  return (
    <section id="projects" aria-labelledby="projects-label" className="section-wrapper">
      <div className="content-container">
        <SectionLabel id="projects-label">✦ SELECTED WORK ✦</SectionLabel>

        <h2
          style={{
            fontSize: 'clamp(2.8rem, 6.5vw, 5rem)',
            fontWeight: 900,
            marginBottom: 'clamp(3rem, 6vw, 4.5rem)',
            letterSpacing: '-0.03em',
          }}
        >
          PROJECTS
        </h2>

        {/* Two-Column Project Showcase Stack */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'clamp(4rem, 8vw, 6.5rem)' }}>
          {projects.map((project, index) => {
            const isHovered = hoveredId === project.id;

            return (
              <motion.article
                key={project.id}
                onMouseEnter={() => setHoveredId(project.id)}
                onMouseLeave={() => setHoveredId(null)}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                style={{
                  position: 'relative',
                  borderBottom: index < projects.length - 1 ? '1px solid var(--hairline)' : 'none',
                  paddingBottom: index < projects.length - 1 ? 'clamp(3rem, 6vw, 5rem)' : '0',
                }}
              >
                {/* Top-Right Index Number */}
                <span
                  style={{
                    position: 'absolute',
                    top: 0,
                    right: 0,
                    fontFamily: 'var(--font-display)',
                    fontSize: '1.25rem',
                    fontWeight: 800,
                    color: 'var(--text-muted)',
                    opacity: 0.6,
                  }}
                  aria-hidden="true"
                >
                  {project.number}
                </span>

                {/* Two Column Grid */}
                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 460px), 1fr))',
                    gap: 'clamp(2rem, 5vw, 4.5rem)',
                    alignItems: 'center',
                  }}
                >
                  {/* Left Column: Mockup Image Frame */}
                  <div
                    style={{
                      position: 'relative',
                      borderRadius: '22px',
                      border: '1px solid var(--hairline-strong)',
                      backgroundColor: '#0c0c0c',
                      overflow: 'hidden',
                      boxShadow: isHovered
                        ? '0 16px 40px rgba(0, 0, 0, 0.6), 0 0 25px rgba(204, 255, 0, 0.15)'
                        : '0 10px 30px rgba(0, 0, 0, 0.4)',
                      transition: 'all 0.4s ease',
                      aspectRatio: '16 / 10',
                      maxHeight: '420px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <img
                      src={project.image}
                      alt={`${project.title} interface preview`}
                      loading="lazy"
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        objectPosition: 'top center',
                        transition: 'transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)',
                        transform: isHovered ? 'scale(1.04)' : 'scale(1)',
                      }}
                    />

                    {/* Subtle Gradient Shade at bottom */}
                    <div
                      aria-hidden="true"
                      style={{
                        position: 'absolute',
                        inset: 0,
                        background: 'linear-gradient(to top, rgba(12, 12, 12, 0.5) 0%, transparent 40%)',
                        pointerEvents: 'none',
                      }}
                    />
                  </div>

                  {/* Right Column: Project Typography & Metrics */}
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
                    {/* Project Title */}
                    <h3
                      style={{
                        fontSize: 'clamp(2.2rem, 4.2vw, 3.6rem)',
                        fontWeight: 900,
                        letterSpacing: '-0.03em',
                        color: '#FFFFFF',
                        margin: 0,
                        lineHeight: 1.05,
                      }}
                    >
                      {project.title}
                    </h3>

                    {/* Badge Pill with Lime Dot */}
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                      <span
                        style={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '0.6rem',
                          backgroundColor: 'rgba(255, 255, 255, 0.05)',
                          border: '1px solid var(--hairline)',
                          padding: '0.35rem 0.85rem',
                          borderRadius: '999px',
                          fontFamily: 'var(--font-ui)',
                          fontSize: '0.82rem',
                          fontWeight: 600,
                          letterSpacing: '0.12em',
                          color: '#E4E4E7',
                          textTransform: 'uppercase',
                        }}
                      >
                        <span
                          style={{
                            width: 6,
                            height: 6,
                            borderRadius: '50%',
                            backgroundColor: 'var(--c-lime)',
                            boxShadow: '0 0 8px var(--c-lime)',
                          }}
                          aria-hidden="true"
                        />
                        <span>{project.badge}</span>
                      </span>
                    </div>

                    {/* Project Description */}
                    <p
                      style={{
                        fontFamily: 'var(--font-ui)',
                        fontSize: 'clamp(0.95rem, 1.2vw, 1.05rem)',
                        lineHeight: 1.75,
                        color: 'var(--text-body)',
                        margin: 0,
                        maxWidth: '560px',
                      }}
                    >
                      {project.desc}
                    </p>

                    {/* Stat Metric Row (Matching Reference) */}
                    {project.statNumber && (
                      <div
                        style={{
                          display: 'flex',
                          alignItems: 'baseline',
                          gap: '1.2rem',
                          padding: '0.5rem 0',
                        }}
                      >
                        <span
                          style={{
                            fontFamily: 'var(--font-display)',
                            fontSize: 'clamp(2.5rem, 4.2vw, 3.5rem)',
                            fontWeight: 900,
                            color: 'var(--c-lime)',
                            lineHeight: 1,
                          }}
                        >
                          {project.statNumber}
                        </span>
                        <span
                          style={{
                            fontFamily: 'var(--font-ui)',
                            fontSize: '0.82rem',
                            letterSpacing: '0.15em',
                            textTransform: 'uppercase',
                            fontWeight: 600,
                            color: 'var(--text-muted)',
                            maxWidth: '220px',
                            lineHeight: 1.35,
                          }}
                        >
                          {project.statLabel}
                        </span>
                      </div>
                    )}

                    {/* Tech Stack Tags */}
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                      {project.tags.map((tag) => (
                        <Tag key={tag}>{tag}</Tag>
                      ))}
                    </div>

                    {/* Action Buttons */}
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '1rem',
                        flexWrap: 'wrap',
                        paddingTop: '0.6rem',
                      }}
                    >
                      {project.url && (
                        <PillButton
                          href={project.url}
                          variant="primary"
                          icon={<ArrowUpRight size={18} aria-hidden="true" />}
                          ariaLabel={`View live demo of ${project.title}`}
                        >
                          View live demo
                        </PillButton>
                      )}

                      {project.githubUrl && (
                        <PillButton
                          href={project.githubUrl}
                          variant="secondary"
                          icon={<Github size={18} aria-hidden="true" />}
                          ariaLabel={`View source code of ${project.title} on GitHub`}
                        >
                          Source code
                        </PillButton>
                      )}
                    </div>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
