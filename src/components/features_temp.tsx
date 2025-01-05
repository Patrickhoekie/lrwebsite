import { Check, Zap, Users } from 'lucide-react'

export function Features() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">
          Onze Werkwijze
        </h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Transparante Communicatie */}
          <div className="flex flex-col items-center text-center transition-all duration-300 hover:transform hover:scale-105">
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-4 transition-all duration-300 hover:shadow-lg border-2 border-[#2F6B6B]">
              <svg className="w-8 h-8 text-[#2F6B6B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-4">Transparante Communicatie</h3>
            <p className="text-gray-600">
              Duidelijke prijsstructuur en heldere rapportages over uw campagnes
            </p>
          </div>

          {/* Meetbare Resultaten */}
          <div className="flex flex-col items-center text-center transition-all duration-300 hover:transform hover:scale-105">
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-4 transition-all duration-300 hover:shadow-lg border-2 border-[#2F6B6B]">
              <svg className="w-8 h-8 text-[#2F6B6B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-4">Meetbare Resultaten</h3>
            <p className="text-gray-600">
              Focus op ROI en concrete doelstellingen voor uw bedrijf
            </p>
          </div>

          {/* Persoonlijke Aanpak */}
          <div className="flex flex-col items-center text-center transition-all duration-300 hover:transform hover:scale-105">
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-4 transition-all duration-300 hover:shadow-lg border-2 border-[#2F6B6B]">
              <svg className="w-8 h-8 text-[#2F6B6B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-4">Persoonlijke Aanpak</h3>
            <p className="text-gray-600">
              Maatwerk oplossingen afgestemd op uw specifieke bedrijfsdoelen
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

