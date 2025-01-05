import { ContactForm } from '../components/ContactForm'
import { FAQ } from '../components/FAQ'
import { PageHero } from '../components/PageHero'

export function Contact() {
  return (
    <div className="min-h-screen">
      <PageHero 
        title="Contact" 
        subtitle="Neem contact met ons op voor een vrijblijvend gesprek" 
      />

      <div className="container mx-auto px-4 py-16">
        <div className="max-w-2xl mx-auto">
          <ContactForm />
        </div>
      </div>

      <div className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Veelgestelde vragen</h2>
          <FAQ />
        </div>
      </div>
    </div>
  )
} 