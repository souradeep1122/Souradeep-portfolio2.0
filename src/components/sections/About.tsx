import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Sparkles, Briefcase, GraduationCap } from 'lucide-react';
import SectionLabel from '../ui/SectionLabel';
import Tag from '../ui/Tag';
import PillButton from '../ui/PillButton';
import { PORTFOLIO_DATA } from '../../data/portfolio';

export const About: React.FC = () => {
  const { personal, stats } = PORTFOLIO_DATA;
  const { bento } = personal;

  return (
    <section id="about" aria-labelledby="about-label" className="section-wrapper">
      <div className="content-container">
        <SectionLabel id="about-label">✦ A GLIMPSE INTO MY JOURNEY ✦</SectionLabel>

        {/* Section Title: About me. */}
        <div style={{ marginBottom: 'clamp(2rem, 4vw, 3rem)' }}>
          <h2
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(3rem, 7vw, 6rem)',
              fontWeight: 900,
              lineHeight: 0.95,
              letterSpacing: '-0.03em',
              textTransform: 'none',
              margin: 0,
            }}
          >
            <span>{personal.aboutHeadlineLead} </span>
            <span style={{ color: 'var(--c-lime)' }}>{personal.aboutHeadlineLime}</span>
          </h2>
        </div>

        {/* Narrative & Bullet Highlights */}
        <div
          style={{
            maxWidth: '920px',
            marginBottom: 'clamp(3rem, 6vw, 4.5rem)',
            display: 'flex',
            flexDirection: 'column',
            gap: '1.5rem',
          }}
        >
          <p
            style={{
              fontFamily: 'var(--font-ui)',
              fontSize: 'clamp(1.05rem, 1.6vw, 1.25rem)',
              lineHeight: 1.8,
              color: 'var(--text-heading)',
              margin: 0,
            }}
          >
            I am a passionate <strong style={{ color: 'var(--c-lime)' }}>MERN Stack Developer</strong> and{' '}
            <strong style={{ color: 'var(--c-lime)' }}>UI/UX Designer</strong> who loves building
            interactive web applications and crafting intuitive user experiences. Based in Kolkata, I
            develop full-stack products while exploring modern interface design, motion, and digital
            aesthetics.
          </p>

          <ul
            style={{
              listStyle: 'none',
              padding: 0,
              margin: 0,
              display: 'grid',
              gap: '0.85rem',
              fontFamily: 'var(--font-ui)',
              fontSize: 'clamp(0.95rem, 1.3vw, 1.05rem)',
              color: 'var(--text-body)',
              lineHeight: 1.6,
            }}
          >
            {personal.aboutBullets.map((bullet) => (
              <li
                key={bullet}
                style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '0.85rem',
                }}
              >
                <span
                  style={{
                    color: 'var(--c-lime)',
                    fontSize: '1.1rem',
                    lineHeight: '1.4',
                    flexShrink: 0,
                  }}
                  aria-hidden="true"
                >
                  ●
                </span>
                <span>{bullet}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Bento Grid (Matching Reference Screenshot) */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 460px), 1fr))',
            gap: '1.5rem',
            marginBottom: 'clamp(3rem, 6vw, 4.5rem)',
          }}
        >
          {/* Bento Card 1: Experience */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            whileHover={{ borderColor: 'var(--c-lime)', y: -3 }}
            style={{
              backgroundColor: 'var(--surface)',
              border: '1px solid var(--hairline)',
              borderRadius: '20px',
              padding: 'clamp(1.5rem, 3vw, 2.2rem)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              gap: '1.5rem',
              transition: 'all var(--transition-fast)',
            }}
          >
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                <span style={{ fontSize: '0.8rem', letterSpacing: '0.2em', color: 'var(--text-muted)', fontWeight: 600 }}>
                  {bento.experience.label}
                </span>
                <span style={{ color: 'var(--c-lime)' }} aria-hidden="true">
                  <Briefcase size={20} />
                </span>
              </div>
              <h3 style={{ fontSize: '1.75rem', fontWeight: 900, color: '#FFFFFF', margin: '0 0 0.35rem' }}>
                {bento.experience.role}
              </h3>
              <p style={{ color: 'var(--c-lime)', fontWeight: 600, fontSize: '1.05rem', margin: '0 0 0.35rem' }}>
                {bento.experience.company}
              </p>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.88rem', margin: 0 }}>
                {bento.experience.period}
              </p>
            </div>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
              {bento.experience.tags.map((tag) => (
                <Tag key={tag}>{tag}</Tag>
              ))}
            </div>
          </motion.div>

          {/* Bento Card 2: Education */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            whileHover={{ borderColor: 'var(--c-lime)', y: -3 }}
            style={{
              backgroundColor: 'var(--surface)',
              border: '1px solid var(--hairline)',
              borderRadius: '20px',
              padding: 'clamp(1.5rem, 3vw, 2.2rem)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              gap: '1.5rem',
              transition: 'all var(--transition-fast)',
            }}
          >
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                <span style={{ fontSize: '0.8rem', letterSpacing: '0.2em', color: 'var(--text-muted)', fontWeight: 600 }}>
                  {bento.education.label}
                </span>
                <span style={{ color: 'var(--c-lime)' }} aria-hidden="true">
                  <GraduationCap size={20} />
                </span>
              </div>
              <h3 style={{ fontSize: '1.75rem', fontWeight: 900, color: '#FFFFFF', margin: '0 0 0.35rem' }}>
                {bento.education.degree}
              </h3>
              <p style={{ color: 'var(--c-lime)', fontWeight: 600, fontSize: '1.05rem', margin: '0 0 0.35rem' }}>
                {bento.education.school}
              </p>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.88rem', margin: 0 }}>
                {bento.education.school2}
              </p>
            </div>

            <div>
              <a
                href="#achievements"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                  fontSize: '0.9rem',
                  fontWeight: 600,
                  color: '#FFFFFF',
                  textDecoration: 'underline',
                }}
              >
                <span>View Full Credentials</span>
                <ArrowUpRight size={16} color="var(--c-lime)" />
              </a>
            </div>
          </motion.div>

          {/* Bento Card 3: Current Focus (Full-width banner) */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            whileHover={{ borderColor: 'var(--c-lime)', y: -3 }}
            style={{
              gridColumn: '1 / -1',
              backgroundColor: 'var(--surface)',
              border: '1px solid var(--hairline)',
              borderRadius: '20px',
              padding: 'clamp(1.5rem, 3.5vw, 2.4rem)',
              display: 'flex',
              flexDirection: 'column',
              gap: '1.2rem',
              transition: 'all var(--transition-fast)',
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{ fontSize: '0.8rem', letterSpacing: '0.2em', color: 'var(--text-muted)', fontWeight: 600 }}>
                {bento.currentFocus.label}
              </span>
              <span style={{ color: 'var(--c-lime)' }} aria-hidden="true">
                <Sparkles size={20} />
              </span>
            </div>

            <h3 style={{ fontSize: 'clamp(1.5rem, 3vw, 2.2rem)', fontWeight: 900, color: '#FFFFFF', margin: 0 }}>
              {bento.currentFocus.title}
            </h3>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.6rem' }}>
              {bento.currentFocus.tags.map((tag) => (
                <Tag key={tag} hot={['React.js', 'Node.js', 'MongoDB'].includes(tag)}>
                  {tag}
                </Tag>
              ))}
            </div>
          </motion.div>

          {/* Bento Card 4: Collaboration Action Card (Full-width banner) */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            whileHover={{ borderColor: 'var(--c-lime)', y: -3 }}
            style={{
              gridColumn: '1 / -1',
              backgroundColor: '#151515',
              border: '1px solid rgba(204, 255, 0, 0.2)',
              borderRadius: '20px',
              padding: 'clamp(1.5rem, 3.5vw, 2.4rem)',
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: '1.5rem',
              transition: 'all var(--transition-fast)',
            }}
          >
            <div style={{ maxWidth: '640px' }}>
              <span style={{ fontSize: '0.8rem', letterSpacing: '0.2em', color: 'var(--c-lime)', fontWeight: 700, display: 'block', marginBottom: '0.4rem' }}>
                {bento.collaboration.label}
              </span>
              <h3 style={{ fontSize: 'clamp(1.3rem, 2.4vw, 1.8rem)', fontWeight: 800, color: '#FFFFFF', margin: 0 }}>
                {bento.collaboration.title}
              </h3>
            </div>

            <PillButton
              href="#contact"
              variant="primary"
              icon={<ArrowUpRight size={18} aria-hidden="true" />}
            >
              {bento.collaboration.cta}
            </PillButton>
          </motion.div>
        </div>

        {/* Stat Counters Row with Dividing Lines */}
        <div
          style={{
            borderTop: '1px solid var(--hairline)',
            borderBottom: '1px solid var(--hairline)',
            padding: '2.5rem 0',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
            gap: '2rem',
          }}
        >
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '0.35rem',
                borderLeft: i > 0 ? '1px solid var(--hairline-light)' : 'none',
                paddingLeft: i > 0 ? 'clamp(1rem, 2vw, 2rem)' : '0',
              }}
            >
              <span
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 'clamp(2.5rem, 4.5vw, 3.8rem)',
                  fontWeight: 900,
                  color: 'var(--c-lime)',
                  lineHeight: 1,
                }}
              >
                {stat.value}
              </span>
              <span
                style={{
                  fontFamily: 'var(--font-ui)',
                  fontSize: '0.85rem',
                  color: 'var(--text-muted)',
                  textTransform: 'uppercase',
                  letterSpacing: '0.08em',
                  fontWeight: 500,
                }}
              >
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
