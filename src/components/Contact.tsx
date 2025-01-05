export function Contact() {
  return (
    <div className="py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-12">Contact</h1>
        
        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Informatie */}
          <div>
            <h2 className="text-2xl font-bold mb-6">Neem Contact Op</h2>
            <div className="space-y-4">
              <p className="flex items-center">
                <span className="font-bold mr-2">Email:</span>
                <a href="mailto:info@lrwebsite.nl" className="text-blue-600 hover:text-blue-800">
                  info@lrwebsite.nl
                </a>
              </p>
              <p className="flex items-center">
                <span className="font-bold mr-2">Telefoon:</span>
                <a href="tel:+31612345678" className="text-blue-600 hover:text-blue-800">
                  +31 6 12345678
                </a>
              </p>
              <p className="flex items-center">
                <span className="font-bold mr-2">Adres:</span>
                <span>Amsterdam, Nederland</span>
              </p>
            </div>
          </div>

          {/* Contact Formulier */}
          <div>
            <h2 className="text-2xl font-bold mb-6">Stuur een Bericht</h2>
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  Naam
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                  Bericht
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-colors"
              >
                Verstuur
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
} 