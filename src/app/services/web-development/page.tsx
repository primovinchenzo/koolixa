import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import styles from '../service-single.module.css';

export const metadata: Metadata = {
  title: 'Custom Web Engineering & Website Launch',
  description: 'High-speed Next.js App Router websites built from scratch. Type-safe TypeScript coding, custom design system, and optimized SEO.',
};

export default function WebDevelopmentPage() {
  const features = [
    {
      title: 'Next.js App Router & TypeScript Builds',
      desc: 'We construct custom web codebases from scratch using React Server Components. This guarantees lightning-fast loading speeds and easy updates without reliance on heavy templates.',
    },
    {
      title: 'Responsive Design & Accessibility',
      desc: 'Our designs adapt to all screen sizes. We code semantic HTML markup, ensuring WCAG 2.1 AA accessibility compliance and keyboard navigability.',
    },
    {
      title: 'SEO Hardening & Search Readiness',
      desc: 'We optimize website speed, code metadata structures, and generate automated sitemaps. We make sure search engine crawlers index your site correctly from day one.',
    },
    {
      title: 'Interactive Features & Integrations',
      desc: 'Connecting your front-end to serverless databases, intake forms (e.g. Formspree/Resend), analytics tools, and business emails.',
    },
  ];

  return (
    <div className={styles.container}>
      <div className="container">
        {/* Breadcrumb */}
        <div className={styles.breadcrumb}>
          <Link href="/services">Services</Link>
          <span>/</span>
          <span className={styles.current}>Web Engineering</span>
        </div>

        {/* Hero Area */}
        <section className={styles.heroSection}>
          <div className={styles.heroContent}>
            <span className={`${styles.serviceBadge} ${styles.devBadge}`}>Build Core</span>
            <h1 className={styles.title}>Custom Web Engineering & Website Launch</h1>
            <p className={styles.subtitle}>
              Construct a premium, high-speed business website from scratch. Engineered for search rankings, conversions, and speed.
            </p>
          </div>
        </section>

        {/* Core Content Grid */}
        <div className={styles.mainGrid}>
          {/* Detailed Description */}
          <div className={styles.detailsContent}>
            <h2>Custom Code over Outdated Templates</h2>
            <p>
              Many web development agencies rely on generic website builders that load excessive scripts, slowing down page speeds and hurting search rankings.
            </p>
            <p>
              KOOLIXA designs and constructs premium, bespoke web presences. We focus on lightweight assets, clean typography, optimized Core Web Vitals, and type-safe Next.js pages.
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
              <h3>Build Performance</h3>
              <ul className={styles.metricsList}>
                <li>
                  <strong>95+</strong>
                  <span>Lighthouse Performance & SEO Targets</span>
                </li>
                <li>
                  <strong>&lt; 1.2s</strong>
                  <span>Largest Contentful Paint (LCP)</span>
                </li>
                <li>
                  <strong>TypeScript</strong>
                  <span>Strict Type-Safe Build Standards</span>
                </li>
              </ul>
            </div>

            <div className={styles.sideCard}>
              <h3>Aligned Roles</h3>
              <p className={styles.roleDesc}>
                This service is executed by our **Web Developers**, audited by our **SEO Lead**, and configured by our **Vercel Architects**.
              </p>
              <Link href="/contact" className={styles.sideCta}>
                Discuss Your Web Project
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
