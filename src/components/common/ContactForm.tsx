'use client';

import React, { useState } from 'react';
import { useForm } from '@formspree/react';
import styles from './ContactForm.module.css';

export default function ContactForm() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [clientError, setClientError] = useState('');

  // Load Formspree ID from public env variable or use config fallback
  const formspreeFormId = process.env.NEXT_PUBLIC_FORMSPREE_FORM_ID || 'xanyformid';
  const [state, handleSubmit] = useForm(formspreeFormId);

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setClientError('');

    // Client-side email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.trim()) {
      setClientError('Business Email is required.');
      return;
    }
    
    if (!emailRegex.test(email.trim())) {
      setClientError('Please enter a valid email address.');
      return;
    }

    // Pass submission to Formspree hook
    await handleSubmit(e);
  };

  if (state.succeeded) {
    return (
      <div className={styles.successCard} role="status">
        <div className={styles.successIcon}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="20 6 9 17 4 12"></polyline>
          </svg>
        </div>
        <h3 className={styles.successTitle}>Request Submitted</h3>
        <p className={styles.successDesc}>
          Your inquiry has been successfully dispatched via Formspree. Our team will review and follow up with you.
        </p>
        <button
          onClick={() => {
            setEmail('');
            setMessage('');
            window.location.reload(); // Quick reset of Formspree hook state
          }}
          className={styles.resetBtn}
        >
          Send Another Request
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleFormSubmit} className={styles.form} noValidate>
      {/* Formspree Server Validation Errors or Submission Failures */}
      {state.errors && (
        <div className={styles.errorAlert} role="alert">
          <span>Failed to submit. Please check your inputs or try again.</span>
        </div>
      )}

      {/* Email Field */}
      <div className={styles.formGroup}>
        <label htmlFor="email" className={styles.label}>
          Business Email <span className={styles.required}>*</span>
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            if (clientError) setClientError('');
          }}
          placeholder="operations@yourcompany.com"
          className={`${styles.input} ${clientError ? styles.inputError : ''}`}
          disabled={state.submitting}
          aria-required="true"
          aria-invalid={!!clientError}
          aria-describedby={clientError ? "email-error" : undefined}
        />
        {clientError && (
          <span id="email-error" className={styles.errorMessage} role="alert">
            {clientError}
          </span>
        )}
      </div>

      {/* Message Field (Optional) */}
      <div className={styles.formGroup}>
        <label htmlFor="message" className={styles.label}>
          Requirements / Details <span className={styles.optional}>(Optional)</span>
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Briefly describe your systems challenge or project scope..."
          className={styles.textarea}
          disabled={state.submitting}
        />
      </div>

      <button
        type="submit"
        className={styles.submitBtn}
        disabled={state.submitting}
      >
        {state.submitting ? (
          <div className={styles.spinner}>
            <span className={styles.bounce}></span>
            <span className={styles.bounce}></span>
            <span className={styles.bounce}></span>
          </div>
        ) : (
          'Send Consultation Request'
        )}
      </button>
    </form>
  );
}
