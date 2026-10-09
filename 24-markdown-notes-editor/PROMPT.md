# 24. Markdown Notes Editor — Inkspace

**स्थिति:** केवल prompt; app अभी build नहीं हुई है।

**Source:** अतिरिक्त suggested project  
**Future app folder:** `mini-projects/24-markdown-notes-editor/`  
**Visual palette:** Blue-black #080F1D, sapphire #60A5FA, orchid #C084FC और rose #F472B6

## Build prompt — उद्देश्य

Local-first Markdown note writing, search और safe preview वाला compact editor बनाओ। Unique working mini app बनाओ, polished screenshot-only mockup नहीं। पहले [shared Build Standards](../BUILD-STANDARDS.md) पढ़ो और लागू करो। Implementation शुरू करने की अनुमति मिलने पर इस specification से build करना; अभी यह planning document है।

## Layout और UX

Notes sidebar, editor/preview split pane, status/footer; mobile editor/preview tabs और collapsible notebook list।

## ज़रूरी working features

- Notes create/rename/duplicate/delete, folders or tags, favourite, search और updated-time sorting हों; trash/restore with explicit permanent-delete action रखें।
- Markdown headings/lists/links/code/blockquote/table preview; edit-only, preview-only और split modes; formatting toolbar selection को सही wrap करे।
- Debounced autosave, word/character counts, unsaved/saved status और per-note cursor preservation; switching note में last edits खोएँ नहीं।
- Export .md और all-notes JSON backup/import; import conflict merge/replace user से चुनवाओ और replace से पहले backup दें।
- Local bundled parser plus sanitizer से preview सुरक्षित बनाओ; raw HTML disabled by default, scripts/event handlers/javascript URLs block हों। Remote images load केवल opt-in हो।

## Logic और data behavior

Source plain text रहे; sanitized output के अलावा innerHTML मत लगाओ। Versioned data schema और stale autosave protection हों; browser storage failure पर manual download backup available हो।

## Animation और visual personality

Short pane fade, restrained blue caret accent और purple active-note edge; typing area stable हो, particles editor के पीछे न चलें। Default dark theme, readable typography और restrained pink/purple/blue/red accent system रखो; बाकी projects से अलग central layout हो।

## Empty, loading और error states

Empty library, no search result, invalid import, save/quota error और note-delete undo।

## Completion checks

Autosave quick switch, malicious Markdown/URLs, export round trip, mobile mode change, trash restore और storage errors test करो। Shared checklist के responsive, keyboard, reduced-motion, data-safety और actual upload-size checks भी pass हों।

## बाद की delivery

इस numbered folder को independent runnable app में बदलना। Root `index.html`, local styles/scripts/assets, concise README और honest setup/browser-limit notes शामिल करना। Working preview verify होने के बाद ही Mini Projects में upload/scheduling का अगला चरण होगा; अभी न build, न upload, न deployment।
