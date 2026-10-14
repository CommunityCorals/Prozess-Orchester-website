import { ArrowUpRight, Plus } from 'lucide-react';
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
export function ContactLink({ children = 'Aufgaben-Check anfragen' }: { children?: ReactNode }) {
  return <a className="po-button" href={contactHref}>{children}<ArrowUpRight size={18} aria-hidden="true" /></a>;
}
export function PageIntro({ eyebrow, title, lead, actions = true }: { eyebrow: string; title: string; lead: string; actions?: boolean }) {
  return <header className="po-page-intro"><div className="po-wrap"><a href="/" className="po-breadcrumb">Startseite <span aria-hidden="true">/</span> {eyebrow}</a><Label>{eyebrow}</Label><h1>{title}</h1><p className="po-page-lead">{lead}</p>{actions && <div className="po-actions"><ContactLink /><span className="po-small">Kostenloser Aufgaben-Check · etwa 20–30 Minuten</span></div>}</div></header>;
}
export function Cards({ slugs }: { slugs: string[] }) {
  return <div className="po-card-grid">{slugs.map(slug => { const page = pages.find(p => p.slug === slug); return page && <a className="po-content-card" href={'/' + page.slug} key={slug}><span className="po-kicker">{page.kind}</span><h3>{page.cardTitle}</h3><p>{page.cardText}</p><span className="po-card-link">Mehr erfahren <ArrowUpRight size={19} /></span></a>; })}</div>;
}
export function ProjectCards() {
  return <div className="po-card-grid">{projects.map((project, i) => <a className="po-content-card po-project-card" href={'/projekte/' + project.slug} key={project.slug}><div className="po-project-index" aria-hidden="true">0{i + 1}<ArrowUpRight /></div><span className="po-kicker">{project.label}</span><h3>{project.title}</h3><p>{project.lead}</p><span className="po-card-link">Projekt ansehen <ArrowUpRight size={19} /></span></a>)}</div>;
}
export function FAQList({ items }: { items: { q: string; a: string }[] }) {
  return <div className="po-question-list">{items.map(item => <details key={item.q}><summary>{item.q}<Plus size={20} aria-hidden="true" /></summary><p>{item.a}</p></details>)}</div>;
}
export function NextStep() {
  return <section className="po-next"><div className="po-wrap"><div><Label>Ihr nächster Schritt</Label><h2>Welcher Ablauf kostet<br />Ihr Team heute unnötig Zeit?</h2><p>Zeigen Sie mir Ihren Engpass. Im kostenlosen Projektgespräch besprechen wir, wie ich ihn lösen kann – und ob wir zusammenpassen.</p></div><ContactLink /></div></section>;
}
