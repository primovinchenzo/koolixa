import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import styles from './jacob.module.css';

export const metadata: Metadata = {
  title: 'Operations Playbook | Jacob Medrano - Class Presentation',
  description: 'Technical module presentation on KOOLIXA Operations Playbook, Architecture, Workflow, and Maintenance Checklist by Jacob Medrano.',
};

export default function JacobMedranoPage() {
  const workflowSteps = [
    'Initial Consultation',
    'Discovery Meeting',
    'Requirements Gathering',
    'Design',
    'Development',
    'Testing',
    'Deployment',
    'Maintenance',
    'Ongoing Support',
  ];

  const responsibilities = [
    'Building websites for clients',
    'Hosting websites in a cloud environment',
    'Maintaining website functionality and performance',
    'Applying security updates and patches',
    'Monitoring website availability and health',
    'Performing backups and recovery operations',
    'Providing ongoing support and enhancements',
  ];

  const hostingComponents = [
    'Cloud DNS and traffic management',
    'Reverse proxy / load balancer',
    'Web application hosting platform',
    'Database services',
    'Backup and recovery storage',
    'Monitoring and logging services',
  ];

  const devRequirements = [
    'Source-controlled Git repository',
    'Defined branching strategy',
    'Code review process',
    'Automated deployment pipeline',
    'Rollback and recovery procedures',
  ];

  const operationalObjectives = [
    'Maintain high website availability and reliability',
    'Deliver secure and repeatable deployments',
    'Provide timely maintenance and support services',
    'Minimize service disruptions through proactive monitoring',
    'Maintain documented processes that scale as the client base grows',
  ];

  return (
    <div className={styles.container}>
      <div className="container">
        {/* Breadcrumb */}
        <div className={styles.breadcrumb}>
          <Link href="/contributions">Contributions</Link>
          <span>/</span>
          <span className={styles.current}>Jacob Medrano</span>
        </div>

        {/* Hero Area */}
        <section className={styles.heroSection}>
          <span className={styles.authorBadge}>Module Presenter: Jacob Medrano</span>
          <h1 className={styles.title}>Operations Playbook</h1>
          <p className={styles.subtitle}>
            A comprehensive operational framework governing service delivery, environment architecture, promotion paths, maintenance checklists, and monitoring observability matrices.
          </p>
        </section>

        {/* Mission Statement Card */}
        <section className={styles.section}>
          <div className={styles.missionCard}>
            <span className={styles.cardBadge}>Core Mission</span>
            <h2>Mission Statement</h2>
            <p className={styles.missionText}>
              “Provide reliable, secure, and scalable website solutions for small-to-medium businesses by delivering website design, development, hosting, maintenance, and ongoing support.”
            </p>
          </div>
        </section>

        {/* Service Responsibilities & Delivery Workflow */}
        <section className={styles.section}>
          <div className={styles.twoColGrid}>
            {/* Responsibilities */}
            <div className={styles.infoCard}>
              <h3>Service Responsibilities</h3>
              <p className={styles.cardIntro}>The organization is responsible for executing:</p>
              <ul className={styles.checkList}>
                {responsibilities.map((item, idx) => (
                  <li key={idx}>
                    <svg className={styles.checkIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Delivery Workflow */}
            <div className={styles.infoCard}>
              <h3>Service Delivery Workflow</h3>
              <p className={styles.cardIntro}>9-stage structured delivery pipeline:</p>
              <div className={styles.workflowSteps}>
                {workflowSteps.map((step, idx) => (
                  <div key={idx} className={styles.workflowItem}>
                    <span className={styles.stepNum}>{(idx + 1).toString().padStart(2, '0')}</span>
                    <span className={styles.stepName}>{step}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Environment Architecture & Logical Flow */}
        <section className={styles.section}>
          <div className={styles.archCard}>
            <span className={styles.cardBadge}>Infrastructure Design</span>
            <h2>Environment Architecture</h2>

            {/* Logical Flow Banner */}
            <div className={styles.logicalFlowBox}>
              <span className={styles.flowLabel}>Logical Architecture:</span>
              <div className={styles.flowTrack}>
                <span>Internet</span>
                <span className={styles.arrow}>→</span>
                <span>DNS</span>
                <span className={styles.arrow}>→</span>
                <span>Load Balancer</span>
                <span className={styles.arrow}>→</span>
                <span>Web Server</span>
                <span className={styles.arrow}>→</span>
                <span>Application</span>
                <span className={styles.arrow}>→</span>
                <span>Database</span>
                <span className={styles.arrow}>→</span>
                <span>Backups</span>
              </div>
            </div>

            {/* Design Principles */}
            <div className={styles.principlesGrid}>
              <div className={styles.principleItem}>
                <strong>Cloud-Hosted Infrastructure</strong>
                <p>Modern cloud platform hosting for optimal uptime.</p>
              </div>
              <div className={styles.principleItem}>
                <strong>Shared Multi-Tenant Platform</strong>
                <p>Efficient multi-tenant architecture for SMB scaling.</p>
              </div>
              <div className={styles.principleItem}>
                <strong>Isolated Environments</strong>
                <p>Secure, isolated application containers per client.</p>
              </div>
              <div className={styles.principleItem}>
                <strong>Automated Backups</strong>
                <p>Instant backup and disaster recovery capabilities.</p>
              </div>
              <div className={styles.principleItem}>
                <strong>High Availability & Scalability</strong>
                <p>Resilient traffic distribution and auto-scaling.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Hosting & Development Workflow */}
        <section className={styles.section}>
          <div className={styles.twoColGrid}>
            {/* Hosting Strategy */}
            <div className={styles.infoCard}>
              <h3>Hosting Strategy</h3>
              <div className={styles.strategyMeta}>
                <span><strong>Hosting Model:</strong> Cloud Hosting</span>
                <span><strong>Platform Strategy:</strong> Shared Multi-Tenant Platform</span>
              </div>
              <strong className={styles.subTitle}>Core Hosting Components:</strong>
              <ul className={styles.checkList}>
                {hostingComponents.map((comp, idx) => (
                  <li key={idx}>
                    <svg className={styles.checkIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    {comp}
                  </li>
                ))}
              </ul>
            </div>

            {/* Development Workflow */}
            <div className={styles.infoCard}>
              <h3>Development Workflow</h3>
              <div className={styles.promotionPathBox}>
                <span className={styles.promoLabel}>Environment Promotion Path:</span>
                <div className={styles.promoTrack}>
                  <span className={styles.promoEnv}>Development</span>
                  <span className={styles.arrow}>→</span>
                  <span className={styles.promoEnv}>Staging</span>
                  <span className={styles.arrow}>→</span>
                  <span className={styles.promoEnv}>Production</span>
                </div>
              </div>
              <strong className={styles.subTitle}>Mandatory Project Inclusions:</strong>
              <ul className={styles.checkList}>
                {devRequirements.map((req, idx) => (
                  <li key={idx}>
                    <svg className={styles.checkIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    {req}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Maintenance Checklist */}
        <section className={styles.section}>
          <div className={styles.checklistCard}>
            <span className={styles.cardBadge}>Operational Guardrails</span>
            <h2>Maintenance Checklist</h2>

            <div className={styles.threeColGrid}>
              <div className={styles.checkCategory}>
                <h3>🔒 Security</h3>
                <ul>
                  <li>Apply operating system & application security patches</li>
                  <li>Update frameworks, dependencies, and plugins</li>
                  <li>Review security configurations and certificates</li>
                  <li>Renew SSL certificates before expiration</li>
                </ul>
              </div>

              <div className={styles.checkCategory}>
                <h3>💾 Backup & Recovery</h3>
                <ul>
                  <li>Verify backup completion and data integrity</li>
                  <li>Test restoration procedures periodically</li>
                  <li>Ensure off-site backup retention policy</li>
                </ul>
              </div>

              <div className={styles.checkCategory}>
                <h3>⚡ Performance</h3>
                <ul>
                  <li>Review application performance metrics</li>
                  <li>Assess resource utilization trends</li>
                  <li>Address errors, bottlenecks & optimizations</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Monitoring & Observability */}
        <section className={styles.section}>
          <div className={styles.obsCard}>
            <span className={styles.cardBadge}>Real-Time Diagnostics</span>
            <h2>Monitoring & Observability</h2>

            <div className={styles.threeColGrid}>
              <div className={styles.obsCategory}>
                <h3>🖥️ Infrastructure Monitoring</h3>
                <p className={styles.categorySub}>Host environment health & capacity:</p>
                <ul>
                  <li>CPU utilization</li>
                  <li>Memory utilization</li>
                  <li>Disk utilization & storage capacity</li>
                  <li>Network connectivity & performance</li>
                </ul>
              </div>

              <div className={styles.obsCategory}>
                <h3>🌐 Website Monitoring</h3>
                <p className={styles.categorySub}>Availability & user experience:</p>
                <ul>
                  <li>Website uptime & availability</li>
                  <li>Response times & latency</li>
                  <li>SSL certificate expiration</li>
                  <li>Endpoint health checks</li>
                </ul>
              </div>

              <div className={styles.obsCategory}>
                <h3>📜 Logging & Security</h3>
                <p className={styles.categorySub}>Log collection & security analysis:</p>
                <ul>
                  <li>Application logs</li>
                  <li>Web server logs</li>
                  <li>Security & authentication logs</li>
                  <li>Deployment & change logs</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Operational Objectives */}
        <section className={styles.section}>
          <div className={styles.objectivesCard}>
            <h2>Operational Objectives</h2>
            <ul className={styles.objList}>
              {operationalObjectives.map((obj, idx) => (
                <li key={idx}>
                  <svg className={styles.checkIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  {obj}
                </li>
              ))}
            </ul>
            <div className={styles.btnRow}>
              <Link href="/services" className={styles.contactBtn}>
                Explore KOOLIXA Services
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
