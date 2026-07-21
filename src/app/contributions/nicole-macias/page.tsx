import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import styles from './nicole.module.css';

export const metadata: Metadata = {
  title: 'Employee Training Plan | Nicole Macias - Class Presentation',
  description: 'Technical module presentation on How to Create a Successful Training Plan for Employees by Nicole Macias.',
};

export default function NicoleMaciasPage() {
  const steps = [
    {
      step: '01',
      title: 'Determine Why Training is Needed',
      points: [
        'Figure out what the team might be struggling with or what new things they need to learn.',
        'The problem needs to be found first before designing any curriculum.',
      ],
      tag: 'Problem Identification',
    },
    {
      step: '02',
      title: 'Decide What Success Looks Like',
      points: [
        'The goal should be something specific instead of vague.',
        'Example Goal: "Be able to handle a customer return in under 3 minutes using our new software."',
        'Apply the SMART Framework: Specific, Measurable, Achievable, Relevant, Time-bound.',
      ],
      tag: 'SMART Framework',
    },
    {
      step: '03',
      title: 'Break Down Training into Simple Pieces',
      points: [
        'Break down content so it won’t be overwhelming for employees.',
        'Use different delivery formats: e-learning modules, structured classroom settings, hands-on practice, and/or peer monitoring.',
        'Use a timeline: a clear schedule or checklist breaking down modules day by day or week by week.',
      ],
      tag: 'Modular Delivery',
    },
    {
      step: '04',
      title: 'Gather Necessary Resources & Tools',
      points: [
        'Gather everything needed to make the training happen successfully.',
        'Give employees a break from regular tasks so they can focus completely.',
        'Provision Tools: workbooks, software logins, and a quiet room to work in.',
        'Cover the cost of any classes, external trainers, or learning programs.',
      ],
      tag: 'Resource Provisioning',
    },
    {
      step: '05',
      title: 'Prove Training Worked & Improve It',
      points: [
        'Prove the training worked and/or improve it for the next time.',
        'Evaluation Methods: Give a quick quiz, watch them do the task live, or check performance weeks later.',
        'Get feedback by asking employees what they thought of the training session.',
      ],
      tag: 'Evaluation & Feedback',
    },
  ];

  return (
    <div className={styles.container}>
      <div className="container">
        {/* Breadcrumb */}
        <div className={styles.breadcrumb}>
          <Link href="/contributions">Contributions</Link>
          <span>/</span>
          <span className={styles.current}>Nicole Macias</span>
        </div>

        {/* Hero Area */}
        <section className={styles.heroSection}>
          <span className={styles.authorBadge}>Module Presenter: Nicole Macias</span>
          <h1 className={styles.title}>How to Create a Successful Training Plan for Employees</h1>
          <p className={styles.subtitle}>
            What is needed for a training plan in a business? Discover the 5-step framework for diagnosing team needs, setting SMART goals, delivering modular learning, resourcing tools, and measuring training ROI.
          </p>
        </section>

        {/* SMART Goal Callout Banner */}
        <section className={styles.section}>
          <div className={styles.smartCard}>
            <div className={styles.smartHeader}>
              <span className={styles.smartBadge}>Core Methodology</span>
              <h2>The SMART Goal Framework</h2>
            </div>
            <p className={styles.smartExample}>
              <strong>Concrete Example:</strong> “Be able to handle a customer return in under 3 minutes using our new software.”
            </p>
            <div className={styles.smartGrid}>
              <div className={styles.smartItem}>
                <strong>S</strong>pecific
              </div>
              <div className={styles.smartItem}>
                <strong>M</strong>easurable
              </div>
              <div className={styles.smartItem}>
                <strong>A</strong>chievable
              </div>
              <div className={styles.smartItem}>
                <strong>R</strong>elevant
              </div>
              <div className={styles.smartItem}>
                <strong>T</strong>ime-bound
              </div>
            </div>
          </div>
        </section>

        {/* 5-Step Process Breakdown */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>The 5-Step Training Plan Framework</h2>
          <div className={styles.stepsList}>
            {steps.map((item) => (
              <div key={item.step} className={styles.stepCard}>
                <div className={styles.stepHeader}>
                  <span className={styles.stepNum}>Step {item.step}</span>
                  <span className={styles.stepTag}>{item.tag}</span>
                </div>
                <h3 className={styles.stepTitle}>{item.title}</h3>
                <ul className={styles.pointList}>
                  {item.points.map((pt, idx) => (
                    <li key={idx}>
                      <svg className={styles.checkIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                      {pt}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Delivery Formats & Tools Matrix */}
        <section className={styles.section}>
          <div className={styles.matrixCard}>
            <h2>Training Formats & Resource Checklist</h2>
            <div className={styles.twoColGrid}>
              <div className={styles.matrixCol}>
                <h3>Delivery Formats</h3>
                <ul>
                  <li>e-Learning Modules & Self-Paced Video</li>
                  <li>Structured Classroom Settings</li>
                  <li>Hands-On Interactive Practice</li>
                  <li>Peer Mentoring & Job Shadowing</li>
                  <li>Day-by-Day or Week-by-Week Checklist Schedule</li>
                </ul>
              </div>

              <div className={styles.matrixCol}>
                <h3>Required Tools & Resources</h3>
                <ul>
                  <li>Dedicated workbooks & technical reference manuals</li>
                  <li>Software logins & sandbox environment credentials</li>
                  <li>Quiet dedicated room for uninterrupted focus</li>
                  <li>Dedicated break from regular daily tasks</li>
                  <li>Funding for external classes, trainers, or certifications</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Next Steps / Navigation */}
        <section className={styles.section}>
          <div className={styles.nextStepsCard}>
            <h2>Need a Custom Employee Training Plan Template?</h2>
            <p>Connect with our training and operations desk to customize learning modules, checklists, and evaluation quizzes for your organization.</p>
            <div className={styles.btnRow}>
              <Link href="/contact" className={styles.contactBtn}>
                Request Training Template
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
