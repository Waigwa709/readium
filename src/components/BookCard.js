'use client';
import React from 'react';
import Link from 'next/link';
import BookCover from './BookCover';
import styles from './BookCard.module.css';

export default function BookCard({ book }) {
  const { id, title, author, category, price, gradient, accentColor } = book;

  return (
    <Link href={`/book/${id}`} className={styles.card}>
      <div className={styles.coverWrapper}>
        <BookCover 
          title={title} 
          author={author} 
          category={category} 
          gradient={gradient} 
          accentColor={accentColor}
          size="medium"
        />
      </div>
      <div className={styles.info}>
        <h4 className={styles.title}>{title}</h4>
        <p className={styles.author}>{author}</p>
        <div className={styles.price}>{price}</div>
      </div>
    </Link>
  );
}
