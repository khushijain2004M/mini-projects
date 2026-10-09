# 10. Typing Speed Test — Velocity Type

**स्थिति:** केवल prompt; app अभी build नहीं हुई है।

**Source:** आपकी screenshots की original list  
**Future app folder:** `mini-projects/10-typing-speed-test/`  
**Visual palette:** Navy black #070F1D, electric blue #38BDF8, pink #F472B6 और error red #FB7185

## Build prompt — उद्देश्य

Accurate typing-speed practice tool बनाओ जिसमें WPM, accuracy और mistakes समझ आएँ। Unique working mini app बनाओ, polished screenshot-only mockup नहीं। पहले [shared Build Standards](../BUILD-STANDARDS.md) पढ़ो और लागू करो। Implementation शुरू करने की अनुमति मिलने पर इस specification से build करना; अभी यह planning document है।

## Layout और UX

Top duration/difficulty controls, center बड़े readable passage और caret, नीचे metrics और results graph; distractions minimized हों।

## ज़रूरी working features

- 15/30/60/120-second modes, words/sentences/code passages और optional punctuation/numbers; bundled original passages इस्तेमाल करो।
- Timer first valid keystroke पर शुरू हो; input focus, correct/wrong/current character highlighting और controlled backspace rules हों।
- Gross WPM, net/correct WPM, accuracy, raw keystrokes और corrected/uncorrected mistakes स्पष्ट definitions के साथ दिखाओ।
- Restart same passage, next passage, best result per mode और recent result history locally save करो।
- Result में time-series speed chart और difficult characters; paste detect करके unranked practice mark करो, browser monitoring या deceptive anti-cheat claim न हो।

## Logic और data behavior

Elapsed monotonic timing; WPM formula characters/5/minutes, accuracy denominator स्पष्ट। Tab hidden होने पर timer policy (pause/unranked) consistent रहे; IME composition गलत character न माने।

## Animation और visual personality

Smooth caret, subtle line transition और blue result reveal; animated background typing area में distract न करे। Default dark theme, readable typography और restrained pink/purple/blue/red accent system रखो; बाकी projects से अलग central layout हो।

## Empty, loading और error states

Not started, running, completed, lost focus, storage error और passage exhaustion handle करो।

## Completion checks

Known character/time example से WPM math, corrections, timeout, rapid restart, paste detection और keyboard/IME behaviour verify करो। Shared checklist के responsive, keyboard, reduced-motion, data-safety और actual upload-size checks भी pass हों।

## बाद की delivery

इस numbered folder को independent runnable app में बदलना। Root `index.html`, local styles/scripts/assets, concise README और honest setup/browser-limit notes शामिल करना। Working preview verify होने के बाद ही Mini Projects में upload/scheduling का अगला चरण होगा; अभी न build, न upload, न deployment।
