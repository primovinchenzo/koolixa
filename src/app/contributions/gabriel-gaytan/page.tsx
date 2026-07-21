import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import styles from './gabriel.module.css';

export const metadata: Metadata = {
  title: 'Antivirus & Product Design Analysis | Gabriel Gaytan III - Class Presentation',
  description: 'Technical module presentation on Custom Antivirus Architecture, Threat Patching, and 5-Stage Product Design Workflow by Gabriel Gaytan III.',
};

export default function GabrielGaytanPage() {
  const threatVectors = [
    {
      title: 'Zero-Day Threats',
      desc: 'Addressing newly discovered software vulnerabilities before official patches are issued by OS vendors.',
      icon: '🛡️',
    },
    {
      title: 'Web Phishing',
      desc: 'Filtering malicious domain spoofs, credential harvesters, and suspicious inbound web traffic vectors.',
      icon: '🎣',
    },
    {
      title: 'Malware Implementation',
      desc: 'Detecting execution of obfuscated scripts, ransomware payloads, and unauthorized background processes.',
      icon: '🦠',
    },
    {
      title: 'Network Vector Attacks',
      desc: 'Hardening open ports, reverse proxies, and cloud gateway endpoints against lateral network intrusion.',
      icon: '🌐',
    },
  ];

  const designSteps = [
    {
      step: '01',
      title: 'Research Your Client',
      desc: 'Analyze the target business, industry niche, brand identity, and customer expectations before writing code.',
    },
    {
      step: '02',
      title: 'Create Mockup',
      desc: 'Build high-fidelity wireframes and prototype UI layouts to visualize the proposed web solution.',
    },
    {
      step: '03',
      title: 'Seek Out Your Client',
      desc: 'Present the tailored website prototype directly to local El Paso business owners lacking a digital presence.',
    },
    {
      step: '04',
      title: 'Transaction Period',
      desc: 'Finalize service scope, select hosting and maintenance tiers, and execute formal onboarding contracts.',
    },
    {
      step: '05',
      title: 'Design the Final Product',
      desc: 'Develop, test, and launch the production platform complete with responsive styling, security, and continuous support.',
    },
  ];

  return (
    <div className={styles.container}>
      <div className="container">
        {/* Breadcrumb */}
        <div className={styles.breadcrumb}>
          <Link href="/contributions">Contributions</Link>
          <span>/</span>
          <span className={styles.current}>Gabriel Gaytan III</span>
        </div>

        {/* Hero Area */}
        <section className={styles.heroSection}>
          <span className={styles.authorBadge}>Module Presenter: Gabriel Gaytan III | 06/26/2026</span>
          <h1 className={styles.title}>Antivirus & Product Design Analysis</h1>
          <p className={styles.subtitle}>
            Proposing a custom antivirus architecture to patch OS vulnerabilities alongside a 5-stage B2B product design strategy for establishing digital footing for El Paso businesses.
          </p>
        </section>

        {/* 1. Antivirus Architecture Scope */}
        <section className={styles.section}>
          <div className={styles.avCard}>
            <span className={styles.cardBadge}>Infrastructure Security</span>
            <h2>Antivirus Architecture Scope</h2>
            
            <div className={styles.introBox}>
              <p className={styles.leadText}>
                While Microsoft Defender marks the baseline standard for operating system security, Windows remains susceptible to sophisticated attack vectors. KOOLIXA must implement proprietary security layers beyond default OS protection.
              </p>
              <p>
                By modeling our internal antivirus engine after Microsoft Defender’s core strengths and actively patching its known vulnerabilities, we ensure robust protection for both our internal infrastructure and client websites.
              </p>
            </div>

            <h3 className={styles.subTitle}>Patched Threat Vectors & Vulnerabilities:</h3>
            <div className={styles.vectorsGrid}>
              {threatVectors.map((vector, idx) => (
                <div key={idx} className={styles.vectorCard}>
                  <span className={styles.vIcon}>{vector.icon}</span>
                  <h4>{vector.title}</h4>
                  <p>{vector.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 2. Product Design Scope */}
        <section className={styles.section}>
          <div className={styles.designCard}>
            <span className={styles.cardBadge}>Market Strategy & Engineering</span>
            <h2>Product Design Scope</h2>

            <div className={styles.introBox}>
              <p className={styles.leadText}>
                Our primary goal is to help small businesses grow by establishing digital footing. Many local businesses in El Paso do not have a website of their own.
              </p>
              <p>
                By combining robust Front-End and Back-End engineering with modern component framework efficiency, we deliver fast, maintainable web solutions tailored to local SMB requirements.
              </p>
            </div>

            <h3 className={styles.subTitle}>5-Stage Order of Operations for Client Delivery:</h3>
            <div className={styles.stepsGrid}>
              {designSteps.map((st) => (
                <div key={st.step} className={styles.stepCard}>
                  <span className={styles.stepNum}>Step {st.step}</span>
                  <h4>{st.title}</h4>
                  <p>{st.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Navigation */}
        <section className={styles.section}>
          <div className={styles.nextStepsCard}>
            <h2>Security-First Web Engineering</h2>
            <p>Explore KOOLIXA cybersecurity capabilities or view all team member project contributions.</p>
            <div className={styles.btnRow}>
              <Link href="/services/cybersecurity" className={styles.contactBtn}>
                Cybersecurity Services
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
