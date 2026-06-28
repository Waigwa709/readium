'use client';
import React from 'react';
import Link from 'next/link';
import BookCover from './BookCover';
import styles from './BookCard.module.css';

export default function BookCard({ book }) {
  const { id, title, author, category, price, gradient, accentColor, coverImage, availability } = book;

  return (
    <Link href={`/book/${id}`} className={styles.card}>
      <div className={styles.coverWrapper} style={{ position: 'relative' }}>
        {availability && (
          <span style={{
            position: 'absolute',
            top: '12px',
            left: '12px',
            zIndex: 10,
            background: availability.toLowerCase() === 'available' || availability === 'true' || availability === true 
              ? 'rgba(0, 32, 96, 0.85)' 
              : 'rgba(12, 10, 8, 0.85)',
            border: availability.toLowerCase() === 'available' || availability === 'true' || availability === true
              ? '1px solid rgba(0, 32, 96, 0.85)'
              : '1px solid rgba(255, 255, 255, 0.15)',
            color: '#ffffff',
            fontSize: '9px',
            fontWeight: '700',
            textTransform: 'uppercase',
            letterSpacing: '1px',
            padding: '4px 10px',
            borderRadius: '20px',
            backdropFilter: 'blur(4px)',
            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.25)',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '5px'
          }}>
            <span style={{
              width: '5.5px',
              height: '5.5px',
              borderRadius: '50%',
              background: availability.toLowerCase() === 'available' || availability === 'true' || availability === true ? '#5294ff' : '#ef4444',
              flexShrink: 0
            }} />
            <span>
              {availability.toLowerCase() === 'available' || availability === 'true' || availability === true ? 'Available' : 'Borrowed'}
            </span>
          </span>
        )}
        <BookCover 
          title={title} 
          author={author} 
          category={category} 
          gradient={gradient} 
          accentColor={accentColor}
          coverImage={coverImage}
          size="medium"
        />
      </div>
      <div className={styles.info}>
        <h4 className={styles.title}>{title}</h4>
        <p className={styles.author}>By: {author}</p>
        <div className={styles.ctaButton}>
          Borrow or Buy
        </div>
      </div>
    </Link>
  );
}
