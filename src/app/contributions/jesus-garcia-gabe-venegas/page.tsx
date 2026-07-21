'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './marketing.module.css';

export default function MarketingContributionPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterSubmitted, setNewsletterSubmitted] = useState(false);

  const faqs = [
    {
      q: 'How long does a website take to build?',
      a: 'Most projects are completed within 2-3 weeks, depending on scope and client feedback.',
    },
    {
      q: 'Do you redesign existing websites?',
      a: 'Yes. We can modernize existing websites while improving security, performance, and usability.',
    },
    {
      q: 'Do you provide ongoing maintenance?',
      a: 'Absolutely. We offer continuous updates, monitoring, backups, and technical support after launch.',
    },
    {
      q: 'Can you help improve website security?',
      a: 'Yes. Every website is developed using security best practices and can include ongoing monitoring and maintenance.',
    },
    {
      q: 'What businesses do you work with?',
      a: 'We support startups, nonprofits, small businesses, and growing organizations across a variety of industries.',
    },
  ];

  const testimonials = [
    {
      name: 'Sarah M.',
      stars: '★★★★★',
      quote: '“KOOLIXA transformed our outdated website into a modern, secure platform that better reflects our business.”',
    },
    {
      name: 'David R.',
      stars: '★★★★★',
      quote: '“Their ongoing maintenance lets us focus on our customers while they handle everything behind the scenes.”',
    },
    {
      name: 'Emily T.',
      stars: '★★★★★',
      quote: '“Fast support, excellent communication, and a smooth launch from start to finish.”',
    },
  ];

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsletterEmail.trim()) {
      setNewsletterSubmitted(true);
      setNewsletterEmail('');
    }
  };

  return (
    <div className={styles.container}>
      <div className="container">
        {/* Breadcrumb */}
        <div className={styles.breadcrumb}>
          <Link href="/contributions">Contributions</Link>
          <span>/</span>
          <span className={styles.current}>Jesus Garcia & Gabe Venegas</span>
        </div>

        {/* Hero Area */}
        <section className={styles.heroSection}>
          <span className={styles.authorBadge}>Module Presenters: Jesus Garcia & Gabe Venegas</span>
          <h1 className={styles.title}>Marketing, Testimonials & Site Location</h1>
          <p className={styles.subtitle}>
            Building market presence and customer confidence through verified client testimonials, clear FAQ reference guides, official physical headquarters establishment, and newsletter outreach.
          </p>
        </section>

        {/* 1. Physical Headquarters Location */}
        <section className={styles.section}>
          <div className={styles.locationCard}>
            <div className={styles.locationHeader}>
              <span className={styles.cardBadge}>Corporate Headquarters</span>
              <h2>Physical Site Location</h2>
            </div>

            <div className={styles.locationGrid}>
              <div className={styles.locationInfo}>
                <p className={styles.addressLabel}>Official Business Address:</p>
                <div className={styles.addressBox}>
                  <strong>6006 N Mesa St., Suite 210</strong>
                  <span>El Paso, TX 79912</span>
                </div>
                <p className={styles.locationDesc}>
                  Selected as KOOLIXA’s physical headquarters, this facility provides operational office infrastructure for executive management, technical support, and client discovery meetings in El Paso.
                </p>
              </div>

              <div className={styles.buildingImageBox}>
                <Image
                  src="/images/hq-building.png"
                  alt="KOOLIXA Headquarters Building - 6006 N Mesa St, El Paso, TX"
                  width={500}
                  height={320}
                  className={styles.buildingImg}
                />
                <span className={styles.imgCaption}>KOOLIXA Headquarters Office Tower | 6006 N Mesa St., Suite 210</span>
              </div>
            </div>
          </div>
        </section>

        {/* 2. Frequently Asked Questions (FAQ) */}
        <section className={styles.section}>
          <div className={styles.faqCard}>
            <span className={styles.cardBadge}>Customer Reference</span>
            <h2>Frequently Asked Questions</h2>
            <p className={styles.faqSub}>
              We provide clear answers so prospective clients have a reference for common timeline, maintenance, and security questions.
            </p>

            <div className={styles.faqAccordion}>
              {faqs.map((faq, idx) => (
                <div
                  key={idx}
                  className={`${styles.faqItem} ${openFaq === idx ? styles.activeFaq : ''}`}
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                >
                  <div className={styles.faqQuestion}>
                    <h3>{faq.q}</h3>
                    <span className={styles.faqToggle}>{openFaq === idx ? '−' : '+'}</span>
                  </div>
                  {openFaq === idx && (
                    <div className={styles.faqAnswer}>
                      <p>{faq.a}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 3. Client Testimonials */}
        <section className={styles.section}>
          <div className={styles.testimonialsCard}>
            <span className={styles.cardBadge}>Social Proof & Reviews</span>
            <h2>Client Testimonials</h2>
            <p className={styles.testSub}>Feedback from business partners who trust KOOLIXA to build and maintain their web platform.</p>

            <div className={styles.reviewsGrid}>
              {testimonials.map((t, idx) => (
                <div key={idx} className={styles.reviewBox}>
                  <div className={styles.stars}>{t.stars}</div>
                  <p className={styles.quote}>{t.quote}</p>
                  <span className={styles.clientName}>{t.name}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 4. Newsletter Subscription Section */}
        <section className={styles.section}>
          <div className={styles.newsletterCard}>
            <div className={styles.newsletterContent}>
              <span className={styles.newsBadge}>Stay Connected</span>
              <h2>KOOLIXA Newsletter</h2>
              <p>
                Subscribe to receive web optimization insights, security patches alerts, and technology updates directly to your inbox.
              </p>

              {newsletterSubmitted ? (
                <div className={styles.successMsg}>
                  ✓ Thank you for subscribing to KOOLIXA Insights!
                </div>
              ) : (
                <form onSubmit={handleNewsletterSubmit} className={styles.newsForm}>
                  <input
                    type="email"
                    placeholder="Enter your business email"
                    value={newsletterEmail}
                    onChange={(e) => setNewsletterEmail(e.target.value)}
                    required
                    className={styles.newsInput}
                  />
                  <button type="submit" className={styles.newsBtn}>
                    Subscribe
                  </button>
                </form>
              )}
            </div>
          </div>
        </section>

        {/* Navigation */}
        <section className={styles.section}>
          <div className={styles.nextStepsCard}>
            <h2>Looking to Partner with KOOLIXA?</h2>
            <p>Reach out to our marketing and business operations leads to discuss custom web engineering or ongoing maintenance.</p>
            <div className={styles.btnRow}>
              <Link href="/contact" className={styles.contactBtn}>
                Get in Touch
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
