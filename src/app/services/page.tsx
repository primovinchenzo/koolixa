import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import styles from './services.module.css';

export const metadata: Metadata = {
  title: 'Our Capabilities & Web Solutions',
  description: 'Explore KOOLIXA capabilities including Custom Web Engineering, continuous maintenance, website security hardening, compliance frameworks, technical scoping, and backup redundancy.',
};

export default function ServicesPage() {
  const capabilityAreas = [
    {
      id: 'web-development',
      title: 'Custom Web Engineering & Launch',
      tagline: 'Premium Performance & Type-Safe Builds',
      desc: 'Designing and building custom, high-speed, and secure website platforms using Next.js and TypeScript from scratch for companies who don’t have a website or need a major rebuild.',
      link: '/services/web-development',
      points: [
        'Next.js App Router and type-safe TypeScript architectures',
        'Mobile-first responsive grids and semantic HTML structures',
        'Lighthouse optimizations (guaranteeing 90+ score criteria)',
        'Connecting contact channels, database tables, and API endpoints',
      ],
    },
    {
      id: 'cybersecurity',
      title: 'Website Security Hardening',
      tagline: 'Vulnerability Scanning & Firewall Configurations',
      desc: 'Locking down websites against hacking, DDoS attacks, and spam bots. Configuring Web Application Firewalls (WAF) and SSL keys to ensure total data integrity.',
      link: '/services/cybersecurity',
      points: [
        'Domain WAF (Web Application Firewall) setup & configuration',
        'SSL certificate setups and secure redirect rule definitions',
        'Daily, automated vulnerability and malware scans',
        'Compliance alignments for client-side privacy laws',
      ],
    },
    {
      id: 'compliance-frameworks',
      title: 'Compliance Frameworks & Data Protection',
      tagline: 'Privacy, Security and Regulatory Compliance',
      desc: 'Helping your website meet industry privacy, security, and regulatory standards. We identify applicable compliance requirements and implement the technical, security, and privacy controls needed to protect customer data and support regulatory readiness.',
      link: '/contributions/joel-bustamante',
      points: [
        'Privacy compliance assessment and requirements mapping',
        'GDPR, CCPA/CPRA, HIPAA, GLBA, and FERPA implementation guidance',
        'Security controls aligned with ISO 27001, NIST, and SOC 2',
        'Cookie consent, privacy policies, and user rights management',
      ],
    },
    {
      id: 'managed-it',
      title: 'Continuous Maintenance & Operations',
      tagline: 'Help Desk, Updates & Domain Management',
      desc: 'Managing content modifications, hosting configs, domain DNS changes, and business email infrastructure (Google Workspace / Microsoft 365) to keep operations smooth.',
      link: '/services/managed-it',
      points: [
        'SLA-backed help desk for fast website edits and content updates',
        'DNS records configuration (DKIM, SPF, and DMARC settings)',
        'Business email accounts setup and access lifecycles management',
        'Hosting infrastructure, API integrations, and serverless checks',
      ],
    },
    {
      id: 'backup-stability',
      title: 'Backup Redundancy & Recovery',
      tagline: 'Uptime Diagnostics & Automated Recovery Checks',
      desc: 'Ensuring your site is always online. Creating encrypted, off-site data replication loops and executing recovery restore drills to guarantee immediate rollback readiness.',
      link: '/services/backup-stability',
      points: [
        'Automated, daily encrypted website and database backups',
        'Disaster recovery restore checks in isolated sandboxes',
        'Serverless deployment rollback configuration (<30 seconds execution)',
        'Uptime diagnostics and server health alerts setup',
      ],
    },
    {
      id: 'project-delivery',
      title: 'Technical Scoping & Project Delivery',
      tagline: 'Scope Definition, Timelines & Launch Management',
      desc: 'Guiding your project from design concepts to production launch. We define precise scopes, milestones, and deliverables to ensure on-time deployment.',
      link: '/services/project-delivery',
      points: [
        'Detailed site scoping and technical requirements mapping',
        'Milestone tracking with weekly client reports and visibility',
        'Translating design layouts into technical specifications',
        'Vercel deployment setup and staging environments setup',
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
              KOOLIXA provides end-to-end web presence operations. We construct your website, secure it against threats, enforce data privacy regulations, and continuously manage upgrades and support.
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
              <h2 className={styles.pricingTitle}>Tailored B2B Engagement Model</h2>
              <p className={styles.pricingText}>
                We do not believe in one-size-fits-all pricing. KOOLIXA custom-scopes projects based on website size, dynamic database complexity, compliance framework criteria, and ongoing maintenance SLA seat counts.
              </p>
              <div className={styles.pricingSteps}>
                <div className={styles.stepItem}>
                  <strong>1. Discovery & Design Scoping</strong>
                  <p>We review your business targets and map layout mockups, technical structures, and feature requirements.</p>
                </div>
                <div className={styles.stepItem}>
                  <strong>2. Custom Web Construction & Compliance Hardening</strong>
                  <p>We engineer your site from scratch using Next.js, optimizing speed profiles and enforcing regulatory privacy controls before launch.</p>
                </div>
                <div className={styles.stepItem}>
                  <strong>3. Operations & Maintenance SLA</strong>
                  <p>We sign a service level agreement detailing response times, backup frequency checking, and security update routines.</p>
                </div>
              </div>
              <Link href="/contact" className={styles.pricingCta}>
                Request Website Proposal
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
