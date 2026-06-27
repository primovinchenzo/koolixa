import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import styles from '../service-single.module.css';

export const metadata: Metadata = {
  title: 'Technical Project Delivery & Coordination',
  description: 'Bridging client goals and developer tasks. Precise scope audits, milestone monitoring, risk reports, and structured communications.',
};

export default function ProjectDeliveryPage() {
  const features = [
    {
      title: 'Detailed Project Scope Auditing',
      desc: 'We map out exact deliverables, clarify technical requirements, and define concrete metrics for completion, avoiding scope creep and unexpected overages.',
    },
    {
      title: 'Milestone Tracking & Execution',
      desc: 'Maintaining development momentum via daily stand-ups, backlog grooming, and weekly sprint reviews. We ensure timelines are realistic and strictly hit.',
    },
    {
      title: 'Translation of Technical Requirements',
      desc: 'We translate complex code architecture decisions into business value for stakeholders, and convert stakeholder goals into actionable developer tasks.',
    },
    {
      title: 'Resource Allocation & Risk Reports',
      desc: 'Proactively identifying technical bottlenecks, monitoring resource availability, and generating weekly status updates to keep all parties aligned.',
    },
  ];

  return (
    <div className={styles.container}>
      <div className="container">
        {/* Breadcrumb */}
        <div className={styles.breadcrumb}>
          <Link href="/services">Services</Link>
          <span>/</span>
          <span className={styles.current}>Project Delivery</span>
        </div>

        {/* Hero Area */}
        <section className={styles.heroSection}>
          <div className={styles.heroContent}>
            <span className={`${styles.serviceBadge} ${styles.pmBadge}`}>Coordination Core</span>
            <h1 className={styles.title}>Project Delivery & Technical Coordination</h1>
            <p className={styles.subtitle}>
              Keep development on schedule and secure with precise milestone planning, developer-to-client translations, and transparent status updates.
            </p>
          </div>
        </section>

        {/* Core Content Grid */}
        <div className={styles.mainGrid}>
          {/* Detailed Description */}
          <div className={styles.detailsContent}>
            <h2>Bridging Complexity and Execution</h2>
            <p>
              IT and engineering projects fail when communications break down. Developers require clear specifications, while business stakeholders need transparency, predictable budgets, and on-time milestones.
            </p>
            <p>
              KOOLIXA bridges this gap. Our coordinators scoping, plan, and monitor every phase of your project. We manage technical dependencies and address bottlenecks before they cause delays.
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
              <h3>Coordination Metrics</h3>
              <ul className={styles.metricsList}>
                <li>
                  <strong>100%</strong>
                  <span>Transparent Weekly Project Reports</span>
                </li>
                <li>
                  <strong>On Time</strong>
                  <span>Milestone Delivery Commitment</span>
                </li>
                <li>
                  <strong>Agile / Scrum</strong>
                  <span>Industry-Standard Management Alignment</span>
                </li>
              </ul>
            </div>

            <div className={styles.sideCard}>
              <h3>Aligned Roles</h3>
              <p className={styles.roleDesc}>
                This capability is run by our internal **Project Managers**, backed by **Operations Leadership**, and verified by client status updates.
              </p>
              <Link href="/contact" className={styles.sideCta}>
                Scoping Your Next Project
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
