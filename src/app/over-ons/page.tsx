import { Navigation } from '@/components/layout/navigation'
import { Footer } from '@/components/layout/footer'
import Image from 'next/image'
import WaveTransition from '@/components/layout/wave-transition'

export default function OverOns() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-[#266471] text-white relative">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Over ons</h1>
            <p className="text-xl mb-4 max-w-2xl mx-auto">Ontdek het verhaal achter Loyal Roots</p>
          </div>
        </div>
        <WaveTransition />
      </section>

      {/* Vision Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Onze Visie</h2>
            <p className="text-gray-600 mb-6">
              Bij LoyalRoots geloven we dat marketing anders kan en moet. In een wereld waar 
              communicatie vaak onpersoonlijk en complex is, kiezen wij bewust voor transparantie, 
              persoonlijke aandacht en een nauwe samenwerking met onze klanten.
            </p>
            <p className="text-gray-600 mb-6">
              Onze naam, LoyalRoots, is een weerspiegeling van deze visie: "Loyal" voor de langdurige 
              partnerschappen die we bouwen, en "Roots" voor onze betrokkenheid om diep te graven en de 
              kern van jouw bedrijf echt te begrijpen.
            </p>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Ons Team</h2>
          <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            {[
              {
                name: "Andries Wolbers",
                image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_1975_11zon.jpg-bJwIXA6j22XJoteoeM5RoCxFQG4hzw.jpeg",
                role: "Oprichter & Eigenaar, Creatief Strateeg",
                description: "Zet zijn creatieve strategieën en innovatieve oplossingen in om campagnes te ontwikkelen die direct impact maken."
              },
              {
                name: "Nick van der Harst",
                image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_1953%20nick_11zon.jpg-1DfpssMZkg2CF7TePYIsh7cX6G1wij.jpeg",
                role: "Oprichter & Eigenaar, Google Ads Specialist",
                description: "Brengt gedrevenheid en een focus op snelle, effectieve resultaten mee in zijn aanpak van online marketing campagnes."
              }
            ].map((member, index) => (
              <div key={index} className="text-center transform transition-all duration-300 hover:scale-105">
                <div className="mb-6 relative aspect-[3/4] w-full max-w-[70%] mx-auto">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="rounded-lg object-cover object-center"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                <p className="text-gray-600 mb-4">{member.role}</p>
                <p className="text-gray-600">
                  {member.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

