'use client'

import { useEffect, useRef } from 'react'
import styles from './ScrollSection.module.css'

export default function ScrollSection({ 
  year, 
  narrative, 
  isActive, 
  mood = 'neutral',
  children 
}) {
  const sectionRef = useRef(null)

  const moodStyles = {
    calm: styles.moodCalm,
    warning: styles.moodWarning,
    danger: styles.moodDanger,
    neutral: styles.moodNeutral,
  }

  return (
    <section 
      ref={sectionRef}
      className={`${styles.section} ${moodStyles[mood]} ${isActive ? styles.active : ''}`}
    >
      <div className={styles.content}>
        <div className={styles.yearBadge}>
          <span className={styles.year}>{year}</span>
        </div>
        
        <p className={styles.narrative}>{narrative}</p>
        
        {children && (
          <div className={styles.visual}>
            {children}
          </div>
        )}
      </div>
    </section>
  )
}
