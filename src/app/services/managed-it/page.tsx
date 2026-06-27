import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import styles from '../service-single.module.css';

export const metadata: Metadata = {
  title: 'Continuous Website Maintenance & Web Operations Support',
  description: 'Ongoing website content updates, DNS records management, domain setups, and Google Workspace email configurations.',
};

export default function ManagedItPage() {
  const features = [
    {
      title: 'SLA-Backed Content & Layout Edits',
      desc: 'Need a text change, a new promotional page, or a layout adjustment? Send a ticket to our maintenance desk, and our engineers resolve it in minutes.',
    },
    {
      title: 'DNS Records & Domain Setup',
      desc: 'We map custom domains, configure CNAME redirects, and enforce SPF, DKIM, and DMARC settings to secure email delivery and stop spoofing.',
    },
    {
      title: 'Business Email Configuration',
      desc: 'Setup and administration of corporate email networks using Google Workspace or Microsoft 365, aligned with employee onboarding parameters.',
    },
    {
      title: 'Hosting & Serverless Monitoring',
      desc: 'Continuous oversight of hosting metrics, database limits, third-party API keys, and deployment configs to ensure your site is always operational.',
    },
  ];

  return (
    <div className={styles.container}>
      <div className="container">
        {/* Breadcrumb */}
        <div className={styles.breadcrumb}>
          <Link href="/services">Services</Link>
          <span>/</span>
          <span className={styles.current}>Maintenance & Operations</span>
        </div>

        {/* Hero Area */}
        <section className={styles.heroSection}>
          <div className={styles.heroContent}>
            <span className={`${styles.serviceBadge} ${styles.stabilityBadge}`}>Operations Core</span>
            <h1 className={styles.title}>Continuous Maintenance & Web Operations</h1>
            <p className={styles.subtitle}>
              Keep your digital presence updated, online, and performing. We manage code updates, domain settings, and business email infrastructure.
            </p>
          </div>
        </section>

        {/* Core Content Grid */}
        <div className={styles.mainGrid}>
          {/* Detailed Description */}
          <div className={styles.detailsContent}>
            <h2>Dedicated Support for Your Web Presence</h2>
            <p>
              Launching a website is only the first step. To continue driving business value, your platform needs text modifications, DNS security tweaks, and ongoing server monitoring.
            </p>
            <p>
              Instead of paying expensive hourly agency fees for basic fixes, KOOLIXA provides a dedicated maintenance desk with guaranteed SLA response times to handle your requests.
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
              <h3>Operations Statistics</h3>
              <ul className={styles.metricsList}>
                <li>
                  <strong>&lt; 14 Minutes</strong>
                  <span>Average Support Ticket Response</span>
                </li>
                <li>
                  <strong>100%</strong>
                  <span>DNS & Email Security Compliance</span>
                </li>
                <li>
                  <strong>99.9%</strong>
                  <span>Uptime Guarantee SLA</span>
                </li>
              </ul>
            </div>

            <div className={styles.sideCard}>
              <h3>Aligned Roles</h3>
              <p className={styles.roleDesc}>
                This service is backed by our **IT Support Technicians**, managed by **Operations Leadership**, and verified by **Web Developers**.
              </p>
              <Link href="/contact" className={styles.sideCta}>
                Speak with a Lead Technician
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
