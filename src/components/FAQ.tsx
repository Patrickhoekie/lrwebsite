import { useState } from 'react'

interface FAQItem {
  question: string;
  answer: string;
}

export function FAQ() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const faqItems: FAQItem[] = [
    {
      question: "Wat is het verschil tussen de verschillende dienstenpakketten?",
      answer: "Elk pakket is afgestemd op verschillende behoeften. Het Basis pakket is perfect voor startende ondernemers, Geavanceerd biedt extra functionaliteiten zoals conversie tracking, en Pro geeft toegang tot alle premium features inclusief display campagnes en remarketing."
    },
    {
      question: "Kan ik van pakket wisselen als mijn behoeften veranderen?",
      answer: "Ja, je kunt op elk moment upgraden of downgraden naar een ander pakket. We zorgen voor een soepele overgang zonder onderbreking van je campagnes."
    },
    {
      question: "Hoe vaak krijg ik rapportages over de prestaties van mijn campagnes?",
      answer: "Bij alle pakketten ontvang je maandelijkse rapportages via e-mail. Bij het Geavanceerd en Pro pakket krijg je daarnaast uitgebreide PowerPoint rapportages en toegang tot real-time dashboards voor directe inzichten."
    },
    {
      question: "Wat houdt 'conversie tracken' precies in?",
      answer: "Conversie tracking stelt ons in staat om specifieke acties van gebruikers op je website te meten, zoals aankopen, formulierinzendingen of telefonische contacten. Dit geeft inzicht in het rendement van je campagnes en helpt bij het optimaliseren van je marketing budget."
    },
    {
      question: "Hoe lang duurt het voordat ik resultaten zie?",
      answer: "De eerste resultaten zijn meestal binnen enkele weken zichtbaar. Voor Google Ads campagnes zien we vaak al binnen de eerste maand conversies, terwijl SEO-strategieën meestal 3-6 maanden nodig hebben om significant effect te tonen."
    }
  ];

  return (
    <div className="max-w-3xl mx-auto">
      {faqItems.map((item, index) => (
        <div 
          key={index} 
          className="mb-4 bg-white rounded-xl shadow-sm overflow-hidden"
          onClick={() => setActiveIndex(activeIndex === index ? null : index)}
        >
          <div className="p-4 flex justify-between items-center cursor-pointer">
            <h3 className="text-lg font-semibold">{item.question}</h3>
            <span className="text-2xl text-primary">
              {activeIndex === index ? '−' : '+'}
            </span>
          </div>
          {activeIndex === index && (
            <div className="p-4 pt-0 text-gray-600 border-t">
              {item.answer}
            </div>
          )}
        </div>
      ))}
    </div>
  )
} 