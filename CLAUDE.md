# Kosmetikinstitut Hautnah — Website-Projekt

**Status:** Aktuell V3 („Sabrina im Zentrum"). Wartet auf Feedback von Sabrina, dann V3.1 oder V4.

Dieses Dokument ist deine vollständige Briefing-Grundlage. Lies es zuerst, bevor du irgendwas an diesem Projekt machst. Hier steckt alles, was bisher in stundenlanger Vorarbeit geklärt wurde — überspring es nicht, sonst wiederholst du Fehler, die wir schon einmal gemacht haben.

---

## Wer arbeitet hier mit wem

- **René** (das bin ich, der Projektmanager / Designer): Webdesigner aus Deutschland. Spreche direkt mit dir. Übergebe Sabrinas Wünsche und Antworten.
- **Sabrina Herosé** (die Kundin): Inhaberin des Kosmetikinstituts. Direkt, fordernd, hilfsbereit. Trifft die finalen Entscheidungen. Spricht *nicht* direkt mit dir — alles läuft über mich.
- **Du** (Claude Code): bist der ausführende Entwickler. Aber Achtung: Bei diesem Projekt **darfst du nicht einfach drauflos coden**. Lies die Sektion „Arbeitsweise" weiter unten.

---

## Arbeitsweise — WICHTIG

Dieses Projekt funktioniert *nicht* nach dem üblichen „User stellt Aufgabe → Du erledigst sie" Schema. Es gilt:

1. **Erst klären, dann implementieren.** Wenn ich dir eine Anweisung gebe, die unklar ist oder Annahmen braucht, frag nach. Bau nicht Sachen, die du erst rechtfertigen müsstest.

2. **Niemals selbst eine neue Version starten ohne explizite Freigabe.** Sabrina und ich entscheiden, wann eine neue Version (V3.1, V4 usw.) gestartet wird. Du machst Änderungen *innerhalb* der aktuellen Version, bis du das OK bekommst, eine neue zu beginnen.

3. **Pflege `VERSIONS.md`.** Jede neue Version trägst du dort nach (siehe Konvention im Dokument selbst). Bei jeder Iteration: Codename, Datei, was geändert wurde, welches Feedback dazu kam.

4. **Nicht überimplementieren.** Wenn ich sage „mach den Header dunkler", dann mach den Header dunkler. Nicht „und nebenbei habe ich auch noch die Navigation umstrukturiert und die Behandlungs-Kacheln neu sortiert".

5. **Frag bei Designentscheidungen lieber einmal zu viel als einmal zu wenig.** Wir haben in zwei Anläufen (V1, V2) gemerkt, dass falsche Annahmen über Sabrinas Geschmack viel Zeit kosten.

6. **Dokumentiere deine Entscheidungen.** Wenn du eine Designentscheidung triffst (z.B. „ich habe die Schrift hier von Outfit auf 600er Weight gesetzt, weil…"), schreib es in einen Kommentar im Code.

---

## Sabrina — die Person, das ist die Marke

Diese Punkte stammen aus stundenlangen Klärungsgesprächen. **Verinnerlichen, nicht überschreiben.**

### Persönlichkeit
- **Direkt, fordernd, aber nicht abweisend.** Sie sagt klar, wenn etwas nicht passt. Sie will Menschen anziehen, nicht aussortieren.
- **Hilfsbereit, Helfersyndrom.** Sie will Probleme lösen.
- **Warm-zugewandt mit Anspruch.** Auf den Fotos lächelt sie offen — sie ist keine kühle Editorial-Figur. Aber auch nicht „Wellness-Tante". Eher: kompetente Vertrauensperson, wie eine Ärztin.

### Selbstbild
- *„Ich arbeite ganzheitlich wie eine Ärztin."*
- *„Ich bin persönlich die Marke."*
- *„Ich will professionell und distanziert sein, aber auf dem Land ist es teilweise warm-zugewandt. Eine Mischung."*

### Markenwelt, an der sie sich orientiert
- **Michael Kors, Louis Vuitton** — Statussymbol, sichtbarer Luxus, aber nicht unerreichbar.
- **Nicht** Aesop, Augustinus Bader, Le Labo, Susanne Kaufmann — diese „leise edle" Welt ist nicht ihre. Sie kennt diese Marken nicht.
- **Materialwelt zu Hause:** dunkles Holz, naturbetont. Im Studio: helle Naturstein-Wand, Olivenzweige, modern-praktische Geräte.

### Was sie abschreckt
- Baukasten-Look („sieht nach Wix selbstgemacht aus")
- Niedrige Preise / Billiges Wirken
- Chaos, Unruhe auf der Seite
- KI-Standard / generisches Premium-Mockup

### Zielkunde („Der Hai")
- Frau, 40+
- Vertraut der Expertin, hinterfragt nicht ständig
- Bucht, was Sabrina empfiehlt
- Kauft kompromisslos, ohne zu feilschen
- Hat Geld und ist bereit es zu investieren
- Wertschätzt Sabrina als Expertin
- Reagiert auf Zahlen, Daten, Fakten

### Ton der Seite
- **„Sie"-Form**, immer
- **Mischung distanziert-professionell + warm-zugewandt** (siehe Selbstbild)
- **Direkt, aber nicht aggressiv-fordernd.** Beispiel: ✅ „Echte Hautveränderung entsteht in der Zusammenarbeit, nicht im Termin." — ❌ „Ich arbeite nur mit Menschen, die wirklich verändern wollen, nicht mit denen, die sich verwöhnen lassen wollen." (zu fordernd, schreckt ab)

---

## Was bisher festgesetzt ist (NICHT mehr verhandeln)

### Markenfarben (extrahiert aus Logo und alter Seite)
```css
--paper:        #FAF6EF;  /* Haupthintergrund — heller als alte Seite */
--creme:        #E9E3DA;  /* Sekundärer Hintergrund */
--sand:         #DFD7CD;  /* Akzentflächen */
--taupe:        #88807B;  /* Logo-Hauptfarbe, Sabrinas Arbeitskleidung */
--taupe-dark:   #5A524C;  /* Akzent, Hover */
--gold:         #DCBD80;  /* Logo-Akzentlinie, dezente Highlights */
--gold-deep:    #A8884E;  /* Aktive CTAs, Eyebrows */
--ink:          #1C1C1C;  /* Buttons, dunkle Sections, Text */
--stein:        #95928E;  /* alternative Footer-Variante */
--green-soft:   #6B7A5F;  /* sehr sparsamer Naturakzent — wirklich sparsam! */
```

### Typografie
- **Display:** `Fraunces` (Google Fonts) — Variable-Serif, modern-warm. Nutzen mit `font-variation-settings: "opsz" 144, "SOFT" 50;` für Headlines (oder `SOFT 100` für weichere Variante).
- **Body:** `Outfit` (Google Fonts) — moderner Sans, freundlich aber strukturiert.
- **NICHT verwenden:** Cormorant Garamond, Inter, Manrope (sind die KI-Standard-Kombo, hatten wir in V1 und es war zu generisch).

### Logo
- `assets/logo.png` — Taupe (#88807B) mit Gold-Akzentlinie (#DCBD80)
- Stilisierte Zwillingsköpfe, „KOSMETIKINSTITUT HAUTNAH", „SABRINA HEROSÉ"

### Navigation

> **Update 2026-07-11 (René, gilt ab V3.10):**
> 1. **Ästhetische Konzepte** (Link auf Übersichtsseite mit den 10 Kacheln — **kein Dropdown mehr**)
> 2. **Haarkonzept** · 3. **Über uns** (Sabrina + Bianka, von der Startseite hierher umgezogen) · 4. **Gutscheine** · 5. **Zahlungsoptionen** · 6. **Aktuelles** · 7. **Kontakt**
> - **Shop vorerst entfernt** (keine Produkte/Bücher aktuell). Alte Struktur „Shop ▾ (Produkte / Gutscheine / Bücher)" bleibt fürs spätere Reaktivieren im Kopf/geparkt.

*Ursprüngliche Struktur (historisch):*
1. **Shop** ▾ (Dropdown: Produkte / Gutscheine / Bücher)
2. **Ästhetische Konzepte** ▾ (10 Behandlungen — siehe Liste unten)
3. **Haarkonzept**
4. **Über uns**
5. **Aktuelles**
6. **Kontakt**
- **CTA-Button:** „Zusammenarbeit anfragen" (nicht „Termin buchen" o.ä.)
- **Kein** „Startseite"-Menüpunkt (Logo führt dorthin)
- **Kein** eigener FAQ-Menüpunkt (siehe FAQ-System)

### Behandlungen (10 — finale Liste)
1. **Crystal Peel** — Mikrodermabrasion
2. **Pharma** — eigene Behandlung, Text kommt noch
3. **Chemical Peeling** — Hauterneuerung
4. **Shape Beckenboden** — EMShape X für Beckenboden
5. **Hydra Facial** — Tiefenpflege
6. **Hydra Lift** — Feuchtigkeitslift
7. **EMS Shape** — Körperkonturierung
8. **One Take** (= ONETEC) — Hochfrequenz
9. **FORMA** — Radiofrequenz-Lifting
10. **Skin Needling** — Medical Beauty Spezial Mikroneedling

**Nicht mehr im Angebot (raus):** Green Peel, BioRePeel, Fruchtsäure, Zahnbleaching.

### FAQ-System
- **Akkordeon-Format** (Klick öffnet, erneuter Klick schließt)
- Auf **jeder Behandlungs-Unterseite** unten: behandlungsspezifische FAQs
- Auf der **„Über uns"-Seite** unten: allgemeine FAQs (Zahlung, Standort, Ablauf, Terminabsagen)
- **Kein** eigener FAQ-Menüpunkt

### Headline-Statements (final)
- **Hero:** *„Echte Hautveränderung entsteht in der Zusammenarbeit, nicht im Termin."*
- **Mein Ansatz / Über mich:** *„Sie buchen nicht nur einen Termin. Sie buchen eine Hautpflege-Expertin."*
- **Hauptzitat (Coco Chanel):** *„Die Natur gibt dir das Gesicht, das du mit 20 hast. Es liegt an dir das Gesicht zu bestimmen, das du mit 50 oder älter hast."*
- **Kennenlernkonzept:** „Check & Start" (verpflichtender Ersttermin)
- **CTA-Label:** „Zusammenarbeit anfragen"

### Kontaktdaten
- Adresse: Hauptstraße 3, 79664 Wehr
- Telefon & WhatsApp: +49 (0) 7762 / 80 56 69
- Web: www.hautnah-wehr.de
- Geschäftszeiten: Mo, Di, Mi, Fr · 10–18 Uhr
- Aufpreise: ab 19:30 Uhr +50 %, Sonn-/Feiertag +80 %
- 24h-Stornoregel

---

## Lessons Learned aus V1 und V2 — wiederhole diese Fehler NICHT

### V1 — „Generic Premium" (verworfen)
**Falsch gemacht:** Cormorant Garamond + Manrope + cremiger Hintergrund + dunkle Buttons + 3er-Kachelraster mit Gold-Hover. → Sieht aus wie jedes KI-Premium-Beauty-Mockup der letzten 18 Monate.
**Lesson:** „Sicher" und „premium" ist nicht genug. Es muss erkennbar *zu Sabrina* gehören.

### V2 — „Editorial Magazine" (verworfen, außer Menübereich)
**Falsch gemacht:** Bodoni Moda, asymmetrische Magazin-Layouts, „Kolophon"-Footer, römische Zahlen, Drop Caps. → Spiegelte *meinen* Geschmack, nicht Sabrinas. Sie ist nicht Vogue, sie ist warm-zugewandte Expertin.
**Lesson:** Geschmack ohne Briefing ist Blindflug. Erst die Person verstehen, dann gestalten.

**Aus V2 übernommen:** Der Masthead-Bereich (großer Logo-Block mit kleinen Eyebrows links/rechts) — der gefiel ausdrücklich.

### Tonalitäts-Lesson
Anfangs probierten wir Headlines wie *„Ich arbeite nur mit Menschen, die wirklich verändern wollen."* — von Sabrina als „zu fordernd, schreckt ab" abgelehnt. Die Direktheit muss **einladen**, nicht **aussortieren**.

---

## Aktueller Stand — V3 („Sabrina im Zentrum")

Datei: `current/index.html`

### Was funktioniert (laut Sabrina)
- Layout gefällt grundsätzlich
- Bildauswahl passt (Sabrina prominent vorne)
- Tonalität stimmt

### Was wir wissen, was noch kommt
- **Studio-Fotos ohne Sabrina drauf** (z.B. leerer Behandlungsraum, Steinwand pur) — kommen später, bisher Platzhalter.
- **Foto und Text von Bianca** — kommen später. Aktuell als gelb hinterlegter Platzhalter-Hinweis markiert.
- **Echte Behandlungsfotos** für die Kacheln — kommen später. Aktuell Platzhalter mit Verlauf und Bildtitel.
- **Pharma-Behandlung:** Text steht noch aus.
- **Inhalte der Detailseiten** (Über uns, Behandlungs-Unterseiten, Haarkonzept, Aktuelles, Kontakt, Shop): noch nicht aufgebaut. Aktuell nur Startseite.

### Layout-Struktur V3 (Startseite)
1. Topbar (Anthrazit, Kontaktzeile)
2. Masthead (Logo zentriert groß, Eyebrows links/rechts)
3. Navigation (zentriert unter dem Logo)
4. Hero (Headline links, Sabrina-Foto rechts, Trust-Zahlen drunter)
5. Trust-Bar (4 Säulen)
6. Mein Ansatz (3 Werte mit Nummerierung)
7. Behandlungen (10 Kacheln, 3er-Raster)
8. Story / Über mich (Sabrina-Foto links, Vita + Credentials rechts)
9. Bianca (Platzhalter mit Hinweis)
10. Check & Start (dunkler Akzent mit Behandlungsfoto + Gold-CTA)
11. Coco-Zitat
12. Footer (Anthrazit, 4 Spalten)

---

## Versions-Konvention

- **V1, V2, V3 …** = komplette Neuausrichtung der Designsprache
- **V3.1, V3.2 …** = Anpassungen innerhalb der V3-Designsprache
- Jede Version bekommt einen Codenamen
- Bei jeder neuen Version trägst du in `VERSIONS.md` nach:
  - Codename
  - Datei-Name
  - Status (aktuell / verworfen / Feedback ausstehend)
  - Was geändert wurde gegenüber Vorversion
  - Welches Feedback dazu kam

---

## Projekt-Struktur

```
hautnah-website/
├── CLAUDE.md                 ← Diese Datei. Lies sie zuerst.
├── README.md                 ← Kurzübersicht
├── VERSIONS.md               ← Versions-Historie (pflegen!)
├── BRAND.md                  ← Markenrichtlinien im Detail
├── CONTENT.md                ← Alle Texte/Inhalte zentral
├── current/
│   └── index.html            ← Aktueller Stand (V3)
├── assets/
│   ├── logo.png              ← Logo
│   ├── hero.jpg              ← Sabrina vor Steinwand (Hero)
│   ├── story.jpg             ← Sabrina mit Backsteinhintergrund (Story)
│   ├── shop.jpg              ← Sabrina mit Pflanzen + Produktregal
│   ├── beratung.jpg          ← Sabrina mit Kräutertee
│   └── behandlung.jpg        ← EMS-Behandlung
├── content/
│   ├── behandlungen/         ← Texte und FAQs pro Behandlung
│   └── faqs/                 ← Allgemeine FAQs (für Über uns-Seite)
└── archive/
    ├── hautnah_mockup_v1.html  ← V1 (verworfen, generic)
    ├── hautnah_mockup_v2.html  ← V2 (verworfen, editorial)
    └── hautnah_mockup_v3.html  ← V3 (Stand bei Übergabe an Claude Code)
```

---

## Was du als erstes machst, wenn du dieses Projekt öffnest

1. Lies diese `CLAUDE.md` **vollständig**.
2. Lies `VERSIONS.md` für den Versions-Kontext.
3. Lies `BRAND.md` für die Detail-Markenrichtlinien.
4. Schau dir `current/index.html` an — das ist der Stand.
5. **Frag mich**, was als nächstes ansteht. Starte nicht selbst irgendwas.

---

## Technisches

- **Aktuell:** Eine einzelne `index.html` mit eingebettetem CSS, ohne Build-Tools, ohne JS-Framework. Bewusst einfach gehalten.
- **Bilder:** als separate Dateien in `assets/`, referenziert mit relativen Pfaden.
- **Fonts:** über Google Fonts CDN geladen.
- **Spätere Plattform-Entscheidung:** noch offen. WordPress, statisches HTML, oder anderes — wird später entschieden, wenn das Design steht. Erstmal sauberes HTML/CSS, von dem aus migriert werden kann.
- **Mehrere Seiten:** Aktuell nur Startseite. Behandlungs-Unterseiten, Über uns, Haarkonzept, Aktuelles, Kontakt, Shop folgen noch.

---

*Diese Datei ist die Single Source of Truth. Wenn etwas hier nicht steht — frag. Wenn etwas hier steht und davon abweicht — folge dieser Datei, nicht der Abweichung.*
