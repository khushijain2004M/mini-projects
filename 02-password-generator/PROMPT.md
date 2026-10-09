# 02. Password Generator — CipherForge

**स्थिति:** केवल prompt; app अभी build नहीं हुई है।

**Source:** आपकी screenshots की original list  
**Future app folder:** `mini-projects/02-password-generator/`  
**Visual palette:** Obsidian #0B0918, violet #A78BFA, neon pink #F472B6 और restrained blue #60A5FA

## Build prompt — उद्देश्य

एक polished password generator बनाओ जिसमें passwords locally और cryptographically secure randomness से बनें। Unique working mini app बनाओ, polished screenshot-only mockup नहीं। पहले [shared Build Standards](../BUILD-STANDARDS.md) पढ़ो और लागू करो। Implementation शुरू करने की अनुमति मिलने पर इस specification से build करना; अभी यह planning document है।

## Layout और UX

एक बड़ी password output card, नीचे length slider और character toggles, side panel में generation rules और copy feedback; mobile में सभी controls thumb-friendly हों।

## ज़रूरी working features

- Length 8–64, uppercase/lowercase/digits/symbol toggles और ambiguous characters exclude option; slider और number input synchronized हों।
- हर selected category से कम-से-कम एक character आए; पूरा password secure shuffle करो और selection खाली होने पर generate disabled हो।
- One password और batch of 5 modes, show/hide output, regenerate, copy individual और copy batch buttons वास्तविक रूप से काम करें।
- Passphrase mode में bundled word list से 3–8 words, configurable separator और optional number suffix जोड़ो; dictionary size estimate में शामिल हो।
- Strength/entropy को अनुमान कहो; cryptographic randomness के लिए crypto.getRandomValues और unbiased sampling इस्तेमाल करो। Math.random, password history, analytics या remote transmission न हो।

## Logic और data behavior

Modulo bias से बचने के लिए rejection sampling और secure Fisher–Yates shuffle; generated secrets को localStorage में store न करो, केवल non-sensitive preferences save हों।

## Animation और visual personality

Generate पर brief character scramble तभी तक चले जब final result तैयार हो; copy पर pink confirmation glow और strength meter transition। Default dark theme, readable typography और restrained pink/purple/blue/red accent system रखो; बाकी projects से अलग central layout हो।

## Empty, loading और error states

Clipboard deny, unsupported crypto और contradictory rules पर स्पष्ट feedback; fail होने पर false Copied toast न दिखाओ।

## Completion checks

हर charset combination, 8/64 boundaries, exclusions, batch copy और hide/show test करो; generated output में selected category coverage programmatically verify करो। Shared checklist के responsive, keyboard, reduced-motion, data-safety और actual upload-size checks भी pass हों।

## बाद की delivery

इस numbered folder को independent runnable app में बदलना। Root `index.html`, local styles/scripts/assets, concise README और honest setup/browser-limit notes शामिल करना। Working preview verify होने के बाद ही Mini Projects में upload/scheduling का अगला चरण होगा; अभी न build, न upload, न deployment।
