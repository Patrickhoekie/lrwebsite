import { Hero } from "./Hero"
import { Features } from "./Features"
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