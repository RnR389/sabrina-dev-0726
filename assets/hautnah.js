/* ==========================================================================
   KOSMETIKINSTITUT HAUTNAH — V4
   Bewegung: Parallaxe, Einblenden beim Scrollen, kompakter Kopfbereich.
   Bewusst schlank und ohne Bibliothek. Respektiert "Bewegung reduzieren".
   ========================================================================== */
(function () {
  'use strict';
  var calm = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* --- 1. Kopfbereich wird beim Scrollen kompakter ------------------------ */
  var head = document.querySelector('.site-head');

  /* --- 2. Parallaxe: Bild bewegt sich langsamer als die Seite ------------- */
  var layers = [].slice.call(document.querySelectorAll('[data-parallax]'));

  function frame() {
    var y = window.pageYOffset;
    if (head) head.classList.toggle('compact', y > 40);
    if (!calm) {
      for (var i = 0; i < layers.length; i++) {
        var el = layers[i];
        var box = el.parentElement.getBoundingClientRect();
        if (box.bottom < -200 || box.top > window.innerHeight + 200) continue;
        var speed = parseFloat(el.getAttribute('data-parallax')) || 0.18;
        var shift = (box.top - window.innerHeight / 2) * -speed;
        el.style.transform = 'translate3d(0,' + shift.toFixed(2) + 'px,0)';
      }
    }
    ticking = false;
  }

  var ticking = false;
  function onScroll() {
    if (!ticking) { ticking = true; window.requestAnimationFrame(frame); }
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', onScroll, { passive: true });
  frame();

  /* --- 3. Inhalte blenden beim Hereinscrollen sanft ein ------------------- */
  var targets = [].slice.call(document.querySelectorAll('[data-reveal]'));
  if (!targets.length) return;

  if (calm || !('IntersectionObserver' in window)) {
    targets.forEach(function (t) { t.classList.add('in'); });
    return;
  }

  /* Was beim Laden schon sichtbar ist, wird SOFORT gezeigt — ohne Einblenden.
     Sonst wirkt die Seite im ersten Moment leer. */
  targets = targets.filter(function (t) {
    if (t.getBoundingClientRect().top < window.innerHeight * 0.92) {
      t.style.transition = 'none';
      t.classList.add('in');
      requestAnimationFrame(function () {
        requestAnimationFrame(function () { t.style.transition = ''; });
      });
      return false;
    }
    return true;
  });
  if (!targets.length) return;

  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
    });
  }, { rootMargin: '0px 0px -12% 0px', threshold: 0.06 });
  targets.forEach(function (t) { io.observe(t); });

  /* --- 4. Mobiles Menü schließt nach Klick auf einen Link ----------------- */
  var toggle = document.getElementById('nav-toggle');
  if (toggle) {
    document.querySelectorAll('.site-nav a').forEach(function (a) {
      a.addEventListener('click', function () { toggle.checked = false; });
    });
  }
})();
