import React from 'react';
import { motion } from 'framer-motion';
import SectionLabel from '../ui/SectionLabel';
import Tag from '../ui/Tag';
import { PORTFOLIO_DATA } from '../../data/portfolio';

export const Experience: React.FC = () => {
  const { experience } = PORTFOLIO_DATA;

  return (
    <section id="experience" aria-labelledby="experience-label" className="section-wrapper">
      <div className="content-container">
        <SectionLabel id="experience-label">Career Path</SectionLabel>

        <h2
          style={{
            fontSize: 'clamp(2.4rem, 6vw, 4.5rem)',
            fontWeight: 900,
            marginBottom: 'clamp(3rem, 6vw, 4.5rem)',
            letterSpacing: '-0.02em',
          }}
        >
          EXPERIENCE
        </h2>

        {/* Vertical Timeline */}
        <div style={{ position: 'relative', paddingLeft: 'clamp(1.5rem, 4vw, 3rem)' }}>
          {/* Vertical Lime Line */}
          <div
            aria-hidden="true"
            style={{
              position: 'absolute',
              top: '12px',
              bottom: '12px',
              left: 0,
              width: '2px',
              backgroundColor: 'var(--hairline-strong)',
            }}
          >
            {/* Glowing active line segment */}
            <div
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '70%',
                background: 'linear-gradient(to bottom, var(--c-lime), rgba(204, 255, 0, 0.2))',
                boxShadow: '0 0 10px rgba(204, 255, 0, 0.4)',
              }}
            />
          </div>

          {experience.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              style={{ position: 'relative', marginBottom: '2rem' }}
            >
              {/* Timeline Node on the line */}
              <div
                aria-hidden="true"
                style={{
                  position: 'absolute',
                  left: 'calc(-1 * clamp(1.5rem, 4vw, 3rem) - 6px)',
                  top: '10px',
                  width: '14px',
                  height: '14px',
                  borderRadius: '50%',
                  backgroundColor: 'var(--c-lime)',
                  boxShadow: '0 0 12px var(--c-lime)',
                  border: '3px solid #111111',
                }}
              />

              {/* Experience Card */}
              <div
                style={{
                  backgroundColor: 'var(--surface)',
                  border: '1px solid var(--hairline)',
                  borderRadius: '20px',
                  padding: 'clamp(1.5rem, 3.5vw, 2.5rem)',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '1.2rem',
                }}
              >
                <div
                  style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    alignItems: 'baseline',
                    justifyContent: 'space-between',
                    gap: '0.8rem',
                  }}
                >
                  <div>
                    <h3
                      style={{
                        fontSize: 'clamp(1.4rem, 2.6vw, 2rem)',
                        fontWeight: 900,
                        color: '#FFFFFF',
                      }}
                    >
                      {item.role}{' '}
                      <span style={{ color: 'var(--c-lime)' }}>@ {item.company}</span>
                    </h3>
                  </div>

                  <span
                    style={{
                      fontFamily: 'var(--font-ui)',
                      fontSize: '0.9rem',
                      fontWeight: 600,
                      color: 'var(--text-muted)',
                    }}
                  >
                    {item.period} ({item.duration})
                  </span>
                </div>

                {/* Bullets */}
                <ul
                  style={{
                    margin: 0,
                    paddingLeft: '1.2rem',
                    fontFamily: 'var(--font-ui)',
                    fontSize: 'clamp(0.92rem, 1.2vw, 1rem)',
                    lineHeight: 1.8,
                    color: 'var(--text-body)',
                    display: 'grid',
                    gap: '0.6rem',
                  }}
                >
                  {item.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>

                {/* Tags */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginTop: '0.5rem' }}>
                  {item.tags.map((tag) => (
                    <Tag key={tag}>{tag}</Tag>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
