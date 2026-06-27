'use client';
import React from 'react';
import Link from 'next/link';
import styles from './page.module.css';

export default function AboutPage() {
  return (
    <div className={styles.pageContainer}>
      <div className="container">
        
        {/* About Header */}
        <div className={styles.header}>
          <span className={styles.pretitle}>OUR MISSION & VISION</span>
          <h1 className={styles.title}>Restoring the physical reading lifestyle.</h1>
          <p className={styles.subtitle}>
            In a hyper-digital world of endless notifications, we believe the physical page is the ultimate anchor for focus, contemplation, and learning.
          </p>
        </div>

        {/* Story split layout */}
        <div className={styles.splitGrid}>
          {/* Left Column: Our Story */}
          <div className={styles.storyContent}>
            <h2 className={styles.sectionTitle}>The Story of Readium</h2>
            <p className={styles.paragraph}>
              Readium was born out of a simple observation: while e-readers and digital audiobooks offer unmatched convenience, they lack the soul, tactile connection, and presence of physical volumes. 
            </p>
            <p className={styles.paragraph}>
              A physical book is more than text; it is an experience. The smell of ink, the grain of paper, the satisfying weight in your hand, and the progress of turning pages are cues that help our brains slow down, focus, and absorb knowledge.
            </p>
            <p className={styles.paragraph}>
              However, buying books repeatedly can lead to clutter, and local libraries are often out of stock. We decided to bridge this gap by building **Readium**: a premium, door-to-door book lending SaaS that combines the tactile touch of physical books with digital on-demand convenience.
            </p>

            <div className={styles.milestoneCard}>
              <h3>54 Curated Volumes</h3>
              <p>We do not have millions of books. We curate exactly 54 high-caliber volumes across Technology, Business, and Mindset to guarantee your reading time is spent only on the best ideas.</p>
            </div>
          </div>

          {/* Right Column: Values / Manifesto */}
          <div className={styles.manifestoCol}>
            <h2 className={styles.sectionTitle}>Our Curation Manifesto</h2>
            
            <div className={styles.manifestoList}>
              <div className={styles.manifestoItem}>
                <span className={styles.itemNumber}>01</span>
                <div>
                  <strong>Curation Over Noise</strong>
                  <p>We eliminate selection fatigue. Our catalog is strictly vetted by industry leaders so every loan delivers high-value takeaways.</p>
                </div>
              </div>

              <div className={styles.manifestoItem}>
                <span className={styles.itemNumber}>02</span>
                <div>
                  <strong>Tactile Luxury</strong>
                  <p>Every book is kept in pristine condition. We include custom design bookmarks with every dispatch to enhance your bookshelf collection.</p>
                </div>
              </div>

              <div className={styles.manifestoItem}>
                <span className={styles.itemNumber}>03</span>
                <div>
                  <strong>Circular Sharing</strong>
                  <p>Sharing is sustainable. By establishing active local loops, we reduce printing resource consumption and share physical knowledge hubs.</p>
                </div>
              </div>

              <div className={styles.manifestoItem}>
                <span className={styles.itemNumber}>04</span>
                <div>
                  <strong>Digital Frictionlessness</strong>
                  <p>Use our expandable header search to locate books, check synopses, and coordinate direct logistics via WhatsApp or Paystack subscriptions.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Call to Action */}
        <div className={styles.ctaBanner}>
          <div className={styles.ctaGlow}></div>
          <div className={styles.ctaContent}>
            <h2>Ready to restore your focus?</h2>
            <p>Select your subscription tier, borrow your first volume, and let us bring the books to your door.</p>
            <div className={styles.ctaButtons}>
              <Link href="/pricing" className="btn-gold" style={{ padding: '14px 32px', fontSize: '14px' }}>
                View Lending Plans <span className={styles.ctaArrow}>→</span>
              </Link>
              <Link href="/library" className="btn-outline" style={{ padding: '14px 32px', fontSize: '14px' }}>
                Browse Curated Catalog
              </Link>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
