export function ProcessScore() {
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

