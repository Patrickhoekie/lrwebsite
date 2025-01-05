import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Menu, X } from 'lucide-react'

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const menuItems = [
    { href: '/', label: 'Home' },
    { href: '/over-ons', label: 'Over Ons' },
    { href: '/diensten', label: 'Diensten' },
    { href: '/contact', label: 'Contact' },
  ]

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-transparent' : 'bg-[#266471]'
    } text-white`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="text-xl font-semibold">
            Loyal Roots
          </Link>
          
          <div className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <Link key={item.href} href={item.href} className="hover:text-gray-200">
                {item.label}
              </Link>
            ))}
            <Link href="https://calendly.com/loyal-roots/kennismaking?month=2025-01">
              <Button variant="secondary" className="bg-white text-[#266471] hover:bg-gray-100">
                Gratis Adviesgesprek
              </Button>
            </Link>
          </div>

          <button className="md:hidden" onClick={toggleMenu}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {menuItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block px-3 py-2 rounded-md text-base font-medium hover:bg-[#1c4b54] hover:text-white"
                onClick={toggleMenu}
              >
                {item.label}
              </Link>
            ))}
            <Link href="https://calendly.com/loyal-roots/kennismaking?month=2025-01" onClick={toggleMenu}>
              <Button variant="secondary" className="w-full mt-2 bg-white text-[#266471] hover:bg-gray-100">
                Gratis Adviesgesprek
              </Button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}

