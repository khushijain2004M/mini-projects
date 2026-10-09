# 17. Clipboard Copy Tool — ClipNest

**स्थिति:** केवल prompt; app अभी build नहीं हुई है।

**Source:** आपकी screenshots की original list  
**Future app folder:** `mini-projects/17-clipboard-copy-tool/`  
**Visual palette:** Blackberry #100D1E, pink #F472B6, violet #8B5CF6 और sky #38BDF8

## Build prompt — उद्देश्य

User द्वारा दिए snippets को organize और one-click copy करने वाला local clipboard workspace बनाओ; background clipboard surveillance नहीं। Unique working mini app बनाओ, polished screenshot-only mockup नहीं। पहले [shared Build Standards](../BUILD-STANDARDS.md) पढ़ो और लागू करो। Implementation शुरू करने की अनुमति मिलने पर इस specification से build करना; अभी यह planning document है।

## Layout और UX

Searchable snippet sidebar, editor/preview pane और compact action bar; mobile पर list और editor का clear switch।

## ज़रूरी working features

- Snippet create/edit/delete, title, tags, pinned items, search और text/code/plain-link categories जोड़ो; duplicate snippet और explicit save हों।
- Copy current snippet, copy selected block और user-click paste-from-clipboard actions दो। Read permission unavailable होने पर ordinary paste into textarea काम करे।
- User opt-in local snippet persistence, JSON backup/import और delete-all confirmation हों; recent copies केवल app के अपने actions से track हों।
- Character/word/line counts, readable monospaced code preview और plain-text formatting helpers जैसे trim/line ending normalization दो; original text silently modify मत करो।
- Sensitive snippet flag पर persistence/history off by default और reveal warning हो। Text को HTML की तरह render या clipboard data किसी server को send न करो।

## Logic और data behavior

Clipboard APIs के secure-context/permission requirements handle करो। Copy success toast केवल promise resolve होने पर दिखे; failure में select-text/manual-copy fallback दो।

## Animation और visual personality

Copy button tick transition, short toast और subtle pink card edge glow; background animation editor के पीछे बहुत faint हो। Default dark theme, readable typography और restrained pink/purple/blue/red accent system रखो; बाकी projects से अलग central layout हो।

## Empty, loading और error states

Clipboard denied/unavailable, empty selection, storage quota, malformed import और unsaved changes।

## Completion checks

HTTPS/localhost copy, permission denial, multiline/unicode text, manual fallback, refresh persistence और sensitive-snippet behavior verify करो। Shared checklist के responsive, keyboard, reduced-motion, data-safety और actual upload-size checks भी pass हों।

## बाद की delivery

इस numbered folder को independent runnable app में बदलना। Root `index.html`, local styles/scripts/assets, concise README और honest setup/browser-limit notes शामिल करना। Working preview verify होने के बाद ही Mini Projects में upload/scheduling का अगला चरण होगा; अभी न build, न upload, न deployment।

## Official implementation references

- [Reference 1](https://developer.mozilla.org/en-US/docs/Web/API/Clipboard_API)
