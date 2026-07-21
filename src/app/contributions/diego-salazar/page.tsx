import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import styles from './diego-salazar.module.css';

export const metadata: Metadata = {
  title: 'Systems Diagnostics & Troubleshooting | Diego Salazar - Class Presentation',
  description: 'Technical module presentation on Systems Diagnostics, Troubleshooting Workflows, and Root Cause Analysis by Diego Salazar.',
};

export default function DiegoSalazarPage() {
  const diagnosticTypes = [
    {
      title: 'Computers, Websites & Networks',
      desc: 'Looking at computers, websites, and networks — making sure everything connects properly and runs the way it needs to for the business to keep moving forward.',
    },
    {
      title: 'Software & Hardware Problems',
      desc: 'Investigating software glitches and hardware failures — things like apps crashing, faulty components, driver issues, or systems that are performing slower than expected.',
    },
    {
      title: 'Security Issues',
      desc: 'Catching vulnerabilities, malware, or unauthorized access — essentially anything that could put the business or its data in danger.',
    },
  ];

  const examples = [
    {
      category: 'Hardware & Software Issues',
      items: [
        'Parts that stop working or behave strangely',
        'Scanning for viruses or harmful software',
        'Errors popping up in programs or apps',
      ],
    },
    {
      category: 'Network & Web Issues',
      items: [
        'Checking if Wi-Fi or network connections are stable',
        'Finding links on websites that no longer work',
        'Figuring out why a computer or site feels sluggish',
      ],
    },
    {
      category: 'System & Data Issues',
      items: [
        'Troubleshooting backup failures',
        'Tracing the real source of recurring problems',
        'Writing up findings so the right person can take over',
      ],
    },
  ];

  const benefits = [
    {
      title: 'Save Time',
      desc: 'Spotting issues early means less downtime and fewer delays, so the business keeps running without unnecessary interruptions.',
      icon: '⏱️',
    },
    {
      title: 'Find the Real Problem',
      desc: 'Diagnostics digs deeper to find the actual cause of a problem — not just the surface symptoms — so the right, lasting solution can be put in place.',
      icon: '🎯',
    },
    {
      title: 'Avoid Guessing',
      desc: 'Following a structured testing process replaces random trial-and-error, leading to more accurate results and less wasted effort on the wrong fixes.',
      icon: '🔍',
    },
    {
      title: 'Better Customer Service',
      desc: 'Routing issues to the right team member faster means customers get their problems solved sooner, which builds trust and keeps them happy.',
      icon: '🤝',
    },
  ];

  const steps = [
    {
      step: '01',
      title: 'Listen & Ask',
      desc: 'Start by really listening to what the customer is experiencing. Ask the right questions to understand the symptoms and gather important details before running any tests.',
    },
    {
      step: '02',
      title: 'Run Tests',
      desc: "Run the right diagnostic tests based on what was reported — whether that's hardware checks, network scans, or software troubleshooting.",
    },
    {
      step: '03',
      title: 'Identify Problem',
      desc: "Look at the test results to pinpoint what's really causing the problem. Separate the surface-level symptoms from the actual root issue.",
    },
    {
      step: '04',
      title: 'Report & Route',
      desc: 'Put together a brief diagnostic report with your findings. Then pass the issue along to the right team member so they can resolve it.',
    },
  ];

  return (
    <div className={styles.container}>
      <div className="container">
        {/* Breadcrumb */}
        <div className={styles.breadcrumb}>
          <Link href="/contributions">Contributions</Link>
          <span>/</span>
          <span className={styles.current}>Diego Salazar</span>
        </div>

        {/* Hero Area */}
        <section className={styles.heroSection}>
          <span className={styles.authorBadge}>Module Presenter: Diego Salazar</span>
          <h1 className={styles.title}>Systems Diagnostics & Troubleshooting</h1>
          <p className={styles.subtitle}>
            In an I.T. company, diagnostics isn't about taking wild guesses — it's about checking things methodically. We examine different parts of technology to figure out what's going wrong and why, before rushing into any solution.
          </p>
        </section>

        {/* Introduction */}
        <section className={styles.section}>
          <div className={styles.introCard}>
            <span className={styles.cardBadge}>Core Concept</span>
            <h2>Introduction to Diagnostics</h2>
            
            <div className={styles.twoColGrid}>
              <div className={styles.introBlock}>
                <h3>What is Diagnostics?</h3>
                <p>
                  Diagnostics is the step that comes before any repair work begins. It's about carefully examining a system to understand what's actually causing the issue — so the right fix can be applied from the start.
                </p>
              </div>

              <div className={styles.introBlock}>
                <h3>Why Does It Matter?</h3>
                <p>
                  It helps the team figure out what's not working, understand the reason behind it, and determine who's the best person to handle it. Without this step, we'd be shooting in the dark — and that costs everyone time and energy.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* What Diagnostics Means */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>What Diagnostics Means Across Technology</h2>
          <div className={styles.typesGrid}>
            {diagnosticTypes.map((type, idx) => (
              <div key={idx} className={styles.typeCard}>
                <h3>{type.title}</h3>
                <p>{type.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Diagnostic Examples */}
        <section className={styles.section}>
          <div className={styles.examplesCard}>
            <span className={styles.cardBadge}>Real-World Scenarios</span>
            <h2>Diagnostic Examples</h2>

            <div className={styles.threeColGrid}>
              {examples.map((ex, idx) => (
                <div key={idx} className={styles.exampleCol}>
                  <h3>{ex.category}</h3>
                  <ul>
                    {ex.items.map((item, iIdx) => (
                      <li key={iIdx}>
                        <svg className={styles.checkIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <polyline points="20 6 9 17 4 12"></polyline>
                        </svg>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why My Role is Important */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Why My Role is Important</h2>
          <div className={styles.benefitsGrid}>
            {benefits.map((b, idx) => (
              <div key={idx} className={styles.benefitCard}>
                <span className={styles.bIcon}>{b.icon}</span>
                <h3>{b.title}</h3>
                <p>{b.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* How Diagnostics Works */}
        <section className={styles.section}>
          <div className={styles.flowCard}>
            <span className={styles.cardBadge}>Diagnostic Workflow</span>
            <h2>How Diagnostics Works</h2>
            <p className={styles.flowLead}>
              The diagnostic process follows a simple, logical flow to find and resolve tech issues in a way that's both efficient and accurate.
            </p>

            <div className={styles.stepsGrid}>
              {steps.map((st) => (
                <div key={st.step} className={styles.stepCard}>
                  <span className={styles.stepNum}>Step {st.step}</span>
                  <h3>{st.title}</h3>
                  <p>{st.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Navigation */}
        <section className={styles.section}>
          <div className={styles.nextStepsCard}>
            <h2>Methodical Troubleshooting & Support</h2>
            <p>Explore our IT Support services or return to the project contributions showcase.</p>
            <div className={styles.btnRow}>
              <Link href="/services/managed-it" className={styles.contactBtn}>
                Managed IT & Support
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
