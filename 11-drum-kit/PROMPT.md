# 11. Drum Kit — PulseFoundry

**स्थिति:** केवल prompt; app अभी build नहीं हुई है।

**Source:** आपकी screenshots की original list  
**Future app folder:** `mini-projects/11-drum-kit/`  
**Visual palette:** Charcoal #110C13, neon red #F43F5E, deep purple #7C3AED और electric blue #38BDF8

## Build prompt — उद्देश्य

Keyboard, mouse और touch से playable drum-pad instrument बनाओ, जिसमें user अपनी छोटी beat बना और replay कर सके। Unique working mini app बनाओ, polished screenshot-only mockup नहीं। पहले [shared Build Standards](../BUILD-STANDARDS.md) पढ़ो और लागू करो। Implementation शुरू करने की अनुमति मिलने पर इस specification से build करना; अभी यह planning document है।

## Layout और UX

बीच में 3×3 pads; ऊपर tempo और transport controls; नीचे step sequencer और sound settings। Mobile पर बड़े touch targets और horizontally scrollable sequencer।

## ज़रूरी working features

- Kick, snare, closed/open hi-hat, clap, tom, rim और percussion के 9 अलग pads रखो; प्रत्येक pad पर sound name और keyboard shortcut दिखाओ।
- User gesture के बाद Web Audio unlock हो; low-latency playback, per-pad volume, master volume और mute हों। Sounds locally synthesized या licensed local assets हों।
- 16-step sequencer, 60–180 BPM, beat indicator, play/stop और editable pattern जोड़ो; beat बदलने पर transport से timing sync रहे।
- Live recording को quantized pad events में बदलो; recorded pattern replay हो। तीन original preset patterns, clear confirmation और JSON import/export दो।
- Keyboard autorepeat को ignore करो, multi-touch और rapid repeated hits support करो; shortcuts focused inputs में बाधा न बनें। Preferences और patterns locally save हों।

## Logic और data behavior

AudioContext clock पर look-ahead scheduling करो; setInterval केवल scheduling helper हो, exact audio timing का source नहीं। Stop पर पहले से scheduled nodes cancel हों और resume duplicate beat न बनाए।

## Animation और visual personality

Hit पर छोटा pad glow/ripple, synchronized beat pulse और lightweight waveform; red particles sparse हों और sequencer readability बनी रहे। Default dark theme, readable typography और restrained pink/purple/blue/red accent system रखो; बाकी projects से अलग central layout हो।

## Empty, loading और error states

Audio locked/unsupported, empty pattern, invalid import और suspended tab के लिए स्पष्ट status तथा recovery controls।

## Completion checks

Rapid hits, simultaneous pads, tempo change, repeated play/stop, mobile audio unlock और pattern export/import test करो; stopped transport में कोई stray sound न आए। Shared checklist के responsive, keyboard, reduced-motion, data-safety और actual upload-size checks भी pass हों।

## बाद की delivery

इस numbered folder को independent runnable app में बदलना। Root `index.html`, local styles/scripts/assets, concise README और honest setup/browser-limit notes शामिल करना। Working preview verify होने के बाद ही Mini Projects में upload/scheduling का अगला चरण होगा; अभी न build, न upload, न deployment।
