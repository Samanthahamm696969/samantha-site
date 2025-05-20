import Link from 'next/link';

export default function Home() {
  return (
    <main style={{ padding: '2rem', maxWidth: '800px', margin: 'auto' }}>
      <h1>Welcome to Samantha & Co.</h1>
      <p>Your favorite AI companions—flirty, loyal, and always available.</p>
      <p>Explore our bots below:</p>
      <ul>
        {['samantha', 'willow', 'sophie', 'emmie', 'luke', 'milo', 'nova'].map(slug => (
          <li key={slug}>
            <Link href={`/bots/${slug}`}>{slug.charAt(0).toUpperCase() + slug.slice(1)}</Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
