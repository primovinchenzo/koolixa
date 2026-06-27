import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import styles from './careers.module.css';

export const metadata: Metadata = {
  title: 'Careers | Join the KOOLIXA Team',
  description: 'Explore career opportunities at KOOLIXA. Join our IT support technicians, cybersecurity analysts, and web developers.',
};

export default function CareersPage() {
  const roles = [
    {
      title: 'IT Support Technician (Tier II)',
      type: 'Full-Time | Remote / Hybrid (El Paso, TX)',
      desc: 'Handle active ticket logs, escalate complex network queries, provisioning employee credentials, and support client operations.',
      requirements: ['2+ years help desk experience', 'CompTIA Network+ or Security+ certification', 'Strong remote systems administration skills'],
    },
    {
      title: 'Cybersecurity Coordination Analyst',
      type: 'Full-Time | Hybrid (El Paso, TX)',
      desc: 'Conduct scheduled vulnerability reviews, draft policy mappings, manage security alerts, and coordinate threat mitigations with outsourced SOC partners.',
      requirements: ['3+ years in security operations or SOC role', 'Knowledge of NIST CSF and ISO 27001 audit frameworks', 'Experience with vulnerability scanner suites'],
    },
    {
      title: 'Senior Web Systems Developer',
      type: 'Full-Time | Remote (US)',
      desc: 'Engineering high-performance Next.js architectures, tuning Core Web Vitals, implementing secure API routes, and enforcing WCAG accessibility.',
      requirements: ['4+ years professional React/Next.js experience', 'Deep understanding of TypeScript and CSS modules', 'Experience with Vercel deployment setups'],
    },
  ];

  return (
    <div className={styles.container}>
      <div className="container">
        {/* Header */}
        <section className={styles.header}>
          <span className={styles.badge}>Join the Mission</span>
          <h1 className={styles.title}>Hiring Elite Technical Talent</h1>
          <p className={styles.subtitle}>
            KOOLIXA maintains a culture of continuous learning, rigorous engineering, and systems resilience. Explore our capability growth areas.
          </p>
        </section>

        {/* Culture & Benefits */}
        <section className={styles.benefitsSection}>
          <h2 className={styles.sectionTitle}>The KOOLIXA Culture</h2>
          <div className={styles.benefitsGrid}>
            <div className={styles.benefitCard}>
              <h3>Certifications Coverage</h3>
              <p>We pay for your professional training material and examination costs (e.g. CompTIA, AWS, Cisco, GIAC).</p>
            </div>
            <div className={styles.benefitCard}>
              <h3>Stable Systems Mindset</h3>
              <p>We value QA, stable coding workflows, comprehensive test checks, and documentation integrity over fast hacking.</p>
            </div>
            <div className={styles.benefitCard}>
              <h3>Flexible Hybrid Operations</h3>
              <p>Coordinate from home or collaborate from our modern operations office in the El Paso Tech District.</p>
            </div>
          </div>
        </section>

        {/* Job Listings */}
        <section className={styles.rolesSection}>
          <h2 className={styles.sectionTitle}>Open Capability Openings</h2>
          <p className={styles.sectionSubtitle}>
            If you are detailed-oriented, value systems stability, and want to support growing B2B clients, we want to hear from you.
          </p>

          <div className={styles.rolesList}>
            {roles.map((role, idx) => (
              <div key={idx} className={styles.roleCard}>
                <div className={styles.roleHeader}>
                  <div>
                    <h3>{role.title}</h3>
                    <span className={styles.roleType}>{role.type}</span>
                  </div>
                  <Link href="/contact?focus=careers" className={styles.applyBtn}>
                    Apply Now
                  </Link>
                </div>
                <p className={styles.roleDesc}>{role.desc}</p>
                <div className={styles.requirementsBox}>
                  <strong>Core Qualifications:</strong>
                  <ul className={styles.reqList}>
                    {role.requirements.map((req, rIdx) => (
                      <li key={rIdx}>{req}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* General Application */}
        <section className={styles.generalCta}>
          <h2>Don't See Your Role?</h2>
          <p>We are always looking for QA engineers, backup desk specialists, and technical project coordinators. Send us an open inquiry.</p>
          <Link href="/contact" className={styles.ctaBtn}>
            Send Open CV Inquiry
          </Link>
        </section>
      </div>
    </div>
  );
}
