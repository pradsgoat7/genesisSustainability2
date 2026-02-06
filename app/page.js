'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'
import styles from './page.module.css'
import LocationImpact from '@/components/LocationImpact' // ✅ ADD THIS

export default function LandingPage() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
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
          <p className={styles.tagline}>Mumbai, 2026</p>

          <h2 className={styles.title}>
            Climate change isn't global.
            <br />
            <span className={styles.highlight}>It's personal.</span>
          </h2>

          <p className={styles.subtitle}>
            See how the next 20 years will change the city you call home.
            <br />
            A data-driven story made just for you.
            <br />
            EchoEarth transforms complex sustainability data into relatable stories
            that show how climate change affects real lives — including yours.
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

      {/* Why EcoEarth Section */}
      <section className="why-ecoearth">
        <h2>Why EcoEarth?</h2>

        <div className="why-cards">
          <div className="why-card">
            <h3><b>🌍 The Problem</b></h3>
            <p>
              Climate data exists everywhere, but charts and numbers fail to
              create emotional connection or inspire action.
            </p>
          </div>

          <div className="why-card">
            <h3><b>The Gap</b></h3>
            <p>
              People don’t act on information alone. They act when they feel
              personally affected and emotionally involved.
            </p>
          </div>

          <div className="why-card">
            <h3><b>🌱 Our Approach</b></h3>
            <p>
              EcoEarth transforms raw sustainability data into relatable,
              visual stories that people can understand and remember.
            </p>
          </div>
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

      {/* ✅ LOCATION IMPACT SECTION (NOW ON PAGE 1) */}
      <LocationImpact />
    </main>
  )
}
