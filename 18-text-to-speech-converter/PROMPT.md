# 18. Text-to-Speech Converter — VoxBloom

**स्थिति:** केवल prompt; app अभी build नहीं हुई है।

**Source:** आपकी screenshots की original list  
**Future app folder:** `mini-projects/18-text-to-speech-converter/`  
**Visual palette:** Night violet #100B22, purple #A78BFA, blue #38BDF8 और pink #F472B6

## Build prompt — उद्देश्य

Browser-provided voices से entered text सुनाने वाला readable narration studio बनाओ, बिना guaranteed voice availability या downloadable audio का झूठा वादा किए। Unique working mini app बनाओ, polished screenshot-only mockup नहीं। पहले [shared Build Standards](../BUILD-STANDARDS.md) पढ़ो और लागू करो। Implementation शुरू करने की अनुमति मिलने पर इस specification से build करना; अभी यह planning document है।

## Layout और UX

Large writing pane, voice/rate/pitch controls और bottom playback bar; right में saved passages और sentence progress summary।

## ज़रूरी working features

- Text input, character/word count, available voice selector with language, Hindi/English filter, rate/pitch/volume sliders और short sample preview दें।
- Play, pause, resume और stop controls state के अनुसार हों; current sentence highlighting supported events/fallback के साथ काम करे।
- Long passages को sensible sentence chunks में बोलो; queue cancellation, selected voice changes और stop के बाद stale callbacks handle हों।
- getVoices और voiceschanged से asynchronously loaded voice list update हो; favourite voice preference तथा explicit saved passages locally persist हों।
- Speech availability device/browser पर depend होने का note दो। MP3 export या offline guarantee न दिखाओ; किसी voice की absence पर usable fallback और support message दो।

## Logic और data behavior

SpeechSynthesis utterance state machine बनाओ; user gesture से playback initiate करो। Voice URI/language preference missing होने पर available alternative select और notify करो; long narration में duplicate speech न बने।

## Animation और visual personality

Playback पर lightweight blue/purple equalizer और sentence focus; waveform केवल illustrative label के साथ, recorded real audio graph की तरह नहीं। Default dark theme, readable typography और restrained pink/purple/blue/red accent system रखो; बाकी projects से अलग central layout हो।

## Empty, loading और error states

No voices yet, unsupported browser, empty text, speech error और invalid restored voice के स्पष्ट messages।

## Completion checks

Late voice loading, available Hindi voice selection, long text, rapid play/stop, pause/resume, voice switch और page exit cleanup test करो। Shared checklist के responsive, keyboard, reduced-motion, data-safety और actual upload-size checks भी pass हों।

## बाद की delivery

इस numbered folder को independent runnable app में बदलना। Root `index.html`, local styles/scripts/assets, concise README और honest setup/browser-limit notes शामिल करना। Working preview verify होने के बाद ही Mini Projects में upload/scheduling का अगला चरण होगा; अभी न build, न upload, न deployment।

## Official implementation references

- [Reference 1](https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesis)
