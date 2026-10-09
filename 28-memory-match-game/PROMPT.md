# 28. Memory Match Game — EchoTiles

**स्थिति:** केवल prompt; app अभी build नहीं हुई है।

**Source:** अतिरिक्त suggested project  
**Future app folder:** `mini-projects/28-memory-match-game/`  
**Visual palette:** Dark plum #110D21, violet #A78BFA, pink #F472B6, blue #38BDF8 और red #FB7185

## Build prompt — उद्देश्य

Responsive card-pair memory game बनाओ जिसमें clear rules, fair scoring और polished playful feedback हों। Unique working mini app बनाओ, polished screenshot-only mockup नहीं। पहले [shared Build Standards](../BUILD-STANDARDS.md) पढ़ो और लागू करो। Implementation शुरू करने की अनुमति मिलने पर इस specification से build करना; अभी यह planning document है।

## Layout और UX

Difficulty/theme setup card, central tile board, timer/moves stats ऊपर और results/replay modal; mobile cards comfortable touch size में।

## ज़रूरी working features

- Easy 4×4, medium 4×5, hard 6×6 pair boards; original SVG symbol themes जैसे space, music और geometry; instructions तथा new-game confirmation रखें।
- First card flip पर timer शुरू, turn में केवल 2 unmatched cards; match stays revealed, mismatch short delay के बाद hides।
- Move count, time, matches, pause/resume और restart; pause में board covered हो ताकि free study advantage न मिले।
- Local best scores per difficulty, result summary, play again और optional small sound toggle; hint action move/time penalty के साथ clearly marked assisted result हो।
- Keyboard grid navigation और Enter/Space flip; card announcements पहचान केवल revealed state में दें, face-down aria labels answer leak न करें।

## Logic और data behavior

Fisher–Yates shuffle, explicit idle/one-open/resolving/paused/finished state और round ID से stale flip timers cancel करो। Timer elapsed/deadline-based रहे; matched cards दोबारा select न हों।

## Animation और visual personality

Short 3D flip, match glow और finish confetti limited duration; reduced-motion में simple reveal, color-only matching न हो। Default dark theme, readable typography और restrained pink/purple/blue/red accent system रखो; बाकी projects से अलग central layout हो।

## Empty, loading और error states

Initial setup, resolving turn, paused, finished और reset confirmation स्पष्ट हों।

## Completion checks

Fast triple clicks, same card double click, restart during mismatch, pause/resume, all-pairs completion, keyboard-only play और score persistence test करो। Shared checklist के responsive, keyboard, reduced-motion, data-safety और actual upload-size checks भी pass हों।

## बाद की delivery

इस numbered folder को independent runnable app में बदलना। Root `index.html`, local styles/scripts/assets, concise README और honest setup/browser-limit notes शामिल करना। Working preview verify होने के बाद ही Mini Projects में upload/scheduling का अगला चरण होगा; अभी न build, न upload, न deployment।
