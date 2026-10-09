# 15. Light/Dark Mode Toggle — ThemeShift

**स्थिति:** केवल prompt; app अभी build नहीं हुई है।

**Source:** आपकी screenshots की original list  
**Future app folder:** `mini-projects/15-light-dark-mode-toggle/`  
**Visual palette:** Default dark #0D0B1D, violet #8B5CF6, pink #EC4899 और blue #38BDF8; alternate light surface #F7F5FC

## Build prompt — उद्देश्य

सिर्फ switch नहीं, एक complete theme playground बनाओ जिसमें user readable components पर dark/light/system और accent combinations देख सके। Unique working mini app बनाओ, polished screenshot-only mockup नहीं। पहले [shared Build Standards](../BUILD-STANDARDS.md) पढ़ो और लागू करो। Implementation शुरू करने की अनुमति मिलने पर इस specification से build करना; अभी यह planning document है।

## Layout और UX

Theme controls sidebar; main preview में dashboard cards, form, chart, tabs, table और notification examples; mobile पर controls collapsible हों।

## ज़रूरी working features

- Dark, light और system modes; pink/purple/blue/red accent presets; selected accent और mode localStorage में save हों।
- Theme CSS variables/tokens से पूरे app पर लागू हो; nested dialogs, inputs, SVG charts, scrollbars और focus indicators भी consistent रहें।
- System preference बदलने पर केवल system mode में auto update हो; explicit user choice override न हो। Initial paint पर stored theme पढ़कर flash avoid करो।
- Interactive preview components, compact/comfortable density और a theme-token inspector दो; token values copy तथा theme JSON export/import उपलब्ध हों।
- Contrast preview और readable text/status variants रखो; error/success को केवल accent colors पर निर्भर न करो। Reset theme confirmation और defaults restore हों।

## Logic और data behavior

Mode, resolved theme और accent को अलग state समझो। Imported tokens validate करो, unsafe CSS/HTML strings execute मत करो; system media-query listener cleanup हो।

## Animation और visual personality

Sun/moon morph, short color transition और accent bloom; large page-flash effects नहीं। Reduced motion में instant theme change। Default dark theme, readable typography और restrained pink/purple/blue/red accent system रखो; बाकी projects से अलग central layout हो।

## Empty, loading और error states

Invalid theme import, unavailable storage और system-mode explanation के लिए non-blocking messages।

## Completion checks

Refresh persistence, first-paint flash, OS theme change, all four accents, modal/input readability और keyboard controls test करो। Shared checklist के responsive, keyboard, reduced-motion, data-safety और actual upload-size checks भी pass हों।

## बाद की delivery

इस numbered folder को independent runnable app में बदलना। Root `index.html`, local styles/scripts/assets, concise README और honest setup/browser-limit notes शामिल करना। Working preview verify होने के बाद ही Mini Projects में upload/scheduling का अगला चरण होगा; अभी न build, न upload, न deployment।
