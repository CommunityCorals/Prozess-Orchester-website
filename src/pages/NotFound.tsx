import { Layout, PageIntro } from '@/components/Website';
export default function NotFound() {
 return <Layout><PageIntro eyebrow="Seite nicht gefunden" title="Hier geht es nicht weiter. Auf der Startseite schon." lead="Diese Adresse ist nicht verfügbar. Über die Navigation finden Sie Leistungen, Lösungen und Projekte." actions={false}/><div className="po-wrap po-section"><a className="po-button" href="/">Zur Startseite ↗</a></div></Layout>;
}
