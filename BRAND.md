# Markenrichtlinien — Kosmetikinstitut Hautnah

> **Update 2026-06-28 (Vorgaben Sabrina, gelten ab V3.6 und ersetzen Abweichendes unten):**
> - **Kein Schwarz.** Statt `#1C1C1C` wird ein warmes **Espresso-Braun `#3A322C`** verwendet (Fließtext `#3E382F`, Linien/Schatten `rgba(58,50,44,…)`).
> - **Nur eine Schrift: Outfit.** Fraunces wurde entfernt (zu verspielt). Titel über Größe/Gewicht/Letter-Spacing, keine Kursiven. Max. zwei Familien, modern, nicht verspielt, barrierefrei.
>
> **Update 2026-07-11 (Vorgaben Sabrina, gelten ab V3.9):**
> - **Kein Gold — nirgends.** Studio-Farbwelt ist **Taupe + Silber**: `--taupe: #8A7F77` (vorläufig, finaler Ton folgt), `--accent: #6F655D` (Akzente auf hell), `--silver: #C9C9CE` (Akzente auf dunkel). Ausnahme: Goldlinie im Logo (Markenbestandteil).
> - **Keine Nummerierungen** (keine römischen Zahlen, keine 01/02-Zähler).
> - **Kein KI-/Baukasten-Look:** keine Eyebrow-Balken, keine „→"-Pfeile in Buttons, ruhige Hover.
> - **„Meisterbetrieb"** als Siegel (Doppelrahmen) im Header; **„Erstes 5-Sterne-Fachinstitut · Landkreis Waldshut"** prominent (Topbar sitewide + ★★★★★-Badge im Hero).
> - Header-CTA als gefülltes Kästchen. Outfit-Gewichte reduziert auf 300–600.


## Farben

### Hauptpalette (extrahiert aus Logo + alter Seite)

| Name | HEX | RGB | Verwendung |
|---|---|---|---|
| **Paper** | `#FAF6EF` | rgb(250, 246, 239) | Haupthintergrund — heller als alte Seite |
| **Crème** | `#E9E3DA` | rgb(233, 227, 218) | Sekundärer Hintergrund, Trust-Bar |
| **Sand** | `#DFD7CD` | rgb(223, 215, 205) | Akzentflächen |
| **Taupe** | `#88807B` | rgb(136, 128, 123) | Logo-Hauptfarbe, Sabrinas Kasack |
| **Taupe dunkel** | `#5A524C` | rgb(90, 82, 76) | Hover-Akzent |
| **Gold** | `#DCBD80` | rgb(220, 189, 128) | Logo-Akzentlinie, dezente Highlights |
| **Gold tief** | `#A8884E` | rgb(168, 136, 78) | Aktive CTAs, Eyebrows |
| **Anthrazit** | `#1C1C1C` | rgb(28, 28, 28) | Buttons, dunkle Sections, Haupttext |
| **Ink soft** | `#2E2A26` | rgb(46, 42, 38) | Fließtext (weicher als reines Schwarz) |
| **Stein** | `#95928E` | rgb(149, 146, 142) | Alternative Footer-Variante |
| **Grün soft** | `#6B7A5F` | rgb(107, 122, 95) | Sparsamer Naturakzent — sehr sparsam einsetzen |

### Linien-Farben
```css
--line:         rgba(28, 28, 28, 0.12);  /* Standardlinien */
--line-strong:  rgba(28, 28, 28, 0.5);   /* Akzentuierte Linien */
```

### Farb-Charakter
Die Palette ist **warm, neutral, erdig** — keine Pastelltöne, keine kühlen Blautöne, kein Pink, kein Bordeaux. Sie spiegelt die natürlichen Materialien des Studios (Steinwand, Olivenzweige, helle Wände, dunkles Holz).

---

## Typografie

### Schriften (Google Fonts)

**Display: Fraunces**
```html
<link href="https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght,SOFT@0,9..144,300..700,0..100;1,9..144,300..600,0..100&display=swap" rel="stylesheet">
```

- Variable Font mit Achsen für Optical Size (opsz) und Softness (SOFT)
- Headlines: `font-variation-settings: "opsz" 144, "SOFT" 50;` (etwas crisper)
- Italic-Akzente: `font-variation-settings: "opsz" 144, "SOFT" 100;` (weicher)
- Weight: 300–400 für Headlines, nicht zu fett

**Body: Outfit**
```html
<link href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700&display=swap" rel="stylesheet">
```

- Moderner geometrischer Sans
- Weights: 400 (Body), 500 (UI-Elemente), 600 (Eyebrows, Buttons)
- Letter-Spacing für Eyebrows/UI: meist `2.5px` bis `4px` mit `text-transform: uppercase`

### Schriften, die NICHT verwendet werden
- **Cormorant Garamond** — KI-Standard, wirkt generisch
- **Inter, Manrope** — KI-Standard, ohne Charakter
- **Bodoni Moda** — wurde in V2 verworfen (zu Vogue-distanziert)
- **Playfair Display** — überstrapaziert

### Typo-Hierarchie

| Element | Schrift | Größe | Weight | Letter-Spacing |
|---|---|---|---|---|
| Hero H1 | Fraunces | `clamp(44px, 4.5vw, 68px)` | 300 | -1.5px |
| Section H2 | Fraunces | `clamp(36px, 4vw, 56px)` | 300 | -0.8px |
| Treatment-Name | Fraunces | 26px | 400 | -0.3px |
| Body | Outfit | 15-16px | 400 | normal |
| Eyebrow | Outfit | 10.5px | 600 | 4px, uppercase |
| Button | Outfit | 11px | 600 | 3px, uppercase |
| Tag | Outfit | 9.5px | 500 | 2px, uppercase |

---

## Logo

- **Datei:** `assets/logo.png`
- **Farben:** Taupe (#88807B) mit Gold-Akzentlinie (#DCBD80)
- **Symbol:** stilisierte Zwillingsköpfe mit floralen Elementen darüber
- **Wortmarke:** "KOSMETIKINSTITUT HAUTNAH" + "SABRINA HEROSÉ"
- **Verwendung:** Im Masthead-Bereich der Seite. Der zentrierte Großschrift-Logo-Block ist eines der Elemente, das Sabrina ausdrücklich gefällt.

---

## Bildwelt

### Vorhandene Sabrina-Fotos

| Datei | Beschreibung | Empfohlene Verwendung |
|---|---|---|
| `hero.jpg` | Sabrina vor heller Naturstein-Wand, lächelnd, frontal | Hero-Bereich |
| `story.jpg` | Sabrina mit Backstein-Hintergrund, Halbportrait | Über mich / Story-Section |
| `shop.jpg` | Sabrina im Studio mit Verkaufsregal und Pflanzen | Shop-Teaser, Produktberatung |
| `beratung.jpg` | Sabrina mit Kunde, hält Kräutertee-Produkt | Beratungs-Section, Empfehlung |
| `behandlung.jpg` | EMS-Behandlung im Behandlungsraum | „Check & Start"-Section, Behandlungs-Vorschau |

### Charakter der Bildwelt
- **Hell, freundlich, einladend** — keine dunklen oder klinischen Stockfotos
- **Authentisch** — echte Studio-Atmosphäre, keine generischen Hände-im-Gesicht-Bilder
- **Sabrina lächelt** — ihre Wärme ist ein zentrales Markenelement
- **Materialwelt:** helle Naturstein-Wand, Olivenzweige, taupe Arbeitskleidung, modern-funktionale Geräte

### Noch ausstehend (Platzhalter im aktuellen Design)
- Studio-Räume ohne Sabrina drauf (leerer Behandlungsraum, Empfang, Steinwand pur)
- Foto von Bianca (zweite Mitarbeiterin)
- Echte Behandlungsfotos für die 10 Behandlungs-Kacheln

---

## Tonalität / Sprache

### Grundregeln
- **„Sie"-Form**, immer
- **Direkt, aber einladend** — nicht abweisend
- **Fachlich präzise** — Sabrina ist Expertin, das hört man der Sprache an
- **Eine Mischung aus distanziert-professionell und warm-zugewandt**

### Wortwahl
- ✅ „Zusammenarbeit" statt „Termin"
- ✅ „Pharmazeutisch fundiert", „ganzheitlich", „individuell abgestimmt"
- ✅ „Maßgeschneidert wie ein Designerkleid" (Sabrinas eigene Metapher)
- ✅ „Hand in Hand"
- ❌ Keine billigen Beauty-Klischees: „strahlende Schönheit", „verwöhne dich"
- ❌ Keine aggressive Verkaufssprache
- ❌ Keine generischen „Wellness"-Floskeln

### Headlines im aktuellen Design
- Hero: *„Echte Hautveränderung entsteht in der Zusammenarbeet, nicht im Termin."*
- Ansatz: *„Sie buchen nicht nur einen Termin. Sie buchen eine Hautpflege-Expertin."*
- Check & Start: *„Der erste Schritt unserer Zusammenarbeit."*

---

## Designprinzipien (zusammenfassend)

1. **Hell und freundlich als Grundton**, dunkle Sections nur als bewusste Akzente
2. **Sabrina ist die zentrale Figur** der Startseite
3. **Premium ohne Kitsch** — kein „Spa-Wellness-Look", kein Goldglitzer, kein Rosa
4. **Erdige Naturmaterialien** als Stimmungsanker (Stein, Holz, Olivenblatt)
5. **Status sichtbar, aber nicht laut** — Sabrina mag Louis Vuitton, nicht Aesop
6. **Zahlen, Daten, Fakten prominent** — für den „Hai"-Kunden (20+ Jahre, 5★, 10 Konzepte)
7. **Keine Tech-Startup-Ästhetik** — keine Gradients-Spielereien, keine schwebenden 3D-Elemente
8. **Keine Magazin-Ästhetik** — V2-Lesson, zu distanziert
