interface PageHeroProps {
  title: string;
  subtitle: string;
}

export function PageHero({ title, subtitle }: PageHeroProps) {
  return (
    <div className="relative bg-primary text-white py-20">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl font-bold mb-4">{title}</h1>
        <p className="text-xl">{subtitle}</p>
      </div>
      {/* Golf decoratie */}
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