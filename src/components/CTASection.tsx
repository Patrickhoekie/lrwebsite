export function CTASection() {
  return (
    <section className="relative py-32">
      {/* Achtergrondafbeelding met overlay */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url(/images/foto-samen.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'top center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <h2 className="text-5xl font-bold mb-6">
          Klaar om uw online aanwezigheid te versterken?
        </h2>
        <p className="text-xl mb-10 max-w-2xl mx-auto">
          Ontdek hoe wij u kunnen helpen met doelgerichte online marketing strategieën
        </p>
        <a
          href="https://calendly.com/loyal-roots/kennismaking"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-white text-primary px-8 py-4 rounded-xl font-medium hover:bg-gray-100 transition-colors duration-300 hover:shadow-lg"
        >
          Plan een gesprek
        </a>
      </div>
    </section>
  )
} 