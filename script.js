// ===== Video de fondo (YouTube IFrame API) =====
// Siempre inicia y vuelve al segundo 8, silenciado y en bucle.
(function () {
  var VIDEO_ID = 'XnCxlO4mfjQ';
  var START = 8;
  if (!document.getElementById('heroPlayer')) return;

  var tag = document.createElement('script');
  tag.src = 'https://www.youtube.com/iframe_api';
  document.head.appendChild(tag);

  window.onYouTubeIframeAPIReady = function () {
    window._heroPlayer = new YT.Player('heroPlayer', {
      videoId: VIDEO_ID,
      playerVars: {
        autoplay: 1, mute: 1, controls: 0, playsinline: 1, rel: 0,
        modestbranding: 1, disablekb: 1, fs: 0, iv_load_policy: 3, start: START
      },
      events: {
        onReady: function (e) {
          e.target.mute();
          e.target.seekTo(START, true);
          e.target.playVideo();
        },
        onStateChange: function (e) {
          // Al terminar, reinicia desde el segundo 8 (bucle limpio)
          if (e.data === YT.PlayerState.ENDED) {
            e.target.seekTo(START, true);
            e.target.playVideo();
          }
        }
      }
    });
  };
})();

// ===== Traducciones EN (el español es el contenido por defecto del HTML) =====
const EN = {
  'brand.sub': 'Private Transport',
  'nav.services': 'Services',
  'nav.vehicles': 'Vehicles',
  'nav.destinations': 'Destinations',
  'nav.book': 'Book',

  'hero.eyebrow': 'Costa Rica · Guanacaste Province',
  'hero.title': 'Private transport to discover the <span>Guanacaste Pacific coast</span>',
  'hero.lead': 'Comfortable, safe transfers from <strong>Liberia International Airport (LIR)</strong>, hotel pickup, and tours to the most beautiful beaches. Travel with a local driver, at your own pace and hassle-free.',
  'hero.cta1': 'Book on WhatsApp',
  'hero.cta2': 'See vehicles',
  'hero.stat1': 'Vehicles available',
  'hero.stat2': 'Passengers + driver per trip',
  'hero.stat3': 'Booking via WhatsApp',

  'serv.kicker': 'What we offer',
  'serv.title': 'A service designed so your only job is to enjoy',
  'serv.sub': 'We handle every transfer with punctuality, safety, and a friendly touch.',
  'serv.f1.title': 'Airport transfers',
  'serv.f1.p': 'Pickup and drop-off at Liberia International Airport (LIR / Daniel Oduber), with flight tracking.',
  'serv.f2.title': 'Hotel pickup',
  'serv.f2.p': 'We meet you right at the lobby of your hotel, villa, or Airbnb, whenever suits you best.',
  'serv.f3.title': 'We drive you across the country',
  'serv.f3.p': 'To beaches like Tamarindo and Conchal, and also La Fortuna, Río Celeste, or San José. You pick the destination; we drive.',
  'serv.f4.title': 'Local driver',
  'serv.f4.p': 'Knowledge of the area, trustworthy recommendations, and a relaxed ride across the province.',
  'serv.f5.title': 'Guaranteed comfort',
  'serv.f5.p': 'Vehicles with air conditioning, comfortable seats, and plenty of room for your luggage.',
  'serv.f6.title': 'Flexible schedules',
  'serv.f6.p': 'Trips at your own pace, stops whenever you like, and availability to book any time.',

  'fleet.kicker': 'Our fleet',
  'fleet.title': 'Up to 3 vehicles at your service',
  'fleet.sub': 'Each vehicle travels with <strong>up to 4 passengers + driver</strong> — ideal for couples, families, and small groups.',
  'fleet.vehicle': 'Vehicle',
  'fleet.v1.title': 'Mini SUV',
  'fleet.v1.p': 'Comfortable and nimble, ideal for couples and families who want to get around the area with ease.',
  'fleet.v2.title': 'Sedan',
  'fleet.v2.p': 'Comfort and style for airport transfers and easy trips between hotels.',
  'fleet.v3.title': 'Sedan',
  'fleet.v3.p': 'One more option for small groups: a calm, punctual, and safe transfer.',
  'fleet.spec.pax': '4 passengers + driver',
  'fleet.spec.luggage': 'Room for luggage',
  'fleet.spec.trunk': 'Comfortable trunk',
  'fleet.spec.ac': 'Air conditioning',
  'fleet.note': 'Need a <strong>4x4</strong>? Ask about availability. Every booking is confirmed via WhatsApp.',

  'dest.kicker': 'Popular destinations',
  'dest.title': 'Destinations we drive you to',
  'dest.sub': 'Tap a destination to see photos and request your ride. You choose where; we take you there.',
  'dest.cap.sunset': 'Pacific sunsets',
  'dest.cap.coast': 'Guanacaste coast',
  'dest.cap.fortuna': 'La Fortuna · Arenal Volcano',
  'dest.go': 'See destination →',
  'dest.name.fortuna': 'La Fortuna · Arenal Volcano',
  'dest.name.leona': 'La Leona Waterfall',

  'pano.text': '"Pura vida" on every kilometer',

  'res.kicker': 'Booking',
  'res.title': 'Book your trip in a single message',
  'res.sub': '<strong>Samuel Ramírez Ampié</strong> is in charge of managing your trip bookings. Message him on WhatsApp with your date, number of passengers, and destination, and you’ll get a reply with all the details.',
  'res.role': 'Booking manager',
  'res.cta': 'Message on WhatsApp',
  'res.hint': 'Tap the button to open WhatsApp with a message ready to send.',

  'footer.sub': 'Transfers and tours on Costa Rica’s Pacific coast',
  'footer.credits': 'Photos: Wikimedia Commons (CC0 / CC BY / CC BY-SA) — Jarle Naustvik, Tamarindowiki, Guacamolio, Rômulo Gama Ferreira, El Pantera, WClarke, Bernard Gagnon, David Broad, and others. Vehicle illustrations made in-house. Aerial video: Todd Swint (YouTube).',
  'footer.copy': 'Guanacaste Private Transport · Costa Rica.',

  'filter.all': 'All',
  'filter.beach': 'Beaches',
  'filter.adventure': 'Adventure',
  'filter.city': 'City',
  'filter.type': 'Type:',
  'filter.duration': 'Duration:',
  'filter.half': 'Half day',
  'filter.full': 'Full day',
  'qr.label': 'Scan me to ask for info on WhatsApp',

  'map.kicker': 'The route',
  'map.title': 'One country, many destinations',
  'map.sub': 'We take you all across Costa Rica. Tap a point on the map to see where we take you.',

  'faq.kicker': 'Frequently asked questions',
  'faq.title': 'Everything you need to know',
  'faq.q1': 'How do I make a booking?',
  'faq.a1': 'It’s simple: message Samuel Ramírez Ampié on WhatsApp with your date, number of passengers, and destination. He’ll confirm availability and all the details.',
  'faq.q2': 'How many people fit per vehicle?',
  'faq.a2': 'Each vehicle travels with up to 4 passengers plus the driver. For larger groups we can arrange several vehicles.',
  'faq.q3': 'Do you do transfers from Liberia Airport (LIR)?',
  'faq.a3': 'Yes. We do pickups and drop-offs at Liberia International Airport (Daniel Oduber) and also at your hotel, villa, or Airbnb.',
  'faq.q4': 'Do you have 4x4 vehicles?',
  'faq.a4': 'For routes that require a 4x4, ask about availability when booking and we’ll let you know the options.',
};

// Guardar el contenido español original (del HTML)
const ES = {};
document.querySelectorAll('[data-i18n]').forEach((el) => {
  ES[el.getAttribute('data-i18n')] = el.innerHTML;
});

function setLanguage(lang) {
  const dict = lang === 'en' ? EN : ES;
  document.querySelectorAll('[data-i18n]').forEach((el) => {
    const key = el.getAttribute('data-i18n');
    if (dict[key] != null) el.innerHTML = dict[key];
  });
  document.documentElement.lang = lang;
  document.querySelectorAll('.lang-toggle button').forEach((b) => {
    const active = b.getAttribute('data-lang') === lang;
    b.classList.toggle('is-active', active);
    b.setAttribute('aria-pressed', String(active));
  });
  buildQR(lang);
  try { localStorage.setItem('lang', lang); } catch (e) {}
}

document.querySelectorAll('.lang-toggle button').forEach((b) => {
  b.addEventListener('click', () => setLanguage(b.getAttribute('data-lang')));
});

// Idioma inicial: el guardado, o según el navegador (turistas → inglés por defecto si aplica)
const savedLang = (() => { try { return localStorage.getItem('lang'); } catch (e) { return null; } })();
setLanguage(savedLang || ((navigator.language || '').toLowerCase().startsWith('en') ? 'en' : 'es'));

// Año dinámico
document.getElementById('year').textContent = new Date().getFullYear();

// Menú móvil
const toggle = document.querySelector('.nav__toggle');
const links = document.querySelector('.nav__links');
if (toggle && links) {
  toggle.addEventListener('click', () => {
    const open = links.classList.toggle('is-open');
    toggle.setAttribute('aria-expanded', String(open));
  });
  links.querySelectorAll('a').forEach((a) =>
    a.addEventListener('click', () => {
      links.classList.remove('is-open');
      toggle.setAttribute('aria-expanded', 'false');
    })
  );
}

// Animaciones de aparición al hacer scroll
const revealTargets = document.querySelectorAll(
  '.section__head, .feature, .vcard, .gallery__item, .reservas__content, .reservas__card'
);
revealTargets.forEach((el) => el.setAttribute('data-reveal', ''));
const io = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        io.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12 }
);
revealTargets.forEach((el) => io.observe(el));

// Sombra del nav al hacer scroll
const nav = document.querySelector('.nav');
const onScroll = () => {
  nav.style.boxShadow = window.scrollY > 10 ? '0 8px 30px -18px rgba(5,59,64,.4)' : 'none';
};
window.addEventListener('scroll', onScroll, { passive: true });
onScroll();

// ===== Filtros combinables (Tipo + Duración) =====
const dfilters = document.getElementById('dfilters');
if (dfilters) {
  const cards = [...document.querySelectorAll('.dcard')];
  const sel = (group) => [...dfilters.querySelectorAll('[data-group="' + group + '"] .dfilter.is-active')].map((b) => b.dataset.filter);
  const apply = () => {
    const cat = sel('cat');
    const dur = sel('dur');
    cards.forEach((c) => {
      const okCat = !cat.length || cat.includes(c.dataset.cat);
      const okDur = !dur.length || dur.includes(c.dataset.dur);
      c.classList.toggle('is-hidden', !(okCat && okDur));
    });
  };
  dfilters.addEventListener('click', (e) => {
    const btn = e.target.closest('.dfilter');
    if (!btn) return;
    btn.classList.toggle('is-active');
    apply();
  });
}

// ===== QR de WhatsApp ("quiero info"), dependiente del idioma =====
function buildQR(lang) {
  const box = document.getElementById('qrCode');
  if (!box || typeof qrcode === 'undefined') return;
  const msg = lang === 'en'
    ? 'Hi Samuel, I would like information about your private transport service in Guanacaste.'
    : 'Hola Samuel, quiero información sobre el servicio de transporte privado en Guanacaste.';
  const url = 'https://wa.me/50688015925?text=' + encodeURIComponent(msg);
  try {
    const qr = qrcode(0, 'M');
    qr.addData(url);
    qr.make();
    box.innerHTML = qr.createSvgTag({ cellSize: 4, margin: 0, scalable: true });
  } catch (e) {}
}

// ===== FAQ acordeón =====
document.querySelectorAll('.faq__item').forEach((item) => {
  const q = item.querySelector('.faq__q');
  const a = item.querySelector('.faq__a');
  q.addEventListener('click', () => {
    const open = item.classList.toggle('is-open');
    a.style.maxHeight = open ? a.scrollHeight + 'px' : '0';
  });
});

// ===== Contadores animados =====
const counters = document.querySelectorAll('[data-count]');
if (counters.length) {
  const cio = new IntersectionObserver((entries) => {
    entries.forEach((en) => {
      if (!en.isIntersecting) return;
      const el = en.target;
      const target = parseInt(el.getAttribute('data-count'), 10);
      let n = 0;
      const steps = 22;
      const tick = () => {
        n += Math.ceil(target / steps);
        if (n >= target) { el.textContent = target; }
        else { el.textContent = n; requestAnimationFrame(tick); }
      };
      tick();
      cio.unobserve(el);
    });
  }, { threshold: 0.5 });
  counters.forEach((c) => cio.observe(c));
}
