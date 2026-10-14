export const taskOptions = [
  ['vergleich', 'Angebote vergleichen & recherchieren'],
  ['kundenservice', 'Kundenanfragen & Lieferstatus'],
  ['excel', 'Excel & Unternehmensdaten auswerten'],
  ['auftrag', 'Aufträge in ERP / Warenwirtschaft'],
  ['rechnung', 'Rechnungen & Belege'],
  ['andere', 'Eine andere Aufgabe'],
] as const;

type EventName = 'page_view' | 'example_open' | 'example_followup' | 'contact_click' | 'form_start' | 'form_success' | 'form_error';
const entries = ['/', '/ki-assistent', '/weniger-papierkram', '/kontakt'];
const pageKeys: Record<string, string> = { '/': 'home', '/ki-assistent': 'assistant', '/weniger-papierkram': 'paper', '/kontakt': 'contact' };
const knownCampaigns = ['po_krefeld_region_1eur', 'po_ki_assistent_krefeld_1eur'];
const keys = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_content'] as const;

export function getAttribution() {
  if (typeof window === 'undefined') return { landingPage: '/', attribution: {} as Record<string, string> };
  const params = new URLSearchParams(window.location.search);
  const attribution: Record<string, string> = {};
  keys.forEach(key => {
    const value = params.get(key);
    if (value && /^[a-zA-Z0-9_-]{1,100}$/.test(value)) attribution[key] = value;
  });
  const entry = params.get('po_entry');
  return { landingPage: entry && entries.includes(entry) ? entry : window.location.pathname, attribution };
}

export function track(event: EventName, task = '') {
  if (typeof window === 'undefined' || navigator.doNotTrack === '1') return;
  const { landingPage, attribution } = getAttribution();
  const params = new URLSearchParams({
    event,
    page: pageKeys[window.location.pathname] || 'other',
    entry: pageKeys[landingPage] || 'other',
    campaign: knownCampaigns.includes(attribution.utm_campaign) ? attribution.utm_campaign : 'direct',
    task: taskOptions.some(([id]) => id === task) ? task : 'none',
  });
  // Aggregate events only: no contact fields, visitor IDs, cookies or browser storage.
  void fetch('/_events?' + params.toString(), { method: 'POST', keepalive: true, credentials: 'omit' }).catch(() => {});
}

export function chooseTask(task: string) {
  window.dispatchEvent(new CustomEvent('po:task', { detail: task }));
}

export function initCampaign() {
  const origin = getAttribution();
  track('page_view');
  document.addEventListener('click', event => {
    if (!(event.target instanceof Element)) return;
    const anchor = event.target.closest<HTMLAnchorElement>('a[href]');
    if (!anchor) return;
    const url = new URL(anchor.href, window.location.href);
    if (url.origin !== window.location.origin) return;
    if (url.hash === '#contact-form') track('contact_click');
    // Carry campaign context through ordinary links without storing visitor data.
    if (url.pathname !== window.location.pathname && Object.keys(origin.attribution).length) {
      Object.entries(origin.attribution).forEach(([key, value]) => url.searchParams.set(key, value));
      if (entries.includes(origin.landingPage)) url.searchParams.set('po_entry', origin.landingPage);
      anchor.href = url.toString();
    }
  }, true);
}
