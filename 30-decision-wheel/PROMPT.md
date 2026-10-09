# 30. Decision Wheel — OrbitChoice

**स्थिति:** केवल prompt; app अभी build नहीं हुई है।

**Source:** अतिरिक्त suggested project  
**Future app folder:** `mini-projects/30-decision-wheel/`  
**Visual palette:** Black plum #100C1B, rose red #F43F5E, purple #8B5CF6 और blue #38BDF8

## Build prompt — उद्देश्य

User choices में transparent random selection करने वाला animated wheel बनाओ, casual decisions के लिए; gambling या high-stakes निर्णय tool नहीं। Unique working mini app बनाओ, polished screenshot-only mockup नहीं। पहले [shared Build Standards](../BUILD-STANDARDS.md) पढ़ो और लागू करो। Implementation शुरू करने की अनुमति मिलने पर इस specification से build करना; अभी यह planning document है।

## Layout और UX

Large labeled wheel center/left, editable option list right, spin/result controls below; mobile options drawer and always-visible result।

## ज़रूरी working features

- Options add/edit/remove, paste one-per-line list, optional weights 1–10 और equal-weight reset; 2–30 entries की clear limits रखें।
- Spin, cancel/reset before next round, result announcement और recent history हों; spin के दौरान editing disabled या safely deferred हो।
- Weighted mode में segment size weight को reflect करे और probability per entry visible हो। Duplicate labels के internal unique IDs हों।
- Optional remove winner for next round, saved lists/presets locally persist और JSON export/import हों; large labels wrap/truncate tooltip में full text हो।
- Cryptographic random selection को unbiased mapping से करें; animation का landing angle selected segment center पर जाए। Sample seeded mode हो तो clearly labeled demo हो, normal randomness की जगह नहीं।

## Logic और data behavior

Winning option पहले unbiased weighted draw से choose करो, फिर animation resolve करो; CSS duration/render speed result को influence न करें। Stale spin callbacks round IDs से cancel हों और history once append हो।

## Animation और visual personality

Smooth easing wheel spin, gentle red/purple starfield और short winner celebration; reduced-motion पर direct reveal और result text हमेशा readable। Default dark theme, readable typography और restrained pink/purple/blue/red accent system रखो; बाकी projects से अलग central layout हो।

## Empty, loading और error states

Too few options, invalid weights/import, all options removed, spinning and result states के clear controls।

## Completion checks

Weight bounds, label duplicates, pointer landing consistency, rapid spin clicks, reset during animation, remove winner और reduced-motion result test करो। Shared checklist के responsive, keyboard, reduced-motion, data-safety और actual upload-size checks भी pass हों।

## बाद की delivery

इस numbered folder को independent runnable app में बदलना। Root `index.html`, local styles/scripts/assets, concise README और honest setup/browser-limit notes शामिल करना। Working preview verify होने के बाद ही Mini Projects में upload/scheduling का अगला चरण होगा; अभी न build, न upload, न deployment।
