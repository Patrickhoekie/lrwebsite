export function Hero() {
  return (
    <div className="relative bg-primary text-white py-32">
      <div className="container mx-auto px-4">
        <div className="relative max-w-2xl mx-auto">
          <div className="relative aspect-[16/10]">
            <img
              src="/images/boom.webp"
              alt="Loyal Roots Concept"
              width={800}
              height={500}
              className="w-full h-full object-contain absolute top-0 left-0"
              loading="eager"
              fetchPriority="high"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center z-10">
              <h1 className="text-5xl font-bold mb-8 text-white">Loyal Roots</h1>
              <p className="text-2xl text-white">We groeien samen, vanaf de roots.</p>
            </div>
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