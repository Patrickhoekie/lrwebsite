import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { Link, useLocation } from 'react-router-dom'

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const location = useLocation()

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Over Ons', href: '/over-ons' },
    { name: 'Diensten', href: '/diensten' },
    { name: 'Contact', href: '/contact' },
  ]

  const isActive = (path: string) => {
    return location.pathname === path
  }

  return (
    <header className="absolute w-full top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          <Link to="/" className="text-xl font-bold text-white">
            Loyal Roots
          </Link>

          {/* Desktop Navigation blijft hetzelfde */}
          <div className="hidden md:flex items-center space-x-8">
            <nav className="flex space-x-8">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`${
                    isActive(item.href)
                      ? 'text-white font-medium'
                      : 'text-white/80 hover:text-white'
                  } transition-colors`}
                >
                  {item.name}
                </Link>
              ))}
            </nav>
            <a
              href="https://calendly.com/loyal-roots/kennismaking?month=2025-01"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-primary px-4 py-2 rounded-lg font-medium hover:bg-white/90 transition-colors"
            >
              Gratis adviesgesprek
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden relative w-10 h-10 text-white hover:text-white/80 transition-colors duration-300 focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <div className="absolute inset-0 flex items-center justify-center">
              {isMenuOpen ? (
                <X className="h-6 w-6 transform transition-all duration-300 rotate-90 scale-100" />
              ) : (
                <Menu className="h-6 w-6 transform transition-all duration-300 scale-100" />
              )}
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`md:hidden fixed inset-0 bg-primary/95 backdrop-blur-lg transform transition-all duration-300 ease-in-out ${
          isMenuOpen ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
        }`}
      >
        {/* Toegevoegde sluit-knop */}
        <button
          onClick={() => setIsMenuOpen(false)}
          className="absolute top-6 right-6 text-white hover:text-white/80 transition-colors duration-300 focus:outline-none"
          aria-label="Sluit menu"
        >
          <X className="h-8 w-8 transform transition-all duration-300 hover:rotate-90" />
        </button>

        <div className="container mx-auto px-4 py-8 h-full flex flex-col">
          <nav className="flex-grow flex flex-col justify-center space-y-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                onClick={() => setIsMenuOpen(false)}
                className={`${
                  isActive(item.href)
                    ? 'text-white font-medium translate-x-2'
                    : 'text-white/80 hover:text-white hover:translate-x-2'
                } transition-all duration-300 text-2xl py-2`}
              >
                {item.name}
              </Link>
            ))}
            <a
              href="https://calendly.com/loyal-roots/kennismaking?month=2025-01"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsMenuOpen(false)}
              className="bg-white text-primary px-6 py-3 rounded-xl font-medium hover:bg-white/90 transition-all duration-300 transform hover:scale-105 text-center mt-8"
            >
              Gratis adviesgesprek
            </a>
          </nav>
        </div>
      </div>
    </header>
  )
} 