export default function StoryPage({ params }) {
  return (
    <main style={{ padding: '40px', color: 'white' }}>
      <h1>Story Page</h1>
      <p>Interest: {params.interest}</p>
    </main>
  )
}