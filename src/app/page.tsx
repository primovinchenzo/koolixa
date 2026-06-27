import React from 'react';
import Link from 'next/link';
import styles from './page.module.css';

export default function Home() {
  const stats = [
    { value: '14m', label: 'Average Response SLA', desc: 'First-touch technical help desk resolution.' },
    { value: '100%', label: 'Incident Isolation', desc: 'Coordinated vendor-threat mitigation.' },
    { value: '99.99%', label: 'Network Uptime', desc: 'Guaranteed system resilience SLA.' },
    { value: '250+', label: 'Systems Hardened', desc: 'Audited B2B client architectures.' },
  ];

  const servicesSummary = [
    {
      title: 'Managed IT Support',
      desc: 'Proactive help desk, account setups, system checks, and priority technical support tickets.',
      path: '/services/managed-it',
      tag: 'Stability',
    },
    {
      title: 'Cybersecurity Coordination',
      desc: 'Vulnerability reviews, security policy deployments, and 24/7 co-managed incident response.',
      path: '/services/cybersecurity',
      tag: 'Protection',
    },
    {
      title: 'Web System Development',
      desc: 'High-performance website engineering, performance optimization, and custom App Router builds.',
      path: '/services/web-development',
      tag: 'Scale',
    },
  ];

  const trustHighlights = [
    {
      title: 'Real-Time Monitoring',
      desc: 'Our cybersecurity analysts bridge communications with our 24/7 outsourced security operations center (SOC).',
    },
    {
      title: 'Continuous Redundancy',
      desc: 'Daily, encrypted backups with automated diagnostic health runs to guarantee immediate rollback readiness.',
    },
    {
      title: 'Strategic Coordination',
      desc: 'Project managers act as technical architects, translating business requirements to engineering outcomes.',
    },
  ];

  return (
    <div className={styles.wrapper}>
      {/* Hero Section */}
      <section className={styles.hero} aria-label="KOOLIXA Brand Introduction">
        <div className="container">
          <div className={styles.heroGrid}>
            <div className={styles.heroContent}>
              <div className={styles.badge}>
                <span className={styles.badgePulse}></span>
                Cybersecurity & IT Operations Core
              </div>
              <h1 className={styles.title}>
                Resilient Digital Systems. <br />
                <span className={styles.cyanText}>Hardened Security.</span>
              </h1>
              <p className={styles.subtitle}>
                KOOLIXA engineers enterprise-grade IT infrastructure, manages round-the-clock help desks, and coordinates co-managed threat monitoring for growing businesses.
              </p>
              <div className={styles.ctaGroup}>
                <Link href="/contact" className={styles.primaryBtn}>
                  Schedule Vulnerability Audit
                </Link>
                <Link href="/services" className={styles.secondaryBtn}>
                  Explore Capabilities
                </Link>
              </div>
            </div>
            
            <div className={styles.heroGraphics}>
              <div className={`${styles.glowCard} shimmer-wrapper`}>
                <div className={styles.cardHeader}>
                  <div className={styles.terminalDots}>
                    <span></span><span></span><span></span>
                  </div>
                  <span className={styles.terminalTitle}>koolixa_ops_console.sh</span>
                </div>
                <div className={styles.terminalBody}>
                  <p className={styles.termGreen}>$ koolixa --status</p>
                  <p className={styles.termMuted}>&gt;&gt; Fetching active system health indexes...</p>
                  <p>&gt; Intrusion Prevention: <span className={styles.termGreen}>ACTIVE</span></p>
                  <p>&gt; SOC Sync Tunnel: <span className={styles.termGreen}>STABLE (Latency 12ms)</span></p>
                  <p>&gt; Help Desk Handlers: <span className={styles.termCyan}>14/14 Online</span></p>
                  <p>&gt; Automated Backup Syncs: <span className={styles.termGreen}>SYNCD (03:15 UTC)</span></p>
                  <p>&gt; Health Auditing: <span className={styles.termCyan}>0 Vulnerabilities Found</span></p>
                  <p className={styles.termPrompt}>$ _</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Live System Status Ticker */}
      <div className={styles.tickerSection} aria-hidden="true">
        <div className={styles.tickerWrapper}>
          <div className={styles.tickerTrack}>
            <span>⚡ INTRUSION DETECTION: MONITORING</span>
            <span>•</span>
            <span>✅ BACKUP INTEGRITY: 100% SECURE</span>
            <span>•</span>
            <span>⏱️ RESPONSE SLA: &lt;15 MINS</span>
            <span>•</span>
            <span>💻 DEV OPS: ACTIVE STABILIZATION</span>
            <span>•</span>
            <span>🛡️ SECURITY POLICIES: COMPLIANT</span>
            <span>•</span>
            {/* Repeat for seamless loop */}
            <span>⚡ INTRUSION DETECTION: MONITORING</span>
            <span>•</span>
            <span>✅ BACKUP INTEGRITY: 100% SECURE</span>
            <span>•</span>
            <span>⏱️ RESPONSE SLA: &lt;15 MINS</span>
            <span>•</span>
            <span>💻 DEV OPS: ACTIVE STABILIZATION</span>
            <span>•</span>
            <span>🛡️ SECURITY POLICIES: COMPLIANT</span>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <section className={styles.stats} aria-label="Key Performance Indicators">
        <div className="container">
          <div className={styles.statsGrid}>
            {stats.map((stat, idx) => (
              <div key={idx} className={styles.statCard}>
                <div className={styles.statValue}>{stat.value}</div>
                <h3 className={styles.statLabel}>{stat.label}</h3>
                <p className={styles.statDesc}>{stat.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities Overview Section */}
      <section className={styles.services} aria-label="Our Services Overview">
        <div className="container">
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>B2B Services Tailored for Growth</h2>
            <p className={styles.sectionSubtitle}>
              We translate our internal technical team structure into specialized operations to secure and support your business.
            </p>
          </div>

          <div className={styles.servicesGrid}>
            {servicesSummary.map((service, idx) => (
              <div key={idx} className={styles.serviceCard}>
                <div className={styles.cardTag}>{service.tag}</div>
                <h3 className={styles.cardTitle}>{service.title}</h3>
                <p className={styles.cardDesc}>{service.desc}</p>
                <Link href={service.path} className={styles.cardLink}>
                  Learn more
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
            ))}
          </div>
          
          <div className={styles.centerLink}>
            <Link href="/services" className={styles.outlineCta}>
              View All Capability Areas
            </Link>
          </div>
        </div>
      </section>

      {/* Trust & Architecture Highlight */}
      <section className={styles.trust} aria-label="Architecture & Operational Alignment">
        <div className="container">
          <div className={styles.trustGrid}>
            <div className={styles.trustContent}>
              <h2 className={styles.sectionTitle}>Designed for Uncompromised Stability</h2>
              <p className={styles.trustSubtitle}>
                IT systems and code environments represent the lifeblood of B2B enterprises. KOOLIXA aligns workflows with compliance frameworks to prevent risks.
              </p>
              <div className={styles.highlightsContainer}>
                {trustHighlights.map((hl, idx) => (
                  <div key={idx} className={styles.highlightItem}>
                    <h3 className={styles.highlightTitle}>{hl.title}</h3>
                    <p className={styles.highlightDesc}>{hl.desc}</p>
                  </div>
                ))}
              </div>
            </div>
            
            <div className={styles.trustGraphics}>
              <div className={styles.architectureMap}>
                <div className={styles.archNode}>
                  <span>Secure Core</span>
                  <div className={styles.nodeRipple}></div>
                </div>
                <div className={styles.archConnector}></div>
                <div className={styles.archNode}>
                  <span>Proactive SOC</span>
                </div>
                <div className={styles.archConnector}></div>
                <div className={styles.archNode}>
                  <span>High Uptime</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pre-footer Call to Action */}
      <section className={styles.ctaBanner} aria-label="Contact Action Call">
        <div className="container">
          <div className={styles.ctaBox}>
            <h2 className={styles.ctaTitle}>Ready to Harden Your Digital Infrastructure?</h2>
            <p className={styles.ctaDesc}>
              Schedule a comprehensive vulnerability assessment and IT architecture review. Speak directly with a KOOLIXA technical operations lead.
            </p>
            <Link href="/contact" className={styles.ctaButton}>
              Initiate Vulnerability Audit
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
