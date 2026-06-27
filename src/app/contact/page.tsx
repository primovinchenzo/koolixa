import React from 'react';
import { Metadata } from 'next';
import ContactForm from '@/components/common/ContactForm';
import styles from './contact.module.css';

export const metadata: Metadata = {
  title: 'Book a Consultation | Contact KOOLIXA Operations',
  description: 'Submit a secure B2B project scope inquiry or request a systems audit. Speak directly with a KOOLIXA technician.',
};

export default function ContactPage() {
  return (
    <div className={styles.container}>
      <div className="container">
        <div className={styles.contactGrid}>
          {/* Information Column */}
          <div className={styles.infoCol}>
            <span className={styles.badge}>Inbound Communications</span>
            <h1 className={styles.title}>Initiate Technical Dialogue</h1>
            <p className={styles.subtitle}>
              Submit your systems architecture questions, help desk seat requirements, or cybersecurity audit needs.
            </p>

            <div className={styles.slaDetails}>
              <h3>Operations SLA Guarantees</h3>
              <ul className={styles.slaList}>
                <li>
                  <strong>&lt; 2 Hours</strong>
                  <span>Email inquiry first-touch assessment response.</span>
                </li>
                <li>
                  <strong>&lt; 14 Minutes</strong>
                  <span>Active contract help desk ticket response.</span>
                </li>
                <li>
                  <strong>24/7 Hotline</strong>
                  <span>Available to active co-managed security clients.</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Form Column */}
          <div className={styles.formCol}>
            <div className={styles.formWrapper}>
              <h2 className={styles.formTitle}>Secure Intake Portal</h2>
              <p className={styles.formSubtitle}>
                Please fill out all required fields to register your inquiry.
              </p>
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
