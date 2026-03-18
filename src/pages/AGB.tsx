import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
const AGB = () => {
  return <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-1 bg-gradient-to-b from-gray-50 to-white py-16 px-4">
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-8 md:p-12">
          <h1 className="text-4xl font-bold mb-8 text-gray-900">Allgemeine Geschäftsbedingungen (AGB)</h1>
          <p className="text-lg text-gray-600 mb-8">der Prozess-Orchester, Inh. Dominique Deutzmann</p>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-gray-900">§ 1 Geltungsbereich</h2>
            <p className="mb-3 text-gray-700">(1) Diese Allgemeinen Geschäftsbedingungen gelten für alle Verträge zwischen Prozess-Orchester, Inh. Dominique Deutzmann (nachfolgend „Auftragnehmer") und ihren Kunden, soweit diese Unternehmer im Sinne des § 14 BGB sind.</p>
            <p className="mb-3 text-gray-700">(2) Verbraucher im Sinne des § 13 BGB sind von den angebotenen Leistungen ausgeschlossen.</p>
            <p className="mb-3 text-gray-700">(3) Abweichende oder ergänzende Geschäftsbedingungen des Kunden werden nicht Vertragsbestandteil, es sei denn, der Auftragnehmer stimmt ihrer Geltung ausdrücklich in Textform zu.</p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-gray-900">§ 2 Leistungsbeschreibung</h2>
            <p className="mb-3 text-gray-700">(1) Prozess-Orchester erbringt Beratungs- und Implementierungsleistungen in den Bereichen:</p>
            <ul className="list-disc ml-8 mb-3 text-gray-700">
              <li>Analyse bestehender Geschäfts- und IT-Prozesse,</li>
              <li>Konzeption und Design von Automatisierungs-Workflows,</li>
              <li>Implementierung von Software-Schnittstellen,</li>
              <li>Integration und Anpassung von KI-Modellen in bestehende Systeme.</li>
            </ul>
            <p className="mb-3 text-gray-700">(2) Nicht Bestandteil der Leistung sind, sofern nicht ausdrücklich schriftlich vereinbart:</p>
            <ul className="list-disc ml-8 mb-3 text-gray-700">
              <li>Lizenz- oder Nutzungskosten für Drittanbieter-Tools (z. B. OpenAI-API, Microsoft- oder Google-Dienste),</li>
              <li>laufende Wartung oder Überwachung der implementierten Systeme, soweit diese nicht gesondert beauftragt wurde.</li>
            </ul>
            <p className="mb-3 text-gray-700">(3) Der konkrete Leistungsumfang ergibt sich aus dem jeweiligen Angebot oder der individuellen Leistungsbeschreibung von Prozess-Orchester.</p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-gray-900">§ 3 Mitwirkungspflichten des Kunden</h2>
            <p className="mb-3 text-gray-700">(1) Der Kunde ist verpflichtet, Prozess-Orchester alle für die Leistungserbringung notwendigen Informationen, Zugänge und Daten rechtzeitig und vollständig bereitzustellen (z. B. API-Schlüssel, Systemzugänge, Prozessbeschreibungen).</p>
            <p className="mb-3 text-gray-700">(2) Der Kunde hat zudem einen kompetenten Ansprechpartner zu benennen, der verbindliche Entscheidungen treffen kann.</p>
            <p className="mb-3 text-gray-700">(3) Kommt der Kunde seinen Mitwirkungspflichten nicht nach, ist Prozess-Orchester berechtigt, die Leistungserbringung bis zur Mitwirkung auszusetzen.</p>
            <p className="mb-3 text-gray-700">(4) In diesem Fall bleibt der Vergütungsanspruch von Prozess-Orchester unberührt.</p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-gray-900">§ 4 Abnahme</h2>
            <p className="mb-3 text-gray-700">(1) Die Abnahme erfolgt nach erfolgreichem Testlauf der erbrachten Automatisierungs- oder Integrationsleistung.</p>
            <p className="mb-3 text-gray-700">(2) Sofern der Kunde innerhalb von 10 Werktagen nach Mitteilung der Abnahmebereitschaft keine schriftliche Mängelanzeige erhebt, gilt die Leistung als abgenommen.</p>
            <p className="mb-3 text-gray-700">(3) Mit der Abnahme bestätigt der Kunde, dass die Leistung vertragsgemäß erbracht wurde.</p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-gray-900">§ 5 Vergütung</h2>
            <p className="mb-3 text-gray-700">(1) Die Vergütung richtet sich nach dem im jeweiligen Angebot angegebenen Modell. Mögliche Modelle sind:</p>
            <ul className="list-disc ml-8 mb-3 text-gray-700">
              <li>Pauschalvergütung,</li>
              <li>Abrechnung nach Aufwand (z. B. Stunden- oder Tagessätze),</li>
              <li>monatliche Retainer-Vereinbarungen.</li>
            </ul>
            <p className="mb-3 text-gray-700">(2) Sämtliche Preise verstehen sich zuzüglich der gesetzlichen Umsatzsteuer.</p>
            <p className="mb-3 text-gray-700">(3) Zahlungsbedingungen und Fälligkeiten ergeben sich aus dem individuellen Angebot oder Vertrag.</p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-gray-900">§ 6 Nutzungsrechte</h2>
            <p className="mb-3 text-gray-700">(1) Nach vollständiger Zahlung der vereinbarten Vergütung erhält der Kunde ein einfaches, nicht übertragbares, zeitlich unbefristetes Nutzungsrecht an den von Prozess-Orchester erstellten Prozessen, Skripten, Schnittstellen oder Automatisierungen.</p>
            <p className="mb-3 text-gray-700">(2) Prozess-Orchester bleibt Inhaberin sämtlicher Urheber- und Eigentumsrechte an Konzepten, Methoden, Vorlagen, Code-Bausteinen und Know-how, sofern nichts anderes ausdrücklich vereinbart wurde.</p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-gray-900">§ 7 Verfügbarkeit & Gewährleistung</h2>
            <p className="mb-3 text-gray-700">(1) Prozess-Orchester gewährleistet die fachgerechte und sorgfältige Durchführung der vereinbarten Leistungen.</p>
            <p className="mb-3 text-gray-700">(2) Eine Gewähr für die dauerhafte Verfügbarkeit, Funktionsfähigkeit oder Performance der verwendeten Drittanbieter-Dienste (z. B. APIs, Cloud-Systeme, KI-Plattformen) wird nicht übernommen.</p>
            <p className="mb-3 text-gray-700">(3) Prozess-Orchester haftet nicht für Störungen, Ausfälle oder Leistungseinschränkungen, die auf die Systeme Dritter zurückzuführen sind.</p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-gray-900">§ 8 Haftung</h2>
            <p className="mb-3 text-gray-700">(1) Prozess-Orchester haftet unbeschränkt</p>
            <ul className="list-none ml-4 mb-3 text-gray-700">
              <li>a) bei Vorsatz oder grober Fahrlässigkeit,</li>
              <li>b) bei Verletzung von Leben, Körper oder Gesundheit,</li>
              <li>c) nach den Vorschriften des Produkthaftungsgesetzes.</li>
            </ul>
            <p className="mb-3 text-gray-700">(2) Bei leicht fahrlässiger Verletzung einer wesentlichen Vertragspflicht (Kardinalpflicht) ist die Haftung auf den vertragstypischen, vorhersehbaren Schaden begrenzt. Wesentliche Vertragspflichten sind solche, deren Erfüllung die ordnungsgemäße Durchführung des Vertrags überhaupt erst ermöglicht und auf deren Einhaltung der Kunde regelmäßig vertrauen darf.</p>
            <p className="mb-3 text-gray-700">(3) Die Haftung für Datenverlust wird auf den typischen Wiederherstellungsaufwand beschränkt, der bei regelmäßiger, dem Risiko entsprechender Datensicherung durch den Kunden eingetreten wäre.</p>
            <p className="mb-3 text-gray-700">(4) Die Haftung für fehlerhafte Ergebnisse oder Fehlentscheidungen von KI-Systemen oder Drittanbieter-Tools (z. B. OpenAI) ist ausgeschlossen, sofern Prozess-Orchester kein Auswahl- oder Überwachungsverschulden trifft.</p>
            <p className="mb-3 text-gray-700">(5) Im Übrigen ist die Haftung ausgeschlossen.</p>
          </section>

          <div className="border-t-2 border-gray-200 pt-8 mt-12">
            <h2 className="text-3xl font-bold mb-6 text-gray-900">Anlage: Auftragsverarbeitungsvertrag (AVV)</h2>
            <p className="text-lg text-gray-600 mb-6">gemäß Art. 28 DSGVO</p>
            <p className="text-sm italic text-gray-500 mb-8">(Nur erforderlich, wenn personenbezogene Daten im Auftrag verarbeitet werden)</p>

            <section className="mb-8">
              <h3 className="text-xl font-semibold mb-4 text-gray-900">1. Parteien und Gegenstand</h3>
              <p className="mb-3 text-gray-700">Zwischen</p>
              <p className="mb-3 text-gray-700"><strong>Prozess-Orchester, Inh. Dominique Deutzmann</strong> – nachfolgend Auftragsverarbeiter –</p>
              <p className="mb-3 text-gray-700">und</p>
              <p className="mb-3 text-gray-700"><strong>dem jeweiligen Kunden</strong> – nachfolgend Verantwortlicher –</p>
              <p className="mb-3 text-gray-700">wird folgender Vertrag über die Verarbeitung personenbezogener Daten geschlossen.</p>
              <p className="mb-3 text-gray-700">Der Auftragsverarbeiter verarbeitet personenbezogene Daten ausschließlich zur Erbringung der vertraglich vereinbarten Automatisierungs- und Integrationsdienstleistungen. Eine Verarbeitung von Mitarbeiterdaten des Kunden findet nicht statt.</p>
            </section>

            <section className="mb-8">
              <h3 className="text-xl font-semibold mb-4 text-gray-900">2. Art und Zweck der Verarbeitung</h3>
              <p className="mb-3 text-gray-700">Die Verarbeitung erfolgt zur Automatisierung und Vereinfachung digitaler Unternehmensprozesse des Verantwortlichen.</p>
            </section>

            <section className="mb-8">
              <h3 className="text-xl font-semibold mb-4 text-gray-900">3. Art der Daten und Kategorien betroffener Personen</h3>
              <ul className="list-disc ml-8 mb-3 text-gray-700">
                <li><strong>Art der Daten:</strong> Kundendaten, Auftrags- und Bestelldaten, Kontaktdaten, Kommunikationsinhalte.</li>
                <li><strong>Betroffene Personen:</strong> Kunden und Geschäftspartner des Verantwortlichen.</li>
              </ul>
            </section>

            <section className="mb-8">
              <h3 className="text-xl font-semibold mb-4 text-gray-900">4. Technische und organisatorische Maßnahmen (TOMs)</h3>
              <p className="mb-3 text-gray-700">Prozess-Orchester stellt sicher, dass personenbezogene Daten im Rahmen der gesetzlichen Mindestanforderungen geschützt sind, insbesondere durch:</p>
              <ul className="list-disc ml-8 mb-3 text-gray-700">
                <li>Zugriffsbeschränkungen und Berechtigungskonzepte,</li>
                <li>Passwortschutz und Zwei-Faktor-Authentifizierung,</li>
                <li>Verschlüsselung bei Speicherung und Übertragung,</li>
                <li>Pseudonymisierung, sofern technisch möglich.</li>
              </ul>
              <p className="mb-3 text-gray-700">Die vom Auftragsverarbeiter getroffenen technischen und organisatorischen Maßnahmen können in einer gesonderten Anlage detailliert beschrieben werden. Diese Anlage ist Bestandteil des AVV, sofern sie vereinbart wird.</p>
            </section>

            <section className="mb-8">
              <h3 className="text-xl font-semibold mb-4 text-gray-900">5. Sub-Auftragsverarbeiter</h3>
              <p className="mb-3 text-gray-700">Folgende Unterauftragsverarbeiter können bei der Leistungserbringung eingesetzt werden:</p>
              <ul className="list-disc ml-8 mb-3 text-gray-700">
                <li>OpenAI / ChatGPT (USA, über Microsoft Azure – Standardvertragsklauseln gemäß Art. 46 DSGVO)</li>
                <li>Microsoft 365 / OneDrive (EU / USA, je nach Kundenkonto)</li>
                <li>Google Sheets / Google Drive (EU / USA, je nach Kundenkonto)</li>
                <li>OCR.space (Deutschland)</li>
                <li>Azure Cloud Services (EU)</li>
              </ul>
              <p className="mb-3 text-gray-700">Für alle genannten Dienste werden geeignete Garantien nach Art. 46 DSGVO (Standardvertragsklauseln) angewendet.</p>
            </section>

            <section className="mb-8">
              <h3 className="text-xl font-semibold mb-4 text-gray-900">6. Rechte und Pflichten der Parteien</h3>
              <p className="mb-3 text-gray-700">(1) Der Auftragsverarbeiter verarbeitet Daten ausschließlich auf dokumentierte Weisung des Verantwortlichen.</p>
              <p className="mb-3 text-gray-700">(2) Der Verantwortliche ist für die Rechtmäßigkeit der Verarbeitung sowie für die Wahrung der Betroffenenrechte verantwortlich.</p>
              <p className="mb-3 text-gray-700">(3) Der Auftragsverarbeiter unterstützt den Verantwortlichen im Rahmen seiner technischen Möglichkeiten bei der Erfüllung der Pflichten gemäß Art. 32 bis 36 DSGVO.</p>
            </section>

            <section className="mb-8">
              <h3 className="text-xl font-semibold mb-4 text-gray-900">7. Dauer und Beendigung der Verarbeitung</h3>
              <p className="mb-3 text-gray-700">Nach Abschluss der vertraglich vereinbarten Leistungen werden alle personenbezogenen Daten gelöscht, sofern keine gesetzlichen Aufbewahrungspflichten entgegenstehen.</p>
            </section>

            <section className="mb-8">
              <h3 className="text-xl font-semibold mb-4 text-gray-900">8. Schlussbestimmungen</h3>
              <p className="mb-3 text-gray-700">Ergänzend gelten die Regelungen des Hauptvertrags zwischen den Parteien. Im Zweifel gehen die Bestimmungen dieses AVV den AGB vor, soweit sie datenschutzrechtliche Themen betreffen.</p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>;
};
export default AGB;