import { PortfolioData } from '../types';

export const PORTFOLIO_DATA: PortfolioData = {
  personal: {
    nameFirst: 'SOURADEEP',
    nameLast: 'SAHA',
    eyebrow: '✦ SOFTWARE DEVELOPER AND BUILDER ✦',
    backgroundWord: 'BUILDER',
    location: 'KOLKATA, INDIA',
    status: 'OPEN TO WORK',
    email: 'souradeep418saha@gmail.com',
    cvUrl: 'cv.pdf',
    githubUrl: 'https://github.com/souradeep1122',
    linkedinUrl: 'https://linkedin.com',
    aboutHeadlineLead: 'About',
    aboutHeadlineLime: 'me.',
    aboutBio1:
      'Passionate MERN stack developer and UI/UX designer who loves building interactive web applications and crafting intuitive user experiences. Based in Kolkata, I develop full-stack products while exploring modern interface design, motion, and digital aesthetics.',
    aboutBio2:
      'Outside code, I enjoy videography and personal fitness. I speak English, Hindi, and Bengali.',
    aboutBullets: [
      'B.Tech in Computer Science and Technology at UEM Kolkata (CGPA 8.19 till 7th sem)',
      'Hands-on full-stack engineering with React, Node.js, Express, MongoDB & AWS Cloud',
      'UI/UX design background crafting wireframes, interactive prototypes & design systems in Figma',
      'Multilingual communicator fluent in English, Hindi, and Bengali',
    ],
    bento: {
      experience: {
        label: 'EXPERIENCE',
        role: 'UI/UX Intern',
        company: 'Kyptronix LLP',
        period: 'Jul 2026 – Sep 2026 • 3 mos',
        tags: ['Figma', 'Prototyping', 'Glassmorphism', 'iOS & Android'],
      },
      education: {
        label: 'EDUCATION',
        degree: 'B.Tech in CST (CSE)',
        school: 'UEM Kolkata • CGPA 8.19',
        school2: 'Kendriya Vidyalaya Ordnance Factory Dum Dum',
      },
      currentFocus: {
        label: 'CURRENT FOCUS',
        title: 'MERN Stack + UI/UX Design',
        tags: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'AWS S3', 'Figma'],
      },
      collaboration: {
        label: 'COLLABORATION',
        title: 'Have an idea? Let’s build something impactful together.',
        cta: 'Get in Touch',
      },
    },
  },

  stats: [
    { value: '01', label: 'Internship Experience' },
    { value: '04', label: 'Featured Web Projects' },
    { value: '02', label: 'Certifications Earned' },
    { value: '8.19', label: 'Engineering CGPA' },
  ],

  marqueeSkills: [
    'MERN STACK',
    'REACT.JS',
    'NODE.JS',
    'EXPRESS',
    'MONGODB',
    'FIGMA',
    'TYPESCRIPT',
    'TAILWIND CSS',
    'AWS CLOUD',
    'REST APIS',
    'UI/UX DESIGN',
    'RESPONSIVE WEB',
  ],

  navLinks: [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Achievements', href: '#achievements' },
    { name: 'Contact', href: '#contact' },
  ],

  socialLinks: [
    {
      name: 'GitHub',
      href: 'https://github.com/souradeep1122',
      ariaLabel: 'View Souradeep Saha GitHub profile',
      type: 'github',
    },
    {
      name: 'LinkedIn',
      href: 'https://linkedin.com',
      ariaLabel: 'Connect with Souradeep Saha on LinkedIn',
      type: 'linkedin',
    },
    {
      name: 'Email',
      href: 'mailto:souradeep418saha@gmail.com',
      ariaLabel: 'Send email to souradeep418saha@gmail.com',
      type: 'email',
    },
  ],

  skillGroups: [
    {
      id: 'web-design',
      title: 'Frontend & UI/UX Design',
      items: ['HTML5', 'CSS3', 'Tailwind CSS', 'React.js', 'Figma', 'Canva'],
    },
    {
      id: 'backend-databases',
      title: 'Backend & Databases',
      items: ['Node.js', 'Express.js', 'MongoDB', 'MySQL', 'REST APIs'],
    },
    {
      id: 'languages',
      title: 'Programming Languages',
      items: ['JavaScript', 'TypeScript', 'Python', 'Java'],
    },
    {
      id: 'cloud',
      title: 'Cloud & Infrastructure',
      items: ['AWS EC2', 'AWS S3', 'AWS RDS', 'VPS Hosting'],
    },
    {
      id: 'course-work',
      title: 'Core Computer Science',
      items: ['Data Structures', 'Operating Systems', 'AI/ML', 'OOPS', 'Database Management'],
    },
  ],

  projects: [
    {
      id: 'book-review',
      number: '01',
      title: 'Book Review Platform',
      category: 'WEB APPLICATION',
      badge: 'BUILT WITH VANILLA JS & CSS3',
      desc: 'Interactive literary discovery and review web platform featuring curated books, dynamic reader star ratings, and community reviews in a clean, high-contrast responsive interface.',
      statNumber: '50+',
      statLabel: 'CURATED BOOKS & READER REVIEWS',
      highlights: [
        'Structured modular responsive layout with modern CSS & vanilla JavaScript DOM APIs',
        'Interactive rating sliders, genre filtering, and instant review submission flows',
        'Clean typography, accessible focus states, and fast cross-device rendering',
      ],
      tags: ['HTML5', 'CSS3', 'JavaScript', 'Responsive UI', 'DOM Manipulation'],
      image: '/projects/book-review.png',
      url: 'https://souradeep1122.github.io/Book-Review-Project/index.html',
      githubUrl: 'https://github.com/souradeep1122/Book-Review-Project',
    },
    {
      id: 'shoe-shop',
      number: '02',
      title: 'Footwear E-commerce',
      category: 'E-COMMERCE STOREFRONT',
      badge: 'MODERN RETAIL EXPERIENCE',
      desc: 'High-conversion footwear storefront showcasing interactive product showcases, dynamic cart management, animated size & color selections, and seamless mobile checkout flows.',
      statNumber: '100%',
      statLabel: 'MOBILE-FIRST RESPONSIVE ARCHITECTURE',
      highlights: [
        'Interactive product catalog with category filters and instant live search',
        'Cart state management with dynamic pricing calculations and smooth animations',
        'Optimized asset loading delivering near-instant page transitions across devices',
      ],
      tags: ['HTML5', 'CSS3', 'JavaScript', 'E-commerce UX', 'State Management'],
      image: '/projects/ecommerce.png',
      url: 'https://souradeep1122.github.io/shoe-shop/',
      githubUrl: 'https://github.com/souradeep1122/shoe-shop',
    },
    {
      id: 'travellers-treasure',
      number: '03',
      title: 'Travellers Treasure',
      category: 'FULL-STACK TRAVEL APP',
      badge: 'POWERED BY NODE.JS & EXPRESS',
      desc: 'Full-stack travel portal powered by a Node.js and Express backend, featuring destination curation, travel itinerary guides, server-side routing, and dynamic cover transitions.',
      statNumber: 'RESTful',
      statLabel: 'SERVER-SIDE ARCHITECTURE & ROUTING',
      highlights: [
        'Architected Node.js and Express backend deployed to Render cloud hosting',
        'Server-side rendering and dynamic destination content delivery',
        'Immersive cover transition animations and responsive travel guides',
      ],
      tags: ['Node.js', 'Express.js', 'JavaScript', 'CSS3', 'Render Cloud'],
      image: '/projects/travellers-treasure.png',
      url: 'https://travellers-treasure.onrender.com/Cover',
    },
    {
      id: 'animated-website',
      number: '04',
      title: 'Creative Animated Showcase',
      category: 'CREATIVE INTERACTIONS',
      badge: 'INTERACTIVE MOTION DESIGN',
      desc: 'Experimental interactive web showcase designed to push the boundaries of scroll-choreographed animations, hover states, and dynamic visual transitions from front to back.',
      statNumber: '60 FPS',
      statLabel: 'HARDWARE-ACCELERATED FLUID MOTION',
      highlights: [
        'Smooth scroll choreography and layered perspective animations',
        'Dynamic micro-interactions and custom cursor follow effects',
        'Fluid CSS animations crafted for 60fps performance across viewports',
      ],
      tags: ['HTML5', 'CSS3', 'JavaScript', 'Web Animations', 'Interactive UI'],
      image: '/projects/animated-website.png',
      url: 'https://souradeep1122.github.io/Animated-website/',
      githubUrl: 'https://github.com/souradeep1122/Animated-website',
    },
  ],

  experience: [
    {
      id: 'kyptronix-intern',
      role: 'UI/UX Intern',
      company: 'Kyptronix LLP',
      period: 'Jul 2026 – Sep 2026',
      duration: '3 months',
      bullets: [
        'Contributed to multiple UI/UX projects across mobile and desktop including Android and iOS applications.',
        'Designed modern interfaces with glassmorphism themes, focusing on visual consistency, usability, and responsive layouts.',
        'Created wireframes, user flows, interactive prototypes, and high-fidelity designs in Figma to communicate and validate ideas.',
        'Designed and refined custom icons and UI elements, keeping one consistent visual language across screens and platforms.',
      ],
      tags: ['Figma', 'Wireframes', 'Prototyping', 'Glassmorphism', 'Android + iOS'],
    },
  ],

  education: [
    {
      id: 'uem-kolkata',
      school: 'University of Engineering and Management, Kolkata',
      degree: 'B.Tech in Computer Science and Technology',
      detail: 'B.Tech in Computer Science and Technology • CGPA 8.19 (till 7th sem)',
    },
    {
      id: 'kv-dum-dum',
      school: 'Kendriya Vidyalaya Ordnance Factory Dum Dum',
      degree: 'Higher Secondary & Secondary Education',
      detail: 'Class X (CBSE) 83% • Class XII (CBSE) 73%',
    },
  ],

  certifications: [
    {
      id: 'aws-cloud-practitioner',
      name: 'AWS Cloud Practitioner Essentials',
      issuer: 'Amazon Web Services',
      when: 'Mar 2025',
      detail:
        'Cloud fundamentals, global infrastructure, security compliance, EC2, S3, RDS.',
    },
    {
      id: 'foundations-ux',
      name: 'Foundations of User Experience (UX) Design',
      issuer: 'LinkedIn',
      when: 'Dec 2025',
      detail:
        'Usability evaluation, information architecture, wireframing, and the design sprint framework.',
    },
  ],
};
