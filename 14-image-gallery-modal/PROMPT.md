# 14. Image Gallery with Modal — PrismVault

**स्थिति:** केवल prompt; app अभी build नहीं हुई है।

**Source:** आपकी screenshots की original list  
**Future app folder:** `mini-projects/14-image-gallery-modal/`  
**Visual palette:** Plum black #100B1B, orchid #C084FC, pink #F472B6 और blue #38BDF8

## Build prompt — उद्देश्य

Original/licensed images को browse, filter और accessible lightbox में देखने वाला elegant gallery बनाओ। Unique working mini app बनाओ, polished screenshot-only mockup नहीं। पहले [shared Build Standards](../BUILD-STANDARDS.md) पढ़ो और लागू करो। Implementation शुरू करने की अनुमति मिलने पर इस specification से build करना; अभी यह planning document है।

## Layout और UX

Editorial header, category filter chips और responsive masonry-style grid; full-screen lightbox में title/caption, navigation और image actions।

## ज़रूरी working features

- कम से कम 12 curated local images या original SVG artworks metadata, title, category और meaningful alt text के साथ दो; assets का license/source लिखो।
- Category filters, text search, favourites और grid-density control हों; favourite preferences locally persist हों।
- Thumbnail click से modal खुले; previous/next, Escape close, keyboard arrows, focus trap और close के बाद original thumbnail पर focus restore हों।
- Zoom in/out, reset fit, touch swipe और optional image information panel दो; zoom/pan boundary sensible हो और body scroll background में lock हो।
- Lazy loading, responsive image sizes, aspect-ratio placeholders और broken-image fallback रखो; optional user import temporary blob URLs से हो, upload का झूठा claim न हो।

## Logic और data behavior

Filtered collection ही lightbox navigation की source हो। Object URLs revoke करो; modal transition के दौरान focus और scroll restoration reliable रहें।

## Animation और visual personality

Subtle thumbnail lift, short shared-image style transition और purple aurora background; excessive blur/large animated filters से performance खराब न हो। Default dark theme, readable typography और restrained pink/purple/blue/red accent system रखो; बाकी projects से अलग central layout हो।

## Empty, loading और error states

No matching images, empty favourites, unsupported import, broken asset और image loading state।

## Completion checks

Keyboard-only complete flow, touch swipe, zoom bounds, filter के बाद navigation, resize और modal close focus restoration verify करो। Shared checklist के responsive, keyboard, reduced-motion, data-safety और actual upload-size checks भी pass हों।

## बाद की delivery

इस numbered folder को independent runnable app में बदलना। Root `index.html`, local styles/scripts/assets, concise README और honest setup/browser-limit notes शामिल करना। Working preview verify होने के बाद ही Mini Projects में upload/scheduling का अगला चरण होगा; अभी न build, न upload, न deployment।
