import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import styles from './about.module.css';

export const metadata: Metadata = {
  title: 'About Our Mission & Leadership',
  description: 'Learn about the KOOLIXA mission, operational leadership principles, cybersecurity posture, and technical standards.',
};

export default function AboutPage() {
  const values = [
    {
      title: 'Resilience First',
      desc: 'We design and build systems under the assumption that components fail. Our architecture relies on rolling backup replication, redundancies, and instant rollback capabilities.',
    },
    {
      title: 'Proactive Auditing',
      desc: 'Reactive support is a failure. We run scheduled vulnerability reviews, log monitoring checks, and diagnostic scripts to contain threats before they escalate.',
    },
    {
      title: 'Absolute Transparency',
      desc: 'We communicate project scopes, resource allocations, and threat mitigation actions clearly. Clients receive precise logs and clear metric reporting.',
    },
  ];

  const executiveTeam = [
    {
      name: 'CEO & Founder',
      role: 'Strategic Operations & Client Governance',
      bio: 'Leading hiring, financial management, and SLA compliance. Coordinates KOOLIXA operations with client requirements.',
    },
    {
      name: 'CTO & Technical Director',
      role: 'Systems Architecture & Security Policy',
      bio: 'Directs developer guidelines, co-managed SOC relationships, vulnerability standards, and recovery plans.',
    },
  ];

  return (
    <div className={styles.container}>
      <div className="container">
        {/* Intro */}
        <section className={styles.header}>
          <span className={styles.badge}>Our Mission</span>
          <h1 className={styles.title}>The KOOLIXA Architecture</h1>
          <p className={styles.subtitle}>
            KOOLIXA was founded to bridge the gap between complex digital engineering and stable B2B infrastructure. We design resilient systems that let organizations focus on scaling.
          </p>
        </section>

        {/* Corporate Values */}
        <section className={styles.valuesSection}>
          <h2 className={styles.sectionTitle}>Operational Core Values</h2>
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
              Maintaining system uptime requires structured organizational control. KOOLIXA enforces operational policies covering hiring, support technician certifications, and budget governance:
            </p>
            <ul className={styles.frameworkList}>
              <li>
                <strong>Strict Hiring Requirements:</strong> Every technician, developer, and analyst undergoes comprehensive background vetting and maintains active certifications (e.g., Security+, Network+).
              </li>
              <li>
                <strong>Tool Standardization:</strong> We only utilize audited, co-managed toolsets for endpoint logging, data replication, and ticket management.
              </li>
              <li>
                <strong>QA Review Processes:</strong> Our launch managers run build validations, keyboard navigation audits, and security check scripts before deploying code.
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
          <h2>Align Your Infrastructure With KOOLIXA</h2>
          <p>Request an audit of your current systems, directory configurations, and network posture.</p>
          <Link href="/contact" className={styles.ctaBtn}>
            Speak with Leadership
          </Link>
        </section>
      </div>
    </div>
  );
}
