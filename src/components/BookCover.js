'use client';
import React from 'react';
import styles from './BookCover.module.css';

export default function BookCover({ title, author, category, gradient, accentColor = '#FF9900', size = 'medium' }) {
  const sizeClass = styles[size] || styles.medium;

  return (
    <div className={styles.bookWrapper}>
      <div 
        className={`${styles.book} ${sizeClass}`}
        style={{ 
          background: gradient || 'linear-gradient(135deg, #1A1A1D, #321E30)',
          '--accent': accentColor 
        }}
      >
        {/* Book Crease/Spine Shadow */}
        <div className={styles.spine} />

        {/* Diagonal Sheen Overlay */}
        <div className={styles.sheen} />

        {/* Book Content Container */}
        <div className={styles.coverContent}>
          {/* Top Section */}
          <div className={styles.topSection}>
            <span className={styles.category} style={{ color: `${accentColor}cc` }}>
              {category}
            </span>
          </div>

          {/* Title (Georgia/Serif font) */}
          <div className={styles.titleSection}>
            <h3 className={styles.title}>
              {title}
            </h3>
          </div>

          {/* Footer Section */}
          <div className={styles.footerSection}>
            <span className={styles.author}>{author}</span>
          </div>
        </div>

        {/* Gold Foil Medallion in Bottom-Right Corner */}
        <div className={styles.goldMedallion}></div>
      </div>
    </div>
  );
}
