import { Facebook, Linkedin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-black text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Loyal Roots */}
          <div>
            <h3 className="font-bold mb-4">Loyal Roots</h3>
            <p className="text-gray-400 mb-4">
              Transparante online marketing die écht werkt voor MKB-ondernemers.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold mb-4">Contact</h3>
            <ul className="space-y-2 text-gray-400">
              <li>Tel: +31 6 20 71 23 95</li>
              <li>
                <a 
                  href="mailto:andrieswolbers@loyalroots.nl" 
                  className="hover:text-white transition-colors"
                >
                  andrieswolbers@loyalroots.nl
                </a>
              </li>
              <li>
                <a 
                  href="mailto:nickvanderharst@loyalroots.nl"
                  className="hover:text-white transition-colors"
                >
                  nickvanderharst@loyalroots.nl
                </a>
              </li>
              <li>
                <a 
                  href="https://calendly.com/loyalroots/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  Kennismaken
                </a>
              </li>
            </ul>
          </div>

          {/* Snelle Links */}
          <div>
            <h3 className="font-bold mb-4">Snelle Links</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="/over-ons" className="hover:text-white transition-colors">
                  Over Ons
                </a>
              </li>
              <li>
                <a href="/diensten" className="hover:text-white transition-colors">
                  Diensten
                </a>
              </li>
              <li>
                <a href="/contact" className="hover:text-white transition-colors">
                  Contact
                </a>
              </li>
              <li>
                <a href="/privacybeleid" className="hover:text-white transition-colors">
                  Privacybeleid
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>© 2024 Loyal Roots. Alle rechten voorbehouden.</p>
        </div>
      </div>
    </footer>
  )
}

