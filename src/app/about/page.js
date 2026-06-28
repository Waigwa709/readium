'use client';
import React from 'react';
import Link from 'next/link';
import styles from './page.module.css';

export default function AboutPage() {
  const manifestoItems = [
    {
      number: "01",
      title: "Curation Over Noise",
      description: "We eliminate selection fatigue. Our catalog is strictly vetted by industry leaders so every loan delivers high-value, actionable insights."
    },
    {
      number: "02",
      title: "Tactile Luxury",
      description: "A physical book is a luxury experience. Every book is kept in pristine condition and includes custom design bookmarks to enhance your bookshelf."
    },
    {
      number: "03",
      title: "Circular Sharing",
      description: "Sharing is sustainable. By establishing active local borrowing loops, we reduce printing resource waste and foster collaborative knowledge sharing."
    },
    {
      number: "04",
      title: "Digital Frictionlessness",
      description: "Experience physical reading with digital convenience. Search, check availability, read synopses, and coordinate direct doorstep delivery with a simple click."
    }
  ];

  return (
    <div className={styles.pageContainer}>
      
      {/* 1. Ambient Hero Header */}
      <section className={styles.aboutHero}>
        <div className="container">
          <span className={styles.pretitle}>OUR MISSION & VISION</span>
          <h1 className={styles.heroTitle}>Restoring the physical reading lifestyle.</h1>
          <p className={styles.heroSubtitle}>
            In a hyper-digital world of endless notifications, we believe the physical page is the ultimate anchor for focus, deep comprehension, and learning.
          </p>
        </div>
      </section>

      <div className="container">
        {/* 2. Interactive Statistics Row */}
        <section className={styles.statsGrid}>
          <div className={styles.statCard}>
            <span className={styles.statNumber}>54</span>
            <span className={styles.statLabel}>Vetted Volumes</span>
            <span className={styles.statDesc}>No clutter. Only highly reviewed books across tech, business, and mindset.</span>
          </div>
          <div className={styles.statCard}>
            <span className={styles.statNumber}>100%</span>
            <span className={styles.statLabel}>Tactile Quality</span>
            <span className={styles.statDesc}>Pristine books complete with premium bookmarks delivered to your hands.</span>
          </div>
          <div className={styles.statCard}>
            <span className={styles.statNumber}>Seamless</span>
            <span className={styles.statLabel}>Doorstep Logistics</span>
            <span className={styles.statDesc}>Free local deliveries and on-demand pickups scheduled directly around your timing.</span>
          </div>
        </section>

        {/* 3. Narrative & Signature Quote Section */}
        <section className={styles.storySection}>
          <div className={styles.storyGrid}>
            <div className={styles.storyBody}>
              <span className={styles.pretitle}>THE NARRATIVE</span>
              <h2>The Story of Readium</h2>
              <p className={styles.paragraph}>
                Readium was born out of a simple observation: while e-readers and digital audiobooks offer convenience, they lack the tactile connection, focus, and permanence of physical books. 
              </p>
              <p className={styles.paragraph}>
                The smell of ink, the texture of paper, the satisfying weight in your hand, and the progressive turn of pages are critical cues that help our brains slow down, focus, and retain knowledge.
              </p>
              <p className={styles.paragraph}>
                But purchasing every book leads to clutter, and public libraries are often out of stock. We decided to bridge this gap by building Readium: a premium, door-to-door book lending subscription that combines physical reading with digital on-demand ease.
              </p>
            </div>

            <div className={styles.quoteCard}>
              <span className={styles.quoteIcon}>“</span>
              <p className={styles.quoteText}>
                We do not build shelves to collect dust. We create sharing circles that deliver the quiet minutes of uninterrupted focus, the tactile weight of paper in your hands, and the spark of new ideas that change how you build systems.
              </p>
              <div className={styles.quoteUser}>
                <span className={styles.quoteAuthor}>Steve Kendrick</span>
                <span className={styles.quoteRole}>Founder, Readium SaaS</span>
              </div>
            </div>
          </div>
        </section>

        {/* 4. Manifesto Grid Section */}
        <section className={styles.manifestoSection}>
          <span className={styles.pretitle}>THE MANIFESTO</span>
          <h2>Our Core Principles</h2>
          <p className={styles.sectionSubtitle}>
            Our principles guide how we curate, manage logistics, and build active reading communities.
          </p>

          <div className={styles.manifestoGrid}>
            {manifestoItems.map((item, index) => (
              <div key={index} className={styles.manifestoCard}>
                <span className={styles.itemNumber}>{item.number}</span>
                <div className={styles.manifestoContent}>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 5. Bottom Call to Action */}
        <section className={styles.ctaSection}>
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
        </section>

      </div>
    </div>
  );
}
