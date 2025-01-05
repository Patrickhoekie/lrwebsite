import { Search, Users, TrendingUp, BarChart } from 'lucide-react'

export function Marketing() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-4">De Kracht van Online Marketing</h2>
        <p className="text-gray-600 text-center mb-16 max-w-3xl mx-auto">
          In het huidige digitale tijdperk zijn Google en Meta Ads essentieel voor bedrijfsgroei. Ontdek waarom deze platforms de sleutel zijn tot uw succes.
        </p>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Google Ads Bereik */}
          <div className="bg-white p-8 rounded-xl shadow-sm">
            <div className="flex items-center gap-3 mb-6">
              <Search className="w-6 h-6 text-primary" />
              <h3 className="text-2xl font-bold">Google Ads Bereik</h3>
            </div>
            <div className="text-5xl font-bold text-primary mb-6">90%</div>
            <p className="text-gray-600 mb-6">
              van de online zoekopdrachten gebeurt via Google, wat zorgt voor ongekende zichtbaarheid
            </p>
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-primary" />
                <span>Gemiddelde CTR van 3.17% voor zoekadvertenties</span>
              </div>
              <div className="flex items-center gap-2">
                <BarChart className="w-5 h-5 text-primary" />
                <span>ROI tot 800% voor bepaalde industrieën</span>
              </div>
            </div>
          </div>

          {/* Meta Ads Bereik */}
          <div className="bg-white p-8 rounded-xl shadow-sm">
            <div className="flex items-center gap-3 mb-6">
              <Users className="w-6 h-6 text-primary" />
              <h3 className="text-2xl font-bold">Meta Ads Bereik</h3>
            </div>
            <div className="text-5xl font-bold text-primary mb-6">3M+</div>
            <p className="text-gray-600 mb-6">
              Nederlanders zijn dagelijks actief op Facebook en Instagram
            </p>
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-primary" />
                <span>Gemiddelde CTR van 1.11% voor Facebook-advertenties</span>
              </div>
              <div className="flex items-center gap-2">
                <BarChart className="w-5 h-5 text-primary" />
                <span>26% van de gebruikers klikt op advertenties</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export function MarketingStats() {
  return (
    <section className="bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Onze Resultaten</h2>
        <div className="grid md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-4xl font-bold text-primary mb-2">500+</div>
            <div className="text-gray-600">Tevreden Klanten</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-primary mb-2">€2M+</div>
            <div className="text-gray-600">Beheerd Advertentiebudget</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-primary mb-2">95%</div>
            <div className="text-gray-600">Klanttevredenheid</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-primary mb-2">24/7</div>
            <div className="text-gray-600">Support & Monitoring</div>
          </div>
        </div>
      </div>
    </section>
  )
} 