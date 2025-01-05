export function CTASection() {
  return (
    <section 
      className="relative h-[400px]" 
      style={{ 
        backgroundImage: 'url("/images/foto samen.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'top'
      }}
    >
      <div className="absolute inset-0 bg-black/50"></div>
      <div className="container mx-auto px-4 h-full flex flex-col justify-center items-center text-center relative z-10 text-white max-w-4xl">
        <h2 className="text-4xl font-bold mb-4">
          Klaar om uw online aanwezigheid te versterken?
        </h2>
        <p className="text-xl mb-8 max-w-2xl">
          Ontdek hoe wij u kunnen helpen met doelgerichte online marketing strategieën
        </p>
        <a
          href="https://calendly.com/loyal-roots/kennismaking?month=2025-01"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-white text-[#2F6B6B] px-8 py-3 rounded-xl hover:bg-gray-100 transition-all duration-300 hover:shadow-lg transform hover:-translate-y-0.5"
        >
          Plan een gesprek
        </a>
      </div>
    </section>
  )
} 