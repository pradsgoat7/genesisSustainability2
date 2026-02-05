'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'
import styles from './page.module.css'

export default function LandingPage() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Simple fade-in animation on load
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, 100)
    return () => clearTimeout(timer)
  }, [])

  return (
    <main className={styles.main}>
      {/* Background Animation */}
      <div className={styles.bgGradient}></div>
      
      {/* Hero Section */}
      <section className={`${styles.hero} ${isVisible ? styles.visible : ''}`}>
        <div className={styles.heroContent}>
          <p className={styles.tagline}>Mumbai, 2045</p>
          
          <h1 className={styles.title}>
            Climate change isn't global.
            <br />
            <span className={styles.highlight}>It's personal.</span>
          </h1>
          
          <p className={styles.subtitle}>
            See how the next 20 years will change the city you call home.
            <br />
            A data-driven story made just for you.
          </p>
          
          <Link href="/personalize" className={styles.ctaButton}>
            Start My Climate Story
          </Link>
        </div>

        <div className={styles.scrollIndicator}>
          <span>Scroll to explore</span>
          <div className={styles.scrollArrow}></div>
        </div>
      </section>

      {/* Preview Section */}
      <section className={styles.preview}>
        <div className={styles.previewContent}>
          <h2 className={styles.previewTitle}>What You'll Discover</h2>
          
          <div className={styles.previewCards}>
            <div className={styles.card}>
              <div className={styles.cardIcon}>🌡️</div>
              <h3>Rising Heat</h3>
              <p>How extreme temperatures will affect your daily life</p>
            </div>
            
            <div className={styles.card}>
              <div className={styles.cardIcon}>🌊</div>
              <h3>Changing Monsoons</h3>
              <p>What Mumbai's rainfall patterns will look like</p>
            </div>
            
            <div className={styles.card}>
              <div className={styles.cardIcon}>🏙️</div>
              <h3>Your Neighborhood</h3>
              <p>Specific impacts on places you know and love</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
