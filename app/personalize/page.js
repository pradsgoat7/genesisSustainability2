'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import styles from './page.module.css'

const interestOptions = [
  { id: 'heat', label: 'Heat & Health', icon: '🌡️', description: 'Extreme temperatures & health impacts' },
  { id: 'monsoon', label: 'Monsoons & Flooding', icon: '🌧️', description: 'Rainfall patterns & urban flooding' },
  { id: 'coastal', label: 'Coastal Areas', icon: '🌊', description: 'Sea level rise & coastal erosion' },
  { id: 'water', label: 'Water Supply', icon: '💧', description: 'Drinking water & reservoir levels' },
  { id: 'birds', label: 'Local Birds', icon: '🐦', description: 'Bird species & habitat changes' },
  { id: 'commute', label: 'Daily Commute', icon: '🚆', description: 'Transport disruptions & heat stress' },
]

export default function PersonalizePage() {
  const router = useRouter()
  const [selectedInterest, setSelectedInterest] = useState(null)
  const [isLoading, setIsLoading] = useState(false)

  const handleGenerate = () => {
    if (!selectedInterest) return
    
    setIsLoading(true)
    // Simulate loading, then navigate
    setTimeout(() => {
      router.push(`/story?interest=${selectedInterest}`)
    }, 1000)
  }

  return (
    <main className={styles.main}>
      <div className={styles.container}>
        {/* Header */}
        <div className={styles.header}>
          <span className={styles.location}>📍 Mumbai, India</span>
          <h1 className={styles.title}>What do you care about?</h1>
          <p className={styles.subtitle}>
            Choose a topic to see how climate change will affect it over the next 20 years.
          </p>
        </div>

        {/* Interest Grid */}
        <div className={styles.grid}>
          {interestOptions.map((option) => (
            <button
              key={option.id}
              className={`${styles.card} ${selectedInterest === option.id ? styles.selected : ''}`}
              onClick={() => setSelectedInterest(option.id)}
            >
              <span className={styles.cardIcon}>{option.icon}</span>
              <h3 className={styles.cardTitle}>{option.label}</h3>
              <p className={styles.cardDesc}>{option.description}</p>
              {selectedInterest === option.id && (
                <div className={styles.checkmark}>✓</div>
              )}
            </button>
          ))}
        </div>

        {/* Generate Button */}
        <div className={styles.actions}>
          <button
            className={`${styles.generateBtn} ${selectedInterest ? styles.active : ''}`}
            onClick={handleGenerate}
            disabled={!selectedInterest || isLoading}
          >
            {isLoading ? (
              <span className={styles.loading}>
                <span className={styles.spinner}></span>
                Generating your story...
              </span>
            ) : (
              'Generate My Climate Story'
            )}
          </button>
          
          {!selectedInterest && (
            <p className={styles.hint}>Select a topic above to continue</p>
          )}
        </div>
      </div>
    </main>
  )
}
