import { ArrowUpRight, Check, Plus } from 'lucide-react';
import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3';
import { Navigation } from './Navigation';
import { Footer } from './Footer';
import { CTA } from './CTA';
import pages from '@/content/pages.json';
import projects from '@/content/projects.json';
import type { ReactNode } from 'react';

export const contactHref = '/kontakt#contact-form';

export function ContactForm() {
  return <GoogleReCaptchaProvider reCaptchaKey={import.meta.env.VITE_RECAPTCHA_SITE_KEY || '6Ld-OF4rAAAADRr-1tk6h93qylYk2fyECuaBuf9'} scriptProps={{ async: true, defer: true }}><CTA /></GoogleReCaptchaProvider>;
}
export function Layout({ children, contact = false }: { children: ReactNode; contact?: boolean }) {
  return <div className="po-home"><a className="po-skip-link" href="#main">Zum Inhalt</a><Navigation /><main id="main">{children}{contact && <ContactForm />}</main><Footer /></div>;
}
export function Label({ children }: { children: ReactNode }) {
  return <p className="po-kicker"><span aria-hidden="true">↗</span> {children}</p>;
}
export function ContactLink({ children = 'Kostenloses Erstgespräch anfragen' }: { children?: ReactNode }) {
  return <a className="po-button" href={contactHref}>{children}<ArrowUpRight size={18} aria-hidden="true" /></a>;
}
export function PageIntro({ eyebrow, title, lead, actions = true }: { eyebrow: string; title: string; lead: string; actions?: boolean }) {
  return <header className="po-page-intro"><div className="po-wrap"><a href="/" className="po-breadcrumb">Startseite <span aria-hidden="true">/</span> {eyebrow}</a><Label>{eyebrow}</Label><h1>{title}</h1><p className="po-page-lead">{lead}</p>{actions && <div className="po-actions"><ContactLink /><a className="po-inline-link" href="/prozess-check">Prozess-Check: 690 € netto <ArrowUpRight size={17} /></a></div>}</div></header>;
}
export function Cards({ slugs }: { slugs: string[] }) {
  return <div className="po-card-grid">{slugs.map(slug => { const page = pages.find(p => p.slug === slug); return page && <a className="po-content-card" href={'/' + page.slug} key={slug}><span className="po-kicker">{page.kind}</span><h3>{page.title}</h3><p>{page.lead}</p><span className="po-card-link">Mehr erfahren <ArrowUpRight size={19} /></span></a>; })}</div>;
}
export function ProjectCards() {
  return <div className="po-card-grid">{projects.map((project, i) => <a className="po-content-card po-project-card" href={'/projekte/' + project.slug} key={project.slug}><div className="po-project-index" aria-hidden="true">0{i + 1}<ArrowUpRight /></div><span className="po-kicker">{project.label}</span><h3>{project.title}</h3><p>{project.lead}</p><span className="po-card-link">Projekt ansehen <ArrowUpRight size={19} /></span></a>)}</div>;
}
export function FAQList({ items }: { items: { q: string; a: string }[] }) {
  return <div className="po-question-list">{items.map(item => <details key={item.q}><summary>{item.q}<Plus size={20} aria-hidden="true" /></summary><p>{item.a}</p></details>)}</div>;
}
export function ProcessCheck({ full = false }: { full?: boolean }) {
  return <section className="po-check-section" id="prozess-check"><div className="po-wrap po-section"><div className="po-check-grid"><div><Label>Klarheit vor der Umsetzung</Label><h2>Welcher Prozess<br />lohnt sich zuerst?</h2><p className="po-body-lead">Im Prozess-Check untersuchen wir einen konkreten Ablauf. Sie erfahren, was sich verbessern lässt, welche Voraussetzungen fehlen und welcher nächste Schritt sinnvoll ist.</p><p className="po-small">Zuerst klären wir in einem kostenlosen Erstgespräch von etwa 20 Minuten, ob der Check zu Ihrer Aufgabe passt. Bei bereits eindeutigem Umfang ist auch ein direktes Projektangebot möglich.</p></div><div className="po-price-panel"><span className="po-kicker">Prozess-Check · ein abgegrenzter Ablauf</span><p className="po-price">690 € <span>netto, zzgl. MwSt.</span></p><ul className="po-checklist">{['Kurzer Fragebogen zur Vorbereitung','90 Minuten Gespräch mit Dominique','Schriftliche Prozessdarstellung und Verbesserungspotenziale','Vorläufige Machbarkeit und priorisierte Empfehlung','Geschätzte Zeitersparnis und grobe Investitionsspanne'].map(item => <li key={item}><Check size={17} aria-hidden="true" />{item}</li>)}</ul><ContactLink>Erstgespräch zum Prozess-Check</ContactLink><p className="po-small">Vollständig auf das erste Umsetzungsprojekt anrechenbar, wenn Sie es innerhalb von 90 Tagen nach Übergabe der Auswertung beauftragen.</p>{!full && <a href="/prozess-check" className="po-inline-link">Umfang und Ablauf ansehen <ArrowUpRight size={17} /></a>}</div></div>{full && <div className="po-check-details"><article><h3>Was Sie danach in der Hand haben</h3><p>Eine schriftliche Entscheidungsgrundlage für genau einen Prozess: heutiger Ablauf, sinnvolle Verbesserungen, offene Voraussetzungen und ein priorisierter nächster Schritt. Zeitersparnis und Investitionsspanne werden mit ihren Annahmen erläutert.</p></article><article><h3>Vorbereitung und Lieferung</h3><p>Vor dem Termin beschreiben Sie Ablauf, beteiligte Systeme, Häufigkeit und Probleme in einem kurzen Fragebogen. Die Auswertung erhalten Sie innerhalb von fünf Werktagen nach dem Gespräch und Eingang der benötigten Informationen.</p></article><article><h3>Ein bewusst begrenzter Umfang</h3><p>Der Check enthält keine Implementierung, kein vollständiges Lastenheft und keine verbindliche Integrationsprüfung. Er kann auch zu dem Ergebnis führen, dass eine organisatorische Änderung oder vorhandene Standardfunktion genügt.</p></article></div>}</div></section>;
}
export function NextStep() {
  return <section className="po-next"><div className="po-wrap"><div><Label>Ihr nächster Schritt</Label><h2>Welcher Ablauf kostet<br />Sie unnötig Zeit?</h2><p>Ein paar Sätze reichen für den Anfang. Wir klären gemeinsam, wo ein sinnvoller erster Schritt liegt.</p></div><ContactLink /></div></section>;
}
