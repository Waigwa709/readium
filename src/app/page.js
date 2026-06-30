'use client';
import React, { useRef, useEffect, useState, Suspense } from 'react';
import Link from 'next/link';
import { useSearchParams, useRouter } from 'next/navigation';
import { getAllBooks } from '@/lib/wordpress';
import BookCard from '@/components/BookCard';
import styles from './page.module.css';

function HomeContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  
  // Read search query from URL 'q'
  const searchQuery = searchParams.get('q') || '';

  // Create refs for the carousel scrolling
  const testimonialScrollRef = useRef(null);
  const carouselRefs = useRef({});

  const getRef = (cat) => {
    if (!carouselRefs.current[cat]) {
      carouselRefs.current[cat] = React.createRef();
    }
    return carouselRefs.current[cat];
  };

  // Helper for dynamic category formatting
  const getCategoryTitle = (cat) => {
    const name = cat.toLowerCase();
    if (name.includes('tech')) return 'Technology & Systems';
    if (name.includes('biz') || name.includes('wealth') || name.includes('busin')) return 'Business & Wealth';
    if (name.includes('mind') || name.includes('growth') || name.includes('person')) return 'Mindset & Personal Growth';
    return cat;
  };

  const getCategoryIcon = (name) => {
    const clean = (name || '').toLowerCase();
    if (clean.includes('tech') || clean.includes('system')) {
      return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--text-gold)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
          <line x1="8" y1="21" x2="16" y2="21"></line>
          <line x1="12" y1="17" x2="12" y2="21"></line>
        </svg>
      );
    }
    if (clean.includes('biz') || clean.includes('wealth') || clean.includes('busin')) {
      return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--text-gold)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="18" y1="20" x2="18" y2="10"></line>
          <line x1="12" y1="20" x2="12" y2="4"></line>
          <line x1="6" y1="20" x2="6" y2="14"></line>
        </svg>
      );
    }
    if (clean.includes('mind') || clean.includes('growth') || clean.includes('person')) {
      return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--text-gold)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10"></circle>
          <circle cx="12" cy="12" r="6"></circle>
          <circle cx="12" cy="12" r="2"></circle>
        </svg>
      );
    }
    return (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--text-gold)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path>
        <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>
      </svg>
    );
  };

  const [booksList, setBooksList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
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

  // Extract unique categories from dynamic list (supporting multi-category books)
  const categories = [...new Set(booksList.flatMap(b => b.categories || [b.category]).filter(Boolean))];



  // Filtered books for search results view
  const filteredBooks = booksList.filter(book => 
    book.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    book.author.toLowerCase().includes(searchQuery.toLowerCase()) ||
    book.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Carousel scroll action
  const handleScroll = (ref, direction) => {
    if (ref.current) {
      // Card width (180px) + gap (24px) = 204px. Scroll 6 books at a time.
      const scrollAmount = 6 * 204;
      ref.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  // Scroll to track anchor
  const scrollToAnchor = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const clearSearch = () => {
    router.push('/');
  };

  return (
    <div className={styles.main}>
      {/* 1. Inspiration Hero Section (Redesigned with Premium CTAs) */}
      <section className={styles.heroSection}>
        <div className="container">
          <div className={`${styles.heroWrapper} fade-up`}>
            <h1 className={`${styles.heroTitle} fade-up delay-100`}>
              Find your next read.<br />
              <span className={styles.heroTitleGold}>We'll bring it to your door.</span>
            </h1>
            <p className={`${styles.heroSubtitle} fade-up delay-200`}>
              Experience physical books with the convenience of a modern subscription. Browse our curation, request deliveries on-demand, and advance your reader status.
            </p>

            {/* Redesigned Primary & Secondary CTAs */}
            <div className={`${styles.heroCtas} fade-up delay-300`}>
              <Link href="/pricing" className="btn-gold" style={{ padding: '14px 32px', fontSize: '14px' }}>
                Explore Membership Plans <span className={styles.ctaArrow}>→</span>
              </Link>
              <Link href="/library" className="btn-outline" style={{ padding: '14px 32px', fontSize: '14px' }}>
                Browse Book Catalog
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Horizontal Slider Section */}
      <section className={styles.categorySliderSection}>
        <div className="container">
          <div className={styles.categorySliderHeader}>
            <span className={styles.categorySliderLabel}>CURATED LEARNING PATHWAYS</span>
            <h2 className={styles.categorySliderTitle}>Explore by Genre & Track</h2>
          </div>
          <div className={styles.sliderWrapper}>
            <div className={styles.sliderTrack}>
              {categories.map((cat, index) => {
                const count = booksList.filter(b => b.categories ? b.categories.includes(cat) : b.category === cat).length;
                return (
                  <button
                    key={cat}
                    onClick={() => scrollToAnchor(cat.toLowerCase().replace(/\s+/g, '-'))}
                    className={`${styles.categoryCard} reveal reveal-delay-${(index % 4 + 1) * 100}`}
                  >
                    <div className={styles.categoryCardGlow}></div>
                    <div className={styles.categoryCardIcon}>
                      {getCategoryIcon(cat)}
                    </div>
                    <h3 className={styles.categoryCardName}>{cat}</h3>
                    <span className={styles.categoryCardCount}>{count} Volume{count !== 1 ? 's' : ''}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* 2. Catalog & Horizontal Slides */}
      <section id="catalog" className={styles.catalogSection}>
        <div className="container">
          {searchQuery ? (
            /* Search Results Display */
            <div className={styles.searchResultsContainer}>
              <div className={styles.searchResultsHeader}>
                <h3>Search Results</h3>
                <p>Found {filteredBooks.length} book{filteredBooks.length !== 1 ? 's' : ''} matching "{searchQuery}"</p>
              </div>

              {filteredBooks.length > 0 ? (
                <div className={styles.searchResultsGrid}>
                  {filteredBooks.map(book => (
                    <BookCard key={book.id} book={book} />
                  ))}
                </div>
              ) : (
                <div className={styles.noResults}>
                  <div className={styles.noResultsIcon}>
                    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="var(--text-gold)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ opacity: 0.7 }}>
                      <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
                      <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
                    </svg>
                  </div>
                  <h4>No books found matching your query</h4>
                  <p>Try clearing the search from the header input.</p>
                  <button onClick={clearSearch} className="btn-gold" style={{ marginTop: '16px' }}>
                    Reset Search
                  </button>
                </div>
              )}
            </div>
          ) : (
            /* Standard Carousels (18 books per track, 6 visible in one row) */
            <>
              {categories.map(cat => {
                const booksInCat = booksList.filter(b => 
                  b.categories ? b.categories.includes(cat) : b.category === cat
                );
                if (booksInCat.length === 0) return null;
                const catRef = getRef(cat);

                return (
                  <div key={cat} id={cat.toLowerCase().replace(/\s+/g, '-')} className={`${styles.categoryBlock} reveal`}>
                    <div className={styles.categoryHeader}>
                      <div className={styles.categoryTitleCol}>
                        <span className={styles.collectionLabel}>COLLECTION</span>
                        <h2 className={styles.categoryTitle}>{cat}</h2>
                      </div>
                      <div className={styles.carouselArrows}>
                        <button 
                          onClick={() => handleScroll(catRef, 'left')} 
                          className={styles.arrowBtn} 
                          aria-label="Previous page"
                        >
                          ‹
                        </button>
                        <button 
                          onClick={() => handleScroll(catRef, 'right')} 
                          className={styles.arrowBtn} 
                          aria-label="Next page"
                        >
                          ›
                        </button>
                      </div>
                    </div>

                    <div className={styles.carouselContainer}>
                      <div ref={catRef} className={styles.carouselTrack}>
                        {booksInCat.map(book => (
                          <div key={book.id} className={styles.carouselItem}>
                            <BookCard book={book} />
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              })}


            </>
          )}
        </div>
      </section>


      {/* 3. Redesigned Premium Subscription CTA Section */}
      <section className={styles.ctaSection}>
        <div className="container">
          <div className={`${styles.ctaCard} reveal-scale`}>
            <div className={styles.ctaGlow}></div>
            <div className={styles.ctaContent}>
              <span className={styles.ctaBadge}>ACTIVE SUBSCRIPTIONS OPEN</span>
              <h2 className={styles.ctaTitle}>Borrow up to 24+ books on subscription.</h2>
              <p className={styles.ctaSubtitle}>
                Three plans, from KSh 2,500 a year. Pay once with Paystack and start reading.
              </p>
            </div>
            <Link href="/pricing" className="btn-gold" style={{ padding: '14px 32px', fontSize: '14px', flexShrink: 0, zIndex: 2 }}>
              See Pricing <span className={styles.ctaArrow}>→</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default function Home() {
  return (
    <Suspense fallback={
      <div className="container" style={{ padding: '120px 0', textAlign: 'center', minHeight: '60vh' }}>
        <div style={{ color: 'var(--text-gold)', fontSize: '18px', fontWeight: '600' }}>Loading Readium Library Catalog...</div>
      </div>
    }>
      <HomeContent />
    </Suspense>
  );
}
