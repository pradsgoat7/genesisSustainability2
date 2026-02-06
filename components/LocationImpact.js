'use client'

import Image from 'next/image'
import styles from './LocationImpact.module.css'

const locations = [
  {
    name: "Marine Drive",
    image: "/images/marineDrive.jpg",
    description:
      "Marine Drive, Mumbai’s iconic coastal promenade, faces growing threats from rising sea levels and intensified storm surges. By the 2040s, frequent high-tide flooding could damage roads, sea walls, and surrounding infrastructure."
  },
  {
    name: "CSMT Area",
    image: "/images/CSMT02.webp",
    description:
      "The area surrounding Chhatrapati Shivaji Maharaj Terminus acts as an urban heat island. Climate change is expected to raise local temperatures by 3–4°C, while heavier monsoon rainfall increases waterlogging and disrupts rail operations."
  },
  {
    name: "Gateway of India",
    image: "/images/gateWayOfIndia.jpg",
    description:
      "Situated along the Arabian Sea, the Gateway of India is increasingly exposed to coastal erosion. Rising humidity, saline winds, and flooding accelerate the weathering of its historic basalt structure."
  },
  {
    name: "Mumbai Local Trains",
    image: "/images/mumbaiLocal3.jpg",
    description:
      "Mumbai’s local train network faces major climate risks as intense monsoons lead to frequent track flooding. Rising humidity and heat stress also pose serious health risks for millions of daily commuters."
  }
]

export default function LocationImpact() {
  return (
    <section className={styles.container}>
      <h2 className={styles.sectionTitle}>
        Mumbai’s Vulnerable Landmarks
      </h2>

      {locations.map((loc, index) => (
        <div key={loc.name} className={styles.locationRow}>
          <div className={styles.textContent}>
            <h3 className={styles.locationName}>{loc.name}</h3>
            <p className={styles.description}>{loc.description}</p>
          </div>

          <div className={styles.imageContent}>
            <div className={styles.imageWrapper}>
                {loc.image ? (
                    <Image
                    src={loc.image}
                    alt={loc.name}
                    fill
                    className={styles.image}
                    sizes="(max-width: 768px) 100vw, 50vw"
                    priority={index === 0}
                    />
                ) : (
                    <div className={styles.placeholder}>
                    Image coming soon
                    </div>
                )}
                </div>
          </div>
        </div>
      ))}
    </section>
  )
}