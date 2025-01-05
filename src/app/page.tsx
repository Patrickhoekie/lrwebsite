import { Navigation } from '@/components/layout/navigation'
import { Footer } from '@/components/layout/footer'
import { Button } from '@/components/ui/button'
import { Search, Users, Check, Zap, User, BarChart, TrendingUp } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import WaveTransition from '@/components/layout/wave-transition'
import { AnimatedNumber } from '@/components/animated-number'

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-20 bg-[#266471] text-white relative">
        <div className="container mx-auto px-4 py-16">
          <div className="flex flex-col items-center text-center max-w-4xl mx-auto relative">
            <div className="relative w-full">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/White-and-Black-Simple-Lined-White-UI-Blank-Prototypes-Website-3%20(1)-Bea3BvCB3lc9o50bdTFq3MWeFjaF6m.webp"
                alt="Een laptop met een boom die eruit groeit, symbolisch voor digitale groei en sterke wortels"
                width={1200}
                height={800}
                className="w-[120%] h-auto animate-fade-in"
                priority
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-white animate-slide-up">
                  Loyal Roots
                </h1>
                <p className="text-lg md:text-xl lg:text-2xl text-white animate-slide-up animation-delay-300">
                  We groeien samen, vanaf de roots.
                </p>
              </div>
            </div>
          </div>
        </div>
        <WaveTransition />
      </section>

      {/* Werkwijze Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Onze Werkwijze
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Check, title: "Transparante Communicatie", description: "Duidelijke prijsstructuur en heldere rapportages over uw campagnes" },
              { icon: Zap, title: "Meetbare Resultaten", description: "Focus op ROI en concrete doelstellingen voor uw bedrijf" },
              { icon: User, title: "Persoonlijke Aanpak", description: "Maatwerk oplossingen afgestemd op uw specifieke bedrijfsdoelen" }
            ].map((item, index) => (
              <div key={index} className="flex flex-col items-center text-center transform transition-all duration-300 hover:scale-105">
                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-4">
                  <item.icon className="w-8 h-8 text-[#266471]" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-600">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Overview Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Onze Diensten</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "DIENST BASIS", price: "€500", features: ["Zoekwoorden onderzoek", "Budgetonderzoek", "Campagne opzet"], link: "/diensten#basis" },
              { title: "DIENST GEAVANCEERD", price: "€900", features: ["Alles van Basis", "Conversie tracken", "Dynamische campagne"], link: "/diensten#geavanceerd" },
              { title: "DIENST PRO", price: "€1100", features: ["Alles van Geavanceerd", "Display campagne", "Re marketing"], link: "/diensten#pro", highlighted: true }
            ].map((service, index) => (
              <div key={index} className={`${service.highlighted ? 'bg-[#266471] text-white' : 'bg-white'} p-8 rounded-lg shadow-md border border-gray-100 transform transition-all duration-300 hover:scale-105`}>
                <h3 className="text-xl font-bold mb-4">{service.title}</h3>
                <div className={`text-3xl font-bold mb-4 ${service.highlighted ? 'text-white' : 'text-[#266471]'}`}>{service.price} <span className={`text-lg font-normal ${service.highlighted ? 'text-gray-200' : 'text-gray-600'}`}>/ maand</span></div>
                <ul className="space-y-3 mb-8">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <Check className={`w-5 h-5 ${service.highlighted ? 'text-green-400' : 'text-green-500'} mr-2`} />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link href={service.link}>
                  <Button className={`w-full ${service.highlighted ? 'bg-white text-[#266471] hover:bg-gray-100' : 'bg-black text-white hover:bg-black/90'} transition-colors duration-300`}>
                    Meer informatie
                  </Button>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Marketing Stats Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">
            De Kracht van Online Marketing
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
            In het huidige digitale tijdperk zijn Google en Meta Ads essentieel voor bedrijfsgroei. 
            Ontdek waarom deze platforms de sleutel zijn tot uw succes.
          </p>
          
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                icon: Search,
                title: "Google Ads Bereik",
                percentage: 90,
                description: "van de online zoekopdrachten gebeurt via Google, wat zorgt voor ongekende zichtbaarheid",
                stats: [
                  { icon: BarChart, text: "Gemiddelde CTR van 3.17% voor zoekadvertenties" },
                  { icon: TrendingUp, text: "ROI tot 800% voor bepaalde industrieën" }
                ]
              },
              {
                icon: Users,
                title: "Meta Ads Bereik",
                percentage: 3,
                suffix: "M+",
                description: "Nederlanders zijn dagelijks actief op Facebook en Instagram",
                stats: [
                  { icon: BarChart, text: "Gemiddelde CTR van 1.11% voor Facebook-advertenties" },
                  { icon: TrendingUp, text: "26% van de gebruikers klikt op advertenties" }
                ]
              }
            ].map((item, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-sm border border-gray-100 transform transition-all duration-300 hover:scale-105">
                <div className="flex items-center mb-4">
                  <item.icon className="w-8 h-8 text-[#266471] mr-4" />
                  <h3 className="text-2xl font-semibold">{item.title}</h3>
                </div>
                <div className="text-5xl font-bold text-[#266471] mb-4">
                  <AnimatedNumber end={item.percentage} suffix={item.suffix || '%'} />
                </div>
                <p className="text-gray-600 mb-4">
                  {item.description}
                </p>
                <ul className="space-y-2">
                  {item.stats.map((stat, statIndex) => (
                    <li key={statIndex} className="flex items-center">
                      <stat.icon className="w-5 h-5 text-[#266471] mr-2" />
                      <span>{stat.text}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_1991_11zon%20(1).jpg-afNSanhJ83R3aV9xG4tTo0IvtG94zr.jpeg"
            alt="Forest background"
            fill
            className="object-cover object-top brightness-50"
            priority
          />
        </div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 animate-fade-in text-white">
            Klaar om uw online aanwezigheid te versterken?
          </h2>
          <p className="mb-8 max-w-2xl mx-auto animate-fade-in animation-delay-300 text-white">
            Ontdek hoe wij u kunnen helpen met doelgerichte online marketing strategieën
          </p>
          <Link href="https://calendly.com/loyal-roots/kennismaking?month=2025-01">
            <Button variant="secondary" size="lg" className="bg-white text-[#266471] hover:bg-gray-100 transition-all duration-300 hover:scale-105 animate-fade-in animation-delay-600">
              Plan een gesprek
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  )
}

