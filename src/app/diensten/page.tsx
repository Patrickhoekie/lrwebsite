import { Navigation } from '@/components/layout/navigation'
import { Footer } from '@/components/layout/footer'
import { Button } from '@/components/ui/button'
import { Check, X } from 'lucide-react'
import Link from 'next/link'
import WaveTransition from '@/components/layout/wave-transition'

export default function Diensten() {
  const features = [
    { name: 'Voorstel zoekwoorden onderzoek', basis: true, geavanceerd: true, pro: true },
    { name: 'Budgetonderzoek', basis: true, geavanceerd: true, pro: true },
    { name: 'Doelen opstellen', basis: true, geavanceerd: true, pro: true },
    { name: 'Campagne opzet', basis: true, geavanceerd: true, pro: true },
    { name: 'Advertentie creatie', basis: true, geavanceerd: true, pro: true },
    { name: 'Account onderhoud', basis: true, geavanceerd: true, pro: true },
    { name: 'Rapportage via de mail', basis: true, geavanceerd: true, pro: true },
    { name: 'Conversie tracken', basis: false, geavanceerd: true, pro: true },
    { name: 'Concurrenten campagne', basis: false, geavanceerd: true, pro: true },
    { name: 'Dynamische campagne', basis: false, geavanceerd: true, pro: true },
    { name: 'Power point rapportage', basis: false, geavanceerd: true, pro: true },
    { name: 'Display campagne', basis: false, geavanceerd: false, pro: true },
    { name: 'Re marketing', basis: false, geavanceerd: false, pro: true }
  ]

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-[#266471] text-white relative">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Onze Diensten</h1>
            <p className="text-xl mb-4 max-w-2xl mx-auto">
              Ontdek onze transparante en effectieve online marketing oplossingen voor uw bedrijf
            </p>
          </div>
        </div>
        <WaveTransition />
      </section>

      {/* Services Comparison Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Vergelijk onze diensten</h2>
          
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b-2 border-gray-200">
                  <th className="px-6 py-4 text-left font-medium text-gray-600">Features</th>
                  <th className="px-6 py-4 text-center font-medium text-gray-600" id="basis">BASIS</th>
                  <th className="px-6 py-4 text-center font-medium text-gray-600" id="geavanceerd">GEAVANCEERD</th>
                  <th className="px-6 py-4 text-center font-medium text-gray-600" id="pro">PRO</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {features.map((feature, index) => (
                  <tr key={feature.name} className="group hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4">{feature.name}</td>
                    <td className="px-6 py-4 text-center">
                      {feature.basis ? (
                        <Check className="w-5 h-5 text-green-500 mx-auto" />
                      ) : (
                        <X className="w-5 h-5 text-gray-300 mx-auto" />
                      )}
                    </td>
                    <td className="px-6 py-4 text-center">
                      {feature.geavanceerd ? (
                        <Check className="w-5 h-5 text-green-500 mx-auto" />
                      ) : (
                        <X className="w-5 h-5 text-gray-300 mx-auto" />
                      )}
                    </td>
                    <td className="px-6 py-4 text-center">
                      {feature.pro ? (
                        <Check className="w-5 h-5 text-green-500 mx-auto" />
                      ) : (
                        <X className="w-5 h-5 text-gray-300 mx-auto" />
                      )}
                    </td>
                  </tr>
                ))}
                <tr className="bg-gray-50 font-semibold">
                  <td className="px-6 py-6">Prijs per maand</td>
                  <td className="px-6 py-6 text-center">€500</td>
                  <td className="px-6 py-6 text-center">€900</td>
                  <td className="px-6 py-6 text-center">€1100</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="mt-12 text-center">
            <Link href="/contact">
              <Button 
                className="bg-black text-white hover:bg-black/90 transition-all duration-300 transform hover:scale-105 px-8 py-3 text-lg font-semibold"
              >
                Kies een dienst
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Ready to Work Together Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Klaar om samen te werken?
          </h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Laat ons u helpen uw online marketing naar een hoger niveau te tillen.
          </p>
          <Link href="https://calendly.com/loyal-roots/kennismaking?month=2025-01">
            <Button 
              className="bg-[#266471] text-white hover:bg-[#266471]/90 transition-all duration-300 transform hover:scale-105 px-8 py-6 text-lg font-semibold"
            >
              Plan een gesprek
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  )
}

