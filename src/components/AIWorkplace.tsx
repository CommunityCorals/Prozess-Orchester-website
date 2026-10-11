import { ArrowUpRight } from 'lucide-react';
import { ContactForm, Label, Layout } from './Website';

const examples = [
  {
    task: 'E-Mails und PDFs',
    before: 'Anhänge öffnen, Inhalte prüfen, Dateien ablegen und an die richtige Person weiterleiten.',
    after: 'Inhalte erfassen, dem Vorgang zuordnen, Unklarheiten markieren und die nächsten Schritte vorbereiten.',
  },
  {
    task: 'Excel und Datensätze',
    before: 'Tabellen formatieren, Werte bereinigen und Informationen per Hand in andere Programme kopieren.',
    after: 'Daten vereinheitlichen, auf Plausibilität prüfen und für die Übernahme in angebundene Systeme vorbereiten.',
  },
  {
    task: 'Rückfragen und Ablage',
    before: 'Postfächer und Ordner durchsuchen, Dokumente erneut hochladen und Antworten zusammensuchen.',
    after: 'Passende Informationen aus freigegebenen Quellen finden, Dokumente zuordnen und Antwortentwürfe erstellen.',
  },
];

export function AIWorkplaceTeaser() {
  return <div className="po-ai-teaser">
    <Label>Ein konkreter Arbeitsalltag</Label>
    <div className="po-ai-teaser-heading">
      <h3>Eine PDF kommt an.<br />Was passiert dann?</h3>
      <p>Heute beginnt oft eine Kette aus Öffnen, Prüfen, Ablegen und Abtippen. Ein KI-gestützter Arbeitsplatz macht daraus einen geführten Vorgang.</p>
    </div>
    <div className="po-ai-compare">
      <div><span>Heute</span><p>PDF öffnen, Daten vergleichen, Rückfragen schreiben, Werte in Excel eintragen und das Dokument im richtigen System ablegen.</p></div>
      <div><span>Mit KI-Unterstützung</span><p>„Prüfe diese PDF gegen den Auftrag und bereite die nächsten Schritte vor.“ Die Assistenz sammelt Informationen, zeigt Abweichungen und erstellt einen Entwurf. Ihr Mitarbeiter prüft und gibt frei.</p></div>
    </div>
    <a className="po-inline-link" href="/ki-arbeitsplatz">So kann Ihr Team mit KI arbeiten <ArrowUpRight size={18} aria-hidden="true" /></a>
  </div>;
}

export function AIWorkplacePage() {
  return <Layout>
    <header className="po-ai-hero">
      <div className="po-wrap po-ai-hero-grid">
        <div>
          <Label>KI am Arbeitsplatz</Label>
          <h1>Ihre Mitarbeitenden beschreiben die Aufgabe. Die KI bereitet die Arbeit vor.</h1>
          <p>E-Mails, PDFs, Excel-Dateien und Informationen aus Ihren Systemen gehören zu einem Vorgang. Ich schaffe einen Arbeitsplatz, an dem Ihr Team diese Aufgaben mit KI-Unterstützung bearbeiten kann – mit passenden Zugriffsrechten und klaren Freigaben.</p>
          <div className="po-actions"><a className="po-button po-button-white" href="#contact-form">Anwendungsfall besprechen <ArrowUpRight size={18} aria-hidden="true" /></a><a className="po-text-link" href="#beispiel">Beispiel ansehen ↓</a></div>
        </div>
        <div className="po-ai-hero-example" aria-label="Beispiel für eine Arbeitsanweisung">
          <span>Eine Aufgabe statt vieler Klicks</span>
          <blockquote>„Prüfe diesen Lieferschein gegen die Bestellung, zeige Abweichungen und bereite eine Rückmeldung vor.“</blockquote>
          <p>Die Assistenz sammelt die benötigten Informationen und legt einen prüfbaren Entwurf vor. Ihr Team trifft die Entscheidung.</p>
        </div>
      </div>
    </header>

    <section className="po-wrap po-section" id="beispiel">
      <Label>Vorher und nachher</Label>
      <div className="po-section-intro"><h2>Die Arbeit zwischen<br />den Systemen vereinfachen.</h2><p>Einzelne Handgriffe kosten jeden Tag Zeit. Der Nutzen entsteht, wenn ein Vorgang vom Eingang bis zum nächsten Schritt zusammenhängend bearbeitet wird.</p></div>
      <div className="po-ai-table" role="table" aria-label="Arbeitsabläufe heute und mit KI-Unterstützung">
        <div className="po-ai-table-head" role="row"><span role="columnheader">Aufgabe</span><span role="columnheader">Heute</span><span role="columnheader">Mit KI-Unterstützung</span></div>
        {examples.map(example => <div className="po-ai-table-row" role="row" key={example.task}>
          <h3 role="rowheader">{example.task}</h3><p role="cell">{example.before}</p><p role="cell">{example.after}</p>
        </div>)}
      </div>
      <p className="po-ai-table-note">Welche Schritte möglich sind, prüfen wir anhand Ihrer Programme, Schnittstellen und Berechtigungen.</p>
    </section>

    <section className="po-paper"><div className="po-wrap po-section po-ai-way-of-working">
      <Label>So arbeitet Ihr Team damit</Label>
      <h2>Beschreiben. Prüfen. Freigeben.</h2>
      <div className="po-ai-steps">
        <article><span>01</span><h3>Aufgabe beschreiben</h3><p>Ihr Mitarbeiter sagt in Alltagssprache, was mit einer E-Mail, einem Dokument oder einem Datensatz passieren soll.</p></article>
        <article><span>02</span><h3>Ergebnis vorbereiten</h3><p>Die Assistenz nutzt die dafür freigegebenen Informationen, ordnet sie ein und zeigt einen Entwurf samt offenen Fragen.</p></article>
        <article><span>03</span><h3>Entscheidung treffen</h3><p>Ihr Mitarbeiter prüft das Ergebnis. Kritische Änderungen oder ausgehende Nachrichten erfolgen erst mit der vorgesehenen Freigabe.</p></article>
      </div>
    </div></section>

    <section className="po-wrap po-section po-ai-outcomes">
      <Label>Was sich im Alltag ändert</Label>
      <h2>Weniger Routine. Mehr Zeit für gute Arbeit.</h2>
      <div>
        <article><h3>Schneller weiterarbeiten</h3><p>Benötigte Informationen und Entwürfe liegen früher zur Prüfung bereit.</p></article>
        <article><h3>Fehler leichter erkennen</h3><p>Plausibilitätsprüfungen und sichtbare Abweichungen helfen, Übertragungsfehler zu vermeiden.</p></article>
        <article><h3>Menschen entlasten</h3><p>Weniger Suchen und Kopieren lässt mehr Zeit für Entscheidungen, Rückfragen und Kunden.</p></article>
      </div>
    </section>

    <section className="po-paper"><div className="po-wrap po-section po-reading-grid">
      <div><Label>Was ich dafür einrichte</Label><h2>Ein sinnvoller Zugriff auf Ihre vorhandene Arbeit.</h2></div>
      <div className="po-prose"><p>Ich verbinde den KI-Arbeitsplatz mit den benötigten Dokumenten und Unternehmenssystemen. Zugriffe werden auf die jeweilige Aufgabe und die Rolle des Mitarbeiters begrenzt. Ergebnisse und Freigaben werden so gestaltet, dass Ihr Team sie nachvollziehen kann.</p><p>Wir beginnen mit einem wiederkehrenden Vorgang, testen ihn mit echten Beispielen und erweitern erst dann auf weitere Aufgaben. So wird aus einer guten Demonstration ein brauchbares Werkzeug für den Arbeitsalltag.</p></div>
    </div></section>

    <section className="po-ai-conversion"><div className="po-wrap"><Label>Der erste Schritt</Label><h2>Welche Aufgabe kostet Ihr Team jede Woche am meisten Zeit?</h2><p>Ein Beispiel aus Ihrem Alltag reicht. Im kostenlosen Kennenlerngespräch prüfen wir, welche Schritte sich sinnvoll unterstützen lassen.</p><a className="po-button po-button-white" href="#contact-form">Aufgabe schildern <ArrowUpRight size={18} aria-hidden="true" /></a></div></section>
    <ContactForm />
  </Layout>;
}
