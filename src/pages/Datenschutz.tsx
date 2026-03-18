
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

const Datenschutz = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <main className="pt-20 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-8">Datenschutzerklärung</h1>
            
            <div className="space-y-6">
              <div>
                <h2 className="text-xl font-semibold text-gray-900 mb-3">1. Datenschutz auf einen Blick</h2>
                <h3 className="text-lg font-medium text-gray-900 mb-2">Allgemeine Hinweise</h3>
                <p className="text-gray-700 mb-4">
                  Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten 
                  passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie 
                  persönlich identifiziert werden können.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-gray-900 mb-3">2. Verantwortliche Stelle</h2>
                <div className="text-gray-700 space-y-1">
                  <p className="font-medium">Prozess-Orchester – Dominique Deutzmann</p>
                  <p>Urfeystr. 32</p>
                  <p>47803 Krefeld</p>
                  <p>Tel: +49 176 45691 439</p>
                  <p>E-Mail: info@prozess-orchester.de</p>
                </div>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-gray-900 mb-3">3. Datenerfassung auf dieser Website</h2>
                <h3 className="text-lg font-medium text-gray-900 mb-2">Kontaktformular</h3>
                <p className="text-gray-700 mb-4">
                  Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem 
                  Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung der 
                  Anfrage und für den Fall von Anschlussfragen bei uns gespeichert.
                </p>

                <h3 className="text-lg font-medium text-gray-900 mb-2">Server-Log-Dateien</h3>
                <p className="text-gray-700">
                  Der Provider der Seiten erhebt und speichert automatisch Informationen in so genannten Server-Log-Dateien, 
                  die Ihr Browser automatisch an uns übermittelt. Dies sind: Browsertyp und Browserversion, verwendetes 
                  Betriebssystem, Referrer URL, Hostname des zugreifenden Rechners, Uhrzeit der Serveranfrage und IP-Adresse.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-gray-900 mb-3">4. Ihre Rechte</h2>
                <p className="text-gray-700 mb-4">
                  Sie haben jederzeit das Recht unentgeltlich Auskunft über Herkunft, Empfänger und Zweck Ihrer 
                  gespeicherten personenbezogenen Daten zu erhalten. Sie haben außerdem ein Recht, die Berichtigung, 
                  Sperrung oder Löschung dieser Daten zu verlangen.
                </p>
                <p className="text-gray-700">
                  Hierzu sowie zu weiteren Fragen zum Thema Datenschutz können Sie sich jederzeit unter der im 
                  Impressum angegebenen Adresse an uns wenden.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-gray-900 mb-3">5. SSL- bzw. TLS-Verschlüsselung</h2>
                <p className="text-gray-700">
                  Diese Seite nutzt aus Sicherheitsgründen und zum Schutz der Übertragung vertraulicher Inhalte eine 
                  SSL-bzw. TLS-Verschlüsselung. Eine verschlüsselte Verbindung erkennen Sie daran, dass die Adresszeile 
                  des Browsers von "http://" auf "https://" wechselt und an dem Schloss-Symbol in Ihrer Browserzeile.
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

export default Datenschutz;
