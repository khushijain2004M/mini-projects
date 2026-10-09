# 19. Product Filter List — NeonShelf

**स्थिति:** केवल prompt; app अभी build नहीं हुई है।

**Source:** आपकी screenshots की original list  
**Future app folder:** `mini-projects/19-product-filter-list/`  
**Visual palette:** Graphite #0C101B, blue #60A5FA, pink #EC4899 और violet #A78BFA

## Build prompt — उद्देश्य

Search, filters और sorting से product discovery दिखाने वाला functional catalogue बनाओ; checkout/payment integration का false claim नहीं। Unique working mini app बनाओ, polished screenshot-only mockup नहीं। पहले [shared Build Standards](../BUILD-STANDARDS.md) पढ़ो और लागू करो। Implementation शुरू करने की अनुमति मिलने पर इस specification से build करना; अभी यह planning document है।

## Layout और UX

Header search/result count, desktop filter rail, responsive product grid और compare drawer; mobile में filter sheet with apply/reset।

## ज़रूरी working features

- कम से कम 24 original sample products with consistent title, category, price, rating, tags, stock और local thumbnail metadata दें; sample catalogue label रखें।
- Instant search, multi-category selection, price range, in-stock and rating filters; ascending/descending price और title sorts; active filter chips/remove-all हों।
- Wishlist locally persist हो; compare up to 3 products in accessible table; product detail modal में descriptions/specs दिखें।
- Filter state URL query में encode हो ताकि share/back/forward restore हो; large result list के लिए load-more या pagination और count consistent रहें।
- Mock cart optional हो तो explicit demo-only label, quantity validation और subtotal हो; buy/payment button बिना real flow के successful order न दिखाए।

## Logic और data behavior

Pure filtering pipeline बनाओ और price numeric field से sort करो। Query decode/validation, deterministic tie-break और wishlist IDs सही रहें; user content safe text में render हो।

## Animation और visual personality

Card hover edge glow और brief filter transition; blue grid ambience faint हो, resizing/filter पर cards unnecessarily reanimate न हों। Default dark theme, readable typography और restrained pink/purple/blue/red accent system रखो; बाकी projects से अलग central layout हो।

## Empty, loading और error states

No matches with reset CTA, empty wishlist, out-of-stock items और invalid query gracefully handle करो।

## Completion checks

Combined filters, exact price bounds, zero results, stable sorting, URL back/forward, compare cap और wishlist refresh persistence test करो। Shared checklist के responsive, keyboard, reduced-motion, data-safety और actual upload-size checks भी pass हों।

## बाद की delivery

इस numbered folder को independent runnable app में बदलना। Root `index.html`, local styles/scripts/assets, concise README और honest setup/browser-limit notes शामिल करना। Working preview verify होने के बाद ही Mini Projects में upload/scheduling का अगला चरण होगा; अभी न build, न upload, न deployment।
