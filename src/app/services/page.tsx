import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import styles from './services.module.css';

export const metadata: Metadata = {
  title: 'Our Capabilities & B2B IT Services',
  description: 'Explore KOOLIXA capabilities including Managed IT support, co-managed cybersecurity, custom website development, backup integrity, and technical project management.',
};

export default function ServicesPage() {
  const capabilityAreas = [
    {
      id: 'managed-it',
      title: 'Managed IT Support',
      tagline: 'Help Desk & User Administration',
      desc: 'Proactive management of workstation health, account lifecycle, user provisioning, password administration, and priority help desk resolution.',
      link: '/services/managed-it',
      points: [
        'Responsive Tier 1-3 help desk (average response <14 mins)',
        'Active Directory, Google Workspace, and M365 provisioning',
        'Secure remote monitoring and patching protocols',
        'Workstation health and inventory reporting',
      ],
    },
    {
      id: 'cybersecurity',
      title: 'Cybersecurity Coordination',
      tagline: 'Vulnerability Review & Threat Isolation',
      desc: 'Active security posture hardening, compliance alignments, vulnerability scanning, and co-managed coordination with outsourced 24/7 security monitoring teams.',
      link: '/services/cybersecurity',
      points: [
        'Vulnerability assessments & network scanning',
        'Outsourced co-managed SOC/SIEM coordination',
        'Internal security policy design and employee training',
        'Incident isolation and remediation plan execution',
      ],
    },
    {
      id: 'web-development',
      title: 'Web System Development',
      tagline: 'Custom Engineering & Performance',
      desc: 'Engineering premium, high-speed, secure, and SEO-optimized website platforms utilizing Next.js, React, and serverless architectures.',
      link: '/services/web-development',
      points: [
        'Next.js App Router and TypeScript builds',
        'Core Web Vitals tuning and performance audits',
        'Accessibility compliance audits (WCAG 2.1 AA)',
        'Secure API route handlings and database integrations',
      ],
    },
    {
      id: 'project-delivery',
      title: 'Project Delivery & Coordination',
      tagline: 'Technical Scope & On-Time Execution',
      desc: 'Bridging technical gaps between leadership, developers, and clients. Ensuring milestones, timelines, and deliverables are hit with precision.',
      link: '/services/project-delivery',
      points: [
        'Technical project scoping & estimation audits',
        'Milestone tracking and developer workflow syncs',
        'Client-to-engineering requirement translation',
        'Risk assessment and resource bottlenecks tracking',
      ],
    },
    {
      id: 'backup-stability',
      title: 'Backup, Recovery & Stability',
      tagline: 'Rolling Diagnostics & Rollback Readiness',
      desc: 'Automating off-site, encrypted data redundancy, validating recovery timelines, and running QA check scripts to guarantee uptime.',
      link: '/services/backup-stability',
      points: [
        'Encrypted, immutable off-site data replication',
        'Disaster recovery exercises & rollback validation',
        'Uptime and response tracking metrics reporting',
        'QA system check script runoffs and diagnostics',
      ],
    },
  ];

  return (
    <div className={styles.container}>
      {/* Services Header */}
      <section className={styles.introSection}>
        <div className="container">
          <div className={styles.headerBox}>
            <h1 className={styles.title}>Capability & Service Offerings</h1>
            <p className={styles.subtitle}>
              KOOLIXA provides highly structured, SLA-backed technical capabilities to protect systems, support teams, and engineer secure code environments.
            </p>
          </div>
        </div>
      </section>

      {/* Capabilities List Grid */}
      <section className={styles.listSection}>
        <div className="container">
          <div className={styles.capabilitiesList}>
            {capabilityAreas.map((area, index) => (
              <div key={area.id} className={styles.capabilityCard}>
                <div className={styles.cardHeader}>
                  <div>
                    <span className={styles.stepNumber}>0{index + 1}</span>
                    <h2 className={styles.cardTitle}>{area.title}</h2>
                    <p className={styles.cardTagline}>{area.tagline}</p>
                  </div>
                  <Link href={area.link} className={styles.viewDetailsBtn}>
                    View Service Details
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                      <polyline points="12 5 19 12 12 19"></polyline>
                    </svg>
                  </Link>
                </div>
                <div className={styles.cardBody}>
                  <p className={styles.cardDesc}>{area.desc}</p>
                  <ul className={styles.pointsList}>
                    {area.points.map((pt, idx) => (
                      <li key={idx} className={styles.pointItem}>
                        <svg
                          className={styles.checkIcon}
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <polyline points="20 6 9 17 4 12"></polyline>
                        </svg>
                        {pt}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing / Engagement Strategy Section */}
      <section className={styles.pricingSection}>
        <div className="container">
          <div className={styles.pricingBox}>
            <div className={styles.pricingContent}>
              <h2 className={styles.pricingTitle}>Tailored B2B SLA Pricing Model</h2>
              <p className={styles.pricingText}>
                We reject flat-rate, cookie-cutter plans. KOOLIXA operates on customized, service-level agreements (SLAs) tailored to your exact headcount, regulatory posture, and infrastructure complexity.
              </p>
              <div className={styles.pricingSteps}>
                <div className={styles.stepItem}>
                  <strong>1. Vulnerability Audit</strong>
                  <p>We review your current systems, network logs, and configurations to determine existing vulnerabilities.</p>
                </div>
                <div className={styles.stepItem}>
                  <strong>2. Retainer Tailoring</strong>
                  <p>We build a co-managed or fully managed support proposal based on active seats and monitoring complexity.</p>
                </div>
                <div className={styles.stepItem}>
                  <strong>3. SLA Execution</strong>
                  <p>We sign clear parameters for response times, backup checking frequencies, and project delivery deadlines.</p>
                </div>
              </div>
              <Link href="/contact" className={styles.pricingCta}>
                Request Vulnerability Assessment
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
