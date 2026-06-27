import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import styles from './post.module.css';

interface PostData {
  title: string;
  category: string;
  date: string;
  readTime: string;
  content: string[];
}

const articlesData: Record<string, PostData> = {
  'hardening-directory-environments': {
    title: 'Hardening Active Directory Configurations: Key Exposures',
    category: 'Security Operations',
    date: 'June 18, 2026',
    readTime: '6 min read',
    content: [
      'Directory environments act as the foundation of B2B corporate access. However, legacy configurations and lack of access auditing often leave them vulnerable to privilege escalation attacks.',
      'One of the most common vulnerabilities is the existence of inactive administrator accounts. Attacks often target these dormant accounts to gain persistent access. KOOLIXA recommends enforcing an automated de-provisioning policy that flags and disables accounts inactive for more than 30 days.',
      'Additionally, service accounts are frequently configured with excessive privileges. If an attacker compromises a web server running a privileged service account, they gain control of the domain controller. We implement Least Privilege Administration (PoLP) rules, locking down service accounts to their minimum required scopes.',
      'Finally, enforce multi-factor authentication (MFA) on all access channels, including internal administration. KOOLIXA co-managed security desks monitor access logs in real-time, blocking anomalous logins immediately.',
    ],
  },
  'understanding-co-managed-soc': {
    title: 'Evaluating Co-Managed SOC vs. Traditional MSP Help Desks',
    category: 'Cybersecurity Coordination',
    date: 'May 28, 2026',
    readTime: '5 min read',
    content: [
      'Standard managed service providers (MSPs) offer first-line help desk support. While excellent for password resets and device configuration, they are rarely equipped to contain sophisticated cyber threats in real-time.',
      'A co-managed Security Operations Center (SOC) integrates dedicated threat analysts directly into your infrastructure operations. They analyze firewall logs, endpoint triggers, and mail server events 24/7/365.',
      'The primary differentiator is threat containment speed. While a traditional help desk might queue an anomalous alert for review the next business day, a co-managed SOC coordinates threat containment within minutes of an alert trigger.',
      'KOOLIXA bridges this gap by co-managing operations. We establish threat isolation policies (such as automatic machine quarantine and IP blocking) and coordinate incident remediation with the outsourced SOC, keeping your business safe.',
    ],
  },
  'calculating-rto-rpo-stability': {
    title: 'Calculating RTO and RPO: Designing Backup Resilience',
    category: 'Backup & Stability',
    date: 'May 04, 2026',
    readTime: '4 min read',
    content: [
      'Business continuity relies on defining recovery parameters. When data loss or server failure occurs, two critical metrics determine stability: Recovery Time Objective (RTO) and Recovery Point Objective (RPO).',
      'RTO defines the maximum acceptable duration of downtime. For instance, if an e-commerce database fails, can you afford 4 hours of offline operations, or does the contract require restoration under 15 minutes?',
      'RPO defines the maximum acceptable data loss window. If your database backups run once daily, a failure at 11:00 PM means losing up to 23 hours of customer data. For high-volume B2B systems, KOOLIXA configures continuous, block-level data replication to reduce RPO to under 1 hour.',
      'We validate recovery capability by executing automated monthly restoration sandboxes. This confirms backups boot successfully and guarantees RTO thresholds are hit, protecting your operations.',
    ],
  },
};

// Generate dynamic metadata
export async function generateMetadata(
  props: { params: Promise<{ slug: string }> }
): Promise<Metadata> {
  const params = await props.params;
  const article = articlesData[params.slug];
  if (!article) {
    return {
      title: 'Article Not Found',
    };
  }
  return {
    title: `${article.title} | KOOLIXA Insights`,
    description: article.content[0],
  };
}

export default async function ArticlePage(
  props: { params: Promise<{ slug: string }> }
) {
  const params = await props.params;
  const article = articlesData[params.slug];

  if (!article) {
    notFound();
  }

  return (
    <div className={styles.container}>
      <div className="container">
        {/* Breadcrumb */}
        <div className={styles.breadcrumb}>
          <Link href="/insights">Logs</Link>
          <span>/</span>
          <span className={styles.current}>Article</span>
        </div>

        <article className={styles.article}>
          <div className={styles.meta}>
            <span className={styles.category}>{article.category}</span>
            <span className={styles.divider}>•</span>
            <span className={styles.date}>{article.date}</span>
            <span className={styles.divider}>•</span>
            <span className={styles.readTime}>{article.readTime}</span>
          </div>

          <h1 className={styles.title}>{article.title}</h1>

          <div className={styles.content}>
            {article.content.map((paragraph, idx) => (
              <p key={idx}>{paragraph}</p>
            ))}
          </div>

          <div className={styles.footer}>
            <Link href="/insights" className={styles.backBtn}>
              Back to System Logs
            </Link>
            <Link href="/contact" className={styles.ctaBtn}>
              Request Capability Audit
            </Link>
          </div>
        </article>
      </div>
    </div>
  );
}
