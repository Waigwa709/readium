import React from 'react';
import Link from 'next/link';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`${styles.container} container`}>
        <div className={styles.grid}>
          {/* Column 1: Brand Info */}
          <div className={styles.brandCol}>
            <Link href="/" className={styles.logo}>
              <img src="/logo.jpg" alt="Readium Logo" className={styles.logoImg} />
              <span className={styles.logoText}>READIUM</span>
            </Link>
            <p className={styles.brandDescription}>
              A premium physical book lending subscription combining the luxury of tactile reading with digital on-demand convenience. Deliver the quiet minutes of uninterrupted focus right to your doorstep.
            </p>
            {/*<div className={styles.socialsList}>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className={styles.socialIcon} aria-label="Instagram">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className={styles.socialIcon} aria-label="LinkedIn">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className={styles.socialIcon} aria-label="Twitter">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                </svg>
              </a>
            </div>*/}
          </div>
          {/* Column 2: Explore */}
          <div className={styles.linksCol}>
            <h4 className={styles.colTitle}>Explore</h4>
            <ul className={styles.linksList}>
              <li>
                <Link href="/" className={styles.footerLink}>
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="var(--text-gold)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className={styles.linkIcon}>
                    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                    <polyline points="9 22 9 12 15 12 15 22"></polyline>
                  </svg>
                  <span>Home</span>
                </Link>
              </li>
              <li>
                <Link href="/library" className={styles.footerLink}>
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="var(--text-gold)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className={styles.linkIcon}>
                    <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path>
                    <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>
                  </svg>
                  <span>Library Catalog</span>
                </Link>
              </li>
              <li>
                <Link href="/about" className={styles.footerLink}>
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="var(--text-gold)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className={styles.linkIcon}>
                    <circle cx="12" cy="12" r="10"></circle>
                    <line x1="12" y1="16" x2="12" y2="12"></line>
                    <line x1="12" y1="8" x2="12.01" y2="8"></line>
                  </svg>
                  <span>About Us</span>
                </Link>
              </li>
              <li>
                <Link href="/pricing" className={styles.footerLink}>
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="var(--text-gold)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className={styles.linkIcon}>
                    <rect x="2" y="4" width="20" height="16" rx="2" ry="2"></rect>
                    <line x1="2" y1="10" x2="22" y2="10"></line>
                  </svg>
                  <span>Pricing & Plans</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Membership Plans */}
          <div className={styles.linksCol}>
            <h4 className={styles.colTitle}>Lending Plans</h4>
            <ul className={styles.linksList}>
              <li>
                <Link href="/pricing" className={styles.footerLink}>
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="var(--text-gold)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className={styles.linkIcon}>
                    <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
                  </svg>
                  <span>Bookmark Plan</span>
                </Link>
              </li>
              <li>
                <Link href="/pricing" className={styles.footerLink}>
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="var(--text-gold)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className={styles.linkIcon}>
                    <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
                    <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
                  </svg>
                  <span>Chapter Plan</span>
                </Link>
              </li>
              <li>
                <Link href="/pricing" className={styles.footerLink}>
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="var(--text-gold)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className={styles.linkIcon}>
                    <path d="M12 2L2 7l10 5 10-5-10-5z"></path>
                    <path d="M2 17l10 5 10-5"></path>
                    <path d="M2 12l10 5 10-5"></path>
                  </svg>
                  <span>Library Plan</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact & Location */}
          <div className={styles.contactCol}>
            <h4 className={styles.colTitle}>Contact & Logistics</h4>
            <ul className={styles.contactList}>
              <li className={styles.contactItem}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--text-gold)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={styles.contactIcon}>
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
                <a href="tel:0708951796" className={styles.phoneLink}>+254 708 951 796</a>
              </li>
              <li className={styles.contactItem}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--text-gold)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={styles.contactIcon}>
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
                <a href="mailto:info@readium.co.ke" className={styles.emailLink}>info@readium.co.ke</a>
              </li>
              <li className={styles.contactItem}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--text-gold)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={styles.contactIcon}>
                  <path d="M12 2a8 8 0 0 0-8 8c0 5.25 8 12 8 12s8-6.75 8-12a8 8 0 0 0-8-8z"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
                <span>Nairobi, Kenya</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom copyright line */}
        <div className={styles.bottomBar}>
          <p className={styles.copyright}>
            © {new Date().getFullYear()} Readium. All rights reserved. | Made with <span className={styles.heart}>❤</span> by{' '}
            <a href="https://elondesigns.com/" target="_blank" rel="noopener noreferrer" className={styles.creatorLink}>
              Elon Designs Limited
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
