# 16. Scroll Progress Bar — Readline

**स्थिति:** केवल prompt; app अभी build नहीं हुई है।

**Source:** आपकी screenshots की original list  
**Future app folder:** `mini-projects/16-scroll-progress-bar/`  
**Visual palette:** Deep navy #090F1D, blue #38BDF8, purple #A78BFA और pink #F472B6

## Build prompt — उद्देश्य

Reading progress को meaningful तरीके से दिखाने वाला immersive long-form reading app बनाओ, न कि केवल dummy लंबा page। Unique working mini app बनाओ, polished screenshot-only mockup नहीं। पहले [shared Build Standards](../BUILD-STANDARDS.md) पढ़ो और लागू करो। Implementation शुरू करने की अनुमति मिलने पर इस specification से build करना; अभी यह planning document है।

## Layout और UX

Original article header, sticky top progress bar, desktop table-of-contents rail, readable central article और compact reading controls।

## ज़रूरी working features

- कम से कम 6 meaningful original article sections, anchor table of contents, active-section highlighting और reading-time estimate जोड़ो।
- Page reading progress प्रतिशत और thin top bar दिखाओ; completed section markers तथा back-to-top control हों।
- Font-size/line-height settings, focus reading mode, bookmark current section और last-read position locally save हों।
- Optional section-only progress और page-wide progress modes साफ़ labels के साथ दो; article jump और hash links काम करें।
- Responsive images/code blocks/expandable notes शामिल करो ताकि dynamic content height changes handling real हो; progress calculation layout changes पर update हो।

## Logic और data behavior

Scroll progress = scrollTop/(scrollHeight-clientHeight); zero-scroll page पर divide-by-zero न हो। Passive scroll listener, requestAnimationFrame batching और ResizeObserver से updates lightweight हों; active section IntersectionObserver से तय करो।

## Animation और visual personality

Smooth bar fill, restrained blue reading glow और section reveal; user reduced-motion preference में scroll jumps instant हों। Default dark theme, readable typography और restrained pink/purple/blue/red accent system रखो; बाकी projects से अलग central layout हो।

## Empty, loading और error states

Restored position, empty/short article और unavailable storage gracefully handle करो; forced auto-scroll न हो।

## Completion checks

0% top, 100% bottom, resize, font-size change, dynamic notes, anchor navigation, refresh bookmark और mobile scroll performance test करो। Shared checklist के responsive, keyboard, reduced-motion, data-safety और actual upload-size checks भी pass हों।

## बाद की delivery

इस numbered folder को independent runnable app में बदलना। Root `index.html`, local styles/scripts/assets, concise README और honest setup/browser-limit notes शामिल करना। Working preview verify होने के बाद ही Mini Projects में upload/scheduling का अगला चरण होगा; अभी न build, न upload, न deployment।
