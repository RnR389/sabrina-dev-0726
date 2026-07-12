# Versions-Historie

Diese Datei dokumentiert alle Iterationen des Hautnah-Website-Designs.
**Bei jeder neuen Version hier nachtragen.**

---

## Versions-Konvention

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
