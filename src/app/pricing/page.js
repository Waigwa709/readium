'use client';
import React, { useState } from 'react';
import styles from './page.module.css';

export default function PricingPage() {
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [checkoutStep, setCheckoutStep] = useState('select'); // 'select', 'modal', 'processing', 'success'
  const [paymentMethod, setPaymentMethod] = useState('card'); // 'card', 'bank', 'ussd'

  const plans = [
    {
      id: 'bookmark',
      name: 'Bookmark Plan',
      tagline: 'For casual readers starting their physical journey',
      price: 'KSh 2,500',
      period: 'month',
      color: '#FFCC00',
      badge: 'Starter',
      booksPerYear: '3 physical books / year',
      activeBooks: '1 active borrowed book at a time',
      loanPeriod: '14-day borrowing period',
      renewals: 'No renewals',
      perks: [
        'Welcome bookmark gift',
        'Digital reading profile & history',
        'Reading reminders & wishlist',
        'Access to monthly reading newsletter',
        'Basic book recommendations'
      ]
    },
    {
      id: 'chapter',
      name: 'Chapter Plan',
      tagline: 'For consistent readers building a reading habit',
      price: 'KSh 3,500',
      period: 'month',
      color: '#D4AF37',
      badge: 'Pro Choice',
      isPopular: true,
      booksPerYear: '6 physical books / year',
      activeBooks: '2 active borrowed books at a time',
      loanPeriod: '21-day borrowing period',
      renewals: '1 renewal allowed',
      perks: [
        'Premium bookmark collection',
        'Physical reading journal + protective sleeve',
        'Members-only book club',
        'Free delivery discount code',
        'Priority reservations & save authors',
        'Earn reading badges & loyalty points',
        'Add 1 family member profile'
      ]
    },
    {
      id: 'library',
      name: 'Library Plan',
      tagline: 'For serious readers, families, and organizations',
      price: 'KSh 4,500',
      period: 'month',
      color: '#FF9900',
      badge: 'Premium VIP',
      booksPerYear: 'Unlimited borrowing (Fair use applies)',
      activeBooks: '5 active borrowed books at a time',
      loanPeriod: '30-day borrowing period',
      renewals: 'Unlimited renewals',
      perks: [
        'New releases & bestsellers first',
        'Monthly surprise book subscription box',
        'Personalized collectible bookmark every month',
        'Free delivery and doorstep pickup',
        'AI-powered recommendations & premium support',
        'VIP author events & private club access',
        'Add up to 5 family member accounts'
      ]
    }
  ];

  const handleSubscribe = (plan) => {
    setSelectedPlan(plan);
    setCheckoutStep('modal');
  };

  const handlePayment = (e) => {
    e.preventDefault();
    setCheckoutStep('processing');
    setTimeout(() => {
      setCheckoutStep('success');
    }, 2000);
  };

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
                <div className={styles.specItem}>
                  <span className={styles.specIcon}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="23 4 23 10 17 10"></polyline><polyline points="1 20 1 14 7 14"></polyline><path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"></path></svg>
                  </span>
                  <span style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
                    {plan.id === 'bookmark' ? (
                      <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#ef4444" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                    ) : (
                      <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}><polyline points="20 6 9 17 4 12"></polyline></svg>
                    )}
                    {plan.renewals}
                  </span>
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

              <button
                onClick={() => handleSubscribe(plan)}
                className={`btn-gold ${styles.subscribeBtn}`}
                style={{ background: plan.isPopular ? 'var(--gold-gradient)' : 'transparent', color: plan.isPopular ? '#000' : '#fff', border: plan.isPopular ? 'none' : '1px solid var(--border-color)' }}
              >
                Subscribe via Paystack
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Comparison Matrix Table */}
      <section className={`${styles.comparisonSection} container`}>
        <h2 className={styles.sectionTitle}>Compare Membership Details</h2>
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
              <tr>
                <td className={styles.alignLeft}>Books / year</td>
                <td>3 books</td>
                <td>6 books</td>
                <td className={styles.highlightText}>Unlimited</td>
              </tr>
              <tr>
                <td className={styles.alignLeft}>Active borrowed books</td>
                <td>1 at a time</td>
                <td>2 at a time</td>
                <td className={styles.highlightText}>5 at a time</td>
              </tr>
              <tr>
                <td className={styles.alignLeft}>Loan period</td>
                <td>14 days</td>
                <td>21 days</td>
                <td>30 days</td>
              </tr>
              <tr>
                <td className={styles.alignLeft}>Renewals</td>
                <td>
                  <span style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', justifyContent: 'center' }}>
                    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#ef4444" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                    None
                  </span>
                </td>
                <td>1 renewal</td>
                <td className={styles.highlightText}>Unlimited</td>
              </tr>
              <tr>
                <td className={styles.alignLeft}>Wishlist</td>
                <td><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" style={{ display: 'inline-block' }}><polyline points="20 6 9 17 4 12"></polyline></svg></td>
                <td><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" style={{ display: 'inline-block' }}><polyline points="20 6 9 17 4 12"></polyline></svg></td>
                <td><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" style={{ display: 'inline-block' }}><polyline points="20 6 9 17 4 12"></polyline></svg></td>
              </tr>
              <tr>
                <td className={styles.alignLeft}>Book Recommendations</td>
                <td>Basic</td>
                <td>Personalized</td>
                <td className={styles.highlightText}>AI-Powered</td>
              </tr>
              <tr>
                <td className={styles.alignLeft}>Logistics & Delivery</td>
                <td>Paid</td>
                <td>Discounted</td>
                <td className={styles.highlightText}>Free Delivery & Pickup</td>
              </tr>
              <tr>
                <td className={styles.alignLeft}>Collectible Bookmarks</td>
                <td>1/year (Standard)</td>
                <td>3/year (Personalized)</td>
                <td className={styles.highlightText}>Monthly Design</td>
              </tr>
              <tr>
                <td className={styles.alignLeft}>Reading Journal</td>
                <td>Digital App</td>
                <td>Digital + Notebook</td>
                <td className={styles.highlightText}>Premium Journal Box</td>
              </tr>
              <tr>
                <td className={styles.alignLeft}>Members-only Book Club</td>
                <td>
                  <span style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', justifyContent: 'center' }}>
                    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#ef4444" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                    None
                  </span>
                </td>
                <td>
                  <span style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', justifyContent: 'center' }}>
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                    Members Club
                  </span>
                </td>
                <td className={styles.highlightText}>VIP Events & Author Chats</td>
              </tr>
              <tr>
                <td className={styles.alignLeft}>Priority Waiting Lists</td>
                <td>
                  <span style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', justifyContent: 'center' }}>
                    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#ef4444" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                    None
                  </span>
                </td>
                <td>
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" style={{ display: 'inline-block' }}><polyline points="20 6 9 17 4 12"></polyline></svg>
                </td>
                <td className={styles.highlightText}>
                  <span style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', justifyContent: 'center' }}>
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                    First Priority
                  </span>
                </td>
              </tr>
              <tr>
                <td className={styles.alignLeft}>Monthly Surprise Box</td>
                <td><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#ef4444" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" style={{ display: 'inline-block' }}><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg></td>
                <td><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#ef4444" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" style={{ display: 'inline-block' }}><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg></td>
                <td className={styles.highlightText}>
                  <span style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', justifyContent: 'center' }}>
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                    Included
                  </span>
                </td>
              </tr>
              <tr>
                <td className={styles.alignLeft}>Family accounts</td>
                <td><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#ef4444" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" style={{ display: 'inline-block' }}><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg></td>
                <td>1 member</td>
                <td>5 members</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Paystack Checkout Modal Mockup */}
      {checkoutStep !== 'select' && (
        <div className={styles.modalOverlay}>
          <div className={styles.modalContent}>
            {/* Modal Header */}
            <div className={styles.modalHeader}>
              <div className={styles.paystackLogo}>
                <span className={styles.pstkGreen}>pay</span>stack
              </div>
              <button
                className={styles.closeBtn}
                onClick={() => setCheckoutStep('select')}
              >
                ✕
              </button>
            </div>

            {checkoutStep === 'modal' && (
              <form onSubmit={handlePayment} className={styles.checkoutForm}>
                <div className={styles.paymentSummary}>
                  <div>
                    <span className={styles.summaryLabel}>Subscribing to</span>
                    <h4>{selectedPlan.name}</h4>
                  </div>
                  <div className={styles.summaryPrice}>
                    <h4>{selectedPlan.price}</h4>
                    <span>/ month</span>
                  </div>
                </div>

                {/* Tabs */}
                <div className={styles.tabHeader}>
                  <button
                    type="button"
                    className={`${styles.tabBtn} ${paymentMethod === 'card' ? styles.activeTab : ''}`}
                    onClick={() => setPaymentMethod('card')}
                  >
                    <span style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="1" y="4" width="22" height="16" rx="2" ry="2"></rect><line x1="1" y1="10" x2="23" y2="10"></line></svg>
                      Card
                    </span>
                  </button>
                  <button
                    type="button"
                    className={`${styles.tabBtn} ${paymentMethod === 'bank' ? styles.activeTab : ''}`}
                    onClick={() => setPaymentMethod('bank')}
                  >
                    <span style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 22v-4h18v4H3zM12 2L2 7h20L12 2zM5 17v-7h2v7H5zm5 0v-7h2v7h-2zm5 0v-7h2v7h-2z"></path></svg>
                      Bank
                    </span>
                  </button>
                  <button
                    type="button"
                    className={`${styles.tabBtn} ${paymentMethod === 'ussd' ? styles.activeTab : ''}`}
                    onClick={() => setPaymentMethod('ussd')}
                  >
                    <span style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="18" height="18" rx="2"></rect><line x1="9" y1="9" x2="9.01" y2="9"></line><line x1="15" y1="9" x2="15.01" y2="9"></line><line x1="9" y1="15" x2="9.01" y2="15"></line><line x1="15" y1="15" x2="15.01" y2="15"></line></svg>
                      USSD
                    </span>
                  </button>
                </div>

                {/* Card input */}
                {paymentMethod === 'card' && (
                  <div className={styles.formBody}>
                    <div className={styles.inputGroup}>
                      <label>Email Address</label>
                      <input type="email" placeholder="stephen@kendrickdesigns.com" required defaultValue="stephen@kendrickdesigns.com" />
                    </div>
                    <div className={styles.inputGroup}>
                      <label>Card Number</label>
                      <input type="text" placeholder="4000 1234 5678 9010" required />
                    </div>
                    <div className={styles.formRow}>
                      <div className={styles.inputGroup}>
                        <label>Expiry Date</label>
                        <input type="text" placeholder="MM / YY" required />
                      </div>
                      <div className={styles.inputGroup}>
                        <label>CVV</label>
                        <input type="password" placeholder="***" maxLength="3" required />
                      </div>
                    </div>
                  </div>
                )}

                {/* Bank transfer input */}
                {paymentMethod === 'bank' && (
                  <div className={styles.formBody}>
                    <div className={styles.bankInstruction}>
                      <p>Transfer the sum of <strong>{selectedPlan.price}</strong> to the account details below:</p>
                      <div className={styles.bankDetails}>
                        <div>
                          <span>Bank Name</span>
                          <strong>Stanbic Bank Kenya</strong>
                        </div>
                        <div>
                          <span>Account Number</span>
                          <strong>0100 2938 1234 00</strong>
                        </div>
                        <div>
                          <span>Account Name</span>
                          <strong>Readium SaaS Limited</strong>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* USSD input */}
                {paymentMethod === 'ussd' && (
                  <div className={styles.formBody}>
                    <div className={styles.ussdInstruction}>
                      <p>Select your bank to dial the code and complete payment:</p>
                      <select className={styles.selectInput}>
                        <option>GTBank (*737#)</option>
                        <option>Access Bank (*901#)</option>
                        <option>Zenith Bank (*966#)</option>
                        <option>M-Pesa Express (*334#)</option>
                      </select>
                      <div className={styles.ussdDisplay}>
                        Dial <strong>*334*1*1#</strong> on your registered phone.
                      </div>
                    </div>
                  </div>
                )}

                <button type="submit" className={`btn-gold ${styles.payBtn}`}>
                  Pay {selectedPlan.price}
                </button>
                <p className={styles.securedText}>
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" style={{ marginRight: '6px', verticalAlign: 'middle', opacity: 0.8 }}><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
                  Secured by Paystack
                </p>
              </form>
            )}

            {/* Processing State */}
            {checkoutStep === 'processing' && (
              <div className={styles.loaderContent}>
                <div className={styles.spinner}></div>
                <h3>Processing Payment...</h3>
                <p>Verifying transaction credentials securely.</p>
              </div>
            )}

            {/* Success State */}
            {checkoutStep === 'success' && (
              <div className={styles.successContent}>
                <div className={styles.successIcon}>
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" style={{ margin: 'auto' }}><polyline points="20 6 9 17 4 12"></polyline></svg>
                </div>
                <h3>Subscription Successful!</h3>
                <p>Welcome to the Readium Lifestyle. An email receipt has been dispatched. Your welcome package and first books will arrive shortly.</p>
                <button
                  className="btn-gold"
                  onClick={() => setCheckoutStep('select')}
                  style={{ marginTop: '24px' }}
                >
                  Start Reading
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
