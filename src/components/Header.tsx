import { Link } from 'react-router-dom'

export function Header() {
  return (
    <header className="bg-[#2F6B6B] text-white">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          <Link 
            to="/" 
            className="text-xl font-bold transition-transform hover:scale-105 duration-300"
          >
            Loyal Roots
          </Link>
          
          <nav className="hidden md:flex space-x-8">
            {['Home', 'Over Ons', 'Diensten', 'Contact'].map((item) => (
              <Link
                key={item}
                to={item === 'Home' ? '/' : `/${item.toLowerCase().replace(' ', '-')}`}
                className="relative hover:text-gray-200 transition-colors duration-300 after:content-[''] after:absolute after:w-full after:h-0.5 after:bg-white after:bottom-0 after:left-0 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300"
              >
                {item}
              </Link>
            ))}
          </nav>

          <a
            href="https://calendly.com/loyal-roots/kennismaking?month=2025-01"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-[#2F6B6B] px-6 py-3 rounded-xl hover:bg-gray-100 transition-all duration-300 hover:shadow-lg transform hover:-translate-y-0.5"
          >
            Gratis Adviesgesprek
          </a>
        </div>
      </div>
    </header>
  )
} 