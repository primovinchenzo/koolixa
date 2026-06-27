import React from 'react';
import Link from 'next/link';
import styles from './page.module.css';

export default function Home() {
  const stats = [
    { value: '100%', label: 'Launch Success Rate', desc: 'Custom, high-speed business website deployments.' },
    { value: '99.9%', label: 'Uptime SLA Guarantee', desc: 'Continuous security monitoring and hosting updates.' },
    { value: '&lt; 14m', label: 'Support Response SLA', desc: 'First-touch resolution for website updates & fixes.' },
    { value: '95+', label: 'Lighthouse Page Speed', desc: 'Optimized core web vitals for maximum conversions.' },
  ];

  const servicesSummary = [
    {
      title: 'Custom Web Engineering & Launch',
      desc: 'We design and build premium, high-speed Next.js websites for businesses that don’t have a site or need a complete digital redesign.',
      path: '/services/web-development',
      tag: 'Build',
    },
    {
      title: 'Continuous Security Hardening',
      desc: 'We secure your website with firewalls, daily vulnerability scans, SSL configurations, and active protection against cyber threats.',
      path: '/services/cybersecurity',
      tag: 'Secure',
    },
    {
      title: 'Ongoing Maintenance & Support',
      desc: 'We manage site updates, domain records, business email setups, and rolling diagnostics so you never experience downtime.',
      path: '/services/managed-it',
      tag: 'Maintain',
    },
  ];

  const trustHighlights = [
    {
      title: 'Built to Convert',
      desc: 'We build modern, premium websites engineered for fast load speeds, clean typography, and mobile-first responsive layouts.',
    },
    {
      title: 'Active Security Guardrails',
      desc: 'Traditional web agencies build and abandon. KOOLIXA continuously monitors security logs and locks down domain access.',
    },
    {
      title: 'Seamless Technical Scoping',
      desc: 'Our project managers translate your business requirements into clean, optimized code structures with zero friction.',
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
                Full-Stack Web Presence Operations
              </div>
              <h1 className={styles.title}>
                We Build, Secure & <br />
                <span className={styles.cyanText}>Maintain Your Website.</span>
              </h1>
              <p className={styles.subtitle}>
                No website? Slow load times? Security concerns? KOOLIXA builds premium, high-speed websites for businesses and provides ongoing maintenance, backups, and cybersecurity threat protection.
              </p>
              <div className={styles.ctaGroup}>
                <Link href="/contact" className={styles.primaryBtn}>
                  Request Custom Web Proposal
                </Link>
                <Link href="/services" className={styles.secondaryBtn}>
                  Explore Our Capabilities
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
                  <p className={styles.termGreen}>$ koolixa --audit-status</p>
                  <p className={styles.termMuted}>&gt;&gt; Ingesting digital footprint audit logs...</p>
                  <p>&gt; Custom Web Engine: <span className={styles.termGreen}>ACTIVE (Next.js & TypeScript)</span></p>
                  <p>&gt; Lighthouse Optimization: <span className={styles.termGreen}>99% (Mobile-Responsive)</span></p>
                  <p>&gt; Web Firewall & WAF: <span className={styles.termGreen}>SECURE (0 Threats detected)</span></p>
                  <p>&gt; Backup Replication: <span className={styles.termGreen}>SYNCD (03:15 UTC)</span></p>
                  <p>&gt; Domain DNS & SSL: <span className={styles.termCyan}>Verified & Hardened</span></p>
                  <p>&gt; Maintenance Desk Status: <span className={styles.termCyan}>Uptime Monitoring Active</span></p>
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
            <span>💻 CUSTOM WEB ENGINEERING: ONLINE</span>
            <span>•</span>
            <span>🛡️ WEBSITE FIREWALL: ENFORCED</span>
            <span>•</span>
            <span>⚡ COMPILATION & BUILD: STABLE</span>
            <span>•</span>
            <span>✅ ROLLING DATA REPLICAS: SYNCD</span>
            <span>•</span>
            <span>⏱️ MAINTENANCE SLA: &lt;14 MINS</span>
            <span>•</span>
            {/* Repeat for seamless loop */}
            <span>💻 CUSTOM WEB ENGINEERING: ONLINE</span>
            <span>•</span>
            <span>🛡️ WEBSITE FIREWALL: ENFORCED</span>
            <span>•</span>
            <span>⚡ COMPILATION & BUILD: STABLE</span>
            <span>•</span>
            <span>✅ ROLLING DATA REPLICAS: SYNCD</span>
            <span>•</span>
            <span>⏱️ MAINTENANCE SLA: &lt;14 MINS</span>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <section className={styles.stats} aria-label="Key Performance Indicators">
        <div className="container">
          <div className={styles.statsGrid}>
            {stats.map((stat, idx) => (
              <div key={idx} className={styles.statCard}>
                <div className={styles.statValue} dangerouslySetInnerHTML={{ __html: stat.value }}></div>
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
            <h2 className={styles.sectionTitle}>Engineered for Business Growth</h2>
            <p className={styles.sectionSubtitle}>
              We provide a complete, lifecycle solution: we construct your digital presence, continuously secure it, and manage updates.
            </p>
          </div>

          <div className={styles.servicesGrid}>
            {servicesSummary.map((service, idx) => (
              <div key={idx} className={styles.serviceCard}>
                <div className={styles.cardTag}>{service.tag}</div>
                <h3 className={styles.cardTitle}>{service.title}</h3>
                <p className={styles.cardDesc}>{service.desc}</p>
                <Link href={service.path} className={styles.cardLink}>
                  View service details
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
              View Our Full Capabilities
            </Link>
          </div>
        </div>
      </section>

      {/* Trust & Architecture Highlight */}
      <section className={styles.trust} aria-label="Architecture & Operational Alignment">
        <div className="container">
          <div className={styles.trustGrid}>
            <div className={styles.trustContent}>
              <h2 className={styles.sectionTitle}>The Agency Model is Broken. We Fixed It.</h2>
              <p className={styles.trustSubtitle}>
                Standard design agencies build a site, hand over the files, and walk away. KOOLIXA acts as your dedicated web engineering and security operations desk, ensuring your platform is always updated and secure.
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
                  <span>1. Premium Design & Build</span>
                  <div className={styles.nodeRipple}></div>
                </div>
                <div className={styles.archConnector}></div>
                <div className={styles.archNode}>
                  <span>2. Core Firewall & Security Hardening</span>
                </div>
                <div className={styles.archConnector}></div>
                <div className={styles.archNode}>
                  <span>3. Ongoing Uptime Maintenance</span>
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
            <h2 className={styles.ctaTitle}>Ready to Establish a Premium Web Presence?</h2>
            <p className={styles.ctaDesc}>
              Whether you need a custom-built website launched from scratch or want your existing platform hardened, optimized, and maintained, our engineering leads are ready.
            </p>
            <Link href="/contact" className={styles.ctaButton}>
              Request Custom Web Proposal
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
