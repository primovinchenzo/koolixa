'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import ThemeToggle from '../common/ThemeToggle';
import styles from './Header.module.css';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  const navLinks = [
    { name: 'Services', path: '/services' },
    { name: 'Why Koolixa', path: '/why-koolixa' },
    { name: 'Trust', path: '/trust' },
    { name: 'About', path: '/about' },
    { name: 'Careers', path: '/careers' },
  ];

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
      <div className={`container ${styles.headerContainer}`}>
        {/* Logo */}
        <Link href="/" className={styles.logo} aria-label="KOOLIXA Home">
          KOOLI<span className={styles.accent}>XA</span>
        </Link>

        {/* Desktop Nav */}
        <nav className={styles.desktopNav} aria-label="Main Navigation">
          {navLinks.map((link) => {
            const isActive = pathname.startsWith(link.path);
            return (
              <Link
                key={link.path}
                href={link.path}
                className={`${styles.navLink} ${isActive ? styles.active : ''}`}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>

        {/* Right Actions */}
        <div className={styles.actions}>
          <ThemeToggle />
          <Link href="/contact" className={styles.ctaButton}>
            Request Audit
          </Link>
          
          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`${styles.mobileMenuToggle} ${isOpen ? styles.menuActive : ''}`}
            aria-expanded={isOpen}
            aria-controls="mobile-nav"
            aria-label="Toggle navigation menu"
          >
            <span className={styles.burgerLine}></span>
            <span className={styles.burgerLine}></span>
            <span className={styles.burgerLine}></span>
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <div
        id="mobile-nav"
        className={`${styles.mobileNavContainer} ${isOpen ? styles.mobileOpen : ''}`}
        aria-hidden={!isOpen}
      >
        <nav className={styles.mobileNav} aria-label="Mobile Navigation">
          {navLinks.map((link) => {
            const isActive = pathname.startsWith(link.path);
            return (
              <Link
                key={link.path}
                href={link.path}
                className={`${styles.mobileNavLink} ${isActive ? styles.active : ''}`}
              >
                {link.name}
              </Link>
            );
          })}
          <Link href="/contact" className={styles.mobileCta}>
            Request Audit
          </Link>
        </nav>
      </div>
    </header>
  );
}
