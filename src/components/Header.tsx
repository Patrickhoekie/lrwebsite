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
          {/* Logo */}
          <Link to="/" className="text-xl font-bold text-white">
            Loyal Roots
          </Link>

          {/* Desktop Navigation */}
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
            className="md:hidden text-white hover:text-white/80"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-primary/95 backdrop-blur-sm">
          <div className="container mx-auto px-4 py-4">
            <nav className="flex flex-col space-y-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={`${
                    isActive(item.href)
                      ? 'text-white font-medium'
                      : 'text-white/80 hover:text-white'
                  } transition-colors text-lg py-2`}
                >
                  {item.name}
                </Link>
              ))}
              <a
                href="https://calendly.com/loyal-roots/kennismaking?month=2025-01"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsMenuOpen(false)}
                className="bg-white text-primary px-4 py-2 rounded-lg font-medium hover:bg-white/90 transition-colors text-center mt-2"
              >
                Gratis adviesgesprek
              </a>
            </nav>
          </div>
        </div>
      )}
    </header>
  )
} 