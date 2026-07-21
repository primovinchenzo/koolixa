import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import styles from './vincent.module.css';
import MatrixRainCanvas from '@/components/common/MatrixRainCanvas';

export const metadata: Metadata = {
  title: 'System Architecture & Lead Engineering | Vincent Centeno - Class Presentation',
  description: 'Technical module presentation on KOOLIXA End-to-End System Architecture, Full-Stack Next.js 16 Engineering, and Platform Orchestration by Vincent Centeno.',
};

export default function VincentCentenoPage() {
  const architecturalPillars = [
    {
      title: 'Full-Stack Next.js 16 Architecture',
      desc: 'Designed and built the core App Router foundation with TypeScript type safety, Turbopack bundling, and 30+ pre-rendered static routes for instant load times.',
    },
    {
      title: 'Automated AI Support Engine',
      desc: 'Engineered the floating AI Tech Support Chatbox and Formspree dispatch engine, automatically forwarding client tickets to vinnybusiness13@gmail.com.',
    },
    {
      title: 'Strategic B2B Pivot',
      desc: 'Refactored platform messaging to specifically target companies without an in-house website, positioning KOOLIXA as a total build, maintain, and secure solution.',
    },
    {
      title: 'Team Module Orchestration',
      desc: 'Integrated all 9 classmate research modules into a unified presentation directory with dedicated subpages, responsive layouts, and sitemap registration.',
    },
  ];

  const techStack = [
    { category: 'Framework & Runtime', tech: 'Next.js 16.2.9 (App Router, Turbopack, React 19)' },
    { category: 'Type Safety', tech: 'TypeScript 5.x with Strict Null Checks & Interfaces' },
    { category: 'Design System', tech: 'Vanilla CSS Modules + Custom Design Tokens (Variables.css)' },
    { category: 'Support & Form Dispatch', tech: 'Formspree API + Custom Route Handler (vinnybusiness13@gmail.com)' },
    { category: 'Search & Navigation', tech: 'Dynamic Sitemap XML, Canonical URLs & OpenGraph Metadata' },
  ];

  const deliverablesHandled = [
    'Engineered 30+ Static & Dynamic Routes with 100% build pass rate',
    'Integrated El Paso TX location updates across footer and contact points',
    'Created Brandon Caballero Backup & Recovery Plan presentation module',
    'Created Erika Williams Licensing & Permits presentation module',
    'Created Nicole Macias Employee Training Plan presentation module',
    'Created Diego Quinones Staffing Structure & Roles presentation module',
    'Created Ignacio Salcido QA & Disaster Recovery presentation module',
    'Created Joel Bustamante Privacy & Compliance presentation module',
    'Created Jacob Medrano Operations Playbook presentation module',
    'Created Diego Salazar Systems Diagnostics presentation module',
    'Created Jesus Garcia & Gabe Venegas Marketing & HQ Location module',
  ];

  return (
    <div className={styles.container}>
      {/* Hypnotic, Ambient Slow Matrix Code Rain Background */}
      <MatrixRainCanvas isHovered={true} speed="slow" opacity={0.28} position="absolute" />

      <div className={`container ${styles.contentWrapper}`}>
        {/* Breadcrumb */}
        <div className={styles.breadcrumb}>
          <Link href="/contributions">Contributions</Link>
          <span>/</span>
          <span className={styles.current}>Vincent Centeno</span>
        </div>

        {/* Hero Area */}
        <section className={styles.heroSection}>
          <span className={styles.authorBadge}>Founder and Lead Architect</span>
          <h1 className={styles.title}>Vincent Centeno</h1>
          <h2 className={styles.subtitleTitle}>System Architecture & Platform Engineering</h2>
          <p className={styles.subtitle}>
            Lead technical visionary and AI pair-engineer behind KOOLIXA. Architected the complete full-stack web platform, responsive UI design system, automated support dispatch engine, and unified all team member modules into a single production platform.
          </p>
        </section>

        {/* Founder & Lead Architect Overview */}
        <section className={styles.section}>
          <div className={styles.founderCard}>
            <span className={styles.cardBadge}>Platform Lead</span>
            <h2>Lead Architect Statement</h2>
            <p className={styles.founderText}>
              “KOOLIXA was engineered to solve a fundamental problem facing growing businesses: most small-to-medium companies lack an in-house web engineering team. As Lead Architect, I designed KOOLIXA to offer an end-to-end service—building, hosting, maintaining, and securing client websites so business owners can focus on their core operations.”
            </p>
          </div>
        </section>

        {/* Core Architectural Accomplishments */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Core Architectural Accomplishments</h2>
          <div className={styles.pillarsGrid}>
            {architecturalPillars.map((pillar, idx) => (
              <div key={idx} className={styles.pillarCard}>
                <span className={styles.pillarNum}>0{idx + 1}</span>
                <h3>{pillar.title}</h3>
                <p>{pillar.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Technology Stack & Specs */}
        <section className={styles.section}>
          <div className={styles.techCard}>
            <span className={styles.cardBadge}>Technical Specification</span>
            <h2>KOOLIXA Engineering Stack</h2>

            <div className={styles.techGrid}>
              {techStack.map((item, idx) => (
                <div key={idx} className={styles.techRow}>
                  <strong className={styles.techCategory}>{item.category}</strong>
                  <span className={styles.techVal}>{item.tech}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* System Integration & Module Orchestration */}
        <section className={styles.section}>
          <div className={styles.deliverablesCard}>
            <span className={styles.cardBadge}>Full Team Orchestration</span>
            <h2>Integrated Deliverables & Team Modules</h2>
            <p className={styles.delivSub}>
              Coordinated and built dedicated presentation subpages for all team members:
            </p>

            <ul className={styles.delivList}>
              {deliverablesHandled.map((item, idx) => (
                <li key={idx}>
                  <svg className={styles.checkIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Navigation */}
        <section className={styles.section}>
          <div className={styles.nextStepsCard}>
            <h2>Full Platform Showcase Complete</h2>
            <p>Explore the live services directory or return to the project contributions landing page.</p>
            <div className={styles.btnRow}>
              <Link href="/services" className={styles.contactBtn}>
                View KOOLIXA Services
              </Link>
              <Link href="/contributions" className={styles.backBtn}>
                Back to All Contributions
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
