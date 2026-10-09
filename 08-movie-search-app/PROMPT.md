# 08. Movie Search App — Framehunt

**स्थिति:** केवल prompt; app अभी build नहीं हुई है।

**Source:** आपकी screenshots की original list  
**Future app folder:** `mini-projects/08-movie-search-app/`  
**Visual palette:** Cinema black #0F0B14, crimson #EF4444, violet #7C3AED और blue #60A5FA

## Build prompt — उद्देश्य

Movie discovery app बनाओ जिसमें search, filters, details और local watchlist हों। Unique working mini app बनाओ, polished screenshot-only mockup नहीं। पहले [shared Build Standards](../BUILD-STANDARDS.md) पढ़ो और लागू करो। Implementation शुरू करने की अनुमति मिलने पर इस specification से build करना; अभी यह planning document है।

## Layout और UX

Wide cinematic header, search bar, genre/year filters, poster grid और accessible movie detail drawer; mobile पर two-column grid।

## ज़रूरी working features

- Search with 350ms debounce, genre/year sort controls, paginated results और watchlist-only filter; search clear/reset आसान हो।
- Details में synopsis, release year, genres, runtime और source rating; absent fields को Unknown/Unavailable कहो, invent न करो।
- Local watchlist add/remove, watched marker और persisted favourites; copied share URL selected movie खोल सके।
- TMDB integration optional configured secure proxy endpoint के जरिए; missing credentials में clearly marked local sample catalog searchable रहे। Repository/browser bundle में privileged token embed न करो।
- Official attribution और image-source credit जोड़ो; trailer केवल validated external link हो, unlicensed video या movie playback नहीं। Skeletons और poster fallback रखो।

## Logic और data behavior

AbortController से stale searches cancel करो; search results/watchlist normalised IDs पर merge हों। Proxy requirements README में अलग लिखो ताकि base demo GitHub Pages पर चल सके।

## Animation और visual personality

Card hover spotlight, detail drawer fade और low-opacity crimson cinema glow; trailer audio autoplay न हो। Default dark theme, readable typography और restrained pink/purple/blue/red accent system रखो; बाकी projects से अलग central layout हो।

## Empty, loading और error states

No results, bad proxy config, API rate limit, broken poster और offline sample mode अलग पहचानने योग्य हों।

## Completion checks

Rapid searches, empty query, pagination, watchlist reload, missing poster और no-credentials demo mode verify करो। Shared checklist के responsive, keyboard, reduced-motion, data-safety और actual upload-size checks भी pass हों।

## बाद की delivery

इस numbered folder को independent runnable app में बदलना। Root `index.html`, local styles/scripts/assets, concise README और honest setup/browser-limit notes शामिल करना। Working preview verify होने के बाद ही Mini Projects में upload/scheduling का अगला चरण होगा; अभी न build, न upload, न deployment।

## Official implementation references

- [Reference 1](https://developer.themoviedb.org/docs/authentication-application)
- [Reference 2](https://developer.themoviedb.org/docs/faq)
