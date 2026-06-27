import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import styles from '../service-single.module.css';

export const metadata: Metadata = {
  title: 'Website Technical Scoping & Project Launch Delivery',
  description: 'Guiding B2B web projects from design layouts to production launch. Scoping audits, sprint execution, and Vercel hosting setup.',
};

export default function ProjectDeliveryPage() {
  const features = [
    {
      title: 'Technical Requirements Scoping',
      desc: 'We map out the exact site navigation structures, database parameters, API integrations, and feature specifications, eliminating scope creep.',
    },
    {
      title: 'Sprint Tracking & Milestone Management',
      desc: 'Monitoring development momentum using sprint backlogs. We make sure website construction milestones and launch target dates are met.',
    },
    {
      title: 'Clear Developer-Stakeholder Bridge',
      desc: 'We translate complex coding choices into clear business value for you, and convert your business feedback into clear tasks for our developers.',
    },
    {
      title: 'Staging Environments & Launch Operations',
      desc: 'Configuring preview pipelines in Vercel to inspect site builds, audit accessibility, and run form checks before launching live.',
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
            <span className={`${styles.serviceBadge} ${styles.pmBadge}`}>Project Core</span>
            <h1 className={styles.title}>Technical Scoping & Project Launch Delivery</h1>
            <p className={styles.subtitle}>
              Keep your website build on schedule, structured, and aligned. We coordinate specifications, coding tasks, and DNS redirects for launch.
            </p>
          </div>
        </section>

        {/* Core Content Grid */}
        <div className={styles.mainGrid}>
          {/* Detailed Description */}
          <div className={styles.detailsContent}>
            <h2>Bridging Concept and Launch Execution</h2>
            <p>
              Website projects fail when specifications are vague. Developers need precise feature tasks, while business owners require absolute transparency on launch dates and milestones.
            </p>
            <p>
              KOOLIXA guides your project with care. We scoping, organize, and monitor every phase of your website project, coordinating Vercel hosting paths for a smooth launch.
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
              <h3>Project Management Metrics</h3>
              <ul className={styles.metricsList}>
                <li>
                  <strong>100%</strong>
                  <span>Transparent Weekly Progress Reports</span>
                </li>
                <li>
                  <strong>On Time</strong>
                  <span>Milestone Launch Commitment</span>
                </li>
                <li>
                  <strong>Vercel Staging</strong>
                  <span>Instant Deployment Previews Enforced</span>
                </li>
              </ul>
            </div>

            <div className={styles.sideCard}>
              <h3>Aligned Roles</h3>
              <p className={styles.roleDesc}>
                This capability is run by our internal **Project Managers**, backed by **Operations Leadership**, and coordinated with **Web Developers**.
              </p>
              <Link href="/contact" className={styles.sideCta}>
                Scoping Your Website Project
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
