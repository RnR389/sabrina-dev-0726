# Versions-Historie

Diese Datei dokumentiert alle Iterationen des Hautnah-Website-Designs.
**Bei jeder neuen Version hier nachtragen.**

---

## Versions-Konvention

> **Neue Regel ab 27.07.2026 (René):**
> - **Layout-Änderung → vordere Zahl hoch:** 3.14 → **4.14**
> - **Inhalts-Änderung → hintere Zahl hoch:** 4.14 → 4.15 → 4.16 …
>
> **Rückfall-Punkte:** `git tag v3.14` = letzter Stand im alten Layout (zusätzlich physisch in `archive/v3.14-layout/`), `git tag v4.14` = erstes modernes Layout.
> Zurückspringen: `git checkout v3.14 -- current/`, danach `_site/` neu bauen.

*Historisch (bis V3.14):*
- **V1, V2, V3 …** = komplette Neuausrichtung der Designsprache
- **V3.1, V3.2 …** = Anpassungen innerhalb derselben Designrichtung
- Jede Version bekommt einen Codenamen
- Format pro Eintrag:
  - **Codename**
  - **Datei** (Pfad)
  - **Status** (aktuell / verworfen / Feedback ausstehend)
  - **Konzept**
  - **Geändert gegenüber Vorversion**
  - **Feedback**

---

## V1 — „Generic Premium"  ❌ verworfen

- **Datei:** `archive/hautnah_mockup_v1.html`
- **Status:** Verworfen
- **Konzept:** Cormorant Garamond + Manrope, cremiger heller Look, 3er-Kachelraster, schwarzer CTA-Block am Ende
- **Geändert gegenüber Vorversion:** Erste Version
- **Feedback (René):** „Generell gefällt mir das gesamte Design nicht. Sieht so nach Standard-KI / Claude aus."
- **Lesson:** Cormorant + Inter/Manrope ist die KI-Standardkombi. Wirkt austauschbar, hat keine eigene Markenpersönlichkeit.

---

## V2 — „Editorial Magazine"  ❌ verworfen (Menübereich übernommen)

- **Datei:** `archive/hautnah_mockup_v2.html`
- **Status:** Verworfen
- **Konzept:** Bodoni Moda + DM Sans, hochwertiges Magazin-Layout, asymmetrische Sektionen, „Verzeichnis" statt Kachelraster, „Kolophon"-Footer, MMXXVI in römisch
- **Geändert gegenüber Vorversion:** Komplette Neuausrichtung; Magazine-Stil als Versuch, generischen KI-Look zu vermeiden
- **Feedback (René):** „Der Menübereich gefällt mir schon mal, der Rest noch nicht. Zu unübersichtlich, passt 0, spiegelt Sabrina 0 wider."
- **Lesson:** Geschmack ohne Briefing ist Blindflug. Magazin-Editorial-Stil ist *mein* Geschmack, nicht Sabrinas. Sie ist warm-zugewandt, nicht Vogue-distanziert.
- **Was bleibt nutzbar:** Der Masthead-Bereich (großer Logo-Block mit Eyebrows links/rechts) → wurde in V3 übernommen.

---

## V3 — „Sabrina im Zentrum"  📍 aktueller Stand

- **Datei:** `current/index.html` (Live-Version) + `archive/hautnah_mockup_v3.html` (Archiv-Kopie)
- **Status:** Aktuell — wartet auf finales Feedback nach Sabrinas Sichtung
- **Konzept:**
  - Fraunces (Variable-Serif, Display) + Outfit (Body)
  - Hell und freundlich als Grundton (Paper #FAF6EF)
  - Sabrinas echte Fotos eingebaut (Hero, Story, Check & Start)
  - Markenfarben dezent eingesetzt
  - Eine dunkle Section („Check & Start") als bewusster Akzent
  - „Hai"-Kunden-Anker: Trust-Zahlen (20+, 5★, 10) und Trust-Bar (4 Säulen)
  - Bianca-Section als gelb hinterlegter Platzhalter
- **Geändert gegenüber V2:**
  - Komplette Neuausrichtung der Designsprache
  - Schriften gewechselt (Bodoni → Fraunces)
  - Magazine-Layouts entfernt, klares Hero-Layout mit Foto rechts
  - Echte Sabrina-Fotos statt Platzhalter-Verläufe
  - Hellerer Grundton
  - Menübereich aus V2 beibehalten
- **Feedback (René, vorläufig):**
  - „Variante 3 gefällt uns vom Layout am besten, würden gerne weiter drauf aufbauen."
  - Sabrinas finales Feedback steht aus
- **Lesson:** Erst Person + Markenwelt klären, dann gestalten. Echte Bilder sind unbezahlbar.

---

## V3.1 — „Erste Unterseiten"  📍 Feedback ausstehend

- **Dateien:** `current/crystal-peel.html`, `current/chemical-peeling.html`, `current/bianka-wittulski.html`
- **Status:** Feedback ausstehend (René / Sabrina)
- **Konzept:** Erste Unterseiten in der V3-Designsprache — kein Redesign, sondern Ausbau. Header (Topbar/Masthead/Nav), Buttons, Eyebrows und Footer 1:1 aus der Startseite übernommen, damit der Markenauftritt durchgängig bleibt.
- **Geändert gegenüber V3:**
  - Neues, wiederverwendbares **Behandlungs-Detail-Template**: Detail-Hero (Titel + Untertitel + Lead + Fakten-Box), Inhaltsblöcke mit Section-Eyebrows, Vorteils-/Eignungslisten (Gold-Rauten), Highlight-Band für die Kur-Empfehlung, dunkles „Check & Start"-CTA-Band, FAQ-Akkordeon, „Weitere Konzepte".
  - **Crystal Peel** und **Chemical Peeling** mit den Texten aus den Word-Vorlagen aufgebaut.
  - **Chemical Peeling**: 9 echte FAQs aus `content/behandlungen/chemical-peeling.md` als Akkordeon.
  - **Crystal Peel**: noch keine FAQs (folgen nach Sabrinas Schulung) → dezenter Platzhalter-Hinweis statt erfundener Inhalte.
  - **Bianka Wittulski**: Profil-/Teamseite (Permanent Make-up) mit Vita, Meilenstein-Liste, Markenzitat, Spezialgebieten und Credential-Chips.
  - Behandlungsfotos fehlen noch → gleiche Gradient-Platzhalter wie die Startseiten-Kacheln.
- **Technische Entscheidungen:**
  - FAQ-Akkordeon mit nativem `<details>/<summary>` statt JavaScript — bleibt „bewusst einfach", funktioniert ohne JS.
  - Jede Seite ist eine eigenständige HTML-Datei mit eingebettetem CSS (wie `index.html`), Basis-Stile dupliziert statt geteiltes Stylesheet.
- **Startseite (`index.html`) angepasst:**
  - Behandlungs-Kacheln „Crystal Peel" (01) und „Chemical Peeling" (03) sowie der Nav-Dropdown verlinken jetzt auf die neuen Unterseiten.
  - Anker-IDs ergänzt: `#treatments`, `#story`, `#kontakt` (für Cross-Page-Links von den Unterseiten).
  - Team-Section „Bianca" → **„Bianka Wittulski"** umbenannt, Platzhaltertext durch echten Teaser ersetzt, Button verlinkt auf `bianka-wittulski.html` (Foto bleibt Platzhalter).
- **Footer-Versionsnummer:** Alle Seiten zeigen jetzt „Version 3.1" im Footer (wird mit jeder Version mitgezogen).
- **Deployment:** Auf Netlify veröffentlicht — siehe Abschnitt „Deployment" unten.
- **Offen:** Echte Behandlungs-/Portraitfotos, Crystal-Peel-FAQs (nach Schulung), restliche 8 Behandlungsseiten + übrige Unterseiten.
- **Feedback:** ausstehend (Stand geht an Sabrina)

---

## V3.2 — „Alle Behandlungsseiten"  📍 Feedback ausstehend

- **Dateien:** alle 10 Behandlungsseiten in `current/` (8 neue + crystal-peel/chemical-peeling aus V3.1)
- **Status:** Feedback ausstehend
- **Konzept:** Alle 10 ästhetischen Konzepte haben jetzt eine eigene Detailseite im V3-Template (Hero, Inhaltsblöcke, Highlight-Band, CTA, FAQ-Akkordeon, „Weitere Konzepte").
- **Neu gegenüber V3.1:**
  - 8 neue Seiten: Pharma, Shape Beckenboden, Hydra Facial, Hydra Lift, EMS Shape, One Take (ONETEC), FORMA, Skin Needling.
  - Inhalte aus `original-sources/*.docx` übernommen; echte FAQs eingebaut wo vorhanden (Shape Beckenboden, Hydra Facial, Hydra Lift, One Take, FORMA, Skin Needling).
  - **Pharma** und **EMS Shape**: noch kein Volltext von Sabrina → Intro + Platzhalter-Hinweis (Struktur steht, Text wird ergänzt).
  - Generiert über ein einmaliges Build-Skript, das CSS/Header/Footer 1:1 aus den bestehenden Seiten übernimmt → volle Konsistenz.
  - **Startseite:** alle 10 Kacheln sind jetzt klickbar und verlinken auf ihre Detailseite; Nav-Dropdown auf allen Seiten verlinkt alle 10.
  - Footer-Version auf allen Seiten → **3.2**.
  - Dropdown-Hover-Bug behoben (unsichtbare Brücke über die 16px-Lücke) — auf allen Seiten.
- **Behandlungsfotos:** Für alle 10 Behandlungen wurden fotorealistische Bilder via Higgsfield (nano_banana_pro) generiert, markengerecht (Naturstein, Olivenzweig, warmes Tageslicht, Taupe/Creme). Liegen als `assets/treatment-<slug>.jpg`, eingebunden in Startseiten-Kacheln + Detail-Hero. **Hinweis:** Das sind KI-Bilder als realistische Platzhalter — jederzeit durch echte Studiofotos ersetzbar.
- **Offen:** Pharma-/EMS-Shape-Volltext, Crystal-Peel-FAQs, echte Studio-/Portraitfotos (Sabrina, Bianka, Studioräume), ggf. KI-Bilder durch echte Fotos ersetzen.
- **Feedback:** ausstehend

---

## V3.3 — „Sticky-Navigation"  📍 Feedback ausstehend

- **Dateien:** alle 12 Seiten in `current/`
- **Status:** Feedback ausstehend
- **Konzept:** Header-Verhalten überarbeitet — moderner, premiumiger, mehr Platz für Inhalt.
- **Geändert gegenüber V3.2:**
  - **Masthead (großer Logo-Block) ist nicht mehr sticky** und scrollt beim Runterscrollen mit aus dem Bild.
  - **Nur die Menüleiste bleibt oben angeheftet** — als eigene `<nav class="navbar">` mit Frosted-Glass-Look (leichte Transparenz, `backdrop-filter: blur`, feiner Schatten + Hairline).
  - **Dropdown-Indikator** (vorher fettes `⌄` vor dem Text) ersetzt durch einen feinen, dünnen Pfeil **hinter** dem Label, der beim Hover elegant nach oben klappt.
  - `scroll-padding-top: 86px` ergänzt, damit Sprung-Anker (#treatments etc.) nicht unter der Sticky-Nav verschwinden.
  - DOM-Umbau: Nav aus dem `<header>` herausgelöst, damit die Sticky-Nav dauerhaft oben bleibt (nicht nur solange der Header im Bild ist).
- **Footer-Version:** alle Seiten → **3.3**.
- **Feedback:** ausstehend

---

## V3.4 — „Mobile First"  📍 Feedback ausstehend

- **Dateien:** alle 12 Seiten in `current/`
- **Status:** Feedback ausstehend
- **Konzept:** Vollständige Überarbeitung der Darstellung für alle Geräte (Smartphone, Tablet, Laptop, großer Bildschirm), Schwerpunkt Mobil-Menü.
- **Geändert gegenüber V3.3:**
  - **Echtes Hamburger-Menü auf Mobil/Tablet** (CSS-only, kein JS): **zentrierter Hamburger** in der Sticky-Leiste (ohne Wortmarke — Kontext kommt vom Logo-Block direkt darüber); ausklappendes Panel; Burger animiert zum „×".
  - **Einklappbare Untermenüs** (Shop / Ästhetische Konzepte) mit „+/×"-Indikator — Hauptpunkte sofort sichtbar, Behandlungsliste auf Tipp.
  - **Header-CTA „Zusammenarbeit anfragen" entfällt auf Mobil** (Wunsch René) — wandert als voll­breiter Button ans Ende des Menüs.
  - Greift unter 1100px (Tablet/Smartphone); Desktop unverändert (horizontale Nav, Sticky-on-Scroll, feiner Chevron).
  - Zusätzliche Feinheiten unter 480px (Topbar/Logo kompakter).
  - Verifiziert per Screenshots in 375 / 768 / 1280 px (Menü auf/zu, Untermenü, Sticky-Scroll, Detailseite).
- **Footer-Version:** alle Seiten → **3.4**.
- **Feedback:** ausstehend

---

## V3.5 — „Original-Texte"  📍 Feedback ausstehend

- **Dateien:** alle 10 Behandlungsseiten in `current/`
- **Status:** Feedback ausstehend
- **Konzept:** Auf Wunsch von René werden **ausschließlich die Originaltexte aus den Word-Dateien** verwendet — wortwörtlich, ohne Umformulierung oder Korrektur. Meine früheren Paraphrasen/erfundenen Intros, Fakten-Boxen und CTA-Floskeln wurden entfernt.
- **Quelle → Seite:**
  - Crystal Peel.docx → crystal-peel (Body); Crystal Peel in Wehr.docx → crystal-peel (FAQ + CTA)
  - Chemical Peel.docx → chemical-peeling (Body); chemisches peeling.docx → chemical-peeling (FAQ)
  - ONETEC Behandlung in Wehr.docx → one-take; FORMA Behandlung in Wehr.docx → forma
  - EMShape X Beckenboden.docx → shape-beckenboden; HydraFacial.docx → hydra-facial; Hydralift Behandlung.docx → hydra-lift; Medical Beauty Spezial Skin Needling.docx → skin-needling
- **Technik:** Parser liest die .docx strukturerhaltend (Überschriften/Absätze/Listen/FAQ); Texte 1:1 übernommen (inkl. vorhandener Eigenheiten — nicht korrigiert). Verbatim-Prüfung gegen die Quelle für die unregelmäßige Crystal-Peel-FAQ. Schluss-Abschnitte „Termin vereinbaren" der Dokumente sitzen wortwörtlich im CTA-Block. Header/Menü/Footer/Design unverändert.
- **Pharma & EMS Shape:** keine Word-Datei vorhanden → neutraler Platzhalter (kein erfundener Text).
- **Offen / zur Klärung:**
  - **Startseite:** `startseite_homepage.docx` ist in „Du"-Form — Konflikt mit der freigegebenen „Sie"-Form. Wartet auf Renés Entscheidung (noch nicht übernommen).
  - **Zahlungsoptionen.docx:** noch keine Zielseite (Über uns / Kontakt fehlen).
  - Kurze Kachel-Teaser auf der Startseite stammen nicht aus den Word-Dateien (keine Kurztext-Vorlage vorhanden).
- **Footer-Version:** alle Seiten → **3.5**.
- **Feedback:** ausstehend

---

## V3.6 — „Kein Schwarz, eine Schrift"  📍 Feedback ausstehend

- **Dateien:** alle 12 Seiten in `current/`
- **Status:** Feedback ausstehend
- **Konzept:** Zwei feste Vorgaben von Sabrina umgesetzt — kein Schwarz, modern/nicht verspielt, max. zwei Schriften, barrierefrei.
- **Geändert gegenüber V3.5:**
  - **Kein Schwarz mehr:** Fast-Schwarz `#1C1C1C` → warmes **Espresso-Braun `#3A322C`** (Fließtext `#3E382F`); Linien/Schatten auf `rgba(58,50,44,…)`. Betrifft Text, Buttons, Topbar, Footer, „Check & Start". Kontrast geprüft: Fließtext 10,76:1, dunkle Sektionen 11,66:1 → **WCAG AAA**.
  - **Nur noch eine Schrift:** Fraunces (zu verspielt) komplett entfernt → durchgehend **Outfit**; Titel über Größe/Gewicht/Letter-Spacing, keine Kursiven. Reduzierter, moderner Look (Louis-Vuitton/Michael-Kors-Richtung).
  - Startseiten-Kachel-Teaser bleiben wie sie sind (bewusste Entscheidung — kein Kurztext in den Word-Dateien vorhanden).
- **Hinweis:** Diese Entscheidungen ersetzen die älteren Farb-/Schrift-Festlegungen in BRAND.md/CLAUDE.md (Fraunces, `#1C1C1C`).
- **Footer-Version:** alle Seiten → **3.6**.
- **Feedback:** ausstehend

---

## V3.7 — „Echtes Logo + EMS Shape"  📍 Feedback ausstehend

- **Dateien:** alle 12 Seiten + neue Assets `logo-dark.png`, `logo-light.png`
- **Status:** Feedback ausstehend
- **Geändert gegenüber V3.6:**
  - **Sabrinas Logo eingebaut.** Das Original (`logo.png`) ist ein Schwarz-Hintergrund-Export (helle Marken auf Schwarz) — passt nicht auf helle Flächen. Daraus zwei transparente Varianten erzeugt (Pillow): `logo-dark.png` (Espresso-Silhouette + Gold) für helle Flächen, `logo-light.png` (Creme + Gold) für dunkle Flächen.
    - **Masthead** (alle Seiten): Text-Schriftzug → `logo-dark.png`.
    - **Footer** (Espresso): Text-Wortmarke → `logo-light.png`.
    - **Favicon**: `logo-dark.png`.
  - **EMS Shape**: Text aus `EMShape_X_Infotext.pdf` **wortwörtlich** eingebaut (Hero-Sub „Electromagnetic Wave System" + 6 Absätze); Platzhalter ersetzt. (EMS Shape = Körperkonturierung, abgegrenzt von Shape Beckenboden.)
  - Pharma bleibt Platzhalter (kein Text vorhanden).
- **Hinweis/offen:** Logo-Original war reines Schwarz ohne Transparenz; die genutzten Varianten sind daraus generierte, transparente, einfarbige Versionen (Gold-Akzent erhalten). Falls eine **transparente Vektor-/Originaldatei** vorliegt, kann sie die generierten Varianten ersetzen.
- **Footer-Version:** alle Seiten → **3.7**.
- **Feedback:** ausstehend

---

## V3.8 — „Original-Logo"  📍 Feedback ausstehend

- **Dateien:** alle 12 Seiten + `assets/logo-original.png`, `assets/logo-footer.png`
- **Status:** Feedback ausstehend
- **Geändert gegenüber V3.7:**
  - René hat das **transparente Original-Logo** als `Logo.avif` (1550×1096, mit Alpha) geliefert. Mit `sips` zu `logo-original.png` konvertiert.
  - **Masthead + Favicon:** nutzen jetzt das **echte Original** (`logo-original.png`, Taupe-Emblem + Schriftzug + Goldlinie auf transparent) — ersetzt die zuvor generierte Espresso-Silhouette.
  - **Footer (dunkel):** Creme-Variante `logo-footer.png`, direkt aus dem Original umgefärbt (Taupe→Creme, Gold erhalten) für hohen Kontrast auf Espresso.
  - Die behelfsweise aus dem alten Schwarz-PNG erzeugten `logo-dark.png`/`logo-light.png` wurden entfernt.
- **Footer-Version:** alle Seiten → **3.8**.
- **Feedback:** ausstehend

---

## V3.9 — „Taupe & Silber, kein Gold"  📍 Feedback ausstehend

- **Dateien:** alle 12 Seiten in `current/`
- **Status:** Feedback ausstehend
- **Konzept:** Sabrinas Feedback-Runde umgesetzt — professionelle Außenwirkung, weg vom KI-/Baukasten-Look. Studio-Farbwelt: **Taupe + Silber**.
- **Geändert gegenüber V3.8:**
  - **Kein Gold mehr — komplett.** `--gold`/`--gold-deep` entfernt; neu: `--accent: #6F655D` (Akzente auf hell), `--silver: #C9C9CE` (Akzente auf dunkel). Gold-getönte Bild-Innenrahmen → Silber; Platzhalter-Hinweise → Taupe-Tönung. *(Hinweis: Im Logo selbst ist eine goldene Linie — Markenbestandteil, unangetastet.)*
  - **Taupe neu: `#8A7F77`** (Vorgabe René — **vorläufig**, finaler Ton folgt von Sabrina); `--taupe-dark: #6F655D`.
  - **Nummerierungen entfernt:** Trust-Bar (I.–IV.), Werte (— I. Diagnose → „Diagnose"), Kachel-Nummern (01–10), Detail-Kicker, Related-Karten, Bianka-Skills.
  - **KI-Look raus:** Eyebrow-Balken ausgeblendet, „→"-Pfeile aus allen Buttons/Links entfernt, Karten-Hover beruhigt (kein Abheben + Riesenschatten).
  - **„Meisterbetrieb"-Siegel** im Masthead links: Doppelrahmen-Kasten (Siegel-Optik), auf allen Seiten.
  - **CTA „Zusammenarbeit anfragen"** im Header jetzt als gefülltes, abgesetztes Kästchen (Espresso).
  - **5-Sterne-Hervorhebung:** Topbar links zeigt sitewide „Erstes 5-Sterne-Fachinstitut · Landkreis Waldshut"; auf der Startseite zusätzlich als gerahmtes ★★★★★-Badge über der Hero-Headline. Topbar gestrafft (einzeilig).
  - **Schrift-Set reduziert:** Outfit-Gewichte 300–600 (700 entfernt).
- **Offen:** Finaler Taupe-Ton von Sabrina; ggf. Silber-Ton abstimmen; Meisterbetrieb-Siegel erscheint mobil nicht im Header (masthead-left ist dort ausgeblendet) — bei Bedarf ins Mobilmenü aufnehmen.
- **Footer-Version:** alle Seiten → **3.9**.
- **Feedback:** ausstehend

---

## V3.10 — „Neue Seitenstruktur"  📍 Feedback ausstehend — NICHT deployt

- **Dateien:** alle Seiten in `current/` (jetzt **16**), davon **4 neu**: `ueber-uns.html`, `aesthetische-konzepte.html`, `zahlungsoptionen.html`, `gutscheine.html`
- **Status:** Feedback ausstehend. **Nicht auf Netlify deployt** — Netlify hat aktuell keine Tokens/Credits (Deploy pausiert, bis René Freigabe gibt). Live ist weiterhin V3.8.
- **Geändert gegenüber V3.9:**
  - **Über uns (neu):** Sabrina-Story und Bianka-Section sind **komplett von der Startseite entfernt** und leben jetzt auf `ueber-uns.html` (Story ohne „Vollständige Vita"-Button; Bianka-Teaser verlinkt weiter auf ihre Profilseite). *(Interpretation: Das Sabrina-Hero-Foto oben auf der Startseite blieb — es ist das Kernmotiv von V3 „Sabrina im Zentrum". Falls auch das weg soll, bitte sagen.)*
  - **Ästhetische Konzepte (neu):** `aesthetische-konzepte.html` zeigt die 10 Behandlungs-Kacheln als Übersichtsseite. Der Menüpunkt ist jetzt ein **Link statt Dropdown** (Desktop + Mobil). **Die Kacheln-Sektion wurde von der Startseite entfernt** (Nachtrag René); der Hero-Button „Behandlungen ansehen" führt jetzt auf die Übersichtsseite. Startseite besteht damit aus: Hero (Sabrina bleibt vorerst — bestätigt), Trust-Bar, Mein Ansatz, Check & Start, Zitat, Footer.
  - **Shop entfernt** aus Nav + Footer. *(Struktur geparkt für später: Shop ▾ mit Produkte / Gutscheine / Bücher — siehe CLAUDE.md-Historie.)*
  - **Gutscheine:** eigener Menüpunkt + Platzhalterseite (`gutscheine.html`, Inhalte folgen).
  - **Zahlungsoptionen (neu):** eigener Menüpunkt + Seite mit den Texten aus `Zahlungsoptionen.docx` **wortwörtlich** (Zahlungsoptionen + Terminabsagen). Hinweis: Der Medkredit-Link fehlt im Quelldokument („…über den folgenden Link:.") → Platzhalter-Hinweis, Link von Sabrina nachreichen lassen.
  - **Neue Nav-Reihenfolge:** Ästhetische Konzepte · Haarkonzept · Über uns · Gutscheine · Zahlungsoptionen · Aktuelles · Kontakt (Abstand von 56 → 38 px, damit 7 Punkte einzeilig passen).
  - **Footer-Verzeichnis** auf allen Seiten vereinheitlicht und verlinkt (ohne Shop).
  - Cross-Links aktualisiert: `#treatments`/`#story`-Verweise zeigen jetzt auf die neuen Seiten; Breadcrumbs der Behandlungsseiten führen zur Übersichtsseite.
- **Footer-Version:** alle Seiten → **3.10**.
- **Feedback:** ausstehend

---

## V3.11 — „Korrekturen + Bianka verbatim"  📍 Feedback ausstehend

- **Dateien:** alle 16 Seiten in `current/`
- **Status:** live auf GitHub Pages (https://rnr389.github.io/sabrina-dev-0726/)
- **Geändert gegenüber V3.10:**
  - **„Onkologische Kosmetik" gestrichen** (wird nicht mehr angeboten): aus der Trust-Bar der Startseite (jetzt 3 statt 4 Säulen) und aus den Credentials auf „Über uns". *(Hinweis: In Biankas Vita bleibt „Onkologen" stehen — das sind Ärzte, mit denen sie zusammenarbeitet, Teil ihres 1:1-Textes.)*
  - **Logo im Header ist jetzt überall ein Link zur Startseite** — auch auf Startseite, Über uns und Ästhetische Konzepte (waren `<div>`, jetzt `<a href="index.html">`).
  - **Bianka-Seite komplett 1:1 aus `Bianka Wittulski.docx`** neu aufgebaut. Frühere erfinderische Struktur (Meilenstein-Zeitleiste, Spezialgebiete-Karten, eigene Zwischenüberschriften) entfernt. Jetzt: Name + Lead-Satz + die 10 Original-Absätze + Schlusszeile — Verbatim-Check: 0/13 Abweichungen.
  - **Verbatim-Kontrolle aller Sabrina-Texte:** Behandlungsseiten, Zahlungsoptionen, EMS Shape = verbatim (einzige „Abweichung" ist jeweils die Titelzeile, bewusst in H1 + Unterzeile aufgeteilt, sowie die `•`-Zeichen der als HTML-Liste gesetzten Aufzählungen).
  - **Footer-Zuschläge entfernt:** „Ab 19:30 Uhr: +50%" und „Sonn- & Feiertag: +80%" auf allen Seiten raus (auf Wunsch René).
- **Footer-Version:** alle Seiten → **3.11**.
- **Offen:** Homepage-Text (`startseite_homepage.docx`, „Du"-Form) weiterhin nicht übernommen (Du/Sie-Konflikt, wartet auf Entscheidung); Google-Rezensionen für die Startseite; finaler Taupe-Ton.
- **Feedback:** ausstehend

---

## V3.12 — „Behandlungs-Reihenfolge, Schreibweisen, ®, finaler Taupe"  📍 Feedback ausstehend

- **Dateien:** alle Seiten in `current/` (jetzt 17 — neu: `haut-haarcheck.html`)
- **Status:** lokal fertig (Deploy auf Wunsch)
- **Geändert gegenüber V3.11:**
  - **Finaler Taupe-Ton von Sabrina:** `--taupe` von `#8A7F77` (provisorisch) auf **`#C2B4A9`** — auf allen Seiten.
  - **Behandlungen neu sortiert + Schreibweisen korrigiert** auf der Übersicht (`aesthetische-konzepte.html`) und in Titel/Breadcrumb/H1 der Detailseiten. Neue Reihenfolge: Haut & Haarcheck · Forma® · Hydrafacial® · Hydralift · Medical Beauty Spezial Skin Needling · Chemische Peelings · Crystal Peel · Onetec® · EMShape X® · EMShape X® Beckenboden · Pharma.
  - **®-Zeichen (Markenschutz)** ergänzt bei: **Forma®, Hydrafacial®, Onetec®, EMShape X®** und **EMShape X® Beckenboden** (auf Renés Bestätigung auch dort). Umgesetzt als `&reg;` in Übersichts-Kacheln, H1, Breadcrumb, `<title>` und den „Weitere Konzepte"-Karten aller Detailseiten.
  - **Umbenennungen:** Hydra Facial → Hydrafacial®, Hydra Lift → Hydralift, Chemical Peeling → Chemische Peelings, EMS Shape → EMShape X®, Shape Beckenboden → EMShape X® Beckenboden, One Take → Onetec®, FORMA → Forma®, Skin Needling → Medical Beauty Spezial Skin Needling. Crystal Peel und Pharma unverändert.
  - **Neue Seite `haut-haarcheck.html`** als Platzhalter (Diagnostik & Analyse), Struktur wie Pharma-Platzhalter, Bild = „Bildmaterial folgt".
  - **Kachelzahl-Text** „Zehn" → „Elf" (11 Kacheln, da Pharma zusätzlich bestehen bleibt) — anschließend auf Renés Wunsch der komplette **Kopfbereich über den Kacheln entfernt** (Eyebrow „Ästhetische Konzepte" + Überschrift „…Behandlungskonzepte." + Intro-Absatz). Kacheln starten jetzt direkt unter der Navigation.
  - **Startseite: „Mein Ansatz"-Section komplett entfernt** (auf Renés Wunsch) — der Block „Sie buchen nicht nur einen Termin…" inkl. der drei Werte (Diagnose / Plan / Zusammenarbeit).
  - **Startseite: „Check & Start"-Section entfernt** („Der erste Schritt unserer Zusammenarbeit." + Kennenlern-Checkup-Text + Feature-Liste). Startseiten-Reihenfolge jetzt: Hero → Trust-Bar → Coco-Zitat → Footer.
  - **Topbar-Farbe** von `--ink` (Espresso, wirkte schwarz) auf **`--taupe-dark` (#6F655D)** geändert (auf allen Seiten) — warmer, passender Ton.
  - **Logo im Masthead vergrößert:** `.logo-img` height `clamp(56px,9vw,108px)` → **`clamp(96px,14vw,188px)`** (alle Seiten). Zusätzlich **Freiraum im Masthead reduziert**: `.masthead-top` padding `28px 60px 12px` → `12px 60px 6px`, `.masthead-brand` padding `4px 0` → `0`.
  - **Menü „Über uns" → „Ihre Expertinnen" (weibliche Form, beide sind Frauen)** umbenannt (Nav, Footer-Verzeichnis, Breadcrumb, `<title>`/Meta der ueber-uns-Seite). Dateiname `ueber-uns.html` bleibt.
  - **Forma®: Vorher-Nachher-Galerie** (3 Bilder von René geliefert) — eingebaut zwischen Fließtext und Kundenstimmen (Aufbau: Text → Ergebnisse → Social Proof → CTA). **Wichtig: Es sind Herstellerbilder (InMode), keine Aufnahmen aus dem Institut.** Deshalb je Bild ein Credit („Forma: Dr. S. Mulholland" / „J. Campbell, APRN FNP-C" / „Dr. S. Bittar / J. Sisto") plus deutlicher Hinweiskasten darunter: klinisches Bildmaterial des Herstellers, keine Aufnahmen aus dem Kosmetikinstitut Hautnah, Ergebnisse individuell und nicht garantierbar. René hat die Nutzungsrechte bestätigt (Sabrina betreibt das Forma-Gerät). Dateien: `assets/forma-vorher-nachher-1..3.jpg` (webp → jpg konvertiert).
  - **Onetec®: Erklärvideo eingebaut** (Herstellerfilm, 6:03 Min). **Original war 310 MB (1080p, 6,8 Mbit/s) — das hätte GitHub blockiert (100-MB-Limit pro Datei).** Neu kodiert mit ffmpeg (H.264 CRF 28, 1080p erhalten, AAC 128k, `+faststart`) → **46 MB**, progressives Laden verifiziert. Eingebaut mit `controls preload="none"` (lädt erst beim Klick, kein Autoplay, kein ungefragter Ton) und Poster-Standbild aus dem Vorspann (`assets/onetec-poster.jpg`). Platzierung analog Forma: Text → Video → Kundenstimmen → CTA.
  - **Kundenstimmen auf 13 Seiten ausgerollt** (Renés Wunsch: „möglichst viele Seiten, aber nur wo psychologisch sinnvoll"). Startseite 6 Zitate, die übrigen 12 Seiten je 3 — **thematisch zur Seite passend** und **direkt vor dem CTA-Band** platziert (Beleg → Handlung). Zuordnung: Haut & Haarcheck/Chemische Peelings → Analyse- und Hautproblem-Zitate (Lea M., Mark K., Lea H.) · Onetec® → Conny t. K. (Pigmentflecken/Stielwarzen entfernt) · EMShape X® + Beckenboden → Amadeus B. + Birgit W. (beide explizit EMShape X) · Forma®/Hydralift → Gordana G. (Thermolift, Faltenbild) · Hydrafacial®/Crystal Peel → Elke S./Angi L. · Ihre Expertinnen + Übersicht → Gudrun F. (Kompetenz, empfiehlt Sabrina ihren eigenen Patientinnen weiter).
  - **Bewusst OHNE Kundenstimmen:** `bianka-wittulski.html` (keine einzige Rezension betrifft Permanent Make-up — wäre ein irreführender Beleg für Biankas Arbeit), `blog.html` + `gutscheine.html` (leere Platzhalter), `zahlungsoptionen.html` (reine Infoseite).
  - **Kundenstimmen-Sektion auf der Startseite (NEU):** echte Google-Rezensionen aus dem Profil „Kosmetikinstitut Hautnah" (**4,8 ★ / 65 Bewertungen**; Verteilung 61×5★, 1×4★, 1×3★, 0×2★, 2×1★). Sechs Zitate ausgewählt (Gudrun F., Lea M., Mark K., Amadeus B., Gordana G., Elke S.) — **alle nachweislich 5★**, wortgetreu zitiert, Kürzungen nur mit „…" markiert, nichts umformuliert. Nachnamen abgekürzt (Datenschutz). Platzierung: zwischen Trust-Bar und Coco-Zitat. Eigene `.voices`-Styles, ohne Kursiv/Serifen, Sterne in Taupe.
  - **Sabrina-Text komplett ersetzt** (neue Fassung von René, 1:1 übernommen) auf `ihre-expertinnen.html`: Name als Überschrift, neue Rollenzeile „Inhaberin | Kosmetikmeisterin | Pharmazeutisch-technische Assistentin (PTA) | Buchautorin", danach 5 Absätze (Schlussabsatz hervorgehoben). Alter Text (Bachelor Professional, Fitnesstrainerin, „Branchenkennerin", Premium-Medical-Aesthetic-Absatz) und die **Credentials-Chip-Liste** sind raus — die Qualifikationen stehen jetzt in der Rollenzeile. Eyebrow „Über mich" entfernt. Originalformulierungen bewusst NICHT korrigiert (Verbatim-Regel).
  - **Bianka-Teaser auf `ihre-expertinnen.html` an den neuen Text angeglichen** (Renés Vorgabe „nur das neue zählt"): „zertifizierte Linergistin" raus, „Top Elitepartner" → **„Top Elitepartnerin"**, „Tattoo-Show" → **„Tattoo-Convention … in Las Vegas"**, Eyebrow „Im Team · Permanent Make-up" → **„Selbstständiger Kooperationspartner für Permanent Make up"** (Bianka ist Kooperationspartnerin, nicht angestellt). Teaser enthält jetzt ausschließlich Angaben aus der neuen Fassung.
  - **Bianka-Text komplett ersetzt** (neue Fassung von René, 1:1 übernommen): neue Rollenzeile „Selbstständiger Kooperationspartner für Permanent Make up" unter dem Namen, Lead-Satz unverändert, danach 9 Absätze + Schlusszeile „Ich freue mich Sie persönlich kenne zu lernen." Der alte Vita-Text (Friseurmeisterausbildung, Visagistin Hamburg, Conture® Make-up, Balmain/Fashion Week-Details) ist damit vollständig raus. Originalformulierungen bewusst NICHT korrigiert (Verbatim-Regel). Meta-Description an den neuen Text angepasst.
  - **Dunkle Füllflächen → Taupe (#6F655D):** auf Renés Wunsch wechseln alle dunklen Flächen/Buttons vom Espresso `--ink` (#3A322C) auf `--taupe-dark` (#6F655D, wie die Topbar): Button „Zusammenarbeit anfragen" (Header + `.btn-primary`), `.cta-band`, Footer, `.p-quote`, Topbar. **Fließtext, Überschriften, Breadcrumb, Rahmenlinien und das Hamburger-Icon bleiben Espresso** (Lesbarkeit). Button-Hover dunkelt jetzt auf Espresso ab (statt No-Op). Umgesetzt per Substring-sed über beide CSS-Formate (mehr-/einzeilig).
  - **„Pharma" komplett entfernt** (Renés Ansage: „diese Behandlung gibt es nicht") — Seite `pharma.html` gelöscht, Kachel aus der Übersicht raus (jetzt **10 Kacheln**), CTA-Texte in gutscheine/zahlungsoptionen neutral umformuliert („Ob eine einzelne Behandlung oder eine Kur…"), Meta-Text der Übersicht angepasst. Trust-Bar-Säule „Pharmazeutisch fundiert" auf der Startseite bleibt (ist der Ansatz, nicht die Behandlung). Damit ist die frühere To-do „Pharma ↔ Haut & Haarcheck" erledigt: Haut & Haarcheck bleibt, Pharma weg.
  - **Blog neu:** Menüpunkt „Blog" (Nav nach „Aktuelles", + Footer-Verzeichnis) und neue Seite **`blog.html`** — Übersicht mit Beitrags-Kachel-Raster (eigene `.blog-*`-Styles, aktuell 3 Platzhalter-Karten). **Aktuelles UND Blog bleiben beide** (Renés Entscheidung). **Blog-Backend (Selbstbedienung für Sabrina) noch offen** — später entscheiden (Optionen: Decap CMS / GitHub-Weboberfläche+Actions / manuell).
- **Footer-Version:** alle Seiten → **3.12**.
- **Offen / mit Sabrina klären:** Verhältnis **Pharma ↔ Haut & Haarcheck** (aktuell bewusst BEIDE vorhanden — auf Renés Wunsch als To-do markiert); Homepage-Text (Du/Sie); Google-Rezensionen; echte Fotos (u.a. Haut & Haarcheck).
- **Feedback:** ausstehend

---

## V3.13 — „Bildsprache statt Textwüste"  📍 Feedback ausstehend

- **Dateien:** 9 Behandlungsseiten in `current/`
- **Status:** lokal fertig
- **Anlass (René):** „Ganz viele Überschriften und darunter immer nur ein, zwei, drei Aufzählungen. […] Ein Icon ist immer so eine gewisse Bildsprache mit einem kurzen Wort darunter. Viel ansprechender als Überschrift, Text, Überschrift, Text."
- **Geändert gegenüber V3.12:**
  - **Eigenes Icon-Set gezeichnet** (30 Strichgrafiken, 1,4 px Kontur, runde Enden, Taupe). Bewusst selbst gebaut statt Icon-Bibliothek: passt zur reduzierten Marke und wirkt gezeichnet, nicht nach Clipart. Als Inline-SVG-Sprite eingebettet → kein externer Dienst, kein Nachladen.
  - **Drei neue Bausteine ersetzen das alte „Überschrift + zwei Zeilen"-Muster:**
    1. `.icon-grid` / `.icon-rows` — kurze Aufzählungen als Icon-Kacheln (z.B. Anwendungsbereiche: Gesicht · Hals · Dekolleté · Körper).
    2. `.facts` — mehrere kurze Frage/Antwort-Blöcke werden zu einem Raster kompakter Karten statt untereinander gestapelter Vollbreiten-Absätze. Größter Effekt auf Forma (6 Karten) und Crystal Peel (2).
    3. `.clean-list` — ruhige zweispaltige Liste für Fälle, in denen Icons **nicht** helfen.
  - **Zwei Qualitätsschwellen** entscheiden automatisch, ob Icons überhaupt sinnvoll sind: (a) wenn für mehr als 30 % der Punkte kein passendes Icon existiert, (b) wenn dasselbe Icon mehr als zweimal in einer Liste stünde. Dann greift `.clean-list`. Grund: Zehn identische Symbole sind wieder nur eine Aufzählung — Icons sollen Orientierung geben, nicht dekorieren. Betrifft v.a. Crystal Peel (lange Zustandslisten) und Shape Beckenboden.
- **Verteilung:** Forma 4 Icon-Raster + 6 Fakten-Karten · Onetec 5 + ruhige Liste · Crystal Peel 4 ruhige Listen + 2 Karten · Hydrafacial/Hydralift/Skin Needling je 1 Icon-Raster · Chemische Peelings & EMShape X bleiben Fließtext (dort ist zusammenhängender Text richtig).
- **WICHTIG — Sabrinas Texte sind unangetastet:** Es wurde ausschließlich die Darstellung geändert. Automatisch gegen die Git-Fassung geprüft: alle 9 Seiten wortgleich (Zeichenvergleich des kompletten Inhaltsbereichs).
  - *Zwischenfehler, der dabei auffiel:* Die erste Skriptfassung hat Inhalte zwischen den Blöcken (`t-highlight`, `lab`) sowie Eyebrow-Label vor Überschriften verworfen. Durch den Textvergleich entdeckt und korrigiert — die Prüfung hat sich also gelohnt.
- **Footer-Version:** alle Seiten → **3.13**.
- **Feedback:** ausstehend

---

## V3.14 — „Neue Texte Forma & Hydrafacial, Forma-Video, Onetec-Dateiname"  📍 Feedback ausstehend

- **Dateien:** `forma.html`, `hydra-facial.html`, `onetec.html` (umbenannt) + alle Seiten (Links/Version)
- **Status:** lokal fertig
- **Geändert gegenüber V3.13:**
  - **Forma & Hydrafacial komplett neu** aus `Forma_Text-0726.docx` und `Hydrafacial_Text-0726.docx`. Alte Texte ersetzt. **Die Texte wurden programmatisch aus den Word-Dateien gelesen** (kein Abtippen) → Abtippfehler ausgeschlossen. Gegenprüfung: jeder Absatz aus beiden Dateien steht wortgleich auf der Seite.
  - **Sabrinas Produktionsnotizen als Platzierungshinweis behandelt, nicht als sichtbaren Text:** „Forma Geräte bild/Video", „Bilder", „Kundenfeedback Video", „Fotos", „Fotos einfügen", „Kunden Feedback einfügen", „FAQ drunter" sowie die Zusätze in „Reinigung **Bild/Video**", „Radiance **Bild Lampe**", „Longevity **Bild Lymph**". Diese Wörter erscheinen NICHT auf der Website — an ihrer Stelle stehen die jeweiligen Medien/Abschnitte. *Falls René das anders will, ist das der Punkt zum Nachjustieren.*
  - **Hero-Zeilen** aus den neuen Texten übernommen: Forma-Kicker „Transformation & Contouring" + Unterzeile „Exklusives High-End-Lifting …"; Hydrafacial-Kicker „Hydrafacial, Syndeo das Original" + „Das Geheimnis gesunder, strahlender Haut …".
  - **Neue Bausteine (Fortführung der V3.13-Bildsprache):** `.zones` (eine große Ikone je Gruppe statt 18 gleicher Mini-Icons für Gesichts-/Körperbereiche), `.stats` (die Studienzahlen 100 % / 90 % / 80 % groß gesetzt — Sabrinas Zielkundin „reagiert auf Zahlen, Daten, Fakten"), Hydrafacial-Ablauf (Reinigung/Ausreinigung/Versorgung) und die drei Stufen (Youngster/Radiance/Longevity) als Icon-Karten.
  - **Forma-Video (YouTube „Forma Animation by InMode") eingebaut — bewusst als Zwei-Klick-Lösung.** Ein direkt eingebettetes YouTube-Video lädt beim Seitenaufruf Google-Ressourcen und setzt Cookies vor jeder Einwilligung → für eine deutsche Unternehmensseite ein Abmahnrisiko. Deshalb: lokal gespeichertes Vorschaubild (`assets/forma-video-poster.jpg`, aus dem YouTube-Thumbnail auf 16:9 beschnitten), Hinweistext, und erst beim Klick wird über **youtube-nocookie.com** geladen. Messtechnisch geprüft: beim Seitenaufruf **null** Anfragen an YouTube/Google (außer den ohnehin vorhandenen Google Fonts). Dafür kam erstmals etwas JavaScript auf die Seite (wenige Zeilen, inline).
  - **`one-take.html` → `onetec.html` umbenannt** (Renés Wunsch: Dateiname soll zur Schreibweise passen). Alle Links angepasst, dazu Bilddatei `treatment-one-take.jpg` → `treatment-onetec.jpg`, Alt-Text und Meta-Description nachgezogen. Keine Reste von „one-take"/„One Take" mehr.
- **Footer-Version:** alle Seiten → **3.14**.
- **Offen:** Weitere Dateinamen weichen noch vom Behandlungsnamen ab (`hydra-facial`, `hydra-lift`, `ems-shape`, `shape-beckenboden`, `chemical-peeling`, `skin-needling`) — auf Renés Entscheidung, ob analog umbenannt wird. Außerdem: Icon-Optik aus V3.13 gefällt René „noch nicht ganz" (parkiert).
- **Feedback:** ausstehend

---

## V4.14 — „Modern Institute"  📍 Feedback ausstehend — ERSTES V4-LAYOUT

- **Dateien:** alle 17 Seiten + NEU `assets/hautnah.css`, `assets/hautnah.js`
- **Status:** lokal fertig · **Rückfall auf das alte Layout: `git tag v3.14` bzw. `archive/v3.14-layout/`**
- **Anlass (René):** „Sieht insgesamt noch nach New York Times aus, also Zeitungsdesign. […] Ich möchte ein wirklich modernes, responsives Design, gerne mit Parallax-Effekt, dezente Hover-Effekte, clean und sauber, aber modern und nicht altbacken." Farben und Inhalte sollten unverändert bleiben.
- **Warum es nach Zeitung aussah** (Analyse vor dem Umbau): zentrierter Masthead mit Wortmarke, überall 1px-Rahmen und rechteckige Kästen, gesperrte Versal-Label über jedem Block, flache Fläche ohne Tiefe, keinerlei Bewegung, Abschnitt für Abschnitt in gleicher Breite.
- **Geändert gegenüber V3.14:**
  - **Ein gemeinsames Stylesheet** `assets/hautnah.css` ersetzt das bisher **17× dupliziert eingebettete CSS**. Bewusste Abkehr von „alles inline": ein Redesign über 17 Dateien wäre sonst nicht wartbar. Klassennamen wurden beibehalten → das HTML musste nicht neu geschrieben werden, nur der Kopfbereich.
  - **Kopfbereich neu:** schmale Infozeile + **schwebende Glasleiste** (Pillenform, Blur, weicher Schatten), die beim Scrollen kompakter wird. Ersetzt Topbar + Masthead + Navigationsleiste. Logo deutlich größer und links.
  - **Hero neu:** vollflächiges Bild mit **Parallaxe**, Text darüber. Zwei Verläufe sorgen dafür, dass die Schrift auf ruhigem Grund steht und **Sabrinas Gesicht frei bleibt** (erster Entwurf lief über ihr Gesicht — korrigiert).
  - **Tiefe statt Striche:** Rundungen bis 44px, weiche warme Schatten, Hintergrund-Verläufe und ein feines Korn — nimmt der Fläche das Flache/Digitale.
  - **Bewegung, dosiert:** Inhalte blenden beim Hereinscrollen sanft ein; Kacheln heben sich beim Überfahren, Bilder zoomen leicht; Buttons füllen sich von unten; Navigationslinien wachsen von links. `prefers-reduced-motion` wird respektiert.
  - **Responsiv überarbeitet:** Burger-Menü ab 1180px (die 8 Menüpunkte + CTA passen darunter nicht mehr), mobiles Menü als fast deckendes Panel, Hero mobil Bild-über-Text und deutlich kompakter.
- **Beim Testen gefunden und behoben:** CTA ragte 86px aus der Kopfleiste · Inhalte oberhalb der Falz blendeten beim Laden ein (Seite wirkte kurz leer) · Parallaxe legte am Detailbild eine Kante frei · mobiles Menü war zu durchsichtig · Hero mobil 1842px hoch · Hero-Bild stand mobil unter dem Text.
- **Unverändert:** alle Farben (Taupe #C2B4A9 usw.), sämtliche Texte, Seitenstruktur, Icon-Bausteine aus V3.13/V3.14.
- **Footer-Version:** alle Seiten → **4.14**.
- **Feedback:** ausstehend

---

## V4.15 — „Mittige Lesespalte auf den Behandlungsseiten"  📍 Feedback ausstehend

- **Dateien:** `assets/hautnah.css` (wirkt auf alle Behandlungsseiten)
- **Anlass (René):** „Auf den Behandlungsseiten ist jetzt alles linksbündig. Mach das bitte zentriert, harmonisch fürs Auge. […] Denk immer aus Kundensicht."
- **Messung vor dem Eingriff:** Die Lesespalte hatte **124 px Luft links, 416 px rechts** — knapp 300 px Unwucht. Der Inhalt klebte links, rechts stand ein totes Feld.
- **Geändert:**
  - `.t-prose` / `.p-prose` bekommen `margin-inline:auto` → Lesespalte steht **mittig**.
  - Breite von 900 auf **730 px** reduziert. Grund: bei 900 px lagen rund **100 Zeichen** in einer Zeile — das Auge verliert beim Zurückspringen die Zeile. Jetzt ~88 Zeichen (für deutsche Langwörter angemessen).
  - Damit die Seite trotzdem großzügig wirkt, **dürfen die Bild- und Kartenbausteine** (Zonen, Studienzahlen, Fakten-Karten, Icon-Raster, ruhige Listen, Video) **über die Lesespalte hinausragen** — 910 px, auf derselben Mittelachse. Erst ab **1080 px** Fensterbreite, damit auf kleineren Bildschirmen nichts anstößt (bei 1005 px waren es nur 5 px Reserve — zu knapp).
- **Geprüft:** Forma, Hydrafacial, Crystal Peel, Bianka — überall **Unwucht 0**, kein waagerechtes Scrollen; Übergang bei 1070/1440 px gegengetestet.
- **Footer-Version:** alle Seiten → **4.15** (hintere Zahl, da Korrektur innerhalb des V4-Layouts — kein neues Layout).
- **Feedback:** ausstehend

---

## V4.16 — „Ruhige Größenstaffel"  📍 Feedback ausstehend

- **Dateien:** `assets/hautnah.css` (wirkt auf alle Seiten)
- **Anlass (René):** „Die ganzen Überschriften sind zu groß. Mach sie harmonischer zum Inhalt, sodass sie nicht so dominant überstrahlen."
- **Messung vor dem Eingriff** (Verhältnis zum Fließtext 16,5 px):

  | | vorher | nachher |
  |---|---|---|
  | h1 Seitentitel | 88 px (**×5,33**) | 46 px (×2,79) |
  | h2 Abschnitt | 58 px (×3,52) | 30 px (×1,83) |
  | Unterzeile | 27 px (×1,64) | 20 px (×1,21) |
  | Studienzahl | 58 px (×3,52) | 40 px (×2,42) |
  | **h3 Kartentitel** | 15,5 px (**×0,94**) | 17 px (×1,03) |

- **Zwei Befunde:** (1) h1 war mehr als das Fünffache des Fließtexts — die Überschriften haben den Inhalt erschlagen. (2) Der **Kartentitel war kleiner als der Fließtext** — die Hierarchie war an dieser Stelle sogar verkehrt herum.
- **Geändert:** durchgehende Staffel mit Faktor ~1,3 statt willkürlicher Sprünge. Zusätzlich Hero-Headline, Coco-Zitat, Kennzahlen und Signatur angeglichen; Zeilenabstände der Überschriften leicht erhöht (kleinere Schrift braucht etwas mehr Luft).
- **Folgekorrektur:** Durch die kleineren Überschriften war das Hero-Bild der Detailseiten plötzlich **439 px höher als der Textblock** — Bildformat von 4:5 auf 6:5,5 geändert, Überhang jetzt 263 px.
- **Footer-Version:** alle Seiten → **4.16**.
- **Feedback:** ausstehend

---

## V4.17 — „Engere Abstände + Reihenfolge Ihre Expertinnen"  📍 Feedback ausstehend

- **Dateien:** `assets/hautnah.css` (alle Seiten) + `current/ihre-expertinnen.html`
- **Anlass (René):** „Zwischen den Blöcken ist ein relativ großer Abstand. Auf ‚Ihre Expertinnen' erst Sabrina, darunter Bianka, und dann erst die Google-Bewertung. Diese Abstände sind auf jeder Seite so groß — mach sie kleiner, harmonischer fürs Auge."
- **Geändert:**
  - **Reihenfolge auf `ihre-expertinnen.html`:** war Sabrina → Google-Bewertungen → Bianka. Jetzt **Sabrina → Bianka → Google-Bewertungen**. Inhaltlich sinnvoller: erst das Team vollständig vorstellen, dann der Vertrauensbeleg.
  - **Abstände site-weit verkleinert** (gemessen, nicht geschätzt):

    | | vorher | nachher |
    |---|---|---|
    | Abschnitt (Polster je Seite) | 129,6 px | 74,9 px |
    | sichtbare Lücke zwischen Abschnitten | **259–285 px** | ~150 px |
    | Textblock innerhalb einer Seite | 52 px | 38 px |
    | Abstand unter Abschnitts-Köpfen | 54 px | 40 px |
    | Footer-Abstand | 90 px | 64 px |

  - Mobil bleiben 46 px je Seite — dort war der Abstand nie das Problem.
- **Geprüft:** Ihre Expertinnen (176/150 px), Forma (Abschnittslücken durchgehend ~150 px), mobil kein Überlauf. *Hinweis: eine Zwischenmessung zeigte „−3 px" zwischen FAQ und Verwandtem — das war ein Messartefakt der noch nicht eingeblendeten Sektion; die Boxen liegen korrekt bündig.*
- **Footer-Version:** alle Seiten → **4.17**.
- **Feedback:** ausstehend

---

## V4.18 / V4.19 — „Meisterbetrieb-Siegel, Rechtsseiten, Anfrageformular"  📍 teilweise verworfen

- **Dateien:** `current/index.html`, neue Seiten `impressum.html`, `datenschutz.html`, `agb.html`, `zusammenarbeit-anfragen.html`, `assets/hautnah.css`
- **Geändert:** Meisterbetrieb-Siegel im Hero der Startseite · Hautanalyse-Text auf Haut & Haarcheck · Rechtsseiten als Gerüst (Lücken sichtbar markiert) · Anfrageformular mit 9 Feldern (Versand noch nicht freigeschaltet) · Footer-Öffnungszeiten ohne Hover · Footer-Eintrag „Cookies" entfernt.
- **Feedback (René, 27.07.2026):** „Die Startseite sieht mit dem schwarzen Kreis, den du da reingesetzt hast, so richtig scheiße aus." → **Siegel in V4.20 wieder entfernt.**
- **Lesson:** Ein rundes Siegel mitten im Hero funktioniert bei diesem Bild nicht — es liest sich als dunkler Fleck, egal wie dezent es gestaltet ist. Ein Vertrauenszeichen gehört hier in die ruhige Fläche (Trust-Leiste, Fußzeile), nicht über das Foto.

---

## V4.20 — „Siegel raus, Haarkonzept rein, Profilseite repariert"  📍 Feedback ausstehend

- **Dateien:** `current/index.html`, neu `current/haarkonzept.html`, `current/bianka-wittulski.html`, `assets/hautnah.css`, alle 22 Seiten (Menü/Fußzeile)
- **Geändert:**
  1. **Meisterbetrieb-Siegel vollständig entfernt** — HTML aus dem Hero, CSS-Block `.mb-seal` aus dem Stylesheet. Startseite ist damit exakt wieder auf dem Stand vor V4.18 (geprüft per Diff gegen `v4.17`).
  2. **Neue Seite `haarkonzept.html`** — Gerüst mit Platzhalter-Hinweis, Aufbau wie `gutscheine.html`. Der bis dahin tote Menüpunkt „Haarkonzept" ist jetzt auf **allen 22 Seiten** in Menü und Fußzeile verlinkt.
  3. **Profilseite Bianka Wittulski neu aufgebaut.** Vorher beherrschte ein **leeres Portrait-Feld von 620 × 775 px** die Seite, daneben standen 154 px Text, die Vita begann erst bei 956 px.

     | | vorher | nachher |
     |---|---|---|
     | Portrait-Platzhalter | 620 × 775 px | 340 × 425 px |
     | Kopfbereich gesamt | 775 px | 503 px |
     | Text/Bild-Verhältnis | 154 px zu 775 px | 382 px zu 425 px |

     Text führt jetzt links, der Platzhalter steht als Nebenrolle rechts. Neu: Eckdaten-Tabelle (**seit 1997 · Deutsche Vizemeisterin · Top Elitepartnerin**) — ausschließlich Formulierungen aus Biankas eigenem Text, nichts hinzugedichtet. Schlusszeile wird zur Signatur, am Ende ein Handlungsaufruf statt eines abrupten Endes. **Vita-Text wortgleich** (per Diff gegen `HEAD` geprüft).
- **Footer-Version:** alle 22 Seiten → **4.20**. *Hintere Zahl, weil es kein neues Layout ist, sondern Korrekturen innerhalb von V4 — bei einem echten Layoutwechsel ginge es auf 5.x.*
- **Feedback:** ausstehend

---

## V4.21 — „Verwandte Behandlungen raus"  📍 Feedback ausstehend

- **Dateien:** alle 10 Behandlungsseiten + `current/forma.html` + `assets/hautnah.css`
- **Anlass (René):** „Nimm bitte auf allen Seiten den Block ‚Behandlungen, die dazu passen' komplett raus" · „Individuelle Beratung bei Forma auch komplett raus".
- **Geändert:**
  - Abschnitt `.related` („Weitere Konzepte / Behandlungen, die dazu passen" mit je 3 Karten) auf **allen 10 Behandlungsseiten** entfernt.
  - Damit ungenutztes CSS (`.related`, `.related-grid`, `.related-head`, `.rcard`) mit entfernt — nur die toten Selektoren aus den Sammel-Regeln gestrichen, `.treatment` und `.blog-card` bleiben unangetastet.
  - `forma.html`: Textblock **„Individuelle Beratung"** entfernt. *Hinweis: das war Sabrinas Originaltext aus `Forma_Text-0726.docx` — auf ausdrücklichen Wunsch von René raus.*
  - Forma dadurch von ~7500 px auf 6953 px Seitenlänge.
- **Geprüft:** Fließtext aller 22 Seiten per Diff gegen `HEAD` — es fehlen ausschließlich die beabsichtigten Blöcke, nichts wurde still verschluckt. Abschnittskette ohne Lücken (jede Sektion endet exakt dort, wo die nächste beginnt).
- **Offen:** Die Behandlungsseiten enden jetzt mit dem FAQ; das CTA-Band steht davor. Falls der Handlungsaufruf ans Seitenende soll, ist das ein separater Schritt.
- **Footer-Version:** alle 22 Seiten → **4.21**.
- **Feedback:** ausstehend

---

## V4.22 — „Button ans Seitenende, Kopfleiste repariert"  📍 Feedback ausstehend

- **Dateien:** alle 10 Behandlungsseiten + `assets/hautnah.css`
- **Anlass (René):** „Setz den Button direkt nach unten, unter den Q&A-Block" · „Der Button ‚Zusammenarbeit anfragen' ist außerhalb des Bereiches" (mit Screenshot).
- **Geändert:**
  1. **CTA-Band hinter die FAQ verschoben** — auf allen 10 Behandlungsseiten. Neue Reihenfolge: Hero → Inhalt → Vorher/Nachher → Kundenstimmen → FAQ → **Button** → Footer. Der Handlungsaufruf ist damit das Letzte vor der Fußzeile.
  2. **Kopfleiste lief über.** Der Menüblock passte erst ab ~1400 px, der Hamburger kam aber erst unter 1180 px — dazwischen ragte der CTA-Button aus der Glasleiste heraus (bei **1280 px um 60 px**). Behoben, indem Menüschrift, Abstände, Logohöhe und Button-Polster **fluid** wurden (`clamp` statt fester Werte) und der **Hamburger-Breakpoint von 1180 auf 1240 px** wandert.

     | Breite | Platz | Bedarf | Rest |
     |---|---|---|---|
     | 1250 px | 1060 | 976 | **+84** |
     | 1280 px | 1090 | 980 | **+110** |
     | 1366 px | 1176 | 1038 | **+138** |
     | 1440 px | 1250 | 1089 | **+161** |
     | 1920 px | 1258 | 1145 | **+113** |

     Unter 1240 px greift das Hamburger-Menü — geprüft bei 1230 px.
- **Geprüft:** Wortbestand aller 22 Seiten per Diff gegen `HEAD` identisch (die Verschiebung hat nichts verloren). Abschnittskette auf Forma lückenlos, CTA-Band steht direkt vor dem Footer.
- **Footer-Version:** alle 22 Seiten → **4.22**.
- **Feedback:** ausstehend

---

## V4.23 — „Footer gestapelt, Menü lesbar, Buttonschrift weiß"  📍 Feedback ausstehend

- **Datei:** `assets/hautnah.css` (wirkt auf alle 22 Seiten)
- **Anlass (René):** „Mach im Footer Impressum, AGB, Datenschutz wieder untereinander" · „Im Menüband hast du zwischen Logo und Menüpunkten noch Platz, schieb die Menüpunkte nach links und mach sie etwas größer" · „Die Schrift des Buttons muss weiß sein".
- **Geändert:**
  1. **Footer-Listen wieder untereinander.** Ursache war der Hover-Fix aus V4.18: `footer ul li:has(a){display:inline-block}` hat das **`<li>` selbst** inline gemacht — dadurch standen nicht nur Impressum/AGB/Datenschutz, sondern auch die **ganze Verzeichnis-Spalte** nebeneinander. Jetzt bleibt das `<li>` `block`, nur der `<a>` ist `inline-block` (das braucht die Hover-Verschiebung). **Der V4.18-Fix bleibt erhalten:** auf den Geschäftszeiten liegt weiterhin kein Zeigefinger.
  2. **Menü nach links.** `.site-nav` war per `margin-left:auto` ganz nach rechts geschoben — daher die Lücke hinter dem Logo. Jetzt `flex:1` mit `ul{margin-right:auto}`: die Punkte stehen direkt neben dem Logo (Abstand 19–27 px statt ~90 px), der Button bleibt rechts.
  3. **Menüschrift von 9,2 px auf 11–12 px**, Laufweite von .08em auf .055em — deutlich besser lesbar.
  4. **Buttonschrift weiß.** `.site-nav a{color:var(--ink)}` hatte die Farbe von `.btn-primary` überschrieben → Espresso auf Taupe, schlechter Kontrast. Jetzt explizit `--paper`, auch im Hover.
  5. **Hamburger-Breakpoint 1240 → 1320 px.** Die größere Schrift passt darunter nicht ohne Überlauf. Bewusste Abwägung: lieber ein sauberes Menü ab 1320 px und darunter der Hamburger als eine gequetschte 9-px-Leiste.

     | Breite | Rest |
     |---|---|
     | 1330 px | +35 |
     | 1400 px | +55 |
     | 1440 px | +88 |
     | 1920 px | +34 |
- **Geprüft:** alle vier Footer-Spalten stapeln (Verzeichnis 8, Geschäftszeiten 3, Rechtliches 3), Zeigefinger nur auf Links · Buttonfarbe `rgb(250,246,239)` · mobil (900 px) Hamburger rechts, Panel öffnet, kein Querüberlauf.
- **Footer-Version:** alle 22 Seiten → **4.23**.
- **Feedback:** ausstehend

---

## V4.24 — „Haarkonzept inhaltlich aufgebaut"  📍 Feedback ausstehend

- **Dateien:** `current/haarkonzept.html`, `assets/hautnah.css`
- **Quelle:** `Haarkonzept.docx` (programmatisch ausgelesen, nicht abgetippt)
- **Aufbau — identisch zu den Behandlungsseiten:** Breadcrumb → Hero (Kicker, H1, Unterzeile, zwei Handlungsaufrufe, Bildplatzhalter) → mittige Lesespalte mit 5 Textblöcken → Kundenstimmen → CTA-Band → Footer.
- **Textkontrolle:** alle **15 Absätze wortgleich** übernommen und einzeln gegen die .docx geprüft.
- **Zwei Zeilen bewusst NICHT abgedruckt** (Produktionsnotizen, keine Website-Texte):
  - „Logo Haarbalance" → stattdessen ein sichtbarer Platzhalter-Hinweis, dass Logo und Bildmaterial fehlen.
  - „Whatsapp butten, geht voreingestllt Haaranamnesbogen?" → Renés Frage an mich, siehe unten.
- **WhatsApp-Button** mit vorbelegtem Stichwort: `wa.me/497762805669?text=Haaranalyse`, daneben der Telefonlink. Der Anamnesebogen kann **nicht** automatisch mitgeschickt werden — dafür bräuchte es die WhatsApp Business API mit genehmigter Vorlage. Sabrina sendet ihn nach Eingang der Nachricht.
- **Vier Verzichts-Begriffe** (ohne Silikone/Sulfate/Parabene/Mineralöle) als Icon-Raster hinter dem zugehörigen Satz. **Bewusst ohne erklärende Zusatzsätze** — die stünden nicht in Sabrinas Text. (Ein erster Entwurf hatte solche Sätze, sie sind wieder raus.)
- **Kein FAQ-Abschnitt**, weil die .docx keine Fragen enthält — nicht erfunden.
- **Footer-Version:** alle 22 Seiten → **4.24**.
- **Feedback:** ausstehend

---

## V4.25 / V4.26 — „Reihenfolge Haarkonzept + korrigierte Öffnungszeiten"  📍 Feedback ausstehend

- **V4.25 — Haarkonzept, Reihenfolge getauscht.** Vorher Kundenstimmen → CTA-Band, jetzt **CTA-Band („Wir fangen da an, wo der Friseur aufhört.") → Google-Rezensionen → Footer**. Nur auf `haarkonzept.html`; die 10 Behandlungsseiten behalten bewusst FAQ → CTA am Ende (V4.22). Wortbestand per Diff unverändert.
- **V4.26 — Öffnungszeiten korrigiert (René, 28.07.2026)**, auf **allen 22 Seiten** in Kopfleiste **und** Fußzeile:

  | | vorher | jetzt |
  |---|---|---|
  | Kopfleiste | Mo · Di · Mi · Fr · 10–18 Uhr | **Mo–Mi 10–18 Uhr · Fr 10–13 Uhr** |
  | Fußzeile | Mo · Di · Mi · Fr / 10 – 18 Uhr | **Mo – Mi 10:00–18:00 · Fr 10:00–13:00 · Do geschlossen** |

  In der Kopfleiste bleibt es bei einer Zeile (Länge praktisch identisch zur alten Angabe, bei 1440 px und 1280 px nachgemessen, kein Umbruch, kein Überlauf). „Do geschlossen" steht in der Fußzeile, weil dort der Platz für die vollständige Angabe ist.
- **Footer-Version:** alle 22 Seiten → **4.26**.
- **Feedback:** ausstehend

---

## V4.27 — „Preise + Ihre Experten"  📍 Feedback ausstehend

- **Dateien:** neu `current/preise.html`, umbenannt `ihre-expertinnen.html` → `ihre-experten.html`, alle 23 Seiten, `assets/hautnah.css`
- **Anlass (René):** „Baue im Menü zwischen ‚Ihre Expert*innen' und ‚Gutscheine' einen weiteren Punkt ‚Preise' ein, erstelle die Seite — die Preisliste kommt nachträglich." · „Ändere Ihre Expertinnen in Ihre Experten."
- **Geändert:**
  1. **Menüpunkt „Preise"** an der gewünschten Stelle, auf **allen 23 Seiten** in Navigation **und** Fußzeile. `preise.html` ist ein Gerüst mit sichtbarem Platzhalter („die Preisliste wird ergänzt, sobald sie von Sabrina vorliegt").
  2. **„Ihre Expertinnen" → „Ihre Experten"** — Beschriftung, Seitentitel, Breadcrumbs **und Dateiname**. Alle Links umgehängt, Linkprüfung über alle 23 Seiten: keine toten Verweise. Die alte URL `/ihre-expertinnen.html` gibt jetzt 404.
  3. **Kopfleiste trägt jetzt 9 Punkte.** Der neue Punkt hätte die Leiste gesprengt (bei 1330 px waren nur noch 5 px Rest). Angepasst: Menüschrift `clamp(10.5px, .78vw, 12px)`, Laufweite .045em, engere Maximalabstände.

     | Breite | Rest vorher | Rest jetzt |
     |---|---|---|
     | 1330 px | 5 | **59** |
     | 1440 px | — | **101** |
     | 1920 px | 24 | **37** |

     Schriftgröße bleibt bei 10,5–12 px und damit deutlich über den ursprünglichen 9,2 px.
- **Footer-Version:** alle 23 Seiten → **4.27**.
- **Feedback:** ausstehend

---

## V4.28 — „Siegel Anlauf 2, Haarbalance-Logo, Aktuelles"  📍 Feedback ausstehend

- **Dateien:** `current/index.html`, `current/haarkonzept.html`, neu `current/aktuelles.html`, neu `assets/haarbalance-logo.png` + `assets/zeitungsartikel-2026.jpg`, `assets/hautnah.css`
- **1. Meisterbetrieb-Siegel, zweiter Anlauf** (rechts oben im Hero, neben Sabrinas Kopf).
  **Warum der erste Versuch scheiterte:** V4.18 war eine helle, **undurchsichtige** Scheibe. Gemessen ist der Bereich rechts oben heller warmer Sandstein (Helligkeit 184, nach dem dunklen Verlauf noch ~157) — eine cremefarbene Scheibe mit hartem Schlagschatten liegt dort als Fremdkörper auf dem Foto. Dazu kam eine Drehung um −8°, die es endgültig nach Aufkleber aussehen ließ.
  **Jetzt:** getöntes Glas mit Unschärfe — dieselbe Sprache, die auf diesem Foto links oben schon existiert (`.hero-badge`, das 5★-Glas-Pill). Feine Doppelkontur, cremefarbene Schrift, weicher Halo statt Schlagschatten, **keine Drehung**. Man sieht die Wand durch das Siegel hindurch, es liegt *im* Bild statt darauf.
  Mobil auf 80 px verkleinert und eingerückt (`right:36px`) — vorher ragte es 6 px über die abgerundete Bildkante. Kein Überlappen mit Badge oder Überschrift (geprüft bei 375 px).
- **2. Haarbalance-Logo** auf `haarkonzept.html`: aus `Haarbalance.jpg` freigestellt (weißer Rand abgeschnitten, Weiß auf transparent mit weichem Übergang), als PNG auf 720 px Breite. Steht über der Überschrift — genau dort, wo in der .docx die Notiz „Logo Haarbalance" stand. Der Platzhalter-Hinweis nennt jetzt nur noch das fehlende Bildmaterial.
- **3. Neue Seite `aktuelles.html`** mit dem Zeitungsartikel der Badischen Zeitung („Ein seltener Meistertitel", 28.03.2026). Klick öffnet eine **scrollbare Großansicht** (reines CSS über eine versteckte Checkbox, wie beim mobilen Menü), zusätzlich „In neuem Tab öffnen" für volles Zoomen. Mit Quellenangabe (Zeitung, Datum, Text und Foto: Annemarie Rösch). Der Menüpunkt „Aktuelles" ist damit kein toter Eintrag mehr — es bleibt nur noch **„Kontakt"**.
  ⚠️ **Rechtlicher Hinweis, siehe CLAUDE.md:** Ein vollständiger Zeitungsscan ist urheberrechtlich geschützt. Vor dem Livegang auf der Kundendomain braucht Sabrina die Freigabe der Badischen Zeitung.
- **Footer-Version:** alle 24 Seiten → **4.28**.
- **Feedback:** ausstehend

---

## V4.29 — „Siegel weiß und groß, Kennzahlen korrigiert"  📍 Feedback ausstehend

- **Dateien:** `current/index.html`, `assets/hautnah.css`
- **Anlass (René):** „Kannst du das Siegel größer machen? Vielleicht auch in Weiß, sodass es sich wirklich rund abhebt." · „20+ Jahre Erfahrung → Sabrina ist seit 2004 Kosmetikerin." · „5 Sterne → erstes Fachinstitut für dermatologische Kosmetik Landkreis Waldshut."
- **Geändert:**
  1. **Siegel jetzt weiß und groß.** 132–196 px statt 104–138 px, weiße Scheibe (Verlauf Weiß → Papierton, damit sie Volumen hat). Damit sie sich auf der hellen Steinwand rund abhebt, drei Mittel: warmer Schlagschatten, der die Wand dahinter abdunkelt · feiner heller Außenring als Trennung zum Foto · leichter Lichtverlauf. Weiterhin keine Drehung und kein Kunststoff-Glanz. Bei 1440 px: 194 px groß, 46 px vom rechten Rand, kein Überlappen mit Text oder Badge.
  2. **„20+ Jahre Erfahrung" → „2004 / Kosmetikerin seit"**.
  3. **„5★ Erstes Fachinstitut Lk. Waldshut" → „5★ erstes Fachinstitut für dermatologische Kosmetik · Lk. Waldshut"** (nur „Landkreis" abgekürzt, wie gewünscht).
  4. **Latenter Fehler behoben:** `.num` und `.label` in den Kennzahlen waren `inline`, standen also nebeneinander statt untereinander — das `margin-top:8px` auf dem Label lief ins Leere. Mit dem längeren Text ist die Reihe dadurch umgebrochen. Jetzt gestapelt, beide Kennzahlen stehen wieder nebeneinander.
  5. **Dritter Kennzahl-Eintrag entfernt.** Er hatte gar keine Zahl (leeres `.num`) und nur „Ästhetische Konzepte" — nach dem Umbruch stand er allein in der zweiten Zeile. Falls dort eine dritte Kennzahl stehen soll, fehlt die Angabe.
- **Offen:** Die Formulierung „Erstes 5-Sterne-Fachinstitut · Landkreis Waldshut" steht unverändert auch in der **Infozeile (alle 24 Seiten)**, im **Hero-Badge** und in der **Trust-Leiste**. Nicht automatisch mitgezogen — René fragen.
- **Footer-Version:** alle 24 Seiten → **4.29**.
- **Feedback:** ausstehend

---

## V4.30 — „Logo mittig, Sprache korrigiert, Stern leuchtet"  📍 Feedback ausstehend

- **Dateien:** `current/index.html`, `assets/hautnah.css`
- **Geändert:**
  1. **Haarbalance-Logo zentriert** (`haarkonzept.html`) — vorher linksbündig, jetzt exakt mittig in der Spalte (Abweichung 0 px gemessen).
  2. **„2004 / Kosmetikerin seit" war im Deutschen sinnlos.** Jetzt **„seit 2004" über „Kosmetikerin"** — das „seit" läuft klein, ruhig und hochgestellt mit, damit die Jahreszahl die Hauptrolle behält und die Zeile trotzdem sauber lesbar ist.
  3. **Der 5-Sterne-Stern ging optisch unter.** Jetzt reinweiß mit warmem Creme-/Taupe-Halo (dreifacher `text-shadow`) und einem ruhigen Pulsieren über 3,6 s. **Kein Gold** — die Markenregel bleibt gewahrt, das Leuchten kommt aus Weiß, Sand und Taupe. `prefers-reduced-motion` schaltet die Animation ab.
- **Footer-Version:** alle 24 Seiten → **4.30**.
- **Feedback:** ausstehend

---

## Vorlage für nächsten Eintrag

```
## V3.1 — „[Codename]"  📍

- **Datei:** `current/index.html`
- **Status:** [aktuell / verworfen / Feedback ausstehend]
- **Konzept:** [Was kennzeichnet diese Version]
- **Geändert gegenüber V3:**
  - [Konkrete Änderung 1]
  - [Konkrete Änderung 2]
- **Feedback:** [Sabrinas / Renés Rückmeldung]
- **Lesson:** [Was haben wir aus dieser Iteration gelernt]
```

---

## Deployment

- **Live (Netlify):** https://kosmetikinstitut-hautnah.netlify.app
- **Projekt:** `kosmetikinstitut-hautnah` · Account `reneroettger`
- **Publish-Verzeichnis:** `_site/` (Build: HTML aus `current/` + `assets/` auf eine Ebene kopiert, Bildpfade `../assets/` → `assets/` umgeschrieben)
- **Redeploy:** `_site/` neu zusammenbauen, dann `npx netlify-cli deploy --dir=_site --prod --site=131d403c-b7a0-4526-8b36-09edca0a6d20`
- Footer-Versionsnummer vor jedem Deploy auf den aktuellen Stand bringen.

---

*Stand: V3.1 „Erste Unterseiten" — live auf Netlify, wartet auf Sabrinas Feedback.*
