// Mumbai Climate Data - Hardcoded for hackathon
// Sources: IMD, IPCC, BMC reports

export const climateData = {
  heat: {
    title: "Heat & Health",
    current: {
      extremeHeatDays: 12,
      avgSummerTemp: 33,
      heatwaveEvents: 2,
    },
    projections: {
      2030: { extremeHeatDays: 24, avgSummerTemp: 34.5, heatwaveEvents: 5 },
      2035: { extremeHeatDays: 35, avgSummerTemp: 35.5, heatwaveEvents: 8 },
      2045: { extremeHeatDays: 47, avgSummerTemp: 37, heatwaveEvents: 12 },
    },
    narrative: {
      today: "Today, Mumbai experiences about 12 days above 40°C each year. The summer heat is intense, but manageable.",
      2030: "By 2030, extreme heat days will double. Your morning commute will feel different - more exhausting, more dangerous for outdoor workers.",
      2035: "In 2035, heat waves won't be news anymore - they'll be normal. Air conditioning will shift from luxury to necessity.",
      2045: "By 2045, Mumbai could see 47 days of extreme heat annually. The city you know will have fundamentally changed.",
    },
    chartData: {
      labels: ['2024', '2030', '2035', '2045'],
      values: [12, 24, 35, 47],
      label: 'Extreme Heat Days (>40°C)',
    }
  },

  monsoon: {
    title: "Monsoons & Flooding",
    current: {
      avgRainfall: 2400,
      floodEvents: 3,
      rainyDays: 80,
    },
    projections: {
      2030: { avgRainfall: 2600, floodEvents: 6, rainyDays: 70 },
      2035: { avgRainfall: 2750, floodEvents: 9, rainyDays: 62 },
      2045: { avgRainfall: 2900, floodEvents: 14, rainyDays: 55 },
    },
    narrative: {
      today: "Mumbai's monsoon is legendary - 80 days of rain, life-giving and chaotic. The 2005 floods are still in living memory.",
      2030: "By 2030, rain will come harder but shorter. Fewer rainy days, but each one more intense. Flooding events will double.",
      2035: "Remember the 2005 floods? By 2035, that intensity becomes more common. Mithi River overflows could reach Kurla regularly.",
      2045: "By 2045, Mumbai's drainage system will face 14+ major flood events yearly. The monsoon you knew will be unrecognizable.",
    },
    chartData: {
      labels: ['2024', '2030', '2035', '2045'],
      values: [3, 6, 9, 14],
      label: 'Major Flood Events per Year',
    }
  },

  coastal: {
    title: "Coastal Areas",
    current: {
      seaLevelRise: 0,
      highTideEvents: 8,
      erosionRate: 1.2,
    },
    projections: {
      2030: { seaLevelRise: 10, highTideEvents: 15, erosionRate: 2.1 },
      2035: { seaLevelRise: 18, highTideEvents: 24, erosionRate: 3.0 },
      2045: { seaLevelRise: 30, highTideEvents: 40, erosionRate: 4.5 },
    },
    narrative: {
      today: "Marine Drive, Worli Sea Face, Juhu Beach - Mumbai's coastline defines the city. Today, high tides are occasional news.",
      2030: "By 2030, sea levels will rise 10cm. High tide flooding at Marine Drive will become a monthly occurrence.",
      2035: "In 2035, Versova and parts of Bandra may see regular tidal flooding. Coastal property values will start shifting.",
      2045: "By 2045, with 30cm rise, the iconic Marine Drive promenade could face permanent infrastructure changes.",
    },
    chartData: {
      labels: ['2024', '2030', '2035', '2045'],
      values: [0, 10, 18, 30],
      label: 'Sea Level Rise (cm)',
    }
  },

  water: {
    title: "Water Supply",
    current: {
      waterCutDays: 60,
      reservoirLevel: 85,
      demandGap: 15,
    },
    projections: {
      2030: { waterCutDays: 90, reservoirLevel: 72, demandGap: 25 },
      2035: { waterCutDays: 120, reservoirLevel: 65, demandGap: 35 },
      2045: { waterCutDays: 150, reservoirLevel: 55, demandGap: 45 },
    },
    narrative: {
      today: "Mumbai already faces water cuts for about 60 days each summer. Tankers are a common sight in many neighborhoods.",
      2030: "By 2030, erratic monsoons will mean 90 days of water restrictions. Your building's tank will run dry more often.",
      2035: "In 2035, the water demand-supply gap grows to 35%. Rationing will become stricter, affecting daily routines.",
      2045: "By 2045, Mumbai could face 150 days of water restrictions annually - nearly half the year.",
    },
    chartData: {
      labels: ['2024', '2030', '2035', '2045'],
      values: [60, 90, 120, 150],
      label: 'Days with Water Restrictions',
    }
  },

  birds: {
    title: "Local Birds",
    current: {
      speciesCount: 340,
      sparrowPopulation: 100,
      migratoryBirds: 45,
    },
    projections: {
      2030: { speciesCount: 310, sparrowPopulation: 70, migratoryBirds: 38 },
      2035: { speciesCount: 280, sparrowPopulation: 50, migratoryBirds: 30 },
      2045: { speciesCount: 240, sparrowPopulation: 30, migratoryBirds: 20 },
    },
    narrative: {
      today: "Mumbai is home to 340 bird species - from house sparrows to flamingos at Sewri. Sanjay Gandhi National Park teems with life.",
      2030: "By 2030, rising temperatures will push 30 species to cooler regions. The sparrow you see outside may become rarer.",
      2035: "In 2035, migratory patterns will shift dramatically. The flamingos at Sewri mudflats may arrive later, leave earlier.",
      2045: "By 2045, Mumbai could lose 100 bird species. The dawn chorus you wake up to will sound different.",
    },
    chartData: {
      labels: ['2024', '2030', '2035', '2045'],
      values: [340, 310, 280, 240],
      label: 'Bird Species in Mumbai',
    }
  },

  commute: {
    title: "Daily Commute",
    current: {
      disruptedDays: 15,
      heatStressDays: 20,
      avgDelay: 12,
    },
    projections: {
      2030: { disruptedDays: 28, heatStressDays: 35, avgDelay: 20 },
      2035: { disruptedDays: 42, heatStressDays: 50, avgDelay: 30 },
      2045: { disruptedDays: 60, heatStressDays: 70, avgDelay: 45 },
    },
    narrative: {
      today: "Your daily local train commute faces about 15 weather disruptions per year. Monsoon delays are expected.",
      2030: "By 2030, both flooding and extreme heat will double commute disruptions. Those platform waits will get harder.",
      2035: "In 2035, you'll plan your commute around weather alerts. 50 days of dangerous heat means risking your health just getting to work.",
      2045: "By 2045, 60+ days of weather disruptions will reshape how Mumbai works. Remote work won't be a perk - it'll be survival.",
    },
    chartData: {
      labels: ['2024', '2030', '2035', '2045'],
      values: [15, 28, 42, 60],
      label: 'Weather-Disrupted Commute Days',
    }
  },
}

export function getClimateData(interest) {
  return climateData[interest] || climateData.heat
}
