import { HeroSection } from './hero-section'
import { TeamSection } from './team-section'

export function About() {
  return (
    <div className="min-h-screen">
      {/* Hero Sectie */}
      <section className="pt-40 pb-36 bg-[#2F6B6B] text-white relative">
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-6xl font-bold mb-8">
            Over ons
          </h1>
          <p className="text-2xl mb-16">
            Ontdek het verhaal achter Loyal Roots
          </p>
        </div>
        <div className="absolute bottom-0 w-full">
          <svg viewBox="0 0 1440 160" className="w-full">
            <path fill="#ffffff" d="M0,48L1440,96L1440,160L0,160Z"></path>
          </svg>
        </div>
      </section>

      {/* Onze Visie Sectie */}
      <section className="pt-4 pb-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">
            Onze Visie
          </h2>
          <div className="max-w-3xl mx-auto space-y-6 text-gray-600">
            <p>
              Bij LoyalRoots geloven we dat marketing anders kan en moet. In een wereld waar communicatie vaak 
              onpersoonlijk en complex is, kiezen wij bewust voor transparantie, persoonlijke aandacht en een 
              nauwe samenwerking met onze klanten.
            </p>
            <p>
              Onze naam, LoyalRoots, is een weerspiegeling van deze visie: "Loyal" voor de langdurige 
              partnerschappen die we bouwen, en "Roots" voor onze betrokkenheid om diepte te graven en de kern 
              van jouw bedrijf echt te begrijpen.
            </p>
          </div>
        </div>
      </section>

      {/* Ons Team Sectie */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">
            Ons Team
          </h2>
          <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            {/* Team Lid 1 */}
            <div className="text-center">
              <div className="w-48 h-48 mx-auto mb-6 overflow-hidden rounded-full">
                <img 
                  src="/images/foto andries.jpg" 
                  alt="Andries Wolbers" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2">Andries Wolbers</h3>
              <p className="text-gray-600 mb-4">Mede-oprichter</p>
              <p className="text-gray-600">
                Specialist in Google Ads en SEO met meer dan 5 jaar ervaring in digitale marketing.
              </p>
            </div>

            {/* Team Lid 2 */}
            <div className="text-center">
              <div className="w-48 h-48 mx-auto mb-6 overflow-hidden rounded-full">
                <img 
                  src="/images/foto nick.jpg" 
                  alt="Nick van der Harst" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2">Nick van der Harst</h3>
              <p className="text-gray-600 mb-4">Mede-oprichter</p>
              <p className="text-gray-600">
                Expert in Meta Ads en social media strategie met een passie voor creatieve oplossingen.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
} 