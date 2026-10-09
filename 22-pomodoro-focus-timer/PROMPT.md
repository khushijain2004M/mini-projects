# 22. Pomodoro Focus Timer — FocusEmber

**स्थिति:** केवल prompt; app अभी build नहीं हुई है।

**Source:** अतिरिक्त suggested project  
**Future app folder:** `mini-projects/22-pomodoro-focus-timer/`  
**Visual palette:** Obsidian #100C15, ember red #EF4444, pink #FB7185 और blue #38BDF8

## Build prompt — उद्देश्य

Custom work/break durations और honest session tracking वाला distraction-light focus timer बनाओ। Unique working mini app बनाओ, polished screenshot-only mockup नहीं। पहले [shared Build Standards](../BUILD-STANDARDS.md) पढ़ो और लागू करो। Implementation शुरू करने की अनुमति मिलने पर इस specification से build करना; अभी यह planning document है।

## Layout और UX

बड़ा circular timer और start/pause/reset center; नीचे focus task, session sequence और today summary; settings compact drawer में।

## ज़रूरी working features

- Default focus 25min, short break 5min, long break 15min और हर 4 focus sessions पर long break; सभी durations user customize कर सके।
- Start/pause/resume/reset/skip; optional auto-start next mode; current phase, remaining time और next phase readable रहें।
- Focus task label, completed-session timeline, daily focused minutes और simple weekly chart; skipped sessions completion statistics में count न हों।
- Optional sound और user-click notification permission; browser limitations explain करो। Laptop/browser बंद होने पर background alarm guaranteed न बताओ।
- Local persistence से reload पर session recover करो; missed deadline पर one completion reconcile करो, unlimited missed cycles automatically credit मत करो।

## Logic और data behavior

Remaining time deadline/elapsed time से derive करो, decrementing setInterval को clock मत बनाओ। Pause remaining duration capture करे; reload तथा hidden tab completion idempotent रहें।

## Animation और visual personality

Slow ember breathing ring only during focus, break पर blue accents; no distracting moving particles near timer। Default dark theme, readable typography और restrained pink/purple/blue/red accent system रखो; बाकी projects से अलग central layout हो।

## Empty, loading और error states

Idle, running, paused, finished, recovered stale session और denied notifications clear हों।

## Completion checks

Duration change policy, pause/resume, hidden tab, reload, expiry recovery, skipped session और auto-start off/on test करो। Shared checklist के responsive, keyboard, reduced-motion, data-safety और actual upload-size checks भी pass हों।

## बाद की delivery

इस numbered folder को independent runnable app में बदलना। Root `index.html`, local styles/scripts/assets, concise README और honest setup/browser-limit notes शामिल करना। Working preview verify होने के बाद ही Mini Projects में upload/scheduling का अगला चरण होगा; अभी न build, न upload, न deployment।
