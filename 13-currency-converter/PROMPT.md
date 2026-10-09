# 13. Currency Converter — RateOrbit

**स्थिति:** केवल prompt; app अभी build नहीं हुई है।

**Source:** आपकी screenshots की original list  
**Future app folder:** `mini-projects/13-currency-converter/`  
**Visual palette:** Midnight #07111F, sapphire #3B82F6, purple #A78BFA और rose #FB7185

## Build prompt — उद्देश्य

Published reference exchange rates से transparent currency conversion app बनाओ; इसे live trading या real-time tick feed की तरह advertise मत करो। Unique working mini app बनाओ, polished screenshot-only mockup नहीं। पहले [shared Build Standards](../BUILD-STANDARDS.md) पढ़ो और लागू करो। Implementation शुरू करने की अनुमति मिलने पर इस specification से build करना; अभी यह planning document है।

## Layout और UX

Hero conversion card में amount, from/to selectors और swap; नीचे reference-rate date, recent pairs और compact history chart। Mobile पर thumb-friendly stacked selectors।

## ज़रूरी working features

- Searchable currency selectors, amount input, from/to swap और INR/USD/EUR जैसे quick pairs जोड़ो; supported currencies API response से तय हों।
- Converted amount, unit exchange rate, inverse rate, source और rate की date दिखाओ। Decimal handling तथा display rounding currency के अनुसार हों।
- 7/30/90-day historical trend chart, selected pair favourites और recent conversions रखो; missing dates/weekends को fabricate मत करो।
- Frankfurter v2 adapter जैसे free no-key reference-rate source का प्रयोग करो; README में terms/source और limits explain करो। Rate date को fetch timestamp से अलग रखो।
- Offline cache हो तो last-known rate और stale badge स्पष्ट दिखाओ; manual refresh, timeout और rapid-selection request cancellation हों।

## Logic और data behavior

Same currency का result unchanged रहे; currency swap पर amount behavior स्पष्ट हो। Historical endpoint unavailable होने पर chart unavailable दिखाओ, invented trend नहीं।

## Animation और visual personality

Swap icon rotation, result transition और blue chart reveal; background में restrained orbital arcs, finance ticker जैसी fake activity नहीं। Default dark theme, readable typography और restrained pink/purple/blue/red accent system रखो; बाकी projects से अलग central layout हो।

## Empty, loading और error states

Unsupported pair, unavailable source, offline/stale rate, invalid/negative input और empty history के लिए practical guidance।

## Completion checks

Same-currency result, swap twice, zero/decimal input, stale cache, rapidly changing pairs और API failure test करो; source date हर result के साथ बनी रहे। Shared checklist के responsive, keyboard, reduced-motion, data-safety और actual upload-size checks भी pass हों।

## बाद की delivery

इस numbered folder को independent runnable app में बदलना। Root `index.html`, local styles/scripts/assets, concise README और honest setup/browser-limit notes शामिल करना। Working preview verify होने के बाद ही Mini Projects में upload/scheduling का अगला चरण होगा; अभी न build, न upload, न deployment।

## Official implementation references

- [Reference 1](https://frankfurter.dev/)
