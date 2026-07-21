import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import styles from './joel.module.css';

export const metadata: Metadata = {
  title: 'Privacy & Data Protection Regulations | Joel Bustamante - Class Presentation',
  description: 'Technical module presentation on Global Regulatory Frameworks, Compliance Criteria, and Website Implementation Pillars by Joel Bustamante.',
};

export default function JoelBustamantePage() {
  const complianceBullets = [
    'Privacy compliance assessment and requirements mapping',
    'GDPR, CCPA/CPRA, HIPAA, GLBA, and FERPA implementation guidance',
    'Security controls aligned with ISO 27001, NIST, and SOC 2',
    'Cookie consent, privacy policies, and user rights management',
  ];

  const frameworks = [
    {
      name: 'General Data Protection Regulation (GDPR)',
      tag: 'EU / EEA Compliance',
      desc: 'Governs the collection, processing, storage, and transfer of personal data belonging to individuals in the EU and EEA. Requires explicit consent, transparency, user access/deletion rights, and robust safeguards.',
    },
    {
      name: 'California Consumer Privacy Act / CPRA (CCPA/CPRA)',
      tag: 'US State Privacy',
      desc: 'Provides California residents with specific rights regarding personal information. Requires disclosures on data collection, use, and sharing, plus rights to access, correct, delete, and limit information use.',
    },
    {
      name: 'Health Insurance Portability & Accountability Act (HIPAA)',
      tag: 'Healthcare Security',
      desc: 'Establishes requirements for protecting sensitive healthcare information and Protected Health Information (PHI). Mandates administrative, technical, and physical safeguards for patient data confidentiality and integrity.',
    },
    {
      name: 'Gramm-Leach-Bliley Act (GLBA)',
      tag: 'Financial Data',
      desc: 'Applies primarily to financial institutions handling consumer financial records. Requires companies to protect nonpublic personal information, maintain written security programs, and issue privacy notices.',
    },
    {
      name: 'Family Educational Rights & Privacy Act (FERPA)',
      tag: 'Education Privacy',
      desc: 'Protects the privacy of student education records. Ensures educational records are accessed only by authorized individuals and enables parents and eligible students to review and request corrections.',
    },
    {
      name: 'ISO 27001',
      tag: 'Global ISMS Standard',
      desc: 'Internationally recognized standard for Information Security Management Systems (ISMS). Provides a structured framework for identifying security risks, implementing controls, and continuously improving security posture.',
    },
    {
      name: 'NIST Cybersecurity Framework',
      tag: 'US Federal Framework',
      desc: 'Organized around five core functions: Identify, Protect, Detect, Respond, and Recover. Provides a practical roadmap for managing and reducing cybersecurity risks across digital infrastructure.',
    },
    {
      name: 'SOC 2 Audit Framework',
      tag: 'Trust Services Criteria',
      desc: 'Evaluates how organizations manage customer data across five criteria: Security, Availability, Processing Integrity, Confidentiality, and Privacy. Essential for vendor risk validation.',
    },
    {
      name: 'Payment Card Industry Standard (PCI DSS)',
      tag: 'Payment Security',
      desc: 'Establishes security requirements for organizations processing, storing, or transmitting credit card information. Includes strong access controls, encryption, network security, and ongoing monitoring.',
    },
    {
      name: 'FedRAMP',
      tag: 'Federal Cloud Auth',
      desc: 'Standardized security assessment and authorization program for cloud service providers serving U.S. federal agencies. Enforces rigorous security controls and continuous monitoring.',
    },
  ];

  const websitePillars = [
    'Privacy notices and disclosures',
    'Cookie consent and preference management',
    'User consent collection and recordkeeping',
    'Secure authentication and access controls',
    'Data encryption in transit and at rest',
    'Audit logging and monitoring',
    'Data retention and deletion policies',
    'User rights management (access, correction, deletion, portability)',
    'Vendor and third-party service reviews',
    'Incident response and breach notification procedures',
    'Secure payment processing',
    'Ongoing security assessments and vulnerability management',
  ];

  return (
    <div className={styles.container}>
      <div className="container">
        {/* Breadcrumb */}
        <div className={styles.breadcrumb}>
          <Link href="/contributions">Contributions</Link>
          <span>/</span>
          <span className={styles.current}>Joel Bustamante</span>
        </div>

        {/* Hero Area */}
        <section className={styles.heroSection}>
          <span className={styles.authorBadge}>Module Presenter: Joel Bustamante</span>
          <h1 className={styles.title}>Privacy & Data Protection Regulations</h1>
          <p className={styles.subtitle}>
            Protecting customer information and maintaining strong security practices are fundamental priorities at KOOLIXA. Explore regulatory frameworks and how they shape website engineering.
          </p>
        </section>

        {/* Highlighted Compliance Card (Matching Image) */}
        <section className={styles.section}>
          <div className={styles.complianceCard}>
            <div className={styles.cardHeaderArea}>
              <h2 className={styles.cardMainTitle}>Compliance Frameworks & Data Protection</h2>
              <p className={styles.cardSubTitle}>Privacy, Security and Regulatory Compliance</p>
            </div>

            <div className={styles.cardSplitGrid}>
              <div className={styles.cardLeftCol}>
                <p className={styles.cardParagraph}>
                  Helping your website meet industry privacy, security, and regulatory standards. We identify applicable compliance requirements and implement the technical, security, and privacy controls needed to protect customer data and support regulatory readiness.
                </p>
              </div>

              <div className={styles.cardRightCol}>
                <ul className={styles.bulletsList}>
                  {complianceBullets.map((bullet, idx) => (
                    <li key={idx} className={styles.bulletItem}>
                      <svg className={styles.checkIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Regulatory Frameworks Grid */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Key Regulatory & Compliance Frameworks</h2>
          <div className={styles.frameworksGrid}>
            {frameworks.map((item, idx) => (
              <div key={idx} className={styles.frameworkCard}>
                <div className={styles.cardHeader}>
                  <h3 className={styles.frameworkName}>{item.name}</h3>
                  <span className={styles.frameworkTag}>{item.tag}</span>
                </div>
                <p className={styles.frameworkDesc}>{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* How Requirements Affect Your Website */}
        <section className={styles.section}>
          <div className={styles.pillarsCard}>
            <div className={styles.pillarsHeader}>
              <span className={styles.pillarsBadge}>Website Architecture Impact</span>
              <h2>How These Requirements Affect Your Website</h2>
            </div>
            <p className={styles.pillarsLead}>
              To support compliance with applicable regulations and frameworks, KOOLIXA incorporates 12 essential technical safeguards directly into website design:
            </p>

            <div className={styles.pillarsGrid}>
              {websitePillars.map((pillar, idx) => (
                <div key={idx} className={styles.pillarItem}>
                  <span className={styles.pillarNum}>{(idx + 1).toString().padStart(2, '0')}</span>
                  <p className={styles.pillarText}>{pillar}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Navigation */}
        <section className={styles.section}>
          <div className={styles.nextStepsCard}>
            <h2>Designing for Privacy & Regulatory Readiness</h2>
            <p>By designing privacy and security requirements into the website from the beginning, KOOLIXA reduces compliance risk and strengthens customer trust.</p>
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
