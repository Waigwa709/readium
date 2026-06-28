'use client';
import React, { useRef, useEffect, Suspense } from 'react';
import Link from 'next/link';
import { useSearchParams, useRouter } from 'next/navigation';
import booksData from '../data/books.json';
import BookCard from '@/components/BookCard';
import styles from './page.module.css';



function HomeContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  
  // Read search query from URL 'q'
  const searchQuery = searchParams.get('q') || '';

  // Create refs for the carousel scrolling
  const techScrollRef = useRef(null);
  const bizScrollRef = useRef(null);
  const pdScrollRef = useRef(null);
  const bsScrollRef = useRef(null);
  const testimonialScrollRef = useRef(null);

  // Group books by category (18 books in each)
  const techBooks = booksData.filter(b => b.category === 'Technology');
  const bizBooks = booksData.filter(b => b.category === 'Business');
  const pdBooks = booksData.filter(b => b.category === 'Personal Development');
  const bestSellersBooks = booksData.filter(book => 
    ['clean-code', 'the-pragmatic-programmer', 'designing-data-intensive-applications', 'zero-to-one', 'the-lean-startup', 'good-to-great', 'thinking-fast-and-slow', 'atomic-habits', 'deep-work', 'mindset', 'the-5-am-club', 'the-alchemist'].includes(book.id)
  );

  const testimonials = [
    {
      id: 1,
      name: "Sarah Mwangi",
      role: "Software Engineer",
      initials: "SM",
      stars: 5,
      text: "Readium changed the way I learn. Getting physical programming books delivered straight to my home in Nairobi saves me time and keeps me focused without screen fatigue."
    },
    {
      id: 2,
      name: "David Koech",
      role: "Fintech Founder",
      initials: "DK",
      stars: 5,
      text: "I love the curated Business track. Reading physical copies of Zero to One and Good to Great with my team has sparked so many great brainstorming sessions."
    },
    {
      id: 3,
      name: "Elsa Wanjiku",
      role: "Product Designer",
      initials: "EW",
      stars: 5,
      text: "The circular lending model is so sustainable! The page stamps in my physical passport card make borrowing feel like a premium, rewarding club membership."
    },
    {
      id: 4,
      name: "Brian Kiprop",
      role: "Tech Lead",
      initials: "BK",
      stars: 5,
      text: "Doorstep book dispatching and picking is incredibly seamless. After a long coding shift, having a physical book to wind down with is exactly what I needed."
    },
    {
      id: 5,
      name: "Jane Ndwiga",
      role: "Data Scientist",
      initials: "JN",
      stars: 5,
      text: "Being able to read physical tech books like Designing Data-Intensive Applications on a flexible plan is exactly what I've been looking for."
    },
    {
      id: 6,
      name: "Samuel Ochieng",
      role: "Venture Partner",
      initials: "SO",
      stars: 5,
      text: "The curation here is top-notch. Every book in the Business circle is a masterpiece. Highly recommend the lending model."
    },
    {
      id: 7,
      name: "Mary Atieno",
      role: "Academic Writer",
      initials: "MA",
      stars: 5,
      text: "The doorstep drop-off is incredibly prompt. The books are always in brand new condition, complete with a beautiful gold bookmark."
    },
    {
      id: 8,
      name: "Victor Cheruiyot",
      role: "Devops Engineer",
      initials: "VC",
      stars: 5,
      text: "No more reading complex manuals on screens. Readium has restored my slow reading habit after work. Truly a lifesaver."
    },
    {
      id: 9,
      name: "Grace Mutua",
      role: "Finance Analyst",
      initials: "GM",
      stars: 5,
      text: "Having physical books delivered to my office in Upper Hill has completely revived my reading habit. Best investment this year."
    },
    {
      id: 10,
      name: "Alex Kamau",
      role: "Startup CTO",
      initials: "AK",
      stars: 5,
      text: "A fantastic selection of tech books. The speed of dispatch is unmatched, and returning is as simple as clicking a button."
    },
    {
      id: 11,
      name: "Lucy Nyambura",
      role: "Freelance Writer",
      initials: "LN",
      stars: 5,
      text: "The community tier rewards are a great touch. Unlocking the premium bookmark was so satisfying!"
    },
    {
      id: 12,
      name: "Peter Owino",
      role: "Systems Architect",
      initials: "PO",
      stars: 5,
      text: "Readium is the gold standard for book subscriptions. No screen fatigue, just pure learning from high-quality physical pages."
    }
  ];

  // Filtered books for search results view
  const filteredBooks = booksData.filter(book => 
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
          <div className={styles.heroWrapper}>
            <h1 className={styles.heroTitle}>
              Find your next read.<br />
              <span className={styles.heroTitleGold}>We'll bring it to your door.</span>
            </h1>
            <p className={styles.heroSubtitle}>
              Experience physical books with the convenience of a modern subscription. Browse our curation, request deliveries on-demand, and advance your reader status.
            </p>

            {/* Redesigned Primary & Secondary CTAs */}
            <div className={styles.heroCtas}>
              <Link href="/pricing" className="btn-gold" style={{ padding: '14px 32px', fontSize: '14px' }}>
                Explore Membership Plans <span className={styles.ctaArrow}>→</span>
              </Link>
              <Link href="/library" className="btn-outline" style={{ padding: '14px 32px', fontSize: '14px' }}>
                Browse Book Catalog
              </Link>
            </div>

            {/* Quick Category Tag Filters */}
            <div className={styles.categoryTagsRow}>
              <button onClick={() => { clearSearch(); setTimeout(() => scrollToAnchor('technology'), 100); }} className={styles.tagBtn}>
                Technology Track
              </button>
              <button onClick={() => { clearSearch(); setTimeout(() => scrollToAnchor('business'), 100); }} className={styles.tagBtn}>
                Business Track
              </button>
              <button onClick={() => { clearSearch(); setTimeout(() => scrollToAnchor('personal-development'), 100); }} className={styles.tagBtn}>
                Mindset Track
              </button>
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
              {/* Technology Track */}
              <div id="technology" className={styles.categoryBlock}>
                <div className={styles.categoryHeader}>
                  <div className={styles.categoryTitleCol}>
                    <span className={styles.collectionLabel}>COLLECTION</span>
                    <h2 className={styles.categoryTitle}>Technology & Systems</h2>
                  </div>
                  <div className={styles.carouselArrows}>
                    <button 
                      onClick={() => handleScroll(techScrollRef, 'left')} 
                      className={styles.arrowBtn} 
                      aria-label="Previous page"
                    >
                      ‹
                    </button>
                    <button 
                      onClick={() => handleScroll(techScrollRef, 'right')} 
                      className={styles.arrowBtn} 
                      aria-label="Next page"
                    >
                      ›
                    </button>
                  </div>
                </div>

                <div className={styles.carouselContainer}>
                  <div ref={techScrollRef} className={styles.carouselTrack}>
                    {techBooks.map(book => (
                      <div key={book.id} className={styles.carouselItem}>
                        <BookCard book={book} />
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Business Track */}
              <div id="business" className={styles.categoryBlock}>
                <div className={styles.categoryHeader}>
                  <div className={styles.categoryTitleCol}>
                    <span className={styles.collectionLabel}>COLLECTION</span>
                    <h2 className={styles.categoryTitle}>Business & Wealth</h2>
                  </div>
                  <div className={styles.carouselArrows}>
                    <button 
                      onClick={() => handleScroll(bizScrollRef, 'left')} 
                      className={styles.arrowBtn} 
                      aria-label="Previous page"
                    >
                      ‹
                    </button>
                    <button 
                      onClick={() => handleScroll(bizScrollRef, 'right')} 
                      className={styles.arrowBtn} 
                      aria-label="Next page"
                    >
                      ›
                    </button>
                  </div>
                </div>

                <div className={styles.carouselContainer}>
                  <div ref={bizScrollRef} className={styles.carouselTrack}>
                    {bizBooks.map(book => (
                      <div key={book.id} className={styles.carouselItem}>
                        <BookCard book={book} />
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Personal Development Track */}
              <div id="personal-development" className={styles.categoryBlock}>
                <div className={styles.categoryHeader}>
                  <div className={styles.categoryTitleCol}>
                    <span className={styles.collectionLabel}>COLLECTION</span>
                    <h2 className={styles.categoryTitle}>Mindset & Personal Growth</h2>
                  </div>
                  <div className={styles.carouselArrows}>
                    <button 
                      onClick={() => handleScroll(pdScrollRef, 'left')} 
                      className={styles.arrowBtn} 
                      aria-label="Previous page"
                    >
                      ‹
                    </button>
                    <button 
                      onClick={() => handleScroll(pdScrollRef, 'right')} 
                      className={styles.arrowBtn} 
                      aria-label="Next page"
                    >
                      ›
                    </button>
                  </div>
                </div>

                <div className={styles.carouselContainer}>
                  <div ref={pdScrollRef} className={styles.carouselTrack}>
                    {pdBooks.map(book => (
                      <div key={book.id} className={styles.carouselItem}>
                        <BookCard book={book} />
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Best Sellers Section */}
              <div className={styles.categoryBlock}>
                <div className={styles.categoryHeader}>
                  <div className={styles.categoryTitleCol}>
                    <span className={styles.collectionLabel}>COMMUNITY FAVORITES</span>
                    <h2 className={styles.categoryTitle}>Best Sellers</h2>
                  </div>
                  <div className={styles.carouselArrows}>
                    <button 
                      onClick={() => handleScroll(bsScrollRef, 'left')} 
                      className={styles.arrowBtn} 
                      aria-label="Previous page"
                    >
                      ‹
                    </button>
                    <button 
                      onClick={() => handleScroll(bsScrollRef, 'right')} 
                      className={styles.arrowBtn} 
                      aria-label="Next page"
                    >
                      ›
                    </button>
                  </div>
                </div>
                <p className={styles.buybackSectionDesc}>
                  Discover the most borrowed, reviewed, and discussed volumes in the Readium circles this month.
                </p>

                <div className={styles.carouselContainer}>
                  <div ref={bsScrollRef} className={styles.carouselTrack}>
                    {bestSellersBooks.map(book => (
                      <div key={book.id} className={styles.carouselItem}>
                        <BookCard book={book} />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </section>

      {/* 2.5 Testimonials Section */}
      <section className={styles.testimonialsSection}>
        <div className="container">
          <div className={styles.categoryHeader}>
            <div className={styles.categoryTitleCol}>
              <span className={styles.collectionLabel}>TESTIMONIALS</span>
              <h2 className={styles.categoryTitle}>What Our Customers Say</h2>
            </div>
          </div>
          <p className={styles.buybackSectionDesc}>
            Don't just take our word for it - hear from the amazing people who make our first year so special!
          </p>
        </div>

        {/* Infinite Loop Marquee Container */}
        <div className={styles.marqueeContainer}>
          <div className={styles.marqueeTrack}>
            {[...testimonials, ...testimonials].map((item, idx) => (
              <div key={`${item.id}-${idx}`} className={styles.testimonialCard}>
                <div className={styles.testimonialStars}>
                  {"★".repeat(item.stars)}
                </div>
                <p className={styles.testimonialQuote}>"{item.text}"</p>
                <div className={styles.testimonialUser}>
                  <div className={styles.testimonialAvatar}>
                    {item.initials}
                  </div>
                  <div className={styles.testimonialUserInfo}>
                    <strong>{item.name}</strong>
                    <span>{item.role}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Redesigned Premium Subscription CTA Section */}
      <section className={styles.ctaSection}>
        <div className="container">
          <div className={styles.ctaCard}>
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
