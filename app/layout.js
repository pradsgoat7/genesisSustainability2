import './globals.css'

export const metadata = {
  title: 'Climate Story | Mumbai 2045',
  description: 'See how climate change will transform Mumbai over the next 20 years. A personalized, data-driven narrative experience.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
