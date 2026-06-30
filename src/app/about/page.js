'use client';
import React from 'react';
import Link from 'next/link';
import styles from './page.module.css';

export default function AboutPage() {
  const manifestoItems = [
    {
      number: "01",
      title: "Curation Over Noise",
      description: "We eliminate selection fatigue. Our catalog is strictly vetted by industry leaders so every loan delivers high-value, actionable insights."
    },
    {
      number: "02",
      title: "Tactile Luxury",
      description: "A physical book is a luxury experience. Every book is kept in pristine condition and includes custom design bookmarks to enhance your bookshelf."
    },
    {
      number: "03",
      title: "Circular Sharing",
      description: "Sharing is sustainable. By establishing active local borrowing loops, we reduce printing resource waste and foster collaborative knowledge sharing."
    },
    {
      number: "04",
      title: "Digital Frictionlessness",
      description: "Experience physical reading with digital convenience. Search, check availability, read synopses, and coordinate direct doorstep delivery with a simple click."
    }
  ];

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

  return (
    <div className={styles.pageContainer}>

      {/* 1. Ambient Hero Header */}
      <section className={`${styles.aboutHero} fade-up`}>
        <div className="container">
          <span className={`${styles.pretitle} fade-up delay-100`}>OUR MISSION & VISION</span>
          <h1 className={`${styles.heroTitle} fade-up delay-200`}>Restoring the physical reading lifestyle.</h1>
          <p className={`${styles.heroSubtitle} fade-up delay-300`}>
            In a hyper-digital world of endless notifications, we believe the physical page is the ultimate anchor for focus, deep comprehension, and learning.
          </p>
        </div>
      </section>

      <div className="container">
        {/* 2. Interactive Statistics Row */}
        <section className={styles.statsGrid}>
          <div className={`${styles.statCard} reveal reveal-delay-100`}>
            <span className={styles.statNumber}>54</span>
            <span className={styles.statLabel}>Vetted Volumes</span>
            <span className={styles.statDesc}>No clutter. Only highly reviewed books across tech, business, and mindset.</span>
          </div>
          <div className={`${styles.statCard} reveal reveal-delay-200`}>
            <span className={styles.statNumber}>100%</span>
            <span className={styles.statLabel}>Tactile Quality</span>
            <span className={styles.statDesc}>Pristine books complete with premium bookmarks delivered to your hands.</span>
          </div>
          <div className={`${styles.statCard} reveal reveal-delay-300`}>
            <span className={styles.statNumber}>Seamless</span>
            <span className={styles.statLabel}>Doorstep Logistics</span>
            <span className={styles.statDesc}>Free local deliveries and on-demand pickups scheduled directly around your timing.</span>
          </div>
        </section>

        {/* 3. Narrative Section */}
        <section className={styles.storySection}>
          <div className={styles.storyGrid}>
            <div className={`${styles.storyImageContainer} reveal-left reveal-delay-100`}>
              <img src="/Readium-about-page-Image.webp" alt="Tactile physical reading experience" className={styles.storyImage} />
            </div>

            <div className={`${styles.storyBody} reveal-right reveal-delay-200`}>
              <span className={styles.pretitle}>THE NARRATIVE</span>
              <h2>The Story of Readium</h2>
              <p className={styles.paragraph}>
                Readium was born out of a simple observation: while e-readers and digital audiobooks offer convenience, they lack the tactile connection, focus, and permanence of physical books. The smell of ink, the texture of paper, the satisfying weight in your hand, and the progressive turn of pages are critical cues that help our brains slow down, focus, and retain knowledge.
              </p>
              <p className={styles.paragraph}>
                But purchasing every book leads to clutter, and public libraries are often out of stock. We decided to bridge this gap by building Readium: a premium, door-to-door book lending subscription that combines physical reading with digital on-demand ease.
              </p>
              <div className={styles.storyAction}>
                <Link href="/library" className="btn-gold">
                  Browse Curated Catalog <span className={styles.storyArrow}>→</span>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* 4. Manifesto Grid Section */}
        <section className={`${styles.manifestoSection} reveal`}>
          <span className={styles.pretitle}>THE MANIFESTO</span>
          <h2>Our Core Principles</h2>
          <p className={styles.sectionSubtitle}>
            Our principles guide how we curate, manage logistics, and build active reading communities.
          </p>

          <div className={styles.manifestoGrid}>
            {manifestoItems.map((item, index) => (
              <div key={index} className={`${styles.manifestoCard} reveal reveal-delay-${(index + 1) * 100}`}>
                <span className={styles.itemNumber}>{item.number}</span>
                <div className={styles.manifestoContent}>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 4.5 Testimonials Section */}
        <section className={`${styles.testimonialsSection} reveal`}>
          <span className={styles.pretitle}>TESTIMONIALS</span>
          <h2>What Our Customers Say</h2>
          <p className={styles.sectionSubtitle}>
            Don't just take our word for it - hear from the amazing people who make our first year so special!
          </p>

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

        {/* 5. Bottom Call to Action */}
        <section className={styles.ctaSection}>
          <div className={`${styles.ctaBanner} reveal-scale`}>
            <div className={styles.ctaGlow}></div>
            <div className={styles.ctaContent}>
              <h2>Ready to restore your focus?</h2>
              <p>Select your subscription tier, borrow your first volume, and let us bring the books to your door.</p>
              <div className={styles.ctaButtons}>
                <Link href="/pricing" className="btn-gold" style={{ padding: '14px 32px', fontSize: '14px' }}>
                  View Lending Plans <span className={styles.ctaArrow}>→</span>
                </Link>
                <Link href="/library" className="btn-outline" style={{ padding: '14px 32px', fontSize: '14px' }}>
                  Browse Curated Catalog
                </Link>
              </div>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}
