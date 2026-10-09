# 05. Digital Piano — Nocturne Keys

**स्थिति:** केवल prompt; app अभी build नहीं हुई है।

**Source:** आपकी screenshots की original list  
**Future app folder:** `mini-projects/05-digital-piano/`  
**Visual palette:** Midnight #0A1020, purple #A78BFA, blue #60A5FA और pink #F0ABFC

## Build prompt — उद्देश्य

Browser में playable piano बनाओ जिसमें mouse, touch और keyboard से musical notes बजें। Unique working mini app बनाओ, polished screenshot-only mockup नहीं। पहले [shared Build Standards](../BUILD-STANDARDS.md) पढ़ो और लागू करो। Implementation शुरू करने की अनुमति मिलने पर इस specification से build करना; अभी यह planning document है।

## Layout और UX

Top में instrument/volume/octave controls, central 2-octave piano, नीचे shortcut legend और mini recording timeline; small screen पर usable horizontal keyboard।

## ज़रूरी working features

- White/black keys सही arrangement और frequency mapping के साथ; keyboard labels toggle और octave -/+ controls जोड़ो।
- Mouse, multi-touch और physical keyboard से simultaneous notes/chords; pointer release, keyup और window blur पर notes बंद हों।
- Web Audio synthesis से sine/triangle/soft electric-piano presets, volume/mute, attack/release और sustain control; audio पहली user gesture के बाद unlock हो।
- Record performance note events, stop, playback और clear; recording को note-event JSON के रूप में export/import करो। MP3 export बिना encoder लागू किए मत दिखाओ।
- Simple guided melody mode में अगली key highlight और 3 original practice patterns; exact score और replay controls रखो।

## Logic और data behavior

AudioContext और per-note voices manage करो; envelope ramp से clicks रोको। Autorepeat keydown पर duplicate notes न बनें; tuning A4=440Hz और equal temperament प्रयोग करो।

## Animation और visual personality

Pressed keys पर violet light trail, active notes का waveform और soft ambient starfield; audio को visual animation timing पर निर्भर न करो। Default dark theme, readable typography और restrained pink/purple/blue/red accent system रखो; बाकी projects से अलग central layout हो।

## Empty, loading और error states

Suspended/unsupported audio, mobile gesture requirement, malformed recording import और stuck note recovery handle करो।

## Completion checks

C4/A4 pitch mapping, held chord, blur release, mute, sustain, touch and record/replay verify करो; no autoplay हो। Shared checklist के responsive, keyboard, reduced-motion, data-safety और actual upload-size checks भी pass हों।

## बाद की delivery

इस numbered folder को independent runnable app में बदलना। Root `index.html`, local styles/scripts/assets, concise README और honest setup/browser-limit notes शामिल करना। Working preview verify होने के बाद ही Mini Projects में upload/scheduling का अगला चरण होगा; अभी न build, न upload, न deployment।
