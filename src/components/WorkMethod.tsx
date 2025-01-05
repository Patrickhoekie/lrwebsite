import { Check, Zap, User } from 'lucide-react'

export function WorkMethod() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16">Onze Werkwijze</h2>
        
        <div className="grid md:grid-cols-3 gap-12 max-w-5xl mx-auto">
          {/* Transparante Communicatie */}
          <div className="text-center">
            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Check className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-xl font-bold mb-4">Transparante Communicatie</h3>
            <p className="text-gray-600">
              Duidelijke prijsstructuur en heldere rapportages over uw campagnes
            </p>
          </div>

          {/* Meetbare Resultaten */}
          <div className="text-center">
            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Zap className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-xl font-bold mb-4">Meetbare Resultaten</h3>
            <p className="text-gray-600">
              Focus op ROI en concrete doelstellingen voor uw bedrijf
            </p>
          </div>

          {/* Persoonlijke Aanpak */}
          <div className="text-center">
            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <User className="w-8 h-8 text-primary" />
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