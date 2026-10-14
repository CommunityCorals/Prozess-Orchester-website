#!/usr/bin/env python3
"""Aggregate first-party campaign events. Counts requests, not unique people."""
import argparse
import collections
import json
from pathlib import Path

parser = argparse.ArgumentParser(description=__doc__)
parser.add_argument("directory", type=Path)
parser.add_argument("--since", help="First day, YYYY-MM-DD (inclusive)")
args = parser.parse_args()
counts = collections.defaultdict(collections.Counter)
for path in sorted(args.directory.glob("events-*.jsonl")):
    if args.since and path.stem.removeprefix("events-") < args.since:
        continue
    for line in path.read_text().splitlines():
        try:
            event = json.loads(line)
        except json.JSONDecodeError:
            continue
        counts[(event["campaign"], event["entry"])][event["event"]] += 1
print("Kampagne / Einstieg | Aufrufe | Beispiele | Kontaktklicks | Formularstarts | Anfragen | Fehler")
for (campaign, entry), totals in sorted(counts.items()):
    values = [totals[key] for key in ["page_view", "example_open", "contact_click", "form_start", "form_success", "form_error"]]
    print(campaign + " / " + entry + " | " + " | ".join(map(str, values)))
print("\nEreignisse, keine eindeutigen Besucher. Anfragen anhand ihres Inhalts separat qualifizieren.")
