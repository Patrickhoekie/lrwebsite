import { Hero } from "./Hero"
import { Features } from "./features"
import { Services } from "./Services"
import { MarketingStats } from "./MarketingStats"
import { CTASection } from "./CTASection"

export function Home() {
  return (
    <>
      <Hero />
      <Features />
      <Services />
      <MarketingStats />
      <CTASection />
    </>
  )
} 