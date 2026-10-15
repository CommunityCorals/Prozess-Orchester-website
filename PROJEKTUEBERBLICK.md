# Prozess Orchester Website Projektüberblick

Stand der Übersicht: 15.10.2026. Historische Angaben tragen ihr Quelldatum; aktuellen Code und Betrieb vor weiterer Arbeit prüfen.

[Zentrale Projektübersicht](/Users/jupp/projects/PROJEKTUEBERSICHT.md) · [Dokumentationspflege](../projekt-dokumentation/README.md)

## Zweck

Website für individuelle Software und Automatisierung mit Kontaktintegration sowie Impressum, Datenschutz und AGB.

## Maßgebliche Quellen

- [README.md](README.md)
- [package.json](package.json)
- [src/App.tsx](src/App.tsx)
- [src/pages/Index.tsx](src/pages/Index.tsx)
- [Dockerfile](Dockerfile)
- [nginx.conf](nginx.conf)

## Belegter Stand

Vorhanden sind eine React/Vite/TypeScript-Anwendung, Docker-/Nginx-Konfiguration und Buildausgabe. Der letzte Commit betrifft Kontaktformularintegration und Agenturfooter. README ist eine allgemeine Lovable-Vorlage; aktuelle Veröffentlichung und Formularzustellung sind nicht nachgewiesen.

## Entwicklungsarbeit und Übergabe

Git-Historie und bestehende lokale Änderungen dienen als Entwicklungsnachweis. Ein fachliches Übergabeprotokoll war bislang nicht vorhanden.

Dokumentationsarbeit am 15.10.2026: Projektsteckbrief und KI-Einstiegsverweise ergänzt. Vorhandenen Anwendungscode, Daten und Veröffentlichungen dabei nicht geändert. Künftige Arbeit hier oder in der oben genannten bestehenden Arbeitsstandquelle mit Datum, Ergebnis, Prüfungen, offenen Punkten und nächstem Schritt fortschreiben.

## Lokaler Git Stand bei Erfassung

- Verzeichnis: `/Users/jupp/projects/Prozess-Orchester-website`
- Branch: `main`; Commit: `4d62abd9f6e1`.
- Letzter Commit: 2026-09-14 Restore original contact form integration and agency footer.
- Lokale Git-Änderungseinträge vor dieser Dokumentationsrunde: 3. Das ist keine Zahl fertiger Features.

## Einstieg und Prüfungen

`package.json` enthält `npm run dev`, `npm run build` und `npm run lint`; Deploymentkonfiguration in Dockerfile und Nginx-Datei lesen.

## Nächster Schritt

Lokale Änderungen, Kontaktformular und tatsächliches Veröffentlichungsziel prüfen und den nächsten konkreten Arbeitsschritt festhalten.


## Git-Sicherung 15.10.2026

Der lokale Quellenstand in `/Users/jupp/projects/Prozess-Orchester-website` (Ausgangsbranch `main`, Ausgangscommit `4d62abd9f6e1`) wird auf `backup/local-2026-10-15/Prozess-Orchester-website` gesichert. Vorhandene uncommittierte Entwicklungsarbeit bleibt bei bestehenden Repositories im Arbeitsverzeichnis und Index erhalten; der Sicherungscommit enthält eine separate Momentaufnahme. Keine Integration oder Produktveröffentlichung. Geprüft: Git-Status/Branches/Worktrees, Remote-Abgleich, Gitleaks 8.30.1 (Treffer als öffentliche Browser-Schlüssel, lokaler Supabase-Demoschlüssel bzw. Platzhalter/Bezeichner geprüft). Anwendungstests wurden für die reine Quellensicherung nicht ausgeführt. Nachweis und abschließender Remote-Commitabgleich: `/Users/jupp/projects/projekt-dokumentation/GIT-SICHERUNG-2026-10-15.md`. Nächster Schritt: Für Weiterentwicklung den jeweiligen fachlichen Arbeitsstand lesen; vor Deployment unabhängig integrieren und testen.
