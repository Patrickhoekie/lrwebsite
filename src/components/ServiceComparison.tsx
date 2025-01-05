export function ServiceComparison() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">
          Vergelijk onze diensten
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full max-w-6xl mx-auto">
            <thead>
              <tr className="border-b">
                <th className="text-left py-4 px-4">Features</th>
                <th className="text-center py-4 px-4">BASIS</th>
                <th className="text-center py-4 px-4">GEAVANCEERD</th>
                <th className="text-center py-4 px-4">PRO</th>
              </tr>
            </thead>
            <tbody>
              {[
                "Voorstel zoekwoorden onderzoek",
                "Budgetonderzoek",
                "Doelen opstellen",
                "Campagne opzet",
                "Advertentie creatie",
                "Account onderhoud",
                "Rapportage via de mail",
                "Conversie tracken",
                "Concurrenten campagne",
                "Dynamische campagne",
                "Power point rapportage",
                "Display campagne",
                "Re marketing"
              ].map((feature, index) => (
                <tr key={index} className="border-b">
                  <td className="py-4 px-4">{feature}</td>
                  <td className="text-center py-4 px-4">
                    {index < 7 ? (
                      <svg className="w-5 h-5 mx-auto text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                    ) : (
                      <svg className="w-5 h-5 mx-auto text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                      </svg>
                    )}
                  </td>
                  <td className="text-center py-4 px-4">
                    {index < 11 ? (
                      <svg className="w-5 h-5 mx-auto text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                    ) : (
                      <svg className="w-5 h-5 mx-auto text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                      </svg>
                    )}
                  </td>
                  <td className="text-center py-4 px-4">
                    <svg className="w-5 h-5 mx-auto text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </td>
                </tr>
              ))}
              <tr className="border-b font-bold">
                <td className="py-4 px-4">Prijs per maand</td>
                <td className="text-center py-4 px-4">€500</td>
                <td className="text-center py-4 px-4">€900</td>
                <td className="text-center py-4 px-4">€1100</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
} 