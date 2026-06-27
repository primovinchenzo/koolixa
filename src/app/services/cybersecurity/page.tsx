import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import styles from '../service-single.module.css';

export const metadata: Metadata = {
  title: 'Co-Managed Cybersecurity & Vulnerability Audits',
  description: 'Proactive vulnerability assessments, local security policies alignment, and 24/7 co-managed incident coordination with security operations centers.',
};

export default function CybersecurityPage() {
  const features = [
    {
      title: 'Vulnerability Assessment & Scanning',
      desc: 'Scheduled internal and external scans to find weak points in firewalls, outdated workstation packages, configuration errors, and network exposures before attackers do.',
    },
    {
      title: 'Co-Managed 24/7 SOC Integration',
      desc: 'We coordinate monitoring with our premier, outsourced 24/7 security operations center (SOC). We filter alert noise, escalate critical threat markers, and execute isolation protocols.',
    },
    {
      title: 'Security Policy Engineering',
      desc: 'Custom-designed operational security guidelines for your staff, including multi-factor authentication (MFA) enforcement, clean desk policies, and device compliance checking.',
    },
    {
      title: 'Incident Containment & Remediation',
      desc: 'Rapid containment response. In the event of a threat alert, our analysts isolate compromised machines, block rogue IP segments, and lead remediation workflows.',
    },
  ];

  return (
    <div className={styles.container}>
      <div className="container">
        {/* Breadcrumb */}
        <div className={styles.breadcrumb}>
          <Link href="/services">Services</Link>
          <span>/</span>
          <span className={styles.current}>Cybersecurity Coordination</span>
        </div>

        {/* Hero Area */}
        <section className={styles.heroSection}>
          <div className={styles.heroContent}>
            <span className={`${styles.serviceBadge} ${styles.securityBadge}`}>Security Core</span>
            <h1 className={styles.title}>Co-Managed Cybersecurity & Auditing</h1>
            <p className={styles.subtitle}>
              Protect your business assets with proactive vulnerability reviews, local system hardening, and co-managed SOC incident coordination.
            </p>
          </div>
        </section>

        {/* Core Content Grid */}
        <div className={styles.mainGrid}>
          {/* Detailed Description */}
          <div className={styles.detailsContent}>
            <h2>Strategic Threat Mitigation</h2>
            <p>
              Modern cybersecurity is not a set-it-and-forget-it software download. It requires continuous analysis, structured policy guidelines, and immediate threat containment protocols.
            </p>
            <p>
              KOOLIXA acts as your internal security desk. We work alongside global co-managed security operations centers to analyze network logs, identify weak links, and respond immediately to threats.
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
              <h3>Security Statistics</h3>
              <ul className={styles.metricsList}>
                <li>
                  <strong>24 / 7 / 365</strong>
                  <span>Active Threat Coordination Sync</span>
                </li>
                <li>
                  <strong>100%</strong>
                  <span>Incident Isolation Rate</span>
                </li>
                <li>
                  <strong>Zero Trust</strong>
                  <span>Architecture & Principle Alignment</span>
                </li>
              </ul>
            </div>

            <div className={styles.sideCard}>
              <h3>Aligned Roles</h3>
              <p className={styles.roleDesc}>
                This service is led by our internal **Cybersecurity Analysts**, backed by senior **CTO and CEO Oversight**, and verified by automated auditing rules.
              </p>
              <Link href="/contact" className={styles.sideCta}>
                Schedule Security Review
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
