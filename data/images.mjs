// Real New Zealand photography, Unsplash Licence (free, commercial use, no permission needed).
// We still credit every photographer on /credits — it costs nothing and it is the honest thing to do.
// Files are downloaded LOCALLY by tools/fetch-photos.mjs; the site never hotlinks a third-party CDN.

export const PHOTOS = {
  'aoraki': {
    file: 'aoraki', unsplashId: '9HyVwpOOSBI', src: 'photo-1531804159968-24716780d214',
    by: 'Casey Horner', un: 'mischievous_penguins', focal: '50% 55%',
    alt: 'Snow-covered Southern Alps rising behind a still lake at first light',
  },
  'auckland': {
    file: 'auckland', unsplashId: 'oQrJ82Iekqk', src: 'photo-1595125989588-36d745a2a828',
    by: 'Sulthan Auliya', un: 'swafie', focal: '50% 60%',
    alt: 'The Auckland skyline seen across the Waitematā Harbour on a clear day',
  },
  'harbour-homes': {
    file: 'harbour-homes', unsplashId: 'NTgbsd3G8xc', src: 'photo-1609846615884-61b22397f31a',
    by: 'Karissa Best', un: 'karissabestphotography', focal: '50% 55%',
    alt: 'New Zealand houses on a green headland above the water',
  },
  'family-beach': {
    file: 'family-beach', unsplashId: '3sXQGLpPZvU', src: 'photo-1612335022254-90457bb8c802',
    by: 'Fiona Jackson', un: 'fionakiwi', focal: '50% 50%',
    alt: 'A family spread out along a wide New Zealand beach in summer',
  },
  'sheep-hills': {
    file: 'sheep-hills', unsplashId: 'sRMq9uaI9DU', src: 'photo-1717737859736-c66a498a7a17',
    by: 'Petra Reid', un: 'createinme_nz', focal: '50% 50%',
    alt: 'Sheep grazing a steep green New Zealand hill paddock',
  },
  'coast-aerial': {
    file: 'coast-aerial', unsplashId: '4dcsLxQxSHY', src: 'photo-1508971607899-a238a095d417',
    by: 'Rod Long', un: 'rodlong', focal: '50% 50%',
    alt: 'Aerial view of a New Zealand beach curving away beneath coastal hills',
  },
  'fern': {
    file: 'fern', unsplashId: '48Ex3a6HXVA', src: 'photo-1580978536938-23974cf8a67d',
    by: 'James Coleman', un: 'jhc', focal: '50% 50%',
    alt: 'A silver fern frond in close detail',
  },
  'open-road': {
    file: 'open-road', unsplashId: 'LtF4gBb-MDA', src: 'photo-1567526619166-76da4674cdec',
    by: 'Yoann Laheurte', un: 'yoannlaheurte', focal: '50% 55%',
    alt: 'A vehicle on an empty New Zealand highway running toward the ranges',
  },
  'wellington': {
    file: 'wellington', unsplashId: 'KRtXOMfS4oA', src: 'photo-1589871973318-9ca1258faa5d',
    by: 'Sulthan Auliya', un: 'swafie', focal: '50% 55%',
    alt: 'Wellington from above at sunset, the harbour catching the last light',
  },
  'villas': {
    file: 'villas', unsplashId: '8QtjhvRove8', src: 'photo-1627854630176-68251665946e',
    by: 'Robert Calvert', un: 'robertcalvertnz', focal: '50% 55%',
    alt: 'Weatherboard New Zealand villas stacked up a green hillside street',
  },
  'green-road': {
    file: 'green-road', unsplashId: 'ihDvHPE7Ecg', src: 'photo-1717737859600-6e836e8fd632',
    by: 'Petra Reid', un: 'createinme_nz', focal: '50% 50%',
    alt: 'A gravel road winding through lush green New Zealand hill country',
  },
  'still-lake': {
    file: 'still-lake', unsplashId: 'k7vVgmDa1Jw', src: 'photo-1571503929253-cc2ca9c4f27c',
    by: 'Hannah Wright', un: 'hannahwrightdesigner', focal: '50% 50%',
    alt: 'Bare hills reflected in a perfectly still South Island lake',
  },
};

export const WIDTHS = [800, 1400, 2000];

export function photo(key) {
  const p = PHOTOS[key];
  if (!p) throw new Error(`Unknown photo key: ${key}`);
  return p;
}

/** <img> markup with a real srcset, lazy by default, eager for the hero. */
export function img(key, { className = '', sizes = '100vw', eager = false, alt } = {}) {
  const p = photo(key);
  const srcset = WIDTHS.map((w) => `/assets/photos/${p.file}-${w}.jpg ${w}w`).join(', ');
  return `<img src="/assets/photos/${p.file}-1400.jpg" srcset="${srcset}" sizes="${sizes}"
    alt="${(alt || p.alt).replace(/"/g, '&quot;')}" width="1400" height="933"
    style="object-position:${p.focal}"
    ${eager ? 'loading="eager" fetchpriority="high"' : 'loading="lazy"'} decoding="async"
    class="${className}">`;
}

export function credit(key) {
  const p = photo(key);
  return `Photo: ${p.by}`;
}
