import React from 'react'
import { ServiceComparison } from './ServiceComparison'
import { Link } from 'react-router-dom';

export function ServicesPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Sectie */}
      <section className="pt-40 pb-36 bg-[#2F6B6B] text-white relative">
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-6xl font-bold mb-8">Onze Diensten</h1>
          <p className="text-2xl mb-16 max-w-3xl mx-auto">
            Ontdek welk pakket het beste bij uw bedrijf past
          </p>
        </div>
        <div className="absolute bottom-0 w-full">
          <svg viewBox="0 0 1440 160" className="w-full">
            <path fill="#ffffff" d="M0,48L1440,96L1440,160L0,160Z"></path>
          </svg>
        </div>
      </section>

      {/* Diensten Sectie */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
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
                to="/contact"
                className="block w-full bg-[#2F6B6B] text-white py-3 rounded-xl text-center transition-all duration-300 hover:bg-[#245757] hover:shadow-lg transform hover:-translate-y-0.5"
              >
                Boek een pakket
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
                  Conversie tracking
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-[#2F6B6B] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  Concurrenten analyse
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-[#2F6B6B] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  Power point rapportage
                </li>
              </ul>
              <Link
                to="/contact"
                className="block w-full bg-[#2F6B6B] text-white py-3 rounded-xl text-center transition-all duration-300 hover:bg-[#245757] hover:shadow-lg transform hover:-translate-y-0.5"
              >
                Boek een pakket
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
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-[#2F6B6B] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  24/7 support
                </li>
              </ul>
              <Link
                to="/contact"
                className="block w-full bg-[#2F6B6B] text-white py-3 rounded-xl text-center transition-all duration-300 hover:bg-[#245757] hover:shadow-lg transform hover:-translate-y-0.5"
              >
                Boek een pakket
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Vergelijk Diensten Sectie */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">
            Vergelijk onze diensten
          </h2>
          <div className="max-w-6xl mx-auto overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-left p-4">Features</th>
                  <th className="text-center p-4">BASIS</th>
                  <th className="text-center p-4">GEAVANCEERD</th>
                  <th className="text-center p-4">PRO</th>
                </tr>
              </thead>
              <tbody>
                {[
                  "Voorstel zoekwoorden onderzoek",
                  "Budgetonderzoek",
                  "Doelen opstellen",
                  "Campagne opzet",
                  "Advertentie creatie",
                  "Account onderhoud",
                  "Rapportage via de mail",
                  "Conversie tracken",
                  "Concurrenten campagne",
                  "Dynamische campagne",
                  "Power point rapportage",
                  "Display campagne",
                  "Re marketing"
                ].map((feature, index) => (
                  <tr key={index} className="border-b">
                    <td className="p-4">{feature}</td>
                    <td className="text-center p-4">
                      {index < 7 ? (
                        <svg className="w-5 h-5 text-[#2F6B6B] mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                      ) : (
                        <svg className="w-5 h-5 text-red-500 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                        </svg>
                      )}
                    </td>
                    <td className="text-center p-4">
                      {index < 11 ? (
                        <svg className="w-5 h-5 text-[#2F6B6B] mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                      ) : (
                        <svg className="w-5 h-5 text-red-500 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                        </svg>
                      )}
                    </td>
                    <td className="text-center p-4">
                      <svg className="w-5 h-5 text-[#2F6B6B] mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                    </td>
                  </tr>
                ))}
                <tr className="border-b">
                  <td className="p-4 font-bold">Prijs per maand</td>
                  <td className="text-center p-4">€500</td>
                  <td className="text-center p-4">€900</td>
                  <td className="text-center p-4">€1100</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </div>
  )
} 