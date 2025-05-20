import { useRouter } from 'next/router';

export default function BotProfile() {
  const router = useRouter();
  const { slug } = router.query;

  return (
    <main>
      <h1>Bot Profile: {slug}</h1>
      <p>This page will display content for the bot with slug: {slug}</p>
    </main>
  );
}
