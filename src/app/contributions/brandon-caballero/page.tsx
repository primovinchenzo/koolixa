import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import styles from './brandon.module.css';

export const metadata: Metadata = {
  title: 'Backup & Recovery Plan | Brandon Caballero - Class Presentation',
  description: 'Technical module presentation on Website Backup & Recovery Strategy by Brandon Caballero for the KOOLIXA project.',
};

export default function BrandonCaballeroPage() {
  const strategyPoints = [
    {
      title: 'Automated Backups',
      desc: 'Daily full backups and hourly incremental backups to capture all changes across active websites.',
    },
    {
      title: 'Restore Points & Retention',
      desc: 'Multiple backup versions retained for flexible rollback and instant disaster recovery.',
    },
    {
      title: 'Multi-Location Storage',
      desc: 'On-site and cloud redundancy to ensure data is always accessible regardless of physical hardware status.',
    },
    {
      title: 'Encryption & Security',
      desc: 'All backup data encrypted and protected against unauthorized access or tampering.',
    },
  ];

  const recoverySteps = [
    {
      step: '01',
      title: 'Detect',
      desc: 'Monitor for any failed backups, unusual changes, or other issues to begin backup recovery process immediately.',
    },
    {
      step: '02',
      title: 'Restore',
      desc: 'Recover the most recent clean backup from the correct source, prioritising the most important site data first.',
    },
    {
      step: '03',
      title: 'Verify',
      desc: 'Check that links, pages, forms, and core features work correctly before going live.',
    },
    {
      step: '04',
      title: 'Notify Users',
      desc: 'Keep users updated during the recovery process and send a final confirmation once everything is back to normal.',
    },
  ];

  return (
    <div className={styles.container}>
      <div className="container">
        {/* Breadcrumb */}
        <div className={styles.breadcrumb}>
          <Link href="/contributions">Contributions</Link>
          <span>/</span>
          <span className={styles.current}>Brandon Caballero</span>
        </div>

        {/* Hero Area */}
        <section className={styles.heroSection}>
          <span className={styles.authorBadge}>Module Presenter: Brandon Caballero</span>
          <h1 className={styles.title}>Backup & Recovery Plan</h1>
          <p className={styles.subtitle}>
            A structured system for protecting website data by creating regular copies that can be restored when needed to continue running a website.
          </p>
        </section>

        {/* Purpose & Importance */}
        <section className={styles.section}>
          <div className={styles.purposeCard}>
            <h2>Purpose & Importance of a Backup Plan</h2>
            <p>
              The purpose and the importance of a backup plan is to protect against risks such as hardware failure, human error, cyberattacks, and natural disasters.
            </p>
            <p className={styles.highlightText}>
              It keeps user websites available and minimizes downtime when something goes wrong.
            </p>
          </div>
        </section>

        {/* Risks You Can't Afford to Ignore */}
        <section className={styles.section}>
          <div className={styles.riskCard}>
            <div className={styles.riskHeader}>
              <span className={styles.riskBadge}>Critical Risk Analysis</span>
              <h2>Risks You Can't Afford to Ignore</h2>
            </div>
            <p>
              Over <strong>60 percent of small businesses lose data</strong> because they lack proper backups. For a platform like ours where thousands of users depend on us to keep their websites running, the stakes are even higher.
            </p>
            <p>
              A single outage doesn't just cause downtime; it destroys user trust, and damages a company’s reputation.
            </p>
          </div>
        </section>

        {/* Backup Strategy */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Our Backup Strategy</h2>
          <div className={styles.strategyGrid}>
            {strategyPoints.map((item, idx) => (
              <div key={idx} className={styles.strategyCard}>
                <div className={styles.strategyIcon}>✓</div>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Recovery Process */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>The Recovery Process</h2>
          <div className={styles.recoveryGrid}>
            {recoverySteps.map((item) => (
              <div key={item.step} className={styles.recoveryCard}>
                <span className={styles.stepNum}>{item.step}</span>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Next Steps & Contact */}
        <section className={styles.section}>
          <div className={styles.nextStepsCard}>
            <h2>Next Steps & Contact</h2>
            <ul className={styles.nextList}>
              <li>Ongoing monitoring and periodic testing of backups</li>
              <li>Continuous improvement based on previous downtimes for our website</li>
              <li>Reach out to our backup and recovery team with questions or feedback</li>
            </ul>
            <div className={styles.btnRow}>
              <Link href="/contact" className={styles.contactBtn}>
                Contact Backup & Recovery Team
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
