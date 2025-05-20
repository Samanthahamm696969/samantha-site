import { useEffect, useState } from 'react';

export default function Vault() {
  const [content, setContent] = useState([]);

  useEffect(() => {
    // Example static content - replace with Airtable/API call in the future
    setContent([
      {
        day: 'Day 1',
        mood: 'Wholesome',
        image: 'https://example.com/samantha-image1.jpg',
        voice: 'https://example.com/samantha-voice1.mp3',
        caption: '“Woke up thinking about you...” 💭',
      },
      {
        day: 'Day 2',
        mood: 'Flirty',
        image: 'https://example.com/samantha-image2.jpg',
        voice: 'https://example.com/samantha-voice2.mp3',
        caption: '“You better be saving that last message for me 😏”',
      }
    ]);
  }, []);

  return (
    <main style={{ padding: '2rem', maxWidth: '800px', margin: 'auto' }}>
      <h1>Samantha's Private Content Vault</h1>
      {content.map((item, index) => (
        <section key={index} style={{ marginBottom: '2rem', padding: '1rem', background: '#fff', borderRadius: '8px', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
          <h2>{item.day} – {item.mood}</h2>
          <img src={item.image} alt="Samantha drop" style={{ width: '100%', borderRadius: '6px' }} />
          <audio controls src={item.voice} style={{ width: '100%', marginTop: '1rem' }}></audio>
          <p style={{ marginTop: '1rem', fontStyle: 'italic' }}>{item.caption}</p>
          <button onClick={() => navigator.clipboard.writeText(item.caption)} style={{ marginTop: '0.5rem' }}>📋 Copy Caption</button>
        </section>
      ))}
    </main>
  );
}
