import { ArrowUpRight } from 'lucide-react';
import { ContactForm, Label, Layout } from './Website';

const examples = [
  {
    task: 'Aufträge und Warenwirtschaft',
    before: 'Kunden und Artikel suchen, Bestände prüfen und Auftragsdaten aus Anfragen von Hand in die Warenwirtschaft eintragen.',
    after: 'Der KI-Assistent ruft Kunden-, Artikel- und Bestandsdaten ab, gleicht die Anfrage damit ab und legt nach Freigabe den Auftrag in Ihrer Warenwirtschaft an.',
  },
  {
    task: 'Kundenservice und CRM',
    before: 'Auftragsstatus in mehreren Programmen nachschlagen, eine Antwort schreiben und das Kundengespräch im CRM nachtragen.',
    after: 'Der KI-Assistent holt den aktuellen Auftragsstatus aus den verbundenen Systemen, formuliert eine Antwort und dokumentiert den Vorgang nach Freigabe im CRM.',
  },
  {
    task: 'Belege und Buchhaltung',
    before: 'Rechnungen mit Bestellungen vergleichen, Belege hochladen und Rechnungsdaten im Buchhaltungssystem erfassen.',
    after: 'Der KI-Assistent vergleicht Rechnungs- und Bestelldaten, zeigt Abweichungen und übergibt nach Freigabe die Daten samt Beleg an die Buchhaltung.',
  },
  {
    task: 'Tabellen, Dateien und Ablage',
    before: 'Excel-Dateien bereinigen, Werte kopieren und Dokumente in verschiedenen Ordnern oder Programmen suchen und ablegen.',
    after: 'Der KI-Assistent vereinheitlicht Tabellen, prüft Daten und übernimmt sie nach Freigabe ins Zielsystem. Dokumente werden dem passenden Vorgang zugeordnet und darüber wiedergefunden.',
  },
];

export function AIWorkplaceTeaser() {
  return <div className="po-ai-teaser">
    <Label>Ein konkreter Arbeitsalltag</Label>
    <div className="po-ai-teaser-heading">
      <h3>Von der Kundenanfrage<br />zum Auftrag im System.</h3>
      <p>Ihr Team beschreibt die Aufgabe. Ein KI-Assistent greift auf die benötigten Informationen zu und führt die vereinbarten Schritte in Warenwirtschaft, CRM oder Buchhaltung aus.</p>
    </div>
    <div className="po-ai-compare">
      <div><span>Heute</span><p>Kundenanfrage lesen, Kundendaten suchen, Artikel und Bestand in der Warenwirtschaft prüfen und den Auftrag Position für Position erfassen.</p></div>
      <div><span>Mit Ihrem KI-Assistenten</span><p>„Prüfe diese Kundenanfrage und lege nach meiner Freigabe den Auftrag in der Warenwirtschaft an.“ Der KI-Assistent gleicht die Daten ab, zeigt offene Fragen und übernimmt den freigegebenen Auftrag ins System.</p></div>
    </div>
    <a className="po-inline-link" href="/ki-arbeitsplatz">So arbeitet Ihr KI-Assistent mit Ihren Systemen <ArrowUpRight size={18} aria-hidden="true" /></a>
  </div>;
}

export function AIWorkplacePage() {
  return <Layout>
    <header className="po-ai-hero">
      <div className="po-wrap po-ai-hero-grid">
        <div>
          <Label>Ihr KI-Assistent im Unternehmen</Label>
          <h1>Ihr Team gibt den Auftrag. Der KI-Assistent arbeitet mit Ihren Systemen.</h1>
          <p>Aufträge in der Warenwirtschaft anlegen, Kundenvorgänge im CRM aktualisieren oder Belege an die Buchhaltung übergeben: Ich verbinde Ihren KI-Assistenten mit den bestehenden Unternehmenssystemen. Ihre Mitarbeitenden beschreiben, was erledigt werden soll – mit passenden Zugriffsrechten und klaren Freigaben.</p>
          <div className="po-actions"><a className="po-button po-button-white" href="#contact-form">Anwendungsfall besprechen <ArrowUpRight size={18} aria-hidden="true" /></a><a className="po-text-link" href="#beispiel">Beispiel ansehen ↓</a></div>
        </div>
        <div className="po-ai-hero-example" aria-label="Beispiel für eine Arbeitsanweisung">
          <span>Eine Aufgabe statt vieler Klicks</span>
          <blockquote>„Prüfe diese Kundenanfrage und lege nach meiner Freigabe den Auftrag in der Warenwirtschaft an.“</blockquote>
          <p>Der KI-Assistent ruft Kunden-, Artikel- und Bestandsdaten ab, zeigt offene Fragen und legt den freigegebenen Auftrag im System an.</p>
        </div>
      </div>
    </header>

    <section className="po-wrap po-section" id="beispiel">
      <Label>Vorher und nachher</Label>
      <div className="po-section-intro"><h2>Informationen abrufen.<br />Daten prüfen und übernehmen.</h2><p>Der KI-Assistent verbindet Informationen aus E-Mails, Dokumenten und Ihren Programmen. Diese Beispiele zeigen, wie daraus konkrete Aktionen in den angebundenen Systemen werden können.</p></div>
      <div className="po-ai-table" role="table" aria-label="Arbeitsabläufe heute und mit Ihrem KI-Assistenten">
        <div className="po-ai-table-head" role="row"><span role="columnheader">Aufgabe</span><span role="columnheader">Heute</span><span role="columnheader">Mit Ihrem KI-Assistenten</span></div>
        {examples.map(example => <div className="po-ai-table-row" role="row" key={example.task}>
          <h3 role="rowheader">{example.task}</h3><p role="cell">{example.before}</p><p role="cell">{example.after}</p>
        </div>)}
      </div>
      <p className="po-ai-table-note">Welche Schritte möglich sind, prüfen wir anhand Ihrer Programme, Schnittstellen und Berechtigungen.</p>
    </section>

    <section className="po-paper"><div className="po-wrap po-section po-ai-way-of-working">
      <Label>So arbeitet Ihr Team damit</Label>
      <h2>Auftrag geben. Prüfen.<br />Im System erledigen.</h2>
      <div className="po-ai-steps">
        <article><span>01</span><h3>Aufgabe beschreiben</h3><p>Ihr Mitarbeiter gibt dem KI-Assistenten einen Arbeitsauftrag: einen Auftrag anlegen, den Lieferstatus prüfen oder Kundendaten aktualisieren.</p></article>
        <article><span>02</span><h3>Daten zusammenführen</h3><p>Der KI-Assistent ruft die benötigten Informationen aus den angebundenen Systemen ab, prüft Zusammenhänge und zeigt die geplanten Änderungen samt offenen Fragen.</p></article>
        <article><span>03</span><h3>Freigeben und ausführen</h3><p>Ihr Mitarbeiter prüft die Änderungen. Nach der vorgesehenen Freigabe übernimmt der KI-Assistent Daten ins Zielsystem, ordnet Dokumente zu oder versendet die vorbereitete Nachricht.</p></article>
      </div>
    </div></section>

    <section className="po-wrap po-section po-ai-outcomes">
      <Label>Was sich im Alltag ändert</Label>
      <h2>Weniger Routine. Mehr Zeit für gute Arbeit.</h2>
      <div>
        <article><h3>Schneller weiterarbeiten</h3><p>Auftrags- und Kundendaten werden direkt im passenden System weiterverarbeitet. Wiederholtes Nachschlagen und Abtippen entfällt.</p></article>
        <article><h3>Fehler leichter erkennen</h3><p>Plausibilitätsprüfungen und sichtbare Abweichungen helfen, Übertragungsfehler zu vermeiden.</p></article>
        <article><h3>Menschen entlasten</h3><p>Weniger Suchen und Kopieren lässt mehr Zeit für Entscheidungen, Rückfragen und Kunden.</p></article>
      </div>
    </section>

    <section className="po-paper"><div className="po-wrap po-section po-reading-grid">
      <div><Label>Was ich dafür einrichte</Label><h2>Ihr KI-Assistent.<br />Verbunden mit Ihren Systemen.</h2></div>
      <div className="po-prose"><p>Ich binde Warenwirtschaft, CRM, Buchhaltung, Datenbanken und Dokumentenablage dort an, wo Ihr Arbeitsablauf sie braucht. Der KI-Assistent erhält definierte Funktionen zum Abrufen und Übernehmen von Daten. Welche Informationen er sehen und welche Aktionen er ausführen darf, richtet sich nach Aufgabe und Mitarbeiterrolle.</p><p>Wir legen gemeinsam fest, welche Schritte automatisch laufen und welche eine Freigabe brauchen. Ausgeführte Aktionen werden nachvollziehbar protokolliert. Wir starten mit einem konkreten Vorgang und testen Datenübernahme, Berechtigungen und Ausnahmefälle gemeinsam mit Ihrem Team.</p></div>
    </div></section>

    <section className="po-ai-conversion"><div className="po-wrap"><Label>Der erste Schritt</Label><h2>Welche Aufgabe kostet Ihr Team jede Woche am meisten Zeit?</h2><p>Ein Beispiel aus Ihrem Alltag reicht. Im kostenlosen Kennenlerngespräch prüfen wir, welche Schritte sich sinnvoll unterstützen lassen.</p><a className="po-button po-button-white" href="#contact-form">Aufgabe schildern <ArrowUpRight size={18} aria-hidden="true" /></a></div></section>
    <ContactForm />
  </Layout>;
}
