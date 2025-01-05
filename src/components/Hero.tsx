export function Hero() {
  return (
    <div className="relative bg-primary text-white py-32">
      <div className="container mx-auto px-4">
        <div className="relative max-w-2xl mx-auto">
          <img
            src="/images/boom.webp"
            alt="Loyal Roots Concept"
            className="w-full h-auto"
          />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center w-full">
            <h1 className="text-5xl font-bold mb-8 text-white">Loyal Roots</h1>
            <p className="text-2xl text-white">We groeien samen, vanaf de roots.</p>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full overflow-hidden">
        <svg 
          viewBox="0 0 1440 100" 
          className="w-full h-[100px] transform translate-y-1"
          preserveAspectRatio="none"
        >
          <path 
            fill="#ffffff" 
            fillOpacity="1" 
            d="M0,32L1440,96L1440,320L0,320Z"
          />
        </svg>
      </div>
    </div>
  )
} 