# 26. JSON Formatter & Validator — DataLens

**स्थिति:** केवल prompt; app अभी build नहीं हुई है।

**Source:** अतिरिक्त suggested project  
**Future app folder:** `mini-projects/26-json-formatter-validator/`  
**Visual palette:** Night navy #09101E, blue #38BDF8, purple #A78BFA और error pink/red #FB7185

## Build prompt — उद्देश्य

JSON locally format, validate और inspect करने वाला developer tool बनाओ; sensitive pasted data कहीं upload न हो। Unique working mini app बनाओ, polished screenshot-only mockup नहीं। पहले [shared Build Standards](../BUILD-STANDARDS.md) पढ़ो और लागू करो। Implementation शुरू करने की अनुमति मिलने पर इस specification से build करना; अभी यह planning document है।

## Layout और UX

Input/output split editor, action toolbar और optional collapsible tree view; mobile input/output tabs with visible validation result।

## ज़रूरी working features

- Format with 2/4/tab indentation, minify, validate, copy output, clear and download .json actions; last successful output stale हो तो label करो।
- Syntax error message और best-effort line/column highlight दो; browser parse error message vary हो तो unverified precision claim न करो।
- Searchable expandable tree view, array/object item counts और clicked node का JSON path copy; very deep/large trees virtualize या cap करो।
- Local .json import with size cap, explicit sample datasets, word/byte counts और one-click input/output swap रखें।
- Sensitive input persistence default off; optional explicit local-save warning हो। Comments/trailing commas auto fix केवल optional separate action और visible diff/change summary से हो।

## Logic और data behavior

JSON.parse, safe text rendering और iterative/capped traversal प्रयोग करो; eval नहीं। Large integer precision limitations explain और risky values warning दें; imported __proto__ keys से prototype mutation न हो।

## Animation और visual personality

Quiet blue syntax accents और short success outline; typing/validation के दौरान animated particles या flashy errors नहीं। Default dark theme, readable typography और restrained pink/purple/blue/red accent system रखो; बाकी projects से अलग central layout हो।

## Empty, loading और error states

Empty input, invalid JSON, size/depth limit, clipboard error और unsupported file type।

## Completion checks

Nested arrays, unicode escapes, null, malformed/trailing commas, deep tree, large numbers, suspicious keys और format/minify semantic round trip test करो। Shared checklist के responsive, keyboard, reduced-motion, data-safety और actual upload-size checks भी pass हों।

## बाद की delivery

इस numbered folder को independent runnable app में बदलना। Root `index.html`, local styles/scripts/assets, concise README और honest setup/browser-limit notes शामिल करना। Working preview verify होने के बाद ही Mini Projects में upload/scheduling का अगला चरण होगा; अभी न build, न upload, न deployment।
