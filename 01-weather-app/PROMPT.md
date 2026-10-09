# 01. Weather App — Stormglass

**स्थिति:** केवल prompt; app अभी build नहीं हुई है।

**Source:** आपकी screenshots की original list  
**Future app folder:** `mini-projects/01-weather-app/`  
**Visual palette:** Midnight blue #080F22, electric blue #38BDF8, violet #8B5CF6 और alert coral #FB7185

## Build prompt — उद्देश्य

किसी city की current weather और forecast को साफ़, उपयोगी dashboard में दिखाने वाला weather app बनाओ। Unique working mini app बनाओ, polished screenshot-only mockup नहीं। पहले [shared Build Standards](../BUILD-STANDARDS.md) पढ़ो और लागू करो। Implementation शुरू करने की अनुमति मिलने पर इस specification से build करना; अभी यह planning document है।

## Layout और UX

Desktop पर city search और saved-city rail, बीच में बड़ी temperature/weather illustration, नीचे hourly strip और 7-day cards। Mobile पर search → current conditions → forecast का single-column flow।

## ज़रूरी working features

- City autocomplete में समान नाम वाले स्थानों के country/region दिखाओ; city चुनने पर coordinates से weather fetch करो। Delhi को प्रारंभिक example रखो और data loading साफ़ दिखाओ।
- Temperature, feels-like, humidity, wind speed/direction, precipitation probability, sunrise/sunset और daily high/low दिखाओ; timezone और units सही label हों।
- Celsius/Fahrenheit toggle, 24-hour temperature SVG chart, 7-day forecast, अधिकतम 5 favourite cities और last-update timestamp जोड़ो।
- Use my location केवल user click पर permission माँगे; permission deny होने पर city search काम करती रहे। Recent searches और units localStorage में save हों।
- Open-Meteo geocoding/forecast adapter बनाओ; data attribution, timeout, request cancellation और short-lived cache शामिल करो। Cached readings को fresh data की तरह प्रस्तुत मत करो।

## Logic और data behavior

Weather code को description/icon में map करो; city बदलते समय पुराने request का response नई city पर overwrite न करे। Current conditions को observation/forecast source के अनुसार label करो।

## Animation और visual personality

Condition के अनुसार हल्की rain streaks, drifting clouds या stars; temperature number का छोटा transition और chart reveal। Background effects foreground text को obscure न करें। Default dark theme, readable typography और restrained pink/purple/blue/red accent system रखो; बाकी projects से अलग central layout हो।

## Empty, loading और error states

City not found, API unavailable, location denied और offline cached state के लिए actionable messages और retry रखो।

## Completion checks

दो समान नाम वाली cities, C/F switch, location denial, API failure और fast consecutive searches test करो; chart और cards की unit/timezone consistency verify करो। Shared checklist के responsive, keyboard, reduced-motion, data-safety और actual upload-size checks भी pass हों।

## बाद की delivery

इस numbered folder को independent runnable app में बदलना। Root `index.html`, local styles/scripts/assets, concise README और honest setup/browser-limit notes शामिल करना। Working preview verify होने के बाद ही Mini Projects में upload/scheduling का अगला चरण होगा; अभी न build, न upload, न deployment।

## Official implementation references

- [Reference 1](https://open-meteo.com/en/docs)
- [Reference 2](https://open-meteo.com/en/docs/geocoding-api)
