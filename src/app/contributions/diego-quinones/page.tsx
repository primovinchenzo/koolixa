import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import styles from './diego.module.css';

export const metadata: Metadata = {
  title: 'Staffing & Role Structure | Diego Quinones - Class Presentation',
  description: 'Technical module presentation on Company Staffing Structure, Salary Bands, Vetting Criteria, and Leadership Roles by Diego Quinones.',
};

export default function DiegoQuinonesPage() {
  const roles = [
    {
      title: 'Web Developers',
      salary: '$40,000 – $60,000 / year',
      badge: 'Engineering Core',
      desc: "Web Developers build and create our company's website to display our services, pricing, mission statements, and company information. They are also responsible for updating and maintaining the webpage. At our size, we need at least one solid, competent developer.",
      vetting: "Communication skills are top priority. Candidates often get nervous coding live in front of interviewers. We shine light on their skills by asking realistic scenarios: 'Describe your process for debugging an application issue that pops up often during web development.' Candidates should possess a repertoire of 2–3 solid past projects.",
    },
    {
      title: 'IT Support Technicians',
      salary: '$20.00 / hour',
      badge: 'First-Line Support',
      desc: "IT Support Technicians act as the first point of contact for common client issues like password resets and creating new employee profiles. They manage ticket documentation and escalate issues up the ladder when needed. This role is commonly occupied by recent graduates and young professionals.",
      vetting: "Candidates must demonstrate an advanced understanding of our software and technology. Essential skills include Linux CLI commands (creating groups, managing users, reading files, and following file hierarchy) and strong communication skills as first responders.",
    },
    {
      title: 'Cybersecurity Analysts',
      salary: '$70,000 – $80,000 / year',
      badge: 'Threat Mitigation',
      desc: "Cybersecurity Analysts analyze data for potential vulnerabilities, manage on-site incident responses, enforce internal company security policies, and communicate directly with our outsourced 24/7 SOC vendor team.",
      vetting: "Candidates require a solid backlog of experience, including hands-on network traffic analysis, cloud security, and the ability to translate complex technical terms to non-technical stakeholders.",
    },
    {
      title: 'Project & Operations Managers',
      salary: '$60,000 – $100,000 / year',
      badge: 'Management & Delivery',
      desc: "Project Managers (PMs) bridge the gap between engineering teams and clients, ensuring on-time project completion and mutual alignment. Operations Managers handle hiring, payroll, budget management, and tool selection (or co-managed by executive leadership).",
      vetting: "Requires elevated organizational skills, strong time management, planning capabilities, and the ability to hold difficult conversations and resolve conflicts effectively.",
    },
    {
      title: 'Executive Leadership (CEO & CTO)',
      salary: 'Varied Executive Compensation',
      badge: 'Strategic Direction',
      desc: "The CEO sets overall company strategy, major business decisions, client representation, and culture. The CTO oversees technical aspects, leading Cybersecurity Analysts, delegating engineering time, and ensuring system security and reliability align with business goals.",
      vetting: "Requires proven leadership, strategic planning, decision-making, technical mastery, and problem-solving skills.",
    },
  ];

  return (
    <div className={styles.container}>
      <div className="container">
        {/* Breadcrumb */}
        <div className={styles.breadcrumb}>
          <Link href="/contributions">Contributions</Link>
          <span>/</span>
          <span className={styles.current}>Diego Quinones</span>
        </div>

        {/* Hero Area */}
        <section className={styles.heroSection}>
          <span className={styles.authorBadge}>Module Presenter: Diego Quinones</span>
          <h1 className={styles.title}>Company Staffing Structure & Roles</h1>
          <p className={styles.subtitle}>
            A comprehensive breakdown of team roles, compensation bands, candidate vetting strategies, technical skill expectations, and organizational leadership structure for KOOLIXA.
          </p>
        </section>

        {/* Roles Breakdown */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Role Breakdown & Vetting Framework</h2>
          <div className={styles.rolesList}>
            {roles.map((item, idx) => (
              <div key={idx} className={styles.roleCard}>
                <div className={styles.roleHeader}>
                  <div>
                    <span className={styles.roleTitle}>{item.title}</span>
                    <span className={styles.roleSalary}>{item.salary}</span>
                  </div>
                  <span className={styles.roleBadge}>{item.badge}</span>
                </div>

                <p className={styles.roleDesc}>{item.desc}</p>

                <div className={styles.vettingBox}>
                  <strong>Candidate Vetting & Skill Requirements:</strong>
                  <p>{item.vetting}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Navigation */}
        <section className={styles.section}>
          <div className={styles.nextStepsCard}>
            <h2>Looking to Join the Team?</h2>
            <p>Explore active career openings or reach out to our HR and staffing operations desk.</p>
            <div className={styles.btnRow}>
              <Link href="/careers" className={styles.contactBtn}>
                View Active Openings
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
