import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import styles from '../service-single.module.css';

export const metadata: Metadata = {
  title: 'Website Backup Redundancy & Recovery Support',
  description: 'Automated daily encrypted website backups, monthly recovery restore testing, and deployment rollback setups to guarantee 99.9% uptime.',
};

export default function BackupStabilityPage() {
  const features = [
    {
      title: 'Automated Daily Data Replication',
      desc: 'Configuring encrypted, block-level daily backups of your code assets, media storage pools, and database records. Ensures zero data loss in the event of an issue.',
    },
    {
      title: 'Sandbox Recovery Restoration Testing',
      desc: 'Backups are only valuable if they restore. We execute monthly restore drills in isolated staging sandboxes to verify data integrity and boot speeds.',
    },
    {
      title: 'Rollback Deployment Readiness',
      desc: 'Setting up automated rollback settings in your hosting environment (e.g. Vercel deployment logs), enabling 30-second version reverts if bad edits occur.',
    },
    {
      title: 'Speed & Performance Auditing',
      desc: 'Continuous monitoring of API response times, database query execution speeds, and server loads to optimize performance and prevent bottlenecks.',
    },
  ];

  return (
    <div className={styles.container}>
      <div className="container">
        {/* Breadcrumb */}
        <div className={styles.breadcrumb}>
          <Link href="/services">Services</Link>
          <span>/</span>
          <span className={styles.current}>Backup & Uptime</span>
        </div>

        {/* Hero Area */}
        <section className={styles.heroSection}>
          <div className={styles.heroContent}>
            <span className={`${styles.serviceBadge} ${styles.stabilityBadge}`}>Resilience Core</span>
            <h1 className={styles.title}>Backup Redundancy & Uptime Audits</h1>
            <p className={styles.subtitle}>
              Guarantee business continuity. Secure your site data with automated daily backups, restore verification drills, and rollback setups.
            </p>
          </div>
        </section>

        {/* Core Content Grid */}
        <div className={styles.mainGrid}>
          {/* Detailed Description */}
          <div className={styles.detailsContent}>
            <h2>Engineering 99.9% Website Availability</h2>
            <p>
              Hosting servers fail, databases experience corruption, and manual mistakes happen. Maintaining a stable B2B website requires a comprehensive disaster recovery plan.
            </p>
            <p>
              KOOLIXA builds redundant layers. We automate off-site, air-gapped data replication, test restorations monthly, and configure rollback profiles to protect your site.
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
              <h3>Uptime & Recovery Metrics</h3>
              <ul className={styles.metricsList}>
                <li>
                  <strong>&lt; 30 Seconds</strong>
                  <span>Version Rollback Resolution Speed</span>
                </li>
                <li>
                  <strong>256-bit AES</strong>
                  <span>Backup Encryption In-Transit & At-Rest</span>
                </li>
                <li>
                  <strong>Monthly</strong>
                  <span>Sandbox Restoration Verification Drill</span>
                </li>
              </ul>
            </div>

            <div className={styles.sideCard}>
              <h3>Aligned Roles</h3>
              <p className={styles.roleDesc}>
                This service is led by our **Debugging & Backup Desk**, audited by our **QA Lead**, and integrated by our **Web Developers**.
              </p>
              <Link href="/contact" className={styles.sideCta}>
                Configure Your Backup Architecture
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
