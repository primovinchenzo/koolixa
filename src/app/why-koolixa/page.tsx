import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import styles from './why-koolixa.module.css';

export const metadata: Metadata = {
  title: 'Why Choose KOOLIXA | SLAs & Differentiators',
  description: 'Learn why businesses trust KOOLIXA. Proactive vulnerability audits, guaranteed support response times, and validated backup restoration drills.',
};

export default function WhyKoolixaPage() {
  const differentiators = [
    {
      title: 'Proactive Hardening vs. Reactive Repair',
      desc: 'Traditional MSPs wait for systems to break before fixing them. KOOLIXA runs scheduled vulnerability audits and stability checking scripts to contain issues before they disrupt operations.',
    },
    {
      title: 'Guaranteed SLAs vs. Best-Effort Queues',
      desc: 'Our contract guarantees help desk response times. We maintain an average first-touch resolution SLA of under 14 minutes, supported by certified technicians.',
    },
    {
      title: 'Monthly Verification vs. Blind Backup Trust',
      desc: 'Many providers configure backups and never check them. KOOLIXA executes monthly disaster recovery restores in isolated environments to confirm rollback readiness.',
    },
  ];

  const comparison = [
    {
      feature: 'Help Desk Response Time',
      koolixa: 'SLA Guaranteed (<14 mins average)',
      competitor: 'Best-effort (often 4–24 hours)',
      highlight: true,
    },
    {
      feature: 'Vulnerability Management',
      koolixa: 'Continuous internal/external scanning',
      competitor: 'Yearly or none (reactive patching)',
      highlight: true,
    },
    {
      feature: 'Backup Verifications',
      koolixa: 'Monthly restoration sandbox drills',
      competitor: 'Verification email check only',
      highlight: true,
    },
    {
      feature: 'Project Scoping & Management',
      koolixa: 'Dedicated PMs, weekly status reports',
      competitor: 'Ad-hoc tech-led execution',
      highlight: false,
    },
    {
      feature: 'Technical Team Vetting',
      koolixa: '100% background verified & certified',
      competitor: 'Outsourced lower-tier help desk',
      highlight: false,
    },
  ];

  return (
    <div className={styles.container}>
      <div className="container">
        {/* Header */}
        <section className={styles.header}>
          <span className={styles.badge}>The KOOLIXA Advantage</span>
          <h1 className={styles.title}>Engineered for Continuous Operations</h1>
          <p className={styles.subtitle}>
            We design security and IT operations around predictability. Discover why mid-market enterprises select KOOLIXA.
          </p>
        </section>

        {/* Differentiators Grid */}
        <section className={styles.diffSection}>
          <div className={styles.diffGrid}>
            {differentiators.map((diff, idx) => (
              <div key={idx} className={styles.diffCard}>
                <div className={styles.cardGlow}></div>
                <h3>{diff.title}</h3>
                <p>{diff.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Comparison Table Section */}
        <section className={styles.compareSection}>
          <h2 className={styles.sectionTitle}>How We Compare</h2>
          <p className={styles.sectionSubtitle}>
            A side-by-side comparison of KOOLIXA systems coordination versus standard IT service models.
          </p>

          <div className={styles.tableWrapper}>
            <table className={styles.table}>
              <thead>
                <tr>
                  <th className={styles.colHeader}>Capability / Feature</th>
                  <th className={`${styles.colHeader} ${styles.koolixaHeader}`}>KOOLIXA Approach</th>
                  <th className={styles.colHeader}>Standard IT Provider</th>
                </tr>
              </thead>
              <tbody>
                {comparison.map((row, idx) => (
                  <tr key={idx} className={row.highlight ? styles.highlightRow : ''}>
                    <td className={styles.cellFeature}>{row.feature}</td>
                    <td className={`${styles.cellKoolixa} ${row.highlight ? styles.cellAccent : ''}`}>
                      <span className={styles.checkMark}>✓</span> {row.koolixa}
                    </td>
                    <td className={styles.cellCompetitor}>{row.competitor}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Bottom SLA Callout */}
        <section className={styles.slaCallout}>
          <div className={styles.slaContent}>
            <h2>Backed by SLA Commitments</h2>
            <p>
              We stand by our uptime guarantees and ticket response times. Our agreements clearly outline accountability metrics, ensuring your business stays online.
            </p>
            <div className={styles.slaStats}>
              <div className={styles.slaStat}>
                <strong>&lt; 14m</strong>
                <span>Average Support Response</span>
              </div>
              <div className={styles.slaStat}>
                <strong>99.9%</strong>
                <span>Systems Availability SLA</span>
              </div>
            </div>
            <Link href="/contact" className={styles.ctaBtn}>
              Request SLA Proposal
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
