import { useState, type ReactNode } from 'react';
import { ArrowDown, ArrowRight, ArrowUpRight, Bot, Check, CheckCheck, CircleHelp, Database, FileSpreadsheet, FileText, Globe2, Mail, MessageSquare, PackageCheck, Search, Sparkles } from 'lucide-react';
import { ContactForm, FAQList, Layout } from './Website';
import { chooseTask, track } from '@/lib/campaign';

type Mode = 'home' | 'paper' | 'assistant';
function Eyebrow({ children }: { children: ReactNode }) { return <p className="cp-eyebrow">{children}</p>; }
function CheckLink({ task, children = 'Kostenlosen Aufgaben-Check anfragen', className = '' }: { task?: string; children?: ReactNode; className?: string }) {
  return <a href="#contact-form" className={'cp-button ' + className} onClick={() => { if (task) chooseTask(task); }}>{children}<ArrowUpRight size={18} aria-hidden="true" /></a>;
}

const heroCopy = {
  home: {
    eyebrow: 'Automatisierung & KI-Assistenten für KMU',
    title: <>E-Mails. Excel. ERP.<br /><em>Weniger abtippen.<br />Mehr erledigen.</em></>,
    text: 'Informationen suchen, Dateien auswerten, Aufträge übertragen: Ich automatisiere Ihre Büroarbeit und richte einen flexiblen KI-Assistenten für Ihr Team ein. Verbunden mit Ihren bestehenden Programmen.',
    image: 'ki-assistent', alt: 'Eine Mitarbeiterin arbeitet mit einem freundlichen digitalen Assistenten am Laptop.',
  },
  paper: {
    eyebrow: 'Weniger Papierkram · Mehr Zeit fürs Geschäft',
    title: <>Weniger Papierkram.<br /><em>Mehr Zeit<br />fürs Geschäft.</em></>,
    text: 'Bestellungen abtippen, Rechnungen zuordnen, Excel-Listen übertragen: Ich verbinde E-Mail, Dokumente und Ihre Warenwirtschaft, damit wiederkehrende Büroarbeit automatisch weiterläuft.',
    image: 'papierkram', alt: 'Eine Mitarbeiterin sitzt zwischen Papierstapeln, E-Mails und Tabellen an ihrem Schreibtisch.',
  },
  assistant: {
    eyebrow: 'Ein KI-Assistent für Ihre Mitarbeitenden',
    title: <>Ihr KI-Assistent.<br /><em>Für die Unterstützung<br />Ihres Teams.</em></>,
    text: 'Im Internet recherchieren, Unternehmensdaten auswerten und Aufgaben in Ihren Programmen erledigen. Ein vielseitiger Assistent, dem Ihre Mitarbeitenden sagen, was sie erreichen möchten.',
    image: 'ki-assistent', alt: 'Eine Mitarbeiterin und ihr digitaler Assistent bearbeiten gemeinsam Aufgaben am Laptop.',
  },
};

function Hero({ mode }: { mode: Mode }) {
  const content = heroCopy[mode];
  return <header className={'cp-hero cp-hero-' + mode}>
    <div className="po-wrap cp-hero-grid">
      <div className="cp-hero-copy">
        <Eyebrow>{content.eyebrow}</Eyebrow>
        <h1>{content.title}</h1>
        <p className="cp-lead">{content.text}</p>
        <div className="cp-hero-actions"><CheckLink /><a className="cp-secondary" href="#beispiele">Beispiel ansehen <ArrowDown size={16} /></a></div>
        <p className="cp-hero-note">20–30 Minuten · kostenlos & unverbindlich</p>
      </div>
      <div className="cp-hero-visual">
        <img src={'/campaign/' + content.image + '.webp'} alt={content.alt} width={mode === 'paper' ? 960 : 1100} height={mode === 'paper' ? 960 : 733} {...{ fetchpriority: 'high' }} />
        <div className="cp-visual-caption"><span className="cp-live-dot" /><span>{mode === 'paper' ? 'Aus der E-Mail direkt in Ihre Warenwirtschaft.' : 'Internetwissen + Unternehmensdaten + Ihre Werkzeuge.'}</span></div>
      </div>
    </div>
    <div className="po-wrap cp-system-strip" aria-label="Informationen und Systeme"><span>Arbeitet mit dem, was Sie nutzen</span><div><Mail /> E-Mail</div><div><FileText /> Dokumente</div><div><FileSpreadsheet /> Excel</div><div><Database /> ERP & Warenwirtschaft</div>{mode !== 'paper' && <div><Globe2 /> Internet</div>}</div>
  </header>;
}

function Offers() {
  return <section className="po-wrap cp-section" id="leistungen">
    <div className="cp-section-heading"><div><Eyebrow>Zwei Wege, Arbeit abzugeben</Eyebrow><h2>Was braucht<br />Ihr Arbeitsalltag?</h2></div><p>Wiederkehrende Abläufe laufen automatisch. Für wechselnde Aufgaben steht Ihrem Team ein flexibler Assistent zur Seite.</p></div>
    <div className="cp-offers" id="loesungen">
      <a className="cp-offer cp-offer-paper" href="/weniger-papierkram"><span className="cp-offer-number">01 / AUTOMATISIERUNG</span><Mail size={28} /><h3>Diese Aufgabe kommt<br />immer wieder.</h3><p>Bestellungen erfassen, Belege zuordnen, Listen übernehmen. Einmal passend eingerichtet, laufen die vereinbarten Schritte automatisch.</p><div className="cp-mini-flow"><span>E-Mail</span><ArrowRight size={14} /><span>Abgleich</span><ArrowRight size={14} /><span>ERP</span></div><span className="cp-offer-link">Weniger Papierkram <ArrowUpRight size={19} /></span></a>
      <a className="cp-offer cp-offer-assistant" href="/ki-assistent"><span className="cp-offer-number">02 / KI-ASSISTENT</span><Sparkles size={28} /><h3>Heute recherchieren.<br />Morgen Daten auswerten.</h3><p>Ein vielseitiger Assistent für Ihr Team. Er verbindet Internetwissen mit Unternehmensdaten und nutzt die angebundenen Werkzeuge für Ihre Aufgaben.</p><div className="cp-mini-prompt"><MessageSquare size={17} /><span>„Vergleiche diese Angebote mit unseren Einkaufspreisen.“</span></div><span className="cp-offer-link">KI-Assistent kennenlernen <ArrowUpRight size={19} /></span></a>
    </div>
  </section>;
}

type AssistantExample = {
  id: string; label: string; prompt: string; sources: string[]; title: string;
  columns: string[]; rows: string[][]; note: string; followup: string; followupTitle: string; answer: string; status: string;
};
const assistantExamples: AssistantExample[] = [
  { id: 'vergleich', label: 'Angebote vergleichen',
    prompt: 'Vergleiche diese drei Lieferantenangebote mit unseren letzten Einkaufspreisen. Recherchiere die Lieferzeiten.',
    sources: ['3 Angebots-PDFs', 'ERP · Einkaufspreise', 'Internet · Lieferantenseiten'],
    title: 'Preisvergleich für Artikel A-240',
    columns: ['Lieferant', 'Preis / Stück', 'Lieferzeit'],
    rows: [['Anbieter A', '12,80 €', '10 Werktage'], ['Anbieter B', '13,10 €', '4 Werktage'], ['Anbieter C', '12,40 €', '5 Werktage']],
    note: 'Letzter Einkaufspreis im ERP: 13,60 €. Versandkosten sind in den Angeboten nicht angegeben.',
    followup: 'Wir brauchen die Ware in fünf Tagen. Bereite eine Rückfrage zu Versandkosten und Verfügbarkeit vor.',
    followupTitle: 'Rückfrage für Anbieter B und C',
    answer: 'Guten Tag, können Sie 100 Stück des Artikels A-240 innerhalb von fünf Werktagen liefern? Bitte bestätigen Sie die Verfügbarkeit und nennen Sie die Versandkosten.',
    status: 'E-Mail-Entwurf · noch nicht versendet',
  },
  { id: 'kundenservice', label: 'Kunden antworten',
    prompt: 'Welche Kunden warten noch auf eine Lieferung? Bereite Antworten mit dem aktuellen Stand vor.',
    sources: ['Warenwirtschaft · offene Aufträge', 'Versand · Lieferstatus', 'CRM · Kundenkontakte'],
    title: 'Offene Lieferungen im Überblick',
    columns: ['Auftrag', 'Status', 'Nächster Schritt'],
    rows: [['AU-1042', 'Termin offen', 'Liefertermin klären'], ['AU-1048', 'Versendet', 'Sendungslink senden'], ['AU-1051', 'Teilmenge offen', 'Nachlieferung prüfen']],
    note: 'Für AU-1042 ist noch kein bestätigter Liefertermin hinterlegt. Der Assistent erfindet keinen Termin.',
    followup: 'Formuliere für AU-1042 eine kurze Antwort, ohne einen Liefertermin zu versprechen.',
    followupTitle: 'Antwort zu Auftrag AU-1042',
    answer: 'Guten Tag, Ihre Bestellung ist bei uns in Bearbeitung. Einen verbindlichen Liefertermin klären wir gerade. Sobald er bestätigt ist, informieren wir Sie.',
    status: 'Antwortentwurf · noch nicht versendet',
  },
  { id: 'excel', label: 'Excel auswerten',
    prompt: 'Vergleiche diese Excel-Liste mit unseren Verkaufszahlen im ERP. Welche Artikel weichen ab?',
    sources: ['Excel · Monatsübersicht', 'ERP · Verkaufszahlen'],
    title: 'Mengenabgleich für September',
    columns: ['Artikel', 'Excel / ERP', 'Abweichung'],
    rows: [['A-240', '120 / 120', 'Keine'], ['B-180', '85 / 92', '+7 im ERP'], ['C-310', '40 / 38', '−2 im ERP']],
    note: 'Zwei Artikel weichen ab. Die Originaldatei und die Daten im ERP bleiben bei dieser Auswertung unverändert.',
    followup: 'Fasse die Abweichungen für unser Team zusammen und bereite eine Prüfliste vor.',
    followupTitle: 'Prüfliste für den Monatsabgleich',
    answer: 'B-180: Sieben zusätzliche Verkäufe im ERP prüfen. C-310: Zwei Einträge in Excel auf Storno oder abweichenden Buchungszeitraum prüfen. A-240 stimmt überein.',
    status: 'Auswertung vorbereitet · keine Systemänderung',
  },
  { id: 'auftrag', label: 'Im ERP arbeiten',
    prompt: 'Was haben wir diesem Kunden zuletzt angeboten? Bereite daraus einen Auftrag über 100 Stück vor.',
    sources: ['CRM · Kundendaten', 'ERP · letztes Angebot', 'Warenwirtschaft · Artikel'],
    title: 'Auftragsentwurf für Beispiel GmbH',
    columns: ['Artikel', 'Menge', 'Einzelpreis'],
    rows: [['A-240 · Verpackung', '100 Stück', '19,00 €']],
    note: 'Grundlage: Angebot AN-2041. Gesamtbetrag: 1.900,00 € netto. Lieferadresse und Preise bitte vor der Übernahme prüfen.',
    followup: 'Die Angaben stimmen. Übernimm den Auftrag in die Warenwirtschaft.',
    followupTitle: 'Auftrag AU-1052 angelegt',
    answer: '100 Stück A-240 für Beispiel GmbH wurden in diesem Beispiel als Auftrag übernommen. Grundlage AN-2041 und Kundenanfrage sind dem Vorgang zugeordnet.',
    status: 'Beispiel einer ausgeführten Aktion · Warenwirtschaft',
  },
];

function AssistantDemo() {
  const [selected, setSelected] = useState(0);
  const [followup, setFollowup] = useState(false);
  const item = assistantExamples[selected];
  function select(index: number) { setSelected(index); setFollowup(false); track('example_open', assistantExamples[index].id); }
  return <section className="cp-soft" id="beispiele"><div className="po-wrap cp-section">
    <div className="cp-section-heading"><div><Eyebrow>Ein Assistent. Unterschiedliche Aufgaben.</Eyebrow><h2>Was möchten Sie<br />heute erledigen?</h2></div><p>Wählen Sie eine Aufgabe. Sehen Sie, welche Informationen der Assistent verbindet – und wie Sie im Gespräch weiterarbeiten.</p></div>
    <div className="cp-demo-label"><Sparkles size={15} /><span>Beispiel einer möglichen Umsetzung · fiktive Daten · keine Live-Verbindung</span></div>
    <div className="cp-assistant-demo">
      <div className="cp-demo-sidebar"><div className="cp-assistant-brand"><Bot size={23} /><strong>Ihr KI-Assistent</strong></div><p>Beispielaufgabe auswählen</p><div className="cp-task-buttons" role="group" aria-label="Beispielaufgabe">{assistantExamples.map((example, i) => <button type="button" key={example.id} aria-pressed={selected === i} aria-controls="assistant-conversation" onClick={() => select(i)}><span>0{i + 1}</span>{example.label}<ArrowRight size={15} /></button>)}</div><div className="cp-sidebar-note"><Globe2 size={17} /><span>Internetwissen</span><Database size={17} /><span>Unternehmensdaten</span><PackageCheck size={17} /><span>Angebundene Werkzeuge</span></div></div>
      <div className="cp-conversation" id="assistant-conversation" role="region" aria-label={item.label} aria-live="polite">
        <div className="cp-message cp-message-user"><span className="cp-message-label">Ihr Arbeitsauftrag</span><p>{item.prompt}</p></div>
        <div className="cp-message cp-message-assistant"><span className="cp-message-label"><Sparkles size={15} /> Ihr Assistent</span><div className="cp-sources">{item.sources.map(source => <span key={source}>{source}</span>)}</div><h3>{item.title}</h3><div className="cp-table-wrap" tabIndex={0} role="region" aria-label="Beispielergebnis"><table><thead><tr>{item.columns.map(c => <th scope="col" key={c}>{c}</th>)}</tr></thead><tbody>{item.rows.map((row, i) => <tr key={i}>{row.map((cell, j) => <td key={j}>{cell}</td>)}</tr>)}</tbody></table></div><p className="cp-result-note"><CircleHelp size={16} />{item.note}</p></div>
        {!followup ? <button className="cp-followup" type="button" onClick={() => { setFollowup(true); track('example_followup', item.id); }}><MessageSquare size={18} /><span><small>So könnte das Gespräch weitergehen</small>{item.followup}</span><ArrowRight size={18} /></button> : <><div className="cp-message cp-message-user cp-followup-user"><span className="cp-message-label">Ihre nächste Nachricht</span><p>{item.followup}</p></div><div className="cp-followup-result"><CheckCheck size={21} /><div><h4>{item.followupTitle}</h4><p>{item.answer}</p><span>{item.status}</span></div></div><button type="button" className="cp-reset" onClick={() => setFollowup(false)}>Rückfrage noch einmal ansehen</button></>}
      </div>
    </div>
    <div className="cp-example-footer"><p>Welche Quellen und Aktionen verfügbar sind, legen wir für Ihre Programme und Mitarbeiterrollen fest.</p><CheckLink task={item.id} className="cp-button-light">So einen Assistenten besprechen</CheckLink></div>
    <noscript><p>Weitere Beispielaufgaben: Kunden mit Lieferstatus aus der Warenwirtschaft antworten, Excel-Daten mit ERP-Verkäufen vergleichen und Aufträge aus vorhandenen Angeboten vorbereiten. Im Gespräch können Mitarbeitende Ergebnisse verfeinern und weitere Schritte beauftragen.</p></noscript>
  </div></section>;
}

const paperExamples = [
  { id: 'auftrag', label: 'Bestellung → Auftrag', inputLabel: 'E-Mail · Neue Bestellung', inputTitle: 'Bitte 100 Stück wie angeboten.', input: 'Guten Tag, wir bestellen 100 Stück A-240 zu Ihrem Angebot AN-2041. Bitte liefern Sie an unsere bekannte Adresse.', checks: ['Kunde in der Warenwirtschaft zugeordnet', 'Artikel A-240 und Angebot AN-2041 gefunden', 'Menge und Lieferadresse zur Prüfung bereit'], resultLabel: 'Warenwirtschaft · nach Freigabe', resultTitle: 'Auftrag AU-1052', fields: [['Kunde', 'Beispiel GmbH'], ['Artikel', 'A-240 · 100 Stück'], ['Grundlage', 'AN-2041 + Kunden-E-Mail']], outcome: 'Der Auftrag liegt im Zielsystem. Die Angaben müssen nicht erneut abgetippt werden.', exception: 'Artikel unbekannt oder Adresse unklar? Der Vorgang bleibt zur Klärung offen.' },
  { id: 'rechnung', label: 'Rechnung → Abgleich', inputLabel: 'PDF · Eingangsrechnung', inputTitle: 'Rechnung RE-2084', input: 'Lieferant: Beispiel Handel · Bestellung BE-4012 · 100 Stück A-240 · Gesamtbetrag 1.523,20 € brutto.', checks: ['Lieferant und Bestellung im ERP zugeordnet', 'Nettobetrag 1.280,00 € abgeglichen', 'Beleg dem geprüften Vorgang zugeordnet'], resultLabel: 'ERP / Buchhaltung · nach Prüfung', resultTitle: 'Rechnungsdaten übergeben', fields: [['Bestellung', 'BE-4012'], ['Nettobetrag', '1.280,00 €'], ['Beleg', 'RE-2084.pdf zugeordnet']], outcome: 'Beleg und geprüfte Rechnungsdaten sind für den nächsten Buchhaltungsschritt verfügbar.', exception: 'Menge oder Betrag weicht ab? Der Unterschied wird vor der Übergabe angezeigt.' },
  { id: 'excel', label: 'Excel → Stammdaten', inputLabel: 'Excel · Artikelliste', inputTitle: 'Neue Einkaufspreise', input: 'Die Lieferantenliste enthält Artikelnummern, Einkaufspreise und Verpackungseinheiten. Zwei Datensätze sind zu prüfen.', checks: ['Spalten und Artikelnummern zugeordnet', '48 Artikel erkannt und Änderungen vorbereitet', '2 unbekannte Nummern zur Klärung markiert'], resultLabel: 'Warenwirtschaft · nach Freigabe', resultTitle: '48 Artikel aktualisiert', fields: [['Übernommen', '48 Einkaufspreise'], ['Offen', '2 Artikelnummern'], ['Ergebnis', 'Änderungen protokolliert']], outcome: 'Die geprüften Preise stehen in der Warenwirtschaft. Offene Einträge bleiben in einer Prüfliste.', exception: 'Unbekannte oder doppelte Artikel werden nicht stillschweigend überschrieben.' },
];

function PaperDemo() {
  const [selected, setSelected] = useState(0);
  const item = paperExamples[selected];
  return <section className="cp-soft" id="beispiele"><div className="po-wrap cp-section">
    <div className="cp-section-heading"><div><Eyebrow>Vom Eingang bis ins Kundensystem</Eyebrow><h2>Die Information ist da.<br />Jetzt kommt sie an.</h2></div><p>So kann aus einer E-Mail, einem Beleg oder einer Excel-Liste ein bearbeiteter Vorgang in Ihren Programmen werden.</p></div>
    <div className="cp-pill-tabs" role="group" aria-label="Automatisierungsbeispiel">{paperExamples.map((example, i) => <button type="button" key={example.id} aria-pressed={i === selected} aria-controls="paper-example" onClick={() => { setSelected(i); track('example_open', example.id); }}>{example.label}</button>)}</div>
    <p className="cp-demo-label">Beispiel einer möglichen Umsetzung · fiktive Daten</p>
    <div className="cp-paper-demo" id="paper-example" role="region" aria-label={item.label} aria-live="polite">
      <article className="cp-work-card"><div className="cp-work-step"><span>01</span>Eingang<Mail size={19} /></div><div className="cp-work-body"><small>{item.inputLabel}</small><h3>{item.inputTitle}</h3><p>{item.input}</p><div className="cp-attachment"><FileText size={19} /><span>Informationen aus Ihren Unterlagen</span></div></div></article>
      <article className="cp-work-card cp-work-check"><div className="cp-work-step"><span>02</span>Abgleichen & prüfen<Search size={19} /></div><div className="cp-work-body"><h3>Mit Ihren Daten verbunden.</h3><ul>{item.checks.map(check => <li key={check}><Check size={16} />{check}</li>)}</ul><p className="cp-work-exception"><CircleHelp size={16} />{item.exception}</p></div></article>
      <article className="cp-work-card cp-work-result"><div className="cp-work-step"><span>03</span>Im Zielsystem<Database size={19} /></div><div className="cp-work-body"><small>{item.resultLabel}</small><h3>{item.resultTitle}</h3><dl>{item.fields.map(([label, value]) => <div key={label}><dt>{label}</dt><dd>{value}</dd></div>)}</dl><p className="cp-complete"><CheckCheck size={17} />Übernahme nachvollziehbar</p></div></article>
    </div>
    <div className="cp-example-footer"><p>{item.outcome}</p><CheckLink task={item.id} className="cp-button-light">Diese Aufgabe besprechen</CheckLink></div>
    <noscript><p>Weitere Möglichkeiten: Rechnungen mit Bestellungen abgleichen und geprüfte Belege übergeben; Excel-Listen prüfen und Artikelstammdaten in der Warenwirtschaft aktualisieren.</p></noscript>
  </div></section>;
}

function EverydayExamples() {
  return <section className="cp-soft" id="beispiele"><div className="po-wrap cp-section">
    <div className="cp-section-heading"><div><Eyebrow>Konkrete Aufgaben statt großer Versprechen</Eyebrow><h2>Das kennen Sie.<br />Das lässt sich ändern.</h2></div><p>Vom Postfach bis in Ihre Warenwirtschaft. Vom Lieferantenangebot bis zur Entscheidung.</p></div>
    <div className="cp-everyday">
      <a href="/weniger-papierkram#beispiele"><span className="cp-icon"><Mail /></span><h3>Bestellung lesen.<br />Auftrag noch einmal tippen?</h3><p>Angaben aus der Kunden-E-Mail mit Kunden und Artikeln abgleichen und als Auftrag in der Warenwirtschaft übernehmen.</p><span>Den Ablauf ansehen <ArrowUpRight size={18} /></span></a>
      <a href="/ki-assistent#beispiele"><span className="cp-icon"><Globe2 /></span><h3>Drei Angebote.<br />Eine brauchbare Entscheidung.</h3><p>PDFs mit Ihren bisherigen Einkaufspreisen vergleichen, Lieferinformationen recherchieren und Rückfragen vorbereiten.</p><span>Den Assistenten ausprobieren <ArrowUpRight size={18} /></span></a>
      <a href="/weniger-papierkram#beispiele"><span className="cp-icon"><FileSpreadsheet /></span><h3>Die Liste ist fertig.<br />Die Daten fehlen im ERP?</h3><p>Excel-Daten zuordnen, fehlende Angaben erkennen und geprüfte Werte in vorhandene Datensätze übernehmen.</p><span>Die Datenübernahme ansehen <ArrowUpRight size={18} /></span></a>
    </div>
  </div></section>;
}

function AssistantCapabilities() {
  return <section className="po-wrap cp-section cp-capabilities">
    <div><Eyebrow>Einmal anbinden. Vielseitig nutzen.</Eyebrow><h2>Ihr Wissen.<br />Ihre Programme.<br /><span>Ein Assistent.</span></h2><p>Ihr Team stellt neue Fragen und gibt neue Aufgaben direkt im Gespräch. Der Assistent nutzt dafür die Quellen und Werkzeuge, die wir für Ihren Betrieb anbinden.</p></div>
    <div className="cp-capability-list">
      <article><Globe2 /><div><h3>Im Internet recherchieren</h3><p>Produktinformationen, Lieferanten oder Fachwissen suchen und die verwendeten Quellen nachvollziehbar machen.</p></div></article>
      <article><FileText /><div><h3>Unternehmenswissen einbeziehen</h3><p>Freigegebene Dokumente, E-Mails, Tabellen und Daten aus ERP, CRM oder Warenwirtschaft für die Aufgabe zusammenführen.</p></div></article>
      <article><PackageCheck /><div><h3>Mit Ihren Werkzeugen arbeiten</h3><p>Dateien erstellen, Antworten vorbereiten oder Daten im Zielsystem übernehmen. Zugriffe und Freigaben passen zur jeweiligen Aktion.</p></div></article>
    </div>
  </section>;
}

function Proof({ mode }: { mode: Mode }) {
  return <section className="po-wrap cp-section" id="projekte">
    <div className="cp-section-heading"><div><Eyebrow>Bereits entwickelte Lösungen</Eyebrow><h2>Erfahrung, die bis<br />in die Umsetzung reicht.</h2></div><p>{mode === 'assistant' ? 'Den Assistenten richte ich für Ihren Betrieb ein. Diese vorhandenen Projekte zeigen meine Erfahrung mit Anwendungen, Datenübergaben und betrieblicher Arbeit.' : 'Vorhandene Projekte zeigen, wie aus einzelnen Arbeitsschritten nutzbare Anwendungen und Automatisierungen werden.'}</p></div>
    <div className="cp-proof-list">
      <a href="/projekte/angebotssoftware"><span>01</span><div><small>Kundenprojekt · Baubranche</small><h3>Vom Leistungskatalog zum versandfertigen Angebot.</h3><p>Leistungen auswählen, kalkulieren, PDF erzeugen und versenden – in einer Anwendung.</p></div><ArrowUpRight /></a>
      <a href="/projekte/versandkostenabgleich"><span>02</span><div><small>Praxisprojekt · Versand</small><h3>Versandrechnung und Sendungsdaten zusammenführen.</h3><p>Gewichtsüberschreitungen automatisiert abgleichen und für die Nachberechnung aufbereiten.</p></div><ArrowUpRight /></a>
      <a href="/projekte/handelsprozesse"><span>03</span><div><small>Betriebliche Eigenentwicklung · Handel</small><h3>Bestelldaten für Rechnung, Versand und Support nutzen.</h3><p>Eigene Module für Rechnungserstellung, Liefertermine, Versandbuchung und Kundenkommunikation.</p></div><ArrowUpRight /></a>
    </div>
  </section>;
}

function GettingStarted({ mode }: { mode: Mode }) {
  return <section className="cp-start"><div className="po-wrap cp-section">
    <div className="cp-section-heading"><div><Eyebrow>Persönlich eingerichtet. Passend zu Ihrem Betrieb.</Eyebrow><h2>Mit Ihren Aufgaben anfangen.<br />Mit Ihren Systemen arbeiten.</h2></div><p>{mode === 'assistant' ? 'Wir starten mit typischen Aufgaben Ihres Teams und binden die dafür benötigten Quellen und Werkzeuge an. Weitere Möglichkeiten lassen sich anschließend ergänzen.' : 'Ihre Programme müssen nicht pauschal ersetzt werden. Wir prüfen, welche Daten und Funktionen sich für Ihre Aufgaben verbinden lassen.'}</p></div>
    <ol className="cp-start-steps">
      <li><span>01</span><h3>Aufgaben-Check</h3><p>In 20–30 Minuten besprechen wir Ihre Aufgaben und Programme. Kostenlos und unverbindlich.</p></li>
      <li><span>02</span><h3>Umfang & Angebot</h3><p>Sie erhalten einen konkreten Vorschlag zu Einrichtung, Anbindungen und Kosten. Laufende Dienste werden separat benannt.</p></li>
      <li><span>03</span><h3>Einrichten & ausprobieren</h3><p>Ich entwickle die Lösung und teste sie mit Ihrem Team. Datenzugriffe, Ergebnisse und Ausnahmen gehören dazu.</p></li>
    </ol>
    <div className="cp-founder-line"><span className="cp-avatar" aria-hidden="true">DD</span><p><strong>Dominique Deutzmann · Prozess-Orchester, Krefeld</strong><span>Ich entwickle auch für meinen eigenen Handelsbetrieb. Sie sprechen direkt mit dem Menschen, der Ihre Lösung umsetzt.</span></p><a href="/ueber-mich">Mehr über mich <ArrowUpRight size={17} /></a></div>
  </div></section>;
}

function Questions({ mode }: { mode: Mode }) {
  const shared = [
    { q: 'Funktioniert das mit unserem ERP oder unserer Warenwirtschaft?', a: 'Das prüfen wir anhand Ihrer Programme, Schnittstellen und Zugriffsrechte. Wir klären konkret, welche Daten gelesen und welche Vorgänge angelegt oder verändert werden können. Vorhandene Export- und Importmöglichkeiten können ebenfalls helfen.' },
    { q: 'Was kostet die Umsetzung?', a: 'Der Aufgaben-Check ist kostenlos. Anschließend erhalten Sie einen Vorschlag mit konkretem Umfang und Kosten. Bei einem KI-Assistenten werden Einrichtung, Systemanbindungen und laufende Dienste beziehungsweise Nutzung getrennt betrachtet.' },
    { q: 'Wer entscheidet, was geändert oder versendet wird?', a: 'Wir legen passende Rechte und Freigaben fest. Informationen recherchieren, einen Entwurf erstellen und einen Auftrag verbindlich übernehmen sind unterschiedliche Aktionen. Die Lösung erhält nur die dafür vorgesehenen Zugriffe.' },
  ];
  const first = mode === 'assistant'
    ? { q: 'Kann mein Team auch andere Aufgaben stellen als die gezeigten?', a: 'Ja. Die Beispiele zeigen mögliche Einsatzfelder. Mitarbeitende können Aufgaben frei formulieren, Rückfragen stellen und Ergebnisse weiterbearbeiten. Was der Assistent erledigen kann, hängt von seinen angebundenen Quellen, Werkzeugen und Berechtigungen ab. Weitere Anbindungen können ergänzt werden.' }
    : { q: 'Brauchen wir dafür immer KI?', a: 'Für feste Regeln und Datenübertragungen reicht häufig klassische Automatisierung. KI kann beim Verstehen von E-Mails oder Dokumenten unterstützen. Für wechselnde Aufgaben lässt sich zusätzlich ein flexibel nutzbarer Assistent einrichten.' };
  return <section className="po-wrap cp-section cp-faq"><div><Eyebrow>Vor dem ersten Gespräch</Eyebrow><h2>Gut zu wissen.</h2></div><FAQList items={[first, ...shared]} /></section>;
}

export function CampaignHome() {
  return <Layout><div className="cp-page"><Hero mode="home" /><Offers /><EverydayExamples /><Proof mode="home" /><GettingStarted mode="home" /><Questions mode="home" /><ContactForm /></div></Layout>;
}
export function PaperworkPage() {
  return <Layout><div className="cp-page"><Hero mode="paper" /><PaperDemo /><div className="po-wrap cp-crosslink"><Bot size={23} /><p>Ihre Mitarbeitenden sollen auch wechselnde Aufgaben abgeben können?</p><a href="/ki-assistent">Den flexiblen KI-Assistenten kennenlernen <ArrowRight size={17} /></a></div><Proof mode="paper" /><GettingStarted mode="paper" /><Questions mode="paper" /><ContactForm /></div></Layout>;
}
export function AssistantPage() {
  return <Layout><div className="cp-page"><Hero mode="assistant" /><AssistantDemo /><AssistantCapabilities /><Proof mode="assistant" /><GettingStarted mode="assistant" /><Questions mode="assistant" /><ContactForm /></div></Layout>;
}
