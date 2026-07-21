import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import styles from './contributions.module.css';

export const metadata: Metadata = {
  title: 'Project Contributions & Team Presentations',
  description: 'Class project contributions and individual technical module presentations for the KOOLIXA web platform.',
};

export default function ContributionsPage() {
  const contributors = [
    {
      name: 'Brandon Caballero',
      role: 'Backup & Recovery Lead',
      topic: 'Website Data Protection & Recovery Plan',
      slug: 'brandon-caballero',
      summary: 'A structured system for protecting website data by creating regular copies that can be restored when needed to keep websites running with zero data loss.',
      highlights: [
        'Automated daily full & hourly incremental backups',
        'Multi-location on-site & cloud redundancy',
        'Four-stage recovery process (Detect, Restore, Verify, Notify)',
      ],
    },
    {
      name: 'Erika Williams',
      role: 'Licensing & Compliance Lead',
      topic: 'Licensing and Permits',
      slug: 'erika-williams',
      summary: 'Essential business registration (LLC & EIN), Texas sales tax permits, El Paso zoning laws, cybersecurity certifications, data privacy, and federal employment tax rules.',
      highlights: [
        'LLC & Texas Secretary of State DBA Registration ($300 fee)',
        'IRS EIN & Texas Comptroller Sales Tax Permit Application',
        'El Paso Zoning Compliance, Cyber Certifications & DPF Privacy',
      ],
    },
    {
      name: 'Nicole Macias',
      role: 'Training & Development Lead',
      topic: 'Business Employee Training Plan',
      slug: 'nicole-macias',
      summary: 'A 5-step strategic framework for identifying skill gaps, setting SMART success goals, structuring modular e-learning, resourcing tools, and measuring training ROI.',
      highlights: [
        'Step 1 & 2: Needs Assessment & SMART Goal Setting',
        'Step 3 & 4: Multi-Format Delivery & Resource Gathering',
        'Step 5: Post-Training Quizzes, Live Audits & Feedback Loops',
      ],
    },
    {
      name: 'Diego Quinones',
      role: 'HR & Staffing Operations Lead',
      topic: 'Company Staffing Structure & Roles',
      slug: 'diego-quinones',
      summary: 'Comprehensive staffing model covering salary structures, technical skill requirements, interview vetting strategies, and operational roles across Web Dev, IT Support, Security, PM, and Leadership.',
      highlights: [
        'Web Developers ($40k-$60k) & IT Support Techs ($20/hr Linux skills)',
        'Cybersecurity Analysts ($70k-$80k) & Project Managers ($60k-$100k)',
        'Executive Leadership (CEO & CTO) Responsibilities & Vetting',
      ],
    },
    {
      name: 'Ignacio Salcido',
      role: 'QA & Disaster Recovery Lead',
      topic: 'Quality Assurance & System Gatekeeping',
      slug: 'ignacio-salcido',
      summary: 'Serving as the final gatekeeper for prototype stability, update sign-offs, UX verification, bug tracking, state backups, disaster recovery, and security access controls.',
      highlights: [
        'Prototype Testing, UX Verification & Cross-Browser Sign-Off',
        'Root Cause Bug Tracking & Cross-Department Collaboration',
        'Disaster Recovery Backups, Rollback Sandboxes & Threat Hunting',
      ],
    },
    {
      name: 'Joel Bustamante',
      role: 'Regulatory & Data Privacy Lead',
      topic: 'Privacy and Data Protection Regulations',
      slug: 'joel-bustamante',
      summary: 'Detailed overview of regulatory security frameworks (GDPR, CCPA, HIPAA, GLBA, FERPA, ISO 27001, NIST, SOC 2, PCI DSS, FedRAMP) and their 12 website implementation requirements.',
      highlights: [
        'Global Privacy Laws (GDPR, CCPA/CPRA, HIPAA, GLBA, FERPA)',
        'Security Frameworks (ISO 27001, NIST CSF, SOC 2, PCI DSS, FedRAMP)',
        '12 Website Implementation Pillars (Consent, Encryption, Audit Logs)',
      ],
    },
    {
      name: 'Jacob Medrano',
      role: 'Operations Strategy Lead',
      topic: 'Operations Playbook',
      slug: 'jacob-medrano',
      summary: 'Complete operational playbook detailing KOOLIXA’s mission statement, 9-stage delivery workflow, logical architecture, promotion paths (Dev → Staging → Prod), maintenance checklists, and observability matrices.',
      highlights: [
        '9-Stage Service Delivery Workflow (Consultation → Support)',
        'Logical Architecture: Internet → DNS → WAF → App → DB → Backups',
        'Promotion Paths (Dev → Staging → Prod) & Monitoring Matrices',
      ],
    },
    {
      name: 'Diego Salazar',
      role: 'Systems Diagnostics Specialist',
      topic: 'Systems Diagnostics & Troubleshooting',
      slug: 'diego-salazar',
      summary: 'A methodical 4-step diagnostic workflow for examining hardware, software, networks, and security vulnerabilities before applying targeted technical fixes.',
      highlights: [
        'What Diagnostics Means (Hardware, Software, Networks & Security)',
        'Why Diagnostics Matters (Time Savings, Root Cause & Avoid Guessing)',
        '4-Step Diagnostic Flow (Listen & Ask → Run Tests → Identify → Route)',
      ],
    },
    {
      name: 'Jesus Garcia & Gabe Venegas',
      role: 'Marketing & Location Strategy Leads',
      topic: 'Marketing, Testimonials & HQ Site Location',
      slug: 'jesus-garcia-gabe-venegas',
      summary: 'Marketing framework introducing client testimonials, comprehensive FAQ accordion, official El Paso HQ site location (6006 N Mesa St., Suite 210), and newsletter subscription integration.',
      highlights: [
        'Official HQ Site Location: 6006 N Mesa St., Suite 210, El Paso, TX',
        'Client Testimonials (Sarah M., David R., Emily T.) & 5-Star Reviews',
        'Frequently Asked Questions (FAQ) & Newsletter Opt-In System',
      ],
    },
  ];

  return (
    <div className={styles.container}>
      <div className="container">
        {/* Header */}
        <section className={styles.header}>
          <span className={styles.badge}>Academic Project Showcase</span>
          <h1 className={styles.title}>Project Contributions & Presentations</h1>
          <p className={styles.subtitle}>
            Explore the individual technical modules, operational frameworks, legal research, marketing strategy, and course presentations developed by our team members for the KOOLIXA web platform.
          </p>
        </section>

        {/* Contributor Modules Grid */}
        <section className={styles.modulesSection}>
          <h2 className={styles.sectionTitle}>Team Member Modules</h2>
          <div className={styles.grid}>
            {contributors.map((person) => (
              <div key={person.slug} className={styles.contributorCard}>
                <div className={styles.cardHeader}>
                  <div>
                    <span className={styles.contributorName}>{person.name}</span>
                    <span className={styles.contributorRole}>{person.role}</span>
                  </div>
                  <span className={styles.topicTag}>{person.topic}</span>
                </div>

                <p className={styles.summary}>{person.summary}</p>

                <div className={styles.highlightsBox}>
                  <strong>Key Components:</strong>
                  <ul className={styles.highlightsList}>
                    {person.highlights.map((item, idx) => (
                      <li key={idx}>
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
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className={styles.cardFooter}>
                  <Link href={`/contributions/${person.slug}`} className={styles.viewBtn}>
                    View Full Presentation Module
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
              </div>
            ))}
          </div>
        </section>

        {/* Featured Presentation 1: Brandon Caballero */}
        <section className={styles.featuredSection}>
          <div className={styles.featuredHeader}>
            <span className={styles.featuredBadge}>Featured Module Presentation</span>
            <h2>Brandon Caballero: Backup & Recovery Plan</h2>
          </div>

          <div className={styles.presentationBox}>
            <div className={styles.introBlock}>
              <p className={styles.leadText}>
                A backup plan is a structured system for protecting website data by creating regular copies that can be restored when needed to continue running a website.
              </p>
              <p>
                The purpose and importance of a backup plan is to protect against hardware failure, human error, cyberattacks, and natural disasters. It keeps user websites available and minimizes downtime.
              </p>
            </div>

            <div className={styles.actionBtnRow}>
              <Link href="/contributions/brandon-caballero" className={styles.dedicatedPageBtn}>
                Open Standalone Presentation View →
              </Link>
            </div>
          </div>
        </section>

        {/* Featured Presentation 2: Erika Williams */}
        <section className={styles.featuredSection}>
          <div className={styles.featuredHeader}>
            <span className={styles.featuredBadge}>Featured Module Presentation</span>
            <h2>Erika Williams: Licensing and Permits</h2>
          </div>

          <div className={styles.presentationBox}>
            <div className={styles.introBlock}>
              <p className={styles.leadText}>
                Establishing a legal and compliant IT business in Texas requires fulfilling federal, state, local zoning, and industry-specific licensing parameters.
              </p>
              <p>
                Includes LLC registration ($50–$1,000), Texas Secretary of State DBA Form 205 ($300.00), IRS EIN, Texas Comptroller sales tax permits, El Paso zoning laws, and Data Privacy Framework compliance.
              </p>
            </div>

            <div className={styles.actionBtnRow}>
              <Link href="/contributions/erika-williams" className={styles.dedicatedPageBtn}>
                Open Standalone Presentation View →
              </Link>
            </div>
          </div>
        </section>

        {/* Featured Presentation 3: Nicole Macias */}
        <section className={styles.featuredSection}>
          <div className={styles.featuredHeader}>
            <span className={styles.featuredBadge}>Featured Module Presentation</span>
            <h2>Nicole Macias: Business Employee Training Plan</h2>
          </div>

          <div className={styles.presentationBox}>
            <div className={styles.introBlock}>
              <p className={styles.leadText}>
                A 5-step structured process transforms team skills, eliminates operational bottlenecks, and guarantees measurable ROI.
              </p>
              <p>
                Covers problem identification, SMART goal setting (e.g., handling customer returns in under 3 minutes), modular e-learning delivery, resource provisioning, and post-training evaluations.
              </p>
            </div>

            <div className={styles.actionBtnRow}>
              <Link href="/contributions/nicole-macias" className={styles.dedicatedPageBtn}>
                Open Standalone Presentation View →
              </Link>
            </div>
          </div>
        </section>

        {/* Featured Presentation 4: Diego Quinones */}
        <section className={styles.featuredSection}>
          <div className={styles.featuredHeader}>
            <span className={styles.featuredBadge}>Featured Module Presentation</span>
            <h2>Diego Quinones: Staffing Structure & Roles</h2>
          </div>

          <div className={styles.presentationBox}>
            <div className={styles.introBlock}>
              <p className={styles.leadText}>
                Structuring an elite B2B IT & Web Services team requires defined compensation bands, technical vetting criteria, and clear role boundaries.
              </p>
              <p>
                Covers Web Developers ($40k-$60k), IT Support Techs ($20/hr Linux skills), Cybersecurity Analysts ($70k-$80k), Project & Operations Managers ($60k-$100k), and CEO/CTO leadership responsibilities.
              </p>
            </div>

            <div className={styles.actionBtnRow}>
              <Link href="/contributions/diego-quinones" className={styles.dedicatedPageBtn}>
                Open Standalone Presentation View →
              </Link>
            </div>
          </div>
        </section>

        {/* Featured Presentation 5: Ignacio Salcido */}
        <section className={styles.featuredSection}>
          <div className={styles.featuredHeader}>
            <span className={styles.featuredBadge}>Featured Module Presentation</span>
            <h2>Ignacio Salcido: Quality Assurance & Disaster Recovery</h2>
          </div>

          <div className={styles.presentationBox}>
            <div className={styles.introBlock}>
              <p className={styles.leadText}>
                Serving as the final gatekeeper for system stability, pre-deployment prototype testing, bug logging, and disaster recovery execution.
              </p>
              <p>
                Covers prototype diagnostics, update sign-offs, UX/cross-browser verification, root cause analysis, state backups, emergency preparedness, and security access controls.
              </p>
            </div>

            <div className={styles.actionBtnRow}>
              <Link href="/contributions/ignacio-salcido" className={styles.dedicatedPageBtn}>
                Open Standalone Presentation View →
              </Link>
            </div>
          </div>
        </section>

        {/* Featured Presentation 6: Joel Bustamante */}
        <section className={styles.featuredSection}>
          <div className={styles.featuredHeader}>
            <span className={styles.featuredBadge}>Featured Module Presentation</span>
            <h2>Joel Bustamante: Privacy & Data Protection Regulations</h2>
          </div>

          <div className={styles.presentationBox}>
            <div className={styles.introBlock}>
              <p className={styles.leadText}>
                Navigating complex regulatory frameworks to protect customer data and build client trust across global industries.
              </p>
              <p>
                Covers GDPR, CCPA/CPRA, HIPAA, GLBA, FERPA, ISO 27001, NIST CSF, SOC 2, PCI DSS, FedRAMP, and the 12 core website implementation pillars.
              </p>
            </div>

            <div className={styles.actionBtnRow}>
              <Link href="/contributions/joel-bustamante" className={styles.dedicatedPageBtn}>
                Open Standalone Presentation View →
              </Link>
            </div>
          </div>
        </section>

        {/* Featured Presentation 7: Jacob Medrano */}
        <section className={styles.featuredSection}>
          <div className={styles.featuredHeader}>
            <span className={styles.featuredBadge}>Featured Module Presentation</span>
            <h2>Jacob Medrano: Operations Playbook</h2>
          </div>

          <div className={styles.presentationBox}>
            <div className={styles.introBlock}>
              <p className={styles.leadText}>
                Delivering reliable, secure, and scalable website solutions through an end-to-end operational playbook.
              </p>
              <p>
                Covers KOOLIXA's mission statement, 7 service responsibilities, 9-stage delivery workflow, cloud architecture (Internet → DNS → Load Balancer → Web → DB → Backups), Dev → Staging → Prod promotion, maintenance checklists, and monitoring matrices.
              </p>
            </div>

            <div className={styles.actionBtnRow}>
              <Link href="/contributions/jacob-medrano" className={styles.dedicatedPageBtn}>
                Open Standalone Presentation View →
              </Link>
            </div>
          </div>
        </section>

        {/* Featured Presentation 8: Diego Salazar */}
        <section className={styles.featuredSection}>
          <div className={styles.featuredHeader}>
            <span className={styles.featuredBadge}>Featured Module Presentation</span>
            <h2>Diego Salazar: Systems Diagnostics & Troubleshooting</h2>
          </div>

          <div className={styles.presentationBox}>
            <div className={styles.introBlock}>
              <p className={styles.leadText}>
                Methodical troubleshooting to diagnose tech issues accurately before rushing into any solution.
              </p>
              <p>
                Covers what diagnostics means across computers, software, hardware, networks, and security issues; why the role saves time and avoids guessing; real-world diagnostic examples; and the 4-step workflow (Listen & Ask → Run Tests → Identify Problem → Report & Route).
              </p>
            </div>

            <div className={styles.actionBtnRow}>
              <Link href="/contributions/diego-salazar" className={styles.dedicatedPageBtn}>
                Open Standalone Presentation View →
              </Link>
            </div>
          </div>
        </section>

        {/* Featured Presentation 9: Jesus Garcia & Gabe Venegas */}
        <section className={styles.featuredSection}>
          <div className={styles.featuredHeader}>
            <span className={styles.featuredBadge}>Featured Module Presentation</span>
            <h2>Jesus Garcia & Gabe Venegas: Marketing & Location Strategy</h2>
          </div>

          <div className={styles.presentationBox}>
            <div className={styles.introBlock}>
              <p className={styles.leadText}>
                Building client trust and market presence through customer testimonials, comprehensive FAQs, physical HQ location, and newsletter outreach.
              </p>
              <p>
                Covers the official headquarters address (6006 N Mesa St., Suite 210, El Paso, TX), building photography, client review showcases, essential customer FAQs, and an integrated newsletter opt-in system.
              </p>
            </div>

            <div className={styles.actionBtnRow}>
              <Link href="/contributions/jesus-garcia-gabe-venegas" className={styles.dedicatedPageBtn}>
                Open Standalone Presentation View →
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
