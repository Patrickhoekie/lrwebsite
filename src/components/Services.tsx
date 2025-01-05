import './Services.css'
import { Link } from 'react-router-dom';
import { ServicesPage } from './servicespage'

export function Services() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">
          Onze Diensten
        </h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Basis Pakket */}
          <div className="border rounded-2xl p-8 transition-all duration-300 hover:shadow-xl hover:border-[#2F6B6B] hover:scale-105">
            <h3 className="text-2xl font-bold mb-4">BASIS</h3>
            <div className="text-4xl font-bold text-[#2F6B6B] mb-8">€500</div>
            <ul className="space-y-4 mb-8">
              <li className="flex items-center">
                <svg className="w-5 h-5 text-[#2F6B6B] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                Zoekwoorden onderzoek
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 text-[#2F6B6B] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                Budgetonderzoek
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 text-[#2F6B6B] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                Campagne opzet
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 text-[#2F6B6B] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                Maandelijkse rapportage
              </li>
            </ul>
            <Link
              to="/diensten#basis"
              className="block w-full bg-[#2F6B6B] text-white py-3 rounded-xl text-center transition-all duration-300 hover:bg-[#245757] hover:shadow-lg transform hover:-translate-y-0.5"
            >
              Meer informatie
            </Link>
          </div>

          {/* Geavanceerd Pakket */}
          <div className="border rounded-2xl p-8 transition-all duration-300 hover:shadow-xl hover:border-[#2F6B6B] hover:scale-105 relative">
            <div className="absolute -top-3 right-4 bg-[#2F6B6B] text-white px-4 py-1 rounded-full text-sm">
              Populair
            </div>
            <h3 className="text-2xl font-bold mb-4">GEAVANCEERD</h3>
            <div className="text-4xl font-bold text-[#2F6B6B] mb-8">€900</div>
            <ul className="space-y-4 mb-8">
              <li className="flex items-center">
                <svg className="w-5 h-5 text-[#2F6B6B] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                Alles uit Basis
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 text-[#2F6B6B] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                Conversie tracken
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 text-[#2F6B6B] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                Dynamische campagne
              </li>
            </ul>
            <Link
              to="/diensten#geavanceerd"
              className="block w-full bg-[#2F6B6B] text-white py-3 rounded-xl text-center transition-all duration-300 hover:bg-[#245757] hover:shadow-lg transform hover:-translate-y-0.5"
            >
              Meer informatie
            </Link>
          </div>

          {/* Pro Pakket */}
          <div className="border rounded-2xl p-8 transition-all duration-300 hover:shadow-xl hover:border-[#2F6B6B] hover:scale-105">
            <h3 className="text-2xl font-bold mb-4">PRO</h3>
            <div className="text-4xl font-bold text-[#2F6B6B] mb-8">€1100</div>
            <ul className="space-y-4 mb-8">
              <li className="flex items-center">
                <svg className="w-5 h-5 text-[#2F6B6B] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                Alles uit Geavanceerd
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 text-[#2F6B6B] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                Display campagne
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 text-[#2F6B6B] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                Re marketing
              </li>
            </ul>
            <Link
              to="/diensten#pro"
              className="block w-full bg-[#2F6B6B] text-white py-3 rounded-xl text-center transition-all duration-300 hover:bg-[#245757] hover:shadow-lg transform hover:-translate-y-0.5"
            >
              Meer informatie
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services 