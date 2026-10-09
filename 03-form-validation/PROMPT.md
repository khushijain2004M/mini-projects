# 03. Form Validation — Gateform

**स्थिति:** केवल prompt; app अभी build नहीं हुई है।

**Source:** आपकी screenshots की original list  
**Future app folder:** `mini-projects/03-form-validation/`  
**Visual palette:** Deep plum #120D20, pink #EC4899, violet #8B5CF6 और focus blue #38BDF8

## Build prompt — उद्देश्य

Signup/login form validation का interactive showcase बनाओ जिसमें users आसानी से valid data भरना सीखें। Unique working mini app बनाओ, polished screenshot-only mockup नहीं। पहले [shared Build Standards](../BUILD-STANDARDS.md) पढ़ो और लागू करो। Implementation शुरू करने की अनुमति मिलने पर इस specification से build करना; अभी यह planning document है।

## Layout और UX

Split layout: left compact brand/security artwork, right Login / Create account tabs और साफ़ labelled form; mobile पर form सबसे पहले।

## ज़रूरी working features

- Signup में display name, email, password, confirm password और terms checkbox; Login में email/password और optional remember preference रखो।
- Email syntax validation, whitespace handling, password minimum length/strength guidance और confirm-password match inline दिखाओ; international names स्वीकार करो।
- Field blur के बाद helpful error और submit पर full validation; invalid submit में first invalid field focus हो और error summary links जोड़ो।
- Password show/hide, accessible requirement checklist और valid/invalid examples वाले optional developer preview panel जोड़ो।
- Success पर स्पष्ट Demo submission complete screen दिखाओ। Backend न होने पर account created, login verified या authentication successful का दावा न हो। Password persist, log या transmit न हो।

## Logic और data behavior

Validation pure functions में रखो; aria-invalid/aria-describedby और browser autocomplete attributes सही हों। Duplicate submit रोकना और loading state demo mode से label करना जरूरी है।

## Animation और visual personality

Labels का subtle focus lift, valid-state checkmark reveal और success panel slide; errors के लिए excessive shaking/flashing न हो। Default dark theme, readable typography और restrained pink/purple/blue/red accent system रखो; बाकी projects से अलग central layout हो।

## Empty, loading और error states

Empty submit, malformed email, pasted password, mismatch, missing consent और keyboard-only use को handle करो।

## Completion checks

Blank form, valid flow, Unicode name, spaces, password mismatch, Enter submit और screen-reader error association verify करो। Shared checklist के responsive, keyboard, reduced-motion, data-safety और actual upload-size checks भी pass हों।

## बाद की delivery

इस numbered folder को independent runnable app में बदलना। Root `index.html`, local styles/scripts/assets, concise README और honest setup/browser-limit notes शामिल करना। Working preview verify होने के बाद ही Mini Projects में upload/scheduling का अगला चरण होगा; अभी न build, न upload, न deployment।
