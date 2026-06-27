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
      name: '📖 Bookmark Plan',
      tagline: 'For casual readers starting their physical journey',
      price: 'KSh 2,500',
      period: 'month',
      color: '#FFCC00',
      badge: 'Starter',
      booksPerYear: '3 physical books / year',
      activeBooks: '1 active borrowed book at a time',
      loanPeriod: '14-day borrowing period',
      renewals: '❌ No renewals',
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
      name: '📚 Chapter Plan',
      tagline: 'For consistent readers building a reading habit',
      price: 'KSh 3,500',
      period: 'month',
      color: '#D4AF37',
      badge: 'Pro Choice',
      isPopular: true,
      booksPerYear: '6 physical books / year',
      activeBooks: '2 active borrowed books at a time',
      loanPeriod: '21-day borrowing period',
      renewals: '✓ 1 renewal allowed',
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
      name: '🏛️ Library Plan',
      tagline: 'For serious readers, families, and organizations',
      price: 'KSh 4,500',
      period: 'month',
      color: '#FF9900',
      badge: 'Premium VIP',
      booksPerYear: 'Unlimited borrowing (Fair use applies)',
      activeBooks: '5 active borrowed books at a time',
      loanPeriod: '30-day borrowing period',
      renewals: '✓ Unlimited renewals',
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
        <h1 className={styles.title}>Flexible Reading Packages</h1>
        <p className={styles.subtitle}>
          Ditch the pixels. Get physical copies delivered directly to you. Upgrade, downgrade, or cancel at any time.
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
                  <span className={styles.specIcon}>📚</span>
                  <span>{plan.booksPerYear}</span>
                </div>
                <div className={styles.specItem}>
                  <span className={styles.specIcon}>⏱️</span>
                  <span>{plan.activeBooks}</span>
                </div>
                <div className={styles.specItem}>
                  <span className={styles.specIcon}>📅</span>
                  <span>{plan.loanPeriod}</span>
                </div>
                <div className={styles.specItem}>
                  <span className={styles.specIcon}>🔄</span>
                  <span>{plan.renewals}</span>
                </div>
              </div>

              <div className={styles.divider}></div>

              <ul className={styles.perksList}>
                {plan.perks.map((perk, i) => (
                  <li key={i}>
                    <span className={styles.checkIcon}>✓</span>
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
                <td>❌ None</td>
                <td>1 renewal</td>
                <td className={styles.highlightText}>Unlimited</td>
              </tr>
              <tr>
                <td className={styles.alignLeft}>Wishlist</td>
                <td>✓</td>
                <td>✓</td>
                <td>✓</td>
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
                <td>❌ None</td>
                <td>✓ Members Club</td>
                <td className={styles.highlightText}>VIP Events & Author Chats</td>
              </tr>
              <tr>
                <td className={styles.alignLeft}>Priority Waiting Lists</td>
                <td>❌ None</td>
                <td>✓</td>
                <td>✓ First Priority</td>
              </tr>
              <tr>
                <td className={styles.alignLeft}>Monthly Surprise Box</td>
                <td>❌</td>
                <td>❌</td>
                <td className={styles.highlightText}>✓ Included</td>
              </tr>
              <tr>
                <td className={styles.alignLeft}>Family accounts</td>
                <td>❌</td>
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
                    💳 Card
                  </button>
                  <button 
                    type="button" 
                    className={`${styles.tabBtn} ${paymentMethod === 'bank' ? styles.activeTab : ''}`}
                    onClick={() => setPaymentMethod('bank')}
                  >
                    🏦 Bank Transfer
                  </button>
                  <button 
                    type="button" 
                    className={`${styles.tabBtn} ${paymentMethod === 'ussd' ? styles.activeTab : ''}`}
                    onClick={() => setPaymentMethod('ussd')}
                  >
                    🔢 USSD
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
                <p className={styles.securedText}>🔒 Secured by Paystack</p>
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
                <div className={styles.successIcon}>✓</div>
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
