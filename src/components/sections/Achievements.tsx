import React from 'react';
import { motion } from 'framer-motion';
import { Award, GraduationCap } from 'lucide-react';
import SectionLabel from '../ui/SectionLabel';
import { PORTFOLIO_DATA } from '../../data/portfolio';

export const Achievements: React.FC = () => {
  const { certifications, education } = PORTFOLIO_DATA;

  return (
    <section id="achievements" aria-labelledby="achievements-label" className="section-wrapper">
      <div className="content-container">
        <SectionLabel id="achievements-label">Credentials &amp; Education</SectionLabel>

        <h2
          style={{
            fontSize: 'clamp(2.4rem, 6vw, 4.5rem)',
            fontWeight: 900,
            marginBottom: 'clamp(3rem, 6vw, 4.5rem)',
            letterSpacing: '-0.02em',
          }}
        >
          ACHIEVEMENTS
        </h2>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 480px), 1fr))',
            gap: 'clamp(2rem, 4vw, 3rem)',
          }}
        >
          {/* Column 1: Certifications */}
          <div>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.75rem',
                marginBottom: '1.5rem',
                color: 'var(--c-lime)',
              }}
            >
              <Award size={24} aria-hidden="true" />
              <h3 style={{ fontSize: '1.4rem', fontWeight: 800, color: '#FFFFFF' }}>
                CERTIFICATIONS
              </h3>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              {certifications.map((cert, index) => (
                <motion.div
                  key={cert.id}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ borderColor: 'var(--c-lime)', y: -3 }}
                  style={{
                    backgroundColor: 'var(--surface)',
                    border: '1px solid var(--hairline)',
                    borderRadius: '16px',
                    padding: 'clamp(1.2rem, 2.5vw, 1.8rem)',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '0.6rem',
                    transition: 'all var(--transition-fast)',
                  }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', gap: '0.8rem' }}>
                    <h4 style={{ fontSize: '1.15rem', fontWeight: 800, color: '#FFFFFF', margin: 0 }}>
                      {cert.name}
                    </h4>
                    <span style={{ fontSize: '0.85rem', color: 'var(--c-lime)', fontWeight: 600, whiteSpace: 'nowrap' }}>
                      {cert.when}
                    </span>
                  </div>
                  <p style={{ margin: 0, fontSize: '0.88rem', color: 'var(--text-muted)', fontFamily: 'var(--font-ui)' }}>
                    Issued by {cert.issuer}
                  </p>
                  <p style={{ margin: '0.3rem 0 0', fontSize: '0.92rem', color: 'var(--text-body)', lineHeight: 1.6 }}>
                    {cert.detail}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Column 2: Education */}
          <div>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.75rem',
                marginBottom: '1.5rem',
                color: 'var(--c-lime)',
              }}
            >
              <GraduationCap size={24} aria-hidden="true" />
              <h3 style={{ fontSize: '1.4rem', fontWeight: 800, color: '#FFFFFF' }}>
                EDUCATION
              </h3>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              {education.map((edu, index) => (
                <motion.div
                  key={edu.id}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ borderColor: 'var(--c-lime)', y: -3 }}
                  style={{
                    backgroundColor: 'var(--surface)',
                    border: '1px solid var(--hairline)',
                    borderRadius: '16px',
                    padding: 'clamp(1.2rem, 2.5vw, 1.8rem)',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '0.5rem',
                    transition: 'all var(--transition-fast)',
                  }}
                >
                  <h4 style={{ fontSize: '1.15rem', fontWeight: 800, color: '#FFFFFF', margin: 0 }}>
                    {edu.school}
                  </h4>
                  <p style={{ margin: 0, fontSize: '0.92rem', color: 'var(--c-lime)', fontWeight: 600 }}>
                    {edu.degree}
                  </p>
                  <p style={{ margin: '0.2rem 0 0', fontSize: '0.92rem', color: 'var(--text-body)', lineHeight: 1.6 }}>
                    {edu.detail}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;

