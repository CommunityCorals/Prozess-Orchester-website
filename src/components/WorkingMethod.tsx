const steps = [
  ['Kostenloses Erstgespräch', 'Wir lernen uns kennen und besprechen Ihre Ziele.'],
  ['Potenzialanalyse-Workshop', 'Wir identifizieren gemeinsam die größten Einsparpotenziale.'],
  ['Angebot & Beauftragung', 'Sie erhalten ein transparentes Angebot, das auf dem für Sie realisierbaren Wert basiert.'],
  ['Umsetzung & Testing', 'Wir entwickeln und testen Ihre maßgeschneiderte Automatisierung oder individuelle Softwarelösung.'],
  ['Schulung & Übergabe', 'Wir stellen sicher, dass Ihr Team die neuen Prozesse versteht und anwenden kann.'],
  ['Laufender Support', 'Wir bleiben auch nach dem Projekt an Ihrer Seite – mit vollständiger Übergabe oder als Managed Service.'],
];

export function WorkingMethod() {
  return <section className="po-approach-section" id="zusammenarbeit">
    <div className="po-wrap po-section">
      <div className="po-section-label"><span>Arbeitsweise</span><i aria-hidden="true" /></div>
      <div className="po-section-intro"><h2>Sechs klare Schritte.<br />Gemeinsam zum Ergebnis.</h2><p>Unser Prozess ist darauf ausgelegt, schnell und effizient Ergebnisse zu liefern, ohne Ihre Zeit übermäßig zu beanspruchen.</p></div>
      <ol className="po-approach-list po-six-steps">{steps.map(([title, body], i) => <li key={title}><span className="po-approach-number">0{i + 1}</span><h3>{title}</h3><p>{body}</p></li>)}</ol>
    </div>
  </section>;
}
