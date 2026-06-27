import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import styles from './trust.module.css';

export const metadata: Metadata = {
  title: 'Security, Privacy & Trust Center',
  description: 'Learn about KOOLIXA data protection policies, co-managed cybersecurity controls, and framework alignment standards.',
};

export default function TrustPage() {
  const securityControls = [
    {
      title: 'Encryption Standards',
      desc: 'All internal and client data is protected using AES 256-bit encryption at rest, and transport layer security (TLS 1.3) during transit.',
    },
    {
      title: 'Zero Trust Access Controls',
      desc: 'Access to system configurations requires multi-factor authentication (MFA) and is governed by the principle of least privilege (PoLP).',
    },
    {
      title: 'Vendor Oversight',
      desc: 'Our co-managed security operations center (SOC) partners are audited annually for SOC 2 Type II compliance.',
    },
  ];

  return (
    <div className={styles.container}>
      <div className="container">
        {/* Header */}
        <section className={styles.header}>
          <span className={styles.badge}>Trust Center</span>
          <h1 className={styles.title}>Security, Privacy & Compliance</h1>
          <p className={styles.subtitle}>
            KOOLIXA operates under strict security and data governance rules. Review our data protection measures and compliance postures.
          </p>
        </section>

        {/* Security Controls Grid */}
        <section className={styles.controlsSection}>
          <h2 className={styles.sectionTitle}>Data Protection Measures</h2>
          <div className={styles.controlsGrid}>
            {securityControls.map((ctrl, idx) => (
              <div key={idx} className={styles.controlCard}>
                <h3>{ctrl.title}</h3>
                <p>{ctrl.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Methodology Alignment */}
        <section className={styles.alignmentSection}>
          <div className={styles.alignmentBox}>
            <h2>Framework Methodologies</h2>
            <p>
              We align our cybersecurity policies, diagnostic checklists, and backup routines with industry-standard compliance guidelines:
            </p>
            
            <div className={styles.frameworksGrid}>
              <div className={styles.frameworkCard}>
                <h3>NIST CSF Alignment</h3>
                <p>
                  We model threat identification, asset protection, detect monitors, response plans, and recovery checks after the NIST Cybersecurity Framework.
                </p>
                <span className={styles.postureBadge}>Audited Operations</span>
              </div>

              <div className={styles.frameworkCard}>
                <h3>SOC 2 Guidelines Alignment</h3>
                <p>
                  We enforce access logging, incident response documentation, and change-control structures modeled after SOC 2 trust service criteria.
                </p>
                <span className={styles.postureBadge}>Verification Pending</span>
              </div>
            </div>

            <div className={styles.legalDisclaimer}>
              <blockquote>
                <strong>[!] Compliance Verification Note:</strong> KOOLIXA provides technical coordination, configuration auditing, and vulnerability support. It is the responsibility of the client organization to secure formal certifications. We align our co-managed support to aid in your compliance roadmap.
              </blockquote>
            </div>
          </div>
        </section>

        {/* Contact/Vulnerability Reporting */}
        <section className={styles.reportSection}>
          <h2>Reporting a Vulnerability</h2>
          <p>
            Security is a continuous collaborative effort. If you discover a vulnerability or potential exposure in our code or partner platforms, please report it immediately to our security coordination desk.
          </p>
          <Link href="/contact?focus=cybersecurity" className={styles.reportBtn}>
            File Secure Report
          </Link>
        </section>
      </div>
    </div>
  );
}
