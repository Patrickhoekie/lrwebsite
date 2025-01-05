import { PageHero } from '../components/PageHero'
import { ServiceComparison } from '../components/ServiceComparison'

export function Services() {
  return (
    <div className="min-h-screen">
      <PageHero 
        title="Onze Diensten" 
        subtitle="Ontdek onze transparante en effectieve online marketing oplossingen voor uw bedrijf" 
      />
      {/* Diensten vergelijking */}
      <div className="py-20">
        <ServiceComparison />
      </div>

      {/* CTA Sectie */}
      <div className="bg-gray-50 py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Klaar om samen te werken?</h2>
          <p className="text-xl text-gray-600 mb-8">
            Laat ons u helpen uw online marketing naar een hoger niveau te tillen.
          </p>
          <a
            href="/contact"
            className="inline-block bg-primary text-white px-8 py-3 rounded-lg font-medium hover:bg-primary/90 transition-colors"
          >
            Plan een gesprek
          </a>
        </div>
      </div>
    </div>
  )
} 