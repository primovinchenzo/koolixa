import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import styles from './why-koolixa.module.css';

export const metadata: Metadata = {
  title: 'Why Choose KOOLIXA | Differentiators & SLAs',
  description: 'Understand the KOOLIXA difference: we construct premium websites, secure them from cyber threats, and provide continuous support and maintenance.',
};

export default function WhyKoolixaPage() {
  const differentiators = [
    {
      title: 'Full Lifecycle Partnership vs. Build & Abandon',
      desc: 'Most web design agencies build a site, hand over the files, and walk away. When things break or need updates, you are left stranded. KOOLIXA provides ongoing maintenance, code updates, and operations support.',
    },
    {
      title: 'Built-in Cybersecurity vs. Insecure Templates',
      desc: 'Standard template sites are prime targets for hackers. KOOLIXA builds custom, high-speed code architectures and hardens them with active firewalls, SSL settings, and daily vulnerability scans.',
    },
    {
      title: 'Guaranteed SLAs vs. Slow Agency Response',
      desc: 'Need a text change, a new landing page, or a DNS record fix? We stand by our contracts with a guaranteed support response SLA of under 14 minutes average, keeping your digital storefront open.',
    },
  ];

  const comparison = [
    {
      feature: 'Website Code Architecture',
      koolixa: 'Custom, high-speed Next.js & TypeScript',
      competitor: 'Heavy, slow website builder templates',
      highlight: true,
    },
    {
      feature: 'Website Cybersecurity',
      koolixa: 'WAF firewalls & daily vulnerability scanning',
      competitor: 'None (often left open to exploits)',
      highlight: true,
    },
    {
      feature: 'Long-term Maintenance Support',
      koolixa: 'SLA-backed help desk (<14 mins response)',
      competitor: 'Hourly consulting (slow to schedule)',
      highlight: true,
    },
    {
      feature: 'Backup & Recovery Auditing',
      koolixa: 'Monthly restoration sandbox drills',
      competitor: 'Verification email checks only',
      highlight: false,
    },
    {
      feature: 'Email & Workspace Integration',
      koolixa: 'DKIM/SPF security & user lifecycle setups',
      competitor: 'Left to client to configure',
      highlight: false,
    },
  ];

  return (
    <div className={styles.container}>
      <div className="container">
        {/* Header */}
        <section className={styles.header}>
          <span className={styles.badge}>The KOOLIXA Advantage</span>
          <h1 className={styles.title}>The Dedicated Web Operations Desk</h1>
          <p className={styles.subtitle}>
            A website is a living B2B platform. Discover why companies choose KOOLIXA to design, construct, protect, and maintain their digital assets.
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
            A side-by-side comparison of KOOLIXA’s comprehensive web operations model versus traditional web design agencies.
          </p>

          <div className={styles.tableWrapper}>
            <table className={styles.table}>
              <thead>
                <tr>
                  <th className={styles.colHeader}>Capability / Feature</th>
                  <th className={`${styles.colHeader} ${styles.koolixaHeader}`}>KOOLIXA Web Operations</th>
                  <th className={styles.colHeader}>Traditional Web Agency</th>
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
            <h2>Full-Lifecycle Web Support</h2>
            <p>
              We back our support response times and system uptime with concrete SLA contracts. Let us handle coding, security settings, and backups so your company can grow.
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
