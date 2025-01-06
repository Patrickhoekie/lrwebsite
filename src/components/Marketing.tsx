import { Counter } from './Counter'

export function Marketing() {
  return (
    <div className="w-full bg-gray-50">
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center">De Kracht van Online Marketing</h2>
          <p className="text-gray-600 text-center mt-4 mb-16">
            In het huidige digitale tijdperk zijn Google en Meta Ads essentieel voor bedrijfsgroei. Ontdek waarom deze platforms de sleutel zijn tot uw succes.
          </p>

          <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            {/* Google Ads Bereik */}
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <div className="flex items-center gap-2 mb-4">
                <span className="text-primary">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </span>
                <h3 className="text-xl font-bold">Google Ads Bereik</h3>
              </div>
              <div className="text-4xl font-bold text-primary mb-4">
                <Counter end={90} duration={2000} suffix="%" />
              </div>
              <p className="text-gray-600 mb-4">van de online zoekopdrachten gebeurt via Google, wat zorgt voor ongekende zichtbaarheid</p>
              <ul className="space-y-2">
                <li className="flex items-center gap-2 text-gray-600">
                  <span className="text-primary">↗</span>
                  Gemiddelde CTR van 3.17% voor zoekadvertenties
                </li>
                <li className="flex items-center gap-2 text-gray-600">
                  <span className="text-primary">📈</span>
                  ROI tot 800% voor bepaalde industrieën
                </li>
              </ul>
            </div>

            {/* Meta Ads Bereik */}
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <div className="flex items-center gap-2 mb-4">
                <span className="text-primary">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17 8C17 10.7614 14.7614 13 12 13C9.23858 13 7 10.7614 7 8C7 5.23858 9.23858 3 12 3C14.7614 3 17 5.23858 17 8Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M3 21C3.95728 17.9237 6.41998 17 12 17C17.58 17 20.0427 17.9237 21 21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </span>
                <h3 className="text-xl font-bold">Meta Ads Bereik</h3>
              </div>
              <div className="text-4xl font-bold text-primary mb-4">
                <Counter end={3} duration={2000} suffix="M+" />
              </div>
              <p className="text-gray-600 mb-4">Nederlanders zijn dagelijks actief op Facebook en Instagram</p>
              <ul className="space-y-2">
                <li className="flex items-center gap-2 text-gray-600">
                  <span className="text-primary">↗</span>
                  Gemiddelde CTR van 1.11% voor Facebook-advertenties
                </li>
                <li className="flex items-center gap-2 text-gray-600">
                  <span className="text-primary">📈</span>
                  26% van de gebruikers klikt op advertenties
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export function MarketingStats() {
  return (
    <section className="bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Onze Resultaten</h2>
        <div className="grid md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-4xl font-bold text-primary mb-2">
              <Counter end={500} duration={2000} suffix="+" />
            </div>
            <div className="text-gray-600">Tevreden Klanten</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-primary mb-2">
              <Counter end={2} duration={2000} suffix="M+" />
            </div>
            <div className="text-gray-600">Beheerd Advertentiebudget</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-primary mb-2">
              <Counter end={95} duration={2000} suffix="%" />
            </div>
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