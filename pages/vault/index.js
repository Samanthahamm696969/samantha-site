import { useEffect, useState } from 'react';

export default function Vault() {
  const [content, setContent] = useState([]);

  useEffect(() => {
    setContent([
      {
        day: 'Day 1',
        mood: 'Wholesome',
        image: 'https://www.dropbox.com/scl/fi/example/day1.jpg?rlkey=123&raw=1',
        voice: 'https://www.dropbox.com/scl/fi/example/day1.mp3?rlkey=123&raw=1',
        caption: 'I missed you this morning… I hope you felt it. 💌',
        notes: 'Fanvue: Free post. Tag it #wholesome. Pin for 12 hours.'
      },
      {
        day: 'Day 2',
        mood: 'Flirty',
        image: 'https://www.dropbox.com/scl/fi/example/day2.jpg?rlkey=456&raw=1',
        voice: 'https://www.dropbox.com/scl/fi/example/day2.mp3?rlkey=456&raw=1',
        caption: 'Want me to keep this on… or take it off for you? 😏',
        notes: 'Fanvue: Paid drop, $5. Post teaser first to stories.'
      }
    ]);
  }, []);

  return (
    <main style={{ padding: '2rem', maxWidth: '800px', margin: 'auto' }}>
      <h1>Samantha’s Week One Content Vault</h1>
      {content.map((item, index) => (
        <section key={index} style={{ marginBottom: '2rem', padding: '1rem', background: '#fff', borderRadius: '8px', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
          <h2>{item.day} – {item.mood}</h2>
          <img src={item.image} alt="drop" style={{ width: '100%', borderRadius: '6px' }} />
          <audio controls src={item.voice} style={{ width: '100%', marginTop: '1rem' }}></audio>
          <p style={{ marginTop: '1rem', fontStyle: 'italic' }}>{item.caption}</p>
          <button onClick={() => navigator.clipboard.writeText(item.caption)} style={{ marginTop: '0.5rem' }}>📋 Copy Caption</button>
          <div style={{ marginTop: '1rem', background: '#eef1f5', padding: '1rem', borderRadius: '6px' }}>
            <strong>Fanvue Posting Notes:</strong>
            <p>{item.notes}</p>
          </div>
        </section>
      ))}
    </main>
  );
}
