export function Hero() {
  return (
    <section className="relative h-[80vh] bg-[#2F6B6B]">
      <div className="absolute inset-0 flex justify-center items-center">
        <img 
          src="/images/boom.webp" 
          alt="Laptop met boom" 
          className="w-[800px] object-contain"
        />
      </div>
      <div className="relative z-10 container mx-auto px-4 h-full flex flex-col justify-center items-center text-center text-white">
        <h1 className="text-6xl font-bold mb-6">
          Loyal Roots
        </h1>
        <p className="text-2xl mb-12">
          We groeien samen, vanaf de roots.
        </p>
      </div>
      <div className="absolute bottom-0 w-full z-20">
        <svg viewBox="0 0 1440 160" className="w-full">
          <path 
            fill="#ffffff" 
            d="M0,48L1440,96L1440,160L0,160Z"
          />
        </svg>
      </div>
    </section>
  )
} 