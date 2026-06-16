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
