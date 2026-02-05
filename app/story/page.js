'use client'

import { useEffect, useRef, useState, Suspense } from 'react'
import { useSearchParams } from 'next/navigation'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { getClimateData } from '@/data/climateData'
import ClimateChart from '@/components/ClimateChart'
import styles from './page.module.css'

gsap.registerPlugin(ScrollTrigger)

function StoryContent() {
  const searchParams = useSearchParams()
  const interest = searchParams.get('interest') || 'heat'
  const data = getClimateData(interest)
  
  const [activeSection, setActiveSection] = useState(0)
  const containerRef = useRef(null)
  const sectionsRef = useRef([])

  const sections = [
    { year: 'Today', key: 'today', mood: 'calm' },
    { year: '2030', key: '2030', mood: 'neutral' },
    { year: '2035', key: '2035', mood: 'warning' },
    { year: '2045', key: '2045', mood: 'danger' },
  ]

  useEffect(() => {
    const ctx = gsap.context(() => {
      sectionsRef.current.forEach((section, index) => {
        if (!section) return

        ScrollTrigger.create({
          trigger: section,
          start: 'top center',
          end: 'bottom center',
          onEnter: () => setActiveSection(index),
          onEnterBack: () => setActiveSection(index),
        })

        // Animate content on scroll
        const content = section.querySelector(`.${styles.sectionContent}`)
        if (content) {
          gsap.fromTo(content,
            { opacity: 0, y: 50 },
            {
              opacity: 1,
              y: 0,
              duration: 1,
              ease: 'power3.out',
              scrollTrigger: {
                trigger: section,
                start: 'top 70%',
                end: 'top 30%',
                toggleActions: 'play none none reverse',
              }
            }
          )
        }
      })
    }, containerRef)

    return () => ctx.revert()
  }, [])

  const getMoodColor = (mood) => {
    switch (mood) {
      case 'calm': return '#22d3ee'
      case 'neutral': return '#94a3b8'
      case 'warning': return '#f59e0b'
      case 'danger': return '#ef4444'
      default: return '#ffffff'
    }
  }

  const getChartColor = (index) => {
    if (index <= 1) return 'blue'
    if (index === 2) return 'orange'
    return 'red'
  }

  return (
    <main ref={containerRef} className={styles.main}>
      {/* Progress Indicator */}
      <div className={styles.progressBar}>
        {sections.map((section, index) => (
          <div 
            key={section.year}
            className={`${styles.progressDot} ${activeSection >= index ? styles.active : ''}`}
            style={{ '--dot-color': getMoodColor(section.mood) }}
          >
            <span className={styles.progressLabel}>{section.year}</span>
          </div>
        ))}
      </div>

      {/* Header */}
      <header className={styles.header}>
        <div className={styles.headerContent}>
          <span className={styles.topic}>{data.title}</span>
          <h1 className={styles.title}>Mumbai's Climate Future</h1>
          <p className={styles.subtitle}>Scroll to journey through time</p>
        </div>
        <div className={styles.scrollHint}>
          <span>↓</span>
        </div>
      </header>

      {/* Story Sections */}
      {sections.map((section, index) => (
        <section
          key={section.year}
          ref={(el) => (sectionsRef.current[index] = el)}
          className={`${styles.section} ${styles[`mood${section.mood.charAt(0).toUpperCase() + section.mood.slice(1)}`]}`}
        >
          <div className={styles.sectionContent}>
            <div 
              className={styles.yearBadge}
              style={{ '--badge-color': getMoodColor(section.mood) }}
            >
              {section.year}
            </div>
            
            <p className={styles.narrative}>
              {data.narrative[section.key]}
            </p>

            {/* Show chart on last section */}
            {index === sections.length - 1 && (
              <div className={styles.chartContainer}>
                <ClimateChart 
                  data={data.chartData} 
                  colorScheme={getChartColor(index)}
                />
              </div>
            )}

            {/* Show stat highlight on middle sections */}
            {index > 0 && index < sections.length - 1 && (
              <div className={styles.statHighlight}>
                <span className={styles.statNumber} style={{ color: getMoodColor(section.mood) }}>
                  {data.chartData.values[index]}
                </span>
                <span className={styles.statLabel}>{data.chartData.label}</span>
              </div>
            )}
          </div>
        </section>
      ))}

      {/* Conclusion */}
      <section className={styles.conclusion}>
        <div className={styles.conclusionContent}>
          <h2>This is Mumbai's climate story.</h2>
          <p>The data is real. The future is not fixed.</p>
          
          <div className={styles.actions}>
            <a href="/personalize" className={styles.btnSecondary}>
              Explore Another Topic
            </a>
            <button className={styles.btnPrimary} onClick={() => {
              if (navigator.share) {
                navigator.share({
                  title: 'My Mumbai Climate Story',
                  text: `By 2045, ${data.title.toLowerCase()} in Mumbai will be drastically different.`,
                  url: window.location.href,
                })
              } else {
                navigator.clipboard.writeText(window.location.href)
                alert('Link copied to clipboard!')
              }
            }}>
              Share My Story
            </button>
          </div>

          <p className={styles.sources}>
            Data sources: IMD, IPCC AR6, BMC Reports, NASA Earth Observations
          </p>
        </div>
      </section>
    </main>
  )
}

export default function StoryPage() {
  return (
    <Suspense fallback={
      <div className={styles.loading}>
        <div className={styles.spinner}></div>
        <p>Loading your climate story...</p>
      </div>
    }>
      <StoryContent />
    </Suspense>
  )
}
