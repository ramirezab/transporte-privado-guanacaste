// ===== Página dinámica de tour =====
(function () {
  const TOURS = window.TOURS || {};
  const ORDER = window.TOUR_ORDER || Object.keys(TOURS);
  const WA = '50688015925';

  // Traducciones del "chrome" (elementos data-i18n estáticos)
  const CHROME = {
    'brand.sub': 'Private Transport',
    'nav.services': 'Services',
    'nav.vehicles': 'Vehicles',
    'nav.destinations': 'Destinations',
    'nav.book': 'Book',
    'tour.back': '← Back to destinations',
    'tour.cta': 'Book this tour on WhatsApp',
    'tour.about': 'About the destination',
    'tour.highlights': 'Highlights',
    'tour.gallery.kicker': 'Gallery',
    'tour.others': 'Other destinations',
    'tour.others.title': 'Keep exploring Costa Rica',
    'tour.cta.sub': 'Message Samuel Ramírez Ampié on WhatsApp with your date, number of passengers, and destination.',
    'footer.sub': 'Transfers and tours on Costa Rica’s Pacific coast',
    'footer.copy': 'Guanacaste Private Transport · Costa Rica.'
  };
  const ES = {};
  document.querySelectorAll('[data-i18n]').forEach((el) => { ES[el.getAttribute('data-i18n')] = el.innerHTML; });

  // Slug del tour
  const params = new URLSearchParams(location.search);
  const slug = params.get('t');
  if (!slug || !TOURS[slug]) { location.replace('index.html#destinos'); return; }
  const tour = TOURS[slug];

  let lang = (() => { try { return localStorage.getItem('lang'); } catch (e) { return null; } })();
  if (lang !== 'en' && lang !== 'es') lang = (navigator.language || '').toLowerCase().startsWith('en') ? 'en' : 'es';

  const $ = (id) => document.getElementById(id);
  const waLink = (name) => {
    const msg = lang === 'en'
      ? `Hi Samuel, I'd like to book the ${name} tour. Date: ___ | Passengers: ___`
      : `Hola Samuel, me gustaría reservar el tour a ${name}. Fecha: ___ | Pasajeros: ___`;
    return `https://wa.me/${WA}?text=${encodeURIComponent(msg)}`;
  };

  let lightboxIndex = 0;

  function render() {
    const name = tour.name[lang];
    document.documentElement.lang = lang;
    document.title = `${name} · Transporte Privado Guanacaste`;

    // Chrome estático
    const dict = lang === 'en' ? CHROME : ES;
    document.querySelectorAll('[data-i18n]').forEach((el) => {
      const k = el.getAttribute('data-i18n');
      if (dict[k] != null) el.innerHTML = dict[k];
    });
    document.querySelectorAll('.lang-toggle button').forEach((b) => {
      const active = b.getAttribute('data-lang') === lang;
      b.classList.toggle('is-active', active);
      b.setAttribute('aria-pressed', String(active));
    });

    // Hero
    $('theroBg').style.backgroundImage = `url('${tour.hero}')`;
    $('tRegion').textContent = tour.region[lang];
    $('tTitle').textContent = name;
    $('tTagline').textContent = tour.tagline[lang];
    $('tChips').innerHTML = `<span>📍 ${tour.region[lang]}</span><span>⏱️ ${tour.duration[lang]}</span><span>📸 ${tour.images.length}</span>`;

    // Descripción + nota
    $('tDesc').textContent = tour.desc[lang];
    if (tour.note) { $('tNote').hidden = false; $('tNote').textContent = tour.note[lang]; }

    // Highlights
    $('tHighlights').innerHTML = tour.highlights[lang].map((h) => `<li><span>✓</span> ${h}</li>`).join('');

    // Galería
    $('tGalTitle').textContent = lang === 'en' ? `Photos of ${name}` : `Fotos de ${name}`;
    $('tGallery').innerHTML = tour.images.map((im, i) => `
      <figure class="tgallery__item${i === 0 ? ' tgallery__item--lg' : ''}" data-i="${i}" tabindex="0" role="button" aria-label="${im.cap[lang]}">
        <img src="${im.src}" alt="${im.cap[lang]}" loading="lazy" />
        <figcaption>${im.cap[lang]}</figcaption>
        <span class="tgallery__zoom" aria-hidden="true">⤢</span>
      </figure>`).join('');
    $('tGallery').querySelectorAll('.tgallery__item').forEach((el) => {
      const open = () => openLightbox(parseInt(el.dataset.i, 10));
      el.addEventListener('click', open);
      el.addEventListener('keydown', (e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); open(); } });
    });

    // Miniaturas del lightbox
    $('lbThumbs').innerHTML = tour.images.map((im, i) => `<img src="${im.src}" alt="${im.cap[lang]}" data-i="${i}" loading="lazy" />`).join('');
    $('lbThumbs').querySelectorAll('img').forEach((t) => t.addEventListener('click', () => { lightboxIndex = parseInt(t.dataset.i, 10); updateLightbox(); }));
    $('lbThumbs').style.display = tour.images.length > 1 ? '' : 'none';

    // CTAs WhatsApp
    const link = waLink(name);
    $('tHeroCta').href = link;
    $('tBottomCta').href = link;
    $('tCtaTitle').textContent = lang === 'en' ? `Ready to visit ${name}?` : `¿Listo para conocer ${name}?`;

    // Otros destinos
    $('tOthers').innerHTML = ORDER.filter((s) => s !== slug).map((s) => {
      const t = TOURS[s];
      return `<a class="tothers__card" href="tour.html?t=${s}">
        <img src="${t.hero}" alt="${t.name[lang]}" loading="lazy" />
        <span class="tothers__label">${t.name[lang]} <em>→</em></span>
      </a>`;
    }).join('');

    // Si el lightbox está abierto, refrescar texto
    if (document.getElementById('lightbox').classList.contains('is-open')) updateLightbox();
  }

  // ===== Lightbox =====
  const lb = $('lightbox');
  function openLightbox(i) {
    lightboxIndex = i;
    updateLightbox();
    lb.classList.add('is-open');
    lb.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }
  function closeLightbox() {
    lb.classList.remove('is-open');
    lb.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
    stopSlideshow();
    resetZoom();
  }
  function step(d) {
    lightboxIndex = (lightboxIndex + d + tour.images.length) % tour.images.length;
    updateLightbox();
  }
  function updateLightbox() {
    const im = tour.images[lightboxIndex];
    const img = $('lbImg');
    resetZoom();
    img.classList.remove('is-in');
    img.src = im.src;
    img.alt = im.cap[lang];
    $('lbCap').textContent = im.cap[lang];
    $('lbCounter').textContent = `${lightboxIndex + 1} / ${tour.images.length}`;
    requestAnimationFrame(() => requestAnimationFrame(() => img.classList.add('is-in')));
    const multi = tour.images.length > 1;
    $('lbPrev').style.display = multi ? '' : 'none';
    $('lbNext').style.display = multi ? '' : 'none';
    $('lbPlay').style.display = multi ? '' : 'none';
    $('lbThumbs').querySelectorAll('img').forEach((t, idx) => t.classList.toggle('is-active', idx === lightboxIndex));
  }

  // Zoom + arrastre para mover
  const lbImg = $('lbImg');
  let zoomed = false, panX = 0, panY = 0, dragging = false, sx = 0, sy = 0;
  function applyZoom() { lbImg.style.transform = zoomed ? `scale(2) translate(${panX}px, ${panY}px)` : ''; }
  function resetZoom() { zoomed = false; panX = panY = 0; dragging = false; lbImg.classList.remove('is-zoom'); $('lbZoom').classList.remove('is-on'); lbImg.style.transform = ''; }
  function toggleZoom() { zoomed = !zoomed; if (!zoomed) { panX = panY = 0; } lbImg.classList.toggle('is-zoom', zoomed); $('lbZoom').classList.toggle('is-on', zoomed); applyZoom(); }
  $('lbZoom').addEventListener('click', (e) => { e.stopPropagation(); toggleZoom(); });
  lbImg.addEventListener('click', (e) => { e.stopPropagation(); toggleZoom(); });
  lbImg.addEventListener('mousedown', (e) => { if (!zoomed) return; dragging = true; sx = e.clientX - panX; sy = e.clientY - panY; e.preventDefault(); });
  window.addEventListener('mousemove', (e) => { if (!dragging) return; panX = e.clientX - sx; panY = e.clientY - sy; applyZoom(); });
  window.addEventListener('mouseup', () => { dragging = false; });

  // Slideshow
  let slideTimer = null;
  function stopSlideshow() { if (slideTimer) { clearInterval(slideTimer); slideTimer = null; $('lbPlay').textContent = '▶'; $('lbPlay').classList.remove('is-on'); } }
  function togglePlay() {
    if (slideTimer) { stopSlideshow(); }
    else { slideTimer = setInterval(() => step(1), 2800); $('lbPlay').textContent = '⏸'; $('lbPlay').classList.add('is-on'); }
  }
  $('lbPlay').addEventListener('click', togglePlay);
  $('lbClose').addEventListener('click', closeLightbox);
  $('lbPrev').addEventListener('click', () => step(-1));
  $('lbNext').addEventListener('click', () => step(1));
  lb.addEventListener('click', (e) => { if (e.target === lb) closeLightbox(); });
  document.addEventListener('keydown', (e) => {
    if (!lb.classList.contains('is-open')) return;
    if (e.key === 'Escape') closeLightbox();
    else if (e.key === 'ArrowLeft') step(-1);
    else if (e.key === 'ArrowRight') step(1);
  });
  // Swipe en móvil
  let touchX = null;
  lb.addEventListener('touchstart', (e) => { touchX = e.changedTouches[0].clientX; }, { passive: true });
  lb.addEventListener('touchend', (e) => {
    if (touchX === null) return;
    const dx = e.changedTouches[0].clientX - touchX;
    if (Math.abs(dx) > 50) step(dx < 0 ? 1 : -1);
    touchX = null;
  }, { passive: true });

  // ===== Toggle idioma =====
  document.querySelectorAll('.lang-toggle button').forEach((b) => {
    b.addEventListener('click', () => {
      lang = b.getAttribute('data-lang');
      try { localStorage.setItem('lang', lang); } catch (e) {}
      render();
    });
  });

  // ===== Menú móvil =====
  const toggle = document.querySelector('.nav__toggle');
  const links = document.querySelector('.nav__links');
  if (toggle && links) {
    toggle.addEventListener('click', () => {
      const open = links.classList.toggle('is-open');
      toggle.setAttribute('aria-expanded', String(open));
    });
  }

  // ===== Parallax del hero + año =====
  const bg = $('theroBg');
  window.addEventListener('scroll', () => {
    const y = window.scrollY;
    if (y < window.innerHeight) bg.style.transform = `translateY(${y * 0.35}px) scale(1.08)`;
  }, { passive: true });
  $('year').textContent = new Date().getFullYear();

  render();

  // Reveal al hacer scroll
  const io = new IntersectionObserver((entries) => {
    entries.forEach((en) => { if (en.isIntersecting) { en.target.classList.add('is-visible'); io.unobserve(en.target); } });
  }, { threshold: 0.12 });
  document.querySelectorAll('.tdetail__about, .tdetail__highlights, .tgallery__item, .tothers__card, .tcta__inner').forEach((el) => {
    el.setAttribute('data-reveal', ''); io.observe(el);
  });
})();
