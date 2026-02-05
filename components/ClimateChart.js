'use client'

import { useEffect, useRef } from 'react'
import { Chart, registerables } from 'chart.js'

Chart.register(...registerables)

export default function ClimateChart({ data, colorScheme = 'blue' }) {
  const chartRef = useRef(null)
  const chartInstance = useRef(null)

  const colorSchemes = {
    blue: {
      gradient: ['rgba(34, 211, 238, 0.8)', 'rgba(14, 165, 233, 0.8)'],
      border: '#22d3ee',
    },
    red: {
      gradient: ['rgba(239, 68, 68, 0.8)', 'rgba(220, 38, 38, 0.8)'],
      border: '#ef4444',
    },
    orange: {
      gradient: ['rgba(245, 158, 11, 0.8)', 'rgba(217, 119, 6, 0.8)'],
      border: '#f59e0b',
    },
  }

  useEffect(() => {
    if (!chartRef.current || !data) return

    const ctx = chartRef.current.getContext('2d')
    const colors = colorSchemes[colorScheme]

    // Create gradient
    const gradient = ctx.createLinearGradient(0, 0, 0, 300)
    gradient.addColorStop(0, colors.gradient[0])
    gradient.addColorStop(1, colors.gradient[1])

    // Destroy previous chart instance
    if (chartInstance.current) {
      chartInstance.current.destroy()
    }

    chartInstance.current = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: data.labels,
        datasets: [{
          label: data.label,
          data: data.values,
          backgroundColor: gradient,
          borderColor: colors.border,
          borderWidth: 2,
          borderRadius: 8,
          borderSkipped: false,
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            display: true,
            position: 'top',
            labels: {
              color: '#94a3b8',
              font: { size: 14, weight: '500' },
              padding: 20,
            }
          },
          tooltip: {
            backgroundColor: 'rgba(10, 22, 40, 0.9)',
            titleColor: '#ffffff',
            bodyColor: '#94a3b8',
            padding: 12,
            cornerRadius: 8,
          }
        },
        scales: {
          x: {
            grid: { display: false },
            ticks: { 
              color: '#94a3b8',
              font: { size: 14, weight: '600' }
            }
          },
          y: {
            grid: { 
              color: 'rgba(148, 163, 184, 0.1)',
            },
            ticks: { 
              color: '#94a3b8',
              font: { size: 12 }
            },
            beginAtZero: true,
          }
        },
        animation: {
          duration: 1500,
          easing: 'easeOutQuart',
        }
      }
    })

    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy()
      }
    }
  }, [data, colorScheme])

  return (
    <div style={{ width: '100%', height: '300px', position: 'relative' }}>
      <canvas ref={chartRef}></canvas>
    </div>
  )
}
