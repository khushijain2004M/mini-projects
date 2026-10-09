# 25. Color Palette & Gradient Studio — ChromaLab

**स्थिति:** केवल prompt; app अभी build नहीं हुई है।

**Source:** अतिरिक्त suggested project  
**Future app folder:** `mini-projects/25-color-gradient-studio/`  
**Visual palette:** Plum #100C1E, pink #EC4899, violet #8B5CF6 और blue #38BDF8; user palette preview main accents के साथ अलग region में

## Build prompt — उद्देश्य

Color palettes और CSS gradients design करने, copy/export करने तथा contrast assess करने वाला practical design utility बनाओ। Unique working mini app बनाओ, polished screenshot-only mockup नहीं। पहले [shared Build Standards](../BUILD-STANDARDS.md) पढ़ो और लागू करो। Implementation शुरू करने की अनुमति मिलने पर इस specification से build करना; अभी यह planning document है।

## Layout और UX

Editable 5-color palette ऊपर; color inspector left, live UI preview center, gradient/contrast tabs नीचे; mobile inspector sheet।

## ज़रूरी working features

- Generate palette, individual color lock, add/remove up to 8 swatches, hex/RGB/HSL edit और harmonies like analogous/complementary हों।
- Copy individual code/palette CSS variables, saved palettes with names और JSON import/export; valid hex normalization तथा invalid input inline errors रखें।
- Linear/radial gradients, angle, color stops with positions और preview; generated CSS copy and explicit reset हों।
- Foreground/background contrast ratio और normal/large text labels दिखाओ; numerical calculation documented हो, केवल visual green/red badges पर भरोसा न करो।
- Live preview में button/card/text/input samples दिखाओ; random palette के low-contrast combinations पर warning हो। User-created palette app की own controls unreadable न बनाए।

## Logic और data behavior

sRGB channels linearize करके relative luminance और contrast ratio calculate करो। Gradient stops bounds/ordering validate करो; color conversions predictable rounding के साथ हों।

## Animation और visual personality

Short swatch color crossfade, gradient preview gently animated only on opt-in; toolbar stable black/plum रहे। Default dark theme, readable typography और restrained pink/purple/blue/red accent system रखो; बाकी projects से अलग central layout हो।

## Empty, loading और error states

Invalid colors, all swatches locked, duplicate import और clipboard failure gracefully handle हों।

## Completion checks

Black/white contrast 21:1, identical colors 1:1, color round trips, locked generation, stop reordering, exported CSS और saved palette persistence test करो। Shared checklist के responsive, keyboard, reduced-motion, data-safety और actual upload-size checks भी pass हों।

## बाद की delivery

इस numbered folder को independent runnable app में बदलना। Root `index.html`, local styles/scripts/assets, concise README और honest setup/browser-limit notes शामिल करना। Working preview verify होने के बाद ही Mini Projects में upload/scheduling का अगला चरण होगा; अभी न build, न upload, न deployment।

## Official implementation references

- [Reference 1](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html)
