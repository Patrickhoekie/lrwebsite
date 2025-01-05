import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export function FaqSection() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Veelgestelde vragen</h2>
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger>
                Wat is het verschil tussen de verschillende dienstenpakketten?
              </AccordionTrigger>
              <AccordionContent>
                Onze pakketten verschillen in de mate van dienstverlening en functionaliteit. Het Basis pakket biedt essentiële Google Ads services, het Geavanceerd pakket voegt daar conversie tracking en concurrentie-analyse aan toe, en het Pro pakket biedt het complete spectrum inclusief display advertising en remarketing campagnes. Bekijk onze diensten pagina voor een gedetailleerd overzicht.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2">
              <AccordionTrigger>
                Kan ik van pakket wisselen als mijn behoeften veranderen?
              </AccordionTrigger>
              <AccordionContent>
                Ja, u kunt op elk moment van pakket wisselen. We begrijpen dat bedrijfsbehoeften kunnen veranderen en werken graag met u samen om het meest geschikte pakket te vinden. U kunt zowel upgraden als downgraden, waarbij we zorgen voor een soepele overgang zonder onderbreking van uw campagnes.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3">
              <AccordionTrigger>
                Hoe vaak krijg ik rapportages over de prestaties van mijn campagnes?
              </AccordionTrigger>
              <AccordionContent>
                Alle pakketten bevatten maandelijkse rapportages via e-mail. Bij het Geavanceerd en Pro pakket ontvangt u daarnaast gedetailleerde PowerPoint rapportages met diepgaande analyses en aanbevelingen. We kunnen de frequentie en het format van rapportages aanpassen aan uw specifieke wensen.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4">
              <AccordionTrigger>
                Wat houdt &apos;conversie tracken&apos; precies in?
              </AccordionTrigger>
              <AccordionContent>
                Conversie tracking is het meten van specifieke acties die bezoekers op uw website ondernemen, zoals aankopen, formulier invullingen of telefonische contacten. Dit geeft inzicht in welke advertenties daadwerkelijk tot resultaat leiden. Bij de Geavanceerd en Pro pakketten implementeren we deze tracking en gebruiken de data om uw campagnes te optimaliseren.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </section>
  )
}

