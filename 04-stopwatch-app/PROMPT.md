# 04. Stop-Watch App — Chrono Red

**स्थिति:** केवल prompt; app अभी build नहीं हुई है।

**Source:** आपकी screenshots की original list  
**Future app folder:** `mini-projects/04-stopwatch-app/`  
**Visual palette:** Near-black #100B13, racing red #EF4444, hot pink #FB7185 और icy blue #67E8F9

## Build prompt — उद्देश्य

Accurate stopwatch बनाओ जिसमें laps और session history उपयोगी, readable तरीके से मिलें। Unique working mini app बनाओ, polished screenshot-only mockup नहीं। पहले [shared Build Standards](../BUILD-STANDARDS.md) पढ़ो और लागू करो। Implementation शुरू करने की अनुमति मिलने पर इस specification से build करना; अभी यह planning document है।

## Layout और UX

Center में बड़ा monospace HH:MM:SS.cc timer, ring indicator और Start/Pause/Reset controls; नीचे sortable lap table और saved sessions drawer।

## ज़रूरी working features

- Start, pause/resume, reset और lap; paused अवस्था में lap action disable हो और state button labels स्पष्ट हों।
- Lap number, individual lap duration और total elapsed time; fastest/slowest lap highlight तभी जब कई laps हों।
- Space start/pause, L lap और R reset shortcuts; typing fields में shortcuts लागू न हों।
- Session title, finish/save session, history delete और CSV export; stored laps और totals reload पर सही रहें।
- performance.now से elapsed time निकालो; setInterval count को समय का source न बनाओ। Background tab में लौटने पर elapsed सही रहे; reload recovery policy README में साफ़ लिखो।

## Logic और data behavior

Accumulated elapsed + current monotonic start timestamp से time compute करो। Reset active session पर confirmation और rendering requestAnimationFrame से; UI timer का increment drift न करे।

## Animation और visual personality

Red orbit progress, active-state heartbeat glow और lap insertion slide; paused state में motion रुक जाए। Default dark theme, readable typography और restrained pink/purple/blue/red accent system रखो; बाकी projects से अलग central layout हो।

## Empty, loading और error states

Zero time, no laps, CSV export failure और interrupted session recovery के लिए साफ़ state रखो।

## Completion checks

Multiple pause/resume cycles, background tab, 20 laps, reset, elapsed formatting after one hour और CSV numbers verify करो। Shared checklist के responsive, keyboard, reduced-motion, data-safety और actual upload-size checks भी pass हों।

## बाद की delivery

इस numbered folder को independent runnable app में बदलना। Root `index.html`, local styles/scripts/assets, concise README और honest setup/browser-limit notes शामिल करना। Working preview verify होने के बाद ही Mini Projects में upload/scheduling का अगला चरण होगा; अभी न build, न upload, न deployment।
