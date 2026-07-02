'use client';
import React, { use, useEffect, useState, useRef } from 'react';
import Link from 'next/link';
import { getAllBooks } from '@/lib/wordpress';
import BookCover from '@/components/BookCover';
import BookCard from '@/components/BookCard';
import styles from './page.module.css';

export default function BookPage({ params }) {
  const { id } = use(params);
  const [shareUrl, setShareUrl] = useState('');
  const [booksList, setBooksList] = useState([]);
  const [loading, setLoading] = useState(true);
  
  // Ref for the related books carousel track
  const relatedScrollRef = useRef(null);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setShareUrl(window.location.href);
    }

    async function loadBooks() {
      try {
        const data = await getAllBooks();
        setBooksList(data || []);
      } catch (err) {
        console.error("Failed to load books from WordPress GraphQL:", err);
      } finally {
        setLoading(false);
      }
    }
    loadBooks();
  }, []);
  
  // Find the book by id
  const book = booksList.find(b => b.id === id);

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

  // Build WhatsApp Buy URL
  const phone = '254708951796'; // Target phone number (customizable placeholder)
  const buyMessage = `Hi Readium! I would like to buy a copy of the physical book "${title}" by ${author}. Product link: ${shareUrl}`;
  const whatsappBuyUrl = `https://wa.me/${phone}?text=${encodeURIComponent(buyMessage)}`;

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
  const relatedBooks = booksList
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
          <div className={`${styles.coverSection} slide-in-left delay-100`}>
            <div className={styles.coverShadowBg}></div>
            <BookCover 
              title={title}
              author={author}
              category={category}
              gradient={gradient}
              accentColor={accentColor}
              coverImage={book.coverImage}
              size="large"
            />
          </div>

          {/* Right Column: Book details & CTA */}
          <div className={`${styles.infoSection} slide-in-right delay-200`}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flexWrap: 'wrap', marginBottom: '8px' }}>
              <div className={styles.categoryBadge} style={{ borderColor: `${accentColor}30`, color: accentColor, marginBottom: 0 }}>
                {category}
              </div>
              {book.availability && (
                <div style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  padding: '4px 12px',
                  borderRadius: '20px',
                  fontSize: '13px',
                  fontWeight: '600',
                  background: book.availability.toLowerCase() === 'available' || book.availability === 'true' || book.availability === true 
                    ? 'rgba(0, 32, 96, 0.45)' 
                    : 'rgba(239, 68, 68, 0.08)',
                  border: book.availability.toLowerCase() === 'available' || book.availability === 'true' || book.availability === true
                    ? '1px solid rgba(0, 32, 96, 0.85)'
                    : '1px solid rgba(239, 68, 68, 0.25)',
                  color: book.availability.toLowerCase() === 'available' || book.availability === 'true' || book.availability === true
                    ? '#8ab4f8'
                    : '#f28b82'
                }}>
                  <span style={{
                    width: '5.5px',
                    height: '5.5px',
                    borderRadius: '50%',
                    background: book.availability.toLowerCase() === 'available' || book.availability === 'true' || book.availability === true ? '#5294ff' : '#ef4444',
                    flexShrink: 0
                  }} />
                  <span>
                    {book.availability.toLowerCase() === 'available' || book.availability === 'true' || book.availability === true ? 'Available' : 'Currently Borrowed'}
                  </span>
                </div>
              )}
            </div>

            <h1 className={styles.title}>{title}</h1>
            <p className={styles.author}>Written by <strong>{author}</strong></p>

            <div className={styles.ratingRow}>
              <div className={styles.stars}>
                {renderStars(rating)}
              </div>
              <span className={styles.ratingVal}>{rating} Rating</span>
            </div>

            <div className={styles.divider}></div>

            <div className={styles.synopsis}>
              <h3>Synopsis</h3>
              <p>{description}</p>
            </div>

            <div className={styles.buttonsRow} style={{ marginTop: '24px' }}>
              {/* Lend button -> pricing page */}
              <Link href="/pricing" className={styles.btnLend}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={styles.btnIcon}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-16.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-16.25v14.25" />
                </svg>
                Borrow via Membership
              </Link>

              {/* Buy button -> WhatsApp prefilled link */}
              <a href={whatsappBuyUrl} target="_blank" rel="noopener noreferrer" className={styles.btnBuy}>
                <svg viewBox="0 0 448 512" fill="currentColor" className={styles.btnIcon} style={{ width: '16px', height: '16px' }}>
                  <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" />
                </svg>
                Buy via WhatsApp
              </a>
            </div>

            {/* Micro details on why Readium SaaS matches physical */}
            <div className={styles.physicalPerkBanner}>
              <span className={styles.perkIcon}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: 'var(--text-gold)' }}>
                  <polyline points="20 12 20 22 4 22 4 12"></polyline>
                  <rect x="2" y="7" width="20" height="5"></rect>
                  <line x1="12" y1="22" x2="12" y2="7"></line>
                  <path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z"></path>
                  <path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z"></path>
                </svg>
              </span>
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
