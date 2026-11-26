import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowDown, Download, Mail } from 'lucide-react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import PillButton from '../ui/PillButton';
import IconButton from '../ui/IconButton';
import Crosshair from '../ui/Crosshair';
import Sparkle from '../ui/Sparkle';
import { PORTFOLIO_DATA } from '../../data/portfolio';
import { useReducedMotionSafe } from '../../hooks/useReducedMotionSafe';

export const Hero: React.FC = () => {
  const { personal, socialLinks } = PORTFOLIO_DATA;
  const prefersReduced = useReducedMotionSafe();
  const { scrollY } = useScroll();

  // Subtle parallax for outlined background word "BUILDER"
  const builderY = useTransform(scrollY, [0, 600], prefersReduced ? [0, 0] : [0, 100]);
  const builderX = useTransform(scrollY, [0, 600], prefersReduced ? [0, 0] : [0, -40]);

  return (
    <section
      id="hero"
      aria-label="Introduction Hero"
      style={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 'clamp(7rem, 15vh, 9rem) clamp(1rem, 4vw, 3rem) 4rem',
        overflow: 'hidden',
        backgroundColor: 'var(--bg-dark)',
      }}
    >
      {/* Decorative Sparkle Star Top-Right */}
      <div
        style={{
          position: 'absolute',
          top: 'clamp(4.5rem, 10vh, 7rem)',
          right: 'clamp(2rem, 8vw, 7rem)',
          zIndex: 4,
        }}
      >
        <Sparkle size={36} color="#8A8A8A" />
      </div>

      {/* Decorative Crosshair Left of Buttons */}
      <div
        style={{
          position: 'absolute',
          left: 'clamp(2rem, 10vw, 12rem)',
          top: '64%',
          zIndex: 4,
        }}
      >
        <Crosshair size={26} color="rgba(255, 255, 255, 0.2)" />
      </div>

      {/* Giant Outlined Background Word "BUILDER" */}
      <motion.div
        aria-hidden="true"
        style={{
          position: 'absolute',
          top: '52%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          zIndex: 1,
          pointerEvents: 'none',
          whiteSpace: 'nowrap',
          fontFamily: 'var(--font-display)',
          fontSize: 'clamp(14rem, 27vw, 28rem)',
          fontWeight: 900,
          textTransform: 'uppercase',
          letterSpacing: '-0.03em',
          lineHeight: 0.8,
          color: 'transparent',
          WebkitTextStroke: '1.5px rgba(204, 255, 0, 0.22)',
          opacity: 0.85,
          userSelect: 'none',
          y: builderY,
          x: builderX,
        }}
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 0.85, scale: 1 }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
      >
        {personal.backgroundWord}
      </motion.div>

      {/* Main Center Content */}
      <div
        style={{
          position: 'relative',
          zIndex: 3,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center',
          width: '100%',
          maxWidth: '1200px',
        }}
      >
        {/* Eyebrow: SOFTWARE DEVELOPER AND DESIGNER ─── */}
        <motion.div
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '1rem',
            textTransform: 'uppercase',
            letterSpacing: '0.3em',
            fontSize: 'clamp(0.75rem, 1.4vw, 0.9rem)',
            fontWeight: 600,
            color: 'var(--text-muted)',
            marginBottom: 'clamp(1rem, 2.5vh, 1.8rem)',
          }}
        >
          <span>{personal.eyebrow}</span>
          <span
            aria-hidden="true"
            style={{
              display: 'inline-block',
              width: '45px',
              height: '1px',
              backgroundColor: 'var(--hairline-strong)',
            }}
          />
        </motion.div>

        {/* Giant Oversized Name: SOURADEEP / SAHA */}
        <h1
          style={{
            margin: 0,
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(3.8rem, 14vw, 11rem)',
            fontWeight: 900,
            lineHeight: 0.84,
            letterSpacing: '-0.04em',
            color: 'var(--c-lime)',
            textTransform: 'uppercase',
            textShadow: '0 0 50px rgba(204, 255, 0, 0.18)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <motion.span
            initial={{ opacity: 0, y: 45 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
            style={{ display: 'block' }}
          >
            {personal.nameFirst}
          </motion.span>
          <motion.span
            initial={{ opacity: 0, y: 45 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.48, ease: [0.16, 1, 0.3, 1] }}
            style={{ display: 'block' }}
          >
            {personal.nameLast}
          </motion.span>
        </h1>

        {/* Buttons Row */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '1rem',
            flexWrap: 'wrap',
            marginTop: 'clamp(2rem, 4.5vh, 3.2rem)',
          }}
        >
          <PillButton
            href="#projects"
            variant="primary"
            icon={<ArrowDown size={18} aria-hidden="true" />}
          >
            View projects
          </PillButton>

          <PillButton
            href={personal.cvUrl}
            download="Souradeep_Saha_CV.pdf"
            variant="secondary"
            icon={<Download size={18} aria-hidden="true" />}
          >
            Download CV
          </PillButton>
        </motion.div>

        {/* Circular Social Icons Row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.85 }}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '1rem',
            marginTop: '1.4rem',
          }}
        >
          {socialLinks.map((social) => {
            const getIcon = () => {
              if (social.type === 'github') return <FaGithub size={20} aria-hidden="true" />;
              if (social.type === 'linkedin') return <FaLinkedin size={20} aria-hidden="true" />;
              return <Mail size={20} aria-hidden="true" />;
            };

            return (
              <IconButton
                key={social.name}
                href={social.href}
                ariaLabel={social.ariaLabel}
                size={48}
              >
                {getIcon()}
              </IconButton>
            );
          })}
        </motion.div>
      </div>

      {/* Bottom-Left: Hairline + Location & Status */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 1 }}
        style={{
          position: 'absolute',
          bottom: 'clamp(1.5rem, 3.5vh, 2.5rem)',
          left: 'clamp(1.5rem, 5vw, 3rem)',
          zIndex: 4,
          display: 'flex',
          alignItems: 'center',
          gap: '1rem',
        }}
      >
        {/* Subtle Vertical Hairline */}
        <span
          aria-hidden="true"
          style={{
            display: 'inline-block',
            width: '1px',
            height: '42px',
            backgroundColor: 'var(--hairline-strong)',
          }}
        />

        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '0.3rem',
            fontFamily: 'var(--font-ui)',
            fontSize: '0.8rem',
            letterSpacing: '0.18em',
            textTransform: 'uppercase',
          }}
        >
          <span style={{ color: 'var(--text-muted)' }}>{personal.location}</span>
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', color: '#BDBDBD' }}>
            <span
              style={{
                width: 7,
                height: 7,
                borderRadius: '50%',
                backgroundColor: 'var(--c-lime)',
                boxShadow: '0 0 10px var(--c-lime)',
              }}
              aria-hidden="true"
            />
            {personal.status}
          </span>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
