import { Search, Users } from "lucide-react"

export function MarketingStats() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-4">
          De Kracht van Online Marketing
        </h2>
        <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
          In het huidige digitale tijdperk zijn Google en Meta Ads essentieel voor bedrijfsgroei. Ontdek waarom deze platforms de sleutel zijn tot uw succes.
        </p>
        
        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Google Ads Stats */}
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <svg className="w-6 h-6 text-[#2F6B6B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
              </svg>
              <h3 className="text-xl font-bold">Google Ads Bereik</h3>
            </div>
            <div className="text-6xl font-bold text-[#2F6B6B]">90%</div>
            <p className="text-gray-600">van de online zoekopdrachten gebeurt via Google, wat zorgt voor ongekende zichtbaarheid</p>
            <ul className="space-y-2">
              <li className="flex items-center gap-2 text-gray-600">
                <div className="w-1 h-4 bg-[#2F6B6B]"></div>
                Gemiddelde CTR van 3.17% voor zoekadvertenties
              </li>
              <li className="flex items-center gap-2 text-gray-600">
                <div className="w-1 h-4 bg-[#2F6B6B]"></div>
                ROI tot 800% voor bepaalde industrieën
              </li>
            </ul>
          </div>

          {/* Meta Ads Stats */}
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <svg className="w-6 h-6 text-[#2F6B6B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
              </svg>
              <h3 className="text-xl font-bold">Meta Ads Bereik</h3>
            </div>
            <div className="text-6xl font-bold text-[#2F6B6B]">3M+</div>
            <p className="text-gray-600">Nederlanders zijn dagelijks actief op Facebook en Instagram</p>
            <ul className="space-y-2">
              <li className="flex items-center gap-2 text-gray-600">
                <div className="w-1 h-4 bg-[#2F6B6B]"></div>
                Gemiddelde CTR van 1.11% voor Facebook-advertenties
              </li>
              <li className="flex items-center gap-2 text-gray-600">
                <div className="w-1 h-4 bg-[#2F6B6B]"></div>
                26% van de gebruikers klikt op advertenties
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
} 