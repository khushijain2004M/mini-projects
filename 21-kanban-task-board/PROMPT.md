# 21. Kanban Task Board — FlowDock

**स्थिति:** केवल prompt; app अभी build नहीं हुई है।

**Source:** अतिरिक्त suggested project  
**Future app folder:** `mini-projects/21-kanban-task-board/`  
**Visual palette:** Midnight slate #0C1020, electric blue #38BDF8, purple #8B5CF6 और pink #F472B6

## Build prompt — उद्देश्य

To do → In progress → Done workflow वाला personal Kanban board बनाओ जिसे keyboard और touch से भी आसानी से manage किया जा सके। Unique working mini app बनाओ, polished screenshot-only mockup नहीं। पहले [shared Build Standards](../BUILD-STANDARDS.md) पढ़ो और लागू करो। Implementation शुरू करने की अनुमति मिलने पर इस specification से build करना; अभी यह planning document है।

## Layout और UX

Board title/summary ऊपर; तीन clear columns और sticky add-task action; desktop side detail drawer, mobile horizontally navigable columns और list-view विकल्प।

## ज़रूरी working features

- Tasks create/edit/delete; title, description, priority, tags, due date और checklist; meaningful empty column तथा undo-delete action रखें।
- Drag-and-drop reorder/move support करो; हर card पर accessible Move to menu और keyboard alternative दें ताकि drag करना mandatory न हो।
- Search, tag/priority filters, overdue indicator और list/board view; completed tasks archive/unarchive तथा column counts accurately update हों।
- Task detail drawer में checklist completion और notes हों; board data versioned localStorage में save और JSON backup/import हो।
- Optional WIP limit per column और today summary जोड़ो; limit exceed warning advisory हो। कोई fake collaborative/live team feature न दिखाओ।

## Logic और data behavior

Stable IDs और explicit column/order fields हों; filtered view में reorder hidden tasks को accidentally delete/reorder न करे। Due date local calendar date हो, UTC midnight drift से बचो।

## Animation और visual personality

Smooth card lift/drop और subtle blue/purple column highlight; reduced motion तथा touch scroll के लिए simplified behavior। Default dark theme, readable typography और restrained pink/purple/blue/red accent system रखो; बाकी projects से अलग central layout हो।

## Empty, loading और error states

Empty board, no results, invalid imported board, unsaved edit और unavailable storage में recoverable feedback।

## Completion checks

Drag और menu move, keyboard flow, filtered ordering, reload persistence, archive restore, undo और mobile scroll test करो। Shared checklist के responsive, keyboard, reduced-motion, data-safety और actual upload-size checks भी pass हों।

## बाद की delivery

इस numbered folder को independent runnable app में बदलना। Root `index.html`, local styles/scripts/assets, concise README और honest setup/browser-limit notes शामिल करना। Working preview verify होने के बाद ही Mini Projects में upload/scheduling का अगला चरण होगा; अभी न build, न upload, न deployment।
