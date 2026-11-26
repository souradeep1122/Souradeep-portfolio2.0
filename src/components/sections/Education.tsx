import React from 'react';
import { motion } from 'framer-motion';
import { PORTFOLIO_DATA } from '../../data/portfolio';
import SectionHeader from '../ui/SectionHeader';
import BrutalCard from '../ui/BrutalCard';

export const Education: React.FC = () => {
  const { education, certifications } = PORTFOLIO_DATA;

  return (
    <section id="education" aria-labelledby="education-title" className="pf-section">
      <div className="pf-container">
        <SectionHeader id="education-title">Education</SectionHeader>

        {/* Education Degree List */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.8rem' }}>
          {education.map((item, index) => (
            <BrutalCard
              key={item.id}
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
              style={{
                padding: 'clamp(1.5rem, 3vw, 2.2rem)',
              }}
            >
              <h3
                style={{
                  fontSize: 'clamp(1.4rem, 2.8vw, 2.2rem)',
                  fontWeight: 900,
                  textTransform: 'uppercase',
                  margin: '0 0 0.4rem',
                  letterSpacing: '-0.5px',
                  lineHeight: 1.15,
                }}
              >
                {item.school}
              </h3>
              <p
                style={{
                  fontSize: 'clamp(1.05rem, 1.6vw, 1.25rem)',
                  color: 'var(--c-pink)',
                  fontWeight: 800,
                  margin: 0,
                }}
              >
                {item.detail}
              </p>
            </BrutalCard>
          ))}
        </div>

        {/* Courses & Certifications Subheading */}
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          style={{
            margin: 'clamp(2.5rem, 5vw, 4rem) 0 1.5rem',
            color: 'var(--c-red)',
            letterSpacing: '4px',
            textTransform: 'uppercase',
            fontWeight: 900,
            fontSize: 'clamp(1.1rem, 2vw, 1.4rem)',
          }}
        >
          Courses &amp; Certifications
        </motion.h3>

        {/* Certifications Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 320px), 1fr))',
            gap: 'clamp(1.5rem, 2.5vw, 2rem)',
          }}
        >
          {certifications.map((cert, index) => (
            <BrutalCard
              key={cert.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.12, duration: 0.5 }}
              style={{
                padding: 'clamp(1.2rem, 2.2vw, 1.8rem)',
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              <h4
                style={{
                  margin: 0,
                  fontSize: 'clamp(1.15rem, 1.8vw, 1.35rem)',
                  fontWeight: 900,
                  textTransform: 'uppercase',
                  lineHeight: 1.2,
                }}
              >
                {cert.name}
              </h4>

              <p
                style={{
                  margin: '0.4rem 0 0.8rem',
                  color: 'var(--c-pink)',
                  fontWeight: 800,
                  fontSize: '1rem',
                }}
              >
                {cert.when}
              </p>

              <p
                style={{
                  margin: 0,
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.95rem',
                  lineHeight: 1.7,
                  color: 'var(--text-dark)',
                }}
              >
                {cert.detail}
              </p>
            </BrutalCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;

