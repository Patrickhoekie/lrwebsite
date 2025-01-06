import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

interface FAQItem {
  question: string;
  answer: string;
}

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqItems: FAQItem[] = [
    {
      question: "Wat maakt Loyal Roots anders dan andere marketing bureaus?",
      answer: "Bij Loyal Roots staan transparantie en persoonlijke aandacht centraal. We geloven in duurzame groei en werken nauw samen met onze klanten om hun doelen te bereiken."
    },
    {
      question: "Hoe lang duurt het voordat ik resultaat zie?",
      answer: "Dit verschilt per situatie en campagne. Meestal zien klanten binnen 1-3 maanden meetbare resultaten. We monitoren continu en optimaliseren waar nodig."
    },
    {
      question: "Kan ik tussentijds mijn pakket aanpassen?",
      answer: "Ja, dat is mogelijk. We begrijpen dat behoeften kunnen veranderen en passen ons graag aan aan jouw situatie."
    },
    {
      question: "Hoe vaak krijg ik updates over de resultaten?",
      answer: "Afhankelijk van je pakket ontvang je wekelijks of maandelijks uitgebreide rapportages. Daarnaast zijn we altijd bereikbaar voor vragen."
    }
  ];

  return (
    <div className="max-w-3xl mx-auto">
      {faqItems.map((item, index) => (
        <div key={index} className="border-b border-gray-200 last:border-0">
          <button
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
            className="w-full py-6 flex justify-between items-center text-left hover:text-primary transition-colors duration-300"
          >
            <span className="font-medium text-lg">{item.question}</span>
            <ChevronDown 
              className={`w-5 h-5 transform transition-transform duration-300 ${
                openIndex === index ? 'rotate-180' : ''
              }`}
            />
          </button>
          <div
            className={`overflow-hidden transition-all duration-300 ease-in-out ${
              openIndex === index ? 'max-h-40 opacity-100 mb-6' : 'max-h-0 opacity-0'
            }`}
          >
            <p className="text-gray-600">{item.answer}</p>
          </div>
        </div>
      ))}
    </div>
  )
} 