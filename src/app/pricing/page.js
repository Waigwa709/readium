'use client';
import React, { useState } from 'react';
import styles from './page.module.css';

export default function PricingPage() {

  const plans = [
    {
      id: 'bookmark',
      name: 'Bookmark Plan',
      tagline: 'For casual readers starting their physical journey',
      price: 'KSh 500',
      period: 'Year',
      color: '#FFCC00',
      badge: 'Starter',
      booksPerYear: '3 physical books / year',
      activeBooks: '1 active borrowed book at a time',
      loanPeriod: 'Unlimited borrowing period',
      renewals: 'New Arrival Notifications',
      paystackUrl: 'https://paystack.shop/pay/cexu2f-l3r',
      perks: [
        'Welcome bookmark gift',

        'Access to monthly reading newsletter',
        'Basic book recommendations'
      ]
    },
    {
      id: 'chapter',
      name: 'Chapter Plan',
      tagline: 'For consistent readers building a reading habit',
      price: 'KSh 900',
      period: 'Year',
      color: '#D4AF37',
      badge: 'Pro Choice',
      isPopular: true,
      booksPerYear: '6 physical books / year',
      activeBooks: '1 active borrowed book at a time',
      loanPeriod: 'Unlimited borrowing period',
      paystackUrl: 'https://paystack.shop/pay/sxuh21ppp1',
      perks: [
        'Premium bookmark collection',
        'Members-only book club',
        'Exclusive Reading Lists',
        'Priority reservations & save authors',

      ]
    },
    {
      id: 'library',
      name: 'Library Plan',
      tagline: 'For serious readers, families, and organizations',
      price: 'KSh 2,000',
      period: 'Year',
      color: '#FF9900',
      badge: 'Premium VIP',
      booksPerYear: 'Unlimited borrowing (Fair use applies)',
      activeBooks: '1 active borrowed book at a time',
      loanPeriod: 'Unlimited borrowing period',
      paystackUrl: 'https://paystack.shop/pay/6e5vb3hivm',
      perks: [
        'New releases & bestsellers first',
        'Invitations to Exclusive Reader Events',
        'Personalized collectible bookmarks',
        'Surprise Reader Rewards',
        'Priority Customer Support',

      ]
    }
  ];


  return (
    <div className={styles.pageContainer}>
      {/* Page Header */}
      <section className={`${styles.header} container`}>
        <span className={styles.pretitle}>INVEST IN MINDSET</span>
        <h1 className={styles.title}>Choose Your Reading Velocity

        </h1>
        <p className={styles.subtitle}>
          Ditch the pixels. Get physical copies delivered directly to you. Upgrade, downgrade, or cancel at any time. Subscribe to a Reading Lifestyle, Not Just Books.
        </p>
      </section>

      {/* Plans Grid */}
      <section className="container">
        <div className={styles.grid}>
          {plans.map((plan) => (
            <div
              key={plan.id}
              className={`${styles.card} ${plan.isPopular ? styles.popularCard : ''}`}
              style={{ '--plan-color': plan.color }}
            >
              {plan.isPopular && <div className={styles.popularBadge}>Most Popular</div>}

              <div className={styles.cardHeader}>
                <span className={styles.planBadge}>{plan.badge}</span>
                <h3 className={styles.planName}>{plan.name}</h3>
                <p className={styles.planTagline}>{plan.tagline}</p>
                <div className={styles.priceRow}>
                  <span className={styles.priceVal}>{plan.price}</span>
                  <span className={styles.pricePeriod}>/ {plan.period}</span>
                </div>
              </div>

              <div className={styles.cardSpecs}>
                <div className={styles.specItem}>
                  <span className={styles.specIcon}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path></svg>
                  </span>
                  <span>{plan.booksPerYear}</span>
                </div>
                <div className={styles.specItem}>
                  <span className={styles.specIcon}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
                  </span>
                  <span>{plan.activeBooks}</span>
                </div>
                <div className={styles.specItem}>
                  <span className={styles.specIcon}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
                  </span>
                  <span>{plan.loanPeriod}</span>
                </div>
              </div>

              <div className={styles.divider}></div>

              <ul className={styles.perksList}>
                {plan.perks.map((perk, i) => (
                  <li key={i}>
                    <span className={styles.checkIcon}>
                      <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                    </span>
                    <span>{perk}</span>
                  </li>
                ))}
              </ul>

              <a
                href={plan.paystackUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={`btn-gold ${styles.subscribeBtn} ${!plan.isPopular ? styles.outlineBtn : ''}`}
                style={{
                  background: plan.isPopular ? 'var(--gold-gradient)' : 'transparent',
                  color: plan.isPopular ? '#000' : '#fff',
                  border: plan.isPopular ? 'none' : '1px solid #FF9900',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  textDecoration: 'none'
                }}
              >
                Subscribe via Paystack
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Comparison Matrix Table */}
      <section className={`${styles.comparisonSection} container`}>
        <h2 className={styles.sectionTitle}>Compare Membership Details</h2>
        <p style={{ textAlign: 'center', color: 'var(--text-muted)', fontSize: '14px', marginBottom: '32px' }}>
          An in-depth breakdown of features, limits, and exclusive subscription perks
        </p>
        <div className={styles.tableWrapper}>
          <table className={styles.comparisonTable}>
            <thead>
              <tr>
                <th className={styles.alignLeft}>Features</th>
                <th>Bookmark (Starter)</th>
                <th>Chapter (Pro)</th>
                <th>Library (Premium)</th>
              </tr>
            </thead>
            <tbody>
              {/* Group 1: Core Access Limits */}
              <tr className={styles.tableGroupHeader}>
                <td colSpan="4">Core Access Limits</td>
              </tr>
              <tr>
                <td className={styles.alignLeft}>Books / year</td>
                <td>3 books</td>
                <td>6 books</td>
                <td className={styles.highlightText}>Unlimited</td>
              </tr>
              <tr>
                <td className={styles.alignLeft}>Active borrowed books</td>
                <td>1 book</td>
                <td>1 book</td>
                <td className={styles.highlightText}>1 book</td>
              </tr>
              <tr>
                <td className={styles.alignLeft}>Loan period</td>
                <td>Unlimited</td>
                <td>Unlimited</td>
                <td className={styles.highlightText}>Unlimited</td>
              </tr>

              {/* Group 2: Deliverables & Perks */}
              <tr className={styles.tableGroupHeader}>
                <td colSpan="4">Deliverables & Benefits</td>
              </tr>
              <tr>
                <td className={styles.alignLeft}>Book Recommendations</td>
                <td>Basic</td>
                <td>Personalized</td>
                <td className={styles.highlightText}>Premium </td>
              </tr>
              <tr>
                <td className={styles.alignLeft}>Collectible Bookmarks</td>
                <td>
                  <span className={styles.redCross}>
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                  </span>
                </td>
                <td>
                  <span className={styles.redCross}>
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                  </span>
                </td>
                <td className={styles.highlightText}>
                  <span className={styles.goldCheck}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                  </span>
                </td>
              </tr>
              <tr>
                <td className={styles.alignLeft}>Wishlist</td>
                <td>
                  <span className={styles.goldCheck}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                  </span>
                </td>
                <td>
                  <span className={styles.goldCheck}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                  </span>
                </td>
                <td>
                  <span className={styles.goldCheck}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                  </span>
                </td>
              </tr>

              {/* Group 3: Community & Logistics */}
              <tr className={styles.tableGroupHeader}>
                <td colSpan="4">Community & Logistics</td>
              </tr>
              <tr>
                <td className={styles.alignLeft}>Logistics & Delivery</td>
                <td>
                  <span className={styles.redCross}>
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                  </span>
                </td>
                <td>
                  <span className={styles.redCross}>
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                  </span>
                </td>
                <td className={styles.highlightText}>Discounted</td>
              </tr>
              <tr>
                <td className={styles.alignLeft}>Members-only Book Club</td>
                <td>
                  <span className={styles.redCross}>
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                  </span>
                </td>
                <td>
                  <span className={styles.goldCheck}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                  </span>
                </td>
                <td>
                  <span className={styles.goldCheck}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                  </span>
                </td>
              </tr>
              <tr>
                <td className={styles.alignLeft}>Priority Waiting Lists</td>
                <td>
                  <span className={styles.redCross}>
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                  </span>
                </td>
                <td>
                  <span className={styles.goldCheck}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                  </span>
                </td>
                <td>
                  <span className={styles.goldCheck}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

    </div>
  );
}
