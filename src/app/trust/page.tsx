import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import styles from './trust.module.css';

export const metadata: Metadata = {
  title: 'Website Security, Privacy & Trust Center',
  description: 'Learn about KOOLIXA web-layer security controls, domain hardening, DDoS protection, and privacy compliance guidelines.',
};

export default function TrustPage() {
  const securityControls = [
    {
      title: 'Web Application Firewalls (WAF)',
      desc: 'We configure WAF rules on all client websites to filter out malicious requests, block SQL injections, and defend against automated site exploits.',
    },
    {
      title: 'DDoS Containment & Mitigation',
      desc: 'We host platforms on robust cloud networks (e.g. Vercel edge networks, Cloudflare integration) that absorb volumetric traffic spikes and DDoS attacks.',
    },
    {
      title: 'Domain Governance & DNS Checklists',
      desc: 'Locking down email and domain access. We enforce SPF, DKIM, and DMARC settings to stop domain spoofing and phishing attempts.',
    },
  ];

  return (
    <div className={styles.container}>
      <div className="container">
        {/* Header */}
        <section className={styles.header}>
          <span className={styles.badge}>Trust Center</span>
          <h1 className={styles.title}>Website Security & Compliance</h1>
          <p className={styles.subtitle}>
            A secure website builds business credibility. Review our web-hardening measures, SSL configs, and data governance policies.
          </p>
        </section>

        {/* Security Controls Grid */}
        <section className={styles.controlsSection}>
          <h2 className={styles.sectionTitle}>Website Security Infrastructure</h2>
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
            <h2>Framework & Audits Alignment</h2>
            <p>
              We align our website configurations and deployment pipelines with standard compliance frameworks to assist in customer auditing checks:
            </p>
            
            <div className={styles.frameworksGrid}>
              <div className={styles.frameworkCard}>
                <h3>OWASP Top 10 Protections</h3>
                <p>
                  We audit site logic and API routes against the OWASP Top 10 to eliminate standard vulnerabilities like cross-site scripting (XSS) and broken object access.
                </p>
                <span className={styles.postureBadge}>Audited Configurations</span>
              </div>

              <div className={styles.frameworkCard}>
                <h3>GDPR & Privacy Guidelines</h3>
                <p>
                  We configure cookie consent compliance scripts, secure intake forms, and user-data access controls to support privacy mandates.
                </p>
                <span className={styles.postureBadge}>Implementation Ready</span>
              </div>
            </div>

            <div className={styles.legalDisclaimer}>
              <blockquote>
                <strong>[!] Compliance & Certification Notice:</strong> KOOLIXA engineers secure, hardened web platforms. However, formal SOC 2, HIPAA, or ISO certifications are corporate-level audits that must be obtained directly by your organization. We configure your web presence to align with these audit frameworks.
              </blockquote>
            </div>
          </div>
        </section>

        {/* Contact/Vulnerability Reporting */}
        <section className={styles.reportSection}>
          <h2>Reporting a Vulnerability</h2>
          <p>
            If you identify a security issue, exposed credential, or configuration flaw on a site engineered or managed by KOOLIXA, please notify us immediately.
          </p>
          <Link href="/contact?focus=security-issue" className={styles.reportBtn}>
            Submit Security Alert
          </Link>
        </section>
      </div>
    </div>
  );
}
