import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import styles from '../service-single.module.css';

export const metadata: Metadata = {
  title: 'Custom Web Development & Infrastructure Optimization',
  description: 'High-performance Next.js App Router websites, Core Web Vitals optimization, API integrations, and WCAG accessibility compliance.',
};

export default function WebDevelopmentPage() {
  const features = [
    {
      title: 'Next.js App Router & TypeScript Engineering',
      desc: 'We build modern web applications leveraging React Server Components (RSC) for lightning-fast initial load times, type-safe structures, and clean codebase scaling.',
    },
    {
      title: 'Core Web Vitals & Speed Tuning',
      desc: 'Optimizing image compression formats, implementing layout shift (CLS) fixes, reducing javascript bundles, and tuning serverless function configurations to hit 90+ Lighthouse targets.',
    },
    {
      title: 'Accessibility & SEO Auditing',
      desc: 'Strict alignment with WCAG 2.1 AA accessibility parameters, semantic markup, full keyboard navigations, automated sitemaps, structured schema data, and meta descriptions.',
    },
    {
      title: 'Full-Stack Integrations & Route Handlers',
      desc: 'Connecting frontends to serverless databases (e.g. Neon, Supabase), API microservices, Stripe payment processing, and email systems with secure route handlers.',
    },
  ];

  return (
    <div className={styles.container}>
      <div className="container">
        {/* Breadcrumb */}
        <div className={styles.breadcrumb}>
          <Link href="/services">Services</Link>
          <span>/</span>
          <span className={styles.current}>Web Development</span>
        </div>

        {/* Hero Area */}
        <section className={styles.heroSection}>
          <div className={styles.heroContent}>
            <span className={`${styles.serviceBadge} ${styles.devBadge}`}>Development Core</span>
            <h1 className={styles.title}>Web System Development & Engineering</h1>
            <p className={styles.subtitle}>
              Deploy modern, premium web experiences built for high conversion, strict accessibility standards, and SEO rankings.
            </p>
          </div>
        </section>

        {/* Core Content Grid */}
        <div className={styles.mainGrid}>
          {/* Detailed Description */}
          <div className={styles.detailsContent}>
            <h2>Performance-Driven Engineering</h2>
            <p>
              Your website is your primary digital storefront and customer intake system. Cookie-cutter templates and slow web platforms alienate visitors, reduce conversions, and hurt search visibility.
            </p>
            <p>
              KOOLIXA engineers custom, high-speed, secure web environments. We focus on lightweight assets, modern TypeScript configurations, strict accessibility, and optimized Vercel edge routes.
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
              <h3>Engineering Performance</h3>
              <ul className={styles.metricsList}>
                <li>
                  <strong>&lt; 1.2s</strong>
                  <span>Largest Contentful Paint (LCP)</span>
                </li>
                <li>
                  <strong>90+</strong>
                  <span>Lighthouse Performance & SEO Targets</span>
                </li>
                <li>
                  <strong>WCAG 2.1 AA</strong>
                  <span>Strict Accessibility Compliance</span>
                </li>
              </ul>
            </div>

            <div className={styles.sideCard}>
              <h3>Aligned Roles</h3>
              <p className={styles.roleDesc}>
                This capability is run by our internal **Web Developers**, audited by our **Accessibility & SEO Lead**, and deployed by our **Vercel Architects**.
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
