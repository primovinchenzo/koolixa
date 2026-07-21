import React from 'react';
import Link from 'next/link';
import styles from './Footer.module.css';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.footerGrid}`}>
        {/* Brand Info */}
        <div className={styles.brandCol}>
          <Link href="/" className={styles.logo}>
            KOOLI<span className={styles.accent}>XA</span>
          </Link>
          <p className={styles.description}>
            Enterprise-grade IT operations, proactive cybersecurity, and robust digital systems. Built for modern businesses that value stability and growth.
          </p>
          {/* Heartbeat status indicator */}
          <div className={styles.statusBox}>
            <span className="uptime-pulse"></span>
            <span className={styles.statusText}>Systems Operational (99.99% SLA)</span>
          </div>
        </div>

        {/* Services Link Grid */}
        <div className={styles.linksCol}>
          <h4 className={styles.colTitle}>Services</h4>
          <ul className={styles.linksList}>
            <li><Link href="/services/managed-it">Managed IT Support</Link></li>
            <li><Link href="/services/cybersecurity">Cybersecurity Solutions</Link></li>
            <li><Link href="/services/web-development">Web Development</Link></li>
            <li><Link href="/services/project-delivery">Project Delivery</Link></li>
            <li><Link href="/services/backup-stability">Backup & Recovery</Link></li>
          </ul>
        </div>

        {/* Company Links */}
        <div className={styles.linksCol}>
          <h4 className={styles.colTitle}>Company</h4>
          <ul className={styles.linksList}>
            <li><Link href="/about">About Us</Link></li>
            <li><Link href="/why-koolixa">Why Koolixa</Link></li>
            <li><Link href="/trust">Security & Trust</Link></li>
            <li><Link href="/careers">Join the Team</Link></li>
            <li><Link href="/contributions">Project Contributions</Link></li>
            <li><Link href="/insights">Insights & News</Link></li>
          </ul>
        </div>

        {/* Contact info / trust badges */}
        <div className={styles.contactCol}>
          <h4 className={styles.colTitle}>Contact</h4>
          <p className={styles.contactItem}>
            <strong>Inquiries:</strong>{' '}
            <a href="mailto:solutions@koolixa.com" className={styles.contactLink}>
              solutions@koolixa.com
            </a>
          </p>
          <p className={styles.contactItem}>
            <strong>Urgent Operations:</strong>{' '}
            <a href="tel:+18005550190" className={styles.contactLink}>
              +1 (800) 555-0190
            </a>
          </p>
          <p className={styles.contactItem}>
            <strong>Office:</strong> 6006 N Mesa St., Suite 210, El Paso, TX
          </p>
        </div>
      </div>

      {/* Footer Bottom Bar */}
      <div className={styles.bottomBar}>
        <div className={`container ${styles.bottomBarContainer}`}>
          <p className={styles.copyright}>
            &copy; {currentYear} KOOLIXA LLC. All rights reserved.
          </p>
          <div className={styles.legalLinks}>
            <Link href="/trust#privacy">Privacy Policy</Link>
            <Link href="/trust#terms">Terms of Service</Link>
            <Link href="/trust#compliance">Compliance Frameworks</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
