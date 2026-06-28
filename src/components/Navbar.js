'use client';
import React, { useState, useEffect, Suspense } from 'react';
import Link from 'next/link';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import styles from './Navbar.module.css';

function NavbarContent() {
  const pathname = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams();

  const [searchVal, setSearchVal] = useState('');

  // Sync state with URL parameter 'q'
  useEffect(() => {
    const query = searchParams.get('q') || '';
    setSearchVal(query);
  }, [searchParams]);

  const handleSearchChange = (e) => {
    const val = e.target.value;
    setSearchVal(val);

    // Redirect searches directly to the library page
    if (val) {
      router.push(`/library?q=${encodeURIComponent(val)}`);
    } else {
      router.push('/library');
    }
  };

  const handleClear = () => {
    setSearchVal('');
    router.push('/library');
  };

  return (
    <div className={`${styles.navContainer} container`}>
      {/* Brand Logo */}
      <Link href="/" className={styles.logo}>
        <img src="/logo.jpg" alt="Readium Logo" className={styles.logoImg} />
        <span className={styles.logoText}>READIUM</span>
      </Link>

      {/* Center Navigation Menu */}
      <nav className={styles.nav}>
        <Link href="/" className={`${styles.navLink} ${pathname === '/' ? styles.active : ''}`}>
          Home
        </Link>
        <Link href="/library" className={`${styles.navLink} ${pathname === '/library' ? styles.active : ''}`}>
          Library
        </Link>
        <Link href="/pricing" className={`${styles.navLink} ${pathname === '/pricing' ? styles.active : ''}`}>
          Membership Plans
        </Link>
        <Link href="/about" className={`${styles.navLink} ${pathname === '/about' ? styles.active : ''}`}>
          About Us
        </Link>
      </nav>

      {/* Header Search Bar (BooksRun Docked Design) */}
      <div className={styles.searchContainer}>
        <div className={styles.searchInputWrapper}>
          <input
            type="text"
            placeholder="Search title, author..."
            value={searchVal}
            onChange={handleSearchChange}
            className={styles.searchInput}
          />
          {searchVal && (
            <button className={styles.searchClearBtn} onClick={handleClear}>
              ✕
            </button>
          )}
        </div>
        <button className={styles.searchBtn} aria-label="Search">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="11" cy="11" r="8"></circle>
            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
          </svg>
        </button>
      </div>

      {/* Redesigned Premium Subscribe CTA */}
      <div className={styles.actions}>
        <Link href="/pricing" className={styles.ctaButton}>
          <span>Subscribe</span>
          <span className={styles.ctaArrow}>→</span>
        </Link>
      </div>
    </div>
  );
}

export default function Navbar() {
  return (
    <header className={styles.header}>
      <Suspense fallback={<div className="container" style={{ height: '72px' }}></div>}>
        <NavbarContent />
      </Suspense>
    </header>
  );
}
