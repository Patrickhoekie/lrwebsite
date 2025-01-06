import { useState, useEffect } from 'react'
import { ChevronUp } from 'lucide-react'

export function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false)

  // Toon knop alleen als we naar beneden hebben gescrolld
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener('scroll', toggleVisibility)
    return () => window.removeEventListener('scroll', toggleVisibility)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 bg-primary hover:bg-primary/90 text-white p-3 rounded-full shadow-lg transition-all duration-300 z-50"
          aria-label="Scroll naar boven"
        >
          <ChevronUp className="w-6 h-6" />
        </button>
      )}
    </>
  )
} 