export function ServiceComparison() {
  return (
    <div className="container mx-auto px-4">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Vergelijk onze diensten</h2>
        
        <div className="overflow-x-auto bg-white rounded-xl shadow-sm">
          <table className="w-full">
            <thead>
              <tr className="border-b">
                <th className="text-left py-4 px-6">Features</th>
                <th className="text-center py-4 px-4 w-32">BASIS</th>
                <th className="text-center py-4 px-4 w-32">GEAVANCEERD</th>
                <th className="text-center py-4 px-4 w-32">PRO</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <td className="py-4 px-6">Vooraf zoekwoorden onderzoek</td>
                <td className="text-center py-4 px-4"><CheckIcon /></td>
                <td className="text-center py-4 px-4"><CheckIcon /></td>
                <td className="text-center py-4 px-4"><CheckIcon /></td>
              </tr>
              <tr className="border-b">
                <td className="py-4 px-6">Budgetonderzoek</td>
                <td className="text-center py-4 px-4"><CheckIcon /></td>
                <td className="text-center py-4 px-4"><CheckIcon /></td>
                <td className="text-center py-4 px-4"><CheckIcon /></td>
              </tr>
              <tr className="border-b">
                <td className="py-4 px-6">Doelen opstellen</td>
                <td className="text-center py-4 px-4"><CheckIcon /></td>
                <td className="text-center py-4 px-4"><CheckIcon /></td>
                <td className="text-center py-4 px-4"><CheckIcon /></td>
              </tr>
              <tr className="border-b">
                <td className="py-4 px-6">Campagne opzet</td>
                <td className="text-center py-4 px-4"><CheckIcon /></td>
                <td className="text-center py-4 px-4"><CheckIcon /></td>
                <td className="text-center py-4 px-4"><CheckIcon /></td>
              </tr>
              <tr className="border-b">
                <td className="py-4 px-6">Advertentie creatie</td>
                <td className="text-center py-4 px-4"><CheckIcon /></td>
                <td className="text-center py-4 px-4"><CheckIcon /></td>
                <td className="text-center py-4 px-4"><CheckIcon /></td>
              </tr>
              <tr className="border-b">
                <td className="py-4 px-6">Account onderhoud</td>
                <td className="text-center py-4 px-4"><CheckIcon /></td>
                <td className="text-center py-4 px-4"><CheckIcon /></td>
                <td className="text-center py-4 px-4"><CheckIcon /></td>
              </tr>
              <tr className="border-b">
                <td className="py-4 px-6">Rapportage via de mail</td>
                <td className="text-center py-4 px-4"><CheckIcon /></td>
                <td className="text-center py-4 px-4"><CheckIcon /></td>
                <td className="text-center py-4 px-4"><CheckIcon /></td>
              </tr>
              <tr className="border-b">
                <td className="py-4 px-6">Conversie tracken</td>
                <td className="text-center py-4 px-4"></td>
                <td className="text-center py-4 px-4"><CheckIcon /></td>
                <td className="text-center py-4 px-4"><CheckIcon /></td>
              </tr>
              <tr className="border-b">
                <td className="py-4 px-6">Concurrenten campagne</td>
                <td className="text-center py-4 px-4"></td>
                <td className="text-center py-4 px-4"><CheckIcon /></td>
                <td className="text-center py-4 px-4"><CheckIcon /></td>
              </tr>
              <tr className="border-b">
                <td className="py-4 px-6">Dynamische campagne</td>
                <td className="text-center py-4 px-4"></td>
                <td className="text-center py-4 px-4"><CheckIcon /></td>
                <td className="text-center py-4 px-4"><CheckIcon /></td>
              </tr>
              <tr className="border-b">
                <td className="py-4 px-6">Power point rapportage</td>
                <td className="text-center py-4 px-4"></td>
                <td className="text-center py-4 px-4"><CheckIcon /></td>
                <td className="text-center py-4 px-4"><CheckIcon /></td>
              </tr>
              <tr className="border-b">
                <td className="py-4 px-6">Display campagne</td>
                <td className="text-center py-4 px-4"></td>
                <td className="text-center py-4 px-4"></td>
                <td className="text-center py-4 px-4"><CheckIcon /></td>
              </tr>
              <tr className="border-b">
                <td className="py-4 px-6">Re marketing</td>
                <td className="text-center py-4 px-4"></td>
                <td className="text-center py-4 px-4"></td>
                <td className="text-center py-4 px-4"><CheckIcon /></td>
              </tr>
              <tr className="border-t bg-gray-50">
                <td className="py-6 px-6 font-bold">Prijs per maand</td>
                <td className="text-center py-6 px-4 font-bold">€500</td>
                <td className="text-center py-6 px-4 font-bold">€900</td>
                <td className="text-center py-6 px-4 font-bold">€1100</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="text-center mt-8">
          <a
            href="/contact"
            className="inline-block bg-primary text-white px-8 py-3 rounded-xl font-medium hover:bg-primary/90 transition-colors"
          >
            Kies een dienst
          </a>
        </div>
      </div>
    </div>
  )
}

function CheckIcon() {
  return (
    <svg className="w-5 h-5 text-primary mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
    </svg>
  )
} 