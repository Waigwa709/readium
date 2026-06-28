import React from 'react';
import Link from 'next/link';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`${styles.container} container`}>
        <div className={styles.grid}>
          {/* Logo & Intro */}
          <div className={styles.brandCol}>
            <Link href="/" className={styles.logo}>
              <img src="/logo.jpg" alt="Readium Logo" className={styles.logoImg} />
              <span className={styles.logoText}>READIUM</span>
            </Link>
            <p className={styles.tagline}>
              Selling a reading lifestyle + convenience system. Delivering the premium touch of physical books right to your doorstep.
            </p>
          </div>

          {/* Quick links */}
          <div className={styles.linksCol}>
            <h4 className={styles.colTitle}> Subscription Packages</h4>
            <ul className={styles.linksList}>
              <li>
                <Link href="/pricing" style={{ display: 'inline-flex', alignItems: 'center' }}>
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="var(--text-gold)" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" style={{ marginRight: '8px', flexShrink: 0 }}>
                    <polyline points="7 13 12 18 22 8"></polyline>
                    <polyline points="1 13 6 18 16 8"></polyline>
                  </svg>
                  Bookmark Plan
                </Link>
              </li>
              <li>
                <Link href="/pricing" style={{ display: 'inline-flex', alignItems: 'center' }}>
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="var(--text-gold)" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" style={{ marginRight: '8px', flexShrink: 0 }}>
                    <polyline points="7 13 12 18 22 8"></polyline>
                    <polyline points="1 13 6 18 16 8"></polyline>
                  </svg>
                  Chapter Plan
                </Link>
              </li>
              <li>
                <Link href="/pricing" style={{ display: 'inline-flex', alignItems: 'center' }}>
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="var(--text-gold)" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" style={{ marginRight: '8px', flexShrink: 0 }}>
                    <polyline points="7 13 12 18 22 8"></polyline>
                    <polyline points="1 13 6 18 16 8"></polyline>
                  </svg>
                  Library Plan
                </Link>
              </li>
            </ul>
          </div>

          {/* Points System Promotion */}
          <div className={styles.pointsCol}>
            <h4 className={styles.colTitle}>Gamified Reading</h4>
            <p className={styles.pointsText}>
              Every borrow gets you closer to rewards. Collect passport stamps and earn loyalty points!
            </p>
            <div className={styles.pointsBadges}>
              <div className={styles.badgeItem}>
                <span className={styles.badgeScore}>+10 PTS</span>
                <span className={styles.badgeAct}>Borrow Book</span>
              </div>
              <div className={styles.badgeItem}>
                <span className={styles.badgeScore}>+5 PTS</span>
                <span className={styles.badgeAct}>Return on Time</span>
              </div>
              <div className={styles.badgeItem}>
                <span className={styles.badgeScore}>+10 PTS</span>
                <span className={styles.badgeAct}>Write Review</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom copyright line */}
        <div className={styles.bottomBar}>
          <p>© {new Date().getFullYear()} Readium SaaS by Kendrick Designs. All rights reserved.</p>

        </div>
      </div>
    </footer>
  );
}
