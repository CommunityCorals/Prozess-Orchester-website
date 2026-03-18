
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

const Impressum = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <main className="pt-20 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-8">Impressum</h1>
            
            <div className="space-y-6">
              <div>
                <h2 className="text-xl font-semibold text-gray-900 mb-3">Angaben gemäß § 5 TMG</h2>
                <div className="text-gray-700 space-y-1">
                  <p className="font-medium">Prozess-Orchester – Dominique Deutzmann</p>
                  <p>Urfeystr. 32</p>
                  <p>47803 Krefeld</p>
                </div>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-gray-900 mb-3">Kontakt</h2>
                <div className="text-gray-700 space-y-1">
                  <p>Tel: 017645691439</p>
                  <p>E-Mail: Info@prozess-orchester.de</p>
                </div>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-gray-900 mb-3">Umsatzsteuer-Identifikationsnummer</h2>
                <p className="text-gray-700">UST-ID Nummer: DE815711401</p>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-gray-900 mb-3">Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV</h2>
                <div className="text-gray-700 space-y-1">
                  <p>Dominique Deutzmann</p>
                  <p>Urfeystr. 32</p>
                  <p>47803 Krefeld</p>
                </div>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-gray-900 mb-3">Haftungsausschluss</h2>
                
                <h3 className="text-lg font-medium text-gray-900 mb-2">Haftung für Inhalte</h3>
                <p className="text-gray-700 mb-4">
                  Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den 
                  allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht 
                  unter der Verpflichtung, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach 
                  Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
                </p>

                <h3 className="text-lg font-medium text-gray-900 mb-2">Haftung für Links</h3>
                <p className="text-gray-700 mb-4">
                  Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. 
                  Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten 
                  Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich.
                </p>

                <h3 className="text-lg font-medium text-gray-900 mb-2">Urheberrecht</h3>
                <p className="text-gray-700">
                  Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen 
                  Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der 
                  Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Impressum;
