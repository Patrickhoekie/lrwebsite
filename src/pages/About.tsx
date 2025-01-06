import { PageHero } from '../components/PageHero'

export function About() {
  return (
    <div className="min-h-screen">
      <PageHero 
        title="Over Ons" 
        subtitle="Ontdek het verhaal achter Loyal Roots" 
      />
      
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-8">Onze Visie</h2>
        <div className="max-w-3xl mx-auto space-y-6 text-left">
          <p className="text-gray-700">
            Bij LoyalRoots geloven we dat online marketing anders kan en moet. In een wereld waar communicatie vaak ondoorzichtig en complex is, kiezen wij bewust voor transparante, persoonlijke aanpakken en een nauwe samenwerking met onze klanten.
          </p>
          <p className="text-gray-700">
            Onze naam, LoyalRoots, is een weerspiegeling van deze visie: "Loyal" voor de langdurige partnerschappen die we bouwen, en "Roots" voor onze kernwaarden die de grondslag en de kern van jouw bedrijf weet te begrijpen.
          </p>
        </div>
      </div>
      
      <div className="w-full bg-gray-50">
        <div className="container mx-auto px-4 py-16">
          <h2 className="text-3xl font-bold text-center mb-16">Ons Team</h2>
          <div className="grid md:grid-cols-2 gap-16 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="mb-6 overflow-hidden rounded-lg">
                <img
                  src="/images/foto-andries.jpg"
                  alt="Andries Wolbers"
                  className="w-full h-auto transform transition-transform duration-500 hover:scale-110"
                />
              </div>
              <h3 className="text-xl font-bold mb-2">Andries Wolbers</h3>
              <p className="text-primary font-medium mb-4">Oprichter & Eigenaar, Creatief Strateeg</p>
              <p className="text-gray-600">
                Zet zijn creatieve strategieën en innovatieve oplossingen in om campagnes te ontwikkelen die direct impact maken.
              </p>
            </div>
            
            <div className="text-center">
              <div className="mb-6 overflow-hidden rounded-lg">
                <img
                  src="/images/foto-nick.jpg"
                  alt="Nick van der Harst"
                  className="w-full h-auto transform transition-transform duration-500 hover:scale-110"
                />
              </div>
              <h3 className="text-xl font-bold mb-2">Nick van der Harst</h3>
              <p className="text-primary font-medium mb-4">Oprichter & Eigenaar, Google Ads Specialist</p>
              <p className="text-gray-600">
                Brengt nauwkeurigheid en een focus op directe, effectieve resultaten mee in zijn aanpak van online marketing campagnes.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 