import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import styles from '../service-single.module.css';

export const metadata: Metadata = {
  title: 'Managed IT Support & Help Desk Administration',
  description: 'Enterprise-grade Tier 1-3 user support, workstation patching, remote configurations, and identity administration for growing organizations.',
};

export default function ManagedItPage() {
  const features = [
    {
      title: 'User Lifecycle & Directory Management',
      desc: 'Automated provisioning and de-provisioning of employee identities in Active Directory, Entra ID (Azure AD), Google Workspace, and Microsoft 365, aligned with standard onboarding workflows.',
    },
    {
      title: 'Responsive Tier 1-3 Support Desk',
      desc: 'Rapid-resolution help desk ticketing. We resolve account lockouts, software glitches, driver incompatibilities, and peripheral configurations, keeping staff productive.',
    },
    {
      title: 'Remote Monitoring & Patch Management',
      desc: 'Continuous tracking of system resources, automated security patch deployments, disk health monitoring, and system upgrades scheduled outside peak work hours.',
    },
    {
      title: 'Peripheral & Device Configuration',
      desc: 'Hassle-free setup of networks, VPN endpoints, local printers, video conference equipment, and mobile devices with security profile alignments.',
    },
  ];

  return (
    <div className={styles.container}>
      <div className="container">
        {/* Breadcrumb */}
        <div className={styles.breadcrumb}>
          <Link href="/services">Services</Link>
          <span>/</span>
          <span className={styles.current}>Managed IT Support</span>
        </div>

        {/* Hero Area */}
        <section className={styles.heroSection}>
          <div className={styles.heroContent}>
            <span className={styles.serviceBadge}>Operational Excellence</span>
            <h1 className={styles.title}>Managed IT Support & User Administration</h1>
            <p className={styles.subtitle}>
              Maximize organizational efficiency with a dedicated help desk, automated user provisioning, and remote system administration.
            </p>
          </div>
        </section>

        {/* Core Content Grid */}
        <div className={styles.mainGrid}>
          {/* Detailed Description */}
          <div className={styles.detailsContent}>
            <h2>Proactive Infrastructure Management</h2>
            <p>
              IT Support is more than resetting passwords. KOOLIXA builds structured workflows that ensure employee accounts, devices, and credentials are safe, operational, and properly managed.
            </p>
            <p>
              By outsourcing first-line support to KOOLIXA, your team receives direct assistance with a guaranteed SLA, eliminating operational bottlenecks.
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
              <h3>Key Service Metrics</h3>
              <ul className={styles.metricsList}>
                <li>
                  <strong>&lt; 14 Minutes</strong>
                  <span>Average Help Desk Response Time</span>
                </li>
                <li>
                  <strong>24 / 7 / 365</strong>
                  <span>Emergency Ticket Escalation</span>
                </li>
                <li>
                  <strong>98.4%</strong>
                  <span>Client Satisfaction (CSAT) Score</span>
                </li>
              </ul>
            </div>

            <div className={styles.sideCard}>
              <h3>Aligned Roles</h3>
              <p className={styles.roleDesc}>
                This service is backed by our internal **IT Support Technicians**, managed by senior **Operations Leadership** and audited by **QA managers**.
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
