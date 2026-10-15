import { readFile, writeFile, mkdir } from 'node:fs/promises';
import { render } from '../.ssr/entry-server.js';
const pages = JSON.parse(await readFile('src/content/pages.json', 'utf8'));
const projects = JSON.parse(await readFile('src/content/projects.json', 'utf8'));
const origin = 'https://prozess-orchester.de';
const fixed = [
 ['/', 'Prozessautomatisierung & Individualsoftware für KMU', 'Weniger Handarbeit: Dominique Deutzmann automatisiert Prozesse, entwickelt individuelle Software und verbindet bestehende Systeme. Persönlich für KMU.'],
 ['/projekte','Projekte: Software & Automatisierung','Anonymisierte Praxisprojekte: Angebotssoftware, Versandkostenabgleich und betriebliche Handelsmodule. Konkrete Aufgaben und entwickelte Lösungen.'],
 ['/prozess-check','Prozess-Check für 690 € netto','90 Minuten Gespräch, ein konkreter Prozess und eine schriftliche Einschätzung zu Potenzial, Machbarkeit und Investition. Prozess-Check für 690 € netto.'],
 ['/ueber-mich','Dominique Deutzmann – Ihr Ansprechpartner','Prozess-Orchester aus Krefeld: Dominique Deutzmann entwickelt Automatisierungen, individuelle Software und Schnittstellen für die tägliche Arbeit in KMU.'],
 ['/kontakt','Kontakt und kostenloses Erstgespräch','Beschreiben Sie Ihren Ablauf. Im kostenlosen Erstgespräch mit Dominique Deutzmann klären Sie einen sinnvollen Einstieg in Automatisierung und Softwareentwicklung.'],
 ['/impressum','Impressum','Impressum und Anbieterangaben von Prozess-Orchester – Dominique Deutzmann.'],
 ['/datenschutz','Datenschutz','Informationen zur Verarbeitung personenbezogener Daten auf der Website von Prozess-Orchester.'],
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
