export function ContactForm() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div className="bg-white p-8 rounded-xl shadow-sm">
            <h2 className="text-2xl font-bold mb-6">Contact Informatie</h2>
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <svg className="w-6 h-6 text-[#2F6B6B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                </svg>
                <div>
                  <p className="font-semibold">Email</p>
                  <p className="text-gray-600">info@loyalroots.nl</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <svg className="w-6 h-6 text-[#2F6B6B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                </svg>
                <div>
                  <p className="font-semibold">Telefoon</p>
                  <p className="text-gray-600">+31 (0)6 18 88 48 77</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <svg className="w-6 h-6 text-[#2F6B6B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                </svg>
                <div>
                  <p className="font-semibold">Locatie</p>
                  <p className="text-gray-600">Eindhoven, Nederland</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-8 rounded-xl shadow-sm">
            <h2 className="text-2xl font-bold mb-6">Stuur ons een bericht</h2>
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Naam
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#2F6B6B] focus:border-[#2F6B6B]"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#2F6B6B] focus:border-[#2F6B6B]"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Bericht
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#2F6B6B] focus:border-[#2F6B6B]"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-[#2F6B6B] text-white py-3 rounded-xl transition-all duration-300 hover:bg-[#245757] hover:shadow-lg transform hover:-translate-y-0.5"
              >
                Verstuur bericht
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
} 