import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu } from 'lucide-react';
import Logo from '../ui/Logo';
import MobileMenu from './MobileMenu';
import { PORTFOLIO_DATA } from '../../data/portfolio';

export const Navbar: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>('hero');
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);

  // Scroll detection
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Scroll spy with IntersectionObserver
  useEffect(() => {
    const sectionIds = ['hero', 'about', 'skills', 'projects', 'achievements', 'contact'];
    const observers: IntersectionObserver[] = [];

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setActiveSection(id);
            }
          });
        },
        { rootMargin: '-25% 0px -40% 0px', threshold: 0 }
      );

      observer.observe(el);
      observers.push(observer);
    });

    return () => {
      observers.forEach((obs) => obs.disconnect());
    };
  }, []);

  return (
    <>
      <header
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1000,
          padding: 'clamp(0.8rem, 2vw, 1.2rem) clamp(1.2rem, 5vw, 3rem)',
          transition: 'all 0.3s ease',
          backgroundColor: isScrolled ? 'rgba(17, 17, 17, 0.75)' : 'transparent',
          backdropFilter: isScrolled ? 'blur(16px)' : 'none',
        }}
      >
        <div
          style={{
            maxWidth: 'var(--container-max-width)',
            margin: '0 auto',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          {/* Top-left: SS signature logo in subtle circle */}
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: 50,
              height: 50,
              borderRadius: '50%',
              border: '1px solid rgba(204, 255, 0, 0.3)',
              backgroundColor: 'rgba(24, 24, 24, 0.6)',
              backdropFilter: 'blur(8px)',
            }}
          >
            <Logo size={42} />
          </div>

          {/* Desktop Capsule Navigation */}
          <nav
            aria-label="Main Navigation"
            className="desktop-nav"
            style={{
              display: 'flex',
              alignItems: 'center',
              backgroundColor: 'rgba(22, 22, 22, 0.85)',
              border: '1px solid var(--hairline-strong)',
              borderRadius: '999px',
              padding: '0.35rem 0.45rem',
              backdropFilter: 'blur(14px)',
              boxShadow: '0 8px 32px rgba(0, 0, 0, 0.35)',
            }}
          >
            {PORTFOLIO_DATA.navLinks.map((link) => {
              const targetId = link.href.replace('#', '');
              const isActive = activeSection === targetId;

              return (
                <a
                  key={link.href}
                  href={link.href}
                  style={{
                    position: 'relative',
                    color: isActive ? '#111111' : '#A1A1AA',
                    fontFamily: 'var(--font-ui)',
                    fontSize: '0.92rem',
                    fontWeight: isActive ? 700 : 500,
                    letterSpacing: '0.2px',
                    padding: '0.55rem 1.25rem',
                    borderRadius: '999px',
                    textDecoration: 'none',
                    transition: 'color var(--transition-fast)',
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    zIndex: 1,
                  }}
                  onMouseEnter={(e) => {
                    if (!isActive) e.currentTarget.style.color = '#FFFFFF';
                  }}
                  onMouseLeave={(e) => {
                    if (!isActive) e.currentTarget.style.color = '#A1A1AA';
                  }}
                >
                  <span style={{ position: 'relative', zIndex: 2 }}>{link.name}</span>
                  {isActive && (
                    <motion.div
                      layoutId="nav-capsule-active"
                      style={{
                        position: 'absolute',
                        inset: 0,
                        backgroundColor: 'var(--c-lime)',
                        borderRadius: '999px',
                        zIndex: 1,
                        boxShadow: '0 0 16px rgba(204, 255, 0, 0.35)',
                      }}
                      transition={{ type: 'spring', stiffness: 400, damping: 32 }}
                    />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Mobile Menu Toggle Button */}
          <button
            type="button"
            className="mobile-nav-toggle"
            onClick={() => setIsMobileMenuOpen(true)}
            aria-label="Open mobile navigation menu"
            style={{
              display: 'none',
              alignItems: 'center',
              justifyContent: 'center',
              width: 46,
              height: 46,
              borderRadius: '50%',
              border: '1px solid var(--hairline-strong)',
              color: '#FFFFFF',
              backgroundColor: 'rgba(24, 24, 24, 0.7)',
            }}
          >
            <Menu size={22} aria-hidden="true" />
          </button>
        </div>
      </header>

      {/* Fullscreen Mobile Drawer */}
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        activeSection={activeSection}
      />

      <style>{`
        @media (max-width: 900px) {
          .desktop-nav {
            display: none !important;
          }
          .mobile-nav-toggle {
            display: inline-flex !important;
          }
        }
      `}</style>
    </>
  );
};

export default Navbar;
