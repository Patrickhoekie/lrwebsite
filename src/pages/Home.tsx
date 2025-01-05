import { Hero } from '../components/Hero'
import { WorkMethod } from '../components/WorkMethod'
import { Services } from '../components/Services'
import { Marketing } from '../components/Marketing'
import { CTASection } from '../components/CTASection'

export function Home() {
  return (
    <div className="min-h-screen">
      <Hero />
      <WorkMethod />
      <Services />
      <Marketing />
      <CTASection />
    </div>
  )
} 