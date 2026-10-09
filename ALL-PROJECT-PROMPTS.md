# सभी 30 Mini Projects के Detailed Build Prompts

**Scope: prompts only — अभी implementation नहीं।**  
Original list 01–20 screenshots से है; 21–30 additional suggestions हैं। नीचे की specifications बाद में build करने के लिए हैं, अभी execute करने के लिए नहीं।

## Quick index

| # | Project | Brand |
| --- | --- | --- |
| 01 | [Weather App](#project-01) | Stormglass |
| 02 | [Password Generator](#project-02) | CipherForge |
| 03 | [Form Validation](#project-03) | Gateform |
| 04 | [Stop-Watch App](#project-04) | Chrono Red |
| 05 | [Digital Piano](#project-05) | Nocturne Keys |
| 06 | [Tip Calculator](#project-06) | Splitly Night |
| 07 | [Expense Tracker](#project-07) | Ledger Night |
| 08 | [Movie Search App](#project-08) | Framehunt |
| 09 | [Flashcard Learning App](#project-09) | Recall Orbit |
| 10 | [Typing Speed Test](#project-10) | Velocity Type |
| 11 | [Drum Kit](#project-11) | PulseFoundry |
| 12 | [QR Code Generator](#project-12) | LinkBloom |
| 13 | [Currency Converter](#project-13) | RateOrbit |
| 14 | [Image Gallery with Modal](#project-14) | PrismVault |
| 15 | [Light/Dark Mode Toggle](#project-15) | ThemeShift |
| 16 | [Scroll Progress Bar](#project-16) | Readline |
| 17 | [Clipboard Copy Tool](#project-17) | ClipNest |
| 18 | [Text-to-Speech Converter](#project-18) | VoxBloom |
| 19 | [Product Filter List](#project-19) | NeonShelf |
| 20 | [Music Player App](#project-20) | Nightwave |
| 21 | [Kanban Task Board](#project-21) | FlowDock |
| 22 | [Pomodoro Focus Timer](#project-22) | FocusEmber |
| 23 | [Habit & Streak Tracker](#project-23) | StreakGarden |
| 24 | [Markdown Notes Editor](#project-24) | Inkspace |
| 25 | [Color Palette & Gradient Studio](#project-25) | ChromaLab |
| 26 | [JSON Formatter & Validator](#project-26) | DataLens |
| 27 | [Unit Converter](#project-27) | MeasureLoop |
| 28 | [Memory Match Game](#project-28) | EchoTiles |
| 29 | [Image Compressor & Resizer](#project-29) | PixelLite |
| 30 | [Decision Wheel](#project-30) | OrbitChoice |

## Shared standards — पहले पढ़ें

### अभी की सीमा

इस folder में अभी केवल planning और prompts हैं। इन prompts को अभी execute मत करो: app files बनाना, dependencies install करना, website में projects add करना, bot schedule/start करना, GitHub push या Cloudflare deployment इस phase का हिस्सा नहीं है। Implementation केवल अगले स्पष्ट निर्देश पर होगी। Portfolio folder अभी untouched रहेगा।

### 1. Product scope और project identity

- Screenshot वाले 01–20 projects के नाम और क्रम बनाए रखो। 21–30 अतिरिक्त suggestions हैं। हर app independently usable mini project हो; यह AUTOGIT admin dashboard की replacement नहीं है।
- Original project title को README और future portfolio card में रखो; prompt का unique brand name app की visual identity है। Names availability/trademark clearance का दावा नहीं है।
- हर prompt की core features, error handling और completion checks working हों। Optional features अलग mark हों; mini-project scope से बाहर multi-user auth/payment/server infrastructure बिना अनुमति न जोड़ो।
- सभी 30 को एक ही dashboard template की copy मत बनाओ। Layout, typography hierarchy, central interaction और background motif हर project के काम से मेल खाएँ।

### 2. Dark visual system

- Default charcoal/ink/plum/navy dark background हो। Hot pink, purple, electric blue और red के CSS accent tokens रखो; प्रत्येक app का dominant accent उसके prompt के अनुसार हो। चारों bright colors बराबर मात्रा में फैलाकर visual noise मत बनाओ।
- Individual prompt की palette starting point है; contrast checks के बाद shades tune कर सकते हो। Default dark रहे; project 15 का deliberate light/system mode उसका functional exception है।
- Modern, readable typography: heading के लिए Sora/Manrope जैसा clean geometric font, body के लिए Inter/system sans, code/numbers के लिए suitable mono। Local licensed subset/font हो या reliable system fallback; network font पर initial render block न हो। Hindi copy हो तो Devanagari-capable fallback रखो।
- Body text लगभग 15–16 px, comfortable line height; tiny grey text और ornamental unreadable fonts नहीं। Spacing consistent, hierarchy साफ़, panels purpose-specific और primary action obvious हो।
- Normal text के लिए कम से कम 4.5:1 और large text के लिए 3:1 contrast verify करो; gradients पर weakest region जाँचो। Error/success के लिए text/icon भी हों, केवल रंग नहीं। [W3C contrast guidance](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html)
- Original inline SVG icons, CSS gradients और canvas/SVG graphics preferable हों। Licensed images/audio/fonts उपयोग हों तो source और license लिखो; copyrighted songs/movie footage default bundle न हों।
- Background decorative, sparse और subtle हो: particles, aurora, stars, waves या orbit motif project के अनुसार। Decorative layer पर pointer-events: none हो; buttons/input कभी overlay के कारण unclickable न बनें। Unexplained left-edge lines और unwanted horizontal scroll न हों।

### 3. Animation और performance

- Hover/focus/press/result transitions लगभग 150–250 ms; meaningful screen/state change बिना forced loading delay के immediate हो। Animations response को रोकने वाली decoration न हों।
- prefers-reduced-motion में particles/parallax/3D motion disable या simplify हों। Motion toggle जहाँ continuous ambience है वहाँ available हो।
- CSS transform/opacity और requestAnimationFrame को prefer करो; high-cost blur, huge shadows और per-frame DOM layout reads avoid करो। Particle count/device quality adaptive हो।
- Hidden tabs में ambient animation/audio visualization pause करो; component/page cleanup में RAF, timers, observers, listeners, audio nodes और object URLs release हों।
- Heavy media lazy load; image dimensions reserve; filtering/input updates debounce only where needed। Valid user actions पर gratuitous spinners या artificial wait नहीं।
- 320/375 px phone, 768 px tablet और 1440 px desktop पर usable layout verify करो। Touch controls लगभग 44 px target area, readable forms और mobile navigation हों।

### 4. Technical delivery: independent static apps

- Plain HTML + CSS + modular JavaScript default stack रखें। Small locally bundled, version-pinned libraries केवल वास्तविक आवश्यकता पर; license include करें। Framework तभी जब meaningful benefit हो, और upload के लिए runnable static artifact निकले।
- Future upload folder के root में index.html हो; styles.css/app.js और assets/ जैसी simple structure रखें। Relative paths जैसे ./assets/... उपयोग हों ताकि GitHub Pages के /repo-name/ subpath पर भी demo चले।
- Root-absolute asset URLs, unconfigured SPA routes और local machine filesystem links नहीं। Internal states के लिए hash/query routing enough है; direct refresh/links test हों।
- AUTOGIT के वर्तमान upload validation में प्रति project अधिकतम 40 files और 5 × 1024 × 1024 bytes total हैं। Generated runnable folder इस cap के भीतर रखें; 12–24 thumbnails और short sample audio के लिए compressed local assets/original SVG उपयोग हों।
- .git, node_modules, .env, .wrangler, dist/build जैसे generated/dependency directories upload में excluded हैं। अगर build step हो तो selected upload folder में prebuilt root index.html और required runtime files रखें, excluded nested dist/ पर निर्भर न हों।
- 30-project planning folder एक साथ upload मत करो। Future में हर ready project का individual app folder upload होगा। API secrets, auth keys, credentials और source maps containing secrets कभी bundle न हों।
- Each project README में local serving, controls, features, browser support, limitations, licenses और hosting/subpath notes हों। Service worker initial scope में जरूरी नहीं; stale caching और cross-project scope conflicts avoid करो।

### 5. Data, APIs, security और honest behavior

- Network-free app default हो जहाँ संभव हो। Weather/currency जैसे public-data apps में source, data timestamp, retry, timeout, cancellation और clearly stale cache हों।
- Movie API जैसी authenticated service का secret client-side code में छिपाया नहीं जा सकता। Optional secured proxy adapter अलग documented interface हो; initial static demo sample data से usable और साफ़ labeled रहे। Proxy/backend deploy करना अलग permission वाला phase है।
- API data और fixture/sample data कभी मिलाकर real/live claim मत करो। Unsupported browser features, audio restrictions और platform limitations visible हों।
- localStorage keys brand/project namespace से शुरू हों; data schema version, parsing guards और quota/security-error handling रखें। Media/large data के लिए IndexedDB केवल scope में आवश्यक हो तो।
- Import JSON/file limits validate हों; backups का replace/merge behavior explicit हो। Passwords, Wi-Fi credentials और sensitive snippets default persistence/history में नहीं।
- User data safe text rendering से दिखाओ; Markdown preview sanitize करो। eval नहीं; unsafe URLs/events और prototype-pollution paths block हों। CSV export में quoting और spreadsheet-formula injection precautions हों।
- कोई hidden analytics, clipboard monitoring, remote data upload, fake login/account creation या fake success toast नहीं। Clear/delete actions के targets समझ में आएँ, irreversible deletes पर confirmation या undo हो।
- Timer apps deadline/elapsed clock से work करें। Browser/laptop बंद होने पर notifications/timers की guaranteed service का दावा न करें; केवल AUTOGIT का deployed backend scheduling अलग mechanism है।

### 6. Accessibility और interaction

- Semantic buttons/labels, keyboard navigation, visible focus, meaningful alt text और accessible status announcements हों। Icon-only actions का accessible name हो।
- Modal में focus trap, Escape close और focus restore; controls का disabled होने का reason visible हो। Input में typing करते समय global shortcuts hijack न करें।
- Charts के साथ text/table summary; card flips, color warnings और audio-only cues के लिए non-visual/non-audio alternatives हों।
- Form errors field के पास हों, submission error summary readable हो। Loading/empty/error/success states सभी designed और usable हों।

### 7. Future AUTOGIT / Git / Portfolio handoff

- Build complete होने पर केवल approved workflow से individual project को AUTOGIT के Mini Projects collection में add करें। Metadata: original title, short description, technology list और approved demoUrl।
- Working public demo बने बिना fabricated demo link न डालें। GitHub repository push अपने-आप GitHub Pages setup होने की guarantee नहीं; public demo की successful deployment और URL अलग verify करें।
- Bot queue, per-project date/time और portfolio sync current backend से verify होंगे, hardcoded UI labels से नहीं। इस prompt phase में schedule dates तय/assign नहीं की गई हैं।
- Future user निर्देश के अनुसार website upload के बाद automatic bot push test करें; manual git push करके उसे automatic success न बताएं।
- Portfolio folder या remote repos mutate/delete करने से पहले उस specific चरण का scope फिर जाँचे। Prompt documents upload करके उन्हें working projects की तरह publish न करें।

### 8. प्रत्येक project की Definition of Done (बाद में build करते समय)

1. Core user journey और prompt की सभी completion checks pass हों; remaining limitations README में साफ़ हों।
2. Actual controls working, forms/inputs validated, empty/loading/error states present; console में uncaught errors नहीं।
3. Mobile, keyboard-only, reduced-motion, refresh persistence और applicable offline/API-failure behavior verify हो।
4. Local static server तथा GitHub-style subpath पर assets/links/navigation check हों; initial render external blocked resources पर stuck न हो।
5. Real files/asset budget measured हो; no secrets, no node_modules और licenses included हों।
6. README, meaningful preview/screenshot, metadata और runnable index.html ready हों; कौन-से tests वास्तव में चले उनकी short report हो।
7. AutoGit upload/remote push/deploy केवल तब जब user explicitly आगे वाला चरण माँगे। Build और upload verification अलग outcomes हैं।

### Official references

इन links को implementation के समय फिर verify करें; API terms/compatibility बदल सकते हैं।

- [Open-Meteo forecast documentation](https://open-meteo.com/en/docs)
- [Open-Meteo geocoding documentation](https://open-meteo.com/en/docs/geocoding-api)
- [TMDB application authentication](https://developer.themoviedb.org/docs/authentication-application)
- [TMDB FAQ / usage notes](https://developer.themoviedb.org/docs/faq)
- [Frankfurter reference-rate API](https://frankfurter.dev/)
- [MDN Clipboard API](https://developer.mozilla.org/en-US/docs/Web/API/Clipboard_API)
- [MDN SpeechSynthesis](https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesis)
- [W3C contrast guidance](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html)


## Individual project prompts

<a id="project-01"></a>

## 01. Weather App — Stormglass

**Source:** आपकी screenshots की original list  
**Future app folder:** `mini-projects/01-weather-app/`  
**Visual palette:** Midnight blue #080F22, electric blue #38BDF8, violet #8B5CF6 और alert coral #FB7185

### Build prompt — उद्देश्य

किसी city की current weather और forecast को साफ़, उपयोगी dashboard में दिखाने वाला weather app बनाओ। Unique working mini app बनाओ, polished screenshot-only mockup नहीं। ऊपर दिए गए shared Build Standards लागू हों। Implementation शुरू करने की अनुमति मिलने पर इस specification से build करना; अभी यह planning document है।

### Layout और UX

Desktop पर city search और saved-city rail, बीच में बड़ी temperature/weather illustration, नीचे hourly strip और 7-day cards। Mobile पर search → current conditions → forecast का single-column flow।

### ज़रूरी working features

- City autocomplete में समान नाम वाले स्थानों के country/region दिखाओ; city चुनने पर coordinates से weather fetch करो। Delhi को प्रारंभिक example रखो और data loading साफ़ दिखाओ।
- Temperature, feels-like, humidity, wind speed/direction, precipitation probability, sunrise/sunset और daily high/low दिखाओ; timezone और units सही label हों।
- Celsius/Fahrenheit toggle, 24-hour temperature SVG chart, 7-day forecast, अधिकतम 5 favourite cities और last-update timestamp जोड़ो।
- Use my location केवल user click पर permission माँगे; permission deny होने पर city search काम करती रहे। Recent searches और units localStorage में save हों।
- Open-Meteo geocoding/forecast adapter बनाओ; data attribution, timeout, request cancellation और short-lived cache शामिल करो। Cached readings को fresh data की तरह प्रस्तुत मत करो।

### Logic और data behavior

Weather code को description/icon में map करो; city बदलते समय पुराने request का response नई city पर overwrite न करे। Current conditions को observation/forecast source के अनुसार label करो।

### Animation और visual personality

Condition के अनुसार हल्की rain streaks, drifting clouds या stars; temperature number का छोटा transition और chart reveal। Background effects foreground text को obscure न करें। Default dark theme, readable typography और restrained pink/purple/blue/red accent system रखो; बाकी projects से अलग central layout हो।

### Empty, loading और error states

City not found, API unavailable, location denied और offline cached state के लिए actionable messages और retry रखो।

### Completion checks

दो समान नाम वाली cities, C/F switch, location denial, API failure और fast consecutive searches test करो; chart और cards की unit/timezone consistency verify करो। Shared checklist के responsive, keyboard, reduced-motion, data-safety और actual upload-size checks भी pass हों।

### बाद की delivery

इस numbered folder को independent runnable app में बदलना। Root `index.html`, local styles/scripts/assets, concise README और honest setup/browser-limit notes शामिल करना। Working preview verify होने के बाद ही Mini Projects में upload/scheduling का अगला चरण होगा; अभी न build, न upload, न deployment।

### Official implementation references

- [Reference 1](https://open-meteo.com/en/docs)
- [Reference 2](https://open-meteo.com/en/docs/geocoding-api)


---

<a id="project-02"></a>

## 02. Password Generator — CipherForge

**Source:** आपकी screenshots की original list  
**Future app folder:** `mini-projects/02-password-generator/`  
**Visual palette:** Obsidian #0B0918, violet #A78BFA, neon pink #F472B6 और restrained blue #60A5FA

### Build prompt — उद्देश्य

एक polished password generator बनाओ जिसमें passwords locally और cryptographically secure randomness से बनें। Unique working mini app बनाओ, polished screenshot-only mockup नहीं। ऊपर दिए गए shared Build Standards लागू हों। Implementation शुरू करने की अनुमति मिलने पर इस specification से build करना; अभी यह planning document है।

### Layout और UX

एक बड़ी password output card, नीचे length slider और character toggles, side panel में generation rules और copy feedback; mobile में सभी controls thumb-friendly हों।

### ज़रूरी working features

- Length 8–64, uppercase/lowercase/digits/symbol toggles और ambiguous characters exclude option; slider और number input synchronized हों।
- हर selected category से कम-से-कम एक character आए; पूरा password secure shuffle करो और selection खाली होने पर generate disabled हो।
- One password और batch of 5 modes, show/hide output, regenerate, copy individual और copy batch buttons वास्तविक रूप से काम करें।
- Passphrase mode में bundled word list से 3–8 words, configurable separator और optional number suffix जोड़ो; dictionary size estimate में शामिल हो।
- Strength/entropy को अनुमान कहो; cryptographic randomness के लिए crypto.getRandomValues और unbiased sampling इस्तेमाल करो। Math.random, password history, analytics या remote transmission न हो।

### Logic और data behavior

Modulo bias से बचने के लिए rejection sampling और secure Fisher–Yates shuffle; generated secrets को localStorage में store न करो, केवल non-sensitive preferences save हों।

### Animation और visual personality

Generate पर brief character scramble तभी तक चले जब final result तैयार हो; copy पर pink confirmation glow और strength meter transition। Default dark theme, readable typography और restrained pink/purple/blue/red accent system रखो; बाकी projects से अलग central layout हो।

### Empty, loading और error states

Clipboard deny, unsupported crypto और contradictory rules पर स्पष्ट feedback; fail होने पर false Copied toast न दिखाओ।

### Completion checks

हर charset combination, 8/64 boundaries, exclusions, batch copy और hide/show test करो; generated output में selected category coverage programmatically verify करो। Shared checklist के responsive, keyboard, reduced-motion, data-safety और actual upload-size checks भी pass हों।

### बाद की delivery

इस numbered folder को independent runnable app में बदलना। Root `index.html`, local styles/scripts/assets, concise README और honest setup/browser-limit notes शामिल करना। Working preview verify होने के बाद ही Mini Projects में upload/scheduling का अगला चरण होगा; अभी न build, न upload, न deployment।


---

<a id="project-03"></a>

## 03. Form Validation — Gateform

**Source:** आपकी screenshots की original list  
**Future app folder:** `mini-projects/03-form-validation/`  
**Visual palette:** Deep plum #120D20, pink #EC4899, violet #8B5CF6 और focus blue #38BDF8

### Build prompt — उद्देश्य

Signup/login form validation का interactive showcase बनाओ जिसमें users आसानी से valid data भरना सीखें। Unique working mini app बनाओ, polished screenshot-only mockup नहीं। ऊपर दिए गए shared Build Standards लागू हों। Implementation शुरू करने की अनुमति मिलने पर इस specification से build करना; अभी यह planning document है।

### Layout और UX

Split layout: left compact brand/security artwork, right Login / Create account tabs और साफ़ labelled form; mobile पर form सबसे पहले।

### ज़रूरी working features

- Signup में display name, email, password, confirm password और terms checkbox; Login में email/password और optional remember preference रखो।
- Email syntax validation, whitespace handling, password minimum length/strength guidance और confirm-password match inline दिखाओ; international names स्वीकार करो।
- Field blur के बाद helpful error और submit पर full validation; invalid submit में first invalid field focus हो और error summary links जोड़ो।
- Password show/hide, accessible requirement checklist और valid/invalid examples वाले optional developer preview panel जोड़ो।
- Success पर स्पष्ट Demo submission complete screen दिखाओ। Backend न होने पर account created, login verified या authentication successful का दावा न हो। Password persist, log या transmit न हो।

### Logic और data behavior

Validation pure functions में रखो; aria-invalid/aria-describedby और browser autocomplete attributes सही हों। Duplicate submit रोकना और loading state demo mode से label करना जरूरी है।

### Animation और visual personality

Labels का subtle focus lift, valid-state checkmark reveal और success panel slide; errors के लिए excessive shaking/flashing न हो। Default dark theme, readable typography और restrained pink/purple/blue/red accent system रखो; बाकी projects से अलग central layout हो।

### Empty, loading और error states

Empty submit, malformed email, pasted password, mismatch, missing consent और keyboard-only use को handle करो।

### Completion checks

Blank form, valid flow, Unicode name, spaces, password mismatch, Enter submit और screen-reader error association verify करो। Shared checklist के responsive, keyboard, reduced-motion, data-safety और actual upload-size checks भी pass हों।

### बाद की delivery

इस numbered folder को independent runnable app में बदलना। Root `index.html`, local styles/scripts/assets, concise README और honest setup/browser-limit notes शामिल करना। Working preview verify होने के बाद ही Mini Projects में upload/scheduling का अगला चरण होगा; अभी न build, न upload, न deployment।


---

<a id="project-04"></a>

## 04. Stop-Watch App — Chrono Red

**Source:** आपकी screenshots की original list  
**Future app folder:** `mini-projects/04-stopwatch-app/`  
**Visual palette:** Near-black #100B13, racing red #EF4444, hot pink #FB7185 और icy blue #67E8F9

### Build prompt — उद्देश्य

Accurate stopwatch बनाओ जिसमें laps और session history उपयोगी, readable तरीके से मिलें। Unique working mini app बनाओ, polished screenshot-only mockup नहीं। ऊपर दिए गए shared Build Standards लागू हों। Implementation शुरू करने की अनुमति मिलने पर इस specification से build करना; अभी यह planning document है।

### Layout और UX

Center में बड़ा monospace HH:MM:SS.cc timer, ring indicator और Start/Pause/Reset controls; नीचे sortable lap table और saved sessions drawer।

### ज़रूरी working features

- Start, pause/resume, reset और lap; paused अवस्था में lap action disable हो और state button labels स्पष्ट हों।
- Lap number, individual lap duration और total elapsed time; fastest/slowest lap highlight तभी जब कई laps हों।
- Space start/pause, L lap और R reset shortcuts; typing fields में shortcuts लागू न हों।
- Session title, finish/save session, history delete और CSV export; stored laps और totals reload पर सही रहें।
- performance.now से elapsed time निकालो; setInterval count को समय का source न बनाओ। Background tab में लौटने पर elapsed सही रहे; reload recovery policy README में साफ़ लिखो।

### Logic और data behavior

Accumulated elapsed + current monotonic start timestamp से time compute करो। Reset active session पर confirmation और rendering requestAnimationFrame से; UI timer का increment drift न करे।

### Animation और visual personality

Red orbit progress, active-state heartbeat glow और lap insertion slide; paused state में motion रुक जाए। Default dark theme, readable typography और restrained pink/purple/blue/red accent system रखो; बाकी projects से अलग central layout हो।

### Empty, loading और error states

Zero time, no laps, CSV export failure और interrupted session recovery के लिए साफ़ state रखो।

### Completion checks

Multiple pause/resume cycles, background tab, 20 laps, reset, elapsed formatting after one hour और CSV numbers verify करो। Shared checklist के responsive, keyboard, reduced-motion, data-safety और actual upload-size checks भी pass हों।

### बाद की delivery

इस numbered folder को independent runnable app में बदलना। Root `index.html`, local styles/scripts/assets, concise README और honest setup/browser-limit notes शामिल करना। Working preview verify होने के बाद ही Mini Projects में upload/scheduling का अगला चरण होगा; अभी न build, न upload, न deployment।


---

<a id="project-05"></a>

## 05. Digital Piano — Nocturne Keys

**Source:** आपकी screenshots की original list  
**Future app folder:** `mini-projects/05-digital-piano/`  
**Visual palette:** Midnight #0A1020, purple #A78BFA, blue #60A5FA और pink #F0ABFC

### Build prompt — उद्देश्य

Browser में playable piano बनाओ जिसमें mouse, touch और keyboard से musical notes बजें। Unique working mini app बनाओ, polished screenshot-only mockup नहीं। ऊपर दिए गए shared Build Standards लागू हों। Implementation शुरू करने की अनुमति मिलने पर इस specification से build करना; अभी यह planning document है।

### Layout और UX

Top में instrument/volume/octave controls, central 2-octave piano, नीचे shortcut legend और mini recording timeline; small screen पर usable horizontal keyboard।

### ज़रूरी working features

- White/black keys सही arrangement और frequency mapping के साथ; keyboard labels toggle और octave -/+ controls जोड़ो।
- Mouse, multi-touch और physical keyboard से simultaneous notes/chords; pointer release, keyup और window blur पर notes बंद हों।
- Web Audio synthesis से sine/triangle/soft electric-piano presets, volume/mute, attack/release और sustain control; audio पहली user gesture के बाद unlock हो।
- Record performance note events, stop, playback और clear; recording को note-event JSON के रूप में export/import करो। MP3 export बिना encoder लागू किए मत दिखाओ।
- Simple guided melody mode में अगली key highlight और 3 original practice patterns; exact score और replay controls रखो।

### Logic और data behavior

AudioContext और per-note voices manage करो; envelope ramp से clicks रोको। Autorepeat keydown पर duplicate notes न बनें; tuning A4=440Hz और equal temperament प्रयोग करो।

### Animation और visual personality

Pressed keys पर violet light trail, active notes का waveform और soft ambient starfield; audio को visual animation timing पर निर्भर न करो। Default dark theme, readable typography और restrained pink/purple/blue/red accent system रखो; बाकी projects से अलग central layout हो।

### Empty, loading और error states

Suspended/unsupported audio, mobile gesture requirement, malformed recording import और stuck note recovery handle करो।

### Completion checks

C4/A4 pitch mapping, held chord, blur release, mute, sustain, touch and record/replay verify करो; no autoplay हो। Shared checklist के responsive, keyboard, reduced-motion, data-safety और actual upload-size checks भी pass हों।

### बाद की delivery

इस numbered folder को independent runnable app में बदलना। Root `index.html`, local styles/scripts/assets, concise README और honest setup/browser-limit notes शामिल करना। Working preview verify होने के बाद ही Mini Projects में upload/scheduling का अगला चरण होगा; अभी न build, न upload, न deployment।


---

<a id="project-06"></a>

## 06. Tip Calculator — Splitly Night

**Source:** आपकी screenshots की original list  
**Future app folder:** `mini-projects/06-tip-calculator/`  
**Visual palette:** Graphite #11131F, dark pink #DB2777, blue #38BDF8 और violet #8B5CF6

### Build prompt — उद्देश्य

Bill, tip और group split को तुरंत calculate करने वाला clear calculator बनाओ। Unique working mini app बनाओ, polished screenshot-only mockup नहीं। ऊपर दिए गए shared Build Standards लागू हों। Implementation शुरू करने की अनुमति मिलने पर इस specification से build करना; अभी यह planning document है।

### Layout और UX

Left input stack, right बड़ा per-person result और bill breakdown; mobile पर sticky result card और numeric keyboards।

### ज़रूरी working features

- Bill amount, currency display selector, 0/5/10/15/20 percent presets, custom tip और number of people 1–50 रखो।
- Tip total, grand total, per-person share और extra rounding amount स्पष्ट दिखाओ; optional round-up per person toggle जोड़ो।
- Tax optional input और tip basis Before tax / After tax विकल्प; calculation policy result में label करो।
- Copy bill summary, reset और quick split scenario buttons; केवल settings save हों, transaction history जरूरी नहीं।
- Currency बदलने से arithmetic amounts convert न हों; selector केवल denomination बदले, जब तक exchange API explicitly लागू न हो।

### Logic और data behavior

Amounts smallest currency units/controlled decimal arithmetic से compute करो; evenly rounded shares का remainder कहाँ जाता है स्पष्ट दिखाओ। NaN, negatives और zero people रोकना जरूरी है।

### Animation और visual personality

Results में restrained number tween, selected tip chip pink pulse और split segments reveal; live calculation पर layout jump न हो। Default dark theme, readable typography और restrained pink/purple/blue/red accent system रखो; बाकी projects से अलग central layout हो।

### Empty, loading और error states

Empty inputs, zero bill, zero tip, excessive percentage और invalid decimals पर field-level messages दें।

### Completion checks

1000 bill + 10% + 4 people = 275 each, 0% tip, custom decimals, tax-basis difference और rounding remainder verify करो। Shared checklist के responsive, keyboard, reduced-motion, data-safety और actual upload-size checks भी pass हों।

### बाद की delivery

इस numbered folder को independent runnable app में बदलना। Root `index.html`, local styles/scripts/assets, concise README और honest setup/browser-limit notes शामिल करना। Working preview verify होने के बाद ही Mini Projects में upload/scheduling का अगला चरण होगा; अभी न build, न upload, न deployment।


---

<a id="project-07"></a>

## 07. Expense Tracker — Ledger Night

**Source:** आपकी screenshots की original list  
**Future app folder:** `mini-projects/07-expense-tracker/`  
**Visual palette:** Ink #0D1120, purple #8B5CF6, income blue #38BDF8 और expense red #F43F5E

### Build prompt — उद्देश्य

Personal income/expenses का local-first tracker बनाओ जिसमें usable ledger और visual monthly overview हो। Unique working mini app बनाओ, polished screenshot-only mockup नहीं। ऊपर दिए गए shared Build Standards लागू हों। Implementation शुरू करने की अनुमति मिलने पर इस specification से build करना; अभी यह planning document है।

### Layout और UX

Top balance/income/expense metrics; left add-entry form; right transaction list; नीचे category chart और month filter, mobile पर Add entry floating action।

### ज़रूरी working features

- Income/expense entry में amount, date, category, note और optional recurring label; create/edit/delete with undo implement करो।
- Month selector, transaction search, category/type filters और date/amount sorting; combined filters वास्तविक results पर लागू हों।
- Balance और monthly totals filtered period के अनुसार; category donut और cashflow SVG chart accessible text summary के साथ।
- Monthly budget और remaining budget/progress; recurring label automatic payment या background execution का दावा न करे।
- Versioned localStorage data, JSON backup/import validation और CSV export; sample entries केवल explicit Load sample data action पर हों।

### Logic और data behavior

Stable IDs, timestamps और integer minor units इस्तेमाल करो। Aggregations के लिए pure functions; deletion undo expiry और invalid/corrupt backup को safe reject करो।

### Animation और visual personality

Metric count transitions, category chart reveal और transaction row enter/exit; red/pink को numbers पढ़ने योग्य रखें। Default dark theme, readable typography और restrained pink/purple/blue/red accent system रखो; बाकी projects से अलग central layout हो।

### Empty, loading और error states

First-use empty ledger, exceeded budget, storage quota failure, no filtered matches और import errors के states बनाओ।

### Completion checks

Add income/expense, edit category, delete/undo, monthly filtering, exact totals और export/import roundtrip verify करो। Shared checklist के responsive, keyboard, reduced-motion, data-safety और actual upload-size checks भी pass हों।

### बाद की delivery

इस numbered folder को independent runnable app में बदलना। Root `index.html`, local styles/scripts/assets, concise README और honest setup/browser-limit notes शामिल करना। Working preview verify होने के बाद ही Mini Projects में upload/scheduling का अगला चरण होगा; अभी न build, न upload, न deployment।


---

<a id="project-08"></a>

## 08. Movie Search App — Framehunt

**Source:** आपकी screenshots की original list  
**Future app folder:** `mini-projects/08-movie-search-app/`  
**Visual palette:** Cinema black #0F0B14, crimson #EF4444, violet #7C3AED और blue #60A5FA

### Build prompt — उद्देश्य

Movie discovery app बनाओ जिसमें search, filters, details और local watchlist हों। Unique working mini app बनाओ, polished screenshot-only mockup नहीं। ऊपर दिए गए shared Build Standards लागू हों। Implementation शुरू करने की अनुमति मिलने पर इस specification से build करना; अभी यह planning document है।

### Layout और UX

Wide cinematic header, search bar, genre/year filters, poster grid और accessible movie detail drawer; mobile पर two-column grid।

### ज़रूरी working features

- Search with 350ms debounce, genre/year sort controls, paginated results और watchlist-only filter; search clear/reset आसान हो।
- Details में synopsis, release year, genres, runtime और source rating; absent fields को Unknown/Unavailable कहो, invent न करो।
- Local watchlist add/remove, watched marker और persisted favourites; copied share URL selected movie खोल सके।
- TMDB integration optional configured secure proxy endpoint के जरिए; missing credentials में clearly marked local sample catalog searchable रहे। Repository/browser bundle में privileged token embed न करो।
- Official attribution और image-source credit जोड़ो; trailer केवल validated external link हो, unlicensed video या movie playback नहीं। Skeletons और poster fallback रखो।

### Logic और data behavior

AbortController से stale searches cancel करो; search results/watchlist normalised IDs पर merge हों। Proxy requirements README में अलग लिखो ताकि base demo GitHub Pages पर चल सके।

### Animation और visual personality

Card hover spotlight, detail drawer fade और low-opacity crimson cinema glow; trailer audio autoplay न हो। Default dark theme, readable typography और restrained pink/purple/blue/red accent system रखो; बाकी projects से अलग central layout हो।

### Empty, loading और error states

No results, bad proxy config, API rate limit, broken poster और offline sample mode अलग पहचानने योग्य हों।

### Completion checks

Rapid searches, empty query, pagination, watchlist reload, missing poster और no-credentials demo mode verify करो। Shared checklist के responsive, keyboard, reduced-motion, data-safety और actual upload-size checks भी pass हों।

### बाद की delivery

इस numbered folder को independent runnable app में बदलना। Root `index.html`, local styles/scripts/assets, concise README और honest setup/browser-limit notes शामिल करना। Working preview verify होने के बाद ही Mini Projects में upload/scheduling का अगला चरण होगा; अभी न build, न upload, न deployment।

### Official implementation references

- [Reference 1](https://developer.themoviedb.org/docs/authentication-application)
- [Reference 2](https://developer.themoviedb.org/docs/faq)


---

<a id="project-09"></a>

## 09. Flashcard Learning App — Recall Orbit

**Source:** आपकी screenshots की original list  
**Future app folder:** `mini-projects/09-flashcard-learning-app/`  
**Visual palette:** Deep violet #100C23, purple #A78BFA, blue #38BDF8 और pink #F472B6

### Build prompt — उद्देश्य

Flashcards create करने, organise करने और revision करने का complete study app बनाओ। Unique working mini app बनाओ, polished screenshot-only mockup नहीं। ऊपर दिए गए shared Build Standards लागू हों। Implementation शुरू करने की अनुमति मिलने पर इस specification से build करना; अभी यह planning document है।

### Layout और UX

Deck sidebar, selected deck summary, large flip card और study controls; mobile पर deck selector drawer और full-width card।

### ज़रूरी working features

- Deck create/rename/delete; cards में question, answer, optional hint और tags; edit, duplicate और search/filter implement करो।
- Study mode में flip, next/previous, shuffle, progress और Again / Hard / Good / Easy rating; keyboard shortcuts readable legend के साथ।
- Simple documented spaced-repetition intervals और due-today count; restart session में cards lose न हों।
- Quiz-like self-review summary में attempts, reviewed count और rating distribution; correctness user self-rating पर आधारित स्पष्ट हो।
- JSON import/export with schema checks, localStorage persistence और a small optional starter deck; study content text की तरह render हो।

### Logic और data behavior

Separate deck/card/review entities, stable IDs और review timestamps; rating से nextReviewAt deterministic तरीके से निकले और easy cards repeatedly ना आएँ।

### Animation और visual personality

3D flip restrained perspective में, next-card slide और progress ring; reduced-motion में instant reveal। Default dark theme, readable typography और restrained pink/purple/blue/red accent system रखो; बाकी projects से अलग central layout हो।

### Empty, loading और error states

Empty deck, all cards reviewed, no due cards, import failure और delete confirmation states।

### Completion checks

Create/edit card, flip via keyboard, persist ratings, due-day boundaries, shuffle no duplicates और backup restore verify करो। Shared checklist के responsive, keyboard, reduced-motion, data-safety और actual upload-size checks भी pass हों।

### बाद की delivery

इस numbered folder को independent runnable app में बदलना। Root `index.html`, local styles/scripts/assets, concise README और honest setup/browser-limit notes शामिल करना। Working preview verify होने के बाद ही Mini Projects में upload/scheduling का अगला चरण होगा; अभी न build, न upload, न deployment।


---

<a id="project-10"></a>

## 10. Typing Speed Test — Velocity Type

**Source:** आपकी screenshots की original list  
**Future app folder:** `mini-projects/10-typing-speed-test/`  
**Visual palette:** Navy black #070F1D, electric blue #38BDF8, pink #F472B6 और error red #FB7185

### Build prompt — उद्देश्य

Accurate typing-speed practice tool बनाओ जिसमें WPM, accuracy और mistakes समझ आएँ। Unique working mini app बनाओ, polished screenshot-only mockup नहीं। ऊपर दिए गए shared Build Standards लागू हों। Implementation शुरू करने की अनुमति मिलने पर इस specification से build करना; अभी यह planning document है।

### Layout और UX

Top duration/difficulty controls, center बड़े readable passage और caret, नीचे metrics और results graph; distractions minimized हों।

### ज़रूरी working features

- 15/30/60/120-second modes, words/sentences/code passages और optional punctuation/numbers; bundled original passages इस्तेमाल करो।
- Timer first valid keystroke पर शुरू हो; input focus, correct/wrong/current character highlighting और controlled backspace rules हों।
- Gross WPM, net/correct WPM, accuracy, raw keystrokes और corrected/uncorrected mistakes स्पष्ट definitions के साथ दिखाओ।
- Restart same passage, next passage, best result per mode और recent result history locally save करो।
- Result में time-series speed chart और difficult characters; paste detect करके unranked practice mark करो, browser monitoring या deceptive anti-cheat claim न हो।

### Logic और data behavior

Elapsed monotonic timing; WPM formula characters/5/minutes, accuracy denominator स्पष्ट। Tab hidden होने पर timer policy (pause/unranked) consistent रहे; IME composition गलत character न माने।

### Animation और visual personality

Smooth caret, subtle line transition और blue result reveal; animated background typing area में distract न करे। Default dark theme, readable typography और restrained pink/purple/blue/red accent system रखो; बाकी projects से अलग central layout हो।

### Empty, loading और error states

Not started, running, completed, lost focus, storage error और passage exhaustion handle करो।

### Completion checks

Known character/time example से WPM math, corrections, timeout, rapid restart, paste detection और keyboard/IME behaviour verify करो। Shared checklist के responsive, keyboard, reduced-motion, data-safety और actual upload-size checks भी pass हों।

### बाद की delivery

इस numbered folder को independent runnable app में बदलना। Root `index.html`, local styles/scripts/assets, concise README और honest setup/browser-limit notes शामिल करना। Working preview verify होने के बाद ही Mini Projects में upload/scheduling का अगला चरण होगा; अभी न build, न upload, न deployment।


---

<a id="project-11"></a>

## 11. Drum Kit — PulseFoundry

**Source:** आपकी screenshots की original list  
**Future app folder:** `mini-projects/11-drum-kit/`  
**Visual palette:** Charcoal #110C13, neon red #F43F5E, deep purple #7C3AED और electric blue #38BDF8

### Build prompt — उद्देश्य

Keyboard, mouse और touch से playable drum-pad instrument बनाओ, जिसमें user अपनी छोटी beat बना और replay कर सके। Unique working mini app बनाओ, polished screenshot-only mockup नहीं। ऊपर दिए गए shared Build Standards लागू हों। Implementation शुरू करने की अनुमति मिलने पर इस specification से build करना; अभी यह planning document है।

### Layout और UX

बीच में 3×3 pads; ऊपर tempo और transport controls; नीचे step sequencer और sound settings। Mobile पर बड़े touch targets और horizontally scrollable sequencer।

### ज़रूरी working features

- Kick, snare, closed/open hi-hat, clap, tom, rim और percussion के 9 अलग pads रखो; प्रत्येक pad पर sound name और keyboard shortcut दिखाओ।
- User gesture के बाद Web Audio unlock हो; low-latency playback, per-pad volume, master volume और mute हों। Sounds locally synthesized या licensed local assets हों।
- 16-step sequencer, 60–180 BPM, beat indicator, play/stop और editable pattern जोड़ो; beat बदलने पर transport से timing sync रहे।
- Live recording को quantized pad events में बदलो; recorded pattern replay हो। तीन original preset patterns, clear confirmation और JSON import/export दो।
- Keyboard autorepeat को ignore करो, multi-touch और rapid repeated hits support करो; shortcuts focused inputs में बाधा न बनें। Preferences और patterns locally save हों।

### Logic और data behavior

AudioContext clock पर look-ahead scheduling करो; setInterval केवल scheduling helper हो, exact audio timing का source नहीं। Stop पर पहले से scheduled nodes cancel हों और resume duplicate beat न बनाए।

### Animation और visual personality

Hit पर छोटा pad glow/ripple, synchronized beat pulse और lightweight waveform; red particles sparse हों और sequencer readability बनी रहे। Default dark theme, readable typography और restrained pink/purple/blue/red accent system रखो; बाकी projects से अलग central layout हो।

### Empty, loading और error states

Audio locked/unsupported, empty pattern, invalid import और suspended tab के लिए स्पष्ट status तथा recovery controls।

### Completion checks

Rapid hits, simultaneous pads, tempo change, repeated play/stop, mobile audio unlock और pattern export/import test करो; stopped transport में कोई stray sound न आए। Shared checklist के responsive, keyboard, reduced-motion, data-safety और actual upload-size checks भी pass हों।

### बाद की delivery

इस numbered folder को independent runnable app में बदलना। Root `index.html`, local styles/scripts/assets, concise README और honest setup/browser-limit notes शामिल करना। Working preview verify होने के बाद ही Mini Projects में upload/scheduling का अगला चरण होगा; अभी न build, न upload, न deployment।


---

<a id="project-12"></a>

## 12. QR Code Generator — LinkBloom

**Source:** आपकी screenshots की original list  
**Future app folder:** `mini-projects/12-qr-code-generator/`  
**Visual palette:** Ink #0B1020, neon pink #EC4899, violet #8B5CF6 और blue #60A5FA

### Build prompt — उद्देश्य

Text, URL, email और Wi-Fi details से scan करने योग्य QR codes locally generate करने वाला privacy-friendly tool बनाओ। Unique working mini app बनाओ, polished screenshot-only mockup नहीं। ऊपर दिए गए shared Build Standards लागू हों। Implementation शुरू करने की अनुमति मिलने पर इस specification से build करना; अभी यह planning document है।

### Layout और UX

Left में content-type tabs और input fields, right में बड़े quiet-zone सहित QR preview; नीचे export options और saved designs। Mobile पर input के बाद preview।

### ज़रूरी working features

- Text/URL/email/Wi-Fi tabs के लिए उचित forms दो; Wi-Fi SSID, password और security fields सही escape/encode हों। Email subject/body URL encoding से बनें।
- User typing के बाद debounced live preview; length indicator और library capacity exceed होने पर error रखो। URL syntax validate करो, arbitrary text को URL मानकर बदलो मत।
- Foreground/background color, size 256/512/1024 और error-correction options दो; reliable dark-on-light preset default हो और low contrast पर warning दो।
- PNG और SVG download, filename customization तथा reset हों। QR library locally bundle और license include करो; default generation किसी external QR service को data न भेजे।
- Wi-Fi passwords और sensitive payload localStorage/history में default save न हों। केवल explicit opt-in पर non-sensitive designs save कराओ; saved item delete हो।

### Logic और data behavior

QR payload बनाने और render/export करने के functions अलग रखो। Mandatory quiet zone सुरक्षित रहे; initial version में logo overlay न जोड़ो जिससे scan reliability बिगड़े।

### Animation और visual personality

Preview frame पर subtle pink scan-line, generate पर compact fade; animation केवल surrounding frame पर हो, actual QR pixels पर नहीं। Default dark theme, readable typography और restrained pink/purple/blue/red accent system रखो; बाकी projects से अलग central layout हो।

### Empty, loading और error states

Empty input, invalid URL, payload too large, poor contrast और export failure में inline instructions हों; downloadable code fake success न दिखाए।

### Completion checks

Generated text, URL, email और Wi-Fi QR को कम से कम दो independent scanners/devices से test करो; PNG/SVG का content preview से match हो और quiet zone intact रहे। Shared checklist के responsive, keyboard, reduced-motion, data-safety और actual upload-size checks भी pass हों।

### बाद की delivery

इस numbered folder को independent runnable app में बदलना। Root `index.html`, local styles/scripts/assets, concise README और honest setup/browser-limit notes शामिल करना। Working preview verify होने के बाद ही Mini Projects में upload/scheduling का अगला चरण होगा; अभी न build, न upload, न deployment।


---

<a id="project-13"></a>

## 13. Currency Converter — RateOrbit

**Source:** आपकी screenshots की original list  
**Future app folder:** `mini-projects/13-currency-converter/`  
**Visual palette:** Midnight #07111F, sapphire #3B82F6, purple #A78BFA और rose #FB7185

### Build prompt — उद्देश्य

Published reference exchange rates से transparent currency conversion app बनाओ; इसे live trading या real-time tick feed की तरह advertise मत करो। Unique working mini app बनाओ, polished screenshot-only mockup नहीं। ऊपर दिए गए shared Build Standards लागू हों। Implementation शुरू करने की अनुमति मिलने पर इस specification से build करना; अभी यह planning document है।

### Layout और UX

Hero conversion card में amount, from/to selectors और swap; नीचे reference-rate date, recent pairs और compact history chart। Mobile पर thumb-friendly stacked selectors।

### ज़रूरी working features

- Searchable currency selectors, amount input, from/to swap और INR/USD/EUR जैसे quick pairs जोड़ो; supported currencies API response से तय हों।
- Converted amount, unit exchange rate, inverse rate, source और rate की date दिखाओ। Decimal handling तथा display rounding currency के अनुसार हों।
- 7/30/90-day historical trend chart, selected pair favourites और recent conversions रखो; missing dates/weekends को fabricate मत करो।
- Frankfurter v2 adapter जैसे free no-key reference-rate source का प्रयोग करो; README में terms/source और limits explain करो। Rate date को fetch timestamp से अलग रखो।
- Offline cache हो तो last-known rate और stale badge स्पष्ट दिखाओ; manual refresh, timeout और rapid-selection request cancellation हों।

### Logic और data behavior

Same currency का result unchanged रहे; currency swap पर amount behavior स्पष्ट हो। Historical endpoint unavailable होने पर chart unavailable दिखाओ, invented trend नहीं।

### Animation और visual personality

Swap icon rotation, result transition और blue chart reveal; background में restrained orbital arcs, finance ticker जैसी fake activity नहीं। Default dark theme, readable typography और restrained pink/purple/blue/red accent system रखो; बाकी projects से अलग central layout हो।

### Empty, loading और error states

Unsupported pair, unavailable source, offline/stale rate, invalid/negative input और empty history के लिए practical guidance।

### Completion checks

Same-currency result, swap twice, zero/decimal input, stale cache, rapidly changing pairs और API failure test करो; source date हर result के साथ बनी रहे। Shared checklist के responsive, keyboard, reduced-motion, data-safety और actual upload-size checks भी pass हों।

### बाद की delivery

इस numbered folder को independent runnable app में बदलना। Root `index.html`, local styles/scripts/assets, concise README और honest setup/browser-limit notes शामिल करना। Working preview verify होने के बाद ही Mini Projects में upload/scheduling का अगला चरण होगा; अभी न build, न upload, न deployment।

### Official implementation references

- [Reference 1](https://frankfurter.dev/)


---

<a id="project-14"></a>

## 14. Image Gallery with Modal — PrismVault

**Source:** आपकी screenshots की original list  
**Future app folder:** `mini-projects/14-image-gallery-modal/`  
**Visual palette:** Plum black #100B1B, orchid #C084FC, pink #F472B6 और blue #38BDF8

### Build prompt — उद्देश्य

Original/licensed images को browse, filter और accessible lightbox में देखने वाला elegant gallery बनाओ। Unique working mini app बनाओ, polished screenshot-only mockup नहीं। ऊपर दिए गए shared Build Standards लागू हों। Implementation शुरू करने की अनुमति मिलने पर इस specification से build करना; अभी यह planning document है।

### Layout और UX

Editorial header, category filter chips और responsive masonry-style grid; full-screen lightbox में title/caption, navigation और image actions।

### ज़रूरी working features

- कम से कम 12 curated local images या original SVG artworks metadata, title, category और meaningful alt text के साथ दो; assets का license/source लिखो।
- Category filters, text search, favourites और grid-density control हों; favourite preferences locally persist हों।
- Thumbnail click से modal खुले; previous/next, Escape close, keyboard arrows, focus trap और close के बाद original thumbnail पर focus restore हों।
- Zoom in/out, reset fit, touch swipe और optional image information panel दो; zoom/pan boundary sensible हो और body scroll background में lock हो।
- Lazy loading, responsive image sizes, aspect-ratio placeholders और broken-image fallback रखो; optional user import temporary blob URLs से हो, upload का झूठा claim न हो।

### Logic और data behavior

Filtered collection ही lightbox navigation की source हो। Object URLs revoke करो; modal transition के दौरान focus और scroll restoration reliable रहें।

### Animation और visual personality

Subtle thumbnail lift, short shared-image style transition और purple aurora background; excessive blur/large animated filters से performance खराब न हो। Default dark theme, readable typography और restrained pink/purple/blue/red accent system रखो; बाकी projects से अलग central layout हो।

### Empty, loading और error states

No matching images, empty favourites, unsupported import, broken asset और image loading state।

### Completion checks

Keyboard-only complete flow, touch swipe, zoom bounds, filter के बाद navigation, resize और modal close focus restoration verify करो। Shared checklist के responsive, keyboard, reduced-motion, data-safety और actual upload-size checks भी pass हों।

### बाद की delivery

इस numbered folder को independent runnable app में बदलना। Root `index.html`, local styles/scripts/assets, concise README और honest setup/browser-limit notes शामिल करना। Working preview verify होने के बाद ही Mini Projects में upload/scheduling का अगला चरण होगा; अभी न build, न upload, न deployment।


---

<a id="project-15"></a>

## 15. Light/Dark Mode Toggle — ThemeShift

**Source:** आपकी screenshots की original list  
**Future app folder:** `mini-projects/15-light-dark-mode-toggle/`  
**Visual palette:** Default dark #0D0B1D, violet #8B5CF6, pink #EC4899 और blue #38BDF8; alternate light surface #F7F5FC

### Build prompt — उद्देश्य

सिर्फ switch नहीं, एक complete theme playground बनाओ जिसमें user readable components पर dark/light/system और accent combinations देख सके। Unique working mini app बनाओ, polished screenshot-only mockup नहीं। ऊपर दिए गए shared Build Standards लागू हों। Implementation शुरू करने की अनुमति मिलने पर इस specification से build करना; अभी यह planning document है।

### Layout और UX

Theme controls sidebar; main preview में dashboard cards, form, chart, tabs, table और notification examples; mobile पर controls collapsible हों।

### ज़रूरी working features

- Dark, light और system modes; pink/purple/blue/red accent presets; selected accent और mode localStorage में save हों।
- Theme CSS variables/tokens से पूरे app पर लागू हो; nested dialogs, inputs, SVG charts, scrollbars और focus indicators भी consistent रहें।
- System preference बदलने पर केवल system mode में auto update हो; explicit user choice override न हो। Initial paint पर stored theme पढ़कर flash avoid करो।
- Interactive preview components, compact/comfortable density और a theme-token inspector दो; token values copy तथा theme JSON export/import उपलब्ध हों।
- Contrast preview और readable text/status variants रखो; error/success को केवल accent colors पर निर्भर न करो। Reset theme confirmation और defaults restore हों।

### Logic और data behavior

Mode, resolved theme और accent को अलग state समझो। Imported tokens validate करो, unsafe CSS/HTML strings execute मत करो; system media-query listener cleanup हो।

### Animation और visual personality

Sun/moon morph, short color transition और accent bloom; large page-flash effects नहीं। Reduced motion में instant theme change। Default dark theme, readable typography और restrained pink/purple/blue/red accent system रखो; बाकी projects से अलग central layout हो।

### Empty, loading और error states

Invalid theme import, unavailable storage और system-mode explanation के लिए non-blocking messages।

### Completion checks

Refresh persistence, first-paint flash, OS theme change, all four accents, modal/input readability और keyboard controls test करो। Shared checklist के responsive, keyboard, reduced-motion, data-safety और actual upload-size checks भी pass हों।

### बाद की delivery

इस numbered folder को independent runnable app में बदलना। Root `index.html`, local styles/scripts/assets, concise README और honest setup/browser-limit notes शामिल करना। Working preview verify होने के बाद ही Mini Projects में upload/scheduling का अगला चरण होगा; अभी न build, न upload, न deployment।


---

<a id="project-16"></a>

## 16. Scroll Progress Bar — Readline

**Source:** आपकी screenshots की original list  
**Future app folder:** `mini-projects/16-scroll-progress-bar/`  
**Visual palette:** Deep navy #090F1D, blue #38BDF8, purple #A78BFA और pink #F472B6

### Build prompt — उद्देश्य

Reading progress को meaningful तरीके से दिखाने वाला immersive long-form reading app बनाओ, न कि केवल dummy लंबा page। Unique working mini app बनाओ, polished screenshot-only mockup नहीं। ऊपर दिए गए shared Build Standards लागू हों। Implementation शुरू करने की अनुमति मिलने पर इस specification से build करना; अभी यह planning document है।

### Layout और UX

Original article header, sticky top progress bar, desktop table-of-contents rail, readable central article और compact reading controls।

### ज़रूरी working features

- कम से कम 6 meaningful original article sections, anchor table of contents, active-section highlighting और reading-time estimate जोड़ो।
- Page reading progress प्रतिशत और thin top bar दिखाओ; completed section markers तथा back-to-top control हों।
- Font-size/line-height settings, focus reading mode, bookmark current section और last-read position locally save हों।
- Optional section-only progress और page-wide progress modes साफ़ labels के साथ दो; article jump और hash links काम करें।
- Responsive images/code blocks/expandable notes शामिल करो ताकि dynamic content height changes handling real हो; progress calculation layout changes पर update हो।

### Logic और data behavior

Scroll progress = scrollTop/(scrollHeight-clientHeight); zero-scroll page पर divide-by-zero न हो। Passive scroll listener, requestAnimationFrame batching और ResizeObserver से updates lightweight हों; active section IntersectionObserver से तय करो।

### Animation और visual personality

Smooth bar fill, restrained blue reading glow और section reveal; user reduced-motion preference में scroll jumps instant हों। Default dark theme, readable typography और restrained pink/purple/blue/red accent system रखो; बाकी projects से अलग central layout हो।

### Empty, loading और error states

Restored position, empty/short article और unavailable storage gracefully handle करो; forced auto-scroll न हो।

### Completion checks

0% top, 100% bottom, resize, font-size change, dynamic notes, anchor navigation, refresh bookmark और mobile scroll performance test करो। Shared checklist के responsive, keyboard, reduced-motion, data-safety और actual upload-size checks भी pass हों।

### बाद की delivery

इस numbered folder को independent runnable app में बदलना। Root `index.html`, local styles/scripts/assets, concise README और honest setup/browser-limit notes शामिल करना। Working preview verify होने के बाद ही Mini Projects में upload/scheduling का अगला चरण होगा; अभी न build, न upload, न deployment।


---

<a id="project-17"></a>

## 17. Clipboard Copy Tool — ClipNest

**Source:** आपकी screenshots की original list  
**Future app folder:** `mini-projects/17-clipboard-copy-tool/`  
**Visual palette:** Blackberry #100D1E, pink #F472B6, violet #8B5CF6 और sky #38BDF8

### Build prompt — उद्देश्य

User द्वारा दिए snippets को organize और one-click copy करने वाला local clipboard workspace बनाओ; background clipboard surveillance नहीं। Unique working mini app बनाओ, polished screenshot-only mockup नहीं। ऊपर दिए गए shared Build Standards लागू हों। Implementation शुरू करने की अनुमति मिलने पर इस specification से build करना; अभी यह planning document है।

### Layout और UX

Searchable snippet sidebar, editor/preview pane और compact action bar; mobile पर list और editor का clear switch।

### ज़रूरी working features

- Snippet create/edit/delete, title, tags, pinned items, search और text/code/plain-link categories जोड़ो; duplicate snippet और explicit save हों।
- Copy current snippet, copy selected block और user-click paste-from-clipboard actions दो। Read permission unavailable होने पर ordinary paste into textarea काम करे।
- User opt-in local snippet persistence, JSON backup/import और delete-all confirmation हों; recent copies केवल app के अपने actions से track हों।
- Character/word/line counts, readable monospaced code preview और plain-text formatting helpers जैसे trim/line ending normalization दो; original text silently modify मत करो।
- Sensitive snippet flag पर persistence/history off by default और reveal warning हो। Text को HTML की तरह render या clipboard data किसी server को send न करो।

### Logic और data behavior

Clipboard APIs के secure-context/permission requirements handle करो। Copy success toast केवल promise resolve होने पर दिखे; failure में select-text/manual-copy fallback दो।

### Animation और visual personality

Copy button tick transition, short toast और subtle pink card edge glow; background animation editor के पीछे बहुत faint हो। Default dark theme, readable typography और restrained pink/purple/blue/red accent system रखो; बाकी projects से अलग central layout हो।

### Empty, loading और error states

Clipboard denied/unavailable, empty selection, storage quota, malformed import और unsaved changes।

### Completion checks

HTTPS/localhost copy, permission denial, multiline/unicode text, manual fallback, refresh persistence और sensitive-snippet behavior verify करो। Shared checklist के responsive, keyboard, reduced-motion, data-safety और actual upload-size checks भी pass हों।

### बाद की delivery

इस numbered folder को independent runnable app में बदलना। Root `index.html`, local styles/scripts/assets, concise README और honest setup/browser-limit notes शामिल करना। Working preview verify होने के बाद ही Mini Projects में upload/scheduling का अगला चरण होगा; अभी न build, न upload, न deployment।

### Official implementation references

- [Reference 1](https://developer.mozilla.org/en-US/docs/Web/API/Clipboard_API)


---

<a id="project-18"></a>

## 18. Text-to-Speech Converter — VoxBloom

**Source:** आपकी screenshots की original list  
**Future app folder:** `mini-projects/18-text-to-speech-converter/`  
**Visual palette:** Night violet #100B22, purple #A78BFA, blue #38BDF8 और pink #F472B6

### Build prompt — उद्देश्य

Browser-provided voices से entered text सुनाने वाला readable narration studio बनाओ, बिना guaranteed voice availability या downloadable audio का झूठा वादा किए। Unique working mini app बनाओ, polished screenshot-only mockup नहीं। ऊपर दिए गए shared Build Standards लागू हों। Implementation शुरू करने की अनुमति मिलने पर इस specification से build करना; अभी यह planning document है।

### Layout और UX

Large writing pane, voice/rate/pitch controls और bottom playback bar; right में saved passages और sentence progress summary।

### ज़रूरी working features

- Text input, character/word count, available voice selector with language, Hindi/English filter, rate/pitch/volume sliders और short sample preview दें।
- Play, pause, resume और stop controls state के अनुसार हों; current sentence highlighting supported events/fallback के साथ काम करे।
- Long passages को sensible sentence chunks में बोलो; queue cancellation, selected voice changes और stop के बाद stale callbacks handle हों।
- getVoices और voiceschanged से asynchronously loaded voice list update हो; favourite voice preference तथा explicit saved passages locally persist हों।
- Speech availability device/browser पर depend होने का note दो। MP3 export या offline guarantee न दिखाओ; किसी voice की absence पर usable fallback और support message दो।

### Logic और data behavior

SpeechSynthesis utterance state machine बनाओ; user gesture से playback initiate करो। Voice URI/language preference missing होने पर available alternative select और notify करो; long narration में duplicate speech न बने।

### Animation और visual personality

Playback पर lightweight blue/purple equalizer और sentence focus; waveform केवल illustrative label के साथ, recorded real audio graph की तरह नहीं। Default dark theme, readable typography और restrained pink/purple/blue/red accent system रखो; बाकी projects से अलग central layout हो।

### Empty, loading और error states

No voices yet, unsupported browser, empty text, speech error और invalid restored voice के स्पष्ट messages।

### Completion checks

Late voice loading, available Hindi voice selection, long text, rapid play/stop, pause/resume, voice switch और page exit cleanup test करो। Shared checklist के responsive, keyboard, reduced-motion, data-safety और actual upload-size checks भी pass हों।

### बाद की delivery

इस numbered folder को independent runnable app में बदलना। Root `index.html`, local styles/scripts/assets, concise README और honest setup/browser-limit notes शामिल करना। Working preview verify होने के बाद ही Mini Projects में upload/scheduling का अगला चरण होगा; अभी न build, न upload, न deployment।

### Official implementation references

- [Reference 1](https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesis)


---

<a id="project-19"></a>

## 19. Product Filter List — NeonShelf

**Source:** आपकी screenshots की original list  
**Future app folder:** `mini-projects/19-product-filter-list/`  
**Visual palette:** Graphite #0C101B, blue #60A5FA, pink #EC4899 और violet #A78BFA

### Build prompt — उद्देश्य

Search, filters और sorting से product discovery दिखाने वाला functional catalogue बनाओ; checkout/payment integration का false claim नहीं। Unique working mini app बनाओ, polished screenshot-only mockup नहीं। ऊपर दिए गए shared Build Standards लागू हों। Implementation शुरू करने की अनुमति मिलने पर इस specification से build करना; अभी यह planning document है।

### Layout और UX

Header search/result count, desktop filter rail, responsive product grid और compare drawer; mobile में filter sheet with apply/reset।

### ज़रूरी working features

- कम से कम 24 original sample products with consistent title, category, price, rating, tags, stock और local thumbnail metadata दें; sample catalogue label रखें।
- Instant search, multi-category selection, price range, in-stock and rating filters; ascending/descending price और title sorts; active filter chips/remove-all हों।
- Wishlist locally persist हो; compare up to 3 products in accessible table; product detail modal में descriptions/specs दिखें।
- Filter state URL query में encode हो ताकि share/back/forward restore हो; large result list के लिए load-more या pagination और count consistent रहें।
- Mock cart optional हो तो explicit demo-only label, quantity validation और subtotal हो; buy/payment button बिना real flow के successful order न दिखाए।

### Logic और data behavior

Pure filtering pipeline बनाओ और price numeric field से sort करो। Query decode/validation, deterministic tie-break और wishlist IDs सही रहें; user content safe text में render हो।

### Animation और visual personality

Card hover edge glow और brief filter transition; blue grid ambience faint हो, resizing/filter पर cards unnecessarily reanimate न हों। Default dark theme, readable typography और restrained pink/purple/blue/red accent system रखो; बाकी projects से अलग central layout हो।

### Empty, loading और error states

No matches with reset CTA, empty wishlist, out-of-stock items और invalid query gracefully handle करो।

### Completion checks

Combined filters, exact price bounds, zero results, stable sorting, URL back/forward, compare cap और wishlist refresh persistence test करो। Shared checklist के responsive, keyboard, reduced-motion, data-safety और actual upload-size checks भी pass हों।

### बाद की delivery

इस numbered folder को independent runnable app में बदलना। Root `index.html`, local styles/scripts/assets, concise README और honest setup/browser-limit notes शामिल करना। Working preview verify होने के बाद ही Mini Projects में upload/scheduling का अगला चरण होगा; अभी न build, न upload, न deployment।


---

<a id="project-20"></a>

## 20. Music Player App — Nightwave

**Source:** आपकी screenshots की original list  
**Future app folder:** `mini-projects/20-music-player-app/`  
**Visual palette:** Deep ink #090D1B, violet #8B5CF6, pink #F472B6 और electric blue #38BDF8

### Build prompt — उद्देश्य

Local audio tracks और licensed sample music को play करने वाला responsive music player बनाओ जिसमें वास्तविक playback और playlist state जुड़ी हो। Unique working mini app बनाओ, polished screenshot-only mockup नहीं। ऊपर दिए गए shared Build Standards लागू हों। Implementation शुरू करने की अनुमति मिलने पर इस specification से build करना; अभी यह planning document है।

### Layout और UX

Album art hero, track library, queue panel और persistent transport bar; mobile पर bottom player और expandable now-playing view।

### ज़रूरी working features

- Play/pause, previous/next, seek bar, elapsed/duration, volume/mute, shuffle और repeat off/one/all दें; state actual audio events से reflect हो।
- Local files import, filename-based metadata, reorder/remove playlist और search हों। तीन छोटे original/licensed bundled samples और source/license notes दें।
- Favourite tracks, queue selection और preference persistence रखें; user-imported files browser restart पर फिर select करने पड़ें तो स्पष्ट बताएँ, absent blobs को playable मत दिखाओ।
- Optional visualizer Web Audio analyser से real frequency data दिखाए; no analyser support पर static album art रहे, fake spectrum को real claim न करें।
- Mini-player, keyboard shortcuts outside form controls और track loading indicators दें; broken file skip/retry और audio cleanup हों।

### Logic और data behavior

Autoplay permission और audio.play() rejection catch करो। Shuffle history/repeat transitions deterministic हों; removed track के object URL तथा audio nodes cleanup करो, queue end properly handle हो।

### Animation और visual personality

Playback-only slow album glow, subtle pink/blue equalizer और smooth progress; battery/performance के लिए hidden tab में visualizer बंद हो। Default dark theme, readable typography और restrained pink/purple/blue/red accent system रखो; बाकी projects से अलग central layout हो।

### Empty, loading और error states

Empty playlist, audio decode failure, unavailable local file after reload और user-gesture-required playback।

### Completion checks

Seek, pause/resume, ended-track transitions, repeat-one/all, shuffle, deleted current track, import/exported playlist limitations और mobile controls test करो। Shared checklist के responsive, keyboard, reduced-motion, data-safety और actual upload-size checks भी pass हों।

### बाद की delivery

इस numbered folder को independent runnable app में बदलना। Root `index.html`, local styles/scripts/assets, concise README और honest setup/browser-limit notes शामिल करना। Working preview verify होने के बाद ही Mini Projects में upload/scheduling का अगला चरण होगा; अभी न build, न upload, न deployment।


---

<a id="project-21"></a>

## 21. Kanban Task Board — FlowDock

**Source:** अतिरिक्त suggested project  
**Future app folder:** `mini-projects/21-kanban-task-board/`  
**Visual palette:** Midnight slate #0C1020, electric blue #38BDF8, purple #8B5CF6 और pink #F472B6

### Build prompt — उद्देश्य

To do → In progress → Done workflow वाला personal Kanban board बनाओ जिसे keyboard और touch से भी आसानी से manage किया जा सके। Unique working mini app बनाओ, polished screenshot-only mockup नहीं। ऊपर दिए गए shared Build Standards लागू हों। Implementation शुरू करने की अनुमति मिलने पर इस specification से build करना; अभी यह planning document है।

### Layout और UX

Board title/summary ऊपर; तीन clear columns और sticky add-task action; desktop side detail drawer, mobile horizontally navigable columns और list-view विकल्प।

### ज़रूरी working features

- Tasks create/edit/delete; title, description, priority, tags, due date और checklist; meaningful empty column तथा undo-delete action रखें।
- Drag-and-drop reorder/move support करो; हर card पर accessible Move to menu और keyboard alternative दें ताकि drag करना mandatory न हो।
- Search, tag/priority filters, overdue indicator और list/board view; completed tasks archive/unarchive तथा column counts accurately update हों।
- Task detail drawer में checklist completion और notes हों; board data versioned localStorage में save और JSON backup/import हो।
- Optional WIP limit per column और today summary जोड़ो; limit exceed warning advisory हो। कोई fake collaborative/live team feature न दिखाओ।

### Logic और data behavior

Stable IDs और explicit column/order fields हों; filtered view में reorder hidden tasks को accidentally delete/reorder न करे। Due date local calendar date हो, UTC midnight drift से बचो।

### Animation और visual personality

Smooth card lift/drop और subtle blue/purple column highlight; reduced motion तथा touch scroll के लिए simplified behavior। Default dark theme, readable typography और restrained pink/purple/blue/red accent system रखो; बाकी projects से अलग central layout हो।

### Empty, loading और error states

Empty board, no results, invalid imported board, unsaved edit और unavailable storage में recoverable feedback।

### Completion checks

Drag और menu move, keyboard flow, filtered ordering, reload persistence, archive restore, undo और mobile scroll test करो। Shared checklist के responsive, keyboard, reduced-motion, data-safety और actual upload-size checks भी pass हों।

### बाद की delivery

इस numbered folder को independent runnable app में बदलना। Root `index.html`, local styles/scripts/assets, concise README और honest setup/browser-limit notes शामिल करना। Working preview verify होने के बाद ही Mini Projects में upload/scheduling का अगला चरण होगा; अभी न build, न upload, न deployment।


---

<a id="project-22"></a>

## 22. Pomodoro Focus Timer — FocusEmber

**Source:** अतिरिक्त suggested project  
**Future app folder:** `mini-projects/22-pomodoro-focus-timer/`  
**Visual palette:** Obsidian #100C15, ember red #EF4444, pink #FB7185 और blue #38BDF8

### Build prompt — उद्देश्य

Custom work/break durations और honest session tracking वाला distraction-light focus timer बनाओ। Unique working mini app बनाओ, polished screenshot-only mockup नहीं। ऊपर दिए गए shared Build Standards लागू हों। Implementation शुरू करने की अनुमति मिलने पर इस specification से build करना; अभी यह planning document है।

### Layout और UX

बड़ा circular timer और start/pause/reset center; नीचे focus task, session sequence और today summary; settings compact drawer में।

### ज़रूरी working features

- Default focus 25min, short break 5min, long break 15min और हर 4 focus sessions पर long break; सभी durations user customize कर सके।
- Start/pause/resume/reset/skip; optional auto-start next mode; current phase, remaining time और next phase readable रहें।
- Focus task label, completed-session timeline, daily focused minutes और simple weekly chart; skipped sessions completion statistics में count न हों।
- Optional sound और user-click notification permission; browser limitations explain करो। Laptop/browser बंद होने पर background alarm guaranteed न बताओ।
- Local persistence से reload पर session recover करो; missed deadline पर one completion reconcile करो, unlimited missed cycles automatically credit मत करो।

### Logic और data behavior

Remaining time deadline/elapsed time से derive करो, decrementing setInterval को clock मत बनाओ। Pause remaining duration capture करे; reload तथा hidden tab completion idempotent रहें।

### Animation और visual personality

Slow ember breathing ring only during focus, break पर blue accents; no distracting moving particles near timer। Default dark theme, readable typography और restrained pink/purple/blue/red accent system रखो; बाकी projects से अलग central layout हो।

### Empty, loading और error states

Idle, running, paused, finished, recovered stale session और denied notifications clear हों।

### Completion checks

Duration change policy, pause/resume, hidden tab, reload, expiry recovery, skipped session और auto-start off/on test करो। Shared checklist के responsive, keyboard, reduced-motion, data-safety और actual upload-size checks भी pass हों।

### बाद की delivery

इस numbered folder को independent runnable app में बदलना। Root `index.html`, local styles/scripts/assets, concise README और honest setup/browser-limit notes शामिल करना। Working preview verify होने के बाद ही Mini Projects में upload/scheduling का अगला चरण होगा; अभी न build, न upload, न deployment।


---

<a id="project-23"></a>

## 23. Habit & Streak Tracker — StreakGarden

**Source:** अतिरिक्त suggested project  
**Future app folder:** `mini-projects/23-habit-streak-tracker/`  
**Visual palette:** Night plum #130E22, violet #A78BFA, pink #F472B6 और blue #38BDF8

### Build prompt — उद्देश्य

Daily/selected-weekday habits track करने वाला calendar-based app बनाओ जिसमें streaks और completion percentages सही logic से निकलें। Unique working mini app बनाओ, polished screenshot-only mockup नहीं। ऊपर दिए गए shared Build Standards लागू हों। Implementation शुरू करने की अनुमति मिलने पर इस specification से build करना; अभी यह planning document है।

### Layout और UX

Today habit checklist, weekly strip, monthly heatmap और selected habit detail pane; mobile पर clear today-first layout।

### ज़रूरी working features

- Habits create/edit/archive/delete; name, icon from local SVG set, color, daily or selected weekdays और optional numeric target हों।
- Today/previous dates check/uncheck; future days complete न करने दो। Numeric habit के लिए increment/decrement और target-completion status रखें।
- Current streak, best streak और completion ratio; non-scheduled days streak न तोड़ें और missed scheduled days accurate हों।
- Monthly calendar/heatmap, habit filters और weekly summary; archived habit historical data preserved रहे, permanent delete confirmation हो।
- Versioned local data backup/import, clear sample-data option और user-visible timezone/date convention दें; app closed होने पर reminders guaranteed न हों।

### Logic और data behavior

Habits और check-ins IDs+local YYYY-MM-DD से key करो। Today incomplete होने पर yesterday का active streak prematurely zero न करो; recurrence edits पुराने history के लिए explicit policy रखें।

### Animation और visual personality

Completion पर short bloom/check effect और subtle purple constellation; repeated toggles पर distracting full-screen confetti नहीं। Default dark theme, readable typography और restrained pink/purple/blue/red accent system रखो; बाकी projects से अलग central layout हो।

### Empty, loading और error states

No habits, unscheduled day, archived state, conflicting import और storage unavailable।

### Completion checks

Weekday recurrence, month/year boundaries, today pending, missed day, check undo, numeric target और archive restore test करो। Shared checklist के responsive, keyboard, reduced-motion, data-safety और actual upload-size checks भी pass हों।

### बाद की delivery

इस numbered folder को independent runnable app में बदलना। Root `index.html`, local styles/scripts/assets, concise README और honest setup/browser-limit notes शामिल करना। Working preview verify होने के बाद ही Mini Projects में upload/scheduling का अगला चरण होगा; अभी न build, न upload, न deployment।


---

<a id="project-24"></a>

## 24. Markdown Notes Editor — Inkspace

**Source:** अतिरिक्त suggested project  
**Future app folder:** `mini-projects/24-markdown-notes-editor/`  
**Visual palette:** Blue-black #080F1D, sapphire #60A5FA, orchid #C084FC और rose #F472B6

### Build prompt — उद्देश्य

Local-first Markdown note writing, search और safe preview वाला compact editor बनाओ। Unique working mini app बनाओ, polished screenshot-only mockup नहीं। ऊपर दिए गए shared Build Standards लागू हों। Implementation शुरू करने की अनुमति मिलने पर इस specification से build करना; अभी यह planning document है।

### Layout और UX

Notes sidebar, editor/preview split pane, status/footer; mobile editor/preview tabs और collapsible notebook list।

### ज़रूरी working features

- Notes create/rename/duplicate/delete, folders or tags, favourite, search और updated-time sorting हों; trash/restore with explicit permanent-delete action रखें।
- Markdown headings/lists/links/code/blockquote/table preview; edit-only, preview-only और split modes; formatting toolbar selection को सही wrap करे।
- Debounced autosave, word/character counts, unsaved/saved status और per-note cursor preservation; switching note में last edits खोएँ नहीं।
- Export .md और all-notes JSON backup/import; import conflict merge/replace user से चुनवाओ और replace से पहले backup दें।
- Local bundled parser plus sanitizer से preview सुरक्षित बनाओ; raw HTML disabled by default, scripts/event handlers/javascript URLs block हों। Remote images load केवल opt-in हो।

### Logic और data behavior

Source plain text रहे; sanitized output के अलावा innerHTML मत लगाओ। Versioned data schema और stale autosave protection हों; browser storage failure पर manual download backup available हो।

### Animation और visual personality

Short pane fade, restrained blue caret accent और purple active-note edge; typing area stable हो, particles editor के पीछे न चलें। Default dark theme, readable typography और restrained pink/purple/blue/red accent system रखो; बाकी projects से अलग central layout हो।

### Empty, loading और error states

Empty library, no search result, invalid import, save/quota error और note-delete undo।

### Completion checks

Autosave quick switch, malicious Markdown/URLs, export round trip, mobile mode change, trash restore और storage errors test करो। Shared checklist के responsive, keyboard, reduced-motion, data-safety और actual upload-size checks भी pass हों।

### बाद की delivery

इस numbered folder को independent runnable app में बदलना। Root `index.html`, local styles/scripts/assets, concise README और honest setup/browser-limit notes शामिल करना। Working preview verify होने के बाद ही Mini Projects में upload/scheduling का अगला चरण होगा; अभी न build, न upload, न deployment।


---

<a id="project-25"></a>

## 25. Color Palette & Gradient Studio — ChromaLab

**Source:** अतिरिक्त suggested project  
**Future app folder:** `mini-projects/25-color-gradient-studio/`  
**Visual palette:** Plum #100C1E, pink #EC4899, violet #8B5CF6 और blue #38BDF8; user palette preview main accents के साथ अलग region में

### Build prompt — उद्देश्य

Color palettes और CSS gradients design करने, copy/export करने तथा contrast assess करने वाला practical design utility बनाओ। Unique working mini app बनाओ, polished screenshot-only mockup नहीं। ऊपर दिए गए shared Build Standards लागू हों। Implementation शुरू करने की अनुमति मिलने पर इस specification से build करना; अभी यह planning document है।

### Layout और UX

Editable 5-color palette ऊपर; color inspector left, live UI preview center, gradient/contrast tabs नीचे; mobile inspector sheet।

### ज़रूरी working features

- Generate palette, individual color lock, add/remove up to 8 swatches, hex/RGB/HSL edit और harmonies like analogous/complementary हों।
- Copy individual code/palette CSS variables, saved palettes with names और JSON import/export; valid hex normalization तथा invalid input inline errors रखें।
- Linear/radial gradients, angle, color stops with positions और preview; generated CSS copy and explicit reset हों।
- Foreground/background contrast ratio और normal/large text labels दिखाओ; numerical calculation documented हो, केवल visual green/red badges पर भरोसा न करो।
- Live preview में button/card/text/input samples दिखाओ; random palette के low-contrast combinations पर warning हो। User-created palette app की own controls unreadable न बनाए।

### Logic और data behavior

sRGB channels linearize करके relative luminance और contrast ratio calculate करो। Gradient stops bounds/ordering validate करो; color conversions predictable rounding के साथ हों।

### Animation और visual personality

Short swatch color crossfade, gradient preview gently animated only on opt-in; toolbar stable black/plum रहे। Default dark theme, readable typography और restrained pink/purple/blue/red accent system रखो; बाकी projects से अलग central layout हो।

### Empty, loading और error states

Invalid colors, all swatches locked, duplicate import और clipboard failure gracefully handle हों।

### Completion checks

Black/white contrast 21:1, identical colors 1:1, color round trips, locked generation, stop reordering, exported CSS और saved palette persistence test करो। Shared checklist के responsive, keyboard, reduced-motion, data-safety और actual upload-size checks भी pass हों।

### बाद की delivery

इस numbered folder को independent runnable app में बदलना। Root `index.html`, local styles/scripts/assets, concise README और honest setup/browser-limit notes शामिल करना। Working preview verify होने के बाद ही Mini Projects में upload/scheduling का अगला चरण होगा; अभी न build, न upload, न deployment।

### Official implementation references

- [Reference 1](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html)


---

<a id="project-26"></a>

## 26. JSON Formatter & Validator — DataLens

**Source:** अतिरिक्त suggested project  
**Future app folder:** `mini-projects/26-json-formatter-validator/`  
**Visual palette:** Night navy #09101E, blue #38BDF8, purple #A78BFA और error pink/red #FB7185

### Build prompt — उद्देश्य

JSON locally format, validate और inspect करने वाला developer tool बनाओ; sensitive pasted data कहीं upload न हो। Unique working mini app बनाओ, polished screenshot-only mockup नहीं। ऊपर दिए गए shared Build Standards लागू हों। Implementation शुरू करने की अनुमति मिलने पर इस specification से build करना; अभी यह planning document है।

### Layout और UX

Input/output split editor, action toolbar और optional collapsible tree view; mobile input/output tabs with visible validation result।

### ज़रूरी working features

- Format with 2/4/tab indentation, minify, validate, copy output, clear and download .json actions; last successful output stale हो तो label करो।
- Syntax error message और best-effort line/column highlight दो; browser parse error message vary हो तो unverified precision claim न करो।
- Searchable expandable tree view, array/object item counts और clicked node का JSON path copy; very deep/large trees virtualize या cap करो।
- Local .json import with size cap, explicit sample datasets, word/byte counts और one-click input/output swap रखें।
- Sensitive input persistence default off; optional explicit local-save warning हो। Comments/trailing commas auto fix केवल optional separate action और visible diff/change summary से हो।

### Logic और data behavior

JSON.parse, safe text rendering और iterative/capped traversal प्रयोग करो; eval नहीं। Large integer precision limitations explain और risky values warning दें; imported __proto__ keys से prototype mutation न हो।

### Animation और visual personality

Quiet blue syntax accents और short success outline; typing/validation के दौरान animated particles या flashy errors नहीं। Default dark theme, readable typography और restrained pink/purple/blue/red accent system रखो; बाकी projects से अलग central layout हो।

### Empty, loading और error states

Empty input, invalid JSON, size/depth limit, clipboard error और unsupported file type।

### Completion checks

Nested arrays, unicode escapes, null, malformed/trailing commas, deep tree, large numbers, suspicious keys और format/minify semantic round trip test करो। Shared checklist के responsive, keyboard, reduced-motion, data-safety और actual upload-size checks भी pass हों।

### बाद की delivery

इस numbered folder को independent runnable app में बदलना। Root `index.html`, local styles/scripts/assets, concise README और honest setup/browser-limit notes शामिल करना। Working preview verify होने के बाद ही Mini Projects में upload/scheduling का अगला चरण होगा; अभी न build, न upload, न deployment।


---

<a id="project-27"></a>

## 27. Unit Converter — MeasureLoop

**Source:** अतिरिक्त suggested project  
**Future app folder:** `mini-projects/27-unit-converter/`  
**Visual palette:** Graphite navy #0C1220, electric blue #38BDF8, purple #8B5CF6 और pink #F472B6

### Build prompt — उद्देश्य

Offline everyday unit conversion tool बनाओ जिसमें formula, precision और units समझ में आएँ। Unique working mini app बनाओ, polished screenshot-only mockup नहीं। ऊपर दिए गए shared Build Standards लागू हों। Implementation शुरू करने की अनुमति मिलने पर इस specification से build करना; अभी यह planning document है।

### Layout और UX

Category tabs/icons, two synchronized value/unit panes और swap; नीचे formula explanation तथा favourite pairs/history।

### ज़रूरी working features

- Length, mass, temperature, area, volume, speed, time और digital storage categories शामिल करो; common SI/imperial units और searchable selector दें।
- Input either side से conversion, swap, precision 0–8 decimals और copy result हों; empty input को silently zero मत बनाओ।
- Temperature offsets, negative temperature allowance और physically invalid below-absolute-zero warning; other domains में invalid negatives clearly handle करो।
- Digital storage में decimal KB/MB और binary KiB/MiB का difference labels में दो; speed km/h,m/s,mph conversions explicit हों।
- Favourite conversion pairs, last used category/preferences और optional recent history locally persist हों; quick reference table current selected unit से बन सके।

### Logic और data behavior

One canonical base per category; temperature affine formulas अलग रखें। Approximation/display rounding final stage पर हो; very large scientific notation safely handle करो और Infinity/NaN expose मत करो।

### Animation और visual personality

Swap arrow rotation, result microfade और subtle blue orbit lines; numbers update बिना layout jump हों। Default dark theme, readable typography और restrained pink/purple/blue/red accent system रखो; बाकी projects से अलग central layout हो।

### Empty, loading और error states

Empty/invalid/exponent overflow input, incompatible category selection और unavailable storage।

### Completion checks

0°C=32°F, 1in=2.54cm, 1KiB=1024B, 1km/h=1/3.6m/s, round trips, precision और category switch test करो। Shared checklist के responsive, keyboard, reduced-motion, data-safety और actual upload-size checks भी pass हों।

### बाद की delivery

इस numbered folder को independent runnable app में बदलना। Root `index.html`, local styles/scripts/assets, concise README और honest setup/browser-limit notes शामिल करना। Working preview verify होने के बाद ही Mini Projects में upload/scheduling का अगला चरण होगा; अभी न build, न upload, न deployment।


---

<a id="project-28"></a>

## 28. Memory Match Game — EchoTiles

**Source:** अतिरिक्त suggested project  
**Future app folder:** `mini-projects/28-memory-match-game/`  
**Visual palette:** Dark plum #110D21, violet #A78BFA, pink #F472B6, blue #38BDF8 और red #FB7185

### Build prompt — उद्देश्य

Responsive card-pair memory game बनाओ जिसमें clear rules, fair scoring और polished playful feedback हों। Unique working mini app बनाओ, polished screenshot-only mockup नहीं। ऊपर दिए गए shared Build Standards लागू हों। Implementation शुरू करने की अनुमति मिलने पर इस specification से build करना; अभी यह planning document है।

### Layout और UX

Difficulty/theme setup card, central tile board, timer/moves stats ऊपर और results/replay modal; mobile cards comfortable touch size में।

### ज़रूरी working features

- Easy 4×4, medium 4×5, hard 6×6 pair boards; original SVG symbol themes जैसे space, music और geometry; instructions तथा new-game confirmation रखें।
- First card flip पर timer शुरू, turn में केवल 2 unmatched cards; match stays revealed, mismatch short delay के बाद hides।
- Move count, time, matches, pause/resume और restart; pause में board covered हो ताकि free study advantage न मिले।
- Local best scores per difficulty, result summary, play again और optional small sound toggle; hint action move/time penalty के साथ clearly marked assisted result हो।
- Keyboard grid navigation और Enter/Space flip; card announcements पहचान केवल revealed state में दें, face-down aria labels answer leak न करें।

### Logic और data behavior

Fisher–Yates shuffle, explicit idle/one-open/resolving/paused/finished state और round ID से stale flip timers cancel करो। Timer elapsed/deadline-based रहे; matched cards दोबारा select न हों।

### Animation और visual personality

Short 3D flip, match glow और finish confetti limited duration; reduced-motion में simple reveal, color-only matching न हो। Default dark theme, readable typography और restrained pink/purple/blue/red accent system रखो; बाकी projects से अलग central layout हो।

### Empty, loading और error states

Initial setup, resolving turn, paused, finished और reset confirmation स्पष्ट हों।

### Completion checks

Fast triple clicks, same card double click, restart during mismatch, pause/resume, all-pairs completion, keyboard-only play और score persistence test करो। Shared checklist के responsive, keyboard, reduced-motion, data-safety और actual upload-size checks भी pass हों।

### बाद की delivery

इस numbered folder को independent runnable app में बदलना। Root `index.html`, local styles/scripts/assets, concise README और honest setup/browser-limit notes शामिल करना। Working preview verify होने के बाद ही Mini Projects में upload/scheduling का अगला चरण होगा; अभी न build, न upload, न deployment।


---

<a id="project-29"></a>

## 29. Image Compressor & Resizer — PixelLite

**Source:** अतिरिक्त suggested project  
**Future app folder:** `mini-projects/29-image-compressor-resizer/`  
**Visual palette:** Ink #0B1020, electric blue #60A5FA, violet #A78BFA और hot pink #EC4899

### Build prompt — उद्देश्य

Browser के अंदर local images resize और compress करने वाला privacy-first utility बनाओ जिसमें actual size savings दिखें। Unique working mini app बनाओ, polished screenshot-only mockup नहीं। ऊपर दिए गए shared Build Standards लागू हों। Implementation शुरू करने की अनुमति मिलने पर इस specification से build करना; अभी यह planning document है।

### Layout और UX

Drag/drop upload area, original/processed preview pair, resize/quality controls और output/download card; mobile before/after tabs।

### ज़रूरी working features

- JPEG/PNG/WebP local import, drag/drop and file picker; single-image MVP, optional bounded batch up to 5 files। MIME/decode/file-size limits explicit रखें।
- Width/height, locked aspect ratio, presets और quality slider; output JPEG/PNG/WebP availability browser capability से तय हो। PNG पर lossy quality slider का fake असर न दिखाओ।
- Original/output dimensions, bytes, percentage reduction और preview दिखाओ; output बड़ा बने तो honest 'size increased' badge हो।
- Transparent image JPEG में convert करने से पहले chosen background color और warning दें; orientation correct preview verify करो। GIF/SVG unsupported initial scope में साफ़ संदेश दें।
- Process/download/reset, progress/loading state और all-local privacy note; source file कभी mutate/upload न हो। Animated GIF/video/document support claim न करें।

### Logic और data behavior

createImageBitmap/Image decode → bounded canvas → toBlob pipeline, actual returned MIME check और object URL cleanup करो। Huge pixel dimensions reject/downscale policy रखें ताकि browser crash न हो; slider events debounce हों।

### Animation और visual personality

Brief preview crossfade और blue processing ring; actual progress unknown हो तो indeterminate indicator, fake percentages नहीं। Default dark theme, readable typography और restrained pink/purple/blue/red accent system रखो; बाकी projects से अलग central layout हो।

### Empty, loading और error states

Unsupported/corrupt image, excessive dimensions, output encoding failure, missing transparency support और empty state।

### Completion checks

Landscape/portrait orientation, alpha-to-JPEG, PNG quality behavior, actual file download/MIME, larger output case, reset cleanup और mobile memory limits test करो। Shared checklist के responsive, keyboard, reduced-motion, data-safety और actual upload-size checks भी pass हों।

### बाद की delivery

इस numbered folder को independent runnable app में बदलना। Root `index.html`, local styles/scripts/assets, concise README और honest setup/browser-limit notes शामिल करना। Working preview verify होने के बाद ही Mini Projects में upload/scheduling का अगला चरण होगा; अभी न build, न upload, न deployment।


---

<a id="project-30"></a>

## 30. Decision Wheel — OrbitChoice

**Source:** अतिरिक्त suggested project  
**Future app folder:** `mini-projects/30-decision-wheel/`  
**Visual palette:** Black plum #100C1B, rose red #F43F5E, purple #8B5CF6 और blue #38BDF8

### Build prompt — उद्देश्य

User choices में transparent random selection करने वाला animated wheel बनाओ, casual decisions के लिए; gambling या high-stakes निर्णय tool नहीं। Unique working mini app बनाओ, polished screenshot-only mockup नहीं। ऊपर दिए गए shared Build Standards लागू हों। Implementation शुरू करने की अनुमति मिलने पर इस specification से build करना; अभी यह planning document है।

### Layout और UX

Large labeled wheel center/left, editable option list right, spin/result controls below; mobile options drawer and always-visible result।

### ज़रूरी working features

- Options add/edit/remove, paste one-per-line list, optional weights 1–10 और equal-weight reset; 2–30 entries की clear limits रखें।
- Spin, cancel/reset before next round, result announcement और recent history हों; spin के दौरान editing disabled या safely deferred हो।
- Weighted mode में segment size weight को reflect करे और probability per entry visible हो। Duplicate labels के internal unique IDs हों।
- Optional remove winner for next round, saved lists/presets locally persist और JSON export/import हों; large labels wrap/truncate tooltip में full text हो।
- Cryptographic random selection को unbiased mapping से करें; animation का landing angle selected segment center पर जाए। Sample seeded mode हो तो clearly labeled demo हो, normal randomness की जगह नहीं।

### Logic और data behavior

Winning option पहले unbiased weighted draw से choose करो, फिर animation resolve करो; CSS duration/render speed result को influence न करें। Stale spin callbacks round IDs से cancel हों और history once append हो।

### Animation और visual personality

Smooth easing wheel spin, gentle red/purple starfield और short winner celebration; reduced-motion पर direct reveal और result text हमेशा readable। Default dark theme, readable typography और restrained pink/purple/blue/red accent system रखो; बाकी projects से अलग central layout हो।

### Empty, loading और error states

Too few options, invalid weights/import, all options removed, spinning and result states के clear controls।

### Completion checks

Weight bounds, label duplicates, pointer landing consistency, rapid spin clicks, reset during animation, remove winner और reduced-motion result test करो। Shared checklist के responsive, keyboard, reduced-motion, data-safety और actual upload-size checks भी pass हों।

### बाद की delivery

इस numbered folder को independent runnable app में बदलना। Root `index.html`, local styles/scripts/assets, concise README और honest setup/browser-limit notes शामिल करना। Working preview verify होने के बाद ही Mini Projects में upload/scheduling का अगला चरण होगा; अभी न build, न upload, न deployment।
