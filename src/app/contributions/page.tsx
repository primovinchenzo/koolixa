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
  ];

  return (
    <div className={styles.container}>
      <div className="container">
        {/* Header */}
        <section className={styles.header}>
          <span className={styles.badge}>Academic Project Showcase</span>
          <h1 className={styles.title}>Project Contributions & Presentations</h1>
          <p className={styles.subtitle}>
            Explore the individual technical modules, operational frameworks, and course presentations developed by our team members for the KOOLIXA web platform.
          </p>
        </section>

        {/* Featured Contributor Modules */}
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

            {/* Placeholder slots for classmates */}
            <div className={styles.placeholderCard}>
              <div className={styles.placeholderIcon}>+</div>
              <h3>Classmate Contribution Slot</h3>
              <p>Reserved for upcoming team presentation modules and project component documentation.</p>
              <span className={styles.placeholderTag}>Pending Submission</span>
            </div>
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
                The purpose and the importance of a backup plan is to protect against risks such as hardware failure, human error, cyberattacks, and natural disasters. It keeps user websites available and minimizes downtime when something goes wrong.
              </p>
            </div>

            {/* Risks Banner */}
            <div className={styles.alertBanner}>
              <h3>⚠️ Risks You Can't Afford to Ignore</h3>
              <p>
                Over 60 percent of small businesses lose data because they lack proper backups. For a platform like ours where thousands of users depend on us to keep their websites running, the stakes are even higher. A single outage doesn't just cause downtime; it destroys user trust, and damages a company’s reputation.
              </p>
            </div>

            {/* Grid of Strategy & Recovery */}
            <div className={styles.twoColGrid}>
              {/* Strategy */}
              <div className={styles.infoCard}>
                <h3>Our Backup Strategy</h3>
                <ul className={styles.infoList}>
                  <li>
                    <strong>Automated Backups:</strong> Daily full backups and hourly incremental backups to capture all changes.
                  </li>
                  <li>
                    <strong>Restore Points & Retention:</strong> Multiple backup versions retained for flexible rollback and recovery.
                  </li>
                  <li>
                    <strong>Multi-Location Storage:</strong> On-site and cloud redundancy to ensure data is always accessible.
                  </li>
                  <li>
                    <strong>Encryption & Security:</strong> All backup data encrypted and protected against unauthorized access.
                  </li>
                </ul>
              </div>

              {/* Recovery Process */}
              <div className={styles.infoCard}>
                <h3>Recovery Process</h3>
                <ol className={styles.processList}>
                  <li>
                    <strong>Detect:</strong> Monitor for any failed backups, unusual changes, or other issues to begin backup recovery process.
                  </li>
                  <li>
                    <strong>Restore:</strong> Recover the most recent clean backup from the correct source, prioritising the most important site data first.
                  </li>
                  <li>
                    <strong>Verify:</strong> Check that links, pages, forms, and core features work correctly before going live.
                  </li>
                  <li>
                    <strong>Notify Users:</strong> Keep users updated during the recovery process and send a final confirmation once everything is back to normal.
                  </li>
                </ol>
              </div>
            </div>

            {/* Next Steps */}
            <div className={styles.nextStepsBox}>
              <h3>Next Steps & Contact</h3>
              <ul>
                <li>Ongoing monitoring and periodic testing of backups</li>
                <li>Continuous improvement based on previous downtimes for our website</li>
                <li>Reach out to our backup and recovery team with questions or feedback</li>
              </ul>
              <div className={styles.actionBtnRow}>
                <Link href="/contributions/brandon-caballero" className={styles.dedicatedPageBtn}>
                  Open Standalone Presentation View
                </Link>
              </div>
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
                From LLC registration with the Texas Secretary of State to Sales Tax permits with the Texas Comptroller and El Paso zoning regulations, maintaining full compliance safeguards business operations and client contracts.
              </p>
            </div>

            <div className={styles.twoColGrid}>
              <div className={styles.infoCard}>
                <h3>1. Business Registration</h3>
                <ul className={styles.infoList}>
                  <li>
                    <strong>LLC Structure:</strong> Shields personal assets from business liabilities. Formation costs range from $50–$1,000.
                  </li>
                  <li>
                    <strong>State Filings (DBA):</strong> Registered with Texas Secretary of State ($300.00 filing fee).
                  </li>
                  <li>
                    <strong>IRS EIN:</strong> Employer Identification Number from the IRS (Free online service).
                  </li>
                </ul>
              </div>

              <div className={styles.infoCard}>
                <h3>2. Sales Tax & Permits</h3>
                <ul className={styles.infoList}>
                  <li>
                    <strong>Texas Sales Tax Permit:</strong> Required via Texas Comptroller for taxable IT goods and services (Free).
                  </li>
                  <li>
                    <strong>El Paso Zoning Laws:</strong> Location compliance checked via El Paso Planning & Inspections.
                  </li>
                  <li>
                    <strong>Data Privacy & FCC:</strong> Compliance under Data Privacy Framework (DPF), FTC, and FCC licensing rules.
                  </li>
                </ul>
              </div>
            </div>

            <div className={styles.nextStepsBox}>
              <h3>Full Licensing Documentation & Direct State Links</h3>
              <p>Explore complete filing links, fee structures, zoning PDFs, and cybersecurity certification guides on Erika's dedicated module page.</p>
              <div className={styles.actionBtnRow}>
                <Link href="/contributions/erika-williams" className={styles.dedicatedPageBtn}>
                  Open Standalone Presentation View
                </Link>
              </div>
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
                What is needed for a training plan in a business? A structured 5-step process transforms team skills, eliminates operational bottlenecks, and guarantees measurable ROI.
              </p>
              <p>
                From initial problem identification to SMART goal definition, multi-format e-learning delivery, resource provisioning, and post-training evaluation, this framework equips businesses for sustainable growth.
              </p>
            </div>

            <div className={styles.twoColGrid}>
              <div className={styles.infoCard}>
                <h3>Steps 1–3: Assessment & Delivery</h3>
                <ul className={styles.infoList}>
                  <li>
                    <strong>Step 1 (Find Problem):</strong> Identify team struggles and specific skills needed before designing content.
                  </li>
                  <li>
                    <strong>Step 2 (SMART Goals):</strong> Set specific metrics (e.g. "Handle returns under 3 mins using new software").
                  </li>
                  <li>
                    <strong>Step 3 (Modular Formats):</strong> Combine e-learning, structured classrooms, hands-on practice, and peer shadowing.
                  </li>
                </ul>
              </div>

              <div className={styles.infoCard}>
                <h3>Steps 4–5: Resources & Proof</h3>
                <ul className={styles.infoList}>
                  <li>
                    <strong>Step 4 (Gather Tools):</strong> Provide workbooks, software logins, quiet work rooms, and dedicated learning time.
                  </li>
                  <li>
                    <strong>Step 5 (Evaluate Success):</strong> Conduct quizzes, live task audits, long-term performance checks, and team feedback.
                  </li>
                </ul>
              </div>
            </div>

            <div className={styles.nextStepsBox}>
              <h3>Full 5-Step Framework & SMART Goal Guide</h3>
              <p>Review Nicole's complete presentation breakdown and template structure on her dedicated module page.</p>
              <div className={styles.actionBtnRow}>
                <Link href="/contributions/nicole-macias" className={styles.dedicatedPageBtn}>
                  Open Standalone Presentation View
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
