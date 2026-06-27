import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import styles from '../service-single.module.css';

export const metadata: Metadata = {
  title: 'Backup, Recovery & System Stability Support',
  description: 'Encrypted, immutable off-site data replication, recovery exercises, system stability testing, and rollback readiness audits.',
};

export default function BackupStabilityPage() {
  const features = [
    {
      title: 'Automated, Immutable Backups',
      desc: 'Configuring daily, block-level encrypted replication of company data to off-site, air-gapped repositories. Ensures data cannot be modified or deleted by ransomware.',
    },
    {
      title: 'Disaster Recovery & Rollback Exercises',
      desc: 'We don’t just back up; we test recovery. We run monthly restoration drills to verify that backups boot correctly and calculate recovery time objectives (RTOs).',
    },
    {
      title: 'System Stability & QA Checks',
      desc: 'Custom-configured health check scripts and diagnostic runoffs to monitor server memory usage, disk read/write speeds, and API latencies.',
    },
    {
      title: 'Rollback Readiness & Deploy Audits',
      desc: 'Setting up automated rollback configs in serverless environments, making sure that bad code releases can be reverted in under 30 seconds with zero data loss.',
    },
  ];

  return (
    <div className={styles.container}>
      <div className="container">
        {/* Breadcrumb */}
        <div className={styles.breadcrumb}>
          <Link href="/services">Services</Link>
          <span>/</span>
          <span className={styles.current}>Backup & Recovery</span>
        </div>

        {/* Hero Area */}
        <section className={styles.heroSection}>
          <div className={styles.heroContent}>
            <span className={`${styles.serviceBadge} ${styles.stabilityBadge}`}>Resilience Core</span>
            <h1 className={styles.title}>Backup, Recovery & System Stability</h1>
            <p className={styles.subtitle}>
              Guarantee business continuity with automated off-site backups, restore drill validations, and server stability monitoring.
            </p>
          </div>
        </section>

        {/* Core Content Grid */}
        <div className={styles.mainGrid}>
          {/* Detailed Description */}
          <div className={styles.detailsContent}>
            <h2>Engineering Total Business Continuity</h2>
            <p>
              Hardware fails, databases get corrupted, and malicious actors target B2B networks. Business continuity is not an option; it is an absolute operational necessity.
            </p>
            <p>
              KOOLIXA designs layered, automated backup architectures. We monitor storage pools daily, run recovery drills monthly, and design deployment strategies to keep systems running.
            </p>

            <div className={styles.featuresList}>
              {features.map((feat, idx) => (
                <div key={idx} className={styles.featureItem}>
                  <h3>{feat.title}</h3>
                  <p>{feat.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Sidebar Info */}
          <div className={styles.sidebar}>
            <div className={styles.sideCard}>
              <h3>Uptime & Continuity Metrics</h3>
              <ul className={styles.metricsList}>
                <li>
                  <strong>&lt; 30 Seconds</strong>
                  <span>Serverless Deployment Rollback Speed</span>
                </li>
                <li>
                  <strong>256-bit AES</strong>
                  <span>Data Encryption In-Transit & At-Rest</span>
                </li>
                <li>
                  <strong>Monthly</strong>
                  <span>Automated Restoration Verification Drill</span>
                </li>
              </ul>
            </div>

            <div className={styles.sideCard}>
              <h3>Aligned Roles</h3>
              <p className={styles.roleDesc}>
                This service is executed by our internal **Debugging & Backup Desk**, audited by our **QA Manager**, and supported by **IT Support Technicians**.
              </p>
              <Link href="/contact" className={styles.sideCta}>
                Audit Your Backup Infrastructure
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
