import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

export default function BotProfile() {
  const router = useRouter()
  const { slug } = router.query
  const [bot, setBot] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (!slug) return
    const fetchData = async () => {
      try {
        const res = await fetch(`/api/bot?slug=${slug}`)
        const data = await res.json()
        setBot(data)
      } catch (err) {
        console.error(err)
      } finally {
        setLoading(false)
      }
    }
    fetchData()
  }, [slug])

  if (loading) return <p>Loading...</p>
  if (!bot) return <p>Bot not found.</p>

  return (
    <main>
      <h1>{bot.name}</h1>
      {bot.image && <img src={bot.image} alt={bot.name} style={{ maxWidth: "300px" }} />}
      {bot.voice && <audio controls src={bot.voice}></audio>}
      <br />
      {bot.fanvue && <a href={bot.fanvue} target="_blank" rel="noreferrer">Visit Fanvue Profile</a>}
    </main>
  )
}
