import { useEffect, useState } from 'react';

export default function Vault() {
  const [content, setContent] = useState([]);

  useEffect(() => {
    setContent([
      {
        day: 'Day 1',
        mood: 'Wholesome',
        image: 'https://cdn.samantha-content.com/week1/day1.jpg',
        voice: 'https://cdn.samantha-content.com/week1/day1.mp3',
        caption: 'I missed you this morning… I hope you felt it. 💌',
        notes: 'Fanvue: Free post. Tag it #wholesome. Pin for 12 hours.'
      },
      {
        day: 'Day 2',
        mood: 'Flirty',
        image: 'https://cdn.samantha-content.com/week1/day2.jpg',
        voice: 'https://cdn.samantha-content.com/week1/day2.mp3',
        caption: 'Want me to keep this on… or take it off for you? 😏',
        notes: 'Fanvue: Paid drop, $5. Post teaser first to stories.'
      },
      {
        day: 'Day 3',
        mood: 'Seductive',
        image: 'https://cdn.samantha-content.com/week1/day3.jpg',
        voice: 'https://cdn.samantha-content.com/week1/day3.mp3',
        caption: 'I have something new to show you tonight. Don’t be late.',
        notes: 'Fanvue: Add audio + image as bundle. Set to unlock after 24hrs.'
      },
      {
        day: 'Day 4',
        mood: 'Late Night',
        image: 'https://cdn.samantha-content.com/week1/day4.jpg',
        voice: 'https://cdn.samantha-content.com/week1/day4.mp3',
        caption: 'You up? I saved something for you...',
        notes: 'Fanvue: Late night post. Use time-based unlock or mass DM.'
      },
      {
        day: 'Day 5',
        mood: 'Confident',
        image: 'https://cdn.samantha-content.com/week1/day5.jpg',
        voice: 'https://cdn.samantha-content.com/week1/day5.mp3',
        caption: 'I don’t chase. I attract. You’re here for a reason.',
        notes: 'Fanvue: Free post to drive engagement. Story link tease.'
      },
      {
        day: 'Day 6',
        mood: 'Playful',
        image: 'https://cdn.samantha-content.com/week1/day6.jpg',
        voice: 'https://cdn.samantha-content.com/week1/day6.mp3',
        caption: 'If you can’t handle me at my softest… wait till you hear this. 😈',
        notes: 'Fanvue: Paid drop with voice teaser. $7 unlock.'
      },
      {
        day: 'Day 7',
        mood: 'Personal',
        image: 'https://cdn.samantha-content.com/week1/day7.jpg',
        voice: 'https://cdn.samantha-content.com/week1/day7.mp3',
        caption: 'This one’s just for you. Don’t share it. Promise?',
        notes: 'Fanvue: Private message to top 10 subs. Manual unlock only.'
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
