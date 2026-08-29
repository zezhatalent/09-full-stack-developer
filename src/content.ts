import type { Content } from './components/Sections';

export const content: Content = {
  name: 'Dev Sharma',
  role: 'Full Stack Developer',
  tagline: 'Building end-to-end web experiences',
  photo: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop',
  email: 'dev@fullstackforge.dev',
  phone: '+91 99100 67890',
  location: 'Noida, India',
  languages: ['English', 'Hindi', 'Punjabi'],
  socials: [
    { label: 'GitHub', href: 'https://github.com' },
    { label: 'LinkedIn', href: 'https://linkedin.com' },
    { label: 'Portfolio', href: 'https://example.com' },
  ],
  about: [
    'I am a full stack developer who loves owning a feature from the pixel to the database. Over 7 years I have built web products where the frontend feels delightful and the backend hums reliably behind it.',
    'When you hand me a product, I see the whole journey — the interface, the API, the data model, the deployment. I bring the two halves of the stack together as one seamless whole.',
  ],
  services: [
    { title: 'Web App Development', desc: 'End-to-end builds from a blank repo to production — React frontends with APIs that stay fast under load.', icon: '🌐' },
    { title: 'API Design', desc: 'REST and GraphQL APIs that are documented, versioned and genuinely pleasant for other teams to consume.', icon: '🔗' },
    { title: 'Database Architecture', desc: 'Schema design and migration discipline for PostgreSQL and MongoDB that scale without drama.', icon: '🗄️' },
    { title: 'E-commerce Builds', desc: 'Storefronts, carts, payments and order flows wired together securely and shipped quickly.', icon: '🛒' },
    { title: 'Performance Tuning', desc: 'Core Web Vitals, bundle budgets and query tuning that make apps feel instant on any device.', icon: '⚡' },
    { title: 'Review & Mentoring', desc: 'Structured code review, pairing and standards that quietly raise the whole team’s bar.', icon: '🎯' },
  ],
  skills: [
    { name: 'React / Next.js', level: 95, note: 'Component architecture' },
    { name: 'TypeScript', level: 94, note: 'Typed end to end' },
    { name: 'Node.js', level: 92, note: 'APIs & services' },
    { name: 'SQL / MongoDB', level: 88, note: 'Data modelling' },
    { name: 'CI/CD & AWS', level: 85, note: 'Deploys that don’t scare' },
  ],
  skillsIcons: [
    { name: 'React / Next.js', note: 'Component architecture', icon: '⚛️' },
    { name: 'Node.js', note: 'APIs & services', icon: '📦' },
    { name: 'PostgreSQL / Mongo', note: 'Data modelling', icon: '🗄️' },
    { name: 'AWS & Docker', note: 'Ship with confidence', icon: '☁️' },
  ],
  stats: [
    { label: 'Full-stack apps', value: 40, suffix: '+' },
    { label: 'Users served', value: 5, suffix: 'M+' },
    { label: 'APIs built', value: 80, suffix: '+' },
    { label: 'Uptime maintained', value: 99, suffix: '.9%' },
  ],
  experience: [
    {
      role: 'Senior Full Stack Developer',
      company: 'StackHouse',
      period: '2021 — Present',
      desc: 'Architect and build features across a React + Node + MongoDB platform serving 5M users, mentoring a team of 5.',
    },
    {
      role: 'Full Stack Developer',
      company: 'Appliance Co.',
      period: '2019 — 2021',
      desc: 'Delivered customer dashboards and internal tools with a GraphQL API and real-time updates.',
    },
    {
      role: 'Web Developer',
      company: 'BrightStudio',
      period: '2018 — 2019',
      desc: 'Built marketing sites and e-commerce frontends, then grew into backend and database work.',
    },
  ],
  education: [
    {
      degree: 'B.Tech — Computer Science',
      school: 'Dr. A.P.J. Abdul Kalam Technical University',
      period: '2014 — 2018',
      desc: 'Algorithms, databases and software engineering with a heavy dose of side projects.',
    },
    {
      degree: 'PG Diploma — Full Stack Development',
      school: 'NIIT',
      period: '2018 — 2019',
      desc: 'Intensive web engineering covering frontend patterns, distributed systems and deployment.',
    },
  ],
  certificates: [
    'AWS Certified Developer — Associate',
    'MongoDB Certified Developer',
    'Meta Full Stack Engineer Certificate',
    'freeCodeCamp Relational Database',
  ],
  awards: [
    { title: 'Engineer of the Year', detail: 'Recognised for shipping the analytics platform and mentoring five juniors to their first promotions.', year: '2023' },
    { title: 'Hackathon Winner — Fintech', detail: 'First place for building a full payment flow with Node and React in 36 hours.', year: '2022' },
    { title: 'Open Source Contributor', detail: 'Top-20 contributor in an e-commerce framework adopted by more than 3,000 teams.', year: '2021' },
  ],
  cards: [
    {
      title: 'Marketplace Platform',
      desc: 'Full-stack marketplace with search, payments and real-time messaging. Handles 1M+ requests daily.',
      stack: 'React, Node, MongoDB',
      metric: '1M+ reqs/day',
      image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=400&fit=crop',
    },
    {
      title: 'Analytics SaaS',
      desc: 'Multi-tenant analytics product with role-based access, custom dashboards and live event streaming.',
      stack: 'Next.js, GraphQL, Redis',
      metric: 'multi-tenant',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=400&fit=crop',
    },
    {
      title: 'Community App',
      desc: 'A social platform with feeds, notifications and chat built on a scalable Node + WebSocket backend.',
      stack: 'React, Node, WebSockets',
      metric: '50k MAU',
      image: 'https://images.unsplash.com/photo-1516259762381-22954d7d3ad2?w=800&h=400&fit=crop',
    },
  ],
  projects: [
    {
      title: 'Realtime Analytics SaaS',
      desc: 'Multi-tenant analytics platform with live event streaming, role-based dashboards and a GraphQL API serving 40k customers.',
      image: 'https://images.unsplash.com/photo-1537832816519-689ad163238b?w=800&h=500&fit=crop',
      tags: ['Next.js', 'GraphQL', 'Redis'],
    },
    {
      title: 'Marketplace Platform',
      desc: 'Full-stack marketplace handling 1M+ requests a day with search, payments and real-time chat between buyers and sellers.',
      image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=500&fit=crop',
      tags: ['React', 'Node', 'MongoDB'],
    },
    {
      title: 'Social Feed App',
      desc: 'A community app with feeds, notifications and WebSocket chat that grew to 50k monthly active users in its first year.',
      image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800&h=500&fit=crop',
      tags: ['WebSockets', 'React', 'Node'],
    },
  ],
  hobbies: [
    { name: 'Game Jams', note: '48-hour builds with old school friends', icon: '🎮' },
    { name: 'Keyboard Building', note: 'Hand-wired splits and custom firmware', icon: '⌨️' },
    { name: 'Cricket', note: 'Weekend gully matches', icon: '🏏' },
    { name: 'Pour-over Coffee', note: 'A quiet, obsessive ritual', icon: '☕' },
  ],
  testimonials: [
    {
      quote:
        'Dev is the rare engineer who can scope, build and deploy a whole feature independently — beautifully.',
      author: 'Aisha Khan',
      role: 'Engineering Lead, StackHouse',
    },
    {
      quote:
        'His code crosses the frontend/backend boundary so cleanly that the seams just disappear.',
      author: 'Marco Silva',
      role: 'CTO, Appliance Co.',
    },
  ],
  footnote: '© Dev Sharma · React, TypeScript & Framer Motion',
  ticker: ['React', 'Next.js', 'Node.js', 'TypeScript', 'MongoDB', 'GraphQL'],

  blogPosts: [
    { title: 'Building Real-Time Applications with WebSockets', excerpt: 'Creating responsive, live-updating features using modern WebSocket techniques.', date: '2024-01-13', tags: ['WebSockets', 'Real-Time'], readTime: '9 min' },
    { title: 'Full-Stack TypeScript: One Language to Rule Them All', excerpt: 'Leveraging TypeScript across your entire stack for better developer experience.', date: '2024-01-04', tags: ['TypeScript', 'Architecture'], readTime: '7 min' },
  ],

  faqItems: [
    { question: 'What tech stack do you prefer?', answer: 'I work with React/Next.js on the frontend, Node.js on the backend, and PostgreSQL/MongoDB for data storage.' },
    { question: 'How do you handle state management?', answer: 'I use Redux Toolkit or Zustand for complex state, React Query for server state, and Context for simple shared state.' },
    { question: 'What is your approach to API design?', answer: 'I design RESTful APIs following OpenAPI specs, with GraphQL for complex data requirements.' },
    { question: 'How do you ensure code quality?', answer: 'I use ESLint, Prettier, unit tests with Jest, and end-to-end tests with Cypress.' },
  ],

  skillsDetailed: [
    { category: 'Frontend', items: [
      { name: 'React/Next.js', level: 95 },
      { name: 'TypeScript', level: 92 },
      { name: 'Tailwind CSS', level: 90 },
    ]},
    { category: 'Backend', items: [
      { name: 'Node.js', level: 92 },
      { name: 'PostgreSQL', level: 88 },
      { name: 'MongoDB', level: 85 },
    ]},
  ],

  contactMethods: [
    { type: 'Email', value: 'fullstack@email.com', icon: '📧', href: 'mailto:fullstack@email.com' },
    { type: 'Portfolio', value: 'fullstack.dev', icon: '🌐', href: 'https://fullstack.dev' },
  ],
};