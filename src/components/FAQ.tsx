import { useState } from 'react'
import './FAQ.css'

interface FAQItem {
  question: string;
  answer: string;
}

function FAQ() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const faqItems: FAQItem[] = [
    {
      question: "Wat is het verschil tussen de verschillende dienstenpakketten?",
      answer: "Elk pakket is afgestemd op verschillende behoeften. Het Basis pakket is perfect voor startende ondernemers, Geavanceerd biedt extra functionaliteiten zoals conversie tracking, en Pro geeft toegang tot alle premium features inclusief display campagnes en remarketing."
    },
    {
      question: "Kan ik van pakket wisselen als mijn behoeften veranderen?",
      answer: "Ja, je kunt op elk moment upgraden of downgraden naar een ander pakket. We zorgen voor een soepele overgang zonder onderbreking van je campagnes."
    }
  ];

  return (
    <section className="faq">
      <div className="container">
        <h2>Veelgestelde vragen</h2>
        {faqItems.map((item, index) => (
          <div 
            key={index} 
            className="faq-item"
            onClick={() => setActiveIndex(activeIndex === index ? null : index)}
          >
            <h3>{item.question}</h3>
            {activeIndex === index && <p>{item.answer}</p>}
          </div>
        ))}
      </div>
    </section>
  )
}

export default FAQ 