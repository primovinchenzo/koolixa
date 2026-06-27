import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import styles from './about.module.css';

export const metadata: Metadata = {
  title: 'About Our Web Operations Mission',
  description: 'Understand the KOOLIXA mission: we construct premium websites for businesses and manage their hosting operations, security, and content updates.',
};

export default function AboutPage() {
  const values = [
    {
      title: 'Premium Web Engineering',
      desc: 'We reject template-based drag-and-drop systems. We build modern, type-safe Next.js codebases designed for fast loading speed, semantic layout structure, and SEO crawl visibility.',
    },
    {
      title: 'Built-In Security Posture',
      desc: 'We integrate security parameters directly during construction. Every website we build includes active WAF rules, SSL enforcement, and secure backend form routers.',
    },
    {
      title: 'Continuous Maintenance',
      desc: 'We support our clients for the long haul. We monitor site uptime, manage DNS updates, configure business emails, and coordinate content edits with strict SLA response times.',
    },
  ];

  const executiveTeam = [
    {
      name: 'CEO & Founder',
      role: 'Business Strategy & Client Partnerships',
      bio: 'Manages corporate hiring, client onboarding, financial operations, and support-desk SLA compliance.',
    },
    {
      name: 'CTO & Engineering Lead',
      role: 'Web Systems Architecture & Security Standards',
      bio: 'Oversees codebase guidelines, Vercel deployments, domain security configurations, and database routers.',
    },
  ];

  return (
    <div className={styles.container}>
      <div className="container">
        {/* Intro */}
        <section className={styles.header}>
          <span className={styles.badge}>Our Mission</span>
          <h1 className={styles.title}>The Web Operations Partner</h1>
          <p className={styles.subtitle}>
            KOOLIXA was founded to bridge the gap between creative design and technical systems stability. We build beautiful websites and provide the continuous engineering, security, and operations support to keep them growing.
          </p>
        </section>

        {/* Corporate Values */}
        <section className={styles.valuesSection}>
          <h2 className={styles.sectionTitle}>Foundational Engineering Values</h2>
          <div className={styles.valuesGrid}>
            {values.map((val, idx) => (
              <div key={idx} className={styles.valueCard}>
                <span className={styles.cardIndex}>0{idx + 1}</span>
                <h3>{val.title}</h3>
                <p>{val.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Operational Framework */}
        <section className={styles.frameworkSection}>
          <div className={styles.frameworkBox}>
            <h2>Operational Governance</h2>
            <p>
              Building and maintaining high-quality web presence requires strict workflow standards. KOOLIXA manages operations using clear policies:
            </p>
            <ul className={styles.frameworkList}>
              <li>
                <strong>Experienced Web Engineers:</strong> Our developers are vetted experts in TypeScript, React, and serverless database integration.
              </li>
              <li>
                <strong>Continuous Security Auditing:</strong> We scan client sites daily for vulnerability alerts, expired SSL certifications, and malware signatures.
              </li>
              <li>
                <strong>SLA-Backed Support Desk:</strong> Content updates, domain transfers, and mailbox configurations are handled by our technical technicians with guaranteed speed.
              </li>
            </ul>
          </div>
        </section>

        {/* Leadership */}
        <section className={styles.leadershipSection}>
          <h2 className={styles.sectionTitle}>Executive Management</h2>
          <div className={styles.teamGrid}>
            {executiveTeam.map((member, idx) => (
              <div key={idx} className={styles.teamCard}>
                <h3>{member.name}</h3>
                <span className={styles.memberRole}>{member.role}</span>
                <p className={styles.memberBio}>{member.bio}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Bottom CTA */}
        <section className={styles.cta}>
          <h2>Launch Your New Web Presence</h2>
          <p>Let’s discuss your design ideas, feature requirements, and ongoing support parameters.</p>
          <Link href="/contact" className={styles.ctaBtn}>
            Speak with an Engineering Lead
          </Link>
        </section>
      </div>
    </div>
  );
}
