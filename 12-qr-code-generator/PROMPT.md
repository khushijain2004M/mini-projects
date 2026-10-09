# 12. QR Code Generator — LinkBloom

**स्थिति:** केवल prompt; app अभी build नहीं हुई है।

**Source:** आपकी screenshots की original list  
**Future app folder:** `mini-projects/12-qr-code-generator/`  
**Visual palette:** Ink #0B1020, neon pink #EC4899, violet #8B5CF6 और blue #60A5FA

## Build prompt — उद्देश्य

Text, URL, email और Wi-Fi details से scan करने योग्य QR codes locally generate करने वाला privacy-friendly tool बनाओ। Unique working mini app बनाओ, polished screenshot-only mockup नहीं। पहले [shared Build Standards](../BUILD-STANDARDS.md) पढ़ो और लागू करो। Implementation शुरू करने की अनुमति मिलने पर इस specification से build करना; अभी यह planning document है।

## Layout और UX

Left में content-type tabs और input fields, right में बड़े quiet-zone सहित QR preview; नीचे export options और saved designs। Mobile पर input के बाद preview।

## ज़रूरी working features

- Text/URL/email/Wi-Fi tabs के लिए उचित forms दो; Wi-Fi SSID, password और security fields सही escape/encode हों। Email subject/body URL encoding से बनें।
- User typing के बाद debounced live preview; length indicator और library capacity exceed होने पर error रखो। URL syntax validate करो, arbitrary text को URL मानकर बदलो मत।
- Foreground/background color, size 256/512/1024 और error-correction options दो; reliable dark-on-light preset default हो और low contrast पर warning दो।
- PNG और SVG download, filename customization तथा reset हों। QR library locally bundle और license include करो; default generation किसी external QR service को data न भेजे।
- Wi-Fi passwords और sensitive payload localStorage/history में default save न हों। केवल explicit opt-in पर non-sensitive designs save कराओ; saved item delete हो।

## Logic और data behavior

QR payload बनाने और render/export करने के functions अलग रखो। Mandatory quiet zone सुरक्षित रहे; initial version में logo overlay न जोड़ो जिससे scan reliability बिगड़े।

## Animation और visual personality

Preview frame पर subtle pink scan-line, generate पर compact fade; animation केवल surrounding frame पर हो, actual QR pixels पर नहीं। Default dark theme, readable typography और restrained pink/purple/blue/red accent system रखो; बाकी projects से अलग central layout हो।

## Empty, loading और error states

Empty input, invalid URL, payload too large, poor contrast और export failure में inline instructions हों; downloadable code fake success न दिखाए।

## Completion checks

Generated text, URL, email और Wi-Fi QR को कम से कम दो independent scanners/devices से test करो; PNG/SVG का content preview से match हो और quiet zone intact रहे। Shared checklist के responsive, keyboard, reduced-motion, data-safety और actual upload-size checks भी pass हों।

## बाद की delivery

इस numbered folder को independent runnable app में बदलना। Root `index.html`, local styles/scripts/assets, concise README और honest setup/browser-limit notes शामिल करना। Working preview verify होने के बाद ही Mini Projects में upload/scheduling का अगला चरण होगा; अभी न build, न upload, न deployment।
