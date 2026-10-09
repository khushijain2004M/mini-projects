# सभी 30 Mini Projects के लिए Build Standards

## अभी की सीमा

इस folder में अभी केवल planning और prompts हैं। इन prompts को अभी execute मत करो: app files बनाना, dependencies install करना, website में projects add करना, bot schedule/start करना, GitHub push या Cloudflare deployment इस phase का हिस्सा नहीं है। Implementation केवल अगले स्पष्ट निर्देश पर होगी। Portfolio folder अभी untouched रहेगा।

## 1. Product scope और project identity

- Screenshot वाले 01–20 projects के नाम और क्रम बनाए रखो। 21–30 अतिरिक्त suggestions हैं। हर app independently usable mini project हो; यह AUTOGIT admin dashboard की replacement नहीं है।
- Original project title को README और future portfolio card में रखो; prompt का unique brand name app की visual identity है। Names availability/trademark clearance का दावा नहीं है।
- हर prompt की core features, error handling और completion checks working हों। Optional features अलग mark हों; mini-project scope से बाहर multi-user auth/payment/server infrastructure बिना अनुमति न जोड़ो।
- सभी 30 को एक ही dashboard template की copy मत बनाओ। Layout, typography hierarchy, central interaction और background motif हर project के काम से मेल खाएँ।

## 2. Dark visual system

- Default charcoal/ink/plum/navy dark background हो। Hot pink, purple, electric blue और red के CSS accent tokens रखो; प्रत्येक app का dominant accent उसके prompt के अनुसार हो। चारों bright colors बराबर मात्रा में फैलाकर visual noise मत बनाओ।
- Individual prompt की palette starting point है; contrast checks के बाद shades tune कर सकते हो। Default dark रहे; project 15 का deliberate light/system mode उसका functional exception है।
- Modern, readable typography: heading के लिए Sora/Manrope जैसा clean geometric font, body के लिए Inter/system sans, code/numbers के लिए suitable mono। Local licensed subset/font हो या reliable system fallback; network font पर initial render block न हो। Hindi copy हो तो Devanagari-capable fallback रखो।
- Body text लगभग 15–16 px, comfortable line height; tiny grey text और ornamental unreadable fonts नहीं। Spacing consistent, hierarchy साफ़, panels purpose-specific और primary action obvious हो।
- Normal text के लिए कम से कम 4.5:1 और large text के लिए 3:1 contrast verify करो; gradients पर weakest region जाँचो। Error/success के लिए text/icon भी हों, केवल रंग नहीं। [W3C contrast guidance](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html)
- Original inline SVG icons, CSS gradients और canvas/SVG graphics preferable हों। Licensed images/audio/fonts उपयोग हों तो source और license लिखो; copyrighted songs/movie footage default bundle न हों।
- Background decorative, sparse और subtle हो: particles, aurora, stars, waves या orbit motif project के अनुसार। Decorative layer पर pointer-events: none हो; buttons/input कभी overlay के कारण unclickable न बनें। Unexplained left-edge lines और unwanted horizontal scroll न हों।

## 3. Animation और performance

- Hover/focus/press/result transitions लगभग 150–250 ms; meaningful screen/state change बिना forced loading delay के immediate हो। Animations response को रोकने वाली decoration न हों।
- prefers-reduced-motion में particles/parallax/3D motion disable या simplify हों। Motion toggle जहाँ continuous ambience है वहाँ available हो।
- CSS transform/opacity और requestAnimationFrame को prefer करो; high-cost blur, huge shadows और per-frame DOM layout reads avoid करो। Particle count/device quality adaptive हो।
- Hidden tabs में ambient animation/audio visualization pause करो; component/page cleanup में RAF, timers, observers, listeners, audio nodes और object URLs release हों।
- Heavy media lazy load; image dimensions reserve; filtering/input updates debounce only where needed। Valid user actions पर gratuitous spinners या artificial wait नहीं।
- 320/375 px phone, 768 px tablet और 1440 px desktop पर usable layout verify करो। Touch controls लगभग 44 px target area, readable forms और mobile navigation हों।

## 4. Technical delivery: independent static apps

- Plain HTML + CSS + modular JavaScript default stack रखें। Small locally bundled, version-pinned libraries केवल वास्तविक आवश्यकता पर; license include करें। Framework तभी जब meaningful benefit हो, और upload के लिए runnable static artifact निकले।
- Future upload folder के root में index.html हो; styles.css/app.js और assets/ जैसी simple structure रखें। Relative paths जैसे ./assets/... उपयोग हों ताकि GitHub Pages के /repo-name/ subpath पर भी demo चले।
- Root-absolute asset URLs, unconfigured SPA routes और local machine filesystem links नहीं। Internal states के लिए hash/query routing enough है; direct refresh/links test हों।
- AUTOGIT के वर्तमान upload validation में प्रति project अधिकतम 40 files और 5 × 1024 × 1024 bytes total हैं। Generated runnable folder इस cap के भीतर रखें; 12–24 thumbnails और short sample audio के लिए compressed local assets/original SVG उपयोग हों।
- .git, node_modules, .env, .wrangler, dist/build जैसे generated/dependency directories upload में excluded हैं। अगर build step हो तो selected upload folder में prebuilt root index.html और required runtime files रखें, excluded nested dist/ पर निर्भर न हों।
- 30-project planning folder एक साथ upload मत करो। Future में हर ready project का individual app folder upload होगा। API secrets, auth keys, credentials और source maps containing secrets कभी bundle न हों।
- Each project README में local serving, controls, features, browser support, limitations, licenses और hosting/subpath notes हों। Service worker initial scope में जरूरी नहीं; stale caching और cross-project scope conflicts avoid करो।

## 5. Data, APIs, security और honest behavior

- Network-free app default हो जहाँ संभव हो। Weather/currency जैसे public-data apps में source, data timestamp, retry, timeout, cancellation और clearly stale cache हों।
- Movie API जैसी authenticated service का secret client-side code में छिपाया नहीं जा सकता। Optional secured proxy adapter अलग documented interface हो; initial static demo sample data से usable और साफ़ labeled रहे। Proxy/backend deploy करना अलग permission वाला phase है।
- API data और fixture/sample data कभी मिलाकर real/live claim मत करो। Unsupported browser features, audio restrictions और platform limitations visible हों।
- localStorage keys brand/project namespace से शुरू हों; data schema version, parsing guards और quota/security-error handling रखें। Media/large data के लिए IndexedDB केवल scope में आवश्यक हो तो।
- Import JSON/file limits validate हों; backups का replace/merge behavior explicit हो। Passwords, Wi-Fi credentials और sensitive snippets default persistence/history में नहीं।
- User data safe text rendering से दिखाओ; Markdown preview sanitize करो। eval नहीं; unsafe URLs/events और prototype-pollution paths block हों। CSV export में quoting और spreadsheet-formula injection precautions हों।
- कोई hidden analytics, clipboard monitoring, remote data upload, fake login/account creation या fake success toast नहीं। Clear/delete actions के targets समझ में आएँ, irreversible deletes पर confirmation या undo हो।
- Timer apps deadline/elapsed clock से work करें। Browser/laptop बंद होने पर notifications/timers की guaranteed service का दावा न करें; केवल AUTOGIT का deployed backend scheduling अलग mechanism है।

## 6. Accessibility और interaction

- Semantic buttons/labels, keyboard navigation, visible focus, meaningful alt text और accessible status announcements हों। Icon-only actions का accessible name हो।
- Modal में focus trap, Escape close और focus restore; controls का disabled होने का reason visible हो। Input में typing करते समय global shortcuts hijack न करें।
- Charts के साथ text/table summary; card flips, color warnings और audio-only cues के लिए non-visual/non-audio alternatives हों।
- Form errors field के पास हों, submission error summary readable हो। Loading/empty/error/success states सभी designed और usable हों।

## 7. Future AUTOGIT / Git / Portfolio handoff

- Build complete होने पर केवल approved workflow से individual project को AUTOGIT के Mini Projects collection में add करें। Metadata: original title, short description, technology list और approved demoUrl।
- Working public demo बने बिना fabricated demo link न डालें। GitHub repository push अपने-आप GitHub Pages setup होने की guarantee नहीं; public demo की successful deployment और URL अलग verify करें।
- Bot queue, per-project date/time और portfolio sync current backend से verify होंगे, hardcoded UI labels से नहीं। इस prompt phase में schedule dates तय/assign नहीं की गई हैं।
- Future user निर्देश के अनुसार website upload के बाद automatic bot push test करें; manual git push करके उसे automatic success न बताएं।
- Portfolio folder या remote repos mutate/delete करने से पहले उस specific चरण का scope फिर जाँचे। Prompt documents upload करके उन्हें working projects की तरह publish न करें।

## 8. प्रत्येक project की Definition of Done (बाद में build करते समय)

1. Core user journey और prompt की सभी completion checks pass हों; remaining limitations README में साफ़ हों।
2. Actual controls working, forms/inputs validated, empty/loading/error states present; console में uncaught errors नहीं।
3. Mobile, keyboard-only, reduced-motion, refresh persistence और applicable offline/API-failure behavior verify हो।
4. Local static server तथा GitHub-style subpath पर assets/links/navigation check हों; initial render external blocked resources पर stuck न हो।
5. Real files/asset budget measured हो; no secrets, no node_modules और licenses included हों।
6. README, meaningful preview/screenshot, metadata और runnable index.html ready हों; कौन-से tests वास्तव में चले उनकी short report हो।
7. AutoGit upload/remote push/deploy केवल तब जब user explicitly आगे वाला चरण माँगे। Build और upload verification अलग outcomes हैं।

## Official references

इन links को implementation के समय फिर verify करें; API terms/compatibility बदल सकते हैं।

- [Open-Meteo forecast documentation](https://open-meteo.com/en/docs)
- [Open-Meteo geocoding documentation](https://open-meteo.com/en/docs/geocoding-api)
- [TMDB application authentication](https://developer.themoviedb.org/docs/authentication-application)
- [TMDB FAQ / usage notes](https://developer.themoviedb.org/docs/faq)
- [Frankfurter reference-rate API](https://frankfurter.dev/)
- [MDN Clipboard API](https://developer.mozilla.org/en-US/docs/Web/API/Clipboard_API)
- [MDN SpeechSynthesis](https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesis)
- [W3C contrast guidance](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html)
