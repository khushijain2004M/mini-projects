# 20. Music Player App — Nightwave

**स्थिति:** केवल prompt; app अभी build नहीं हुई है।

**Source:** आपकी screenshots की original list  
**Future app folder:** `mini-projects/20-music-player-app/`  
**Visual palette:** Deep ink #090D1B, violet #8B5CF6, pink #F472B6 और electric blue #38BDF8

## Build prompt — उद्देश्य

Local audio tracks और licensed sample music को play करने वाला responsive music player बनाओ जिसमें वास्तविक playback और playlist state जुड़ी हो। Unique working mini app बनाओ, polished screenshot-only mockup नहीं। पहले [shared Build Standards](../BUILD-STANDARDS.md) पढ़ो और लागू करो। Implementation शुरू करने की अनुमति मिलने पर इस specification से build करना; अभी यह planning document है।

## Layout और UX

Album art hero, track library, queue panel और persistent transport bar; mobile पर bottom player और expandable now-playing view।

## ज़रूरी working features

- Play/pause, previous/next, seek bar, elapsed/duration, volume/mute, shuffle और repeat off/one/all दें; state actual audio events से reflect हो।
- Local files import, filename-based metadata, reorder/remove playlist और search हों। तीन छोटे original/licensed bundled samples और source/license notes दें।
- Favourite tracks, queue selection और preference persistence रखें; user-imported files browser restart पर फिर select करने पड़ें तो स्पष्ट बताएँ, absent blobs को playable मत दिखाओ।
- Optional visualizer Web Audio analyser से real frequency data दिखाए; no analyser support पर static album art रहे, fake spectrum को real claim न करें।
- Mini-player, keyboard shortcuts outside form controls और track loading indicators दें; broken file skip/retry और audio cleanup हों।

## Logic और data behavior

Autoplay permission और audio.play() rejection catch करो। Shuffle history/repeat transitions deterministic हों; removed track के object URL तथा audio nodes cleanup करो, queue end properly handle हो।

## Animation और visual personality

Playback-only slow album glow, subtle pink/blue equalizer और smooth progress; battery/performance के लिए hidden tab में visualizer बंद हो। Default dark theme, readable typography और restrained pink/purple/blue/red accent system रखो; बाकी projects से अलग central layout हो।

## Empty, loading और error states

Empty playlist, audio decode failure, unavailable local file after reload और user-gesture-required playback।

## Completion checks

Seek, pause/resume, ended-track transitions, repeat-one/all, shuffle, deleted current track, import/exported playlist limitations और mobile controls test करो। Shared checklist के responsive, keyboard, reduced-motion, data-safety और actual upload-size checks भी pass हों।

## बाद की delivery

इस numbered folder को independent runnable app में बदलना। Root `index.html`, local styles/scripts/assets, concise README और honest setup/browser-limit notes शामिल करना। Working preview verify होने के बाद ही Mini Projects में upload/scheduling का अगला चरण होगा; अभी न build, न upload, न deployment।
