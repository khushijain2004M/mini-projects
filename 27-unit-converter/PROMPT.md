# 27. Unit Converter — MeasureLoop

**स्थिति:** केवल prompt; app अभी build नहीं हुई है।

**Source:** अतिरिक्त suggested project  
**Future app folder:** `mini-projects/27-unit-converter/`  
**Visual palette:** Graphite navy #0C1220, electric blue #38BDF8, purple #8B5CF6 और pink #F472B6

## Build prompt — उद्देश्य

Offline everyday unit conversion tool बनाओ जिसमें formula, precision और units समझ में आएँ। Unique working mini app बनाओ, polished screenshot-only mockup नहीं। पहले [shared Build Standards](../BUILD-STANDARDS.md) पढ़ो और लागू करो। Implementation शुरू करने की अनुमति मिलने पर इस specification से build करना; अभी यह planning document है।

## Layout और UX

Category tabs/icons, two synchronized value/unit panes और swap; नीचे formula explanation तथा favourite pairs/history।

## ज़रूरी working features

- Length, mass, temperature, area, volume, speed, time और digital storage categories शामिल करो; common SI/imperial units और searchable selector दें।
- Input either side से conversion, swap, precision 0–8 decimals और copy result हों; empty input को silently zero मत बनाओ।
- Temperature offsets, negative temperature allowance और physically invalid below-absolute-zero warning; other domains में invalid negatives clearly handle करो।
- Digital storage में decimal KB/MB और binary KiB/MiB का difference labels में दो; speed km/h,m/s,mph conversions explicit हों।
- Favourite conversion pairs, last used category/preferences और optional recent history locally persist हों; quick reference table current selected unit से बन सके।

## Logic और data behavior

One canonical base per category; temperature affine formulas अलग रखें। Approximation/display rounding final stage पर हो; very large scientific notation safely handle करो और Infinity/NaN expose मत करो।

## Animation और visual personality

Swap arrow rotation, result microfade और subtle blue orbit lines; numbers update बिना layout jump हों। Default dark theme, readable typography और restrained pink/purple/blue/red accent system रखो; बाकी projects से अलग central layout हो।

## Empty, loading और error states

Empty/invalid/exponent overflow input, incompatible category selection और unavailable storage।

## Completion checks

0°C=32°F, 1in=2.54cm, 1KiB=1024B, 1km/h=1/3.6m/s, round trips, precision और category switch test करो। Shared checklist के responsive, keyboard, reduced-motion, data-safety और actual upload-size checks भी pass हों।

## बाद की delivery

इस numbered folder को independent runnable app में बदलना। Root `index.html`, local styles/scripts/assets, concise README और honest setup/browser-limit notes शामिल करना। Working preview verify होने के बाद ही Mini Projects में upload/scheduling का अगला चरण होगा; अभी न build, न upload, न deployment।
