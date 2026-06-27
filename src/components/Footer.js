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
            <h4 className={styles.colTitle}>SaaS Subscriptions</h4>
            <ul className={styles.linksList}>
              <li><Link href="/pricing">📖 Bookmark Plan</Link></li>
              <li><Link href="/pricing">📚 Chapter Plan</Link></li>
              <li><Link href="/pricing">🏛️ Library Plan</Link></li>
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
          <div className={styles.legalLinks}>
            <a href="#privacy">Privacy Policy</a>
            <a href="#terms">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
