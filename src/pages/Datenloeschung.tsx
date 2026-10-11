import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';

export default function Datenloeschung() {
  return <div className="po-legal min-h-screen bg-white">
    <Navigation />
    <main className="pt-20 pb-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-6">Datenlöschung für die Meta-App</h1>
          <p className="text-gray-700 mb-6">
            Diese Anleitung gilt für personenbezogene Daten, die Prozess-Orchester im Zusammenhang mit der
            internen Meta-App „Marketing API“ verarbeitet. Die App dient der Verwaltung berechtigter
            Facebook-Seiten und Werbekonten; für Besucher dieser Website gibt es kein Facebook-Login.
          </p>

          <h2 className="text-xl font-semibold text-gray-900 mb-3">So beantragen Sie die Löschung</h2>
          <ol className="list-decimal pl-6 space-y-4 text-gray-700 mb-6">
            <li>Schreiben Sie an <a className="text-blue-700 underline" href="mailto:info@prozess-orchester.de?subject=Datenl%C3%B6schung%20Meta-App">info@prozess-orchester.de</a> mit dem Betreff „Datenlöschung Meta-App“.</li>
            <li>Nennen Sie Ihren Namen und beschreiben Sie, auf welche Facebook-Seite, Anzeige oder Interaktion sich Ihre Anfrage bezieht. Ein Link hilft bei der Zuordnung. Senden Sie bitte keine Passwörter oder Zugangstoken.</li>
            <li>Ich prüfe, welche personenbezogenen Daten im Zusammenhang mit der App bei mir vorliegen, und lösche sie, soweit keine Aufbewahrungspflichten oder anderen berechtigten Gründe entgegenstehen. Über das Ergebnis informiere ich Sie per E-Mail.</li>
          </ol>
          <p className="text-gray-700 mb-4">
            Die Löschung Ihres Facebook- oder Instagram-Kontos und der bei Meta selbst gespeicherten Daten
            können Sie direkt in den Einstellungen des jeweiligen Meta-Dienstes veranlassen.
          </p>
          <p className="text-gray-700">
            Weitere Informationen zur Verarbeitung Ihrer Daten und die Kontaktdaten der verantwortlichen Stelle
            finden Sie in meiner <a className="text-blue-700 underline" href="/datenschutz">Datenschutzerklärung</a>.
          </p>
        </div>
      </div>
    </main>
    <Footer />
  </div>;
}
