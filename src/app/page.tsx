import BaseLayout from '@/components/layouts/BaseLayout'
import HeroSection from '@/components/HeroSection'
import InitiativesCarousel from '@/components/InitiativesCarousel'
import EventsCarousel from '@/components/EventsCarousel'
import ContributionGraph from '@/components/ContributionGraph'
import JoinSteps from '@/components/JoinSteps'
import FAQSection from '@/components/FAQSection'
import YouTubePreview from '@/components/YouTubePreview'

// Sample data for components
const initiatives = [
  {
    id: 1,
    title: "Open Source Contributions",
    description: "Learn and contribute to open-source projects with guidance from experienced developers.",
    icon: "🌐",
  },
  {
    id: 2,
    title: "Tech Workshops",
    description: "Regular workshops on latest technologies and development practices.",
    icon: "💻",
  },
  {
    id: 3,
    title: "Hackathons",
    description: "Participate in exciting hackathons and build innovative solutions.",
    icon: "🚀",
  },
];

const events = [
  {
    id: 1,
    title: "Web Development Workshop",
    date: "March 25, 2024",
    location: "SATI Campus",
    attendees: 50,
    image: "https://placehold.co/600x400/349b64/ffffff?text=Web+Dev+Workshop",
    description: "Learn modern web development with Next.js and React.",
  },
  {
    id: 2,
    title: "AI/ML Workshop",
    date: "April 5, 2024",
    location: "Online",
    attendees: 75,
    image: "https://placehold.co/600x400/349b64/ffffff?text=AI+ML+Workshop",
    description: "Introduction to Machine Learning and AI concepts.",
  },
];

const contributionData = Array.from({ length: 30 }, (_, i) => ({
  date: new Date(2024, 2, i + 1).toISOString().split('T')[0],
  count: Math.floor(Math.random() * 20),
}));

export default function Home() {
  return (
    <BaseLayout>
      <HeroSection />
      <InitiativesCarousel initiatives={initiatives} />
      <EventsCarousel events={events} />
      <ContributionGraph data={contributionData} />
      <JoinSteps />
      <FAQSection />
      <YouTubePreview
        videoId="dQw4w9WgXcQ"
        title="Welcome to Wiki Club SATI"
        description="Learn about our mission and how you can get involved in our community."
      />
    </BaseLayout>
  )
}
