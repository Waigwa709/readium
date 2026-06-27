'use client';
import React, { use, useEffect, useState, useRef } from 'react';
import Link from 'next/link';
import booksData from '../../../data/books.json';
import BookCover from '@/components/BookCover';
import BookCard from '@/components/BookCard';
import styles from './page.module.css';

export default function BookPage({ params }) {
  const { id } = use(params);
  const [shareUrl, setShareUrl] = useState('');
  
  // Ref for the related books carousel track
  const relatedScrollRef = useRef(null);
  
  // Find the book by id
  const book = booksData.find(b => b.id === id);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setShareUrl(window.location.href);
    }
  }, []);

  if (!book) {
    return (
      <div className={`${styles.notFound} container`}>
        <h2>Book Not Found</h2>
        <p>The library catalog doesn't contain this volume currently.</p>
        <Link href="/" className="btn-gold">
          Return to Catalog
        </Link>
      </div>
    );
  }

  const { title, author, category, description, price, priceVal, rating, pages, year, gradient, accentColor } = book;

  // Build WhatsApp URL
  const phone = '254700000000'; // Target phone number (customizable placeholder)
  const message = `Hi Readium! I would like to buy the physical book "${title}" for ${price}. Product link: ${shareUrl}`;
  const whatsappUrl = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

  // Generate stars
  const renderStars = (num) => {
    const stars = [];
    const floor = Math.floor(num);
    for (let i = 0; i < 5; i++) {
      stars.push(
        <svg 
          key={i} 
          className={styles.star} 
          viewBox="0 0 20 20" 
          fill={i < floor ? '#FFCC00' : 'rgba(255,255,255,0.15)'}
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      );
    }
    return stars;
  };

  // Carousel scroll action
  const handleScroll = (direction) => {
    if (relatedScrollRef.current) {
      const scrollAmount = 3 * 204; // Scroll 3 books at a time
      relatedScrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  // Get up to 8 related books in the same category
  const relatedBooks = booksData
    .filter(b => b.category === category && b.id !== id)
    .slice(0, 10);

  return (
    <div className={styles.containerPage}>
      <div className="container">
        {/* Back Link */}
        <Link href="/library" className={styles.backBtn}>
          <span className={styles.backArrow}>←</span> Back to Library Catalog
        </Link>
 
        {/* Book Detail Split Grid */}
        <div className={styles.detailGrid}>
          {/* Left Column: Huge 3D Cover */}
          <div className={styles.coverSection}>
            <div className={styles.coverShadowBg}></div>
            <BookCover 
              title={title}
              author={author}
              category={category}
              gradient={gradient}
              accentColor={accentColor}
              size="large"
            />
          </div>

          {/* Right Column: Book details & CTA */}
          <div className={styles.infoSection}>
            <div className={styles.categoryBadge} style={{ borderColor: `${accentColor}30`, color: accentColor }}>
              {category}
            </div>

            <h1 className={styles.title}>{title}</h1>
            <p className={styles.author}>Written by <strong>{author}</strong></p>

            <div className={styles.ratingRow}>
              <div className={styles.stars}>
                {renderStars(rating)}
              </div>
              <span className={styles.ratingVal}>{rating} Rating</span>
              <span className={styles.dot}>•</span>
              <span className={styles.pages}>{pages} pages</span>
              <span className={styles.dot}>•</span>
              <span className={styles.year}>Published {year}</span>
            </div>

            <div className={styles.divider}></div>

            <div className={styles.synopsis}>
              <h3>Synopsis</h3>
              <p>{description}</p>
            </div>

            <div className={styles.divider}></div>

            {/* Buying & Subscription Info */}
            <div className={styles.checkoutSection}>
              <div className={styles.priceContainer}>
                <span className={styles.priceLabel}>Physical Book Price</span>
                <span className={styles.priceValue} style={{ color: accentColor }}>{price}</span>
              </div>

              <div className={styles.buttonsRow}>
                {/* Lend button -> pricing page */}
                <Link href="/pricing" className={styles.btnLend}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={styles.btnIcon}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-16.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-16.25v14.25" />
                  </svg>
                  Lend Book via Membership
                </Link>

                {/* Buy button -> WhatsApp prefilled link */}
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className={styles.btnBuy}>
                  <svg viewBox="0 0 24 24" fill="currentColor" className={styles.btnIcon}>
                    <path fillRule="evenodd" d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c1.358 2.535 3.426 4.603 5.96 5.96l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z" clipRule="evenodd" />
                  </svg>
                  Buy & Order via WhatsApp
                </a>
              </div>
            </div>

            {/* Micro details on why Readium SaaS matches physical */}
            <div className={styles.physicalPerkBanner}>
              <span className={styles.perkIcon}>🎁</span>
              <p>
                <strong>Lending Perks:</strong> Every membership borrowing includes priority reservations, custom name bookmarks, and free logistics support based on plan tier.
              </p>
            </div>
          </div>
        </div>

        {/* You May Also Love Section (Redesigned as sliding Carousel) */}
        {relatedBooks.length > 0 && (
          <div className={styles.relatedSection}>
            <div className={styles.relatedHeader}>
              <div>
                <h2 className={styles.relatedTitle}>You May Also Love</h2>
                <p className={styles.relatedSubtitle}>Explore more physical books in the {category} shelf</p>
              </div>
              <div className={styles.carouselArrows}>
                <button 
                  onClick={() => handleScroll('left')} 
                  className={styles.arrowBtn} 
                  aria-label="Previous page"
                >
                  ‹
                </button>
                <button 
                  onClick={() => handleScroll('right')} 
                  className={styles.arrowBtn} 
                  aria-label="Next page"
                >
                  ›
                </button>
              </div>
            </div>
            
            <div className={styles.carouselContainer}>
              <div ref={relatedScrollRef} className={styles.carouselTrack}>
                {relatedBooks.map(relatedBook => (
                  <div key={relatedBook.id} className={styles.carouselItem}>
                    <BookCard book={relatedBook} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
