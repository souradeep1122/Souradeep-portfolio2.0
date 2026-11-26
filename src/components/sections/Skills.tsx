import React from 'react';
import { motion } from 'framer-motion';
import SectionLabel from '../ui/SectionLabel';
import Tag from '../ui/Tag';
import { PORTFOLIO_DATA } from '../../data/portfolio';
import { useReducedMotionSafe } from '../../hooks/useReducedMotionSafe';

export const Skills: React.FC = () => {
  const { skillGroups, marqueeSkills } = PORTFOLIO_DATA;
  const prefersReduced = useReducedMotionSafe();

  return (
    <section id="skills" aria-labelledby="skills-label" className="section-wrapper" style={{ overflow: 'hidden' }}>
      <div className="content-container">
        <SectionLabel id="skills-label">✦ MY TECH STACK ✦</SectionLabel>

        <div style={{ marginBottom: 'clamp(2rem, 5vw, 3.5rem)' }}>
          <h2
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(3rem, 7vw, 6rem)',
              fontWeight: 900,
              lineHeight: 0.95,
              letterSpacing: '-0.03em',
              margin: '0 0 1rem',
            }}
          >
            SKILLS
          </h2>
          <p
            style={{
              fontFamily: 'var(--font-ui)',
              fontSize: 'clamp(1rem, 1.4vw, 1.15rem)',
              color: 'var(--text-muted)',
              maxWidth: '680px',
              margin: 0,
            }}
          >
            The languages, frameworks, databases, and design software I leverage to bring bold ideas to life.
          </p>
        </div>
      </div>

      {/* Infinite Horizontal Marquee in Outlined Text */}
      <div
        aria-hidden="true"
        style={{
          width: '100%',
          overflow: 'hidden',
          whiteSpace: 'nowrap',
          padding: '1.2rem 0',
          borderTop: '1px solid var(--hairline-light)',
          borderBottom: '1px solid var(--hairline-light)',
          backgroundColor: '#0d0d0d',
          marginBottom: 'clamp(3rem, 6vw, 4.5rem)',
          display: 'flex',
          userSelect: 'none',
        }}
      >
        <motion.div
          animate={prefersReduced ? undefined : { x: ['0%', '-50%'] }}
          transition={{
            repeat: Infinity,
            ease: 'linear',
            duration: 25,
          }}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '2.5rem',
            flexShrink: 0,
          }}
        >
          {[...marqueeSkills, ...marqueeSkills].map((item, index) => (
            <span
              key={`${item}-${index}`}
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)',
                fontWeight: 900,
                color: 'transparent',
                WebkitTextStroke: '1px rgba(255, 255, 255, 0.35)',
                letterSpacing: '0.04em',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '2.5rem',
              }}
            >
              <span>{item}</span>
              <span style={{ color: 'var(--c-lime)', WebkitTextStroke: '0px', fontSize: '1.2rem' }}>✦</span>
            </span>
          ))}
        </motion.div>
      </div>

      {/* Grouped Category Cards */}
      <div className="content-container">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 360px), 1fr))',
            gap: '1.5rem',
          }}
        >
          {skillGroups.map((group, index) => (
            <motion.div
              key={group.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              whileHover={{
                borderColor: 'var(--c-lime)',
                y: -4,
              }}
              style={{
                backgroundColor: 'var(--surface)',
                border: '1px solid var(--hairline)',
                borderRadius: '20px',
                padding: 'clamp(1.5rem, 3vw, 2.2rem)',
                display: 'flex',
                flexDirection: 'column',
                gap: '1.2rem',
                transition: 'border-color var(--transition-fast), transform var(--transition-fast)',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <h3
                  style={{
                    fontSize: '1.25rem',
                    fontWeight: 800,
                    color: '#FFFFFF',
                    margin: 0,
                  }}
                >
                  {group.title}
                </h3>
                <span
                  style={{
                    fontFamily: 'var(--font-ui)',
                    fontSize: '0.8rem',
                    color: 'var(--c-lime)',
                    fontWeight: 600,
                  }}
                >
                  {group.items.length} items
                </span>
              </div>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.6rem' }}>
                {group.items.map((skill) => (
                  <Tag key={skill}>{skill}</Tag>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
