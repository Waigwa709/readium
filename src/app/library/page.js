'use client';
import React, { useState, useEffect, Suspense } from 'react';
import Link from 'next/link';
import { useSearchParams, useRouter } from 'next/navigation';
import booksData from '../../data/books.json';
import BookCard from '@/components/BookCard';
import styles from './page.module.css';

function LibraryContent() {
  const searchParams = useSearchParams();
  const router = useRouter();

  // Selected Category filter
  const [selectedCategory, setSelectedCategory] = useState('All');
  // Sort field: 'recommended', 'price-asc', 'price-desc', 'rating'
  const [sortBy, setSortBy] = useState('recommended');
  // Local search query input state
  const [localQuery, setLocalQuery] = useState('');

  // Read URL search parameter q
  const searchQuery = searchParams.get('q') || '';

  // Sync local query input with search param
  useEffect(() => {
    setLocalQuery(searchQuery);
  }, [searchQuery]);

  // Sync category state if category changes
  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
  };

  // Sync search input
  const handleLocalSearchSubmit = (e) => {
    e.preventDefault();
    if (localQuery) {
      router.push(`/library?q=${encodeURIComponent(localQuery)}`);
    } else {
      router.push('/library');
    }
  };

  // Clear all filters
  const handleResetFilters = () => {
    setSelectedCategory('All');
    setSortBy('recommended');
    setLocalQuery('');
    router.push('/library');
  };

  // Filtering logic
  const filteredBooks = booksData.filter(book => {
    const matchesSearch = 
      book.title.toLowerCase().includes(localQuery.toLowerCase()) ||
      book.author.toLowerCase().includes(localQuery.toLowerCase()) ||
      book.category.toLowerCase().includes(localQuery.toLowerCase());
    
    const matchesCategory = selectedCategory === 'All' || book.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });

  // Sorting logic
  const sortedBooks = [...filteredBooks].sort((a, b) => {
    if (sortBy === 'price-asc') {
      return a.priceVal - b.priceVal;
    }
    if (sortBy === 'price-desc') {
      return b.priceVal - a.priceVal;
    }
    if (sortBy === 'rating') {
      return b.rating - a.rating;
    }
    // Recommended / default sorting by rating and year
    return b.rating * 0.7 + (b.year / 2026) * 0.3 - (a.rating * 0.7 + (a.year / 2026) * 0.3);
  });

  // Get counts for sidebar badges
  const totalCount = booksData.length;
  const techCount = booksData.filter(b => b.category === 'Technology').length;
  const bizCount = booksData.filter(b => b.category === 'Business').length;
  const pdCount = booksData.filter(b => b.category === 'Personal Development').length;

  return (
    <div className="container" style={{ padding: '40px 24px 80px 24px' }}>
      <div className={styles.libraryHeader}>
        <span className={styles.pretitle}>EXPLORE OUR SHELVES</span>
        <h1 className={styles.title}>The Readium Catalog</h1>
        <p className={styles.subtitle}>
          Browse through {totalCount} physical volumes. Order directly via WhatsApp or start a membership subscription to borrow.
        </p>
      </div>

      <div className={styles.layoutGrid}>
        {/* Left Sidebar Menu */}
        <aside className={styles.sidebar}>
          <div className={styles.sidebarSection}>
            <h3 className={styles.sidebarTitle}>Genres & Tracks</h3>
            <ul className={styles.categoryList}>
              <li>
                <button 
                  onClick={() => handleCategorySelect('All')}
                  className={`${styles.categoryBtn} ${selectedCategory === 'All' ? styles.activeCategory : ''}`}
                >
                  <span style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>
                    All Categories
                  </span>
                  <span className={styles.categoryCount}>{totalCount}</span>
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleCategorySelect('Technology')}
                  className={`${styles.categoryBtn} ${selectedCategory === 'Technology' ? styles.activeCategory : ''}`}
                >
                  <span style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line></svg>
                    Technology
                  </span>
                  <span className={styles.categoryCount}>{techCount}</span>
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleCategorySelect('Business')}
                  className={`${styles.categoryBtn} ${selectedCategory === 'Business' ? styles.activeCategory : ''}`}
                >
                  <span style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="18" y1="20" x2="18" y2="10"></line><line x1="12" y1="20" x2="12" y2="4"></line><line x1="6" y1="20" x2="6" y2="14"></line></svg>
                    Business & Wealth
                  </span>
                  <span className={styles.categoryCount}>{bizCount}</span>
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleCategorySelect('Personal Development')}
                  className={`${styles.categoryBtn} ${selectedCategory === 'Personal Development' ? styles.activeCategory : ''}`}
                >
                  <span style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="6"></circle><circle cx="12" cy="12" r="2"></circle></svg>
                    Mindset & Growth
                  </span>
                  <span className={styles.categoryCount}>{pdCount}</span>
                </button>
              </li>
            </ul>
          </div>

          <div className={styles.sidebarBanner}>
            <h4>Lending SaaS Plan</h4>
            <p>Borrow up to 5 books at a time with free door delivery and pickup.</p>
            <Link href="/pricing" className="btn-gold" style={{ width: '100%', marginTop: '12px', padding: '8px' }}>
              View Plans
            </Link>
          </div>
        </aside>

        {/* Right Books Panel */}
        <main className={styles.catalogMain}>
          {/* Controls Bar: Search & Sort tabs */}
          <div className={styles.controlsBar}>
            {/* Inline search form */}
            <form onSubmit={handleLocalSearchSubmit} className={styles.inlineSearchForm}>
              <input
                type="text"
                placeholder="Search within these bookshelves..."
                value={localQuery}
                onChange={(e) => setLocalQuery(e.target.value)}
                className={styles.inlineSearchInput}
              />
              <button type="submit" className={styles.inlineSearchBtn}>Filter</button>
            </form>

            {/* Sort tabs */}
            <div className={styles.sortTabs}>
              <span className={styles.sortLabel}>Sort By:</span>
              <button 
                onClick={() => setSortBy('recommended')}
                className={`${styles.sortTabBtn} ${sortBy === 'recommended' ? styles.activeSortTab : ''}`}
              >
                Recommended
              </button>
              <button 
                onClick={() => setSortBy('price-asc')}
                className={`${styles.sortTabBtn} ${sortBy === 'price-asc' ? styles.activeSortTab : ''}`}
              >
                Price ↑
              </button>
              <button 
                onClick={() => setSortBy('price-desc')}
                className={`${styles.sortTabBtn} ${sortBy === 'price-desc' ? styles.activeSortTab : ''}`}
              >
                Price ↓
              </button>
              <button 
                onClick={() => setSortBy('rating')}
                className={`${styles.sortTabBtn} ${sortBy === 'rating' ? styles.activeSortTab : ''}`}
              >
                Rating
              </button>
            </div>
          </div>

          {/* Applied filters status bar */}
          {(selectedCategory !== 'All' || localQuery) && (
            <div className={styles.filterStatusBar}>
              <div className={styles.filterBadges}>
                {selectedCategory !== 'All' && (
                  <span className={styles.filterBadge}>
                    Track: {selectedCategory}
                    <button onClick={() => setSelectedCategory('All')}>✕</button>
                  </span>
                )}
                {localQuery && (
                  <span className={styles.filterBadge}>
                    Query: "{localQuery}"
                    <button onClick={() => { setLocalQuery(''); router.push('/library'); }}>✕</button>
                  </span>
                )}
              </div>
              <button onClick={handleResetFilters} className={styles.clearAllFiltersBtn}>
                Clear All Filters
              </button>
            </div>
          )}

          {/* Book Catalog Grid */}
          {sortedBooks.length > 0 ? (
            <div className={styles.booksGrid}>
              {sortedBooks.map(book => (
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
              <h3>No match found in current filters</h3>
              <p>Try modifying your category selection or clearing the search text.</p>
              <button onClick={handleResetFilters} className="btn-gold" style={{ marginTop: '16px' }}>
                Reset All Filters
              </button>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}

export default function LibraryPage() {
  return (
    <Suspense fallback={
      <div className="container" style={{ padding: '120px 0', textAlign: 'center', minHeight: '60vh' }}>
        <div style={{ color: 'var(--text-gold)', fontSize: '18px', fontWeight: '600' }}>Loading Catalog Shelf...</div>
      </div>
    }>
      <LibraryContent />
    </Suspense>
  );
}
