import { useState } from 'react'
import { useForm, ValidationError } from '@formspree/react'

export function ContactPage() {
  const [formData, setFormData] = useState({
    contactType: '',
    package: '',
    name: '',
    email: '',
    phone: '',
    message: ''
  })

  const [openFaq, setOpenFaq] = useState<number | null>(null)
  const [state, handleSubmit] = useForm("xwppwqgo")

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index)
  }

  const faqItems = [
    {
      question: "Wat is het verschil tussen de verschillende dienstenpakketten?",
      answer: "Onze pakketten verschillen in de mate van ondersteuning en functionaliteit. Het Basis pakket bevat essentiële diensten zoals zoekwoordenonderzoek en campagne opzet. Het Geavanceerde pakket voegt daar conversie tracking en dynamische campagnes aan toe. Het Pro pakket biedt het complete pakket inclusief display advertising en remarketing."
    },
    {
      question: "Kan ik van pakket wisselen als mijn behoeften veranderen?",
      answer: "Ja, u kunt op elk moment van pakket wisselen. We begrijpen dat uw behoeften kunnen veranderen en passen ons graag aan uw situatie aan. Neem contact met ons op om de mogelijkheden te bespreken."
    },
    {
      question: "Hoe vaak krijg ik rapportages over de prestaties van mijn campagnes?",
      answer: "De frequentie van rapportages hangt af van uw pakket. Bij het Basis pakket ontvangt u maandelijkse rapportages, bij Geavanceerd krijgt u gedetailleerdere rapportages inclusief Power Point presentaties, en bij Pro ontvangt u wekelijkse updates en 24/7 toegang tot uw campagne statistieken."
    },
    {
      question: "Wat houdt 'conversie tracken' precies in?",
      answer: "Conversie tracking is het meten en analyseren van specifieke acties die bezoekers op uw website ondernemen, zoals aankopen, formulier invullingen of telefonisch contact. Dit geeft inzicht in het rendement van uw campagnes en helpt bij het optimaliseren van uw marketing strategie."
    }
  ]

  if (state.succeeded) {
    return (
      <div className="min-h-screen">
        <section className="pt-40 pb-36 bg-[#2F6B6B] text-white relative">
          <div className="container mx-auto px-4 text-center relative z-10">
            <h1 className="text-6xl font-bold mb-8">Bedankt voor uw bericht!</h1>
            <p className="text-2xl mb-16 max-w-3xl mx-auto">
              We nemen zo spoedig mogelijk contact met u op.
            </p>
          </div>
          <div className="absolute bottom-0 w-full">
            <svg viewBox="0 0 1440 160" className="w-full">
              <path fill="#ffffff" d="M0,48L1440,96L1440,160L0,160Z"></path>
            </svg>
          </div>
        </section>
      </div>
    )
  }

  return (
    <div className="min-h-screen">
      {/* Hero Sectie */}
      <section className="pt-40 pb-36 bg-[#2F6B6B] text-white relative">
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-6xl font-bold mb-8">
            Contact
          </h1>
          <p className="text-2xl mb-16 max-w-3xl mx-auto">
            Neem contact met ons op voor een gratis adviesgesprek
          </p>
        </div>
        <div className="absolute bottom-0 w-full">
          <svg viewBox="0 0 1440 160" className="w-full">
            <path fill="#ffffff" d="M0,48L1440,96L1440,160L0,160Z"></path>
          </svg>
        </div>
      </section>

      {/* Contact Formulier Sectie */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-sm p-8">
            <h2 className="text-3xl font-bold mb-4">
              Laat een bericht achter
            </h2>
            <p className="text-gray-600 mb-8">
              Wij nemen zo snel mogelijk contact met u op
            </p>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block mb-2">
                  Waar kunnen we u mee helpen? <span className="text-red-500">*</span>
                </label>
                <select 
                  name="contactType"
                  className="w-full p-3 border rounded-md"
                  value={formData.contactType}
                  onChange={(e) => setFormData({...formData, contactType: e.target.value})}
                  required
                >
                  <option value="">Selecteer contact type</option>
                  <option value="advies">Adviesgesprek</option>
                  <option value="vraag">Algemene vraag</option>
                  <option value="offerte">Offerte aanvraag</option>
                </select>
                <ValidationError prefix="Contact Type" field="contactType" errors={state.errors} />
              </div>

              <div>
                <label className="block mb-2">
                  Welk pakket heeft uw interesse? <span className="text-red-500">*</span>
                </label>
                <select 
                  name="package"
                  className="w-full p-3 border rounded-md"
                  value={formData.package}
                  onChange={(e) => setFormData({...formData, package: e.target.value})}
                  required
                >
                  <option value="">Selecteer een pakket</option>
                  <option value="basis">Basis</option>
                  <option value="geavanceerd">Geavanceerd</option>
                  <option value="pro">Pro</option>
                </select>
                <ValidationError prefix="Package" field="package" errors={state.errors} />
              </div>

              <div>
                <label className="block mb-2">
                  Naam <span className="text-red-500">*</span>
                </label>
                <input 
                  type="text"
                  name="name"
                  placeholder="Uw naam"
                  className="w-full p-3 border rounded-xl transition-all duration-300 focus:border-[#2F6B6B] focus:ring-1 focus:ring-[#2F6B6B] focus:outline-none"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  required
                />
                <ValidationError prefix="Name" field="name" errors={state.errors} />
              </div>

              <div>
                <label className="block mb-2">
                  E-mail <span className="text-red-500">*</span>
                </label>
                <input 
                  type="email"
                  name="email"
                  placeholder="uw@email.nl"
                  className="w-full p-3 border rounded-md"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  required
                />
                <ValidationError prefix="Email" field="email" errors={state.errors} />
              </div>

              <div>
                <label className="block mb-2">
                  Telefoonnummer <span className="text-red-500">*</span>
                </label>
                <input 
                  type="tel"
                  name="phone"
                  placeholder="Uw telefoonnummer"
                  className="w-full p-3 border rounded-md"
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  required
                />
                <ValidationError prefix="Phone" field="phone" errors={state.errors} />
              </div>

              <div>
                <label className="block mb-2">
                  Bericht <span className="text-red-500">*</span>
                </label>
                <textarea 
                  name="message"
                  placeholder="Uw bericht"
                  className="w-full p-3 border rounded-xl transition-all duration-300 focus:border-[#2F6B6B] focus:ring-1 focus:ring-[#2F6B6B] focus:outline-none h-32"
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  required
                />
                <ValidationError prefix="Message" field="message" errors={state.errors} />
              </div>

              <button 
                type="submit"
                className="w-full py-3 px-6 bg-[#2F6B6B] text-white rounded-xl transition-all duration-300 hover:bg-[#245757]"
              >
                Verstuur Bericht
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* FAQ Sectie */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">
            Veelgestelde vragen
          </h2>
          <div className="max-w-3xl mx-auto">
            {faqItems.map((item, index) => (
              <div key={index} className="mb-4">
                <button
                  className="w-full text-left p-4 bg-white rounded-xl shadow-sm flex justify-between items-center transition-all duration-300 hover:bg-gray-50"
                  onClick={() => toggleFaq(index)}
                >
                  <span className="font-medium">{item.question}</span>
                  <svg
                    className={`w-5 h-5 transform transition-transform ${
                      openFaq === index ? 'rotate-180' : ''
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                {openFaq === index && (
                  <div className="p-4 bg-white rounded-xl border-t">
                    <p className="text-gray-600">
                      {item.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
} 