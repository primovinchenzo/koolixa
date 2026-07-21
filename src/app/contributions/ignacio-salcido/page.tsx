import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import styles from './ignacio.module.css';

export const metadata: Metadata = {
  title: 'Quality Assurance & Disaster Recovery | Ignacio Salcido - Class Presentation',
  description: 'Technical module presentation on Quality Assurance (QA), Bug Logging, State Backups, and Disaster Recovery Gatekeeping by Ignacio Salcido.',
};

export default function IgnacioSalcidoPage() {
  const qaSections = [
    {
      title: '1. Quality Assurance & Testing (The Gatekeeper)',
      badge: 'System Stability',
      items: [
        {
          name: 'Prototype Diagnostics',
          text: 'Act as a constant quality assurance tester during development to ensure the website prototype is in perfect working order before a client sees it.',
        },
        {
          name: 'Update Sign-Off',
          text: 'Hold the final say on whether any new features or updates are pushed live, ensuring they do not conflict with or break the current, stable build of the site.',
        },
        {
          name: 'Preemptive Troubleshooting',
          text: 'Actively brainstorm and figure out what could go wrong during the development phase so we can catch flaws early.',
        },
        {
          name: 'User Experience (UX) Verification',
          text: 'Test the prototype from a customer perspective to guarantee that forms, checkout pages, and navigation buttons function smoothly without freezing.',
        },
        {
          name: 'Compatibility Testing',
          text: 'Verify that the prototype looks and works correctly across multiple web browsers (Chrome, Safari, Edge) and mobile devices.',
        },
      ],
    },
    {
      title: '2. Bug Tracking & Department Communication',
      badge: 'Diagnostics & Logging',
      items: [
        {
          name: 'Root Cause Analysis',
          text: 'Discover bugs, locate exactly where they are in the data or code, and diagnose whether the issue stems from a coding error or a server/infrastructure failure.',
        },
        {
          name: 'Cross-Department Collaboration',
          text: 'Serve as the bridge between technical departments by diagnosing errors and immediately notifying the appropriate team members about what is wrong so it can be fixed.',
        },
        {
          name: 'Bug Logging',
          text: 'Keep a detailed, organized log of all discovered glitches, documenting the exact steps needed to recreate the bug so the design team can fix it faster.',
        },
      ],
    },
    {
      title: '3. Disaster Recovery & System Backups (The Safety Net)',
      badge: 'Resilience & Uptime',
      items: [
        {
          name: 'State Backups',
          text: 'Maintain strict data control by creating complete backups of previous website states before any new update is implemented, allowing for a quick rollback if an update fails.',
        },
        {
          name: 'Emergency Preparedness',
          text: "Lead the creation of the company's disaster backup plan, outlining specific protocols so the team is completely prepared to act fast if a system goes down.",
        },
        {
          name: 'Uptime Management',
          text: 'Constantly monitor the live environment to ensure the website stays up, running, and accessible to users at all times.',
        },
        {
          name: 'Data Integrity Checks',
          text: "Periodically test the saved backups to ensure the files aren't corrupted and can actually be used to restore the website in a real emergency.",
        },
      ],
    },
    {
      title: '4. Security Oversight',
      badge: 'Access & Vulnerabilities',
      items: [
        {
          name: 'Vulnerability Scanning',
          text: 'Double-check the live site and code to ensure it is entirely secure from outside threats.',
        },
        {
          name: 'Malicious Threat Prevention',
          text: 'Hunt for hidden backdoors, security loopholes, or malicious elements that could allow unauthorized access to the system.',
        },
        {
          name: 'Access Control',
          text: "Ensure that only authorized team members have the permissions required to change the website's core files, preventing accidental internal damage.",
        },
      ],
    },
  ];

  return (
    <div className={styles.container}>
      <div className="container">
        {/* Breadcrumb */}
        <div className={styles.breadcrumb}>
          <Link href="/contributions">Contributions</Link>
          <span>/</span>
          <span className={styles.current}>Ignacio Salcido</span>
        </div>

        {/* Hero Area */}
        <section className={styles.heroSection}>
          <span className={styles.authorBadge}>Module Presenter: Ignacio Salcido</span>
          <h1 className={styles.title}>Quality Assurance & Disaster Recovery</h1>
          <p className={styles.subtitle}>
            As the QA and Disaster Recovery Specialist, my primary responsibility is to act as the final gatekeeper for our systems and websites. I ensure all prototypes and updates are entirely stable, functional, and secure before deployment.
          </p>
        </section>

        {/* Overview Banner */}
        <section className={styles.section}>
          <div className={styles.overviewCard}>
            <h2>Role Overview & Strategic Purpose</h2>
            <p>
              I manage our backup systems and serve as the technical lead for bringing services back online if a system experiences an unexpected outage. From prototype diagnostics to update sign-offs, root cause bug tracking, state backups, and security vulnerability scans, Quality Assurance protects our brand integrity.
            </p>
          </div>
        </section>

        {/* Core Responsibilities Grid */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Core Responsibilities & Technical Gatekeeping</h2>
          <div className={styles.sectionsList}>
            {qaSections.map((sec, idx) => (
              <div key={idx} className={styles.qaCard}>
                <div className={styles.cardHeader}>
                  <h3>{sec.title}</h3>
                  <span className={styles.badgeTag}>{sec.badge}</span>
                </div>

                <div className={styles.itemsGrid}>
                  {sec.items.map((sub, sIdx) => (
                    <div key={sIdx} className={styles.itemBox}>
                      <span className={styles.itemName}>{sub.name}</span>
                      <p className={styles.itemText}>{sub.text}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Navigation */}
        <section className={styles.section}>
          <div className={styles.nextStepsCard}>
            <h2>System Quality & Resilience Verification</h2>
            <p>Review our trust documentation or return to the project contributions index.</p>
            <div className={styles.btnRow}>
              <Link href="/trust" className={styles.contactBtn}>
                Security & Trust Center
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
