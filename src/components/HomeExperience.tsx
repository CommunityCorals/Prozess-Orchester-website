import { useState } from 'react';
import { ArrowDown, ArrowUpRight, Check, Plus } from 'lucide-react';

const services = [
  { id: 'software', name: 'Software entwickeln.', text: 'Wenn Ihr Unternehmen eigene Wege geht, sollte Ihre Software das auch können. Wir entwickeln Anwendungen, die sich an Ihrer Arbeit orientieren.', examples: ['Interne Anwendungen', 'Kundenportale', 'Digitale Freigaben'] },
  { id: 'automatisierung', name: 'Abläufe automatisieren.', text: 'Informationen übertragen, Dokumente prüfen, Vorgänge anstoßen: Wir nehmen wiederkehrende Arbeit aus Ihrem Alltag. Mit KI dort, wo sie sinnvoll unterstützt.', examples: ['Dokumentenverarbeitung', 'Angebotsprozesse', 'Berichte & Auswertungen'] },
  { id: 'integration', name: 'Systeme verbinden.', text: 'Ihre Werkzeuge können mehr, wenn sie zusammenspielen. Wir verbinden bestehende Anwendungen und sorgen dafür, dass Informationen dort ankommen, wo sie gebraucht werden.', examples: ['Shop & Warenwirtschaft', 'CRM & Buchhaltung', 'Individuelle Schnittstellen'] },
];

function SectionLabel({ number, children }: { number: string; children: React.ReactNode }) {
  return <div className="po-section-label"><span>{number}</span><span>{children}</span><i aria-hidden="true" /></div>;
}

function ProcessScore() {
  return <figure className="po-score">
    <svg viewBox="0 0 540 580" role="img" aria-labelledby="score-title score-desc">
      <title id="score-title">Von einzelnen Informationen zum gemeinsamen Auftrag</title>
      <desc id="score-desc">Anfrage und vorhandene Informationen fließen in ein Angebot. Nach Ihrer Freigabe entsteht der Auftrag.</desc>
      <g fill="none" stroke="#e7ebf4" strokeWidth="15"><path d="M0 210 H80 Q112 210 112 242 V292 Q112 324 144 324 H188" /><path d="M365 416 H424 Q460 416 460 380 V130 Q460 96 494 96 H540" /></g>
      <g fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16">
        <path stroke="#2563eb" d="M68 95 H186 Q220 95 220 130 V201 Q220 235 254 235 H284 Q318 235 318 270 V340" />
        <path stroke="#2563eb" d="M68 324 H188 Q220 324 220 292 V268 Q220 235 254 235" />
        <path stroke="#7c3aed" d="M318 340 V440 Q318 478 356 478 H459" />
      </g>
      <g stroke="white" strokeWidth="6"><circle cx="68" cy="95" r="16" fill="#2563eb" /><circle cx="68" cy="324" r="16" fill="#2563eb" /><circle cx="284" cy="235" r="14" fill="#111b32" /><circle cx="318" cy="390" r="14" fill="#111b32" /><circle cx="459" cy="478" r="16" fill="#7c3aed" /></g>
      <g fill="#111b32" fontFamily="Inter, sans-serif" fontSize="17" fontWeight="500"><text x="52" y="59">Anfrage</text><text x="260" y="197">Angebot</text><text x="52" y="288">Informationen</text><text x="350" y="397">Ihre Freigabe</text><text x="407" y="523">Auftrag</text></g>
    </svg>
    <figcaption><span className="po-tiny-square" /> Zusammenspiel statt Insellösungen.</figcaption>
  </figure>;
}

export function HomeHero() {
  return <>
    <section className="po-hero" aria-labelledby="hero-heading">
      <div className="po-hero-copy">
        <p className="po-eyebrow">Individuelle Software · Prozessautomatisierung</p>
        <h1 id="hero-heading">Software, die zu<br className="po-desktop-break" /> Ihrem Unternehmen<br className="po-desktop-break" /> passt.</h1>
        <p className="po-hero-description">Prozess-Orchester hilft Inhabern kleiner und mittlerer Unternehmen, ihre digitalen Geschäftsprozesse mit Automatisierung und KI effizient, schlank und intelligent zu gestalten.</p>
        <div className="po-actions"><a className="po-button po-button-white" href="#contact-form">Projekt besprechen <ArrowUpRight size={20} /></a><a className="po-text-link" href="#leistungen">Lösungen entdecken <ArrowDown size={18} /></a></div>
        <div className="po-hero-note">Für Unternehmen, die etwas bewegen wollen.</div>
      </div>
      <div className="po-hero-art"><div className="po-art-label"><span>PROZESS-ORCHESTER</span><span>IM ZUSAMMENSPIEL</span></div><ProcessScore /><div className="po-art-foot"><span>Ein Ablauf. Viele Möglichkeiten.</span><span>↗</span></div></div>
    </section>
    <div className="po-service-strip po-wrap" aria-label="Unsere Leistungen">{services.map((s, i) => <a href={`#${s.id}`} key={s.id}><span>0{i + 1}</span>{s.name}<ArrowDown size={18} /></a>)}</div>
  </>;
}

export function Services() {
  return <section className="po-section po-wrap" id="leistungen">
    <SectionLabel number="01">Was wir für Sie entwickeln</SectionLabel>
    <div className="po-section-intro"><h2>Ihre Arbeit gibt<br />den Takt vor.</h2><p>Gewachsene Abläufe verdienen durchdachte Lösungen. Gemeinsam finden wir heraus, was Ihr Team wirklich weiterbringt – und setzen es um.</p></div>
    <div className="po-services">{services.map((s, i) => <article className="po-service-row" id={s.id} key={s.id}><span className="po-row-number">0{i + 1}</span><h3>{s.name}</h3><div><p>{s.text}</p><ul className="po-tags" aria-label="Beispiele">{s.examples.map(e => <li key={e}>{e}</li>)}</ul></div><ArrowUpRight className="po-service-arrow" aria-hidden="true" /></article>)}</div>
  </section>;
}

const processSteps = [
  { name: 'Anfrage', before: 'Eine E-Mail landet im Postfach. Die zuständige Person muss erst gefunden werden.', after: 'Die Anfrage wird zentral erfasst und direkt der zuständigen Person zugeordnet.' },
  { name: 'Informationen', before: 'Kundendaten werden in Listen gesucht und erneut in eine Vorlage übertragen.', after: 'Vorhandene Kundendaten werden zusammengeführt. Fehlende Angaben sind sofort sichtbar.' },
  { name: 'Angebot', before: 'Positionen und Preise werden aus verschiedenen Quellen von Hand zusammengestellt.', after: 'Ein Angebotsentwurf entsteht aus den erfassten Daten und Ihren hinterlegten Regeln.' },
  { name: 'Freigabe', before: 'Rückfragen und Korrekturen verteilen sich auf E-Mails und verschiedene Dateiversionen.', after: 'Sie prüfen den Entwurf und geben ihn frei. Die fachliche Entscheidung bleibt bei Ihnen.' },
  { name: 'Auftrag', before: 'Die Auftragsdaten werden erneut in das nächste System eingetragen.', after: 'Nach Bestätigung werden die Daten an die angebundenen Systeme übergeben.' },
];

export function ProcessExample() {
  const [improved, setImproved] = useState(true);
  const [active, setActive] = useState(2);
  const step = processSteps[active];
  return <section className="po-example-section" id="einblicke"><div className="po-wrap po-section">
    <SectionLabel number="02">Ein Beispiel aus dem Arbeitsalltag</SectionLabel>
    <div className="po-section-intro"><h2>Von der Anfrage<br />zum Auftrag.<span className="po-purple"> Ohne Umwege.</span></h2><p>Wie wäre es, wenn Informationen nur einmal erfasst werden müssten? Entdecken Sie, was eine passende Lösung an jedem Schritt verändert.</p></div>
    <div className="po-example">
      <div className="po-example-top"><span className="po-example-caption">Anwendungsbeispiel / Angebotsprozess</span><div className="po-mode-switch" role="group" aria-label="Prozess vergleichen"><button aria-pressed={!improved} onClick={() => setImproved(false)}>Heute</button><button aria-pressed={improved} onClick={() => setImproved(true)}>Mit passender Lösung</button></div></div>
      <div className={`po-process-track ${improved ? 'is-connected' : ''}`} aria-label="Schritt auswählen">{processSteps.map((s, i) => <button key={s.name} aria-pressed={active === i} aria-controls="process-detail" onClick={() => setActive(i)}><span className="po-process-node">{String(i + 1).padStart(2, '0')}</span><span>{s.name}</span></button>)}</div>
      <div className="po-process-detail" id="process-detail" aria-live="polite" aria-atomic="true"><div><span className="po-eyebrow">Schritt 0{active + 1} / {improved ? 'Mit passender Lösung' : 'Heute'}</span><h3>{step.name}{improved ? ' im Zusammenspiel.' : ' mit Handarbeit.'}</h3></div><p>{improved ? step.after : step.before}</p></div>
      <div className="po-example-bottom"><span><Check size={16} /> {improved ? 'Ein gemeinsamer Informationsstand. Eine klare Zuständigkeit.' : 'Mehrfache Dateneingabe. Zusätzliche Abstimmung.'}</span><span>Illustrativer Ablauf, kein Kundenprojekt.</span></div>
    </div>
  </div></section>;
}

export function AboutAndApproach() {
  return <>
    <section className="po-section po-wrap" id="uber-uns"><SectionLabel number="03">Ihr Ansprechpartner</SectionLabel><div className="po-about-grid"><div><h2>Unternehmerisch<br />gedacht.<br /><span className="po-blue">Persönlich umgesetzt.</span></h2><p className="po-about-lead">Gute Software beginnt mit einem Gespräch über Ihre Arbeit.</p></div><div className="po-founder"><p className="po-founder-name">Dominique Deutzmann</p><span className="po-founder-role">Inhaber · Prozess-Orchester · Krefeld</span><p>Ich kenne volle To-do-Listen und gewachsene Strukturen aus eigener unternehmerischer Erfahrung. Mein Hintergrund in E-Commerce, Logistik und Prozessmanagement prägt deshalb auch meinen Blick auf Software.</p><p>Wir schauen gemeinsam auf Ihren Arbeitsalltag: Wo gehen Informationen verloren? Was kostet unnötig Zeit? Und welche Lösung hilft Ihrem Team wirklich?</p><a className="po-inline-link" href="#contact-form">Lernen wir uns kennen <ArrowUpRight size={19} /></a></div></div></section>
    <section className="po-approach-section" id="zusammenarbeit"><div className="po-wrap po-section"><SectionLabel number="04">So arbeiten wir zusammen</SectionLabel><div className="po-section-intro"><h2>Aus einer guten Frage<br />wird eine gute Lösung.</h2><p>Ein klarer Weg von der ersten Idee bis zum Einsatz im Alltag. Sie sehen früh, was entsteht, und gestalten die Lösung mit.</p></div><ol className="po-approach-list">{[
      ['Verstehen', 'Wir sprechen über Ihre Abläufe, Ziele und vorhandenen Systeme.', 'Ergebnis: ein gemeinsames Bild der Aufgabe.'],
      ['Konkretisieren', 'Wir legen fest, was die Lösung leisten soll und welcher Aufwand sinnvoll ist.', 'Ergebnis: ein klarer Umfang und ein transparentes Angebot.'],
      ['Entwickeln & testen', 'Wir entwickeln in überschaubaren Schritten und prüfen die Lösung mit Ihnen.', 'Ergebnis: funktionierende Software, an echten Abläufen geprüft.'],
      ['Einführen & begleiten', 'Wir unterstützen bei Einführung und Übergabe. Betreuung und Weiterentwicklung stimmen wir gemeinsam ab.', 'Ergebnis: eine Lösung, mit der Ihr Team arbeiten kann.'],
    ].map(([title, body, result], i) => <li key={title}><span className="po-approach-number">0{i + 1}</span><h3>{title}</h3><p>{body}</p><span className="po-approach-result">{result}</span></li>)}</ol></div></section>
  </>;
}

export function Questions() {
  return <section className="po-section po-wrap po-faq" id="fragen"><div><SectionLabel number="05">Gut zu wissen</SectionLabel><h2>Die ersten<br />Fragen.</h2><p>Ihre ist noch nicht dabei?<br /><a className="po-inline-link" href="mailto:info@prozess-orchester.de">Schreiben Sie uns <ArrowUpRight size={16} /></a></p></div><div>{[
    ['Was können Sie für mein Unternehmen entwickeln?', 'Von einer internen Anwendung über Kundenportale bis zu automatisierten Abläufen und Schnittstellen zwischen Ihren Systemen. Ausgangspunkt ist die Aufgabe, die Sie lösen möchten. Gemeinsam prüfen wir, welche Lösung dafür sinnvoll ist.'],
    ['Müssen wir unsere bestehenden Systeme ersetzen?', 'Oft lassen sich bestehende Werkzeuge miteinander verbinden oder gezielt ergänzen. Wir prüfen zuerst, welche Möglichkeiten Ihre Systeme bieten und wo eine individuelle Anwendung einen echten Nutzen bringt.'],
    ['Brauchen wir dafür KI?', 'Das hängt von der Aufgabe ab. KI kann zum Beispiel helfen, Dokumente auszuwerten oder Texte vorzubereiten. Für viele Abläufe reichen klare Regeln und gute Schnittstellen. Wir wählen die Technik passend zur Aufgabe.'],
    ['Was kostet ein Projekt und wie lange dauert es?', 'Umfang, vorhandene Systeme und gewünschte Funktionen bestimmen Aufwand und Dauer. Nach der gemeinsamen Klärung erhalten Sie ein Angebot mit konkreten Leistungen und Zeitplan. Größere Vorhaben können wir in sinnvolle Schritte aufteilen.'],
    ['Was passiert nach der Einführung?', 'Wir stimmen Übergabe, Betrieb und Betreuung vorab mit Ihnen ab. Sie können die Lösung selbst betreiben oder Unterstützung für Wartung und Weiterentwicklung vereinbaren.'],
  ].map(([q, a]) => <details key={q}><summary>{q}<Plus size={20} aria-hidden="true" /></summary><p>{a}</p></details>)}</div></section>;
}
