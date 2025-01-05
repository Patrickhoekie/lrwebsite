export function Features() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Onze Diensten</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {/* Google Ads */}
          <div className="text-center">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-xl font-bold mb-4">Google Ads</h3>
              <p className="text-gray-600">
                Bereik potentiële klanten op het juiste moment met gerichte Google advertenties.
              </p>
            </div>
          </div>

          {/* Meta Ads */}
          <div className="text-center">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-xl font-bold mb-4">Meta Ads</h3>
              <p className="text-gray-600">
                Vergroot uw bereik via Facebook en Instagram met effectieve advertentiecampagnes.
              </p>
            </div>
          </div>

          {/* Display & Remarketing */}
          <div className="text-center">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-xl font-bold mb-4">Display & Remarketing</h3>
              <p className="text-gray-600">
                Blijf top-of-mind bij uw doelgroep met visuele advertenties en retargeting.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 