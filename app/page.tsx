import Navigation from "@/components/navigation"
import HeroSection from "@/components/hero-section"
import WhyChooseUs from "@/components/why-choose-us"
import FeaturedWork from "@/components/featured-work"
import CTASection from "@/components/cta-section"
import Footer from "@/components/footer"

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white">
      <Navigation />
      <HeroSection />
      <WhyChooseUs />
      <FeaturedWork />
      <CTASection />
      <Footer />
    </main>
  )
}
