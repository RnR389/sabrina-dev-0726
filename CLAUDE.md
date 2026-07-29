# Kosmetikinstitut Hautnah — Website-Projekt

**Status:** Lokal **V4.39**, live steht eine Wartungsseite (Deploys von René gestoppt). Zuletzt live war V4.35 „Modern Institute“** — live auf GitHub Pages.

Dieses Dokument ist deine vollständige Briefing-Grundlage. Lies es zuerst, bevor du irgendwas an diesem Projekt machst. Hier steckt alles, was bisher in stundenlanger Vorarbeit geklärt wurde — überspring es nicht, sonst wiederholst du Fehler, die wir schon einmal gemacht haben.

---

# ⚠️ STAND 27.07.2026 — DIESER BLOCK GILT (überschreibt Älteres weiter unten)

Alles unterhalb dieser Linie ist die **Historie von V1–V3**. Wo sie diesem Block widerspricht, gilt **dieser Block**.

## Versionsregel (René, 27.07.2026)
- **Layout geändert → vordere Zahl hoch:** 3.14 → **4.14**
- **Inhalt geändert → hintere Zahl hoch:** 4.14 → 4.15 → 4.16 …
- Footer-Version auf **allen** Seiten mitziehen + Eintrag in `VERSIONS.md`.
- **Aktuell lokal: V4.39** · zuletzt deployt: V4.35

## Rückfall-Punkte (jederzeit zurückspringen)
| Marke | Stand |
|---|---|
| `v3.14` | letztes **altes** Layout (Zeitungsoptik) — zusätzlich physisch in `archive/v3.14-layout/` |
| `v4.14` | erstes modernes Layout |
| `v4.16` | ruhige Größenstaffel |
| `v4.17` | engere Abstände |

Zurück: `git checkout v3.14 -- current/`, danach `_site/` neu bauen. Tags liegen auf GitHub.

## Technik — WICHTIG, hat sich geändert
- **Es gibt EIN gemeinsames Stylesheet: `assets/hautnah.css`** (+ `assets/hautnah.js`). Das früher in jede Seite kopierte CSS ist **weg**. Aussehen ändert man **dort**, nicht pro Seite.
- Bewegung: `[data-reveal]` (Einblenden beim Scrollen) und `[data-parallax]` (Hero-Bilder). Zwei Fallen, beide bereits behoben — **nicht wieder einbauen**:
  1. Was beim Laden sichtbar ist, muss **sofort** sichtbar sein (sonst wirkt die Seite leer).
  2. Parallaxe-Bilder brauchen Überstand (`height:114%`), sonst legt die Verschiebung eine Kante frei.
- `prefers-reduced-motion` wird respektiert.
- **Nach jeder CSS-Änderung `assets/hautnah.css` nach `_site/assets/` kopieren**, sonst zeigt die Vorschau Altes.
- **⚠️ CSS und JS werden mit `?v=<Version>` eingebunden — Stempel bei JEDER Version mitziehen** (wie die Footer-Versionsnummer). Bis V4.34 fehlte er: René bekam neues HTML mit altem CSS aus dem Cache und meldete drei Fehler, die es im Build gar nicht gab (Logos untereinander, Footer-Logo klein, Social-Icons schwarz und riesig). **Ergebnisse immer auf der Live-Seite nachmessen, nicht nur lokal.**

## Live / Deploy
- **Live: https://rnr389.github.io/sabrina-dev-0726/** (GitHub Pages)
- Build: `current/*.html` + `assets/` → `_site/`, dann Pfade `../assets/` → `assets/` umschreiben, `.nojekyll` anlegen.
- Deploy: `main` pushen, dann `git subtree split --prefix _site` → force-push nach `gh-pages`.
- **Netlify ist tot** (keine Credits) — nicht mehr verwenden.

## Seitenbestand (21 Seiten)
Startseite · Ästhetische Konzepte · **10 Behandlungen** · Haarkonzept · Ihre Experten · Bianka Wittulski · Preise · Gutscheine · Zahlungsoptionen · **Aktuelles** · Blog · Zusammenarbeit anfragen · Impressum · Datenschutz · AGB — **24 Seiten**

## Daten & Fakten zu Sabrina Herosé (von René, 29.07.2026 — verbindlich)

| Was | Wann | Quelle |
|---|---|---|
| **Gewerbeanmeldung** | **16.12.2002** | René, 29.07.2026 |
| **Meisterprüfung** | **2024** | René, 29.07.2026 |
| **Meisterbrief erhalten** | **2025** | René, 29.07.2026 |

**Weitere gesicherte Angaben**
- Berufsbezeichnungen: Kosmetikmeisterin · Bachelor Professional · pharmazeutisch-technische Assistentin (PTA) · Buchautorin · Fitnesstrainerin
- Zuständige Kammer: **Handwerkskammer Konstanz** (`www.hwk-konstanz.de`)
- USt-IdNr.: **DE363582666** · Rechtsform: **Einzelunternehmen**
- E-Mail: **kontakt@hautnah-wehr.de** — kein E-Mail-Support für Kundenanfragen, Termine nur telefonisch oder per WhatsApp
- Telefon & WhatsApp: **+49 7762 805669** · Hauptstraße 3, 79664 Wehr
- Öffnungszeiten: **Mo–Mi 10:00–18:00 · Fr 10:00–13:00 · Do geschlossen**
- Seit 2016 Spezialisierung auf Medical Beauty und ästhetische Hautkonzepte
- Hosting: **ALL-INKL.COM – Neue Medien Münnich**, Friedersdorf

**✅ ENTSCHIEDEN (René, 29.07.2026) — nicht neu aufrollen:**
- **Meisterprüfung: 2024.** So steht es in Sabrinas Bio-Text („2024 folgte der Meisterabschluss / Bachelor Professional") und so bleibt es. Dass die Badische Zeitung im Artikel auf `aktuelles.html` den 28. Januar 2025 nennt, ist bekannt und akzeptiert.
- **Startjahr: 2004 bleibt stehen.** Die Kennzahl im Hero lautet weiter „seit 2004 · Kosmetikerin", obwohl das Gewerbe am 16.12.2002 angemeldet wurde. Nicht auf 2002 ändern.
- Sabrinas Bio-Text sagt an einer Stelle „Seit 2003 bin ich selbstständig" — das ist ihr Originaltext und bleibt unangetastet.

## Namens- und Schreibregeln (verbindlich)
- Reihenfolge: **Haut & Haarcheck · Forma® · Hydrafacial® · Hydralift · Medical Beauty Spezial Skin Needling · Chemische Peelings · Crystal Peel · Onetec® · EMShape X® · EMShape X® Beckenboden**
- **®** (als `&reg;`) nur bei: Forma, Hydrafacial, Onetec, EMShape X, EMShape X Beckenboden.
- **„Pharma" gibt es nicht mehr** (Seite gelöscht).
- Menü heißt **„Ihre Experten"** (Datei `ihre-experten.html`) — **Stand 28.07.2026**. Vorher „Ihre Expertinnen" (V3.12–V4.26), davor „Über uns". René hat zurück auf die männliche/neutrale Form gewechselt.
- **Bianka** immer mit K.
- Noch offen: Dateinamen `hydra-facial`, `hydra-lift`, `ems-shape`, `shape-beckenboden`, `chemical-peeling`, `skin-needling` passen noch nicht zur Schreibweise — René fragen.

## Farben (gültig, ersetzen die alte Tabelle weiter unten)
`--paper #FAF6EF` · `--creme #E9E3DA` · `--sand #DFD7CD` · **`--taupe #C2B4A9` (FINAL)** · `--taupe-dark #6F655D` · `--ink #3A322C` (Espresso, **nie Schwarz**) · `--silver #C9C9CE`

**Kein Gold. Kein Schwarz. Eine Schrift: Outfit.**  Alle dunklen Flächen (Buttons, Footer, CTA-Bänder, Infozeile) sind **Taupe**, nicht Espresso — Espresso nur für Text.

## Texte — die Regel, an der nicht gerüttelt wird
- Sabrinas Texte werden **wortwörtlich** übernommen. Nicht kürzen, nicht glätten, nicht umstellen.
- **Immer programmatisch aus der .docx lesen**, nie abtippen. Danach Absatz für Absatz gegenprüfen.
- **Produktionsnotizen sind KEIN Website-Text:** „Fotos einfügen", „Kundenfeedback Video", „Bilder", „FAQ drunter", „Bild/Video", „Bild Lampe", „Bild Lymph". Sie sagen, **wo** Medien hingehören — niemals abdrucken.
- Bereits eingebaut: `Forma_Text-0726.docx`, `Hydrafacial_Text-0726.docx`, `Hautanalyse-0726.docx`, `Haarkonzept.docx` (V4.24).
- **Ausnahme V4.21:** Der Block „Individuelle Beratung" aus `Forma_Text-0726.docx` ist auf Renés ausdrücklichen Wunsch **entfernt** — nicht versehentlich, nicht wieder einbauen.
- **Kein „Behandlungen, die dazu passen" mehr.** Der `.related`-Abschnitt ist seit V4.21 von allen 10 Behandlungsseiten entfernt (René), samt CSS. Nicht neu anlegen.
- **Du/Sie ist jetzt gemischt (V4.32):** Der Vorstellungsblock auf der Startseite steht in der **Du**-Form (Text von René so geschickt, 1:1 übernommen), Hero und alle anderen Seiten in der **Sie**-Form. Zusätzlich wiederholt der zweite Absatz fast wörtlich die Hero-Zeile darüber. **Entscheidung von René/Sabrina steht aus** — nicht eigenmächtig angleichen.
- **Helle Schrift auf dem Hero-Foto:** immer Cremeweiß (`--paper`), nie Sand oder Taupe. In V4.29/4.30 standen „seit" und der Stern in Sand-Taupe und gingen auf dem Foto unter (René per Screenshot). In V4.31 behoben.

## Partnerlogos (V4.34)
Quelle: Ordner `PartnerLogos/`. Aufbereitet nach `assets/partner/` — freigestellt, **einfarbig `--taupe-dark`**, jedes in dieselbe Box 520 × 150 px eingepasst. So wirken alle gleich groß. **Neues Logo ergänzen:** gleich behandeln, sonst fällt es aus der Reihe. Das Band braucht die Reihe **doppelt** im HTML (Animation läuft bis −50 %), sonst reißt der Umlauf.
*Das Einfärben verändert die Markendarstellung — üblich für Partnerleisten, aber falls ein Hersteller Originalfarben verlangt, umstellen.*

## Medien & Recht
- **Videos vor dem Deploy neu kodieren.** GitHub blockt >100 MB. Der Onetec-Film kam mit 310 MB → per ffmpeg auf 46 MB (`-crf 28 -preset medium -movflags +faststart`, 1080p). Einbau immer `controls preload="none"` + Poster, **nie** Autoplay.
- **YouTube nur als Zwei-Klick-Lösung** (Muster auf `forma.html`): lokales Vorschaubild, Laden erst per Klick über `youtube-nocookie.com`. Direktes Einbetten setzt Cookies vor Einwilligung → Abmahnrisiko. Vorschaubilder **lokal** speichern.
- **Fremdbilder immer kennzeichnen.** Die Forma-Vorher-Nachher-Bilder sind InMode-Klinikbilder fremder Behandler, **nicht** Sabrinas Kundinnen → Credit + Hinweiskasten. Nie als eigene Ergebnisse darstellen.
- **Testimonials nur echt.** Die Google-Rezensionen (4,8★ / 65) sind wortgetreu zitiert, Nachnamen abgekürzt. Niemals erfinden oder umformulieren.
- **Rechtsseiten enthalten bewusst KEINE erfundenen Rechtstexte.** Impressum/Datenschutz/AGB sind Gerüste mit klar markierten Lücken („Von Sabrina auszufüllen"). Erfundene AGB oder Datenschutzerklärungen hätten für Sabrina echte rechtliche Folgen.

## Anfrageformular (`zusammenarbeit-anfragen.html`)
Alle CTA-Buttons zeigen dorthin. Felder: Name · E-Mail · Telefon · wichtigstes Hautanliegen · bisherige Erfahrungen · bevorzugter Kontaktweg · Terminwunsch (optional).

**Versand ist noch NICHT aktiv** (Dienst nicht entschieden) → Felder deaktiviert, sichtbarer Hinweis mit Telefonnummer. Die Bestätigung („Wir melden uns innerhalb von zwei Werktagen") liegt fertig im Code, ist aber `hidden` — sie darf **erst** erscheinen, wenn wirklich versendet wird, sonst wartet jemand auf einen Rückruf, der nie kommt. Zum Freischalten: Dienst wählen (z. B. Formspree), Felder aktivieren, Datenschutz ergänzen.

## Meisterbetrieb-Siegel — zweiter Anlauf steht (V4.28)
**V4.18 scheiterte:** helle, undurchsichtige Scheibe, hart geschattet, um −8° gedreht → René: „sieht mit dem schwarzen Kreis so richtig scheiße aus." In V4.20 komplett entfernt.
**V4.29 gilt (Stand 28.07.2026):** **weiße** Scheibe, 132–196 px, rechts oben im Hero. René wollte sie ausdrücklich groß und weiß, „sodass sie sich wirklich rund abhebt". Damit eine helle Scheibe auf der hellen Steinwand nicht flach wirkt: **warmer Schlagschatten** (dunkelt die Wand dahinter ab) + **feiner heller Außenring** + **leichter Lichtverlauf** für Volumen. **Keine Drehung, kein Kunststoff-Glanz** — das war der Sticker-Look.

**Regel daraus:** Nicht die Farbe war das Problem, sondern die fehlende Ablösung vom Untergrund. Ein Element auf dem Hero-Foto braucht entweder die Glas-Sprache (durchscheinend) **oder** eine deutliche Ablösung durch Schatten und Außenring. Vorher immer die Helligkeit der Zielstelle messen.

**Nur belegte Aussagen aufs Siegel.** Ein Entwurf hatte „HANDWERKSKAMMER" als dritte Zeile — wieder raus, weil die Aussage so nicht belegt ist. Drauf steht: Kosmetikmeisterin · MEISTERBETRIEB · Sabrina Herosé · Wehr.

## Presse / Zeitungsartikel — Rechtelage beachten
`aktuelles.html` zeigt den vollständigen Scan eines Artikels der **Badischen Zeitung** (28.03.2026, Text und Foto: Annemarie Rösch), inklusive Quellenangabe und Großansicht. **Ein kompletter Zeitungsscan ist urheberrechtlich geschützt** — für die öffentliche Kundendomain braucht Sabrina die Freigabe des Verlags. Für den Entwicklungsstand in Ordnung, vor dem Livegang klären. Gleiche Kategorie wie die Rechtsseiten und die InMode-Fremdbilder.

## Profilseite Bianka Wittulski (V4.20)
Solange **kein Portraitfoto** vorliegt, darf der Platzhalter nicht die Hauptrolle spielen. Vorher: leeres Feld 620 × 775 px neben 154 px Text — René: „sieht sehr kacke aus". Jetzt: Text führt links, Platzhalter 340 × 425 px rechts, dazu eine Eckdaten-Tabelle (**seit 1997 · Deutsche Vizemeisterin · Top Elitepartnerin**) — **ausschließlich Formulierungen aus Biankas eigenem Text**, nichts hinzugedichtet. Schlusszeile als Signatur, am Ende ein Handlungsaufruf. Sobald das Foto da ist: `<img>` in `.p-portrait` statt `.ph`, Rest bleibt.

**Gilt allgemein:** Ein Platzhalter darf nie größer sein als der Inhalt, den er vertritt.

## Kopfleiste — Falle, die schon zweimal zugeschlagen hat
Die Menüleiste hat seit V4.27 **9 Punkte + CTA-Button** und ist damit an der Breitengrenze. Alle Maße sind seit V4.22 **fluid** (`clamp`), der Hamburger greift seit V4.23 **unter 1320 px** (vorher 1240 — die größere, lesbarere Menüschrift braucht den Platz). Menü sitzt links am Logo (`.site-nav{flex:1}` + `ul{margin-right:auto}`), Buttonschrift ist explizit `--paper`, weil `.site-nav a` sonst Espresso erzwingt. **Wer einen Menüpunkt hinzufügt oder ein Label verlängert, muss zwingend bei 1250 / 1280 / 1366 px nachmessen** — sonst ragt der Button wieder aus der Glasleiste. Messformel: `brand + head-gap + ul.scrollWidth + nav-gap + cta` gegen `head-inner.clientWidth − Polster`.

## Footer-Listen — Falle
`display:inline-block` gehört auf den **`<a>`**, niemals auf das **`<li>`**. Ein `footer ul li:has(a){display:inline-block}` (V4.18, für die Hover-Verschiebung gedacht) hat alle Footer-Einträge in eine Zeile gelegt — Impressum/AGB/Datenschutz nebeneinander statt untereinander. In V4.23 korrigiert.

## Arbeitsweise mit René — was sich bewährt hat
- **Bei Unklarheit vorher fragen, nicht hinterher korrigieren lassen.** René, 28.07.2026: „Ich hab keinen Bock, immer zu korrigieren. Wenn du Fragen hast, frag vorher."
- **Bei Fehlermeldungen zuerst die Ursache suchen, nicht das Symptom umgestalten.** „Der Stern geht unter" war ein Farbfehler, kein fehlendes Leuchten. „Die Logos stehen untereinander" war der fehlende Cache-Stempel, kein Layoutfehler.
- **Erst messen, dann ändern.** „Zu groß" / „zu viel Abstand" immer im Browser nachmessen und die Zahlen nennen (h1 war 5,3× der Fließtext; Abstände waren 259–285 px).
- **Nach jedem Umbau gegen git prüfen**, ob Sabrinas Texte unverändert sind — ein Skript hatte schon einmal still Inhalte verschluckt.
- Ändert man etwas auf einer Seite: **fragen, bevor man es auf alle überträgt.**
- Nicht überimplementieren, aber **echte Folgeprobleme mitlösen** und benennen.

## Offene Punkte
1. **NiSV-Siegel platzieren.** Datei liegt fertig unter `assets/nisv-siegel.png` (rund freigestellt, 640 px). War kurz im Hero (zu gedrängt neben dem Meisterbetrieb-Siegel) und in der Fußzeile — René: „nimm es erst nochmal raus, packe es auf die noch-erledigen-Liste." **Offene Frage: wo soll es hin?** Denkbar: eigener Vertrauensabschnitt auf der Startseite · auf `aesthetische-konzepte.html` (dort gehören die apparativen Behandlungen hin, für die der Nachweis gilt) · in der Trust-Leiste.
2. **Meisterbetrieb-Siegel** ist seit V4.41 Sabrinas fertige Datei — erledigt.
2. **Icon-Optik (V3.13) gefällt René „noch nicht ganz"** — beim Wiederaufgreifen nachfragen, was genau stört.
2. **Blog-Backend**, damit Sabrina selbst Beiträge einstellen kann (Decap CMS / GitHub / manuell).
3. **Formularversand** freischalten (siehe oben).
4. **Rechtsseiten** von Sabrina/Anwalt vervollständigen lassen.
5. **Echte Fotos:** Bianka-Portrait, Haut & Haarcheck (Mikrokamera), Studio ohne Personen.
6. Homepage-Text Du/Sie entscheiden · Dateinamen angleichen.
7. **Videos für die drei Kundenstimmen-Platzhalter** auf der Startseite (V4.33) — Sabrina reicht sie nach. Einbau: `<video controls preload="none" poster="…">` statt `.vt-ph`, vorher auf <100 MB kodieren.
8. **Preisliste** für `preise.html` fehlt noch (Gerüst steht seit V4.27). Auf **Haarkonzept** fehlt nur noch **Bildmaterial** (Logo ist seit V4.28 drin). **„Kontakt"** ist der einzige verbliebene tote Menüpunkt.
9. **Freigabe der Badischen Zeitung** für den Artikelscan auf `aktuelles.html` einholen.
8. **WhatsApp-Anamnesebogen:** Der Button schickt eine vorbelegte Nachricht („Haaranalyse"). Ein **automatischer** Versand des Anamnesebogens ginge nur über die WhatsApp Business API mit genehmigter Vorlage — bisher nicht eingerichtet. Bis dahin antwortet Sabrina manuell.

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
- Geschäftszeiten (**korrigiert 28.07.2026, gilt**): **Mo–Mi 10:00–18:00 Uhr · Fr 10:00–13:00 Uhr · Do geschlossen**. Steht auf allen 22 Seiten in Kopfleiste und Fußzeile.
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
