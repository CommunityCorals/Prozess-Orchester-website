import { readFile, writeFile, mkdir } from 'node:fs/promises';
import { render } from '../.ssr/entry-server.js';
const pages = JSON.parse(await readFile('src/content/pages.json', 'utf8'));
const projects = JSON.parse(await readFile('src/content/projects.json', 'utf8'));
const origin = 'https://prozess-orchester.de';
const fixed = [
 ['/', 'Prozessautomatisierung & Individualsoftware für KMU', 'Ihre Software ist vorhanden. Der Prozess dazwischen fehlt. Ich verbinde Systeme und entwickle Automatisierung und Individualsoftware für KMU.'],
 ['/ki-arbeitsplatz','KI-Arbeitsplatz für Mitarbeitende','E-Mails, PDFs und Excel-Dateien mit KI-Unterstützung bearbeiten: konkrete Vorher-Nachher-Beispiele, begrenzte Zugriffe und Freigaben für Ihr Team.'],
 ['/projekte','Projekte: Software & Automatisierung','Anonymisierte Praxisprojekte: Angebotssoftware, Versandkostenabgleich und betriebliche Handelsmodule. Konkrete Aufgaben und entwickelte Lösungen.'],
 ['/ueber-mich','Dominique Deutzmann – Ihr Ansprechpartner','Prozess-Orchester aus Krefeld: Ich entwickle Automatisierungen, individuelle Software und Schnittstellen für die tägliche Arbeit in KMU.'],
 ['/kontakt','Kontakt und kostenloses Kennenlerngespräch','Beschreiben Sie Ihren Ablauf. Im kostenlosen Kennenlerngespräch klären wir einen sinnvollen Einstieg in Automatisierung und Softwareentwicklung.'],
 ['/impressum','Impressum','Impressum und Anbieterangaben von Prozess-Orchester – Dominique Deutzmann.'],
 ['/datenschutz','Datenschutz','Informationen zur Verarbeitung personenbezogener Daten auf der Website und in der Meta-App von Prozess-Orchester.'],
 ['/datenloeschung','Datenlöschung für die Meta-App','Anleitung zur Löschung personenbezogener Daten im Zusammenhang mit der Meta-App von Prozess-Orchester.'],
 ['/agb','Allgemeine Geschäftsbedingungen','Allgemeine Geschäftsbedingungen von Prozess-Orchester.'],
];
const routes = [...fixed, ...pages.map(p => ['/'+p.slug,p.title.replace(/\.$/,''),p.lead]), ...projects.map(p=>['/projekte/'+p.slug,p.title.replace(/\.$/,''),p.lead])];
const template = await readFile('dist/index.html','utf8');
const escape = s => s.replaceAll('&','&amp;').replaceAll('"','&quot;').replaceAll('<','&lt;').replaceAll('>','&gt;');
for (const [path,title,description] of [...routes, ['/404','Seite nicht gefunden','Diese Adresse ist nicht verfügbar.']]) {
 const url = origin + (path === '/' ? '/' : path);
 const fullTitle = title + ' | Prozess-Orchester';
 let html = template.replace(/<title>[\s\S]*?<\/title>/, '<title>'+escape(fullTitle)+'</title>')
  .replace(/<meta name="description"[^>]*>/, '<meta name="description" content="'+escape(description)+'" />')
  .replace(/<link rel="canonical"[^>]*>/, '<link rel="canonical" href="'+url+'" />')
  .replace(/<meta property="og:title"[^>]*>/, '<meta property="og:title" content="'+escape(fullTitle)+'" />')
  .replace(/<meta property="og:description"[^>]*>/, '<meta property="og:description" content="'+escape(description)+'" />')
  .replace(/<meta name="twitter:title"[^>]*>/, '<meta name="twitter:title" content="'+escape(fullTitle)+'" />')
  .replace(/<meta name="twitter:description"[^>]*>/, '<meta name="twitter:description" content="'+escape(description)+'" />')
  .replace('<div id="root"></div>', '<div id="root">'+render(path)+'</div>')
  .replace('</head>', '<meta property="og:url" content="'+url+'" /><noscript><style>.reveal{opacity:1;transform:none}</style></noscript></head>');
 if (path==='/404') html=html.replace('content="index, follow"','content="noindex, follow"');
 const target = path === '/' ? 'dist' : 'dist'+path;
 await mkdir(target,{recursive:true}); await writeFile(target+'/index.html',html);
}
await writeFile('dist/sitemap.xml','<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">'+routes.map(([path])=>'<url><loc>'+origin+path+'</loc></url>').join('')+'</urlset>\n');
await writeFile('dist/robots.txt','User-agent: *\nAllow: /\n\nSitemap: '+origin+'/sitemap.xml\n');
console.log('Prerendered '+routes.length+' pages and a 404 page.');
