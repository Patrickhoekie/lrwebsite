import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Navigation } from '@/components/layout/navigation'
import { Footer } from '@/components/layout/footer'
import { Button } from '@/components/ui/button'
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { FaqSection } from '@/components/faq-section'
import WaveTransition from '@/components/layout/wave-transition'
import { toast } from 'sonner'

type FormData = {
  contactType: string;
  package: string;
  name: string;
  email: string;
  phone: string;
  message: string;
}

type FormErrors = {
  [K in keyof FormData]?: string;
}

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState<FormData>({
    contactType: '',
    package: '',
    name: '',
    email: '',
    phone: '',
    message: ''
  })
  const [errors, setErrors] = useState<FormErrors>({})
  const [isSuccess, setIsSuccess] = useState(false)
  const router = useRouter()

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {}
    let isValid = true

    Object.entries(formData).forEach(([key, value]) => {
      if (!value) {
        newErrors[key as keyof FormData] = 'Dit veld is verplicht'
        isValid = false
      }
    })

    if (formData.email && !/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Voer een geldig e-mailadres in'
      isValid = false
    }

    setErrors(newErrors)
    return isValid
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
    if (errors[name as keyof FormData]) {
      setErrors(prev => ({ ...prev, [name]: '' }))
    }
  }

  const handleSelectChange = (name: string, value: string) => {
    setFormData(prev => ({ ...prev, [name]: value }))
    if (errors[name as keyof FormData]) {
      setErrors(prev => ({ ...prev, [name]: '' }))
    }
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!validateForm()) return

    setIsSubmitting(true)

    try {
      const response = await fetch('https://formspree.io/f/xwppwqgo', {
        method: 'POST',
        body: JSON.stringify(formData),
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
      })

      if (response.ok) {
        setIsSuccess(true)
        toast.success('Bedankt voor uw bericht! We nemen zo spoedig mogelijk contact met u op, vaak al binnen 24 uur.')
        setFormData({
          contactType: '',
          package: '',
          name: '',
          email: '',
          phone: '',
          message: ''
        })
        router.refresh()
      } else {
        throw new Error('Er is iets misgegaan')
      }
    } catch (error) {
      toast.error('Er is iets misgegaan bij het versturen van uw bericht. Probeer het later opnieuw.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-[#266471] text-white relative">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Neem Contact Op</h1>
            <p className="text-xl mb-4 max-w-2xl mx-auto">
              Wij staan klaar om al uw vragen te beantwoorden en u te helpen met 
              uw online marketing strategie.
            </p>
          </div>
        </div>
        <WaveTransition />
      </section>

      {/* Contact Form Section */}
      <section className="py-20 -mt-10 relative z-10">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h2 className="text-2xl font-bold mb-6">Laat een bericht achter</h2>
              <p className="text-gray-600 mb-8">
                Wij nemen zo snel mogelijk contact met u op
              </p>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="contact-type" className="block text-sm font-medium text-gray-700 mb-1">
                    Waar kunnen we u mee helpen? *
                  </label>
                  <Select 
                    name="contactType" 
                    value={formData.contactType} 
                    onValueChange={(value) => handleSelectChange('contactType', value)}
                    required
                  >
                    <SelectTrigger className={`w-full ${errors.contactType ? 'border-red-500' : ''}`}>
                      <SelectValue placeholder="Selecteer contact type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="question">Ik heb een vraag</SelectItem>
                      <SelectItem value="signup">Ik wil me aanmelden voor een pakket</SelectItem>
                    </SelectContent>
                  </Select>
                  {errors.contactType && <p className="text-red-500 text-sm mt-1">{errors.contactType}</p>}
                </div>

                <div>
                  <label htmlFor="package" className="block text-sm font-medium text-gray-700 mb-1">
                    Welk pakket heeft uw interesse? *
                  </label>
                  <Select 
                    name="package" 
                    value={formData.package} 
                    onValueChange={(value) => handleSelectChange('package', value)}
                    required
                  >
                    <SelectTrigger className={`w-full ${errors.package ? 'border-red-500' : ''}`}>
                      <SelectValue placeholder="Selecteer een pakket" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="none">Geen pakket / Overig</SelectItem>
                      <SelectItem value="basis">Dienst Basis - €500/maand</SelectItem>
                      <SelectItem value="geavanceerd">Dienst Geavanceerd - €900/maand</SelectItem>
                      <SelectItem value="pro">Dienst Pro - €1100/maand</SelectItem>
                    </SelectContent>
                  </Select>
                  {errors.package && <p className="text-red-500 text-sm mt-1">{errors.package}</p>}
                </div>

                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Naam *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-2 border rounded-md focus:ring-[#266471] focus:border-[#266471] ${errors.name ? 'border-red-500' : ''}`}
                    placeholder="Uw naam"
                    required
                  />
                  {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    E-mail *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-2 border rounded-md focus:ring-[#266471] focus:border-[#266471] ${errors.email ? 'border-red-500' : ''}`}
                    placeholder="uw@email.nl"
                    required
                  />
                  {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                    Telefoonnummer *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-2 border rounded-md focus:ring-[#266471] focus:border-[#266471] ${errors.phone ? 'border-red-500' : ''}`}
                    placeholder="Uw telefoonnummer"
                    required
                  />
                  {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Bericht *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={6}
                    className="w-full px-4 py-2 border rounded-md focus:ring-[#266471] focus:border-[#266471]"
                    placeholder="Uw bericht"
                    required
                  ></textarea>
                  {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
                </div>
                
                <Button 
                  type="submit" 
                  className={`w-full text-white transition-all duration-300 transform hover:scale-105 ${
                    isSuccess ? 'bg-green-500 hover:bg-green-600' : 'bg-[#266471] hover:bg-[#266471]/90'
                  }`}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Bericht wordt verstuurd...' : isSuccess ? 'Bericht verzonden!' : 'Verstuur Bericht'}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FaqSection />

      <Footer />
    </div>
  )
}

