/* ==========================================================================
   KOSMETIKINSTITUT HAUTNAH — V4
   Bewegung: Parallaxe, Einblenden beim Scrollen, kompakter Kopfbereich.
   Bewusst schlank und ohne Bibliothek. Respektiert "Bewegung reduzieren".
   ========================================================================== */
(function () {
  'use strict';
  var calm = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ======================================================================
     0. EINWILLIGUNG FUER EXTERNE MEDIEN (V4.79)
     ----------------------------------------------------------------------
     Diese Seite setzt KEINE Werbe- oder Statistik-Cookies. Es gibt kein
     Tracking, keine Analyse, keine Google Fonts (die liegen lokal).
     Extern geladen wird ausschliesslich dreierlei, und zwar nur dort, wo es
     im Seiteninhalt steht:
        - OpenStreetMap  (Karte auf der Kontaktseite)
        - Google Maps    (Karte auf Zahlungsoptionen)
        - YouTube        (Video auf der Forma-Seite, ueber youtube-nocookie)

     Ohne Einwilligung wird keine dieser Verbindungen aufgebaut — der Bereich
     bleibt leer und zeigt stattdessen den Hinweis, dass eine Zustimmung
     noetig ist. Das ist keine Attrappe: die iframes werden erst im Moment
     der Zustimmung erzeugt, vorher existiert kein src und damit keine
     Anfrage nach draussen.

     Die Entscheidung selbst liegt in localStorage, nicht in einem Cookie.
     Das Speichern der Entscheidung ist nach § 25 Abs. 2 TDDDG zulaessig,
     weil es genau die Funktion ist, die der Nutzer angefordert hat.
     ====================================================================== */
  var SCHLUESSEL = 'hautnah-einwilligung';
  var STAND = 1;               /* hochzaehlen, wenn neue Dienste dazukommen */

  function lesen() {
    try {
      var roh = window.localStorage.getItem(SCHLUESSEL);
      if (!roh) return null;
      var d = JSON.parse(roh);
      if (!d || d.v !== STAND) return null;   /* alte Fassung -> neu fragen */
      return d;
    } catch (e) { return null; }   /* localStorage gesperrt: wie "nicht entschieden" */
  }

  function schreiben(erlaubt) {
    try {
      window.localStorage.setItem(SCHLUESSEL, JSON.stringify({
        v: STAND, externeMedien: !!erlaubt, stand: new Date().toISOString()
      }));
    } catch (e) { /* Privater Modus: Entscheidung gilt dann nur fuer diesen Besuch */ }
  }

  var entscheidung = lesen();
  var erlaubt = function () { return !!(entscheidung && entscheidung.externeMedien); };

  /* --- Gesperrte Bereiche: Platzhalter gegen Hinweis tauschen ------------ */
  var gesperrte = [];

  function bereichAufbauen(el) {
    var dienst = el.getAttribute('data-dienst') || 'einen externen Anbieter';
    var box = document.createElement('div');
    box.className = 'cb-block';
    box.innerHTML =
      '<span class="cb-block-lab">Zustimmung erforderlich</span>' +
      '<p>Dieser Inhalt wird von <strong>' + dienst + '</strong> geladen. Dabei wird Ihre ' +
      'IP-Adresse dorthin &uuml;bertragen. Solange Sie nicht zustimmen, bauen wir diese ' +
      'Verbindung nicht auf.</p>' +
      '<button type="button" class="cb-btn cb-btn-ja" data-cb-frei>Externe Medien erlauben</button>' +
      '<p class="cb-block-fuss">Sie k&ouml;nnen das jederzeit in der Fu&szlig;zeile unter ' +
      '&bdquo;Externe Medien&ldquo; wieder &auml;ndern.</p>';
    return box;
  }

  /* Schon geladene iframes werden hier gemerkt. Beim Widerruf muessen sie weg —
     sonst funkt eine einmal geladene Karte weiter, obwohl der Besucher die
     Einwilligung zurueckgezogen hat. Genau das war im ersten Anlauf der Fall. */
  var eingebettet = [];

  function bereicheAktualisieren() {
    if (!erlaubt()) {
      eingebettet.forEach(function (f) { if (f.parentNode) f.parentNode.removeChild(f); });
      eingebettet.length = 0;
    }
    gesperrte.forEach(function (g) {
      if (erlaubt()) {
        if (g.hinweis && g.hinweis.parentNode) g.hinweis.parentNode.removeChild(g.hinweis);
        g.el.hidden = false;
      } else {
        /* Frueher stand hier ein Umweg (erst false, dann true), weil hidden
           nicht griff. Die Ursache lag im CSS: .yt-start{display:block} schlug
           die Browserregel [hidden]{display:none}. Seit V4.110 steht dort
           [hidden]{display:none !important} — der Umweg ist damit erledigt. */
        g.el.hidden = true;
        if (!g.hinweis) g.hinweis = bereichAufbauen(g.el);
        if (!g.hinweis.parentNode) g.el.parentNode.insertBefore(g.hinweis, g.el);
      }
    });
  }

  /* Jeden Platzhalter, der zu einem externen Dienst fuehrt, hier anmelden. */
  [].slice.call(document.querySelectorAll('[data-map-load], .yt-start')).forEach(function (el) {
    if (!el.getAttribute('data-dienst')) {
      var quelle = el.getAttribute('data-map-src') || '';
      el.setAttribute('data-dienst',
        quelle.indexOf('openstreetmap') > -1 ? 'OpenStreetMap' :
        el.classList.contains('yt-start') ? 'YouTube (Google)' : 'Google Maps');
    }
    gesperrte.push({ el: el, hinweis: null });
  });

  function setzen(wert) {
    entscheidung = { v: STAND, externeMedien: !!wert };
    schreiben(wert);
    bereicheAktualisieren();
    bannerSchliessen();
  }

  /* --- Banner ------------------------------------------------------------
     Wird per JS eingehaengt, damit er ohne Aenderung an 24 HTML-Dateien auf
     jeder Seite erscheint. Beide Knoepfe sind gleich gross und gleich
     auffaellig — eine versteckte oder abgeschwaechte Ablehnung waere nach
     der Rechtsprechung keine wirksame Einwilligung. */
  var banner = null;

  function bannerSchliessen() {
    if (banner) { banner.classList.remove('offen');
      window.setTimeout(function () { if (banner && banner.parentNode) banner.parentNode.removeChild(banner); banner = null; }, 260); }
  }

  function bannerZeigen() {
    if (banner) return;
    banner = document.createElement('div');
    banner.className = 'cb';
    banner.setAttribute('role', 'dialog');
    banner.setAttribute('aria-labelledby', 'cb-titel');
    banner.innerHTML =
      '<div class="cb-inner">' +
        '<div class="cb-text">' +
          '<h2 id="cb-titel">Externe Inhalte</h2>' +
          '<p>Diese Seite verwendet <strong>keine Cookies zu Werbe- oder Statistikzwecken</strong> ' +
          'und bindet keine Schriften von fremden Servern ein. Nur an wenigen Stellen ' +
          'zeigen wir Inhalte, die von au&szlig;en kommen: die Karten von OpenStreetMap und ' +
          'Google Maps sowie ein Video von YouTube. Beim Laden wird Ihre IP-Adresse an ' +
          'den jeweiligen Anbieter &uuml;bertragen.</p>' +
          '<p class="cb-hinweis">Wenn Sie ablehnen, wird <strong>keine Verbindung</strong> zu ' +
          'diesen Anbietern aufgebaut. Die Seite bleibt vollst&auml;ndig nutzbar &ndash; nur ' +
          'Karte und Video bleiben leer. Sie k&ouml;nnen die Entscheidung jederzeit &auml;ndern.</p>' +
          '<p class="cb-links"><a href="datenschutz.html">Datenschutz</a>' +
          '<span>&middot;</span><a href="impressum.html">Impressum</a></p>' +
        '</div>' +
        '<div class="cb-btns">' +
          '<button type="button" class="cb-btn cb-btn-nein" data-cb="nein">Ablehnen</button>' +
          '<button type="button" class="cb-btn cb-btn-ja" data-cb="ja">Externe Medien erlauben</button>' +
        '</div>' +
      '</div>';
    document.body.appendChild(banner);
    /* Umbruch erzwingen und die Klasse direkt setzen. NICHT ueber
       requestAnimationFrame: das feuert in nicht sichtbaren Tabs gar nicht,
       der Banner blieb dann unsichtbar unten stehen. */
    void banner.offsetHeight;
    banner.classList.add('offen');
  }

  /* Ein Klick genuegt — egal ob im Banner, im gesperrten Bereich oder in der Fusszeile. */
  document.addEventListener('click', function (e) {
    var ja   = e.target.closest ? e.target.closest('[data-cb="ja"], [data-cb-frei]') : null;
    var nein = e.target.closest ? e.target.closest('[data-cb="nein"]') : null;
    var auf  = e.target.closest ? e.target.closest('[data-cb-oeffnen]') : null;
    if (ja)   { e.preventDefault(); setzen(true);  return; }
    if (nein) { e.preventDefault(); setzen(false); return; }
    if (auf)  { e.preventDefault(); bannerZeigen(); return; }
  });

  bereicheAktualisieren();
  if (!entscheidung) bannerZeigen();

  /* Damit andere Teile der Seite den Stand abfragen koennen. */
  window.hautnahEinwilligung = {
    erlaubt: erlaubt,
    oeffnen: bannerZeigen,
    /* Wer etwas Externes laedt, meldet es hier an, damit der Widerruf greift. */
    merkeEinbettung: function (rahmen, platzhalter) {
      eingebettet.push(rahmen);
      if (platzhalter) {
        var g = gesperrte.filter(function (x) { return x.el === platzhalter; })[0];
        if (g) g.rahmen = rahmen;
      }
    }
  };

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

  /* --- 1b. Mobiles Menü schließt nach Klick auf einen Link ----------------- */
  var toggle = document.getElementById('nav-toggle');
  if (toggle) {
    document.querySelectorAll('.site-nav a').forEach(function (a) {
      a.addEventListener('click', function () { toggle.checked = false; });
    });
  }

  /* --- 1c. WhatsApp-Fenster der Kontaktleiste ------------------------------ */
  var waPanel = document.querySelector('.wa-panel');
  var waBtn   = document.querySelector('[data-wa-open]');
  if (waPanel && waBtn) {
    var setWa = function (offen) {
      waPanel.classList.toggle('open', offen);
      waBtn.setAttribute('aria-expanded', offen ? 'true' : 'false');
    };
    waBtn.addEventListener('click', function (e) {
      e.stopPropagation();
      setWa(!waPanel.classList.contains('open'));
    });
    var waClose = document.querySelector('[data-wa-close]');
    if (waClose) waClose.addEventListener('click', function () { setWa(false); });
    document.addEventListener('click', function (e) {
      if (waPanel.classList.contains('open') && !waPanel.contains(e.target)) setWa(false);
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') setWa(false);
    });
  }


  /* --- 1d. Karte erst nach Klick laden (Datenschutz) ---------------------- */
  /* Die Kartenquelle steht seit V4.51 am Knopf (data-map-src), damit eine Seite
     OpenStreetMap laden kann und eine andere Google Maps. Ohne Angabe bleibt es
     bei Google — so wie auf der Seite Zahlungsoptionen. */
  [].slice.call(document.querySelectorAll('[data-map-load]')).forEach(function (mapBtn) {
    mapBtn.addEventListener('click', function () {
      var f = document.createElement('iframe');
      f.src = mapBtn.getAttribute('data-map-src') ||
              'https://www.google.com/maps?q=Hauptstra%C3%9Fe%203%2C%2079664%20Wehr&output=embed';
      f.setAttribute('loading', 'lazy');
      f.setAttribute('referrerpolicy', 'no-referrer');
      f.setAttribute('title', mapBtn.getAttribute('data-map-titel') ||
                              'Kosmetikinstitut Hautnah auf Google Maps');
      /* einfuegen statt ersetzen: nur so laesst sich die Karte beim Widerruf
         wieder entfernen und der Platzhalter zurueckholen */
      mapBtn.parentNode.insertBefore(f, mapBtn);
      mapBtn.hidden = true;
      window.hautnahEinwilligung.merkeEinbettung(f, mapBtn);
    });
  });


  /* --- 1g. YouTube-Video, erst nach Klick UND nur mit Einwilligung --------
     Stand vorher als eigenes Skript in forma.html und lief damit an der
     Einwilligungspruefung vorbei. Hier greift Abschnitt 0: ohne Zustimmung ist
     der Startknopf versteckt und an seiner Stelle steht der Hinweis. */
  [].slice.call(document.querySelectorAll('.yt')).forEach(function (box) {
    var btn = box.querySelector('.yt-start');
    if (!btn) return;
    btn.addEventListener('click', function () {
      var wrap = document.createElement('div');
      wrap.className = 'yt-frame';
      var f = document.createElement('iframe');
      f.src = 'https://www.youtube-nocookie.com/embed/' + box.getAttribute('data-yt') + '?autoplay=1&rel=0';
      f.title = 'Forma\u00ae Animation by InMode';
      f.allow = 'accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture';
      f.setAttribute('allowfullscreen', '');
      wrap.appendChild(f);
      btn.parentNode.insertBefore(wrap, btn);   /* einfuegen, nicht ersetzen */
      btn.hidden = true;
      window.hautnahEinwilligung.merkeEinbettung(wrap, btn);
    });
  });

  /* --- 1e. Kontaktleiste meldet sich beim Scrollen ------------------------ */
  var crail = document.querySelector('.crail');
  if (crail) {
    var crailTimer = null;
    window.addEventListener('scroll', function () {
      crail.classList.add('aktiv');
      if (crailTimer) clearTimeout(crailTimer);
      crailTimer = setTimeout(function () { crail.classList.remove('aktiv'); }, 1400);
    }, { passive: true });
  }

  /* --- 1f. WhatsApp nur anbieten, wenn die Rufnummer eine Mobilnummer ist --
     Eine Festnetznummer kann kein WhatsApp empfangen. Wer sie trotzdem als
     bevorzugten Weg auswaehlt, wartet auf eine Nachricht, die nie ankommt.

     Grundsatz: NUR sperren, wenn wir uns sicher sind. Erkennen wir die Nummer
     nicht (auslaendische Vorwahl, zu kurz, noch im Tippen), bleibt WhatsApp
     waehlbar — der Kunde kennt seine Nummer besser als wir. Wehr liegt an der
     Schweizer Grenze, deshalb sind CH und AT mit erfasst.                     */
  function rufnummerArt(roh) {
    var n = String(roh || '').replace(/[\s./()‐-―-]/g, '');
    if (!n) return 'leer';
    if (!/^\+?\d+$/.test(n)) return 'unklar';
    if (n.slice(0, 2) === '00') n = '+' + n.slice(2);
    if (n.charAt(0) !== '+') {
      if (n.charAt(0) !== '0') return 'unklar';   /* ohne Vorwahl nicht beurteilbar */

      /* Grenzfall Wehr: "079..." ohne Laenderkennung ist zweideutig — entweder
         eine Schweizer MOBILnummer (079 = CH-Mobilfunk) oder eine deutsche
         FESTNETZnummer aus genau dieser Ecke (Wehr ist 07762, Lörrach 07621).
         Unterscheidung ueber die Laenge: Schweizer Nummern haben national
         immer genau 10 Ziffern, die hiesigen Festnetznummern mehr.
         Bei 10 Ziffern also lieber nicht urteilen und WhatsApp offen lassen —
         faelschlich erlauben ist harmloser als faelschlich sperren. */
      if (/^07[4-9]/.test(n) && n.length <= 10) return 'unklar';

      n = '+49' + n.slice(1);                     /* sonst: deutsche Nummer */
    }

    var land, rest;
    if (n.indexOf('+49') === 0)      { land = 'DE'; rest = n.slice(3); }
    else if (n.indexOf('+41') === 0) { land = 'CH'; rest = n.slice(3); }
    else if (n.indexOf('+43') === 0) { land = 'AT'; rest = n.slice(3); }
    else return 'unklar';                         /* anderes Land -> nicht sperren */

    if (rest.charAt(0) === '0') rest = rest.slice(1);
    if (rest.length < 6) return 'leer';           /* noch im Tippen, nicht bewerten */

    /* DE 015x/016x/017x · CH 074-079 · AT alle 06xx */
    var mobil = (land === 'DE' && /^1[5-7]/.test(rest)) ||
                (land === 'CH' && /^7[4-9]/.test(rest)) ||
                (land === 'AT' && /^6/.test(rest));
    return mobil ? 'mobil' : 'festnetz';
  }

  var telFeld   = document.querySelector('[data-tel]');
  var wegFeld   = document.querySelector('[data-kontaktweg]');
  var wegHinweis= document.querySelector('[data-tel-hinweis]');

  if (telFeld && wegFeld) {
    var waOption = null;
    for (var o = 0; o < wegFeld.options.length; o++) {
      if (/whatsapp/i.test(wegFeld.options[o].text)) waOption = wegFeld.options[o];
    }

    var zeigeHinweis = function (text, art) {
      if (!wegHinweis) return;
      wegHinweis.textContent = text || '';
      wegHinweis.hidden = !text;
      wegHinweis.className = 'f-tel-hinweis' + (art ? ' ist-' + art : '');
    };

    var pruefeNummer = function () {
      if (!waOption) return;
      var art = rufnummerArt(telFeld.value);

      if (art === 'festnetz') {
        /* War WhatsApp schon gewaehlt, Auswahl zuruecksetzen — sonst bliebe ein
           gesperrter Wert stehen und wuerde mitgesendet. */
        if (wegFeld.value === waOption.value || wegFeld.selectedIndex === waOption.index) {
          wegFeld.selectedIndex = 0;
        }
        waOption.disabled = true;
        zeigeHinweis('Das sieht nach einer Festnetznummer aus — WhatsApp ist damit nicht möglich. Wir rufen Sie an.', 'festnetz');
      } else {
        waOption.disabled = false;
        if (art === 'mobil') zeigeHinweis('Mobilnummer erkannt — WhatsApp ist möglich.', 'mobil');
        else zeigeHinweis('');   /* leer oder unklar: nichts behaupten, nichts sperren */
      }
    };

    telFeld.addEventListener('input', pruefeNummer);
    telFeld.addEventListener('blur', pruefeNummer);
    telFeld.addEventListener('change', pruefeNummer);
    pruefeNummer();   /* auch bei vorausgefuellten Werten (Browser-Autofill) */
  }

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

})();
