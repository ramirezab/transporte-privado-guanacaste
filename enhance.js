// ===== Mejoras compartidas (ambas páginas) =====
(function () {
  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;

  // --- Barra de progreso de scroll ---
  const bar = document.createElement('div');
  bar.className = 'scrollbar';
  document.body.appendChild(bar);
  const updateBar = () => {
    const h = document.documentElement;
    const max = h.scrollHeight - h.clientHeight;
    bar.style.width = (max > 0 ? (h.scrollTop / max) * 100 : 0) + '%';
  };
  window.addEventListener('scroll', updateBar, { passive: true });
  window.addEventListener('resize', updateBar);
  updateBar();

  // --- Botón volver arriba ---
  const top = document.createElement('button');
  top.className = 'backtop';
  top.setAttribute('aria-label', 'Volver arriba');
  top.innerHTML = '↑';
  document.body.appendChild(top);
  top.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
  const toggleTop = () => top.classList.toggle('is-on', window.scrollY > 700);
  window.addEventListener('scroll', toggleTop, { passive: true });
  toggleTop();

  // --- Tilt 3D en tarjetas ---
  if (!reduce && matchMedia('(hover: hover) and (pointer: fine)').matches) {
    document.querySelectorAll('.dcard, .tothers__card, .vcard').forEach((el) => {
      el.style.transformStyle = 'preserve-3d';
      el.addEventListener('mousemove', (e) => {
        const r = el.getBoundingClientRect();
        const x = (e.clientX - r.left) / r.width - 0.5;
        const y = (e.clientY - r.top) / r.height - 0.5;
        el.style.transform = `perspective(800px) rotateX(${-y * 5}deg) rotateY(${x * 5}deg) translateY(-6px)`;
      });
      el.addEventListener('mouseleave', () => { el.style.transform = ''; });
    });
  }

  // --- PWA: registrar service worker (navegación siempre fresca) ---
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('sw.js').catch(() => {});
    });
  }
})();
