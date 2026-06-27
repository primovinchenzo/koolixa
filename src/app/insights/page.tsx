import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import styles from './insights.module.css';

export const metadata: Metadata = {
  title: 'Insights & Technical Resources',
  description: 'Expert analysis, security guides, backup metrics, and IT operations recommendations from the KOOLIXA engineering team.',
};

export default function InsightsPage() {
  const posts = [
    {
      slug: 'hardening-directory-environments',
      title: 'Hardening Active Directory Configurations: Key Exposures',
      category: 'Security Operations',
      date: 'June 18, 2026',
      readTime: '6 min read',
      summary: 'A detailed review of standard misconfigurations in directory services, detailing password compliance gaps and privilege escalations.',
    },
    {
      slug: 'understanding-co-managed-soc',
      title: 'Evaluating Co-Managed SOC vs. Traditional MSP Help Desks',
      category: 'Cybersecurity Coordination',
      date: 'May 28, 2026',
      readTime: '5 min read',
      summary: 'Why first-line support desks are insufficient for containment, and how co-managed security operations centers isolate threats at the firewall.',
    },
    {
      slug: 'calculating-rto-rpo-stability',
      title: 'Calculating RTO and RPO: Designing Backup Resilience',
      category: 'Backup & Stability',
      date: 'May 04, 2026',
      readTime: '4 min read',
      summary: 'A B2B framework to determine backup intervals, verification schedules, and rolling recovery timelines to eliminate downtime.',
    },
  ];

  return (
    <div className={styles.container}>
      <div className="container">
        {/* Header */}
        <section className={styles.header}>
          <span className={styles.badge}>Technical Insights</span>
          <h1 className={styles.title}>System Engineering Logs</h1>
          <p className={styles.subtitle}>
            Proactive recommendations, configuration checklists, and cyber threat breakdowns authored by the KOOLIXA technical operations desk.
          </p>
        </section>

        {/* Featured Grid */}
        <section className={styles.postsSection}>
          <div className={styles.postsGrid}>
            {posts.map((post, idx) => (
              <article key={idx} className={styles.postCard}>
                <div className={styles.postMeta}>
                  <span className={styles.postCategory}>{post.category}</span>
                  <span className={styles.postDivider}>•</span>
                  <span className={styles.postDate}>{post.date}</span>
                </div>
                <h2 className={styles.postTitle}>
                  <Link href={`/insights/${post.slug}`} className={styles.postTitleLink}>
                    {post.title}
                  </Link>
                </h2>
                <p className={styles.postSummary}>{post.summary}</p>
                <div className={styles.postFooter}>
                  <span className={styles.readTime}>{post.readTime}</span>
                  <Link href={`/insights/${post.slug}`} className={styles.readMoreLink}>
                    Read Article
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
              </article>
            ))}
          </div>
        </section>

        {/* Newsletter Signup */}
        <section className={styles.newsletterSection}>
          <div className={styles.newsletterBox}>
            <h2>Operations Logs Subscription</h2>
            <p>
              Receive monthly briefs on cyber alert trends, network configuration advisories, and Next.js development tips.
            </p>
            <form className={styles.newsletterForm} action="/api/newsletter-mock" method="POST">
              <input
                type="email"
                placeholder="operations@yourcompany.com"
                required
                className={styles.newsletterInput}
                aria-label="Business Email for Newsletter"
              />
              <button type="submit" className={styles.newsletterBtn}>
                Subscribe
              </button>
            </form>
          </div>
        </section>
      </div>
    </div>
  );
}
