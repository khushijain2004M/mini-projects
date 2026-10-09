# 23. Habit & Streak Tracker — StreakGarden

**स्थिति:** केवल prompt; app अभी build नहीं हुई है।

**Source:** अतिरिक्त suggested project  
**Future app folder:** `mini-projects/23-habit-streak-tracker/`  
**Visual palette:** Night plum #130E22, violet #A78BFA, pink #F472B6 और blue #38BDF8

## Build prompt — उद्देश्य

Daily/selected-weekday habits track करने वाला calendar-based app बनाओ जिसमें streaks और completion percentages सही logic से निकलें। Unique working mini app बनाओ, polished screenshot-only mockup नहीं। पहले [shared Build Standards](../BUILD-STANDARDS.md) पढ़ो और लागू करो। Implementation शुरू करने की अनुमति मिलने पर इस specification से build करना; अभी यह planning document है।

## Layout और UX

Today habit checklist, weekly strip, monthly heatmap और selected habit detail pane; mobile पर clear today-first layout।

## ज़रूरी working features

- Habits create/edit/archive/delete; name, icon from local SVG set, color, daily or selected weekdays और optional numeric target हों।
- Today/previous dates check/uncheck; future days complete न करने दो। Numeric habit के लिए increment/decrement और target-completion status रखें।
- Current streak, best streak और completion ratio; non-scheduled days streak न तोड़ें और missed scheduled days accurate हों।
- Monthly calendar/heatmap, habit filters और weekly summary; archived habit historical data preserved रहे, permanent delete confirmation हो।
- Versioned local data backup/import, clear sample-data option और user-visible timezone/date convention दें; app closed होने पर reminders guaranteed न हों।

## Logic और data behavior

Habits और check-ins IDs+local YYYY-MM-DD से key करो। Today incomplete होने पर yesterday का active streak prematurely zero न करो; recurrence edits पुराने history के लिए explicit policy रखें।

## Animation और visual personality

Completion पर short bloom/check effect और subtle purple constellation; repeated toggles पर distracting full-screen confetti नहीं। Default dark theme, readable typography और restrained pink/purple/blue/red accent system रखो; बाकी projects से अलग central layout हो।

## Empty, loading और error states

No habits, unscheduled day, archived state, conflicting import और storage unavailable।

## Completion checks

Weekday recurrence, month/year boundaries, today pending, missed day, check undo, numeric target और archive restore test करो। Shared checklist के responsive, keyboard, reduced-motion, data-safety और actual upload-size checks भी pass हों।

## बाद की delivery

इस numbered folder को independent runnable app में बदलना। Root `index.html`, local styles/scripts/assets, concise README और honest setup/browser-limit notes शामिल करना। Working preview verify होने के बाद ही Mini Projects में upload/scheduling का अगला चरण होगा; अभी न build, न upload, न deployment।
