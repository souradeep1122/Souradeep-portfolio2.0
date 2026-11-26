import React, { ReactNode } from 'react';
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion';
import { Mail, ArrowUpRight } from 'lucide-react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
// Your existing components (keep them where they are; adjust the paths if needed).
// If TypeScript complains about the .jsx files, enable "allowJs" in tsconfig or rename them to .tsx.
import SplashCursor from './SplashCursor';
import CurvedLoop from './CurvedLoop';
import ShapeGrid from './ShapeGrid';

/* ---------- design tokens + global styles ---------- */
const GlobalStyles = () => (
  <style>{`
    @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,500;0,800;1,500&family=Fira+Code:wght@500;600&family=Poppins:wght@600;800;900&family=Caveat:wght@500&display=swap');
    :root{
      --c-red:#E43D12; --c-yellow:#EFB11D; --c-pink:#D6536D; --text-dark:#191717; --bg:#FFF6E9;
      --font-sans:'Poppins',system-ui,sans-serif; --font-cursive:'Caveat',cursive;
    }
    html{scroll-behavior:smooth}
    body{margin:0;background:var(--bg);color:var(--text-dark);font-family:var(--font-sans)}
    a{text-decoration:none}
    .title-sans{font-family:var(--font-sans);font-size:clamp(2.6rem,9vw,7rem);font-weight:900;text-transform:uppercase;letter-spacing:-2px;margin:0}
    .pf-section{padding:4rem 2rem 2rem;position:relative;overflow:hidden}
    .nav-links{display:flex;gap:2rem}
    @media (max-width:900px){.nav-links{display:none}}
    @media (prefers-reduced-motion:reduce){html{scroll-behavior:auto}}
  `}</style>
);

/* ---------- data (from your resume) ---------- */
const links = [
  { name: 'About me', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Experience', href: '#experience' },
  { name: 'Education', href: '#education' },
  { name: 'Contact', href: '#contact' },
];

const skillGroups: { title: string; items: string[] }[] = [
  { title: 'Languages', items: ['Python', 'Java', 'JavaScript'] },
  { title: 'Web & Design', items: ['HTML', 'CSS', 'Tailwind', 'React.js', 'Figma', 'Canva'] },
  { title: 'Backend & Databases', items: ['Node.js', 'Express.js', 'MongoDB', 'MySQL'] },
  { title: 'Cloud', items: ['AWS EC2', 'AWS S3', 'AWS RDS', 'VPS hosting'] },
  { title: 'Course Work', items: ['MySQL', 'MongoDB', 'Operating Systems', 'AI/ML', 'OOPS'] },
];

type Project = { name: string; desc: string; tags: string[]; url?: string };
const projects: Project[] = [
  {
    name: 'Pumpsense Report Dashboard',
    desc: 'Full-stack report processing and management dashboard for Pumpsense Fluid Engineering. Third-party APIs automate data storage and background services. Backend on a VPS, files on AWS S3, live in production across the company’s engineering operations.',
    tags: ['HTML', 'Tailwind', 'Node.js', 'Express', 'MongoDB', 'AWS S3'],
  },
  { name: 'Book Review', desc: 'Browse and review books in a clean layout.', tags: ['HTML', 'CSS', 'JS'], url: 'https://souradeep1122.github.io/Book-Review-Project/index.html' },
  { name: 'E-commerce', desc: 'Shoe storefront with product listings.', tags: ['HTML', 'CSS', 'JS'], url: 'https://souradeep1122.github.io/shoe-shop/' },
  { name: 'Portfolio 2.0', desc: 'My earlier portfolio, kept for reference.', tags: ['HTML', 'CSS'], url: 'https://souradeep1122.github.io/Souradeep-portfolio2.0/' },
  { name: 'Travellers Treasure', desc: 'Full-stack travel site with a Node backend.', tags: ['Node.js', 'Express'], url: 'https://travellers-treasure.onrender.com/Cover' },
  { name: 'Animated Website', desc: 'Scroll and hover animations from front to back.', tags: ['HTML', 'CSS', 'JS'], url: 'https://souradeep1122.github.io/Animated-website/' },
];

const internship = [
  'Contributed to multiple UI/UX projects across mobile and desktop, including Android and iOS applications.',
  'Designed modern interfaces with glassmorphism themes, focusing on visual consistency, usability and responsive layouts.',
  'Created wireframes, user flows, interactive prototypes and high-fidelity designs in Figma to communicate and validate ideas.',
  'Designed and refined custom icons and UI elements, keeping one visual language across screens and platforms.',
];

const education = [
  { school: 'University of Engineering and Management, Kolkata', detail: 'B.Tech in Computer Science and Technology • CGPA 8.19 (till 7th sem)' },
  { school: 'Kendriya Vidyalaya Ordnance Factory Dum Dum', detail: 'Class X (CBSE) 83% • Class XII (CBSE) 73%' },
];
const certs = [
  { name: 'AWS Cloud Practitioner Essentials', when: 'Mar 2025', detail: 'Cloud fundamentals, global infrastructure, security compliance, EC2, S3, RDS.' },
  { name: 'Foundations of User Experience (UX) Design', when: 'Dec 2025', detail: 'LinkedIn. Usability, information architecture and the design sprint framework.' },
];

const EMAIL = 'souradeep418saha@gmail.com';
const MAIL_HREF = `https://mail.google.com/mail/?view=cm&fs=1&to=${EMAIL}`;

/* ---------- shared pieces ---------- */
const Blob = ({ colors, style }: { colors: string; style: React.CSSProperties }) => {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  return (
    <motion.div
      aria-hidden
      style={{ position: 'absolute', width: '50vw', height: '50vw', background: colors, borderRadius: '50%', filter: 'blur(100px)', zIndex: 0, opacity: 0.65, y, ...style }}
    />
  );
};

const SectionHeader = ({ children }: { children: ReactNode }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    style={{ display: 'flex', alignItems: 'center', marginBottom: '2.5rem' }}
  >
    <div style={{ position: 'relative', width: 40, height: 40, borderRadius: '50%', border: '1.5px solid rgba(228,61,18,.4)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div style={{ width: 6, height: 6, background: 'var(--c-red)', borderRadius: '50%' }} />
      <div style={{ position: 'absolute', left: '100%', top: '50%', width: 40, height: 1.5, background: 'rgba(228,61,18,.4)' }} />
    </div>
    <span style={{ color: 'var(--c-red)', letterSpacing: 5, fontSize: '2rem', textTransform: 'uppercase', fontWeight: 900, marginLeft: 50 }}>{children}</span>
  </motion.div>
);

const brutal: React.CSSProperties = { border: '4px solid var(--c-yellow)', borderRadius: 8, boxShadow: '10px 10px 0 var(--c-red)' };
const Wrap = ({ children, max = 1000 }: { children: ReactNode; max?: number }) => (
  <div style={{ maxWidth: max, margin: '0 auto', position: 'relative', zIndex: 1 }}>{children}</div>
);

const Pill = ({ children, hot = false }: { children: ReactNode; hot?: boolean }) => (
  <span style={{ fontFamily: "'Fira Code', monospace", fontSize: '.85rem', fontWeight: 600, padding: '.3rem .8rem', borderRadius: 50, border: `2px solid ${hot ? 'var(--c-red)' : 'var(--text-dark)'}`, color: hot ? 'var(--c-red)' : 'var(--text-dark)' }}>
    {children}
  </span>
);

/* ---------- sections ---------- */
const Navbar = () => (
  <motion.header
    initial={{ y: -50, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    transition={{ duration: 0.6, ease: 'easeOut' }}
    style={{ position: 'fixed', top: '2rem', left: '2rem', right: '2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', zIndex: 1000 }}
  >
    <a href="#" style={{ fontSize: '2rem', color: 'var(--c-red)', lineHeight: 1, fontWeight: 800, border: '3px solid var(--c-red)', padding: '.4rem .6rem', borderRadius: 12, background: 'var(--bg)' }}>
      sd.
    </a>
    <nav className="nav-links">
      {links.map((l) => (
        <a
          key={l.href}
          href={l.href}
          style={{ fontWeight: 800, fontSize: '1.1rem', color: 'var(--c-red)', display: 'inline-block', transition: 'transform .2s' }}
          onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.1)')}
          onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
        >
          {l.name}
        </a>
      ))}
    </nav>
  </motion.header>
);

const Hero = () => (
  <section id="home" className="pf-section" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center' }}>
    <Blob colors="linear-gradient(135deg, rgba(255,235,130,.7), rgba(255,180,80,.5))" style={{ top: '-10%', right: '-15%' }} />
    <Wrap max={1200}>
      <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}
        style={{ fontFamily: 'var(--font-cursive)', fontSize: '2.4rem', color: 'var(--c-pink)', margin: '0 0 .5rem' }}>
        Hello, I’m
      </motion.p>
      <motion.h1 className="title-sans" initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.3 }}
        style={{ color: 'var(--c-yellow)', lineHeight: 0.9 }}>
        Souradeep
      </motion.h1>
      <motion.h1 className="title-sans" initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.45 }}
        style={{ lineHeight: 0.9, marginBottom: '1.5rem' }}>
        Saha
      </motion.h1>
      <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.7 }}
        style={{ fontFamily: "'Fira Code', monospace", fontWeight: 600, fontSize: '1.1rem', maxWidth: 560, lineHeight: 1.8, marginBottom: '2rem' }}>
        MERN stack developer and UI/UX designer from <span style={{ color: '#FF1493', fontWeight: 900 }}>Kolkata</span>. I build functional web apps and intuitive, user-centric experiences.
      </motion.p>
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.9 }} style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
        <a href="#projects" style={{ background: 'var(--c-yellow)', color: 'var(--text-dark)', padding: '1rem 2.5rem', borderRadius: 50, fontWeight: 800, textTransform: 'uppercase' }}>See my work</a>
        <a href="cv.pdf" style={{ border: '2px solid var(--c-yellow)', color: 'var(--c-red)', padding: '1rem 2.5rem', borderRadius: 50, fontWeight: 800, textTransform: 'uppercase' }}>Download CV</a>
      </motion.div>
    </Wrap>
  </section>
);

const About = () => (
  <section id="about" className="pf-section" style={{ display: 'flex', justifyContent: 'center' }}>
    <Blob colors="linear-gradient(135deg, rgba(255,204,153,.6), rgba(255,182,193,.5))" style={{ top: '10%', left: '-10%' }} />
    <div style={{ maxWidth: 1200, width: '100%', display: 'flex', gap: '6rem', flexWrap: 'wrap', position: 'relative', zIndex: 1 }}>
      <div style={{ flex: '1 1 500px' }}>
        <SectionHeader>About Me</SectionHeader>
        <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-50px' }}
          style={{ fontSize: 'clamp(2.2rem,3.5vw,3.2rem)', fontFamily: "'Playfair Display', Georgia, serif", lineHeight: 1.1, margin: '0 0 1.5rem', fontWeight: 500 }}>
          I turn bold ideas <br />into <br />
          <i style={{ fontWeight: 'normal', background: 'linear-gradient(90deg,#f272cc,#FF6600)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
            experiences people <br /> remember.
          </i>
        </motion.h2>
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.2 }}
          style={{ fontFamily: "'Fira Code', monospace", fontSize: '1.05rem', fontWeight: 600, lineHeight: 1.8, color: '#222', maxWidth: 550 }}>
          <p>Passionate MERN stack developer and UI/UX designer with hands-on experience in full-stack web development and modern interface design. A B.Tech Computer Science student at <span style={{ color: '#FF1493', fontWeight: 900 }}>UEM Kolkata</span>, I ship real products and design the screens around them.</p>
          <p>Outside code I enjoy <span style={{ color: '#FF1493', fontWeight: 900 }}>videography</span> and personal fitness. I speak English, Hindi and Bengali.</p>
        </motion.div>
      </div>

      <div style={{ flex: '1 1 400px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.2 }}
          style={{ background: '#191717', width: '100%', maxWidth: 380, padding: '1.5rem 2rem', ...brutal }}>
          {[
            ['Current Focus', 'MERN + UI/UX'],
            ['Location', 'Kolkata, India'],
            ['Availability', 'Open to work & freelance'],
          ].map(([k, v], i, arr) => (
            <div key={k} style={{ borderBottom: i < arr.length - 1 ? '1px solid rgba(255,255,255,.08)' : 'none', paddingBottom: '.5rem', marginBottom: '.5rem' }}>
              <p style={{ color: 'var(--c-yellow)', fontFamily: 'var(--font-cursive)', fontSize: '2rem', margin: '0 0 .2rem' }}>{k}</p>
              <h3 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: '1.6rem', color: '#fff', fontWeight: 500, margin: 0 }}>{v}</h3>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  </section>
);

const Skills = () => (
  <section id="skills" className="pf-section">
    <Blob colors="linear-gradient(135deg, rgba(255,182,193,.5), rgba(255,204,153,.5))" style={{ top: '0', right: '-15%' }} />
    <Wrap>
      <SectionHeader>Skills</SectionHeader>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(280px,1fr))', gap: '2rem' }}>
        {skillGroups.map((g, i) => (
          <motion.div key={g.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
            style={{ padding: '1.5rem', ...brutal }}>
            <h3 style={{ margin: '0 0 1rem', color: 'var(--c-pink)', fontWeight: 800, fontSize: '1.3rem', textTransform: 'uppercase' }}>{g.title}</h3>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '.5rem' }}>{g.items.map((s) => <Pill key={s}>{s}</Pill>)}</div>
          </motion.div>
        ))}
      </div>
    </Wrap>
  </section>
);

const Projects = () => (
  <section id="projects" className="pf-section">
    <Wrap>
      <SectionHeader>Projects</SectionHeader>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(300px,1fr))', gap: '2.5rem' }}>
        {projects.map((p, i) => {
          const Tag = (p.url ? motion.a : motion.div) as React.ElementType;
          const extra = p.url ? { href: p.url, target: '_blank', rel: 'noreferrer' } : {};
          return (
            <Tag key={p.name} {...(extra as object)}
              initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: (i % 2) * 0.15, duration: 0.5 }}
              whileHover={{ x: 4, y: 4, boxShadow: '5px 5px 0 var(--c-red)' }}
              style={{ ...brutal, padding: '1.5rem', color: 'var(--text-dark)', display: 'flex', flexDirection: 'column', gap: '.8rem', background: 'var(--bg)', gridColumn: i === 0 ? '1 / -1' : undefined }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '1rem' }}>
                <h3 style={{ margin: 0, fontSize: 'clamp(1.3rem,2.4vw,1.8rem)', fontWeight: 900, textTransform: 'uppercase', lineHeight: 1.1 }}>{p.name}</h3>
                {p.url && <ArrowUpRight color="#E43D12" size={28} />}
              </div>
              <p style={{ margin: 0, fontFamily: "'Fira Code', monospace", fontWeight: 500, lineHeight: 1.7, fontSize: '.95rem' }}>{p.desc}</p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '.5rem' }}>
                {p.tags.map((t) => <Pill key={t}>{t}</Pill>)}
                {!p.url && <Pill hot>in production</Pill>}
              </div>
            </Tag>
          );
        })}
      </div>
    </Wrap>
  </section>
);

const Experience = () => (
  <section id="experience" className="pf-section">
    <Blob colors="linear-gradient(135deg, rgba(255,235,130,.7), rgba(255,180,80,.5))" style={{ top: '-10%', left: '-15%' }} />
    <Wrap>
      <SectionHeader>Experience</SectionHeader>
      <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.6 }}
        style={{ padding: '2rem', ...brutal }}>
        <h3 style={{ margin: 0, fontSize: 'clamp(1.6rem,3.2vw,2.3rem)', fontWeight: 900, textTransform: 'uppercase', lineHeight: 1.1 }}>UI/UX Intern @ Kyptronix LLP</h3>
        <p style={{ fontSize: '1.2rem', color: 'var(--c-pink)', fontWeight: 800, margin: '.3rem 0 1rem' }}>Jul 2026 – Sep 2026 • 3 months</p>
        <ul style={{ margin: 0, paddingLeft: '1.2rem', fontFamily: "'Fira Code', monospace", fontWeight: 500, lineHeight: 1.8, display: 'grid', gap: '.5rem' }}>
          {internship.map((t) => <li key={t}>{t}</li>)}
        </ul>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '.5rem', marginTop: '1.2rem' }}>
          {['Figma', 'Wireframes', 'Prototyping', 'Glassmorphism', 'Android + iOS'].map((t) => <Pill key={t}>{t}</Pill>)}
        </div>
      </motion.div>
    </Wrap>
  </section>
);

const Education = () => (
  <section id="education" className="pf-section">
    <Wrap>
      <SectionHeader>Education</SectionHeader>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
        {education.map((e, i) => (
          <motion.div key={e.school} initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.5 }} transition={{ delay: i * 0.2, duration: 0.6 }}
            style={{ padding: '2rem', ...brutal }}>
            <h3 style={{ fontSize: 'clamp(1.5rem,3.2vw,2.3rem)', fontWeight: 900, textTransform: 'uppercase', margin: '0 0 .3rem', letterSpacing: -1, lineHeight: 1.1 }}>{e.school}</h3>
            <p style={{ fontSize: '1.2rem', color: 'var(--c-pink)', fontWeight: 800, margin: 0 }}>{e.detail}</p>
          </motion.div>
        ))}
      </div>
      <h3 style={{ margin: '3rem 0 1.5rem', color: 'var(--c-red)', letterSpacing: 4, textTransform: 'uppercase', fontWeight: 900 }}>Courses &amp; certifications</h3>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(300px,1fr))', gap: '2rem' }}>
        {certs.map((c, i) => (
          <motion.div key={c.name} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.15 }}
            style={{ padding: '1.5rem', ...brutal }}>
            <h4 style={{ margin: 0, fontSize: '1.3rem', fontWeight: 900, textTransform: 'uppercase' }}>{c.name}</h4>
            <p style={{ margin: '.3rem 0 .8rem', color: 'var(--c-pink)', fontWeight: 800 }}>{c.when}</p>
            <p style={{ margin: 0, fontFamily: "'Fira Code', monospace", fontSize: '.92rem', lineHeight: 1.7 }}>{c.detail}</p>
          </motion.div>
        ))}
      </div>
    </Wrap>
  </section>
);

const Contact = () => (
  <section id="contact" className="pf-section" style={{ textAlign: 'center' }}>
    <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}>
      <span style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'rgba(0,0,0,.1)', padding: '.5rem 1rem', borderRadius: 50, fontSize: '.9rem', marginBottom: '1rem', textTransform: 'uppercase', fontWeight: 600 }}>
        <span style={{ color: '#00cc00' }}>●</span> Open to Work &amp; Freelance
      </span>
      <h2 className="title-sans" style={{ color: 'var(--c-yellow)', marginBottom: '1.5rem', lineHeight: 0.9 }}>Let’s build</h2>
      <h2 className="title-sans" style={{ marginBottom: '1.5rem', lineHeight: 0.9 }}>something impactful.</h2>
      <p style={{ fontSize: '1.4rem', maxWidth: 600, margin: '0 auto 2rem', color: 'var(--c-red)', fontWeight: 800 }}>
        I’m currently open to freelance work, collaborations and internships.
      </p>
      <div style={{ display: 'flex', justifyContent: 'center', gap: '2.5rem', flexWrap: 'wrap', marginBottom: '2rem' }}>
        <motion.a whileHover={{ scale: 1.2 }} href={MAIL_HREF} target="_blank" rel="noreferrer" style={{ color: '#EA4335' }} aria-label="Email"><Mail size={40} /></motion.a>
        <motion.a whileHover={{ scale: 1.2 }} href="https://linkedin.com" target="_blank" rel="noreferrer" style={{ color: '#0A66C2' }} aria-label="LinkedIn"><FaLinkedin size={36} /></motion.a>
        <motion.a whileHover={{ scale: 1.2 }} href="https://github.com/souradeep1122" target="_blank" rel="noreferrer" style={{ color: 'var(--text-dark)' }} aria-label="GitHub"><FaGithub size={36} /></motion.a>
      </div>
      <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '2rem' }}>
        <a href={MAIL_HREF} target="_blank" rel="noreferrer" style={{ background: 'var(--c-yellow)', color: 'var(--text-dark)', padding: '1rem 3rem', borderRadius: 50, fontSize: '1.2rem', fontWeight: 800, textTransform: 'uppercase' }}>Hire Me</a>
        <a href={MAIL_HREF} target="_blank" rel="noreferrer" style={{ border: '2px solid var(--c-yellow)', color: 'var(--c-red)', padding: '1rem 3rem', borderRadius: 50, fontSize: '1.2rem', fontWeight: 800, textTransform: 'uppercase' }}>Let’s Talk</a>
      </div>
      <p style={{ opacity: 0.5, fontSize: '.9rem' }}>© {new Date().getFullYear()} Souradeep Saha. Designed &amp; built with care.</p>
    </motion.div>
  </section>
);

/* ---------- page ---------- */
const Portfolio: React.FC = () => {
  const reduce = useReducedMotion();
  return (
    <>
      <GlobalStyles />
      {/* animated grid behind everything */}
      <div aria-hidden style={{ position: 'fixed', inset: 0, zIndex: 0, opacity: 0.35, pointerEvents: 'auto' }}>
        <ShapeGrid direction="diagonal" speed={reduce ? 0 : 0.4} borderColor="#e9c9a0" squareSize={44} hoverFillColor="#EFB11D" hoverTrailAmount={4} />
      </div>
      {!reduce && <SplashCursor />}
      <Navbar />
      <main style={{ position: 'relative', zIndex: 2 }}>
        <Hero />
        <CurvedLoop marqueeText="MERN Stack ✦ UI/UX Design ✦ Figma ✦ React ✦ Node.js ✦ " speed={1.5} />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Education />
        <Contact />
      </main>
    </>
  );
};

export default Portfolio;