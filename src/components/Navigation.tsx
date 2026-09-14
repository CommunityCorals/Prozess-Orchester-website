import { useEffect, useRef, useState } from 'react';
import { ArrowUpRight, Menu, X } from 'lucide-react';

const links = [
  ['Warum jetzt', 'facts'], ['Leistungen', 'leistungen'],
  ['Zusammenarbeit', 'zusammenarbeit'], ['Über uns', 'uber-uns'],
];

export const Navigation = () => {
  const [open, setOpen] = useState(false);
  const toggle = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    const close = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && open) { setOpen(false); toggle.current?.focus(); }
    };
    window.addEventListener('keydown', close);
    return () => window.removeEventListener('keydown', close);
  }, [open]);
  const navigationLinks = <>{links.map(([label, id]) => <a key={id} href={'/#' + id} onClick={() => setOpen(false)}>{label}</a>)}<a className="po-button" href="/#contact-form" onClick={() => setOpen(false)}>Projekt besprechen <ArrowUpRight size={17} /></a></>;
  return <nav className="po-nav" aria-label="Hauptnavigation">
    <div className="po-wrap po-nav-inner">
      <a className="po-wordmark" href="/" aria-label="Prozess-Orchester – Startseite"><img src="/lovable-uploads/997bf14a-ebda-45e2-86d2-98cde192de8e.png" alt="" />Prozess-Orchester</a>
      <div className="po-nav-links">{navigationLinks}</div>
      <button ref={toggle} className="po-menu-toggle" aria-label={open ? 'Menü schließen' : 'Menü öffnen'} aria-expanded={open} aria-controls="mobile-navigation" onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</button>
    </div>
    {open && <div id="mobile-navigation" className="po-mobile-links">{navigationLinks}</div>}
  </nav>;
};
