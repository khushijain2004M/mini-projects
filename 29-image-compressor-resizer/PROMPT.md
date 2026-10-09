# 29. Image Compressor & Resizer — PixelLite

**स्थिति:** केवल prompt; app अभी build नहीं हुई है।

**Source:** अतिरिक्त suggested project  
**Future app folder:** `mini-projects/29-image-compressor-resizer/`  
**Visual palette:** Ink #0B1020, electric blue #60A5FA, violet #A78BFA और hot pink #EC4899

## Build prompt — उद्देश्य

Browser के अंदर local images resize और compress करने वाला privacy-first utility बनाओ जिसमें actual size savings दिखें। Unique working mini app बनाओ, polished screenshot-only mockup नहीं। पहले [shared Build Standards](../BUILD-STANDARDS.md) पढ़ो और लागू करो। Implementation शुरू करने की अनुमति मिलने पर इस specification से build करना; अभी यह planning document है।

## Layout और UX

Drag/drop upload area, original/processed preview pair, resize/quality controls और output/download card; mobile before/after tabs।

## ज़रूरी working features

- JPEG/PNG/WebP local import, drag/drop and file picker; single-image MVP, optional bounded batch up to 5 files। MIME/decode/file-size limits explicit रखें।
- Width/height, locked aspect ratio, presets और quality slider; output JPEG/PNG/WebP availability browser capability से तय हो। PNG पर lossy quality slider का fake असर न दिखाओ।
- Original/output dimensions, bytes, percentage reduction और preview दिखाओ; output बड़ा बने तो honest 'size increased' badge हो।
- Transparent image JPEG में convert करने से पहले chosen background color और warning दें; orientation correct preview verify करो। GIF/SVG unsupported initial scope में साफ़ संदेश दें।
- Process/download/reset, progress/loading state और all-local privacy note; source file कभी mutate/upload न हो। Animated GIF/video/document support claim न करें।

## Logic और data behavior

createImageBitmap/Image decode → bounded canvas → toBlob pipeline, actual returned MIME check और object URL cleanup करो। Huge pixel dimensions reject/downscale policy रखें ताकि browser crash न हो; slider events debounce हों।

## Animation और visual personality

Brief preview crossfade और blue processing ring; actual progress unknown हो तो indeterminate indicator, fake percentages नहीं। Default dark theme, readable typography और restrained pink/purple/blue/red accent system रखो; बाकी projects से अलग central layout हो।

## Empty, loading और error states

Unsupported/corrupt image, excessive dimensions, output encoding failure, missing transparency support और empty state।

## Completion checks

Landscape/portrait orientation, alpha-to-JPEG, PNG quality behavior, actual file download/MIME, larger output case, reset cleanup और mobile memory limits test करो। Shared checklist के responsive, keyboard, reduced-motion, data-safety और actual upload-size checks भी pass हों।

## बाद की delivery

इस numbered folder को independent runnable app में बदलना। Root `index.html`, local styles/scripts/assets, concise README और honest setup/browser-limit notes शामिल करना। Working preview verify होने के बाद ही Mini Projects में upload/scheduling का अगला चरण होगा; अभी न build, न upload, न deployment।
