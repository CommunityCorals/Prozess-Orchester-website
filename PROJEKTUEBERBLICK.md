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

## Pflege

[Zentrale Pflegeanweisung](/opt/n8n/dokumentation/PFLEGEANWEISUNG.md) gilt nach jeder relevanten Arbeit. Bestehende oben genannte Arbeitsstandquellen bleiben maßgeblich; diesen Überblick nur als verdichteten Einstieg aktualisieren. Fehlt ein laufendes Arbeitsprotokoll, den datierten Fortsetzungsstand hier ergänzen, kein konkurrierendes Protokoll eröffnen.
