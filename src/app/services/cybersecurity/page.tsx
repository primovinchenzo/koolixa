import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import styles from '../service-single.module.css';

export const metadata: Metadata = {
  title: 'Website Security Hardening & Malware Protection',
  description: 'Proactive website threat protection, domain SSL configuration, Web Application Firewall (WAF) setups, and daily security scans.',
};

export default function CybersecurityPage() {
  const features = [
    {
      title: 'Web Application Firewall (WAF) Configurations',
      desc: 'Deploying custom security rules to block malicious requests, prevent SQL injection attempts, and stop automated vulnerability scanners before they reach your site code.',
    },
    {
      title: 'SSL Encryption & Redirection Rules',
      desc: 'Enforcing HTTPS redirect standards, auditing SSL certificate expirations, and locking down cookie transport vectors to protect client data.',
    },
    {
      title: 'Daily Vulnerability Scanning',
      desc: 'Automated scans of your hosting configurations, third-party package dependencies, and public routes to identify exposures and deploy hotfixes.',
    },
    {
      title: 'Spam Bot & DDoS Mitigation',
      desc: 'Integrating cloud routing systems to mitigate denial of service attacks, filter form spam, and protect CPU usage from brute force crawlers.',
    },
  ];

  return (
    <div className={styles.container}>
      <div className="container">
        {/* Breadcrumb */}
        <div className={styles.breadcrumb}>
          <Link href="/services">Services</Link>
          <span>/</span>
          <span className={styles.current}>Website Security</span>
        </div>

        {/* Hero Area */}
        <section className={styles.heroSection}>
          <div className={styles.heroContent}>
            <span className={`${styles.serviceBadge} ${styles.securityBadge}`}>Secure Core</span>
            <h1 className={styles.title}>Website Security Hardening & Threat Protection</h1>
            <p className={styles.subtitle}>
              Protect your business reputation. Harden your website codebase against hacking, DDoS attacks, and domain spoofing.
            </p>
          </div>
        </section>

        {/* Core Content Grid */}
        <div className={styles.mainGrid}>
          {/* Detailed Description */}
          <div className={styles.detailsContent}>
            <h2>Active Threat Mitigation for the Web</h2>
            <p>
              Insecure websites are major targets for ransomware, search engine spam index injection, and data leaks. Protecting your business online requires more than a simple plugin.
            </p>
            <p>
              KOOLIXA integrates security checks directly into the website lifecycle. We configure secure domain routing, deploy WAF rules, and manage vulnerability patches continuously.
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
                  <strong>24 / 7</strong>
                  <span>Active Uptime & WAF Monitoring</span>
                </li>
                <li>
                  <strong>SSL / TLS 1.3</strong>
                  <span>Standard Encryption Deployment</span>
                </li>
                <li>
                  <strong>0 Vulnerability</strong>
                  <span>Target Posture standard</span>
                </li>
              </ul>
            </div>

            <div className={styles.sideCard}>
              <h3>Aligned Roles</h3>
              <p className={styles.roleDesc}>
                This capability is run by our **Security Analysts**, verified by automated **QA Audits**, and integrated by our **Web Developers**.
              </p>
              <Link href="/contact" className={styles.sideCta}>
                Harden Your Website Security
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
