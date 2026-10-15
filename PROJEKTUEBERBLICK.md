# Prozess-Orchester Website – Projektüberblick

Zentraler Einstieg: [PROJEKTUEBERSICHT.md](/opt/n8n/PROJEKTUEBERSICHT.md).

Stand der Erhebung: 15.10.2026. Quellen wurden lokal gelesen; keine Anwendungstests, Builds, Installationen oder Dienständerungen durchgeführt. Dateidaten sind Quellzeitpunkte, kein Nachweis für fachliche Aktualität. Nicht gespeicherte Chats fehlen; Wissenslücken bleiben ausdrücklich offen.

Statusbegriffe: **in Arbeit** = offene Änderung; **lokal fertig** = lokal mit benannten Prüfungen abgeschlossen; **integriert** = in einen benannten Zielbranch übernommen; **veröffentlicht** = Auslieferung mit datiertem Nachweis. Ein Commit, ZIP, Dockerfile oder früher bestandener Test beweist keinen heutigen Produktivstand.

## Zweck und Architektur

React-/TypeScript-Website mit Vite, Tailwind und shadcn/ui. Die maßgebliche lokale Fassung liegt im Deploymentverzeichnis vom 19.09.2026-v2, nicht im ähnlich benannten älteren Projektordner. Der Build erzeugt den Client, ein SSR-Bundle und statisch vorgerenderte Seiten; Auslieferung über Nginx. Das Kontaktformular übergibt an einen vorhandenen n8n-Webhook.

Wichtige Quellen im Arbeitsverzeichnis: `src/content/` für Seiten-/Projektinhalte, `src/pages/`, `src/components/`, `src/entry-server.tsx`, `scripts/prerender.mjs`, `public/`, `Dockerfile`, `nginx.conf`. Der Marketingordner ist eine zugehörige Assetablage.

## Maßgebliche Quellen

- [Deployment- und Arbeitsstand 14.10.2026](/opt/n8n/deployments/prozess-orchester-20261014/DEPLOYMENT.md) — maßgeblicher jüngster Abschluss mit Nachträgen; spätere Nachträge ersetzen frühere Formulardetails
- [Inhaltsentscheidungen 19.09.2026](/opt/n8n/deployments/prozess-orchester-20260919-v2/CONTENT.md) — historische fachliche Begründung, gegenüber späteren Änderungen nachrangig
- [Deployment 19.09.2026-v2](/opt/n8n/deployments/prozess-orchester-20260919-v2/DEPLOYMENT.md) — historische Veröffentlichung und Einschränkungen
- [Buildskripte](/opt/n8n/deployments/prozess-orchester-20260919-v2/source/package.json) — aktuelle lokale Builddefinition
- [Marketingablage](/opt/n8n/prozess-orchester-facebook) — Anzeigenentwürfe und Assets; IDs/Publikationsstatus nicht erneut geprüft

## Belegter Entwicklungsstand und Entscheidungen

**Integriert im lokalen main:** letzter Commit 77566da vom 14.10.2026 vereinheitlicht Unterseiten mit der Startseitengestaltung. Vorherige Arbeiten konkretisierten Assistenzangebote und stellten das ursprüngliche Kontaktformular wieder her. Zum Erhebungszeitpunkt war main gegenüber dem lokalen origin/main sieben Commits voraus; das Remote wurde zusätzlich als älterer Stand 4d62abd abgefragt.

**Veröffentlicht laut historischem Nachweis:** Der jüngste Deploymentbericht dokumentiert am 14.10.2026 Veröffentlichung des vereinheitlichten Designs und 75 Seiten-/Viewportprüfungen, Produktionsbuild und weitere Browserprüfungen. Heute nicht erneut getestet. Der spätere Kontaktformular-Nachtrag ersetzt die zunächst beschriebenen zusätzlichen Formularfelder: wieder die ursprünglichen sieben Payloadfelder; kein neues Formulartracking daraus ableiten.

**Verwandte Kopien:** `/opt/n8n/Prozess-Orchester.de` ist ein älterer eigenständiger Checkout auf 4768ba2 (2025) mit unversionierter Bannervorschau. Die source-Verzeichnisse der Deployments 20260914 und 20260919 stehen auf 4d62abd und enthalten lokale Änderungen. Alle haben eigene Git-Verzeichnisse, keine miteinander verknüpften Worktrees. Das Deployment 20261014 enthält Berichte/Prüfmaterial und verweist auf die v2-Quelle.

## Arbeitsverzeichnis und Git

Arbeitsverzeichnis: `/opt/n8n/deployments/prozess-orchester-20260919-v2/source`. Branch `main`, Commit `77566dac4f7842c9f09853c10e9deeaa77231e92` vom `2026-10-14T10:04:52+02:00`. Lokale Änderungen vor dieser Dokumentation: keine.

Branches, Kopien und Ausgangsstatus: [datierte Momentaufnahme](/opt/n8n/dokumentation/BESTANDSAUFNAHME-20261015T065518Z.json). Nachträgliche Dokumentations- und Git-Arbeit: [Git-Sicherungsstand](/opt/n8n/dokumentation/GIT-SICHERUNGSSTAND.md). Remote-Tracking kann veraltet sein; vor Fortsetzung Remote vergleichen.

## Start, Build und Prüfungen

Laut README und package.json bei vorhandenen Abhängigkeiten: `npm run dev`, `npm run build`, `npm run lint`, `npm run preview`. Der aktuelle Produktionsbuild verkettet Vite-Clientbuild, SSR-Build und `node scripts/prerender.mjs`. Die alten Lovable-README-Anweisungen zur Veröffentlichung sind historische Vorlagen. Prüfmaterial liegt in den jeweiligen Deploymentverzeichnissen, darunter `checks/` und `contact-restore/` vom 14.10.2026. Keine dieser Prüfungen wurde jetzt wiederholt.

## Offene Punkte und nächster Schritt

Nächster Schritt: den gesicherten Git-Stand mit dem gewünschten Integrationsbranch abgleichen und erst für eine konkrete Änderung den aktuellen Build und die abgefangenen Formular-/Browserprüfungen wiederholen. Aktuelle Meta-Anzeigenfreigabe, heutige Websiteauslieferung und Google-Indexierung sind nicht verifiziert. Alte ungecommitete Deploymentkopien nicht versehentlich als aktuellen Quellstand verwenden.

## Aktuelle Textkorrektur – 15.10.2026

Überschrift auf /ki-assistent: „Ihr KI-Assistent. Für die Unterstützung Ihres Teams.“. Lokal fertig; Textaustausch, git diff --check und Produktionsbuild einschließlich Prerendering erfolgreich. Nicht veröffentlicht, keine Browserprüfung. Details und nächster Schritt im [aktuellen Nachtrag](/opt/n8n/deployments/prozess-orchester-20261014/DEPLOYMENT.md). Arbeitsbranch main auf 77566dac4f7842c9f09853c10e9deeaa77231e92; Anwendungstext bleibt dort uncommittiert, wird auf dem dokumentierten Git-Sicherungsbranch gesichert.

## Aktuelle Farbgestaltung – 15.10.2026

Blau führt jetzt Buttons, Links und Orientierung; Cyan unterstützt technische Elemente, Marineblau die dunklen Bereiche. Violett bleibt ergänzender Logoakzent. Gemeinsame Farben in src/site-design.css, Kampagnenfarben in src/campaign.css. Lokal fertig: Produktionsbuild, 75 Seiten-/Größenprüfungen sowie sechs gezielte Abschluss-/Fokusprüfungen bestanden; Screenshots gesichtet. Nicht veröffentlicht. Arbeitsbranch main auf 77566dac4f7842c9f09853c10e9deeaa77231e92 mit lokaler CSS-Arbeit; Git-Sicherungsbranch serverstand-2026-10-15. Der [maßgebliche Arbeitsnachtrag](/opt/n8n/deployments/prozess-orchester-20261014/DEPLOYMENT.md) enthält Entscheidungen, tatsächliche Prüfungen und nächsten Schritt. [Desktopvorschau](/opt/n8n/deployments/prozess-orchester-20261014/color-review-20261015/home-1440.png), [mobile Assistenzseite](/opt/n8n/deployments/prozess-orchester-20261014/color-review-20261015/ki-assistent-390.png).

## Aktuelle Veröffentlichung – 15.10.2026

**Veröffentlicht:** neue Blau/Cyan/Violett-Gestaltung und Überschrift „Ihr KI-Assistent. Für die Unterstützung Ihres Teams.“ auf https://prozess-orchester.de, Containerstart 2026-10-15T07:30:02.72257712Z. Ausgelieferter Anwendungsstand: Git-Sicherungscommit 6fe63bcb8647cd4effbd5fc9efaa0241fa7f7c3b; keine Integration in Remote-main. Nur Website-Service erneuert. 38 Origin-HTTPS-Dateivergleiche und sechs Browser-/Viewportprüfungen am laufenden Container erfolgreich. Cloudflare blockiert öffentliche automatisierte HTML-Prüfungen mit einer Bot-Schutzabfrage; öffentliche neue CSS-/JS-Dateien erreichbar. Frühere Abschnitte sind historische Arbeitsstände. Maßgeblich ist der [Veröffentlichungsnachtrag](/opt/n8n/deployments/prozess-orchester-20261014/DEPLOYMENT.md) mit Image, Rückfall, Prüfgrenzen und nächstem Schritt.

## Unterseiten veröffentlicht – 15.10.2026

Die Blau/Cyan-Farbwelt gilt jetzt auch für die Seitenköpfe und Abschlussbereiche sämtlicher Inhaltsunterseiten, Karten/Statushinweise sowie die Rechtstextseiten. **Veröffentlicht**, Anwendungscommit `27e79366d796cd41789ab4b028ff612c7d751f19`, Image subpages-20261015; vorherige Publikationsabschnitte sind historische Stände. Produktionsbuild, 75 lokale und acht Produktions-Browserprüfungen sowie 38 Origin-HTTPS-Dateivergleiche bestanden. Öffentliche CSS-/JS-Dateien bestätigt; automatisierte öffentliche HTML-Prüfung durch Cloudflare eingeschränkt. [Maßgeblicher Nachtrag mit Entscheidungen, Rückfall und nächstem Schritt](/opt/n8n/deployments/prozess-orchester-20261014/DEPLOYMENT.md).

## Kostenloses Erstgespräch – 15.10.2026

**Veröffentlicht:** „Aufgaben-Check“ auf allen Seiten durch „Kostenloses Erstgespräch“ ersetzt, einschließlich Navigation, Buttons, FAQ, Kontakt und Metadaten. Kontakt-/Abschlussüberschrift „Wo können wir Ihr Team entlasten?“ mit Erklärung zum 20–30-minütigen Gespräch. Anwendungscommit `842294c39253b08fe8e4cd8b47dba24cdb34ceec`, Image erstgespraech-20261015. Build, Textprüfung aller 26 vorgerenderten Seiten, 100 lokale und 8 Produktions-Browserprüfungen erfolgreich. Frühere Bezeichnungen in vorangegangenen Abschnitten sind historisch. [Maßgeblicher Nachtrag mit Veröffentlichung, Prüfgrenzen und nächstem Schritt](/opt/n8n/deployments/prozess-orchester-20261014/DEPLOYMENT.md).

## Pflege

[Zentrale Pflegeanweisung](/opt/n8n/dokumentation/PFLEGEANWEISUNG.md) gilt nach jeder relevanten Arbeit. Bestehende oben genannte Arbeitsstandquellen bleiben maßgeblich; diesen Überblick nur als verdichteten Einstieg aktualisieren. Fehlt ein laufendes Arbeitsprotokoll, den datierten Fortsetzungsstand hier ergänzen, kein konkurrierendes Protokoll eröffnen.
