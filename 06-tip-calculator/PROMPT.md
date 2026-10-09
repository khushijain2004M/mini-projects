# 06. Tip Calculator — Splitly Night

**स्थिति:** केवल prompt; app अभी build नहीं हुई है।

**Source:** आपकी screenshots की original list  
**Future app folder:** `mini-projects/06-tip-calculator/`  
**Visual palette:** Graphite #11131F, dark pink #DB2777, blue #38BDF8 और violet #8B5CF6

## Build prompt — उद्देश्य

Bill, tip और group split को तुरंत calculate करने वाला clear calculator बनाओ। Unique working mini app बनाओ, polished screenshot-only mockup नहीं। पहले [shared Build Standards](../BUILD-STANDARDS.md) पढ़ो और लागू करो। Implementation शुरू करने की अनुमति मिलने पर इस specification से build करना; अभी यह planning document है।

## Layout और UX

Left input stack, right बड़ा per-person result और bill breakdown; mobile पर sticky result card और numeric keyboards।

## ज़रूरी working features

- Bill amount, currency display selector, 0/5/10/15/20 percent presets, custom tip और number of people 1–50 रखो।
- Tip total, grand total, per-person share और extra rounding amount स्पष्ट दिखाओ; optional round-up per person toggle जोड़ो।
- Tax optional input और tip basis Before tax / After tax विकल्प; calculation policy result में label करो।
- Copy bill summary, reset और quick split scenario buttons; केवल settings save हों, transaction history जरूरी नहीं।
- Currency बदलने से arithmetic amounts convert न हों; selector केवल denomination बदले, जब तक exchange API explicitly लागू न हो।

## Logic और data behavior

Amounts smallest currency units/controlled decimal arithmetic से compute करो; evenly rounded shares का remainder कहाँ जाता है स्पष्ट दिखाओ। NaN, negatives और zero people रोकना जरूरी है।

## Animation और visual personality

Results में restrained number tween, selected tip chip pink pulse और split segments reveal; live calculation पर layout jump न हो। Default dark theme, readable typography और restrained pink/purple/blue/red accent system रखो; बाकी projects से अलग central layout हो।

## Empty, loading और error states

Empty inputs, zero bill, zero tip, excessive percentage और invalid decimals पर field-level messages दें।

## Completion checks

1000 bill + 10% + 4 people = 275 each, 0% tip, custom decimals, tax-basis difference और rounding remainder verify करो। Shared checklist के responsive, keyboard, reduced-motion, data-safety और actual upload-size checks भी pass हों।

## बाद की delivery

इस numbered folder को independent runnable app में बदलना। Root `index.html`, local styles/scripts/assets, concise README और honest setup/browser-limit notes शामिल करना। Working preview verify होने के बाद ही Mini Projects में upload/scheduling का अगला चरण होगा; अभी न build, न upload, न deployment।
