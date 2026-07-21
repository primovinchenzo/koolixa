import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import styles from './erika.module.css';

export const metadata: Metadata = {
  title: 'Licensing and Permits | Erika Williams - Class Presentation',
  description: 'Technical module presentation on Business Licensing, Texas State Filings, El Paso Zoning, and Regulatory Permits by Erika Williams.',
};

export default function ErikaWilliamsPage() {
  return (
    <div className={styles.container}>
      <div className="container">
        {/* Breadcrumb */}
        <div className={styles.breadcrumb}>
          <Link href="/contributions">Contributions</Link>
          <span>/</span>
          <span className={styles.current}>Erika Williams</span>
        </div>

        {/* Hero Area */}
        <section className={styles.heroSection}>
          <span className={styles.authorBadge}>Module Presenter: Erika Williams</span>
          <h1 className={styles.title}>Licensing and Permits</h1>
          <p className={styles.subtitle}>
            A comprehensive guide to legal business structures, Texas state filings, local El Paso zoning compliance, cybersecurity certifications, data privacy frameworks, and federal employment tax obligations.
          </p>
        </section>

        {/* 1. Business Registration */}
        <section className={styles.section}>
          <div className={styles.sectionCard}>
            <div className={styles.sectionHeader}>
              <span className={styles.numBadge}>01</span>
              <h2>Business Registration</h2>
            </div>

            <div className={styles.contentBlock}>
              <h3>LLC (Limited Liability Company)</h3>
              <p>
                An LLC, or Limited Liability Company, is a business structure that combines the benefits of a corporation and a partnership. It provides personal asset protection to its owners, shielding them from personal liability for business debts and claims. LLCs are popular due to their flexibility in management.
              </p>
              <div className={styles.feeBadgeRow}>
                <span className={styles.feeTag}>Formation Cost: $50 – $1,000</span>
                <span className={styles.valTag}>Operating LLC Value: Thousands to Millions (based on revenue & assets)</span>
              </div>
            </div>

            <div className={styles.subBlock}>
              <h3>Register LLC Online | State Filings (DBA Registration)</h3>
              <p>
                Register your business with the Texas Secretary of State if you are operating under a name different from your legal name (DBA registration). The filing fee for this is <strong>$300.00</strong>.
              </p>
              <a
                href="https://www.sos.state.tx.us/corp/forms/205_boc.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.docLink}
              >
                <svg className={styles.linkIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                  <polyline points="14 2 14 8 20 8"></polyline>
                  <line x1="16" y1="13" x2="8" y2="13"></line>
                  <line x1="16" y1="17" x2="8" y2="17"></line>
                </svg>
                Texas Secretary of State Form 205 (DBA Registration PDF)
              </a>
            </div>

            <div className={styles.subBlock}>
              <h3>Apply for an Employer Identification Number (EIN)</h3>
              <p>
                Apply for an Employer Identification Number (EIN) from the IRS if you have employees or need a separate tax ID. There is <strong>no fee</strong> for this service.
              </p>
              <a
                href="https://sa.www4.irs.gov/applyein/"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.docLink}
              >
                <svg className={styles.linkIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                  <polyline points="15 3 21 3 21 9"></polyline>
                  <line x1="10" y1="14" x2="21" y2="3"></line>
                </svg>
                Apply for an Employer Identification Number (EIN) Online - IRS Portal
              </a>
            </div>
          </div>
        </section>

        {/* 2. Sales Tax Permit */}
        <section className={styles.section}>
          <div className={styles.sectionCard}>
            <div className={styles.sectionHeader}>
              <span className={styles.numBadge}>02</span>
              <h2>Sales Tax Permit</h2>
            </div>
            <p>
              In Texas, there is no general business license, but you must register for a sales tax permit with the Texas Comptroller if you sell taxable goods or services. If you provide IT services, you may still need to collect and remit sales tax if your services are taxable. There is <strong>no fee</strong> for this service.
            </p>
            <a
              href="https://security.app.cpa.state.tx.us/public/login"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.docLink}
            >
              <svg className={styles.linkIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                <polyline points="15 3 21 3 21 9"></polyline>
                <line x1="10" y1="14" x2="21" y2="3"></line>
              </svg>
              Texas Comptroller Public Login & Sales Tax Permit Application
            </a>
          </div>
        </section>

        {/* 3. Zoning and Location Compliance */}
        <section className={styles.section}>
          <div className={styles.sectionCard}>
            <div className={styles.sectionHeader}>
              <span className={styles.numBadge}>03</span>
              <h2>Zoning and Location Compliance</h2>
            </div>
            <p>
              Ensure your business location complies with zoning laws. Some areas restrict certain types of businesses in specific zones.
            </p>

            <div className={styles.linksGrid}>
              <a
                href="https://www.elpasotexas.gov/assets/Documents/CoEP/Planning-and-Inspections/Applications/Zoning-Applications/PZVE_Fillable_2019d-v2.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.linkCard}
              >
                <span className={styles.linkCardTitle}>City of El Paso Zoning Application</span>
                <span className={styles.linkCardSub}>Official Planning & Inspections Fillable Form (PDF)</span>
              </a>

              <a
                href="https://www.zoneomics.com/code/el-paso-TX/chapter_5"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.linkCard}
              >
                <span className={styles.linkCardTitle}>El Paso City Code - Chapter 5</span>
                <span className={styles.linkCardSub}>Zoneomics Code & Zoning Compliance Guide</span>
              </a>
            </div>
          </div>
        </section>

        {/* 4. Professional or Industry-Specific Licenses */}
        <section className={styles.section}>
          <div className={styles.sectionCard}>
            <div className={styles.sectionHeader}>
              <span className={styles.numBadge}>04</span>
              <h2>Professional & Industry-Specific Licenses</h2>
            </div>
            <p>
              If your IT business involves specific regulated activities, you may need additional permits and security frameworks.
            </p>

            {/* Sub-item: Cybersecurity */}
            <div className={styles.subBlock}>
              <h3>Cybersecurity Certifications</h3>
              <p>Verify industry certification requirements and accredited degree parameters for security staff.</p>
              <a
                href="https://www.top10.com/online-degrees/cyber-security?utm_source=google&kw=cyber%20security%20certifications&sk=cyber%20security%20certifications&c=794745061130&t=search&p=&m=e&dev=c&network=g&campaignid=21033303096&devmod=&mobval=0&groupid=195379547954&targetid=kwd-11795120682&interest=&physical=9028693&feedid=&eid=&a=249666&topic=&ctype=&camtype=ps&ts=&niche=&exp=&pq=&dyn=&gad_source=1&gad_campaignid=21033303096&gclid=EAIaIQobChMIutvshNKtlQMVbCvUAR3Jxw-SEAAYBCAAEgIvqfD_BwE"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.docLink}
              >
                Cybersecurity Certifications & Accreditation Resource Guide
              </a>
            </div>

            {/* Sub-item: Data Privacy */}
            <div className={styles.subBlock}>
              <h3>Data Privacy Compliance</h3>
              <p>
                Data privacy compliance may require adherence to legal frameworks. To apply for a data privacy permit, organizations must register their Data Processing Systems (DPS) and appoint a Data Protection Officer (DPO) with the National Privacy Commission, providing detailed organizational, system, and compliance information.
              </p>
              <a
                href="https://www.dataprivacyframework.gov/program-articles/Enforcement-of-the-Data-Privacy-Framework-(DPF)-Program"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.docLink}
              >
                Data Privacy Framework (DPF) Program Enforcement Guidelines
              </a>
            </div>

            {/* Sub-item: Telecom */}
            <div className={styles.subBlock}>
              <h3>Telecom or Internet Service Regulations</h3>
              <div className={styles.linkList}>
                <a href="https://www.ftc.gov/business-guidance/privacy-security" target="_blank" rel="noopener noreferrer">
                  • FTC Business Guidance: Privacy & Security
                </a>
                <a href="https://www.fcc.gov/licensing" target="_blank" rel="noopener noreferrer">
                  • FCC Universal Licensing System (ULS)
                </a>
                <a href="https://www.fcc.gov/licensing-databases/fees" target="_blank" rel="noopener noreferrer">
                  • FCC Licensing Databases & Filing Fees
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* 5. Federal Considerations */}
        <section className={styles.section}>
          <div className={styles.sectionCard}>
            <div className={styles.sectionHeader}>
              <span className={styles.numBadge}>05</span>
              <h2>Federal Considerations</h2>
            </div>
            <p>
              If you hire employees, you must register federal employment taxes (FICA, FUTA) and maintain proper payroll records.
            </p>
            <a
              href="https://www.irs.gov/businesses/small-businesses-self-employed/employment-taxes"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.docLink}
            >
              <svg className={styles.linkIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                <polyline points="15 3 21 3 21 9"></polyline>
                <line x1="10" y1="14" x2="21" y2="3"></line>
              </svg>
              Employment Taxes | Internal Revenue Service (IRS Official Portal)
            </a>
          </div>
        </section>

        {/* Next Steps / Back Button */}
        <section className={styles.section}>
          <div className={styles.nextStepsCard}>
            <h2>Need Compliance Guidance?</h2>
            <p>Reach out to our operations and compliance team for assistance with technical licenses, data privacy frameworks, and zoning checks.</p>
            <div className={styles.btnRow}>
              <Link href="/contact" className={styles.contactBtn}>
                Contact Operations Desk
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
