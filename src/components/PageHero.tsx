interface PageHeroProps {
  title: string;
  subtitle: string;
}

export function PageHero({ title, subtitle }: PageHeroProps) {
  return (
    <div className="relative bg-gradient-to-b from-primary via-primary/95 to-primary/80 text-white py-32">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl font-bold mb-8">{title}</h1>
        <p className="text-xl max-w-2xl mx-auto">{subtitle}</p>
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
            d="M0,40 C480,80 960,80 1440,40 L1440,100 L0,100 Z"
          />
        </svg>
      </div>
    </div>
  )
} 