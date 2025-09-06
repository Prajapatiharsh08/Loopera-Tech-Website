import Navigation from "@/components/navigation"
import AboutHero from "@/components/about-hero"
import VisionMission from "@/components/vision-mission"
import CoreValues from "@/components/core-values"
import OurStory from "@/components/our-story"
import FoundersSection from "@/components/founders-section"
import Footer from "@/components/footer"

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navigation />
      <AboutHero />
      <VisionMission />
      <CoreValues />
      <OurStory />
      <FoundersSection />
      <Footer />
    </main>
  )
}
