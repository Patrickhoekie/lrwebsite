import './Team.css'

export function Team() {
  return (
    <section className="py-16">
      <h2 className="text-3xl font-bold text-center mb-12">Ons Team</h2>
      <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {/* Andries */}
        <div className="text-center">
          <div className="relative mb-4 aspect-square overflow-hidden rounded-lg">
            <img
              src="/images/andries.jpg"
              alt="Andries Wolbers"
              className="object-cover w-full h-full"
            />
          </div>
          <h3 className="text-xl font-bold mb-2">Andries Wolbers</h3>
          <p className="text-gray-600">Oprichter & Eigenaar, Creatief Strateeg</p>
        </div>

        {/* Nick */}
        <div className="text-center">
          <div className="relative mb-4 aspect-square overflow-hidden rounded-lg">
            <img
              src="/images/nick.jpg"
              alt="Nick van der Harst"
              className="object-cover w-full h-full"
            />
          </div>
          <h3 className="text-xl font-bold mb-2">Nick van der Harst</h3>
          <p className="text-gray-600">Oprichter & Eigenaar, Google Ads Specialist</p>
        </div>
      </div>
    </section>
  )
} 