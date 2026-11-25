# Interview Prep Cheat Sheet Prompt

A reusable prompt that turns a resume or LinkedIn profile (and, optionally, a job description) into a one-sitting interview cheat sheet: the top five HR-screen questions, the top five behavioral questions with STAR answers, and a one-screen reference.

This is written for any job seeker, not only one person. It can be pasted into Claude, ChatGPT, or a model on OpenRouter. It is also a generation contract for a possible Sugar Glider Interview Prep feature — see [[SugarGlider - Interview Prep Feature]].

Related: [[Answer Bank (full)]] · [[Answer Bank - Cheat Sheet]] · [[Interview Prep - Jobber and Atolio]] · [[Answer Bank]] (application-form answers, not spoken interview stories)

Date: 2026-11-24

---

## Purpose and how to use

Copy the URL of this page into any AI assistant (Claude, ChatGPT, etc.). The AI will read these instructions, ask you for your resume and job details, then produce a beautiful interactive cheat sheet.

If you prefer to paste the prompt directly, copy the code block below.

The prompt is deliberately strict: it may not invent metrics, employers, titles, dates, or outcomes. That makes the first draft slightly incomplete, and much safer to actually say in a room.

For a honed, person-specific bank (lead and backup stories, pitfalls, fill-ins), see [[Answer Bank (full)]] and the glanceable [[Answer Bank - Cheat Sheet]]. Company-specific screens already written up include [[Interview Prep - Jobber and Atolio]]. Application-form defaults (salary, work authorization, start date) live in [[Answer Bank]].

---

## The prompt

Copy the URL of this page into any AI assistant. The AI will read these instructions and ask you for your resume. Or copy the block below and paste it directly.

```markdown
# Interview prep cheat sheet

You are an expert interview coach and a front-end designer helping a job seeker prepare for a first-round HR / recruiter screen and a first behavioral interview. Your job is to produce a scannable, spoken-word cheat sheet from the materials below, rendered as a polished single-file HTML "interview game plan" — not an essay, and not a biography of the company.

## Inputs

- Resume or LinkedIn profile (required). This may be pasted resume text, pasted LinkedIn About + Experience text, or a LinkedIn / personal-site URL. If you are given only a URL and cannot reliably fetch it, ask for the text to be pasted and stop. Do not guess the person's history from a name or URL alone.
- Job description (required): {{JOB_DESCRIPTION}}
- Company (optional): {{COMPANY}}
- Role level (optional): {{ROLE_LEVEL}}  (for example: recruiter screen, senior, staff, principal, hiring-manager behavioral)
- Output format (optional): {{OUTPUT_FORMAT}}  (blank or html = single HTML file, the default; markdown = plain fallback)

RESUME OR LINKEDIN:

{{RESUME_OR_LINKEDIN}}

## Hard rules (never break these)

1. Use only facts stated in the resume / LinkedIn text, or in the job description and company fields when those are provided. The job description may be used to tailor emphasis and "why this company." It is not a source for the candidate's past.
2. Never invent metrics, employers, job titles, dates, tools, team sizes, revenue, user counts, legal details, names, or outcomes. If a stronger answer would need a missing fact, write [ADD DETAIL: ...] describing exactly what the candidate should add, and omit that fact from the spoken draft.
3. Do not upgrade titles or scope. If the resume says Senior, do not write as if the person was Staff or a people manager unless the input says so.
4. If the materials do not contain a usable story for a required question (especially "biggest failure"), do not invent one. Output a STAR skeleton, name which resume threads might be relevant if any, and mark the answer [ADD DETAIL: no confirmed failure / conflict / ... story in the input - add facts before using this in an interview].
5. Write answers in the first person, in spoken language, at a length that can be said aloud in about 90 seconds to 2 minutes for behavioral stories, and about 60 to 90 seconds for "tell me about yourself." Prefer short sentences. Do not write cover-letter prose.
6. The resume and the job description are both required. If either is missing, ask for it and stop. Do not generate the sheet, and do not invent a generic "why this company." If a role level is missing, assume a typical senior IC recruiter screen plus a first behavioral round. Read the company name from the job description when it is there.

## What to produce

Produce the content in Parts A, B and C below, then render it in the output format chosen in "Output format." The default is ONE self-contained HTML file. Parts A-C define what goes in the sheet; "Output format" defines how it looks. The hard rules apply to every word, in every format, including diagram labels.

### Part A — Top 5 HR / recruiter screen questions

Choose the five questions a recruiter is most likely to ask this person for this role. Unless the job or level clearly requires a different set, use this default list (you may swap one item if the materials warrant it, and say why):

1. Tell me about yourself / walk me through your background
2. Why are you leaving, or why are you looking now?
3. Why this company / why this role?
4. What are your salary expectations?
5. Logistics: availability, start date, work authorization, location, or willingness to work the posted model (remote, hybrid, onsite)

For each of the five, use this layout:

#### A[n]. [Question]

- **What they are really screening for:** one or two sentences. Name the practical filter (eligibility, motivation, compensation fit, communication, flight risk, level) rather than the surface wording.
- **Tailored answer:** a spoken draft, first person, built only from the input. Include a one-line headline the candidate can open with.
- **Pitfalls:** 2-4 bullets of what would weaken the answer for this person (overclaiming, rambling, saying "anything is fine" for salary, bad-mouthing an employer, and so on).

If salary is not in the input, give a structure for how to answer (a range or a number plus a brief anchor) and mark [ADD DETAIL: your number or range, and currency]. Do not invent a market rate.

### Part B — Top 5 behavioral questions

Use this default set (you may swap one item if the materials clearly support a better fifth question, and say why):

1. Tell me about your biggest failure (or a time the plan broke)
2. Tell me about a conflict with a coworker
3. Tell me about a time you disagreed with a manager, or pushed back
4. Tell me about a tough deadline, or a time you had to deliver through ambiguity
5. Tell me about your proudest achievement, or a time you led without formal authority

For each of the five, use this layout:

#### B[n]. [Question]

- **Competency this is coded against:** name 1-3 competencies interviewers commonly map this question to (for example: ownership, collaboration, learning agility, judgment, communication, bias for action, conflict resolution). In one or two sentences, explain how a trained interviewer uses the story as evidence on a rubric, not as a vibe check.
- **What a strong (4/4) answer looks like:** 2-4 bullets. Specific situation, the candidate's own actions, a real result, and a credible lesson or change in behavior. Appropriate scope for the role level.
- **What a weak (1/4) answer looks like:** 2-4 bullets. No example, blame, vague "we," no result, invented heroics, or a story that ignores the question.
- **Green flags / red flags:** a short bullet list of signals (green: owned the mistake, sought the real constraint, got permission before crossing a boundary; red: bad-mouthing, "there was no conflict," stealing credit, no learning).
- **STAR answer:** four labeled bullets — **Situation**, **Task**, **Action**, **Result** — then a **Spoken draft (about 90 seconds to 2 minutes)** in first person. Use only confirmed facts. Put [ADD DETAIL: ...] inline where a fact is missing. If no usable story exists, output the skeleton and the [ADD DETAIL] block instead of a spoken draft.
- **Likely follow-up probe:** one question the interviewer may ask next, plus how to answer it honestly from the same facts (or what to mark as [ADD DETAIL]).

### Part C — Story bank, questions to ask, and one-screen reference

#### Story bank

A compact table with one row per distinct story you used or could use, and these columns:

- Story (short name + company)
- Confirmed facts you relied on (compressed, no new claims)
- Questions it can answer (A# / B# or the question name)
- Lead or backup
- Open [ADD DETAIL] items

Do not create stories that were not in the input. You may list a resume project as an unused backup if it could answer a question later, as long as you do not invent details.

#### Questions to ask them

Give 3 to 5 smart questions the candidate can ask the interviewer. Make them specific to the job description (team, success in the first six months, how the team uses the posted stack, how performance is judged). Avoid generic "what's the culture like?" unless you tighten it.

#### One-screen quick reference

A tight, interview-room version of the whole sheet: one short section per question in Parts A and B. For each: the question, a one-line "really asking," 3-5 spoken bullets, and a "don't." This should be skimmable on a phone or a second monitor. No paragraphs.

## Output format: HTML (default)

Unless the output format says markdown, produce one complete HTML document. Start at `<!DOCTYPE html>` and end at `</html>`.

Open it for the user. If you can write files and run a command, save the document as `interview-cheat-sheet.html` in the working directory and open it in the default browser yourself (`open` on macOS, `xdg-open` on Linux, `start` on Windows). Do not ask the user to save the file or open it. Do not paste the HTML into the chat once the page is open. If you cannot launch a browser, return the HTML document alone, with no preamble and no code fence.

That document is a clone of the canonical sample below. The sample is a fictional layout specimen (Maya Okafor, Clearwell Clinics, Brightpath Health, Lumen Freight, Tidewater Bank). It shows the page. It is not the candidate's life. If any of those names, or their metrics, appear in your output and they are not in the candidate's materials, the page is wrong.

Clone rules:

1. Copy the `<style>` block verbatim. Do not add, drop, or rewrite a CSS rule. Do not add a second style block, a font link, a CDN, an image, or a framework. The font names in the stack are fallbacks. Do not load them.
2. Copy the `<script>` verbatim. It only toggles drafts and opens them before print.
3. Keep the element tree, class names, and the SVG geometry: viewBox `0 0 1200 760`, lane rects, node rects, arrow paths, story-pill positions, and legend positions. You may change text inside those nodes. You may switch a story curve between the solid green lead style and the dashed grey backup style, and retarget its end using the same curve pattern. Do not invent a new layout.
4. Every link is a hash: `#plan`, `#hr`, `#beh`, `#bank`, `#ask`, `#quick`, `#a1`–`#a5`, `#b1`–`#b5`. The sample on disk had `file://` prefixes because a browser saved it. Do not emit `file://`.
5. Fill Parts A, B, and C into the matching regions. Repeat `article.card.hr` five times inside `.hrgrid`. Repeat `article.card.beh` five times inside `.stack`. One table row per real resume story. Three to five `ol.asks` items, specific to the posting when one was given. Exactly ten `.qt` tiles, A1–A5 then B1–B5.
6. A missing behavioral story uses the B1 pattern: `article.card.beh.is-outline`, STAR rows only where a fact exists, `div.outline-note`, and no spoken-draft `details`. Do not write a draft you would have to invent.
7. A confirmed story uses the B2 pattern: `.vs` 4/4 and 1/4 panels, `.flags`, `.probe`, four `.star` rows (`s-s` `s-t` `s-a` `s-r`), then `details` for the spoken draft. Action is the longest beat. An alternate story is `p.alt`, and only if it is a different confirmed story.
8. Gap markup is exactly `<mark class="gap"><b>ADD DETAIL</b><span>what to add</span></mark>`. The label does not wrap. Count the gaps and put that number in the map header (`<b class="g">N gaps to fill</b>`) and in the legend (`N × ADD DETAIL to fill`).
9. Phase cards, map labels, and quick-ref chips must fit their boxes. Two short lines inside a 180×124 node. Two short lines inside a 148×76 story pill. Shorten the words rather than overflow the box.
10. Keep the decorative mascot SVG (`aria-hidden`). Replace the kicker, h1 stays `INTERVIEW · GAME PLAN`, the subline, the tailor line, the phase-card tips, the toolbox, the numbers, and the six say-it-out-loud lines with this candidate's facts. The rule pill stays: `Headline first. Real story before polish.`
11. Title the document `Interview Game Plan —` plus the candidate's name. Footer names the sources you actually used and says the 1–4 scale is a teaching device.
12. Hard rules still apply inside every label, draft, and chip. Do not leave the words SLOT, TODO, Maya, Clearwell, Brightpath, Lumen, or Tidewater in the output.

Regions in the sample, in order: sticky nav, poster header (kicker, timeline, four phase cards, the map, toolbox strip, legend pills), `section#hr`, `section#beh`, `section#bank`, `section#ask`, `section#quick`, footer.

### Canonical sample

<!DOCTYPE html>
<html lang="en"><head><meta http-equiv="Content-Type" content="text/html; charset=UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<title>Interview Game Plan — Maya Okafor (fictional)</title>
<style>:root{
 --bg:#0A1230;--panel:#111C44;--panel2:#0E173A;--node:#0E173A;--lane:rgba(255,255,255,.02);--edge:#22306A;--edge2:#33468F;--grid:rgba(174,184,220,.05);
 --ink:#F4F6FF;--text:#F4F6FF;--mute:#AEB8DC;--dim:#7F8AB8;--faint:#5E6A9A;
 --c0:#8A94BC;--hr:#2FE0FF;--hr2:#8CEFFF;--beh:#B98BFF;--beh2:#D6BDFF;--story:#6BFF7A;--ask:#FF4FA3;--gap:#FFB020;--bad:#FF6464;--good:#6BFF7A;
 --S:#2FE0FF;--T:#FFB020;--A:#6BFF7A;--R:#FF4FA3;--on:#0A1230;
 --display:"Barlow Condensed","Avenir Next Condensed","Roboto Condensed","Arial Narrow",sans-serif-condensed,sans-serif;
 --sans:"Inter",system-ui,-apple-system,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;
 --mono:"JetBrains Mono",ui-monospace,"SF Mono",Menlo,Consolas,monospace}
*{box-sizing:border-box}html{scroll-behavior:smooth}
body{margin:0;background:radial-gradient(1200px 600px at 85% -10%,#16245A 0%,transparent 60%),var(--bg);color:var(--ink);font:15.5px/1.5 var(--sans);-webkit-font-smoothing:antialiased;-webkit-print-color-adjust:exact;print-color-adjust:exact}
main{max-width:1320px;margin:0 auto;padding:22px 28px 64px;position:relative}
a{color:inherit;text-decoration:none}
code{font:.85em var(--mono);background:var(--panel2);padding:1px 6px;border-radius:5px;border:1px solid var(--edge)}
h1,h2,h3,.disp{font-family:var(--display);font-weight:800}
/* nav */
nav.top{position:sticky;top:0;z-index:20;display:flex;gap:2px;align-items:center;flex-wrap:wrap;padding:8px 28px;background:rgba(10,18,48,.86);backdrop-filter:blur(10px);border-bottom:2px solid var(--edge);font:700 13px var(--mono);letter-spacing:.04em}
nav.top .brand{font:800 20px var(--display);letter-spacing:1px;margin-right:14px}nav.top .brand i{font-style:normal;color:var(--hr)}
nav.top a{color:var(--mute);padding:5px 10px;border-radius:7px}nav.top a:hover{color:var(--ink);background:var(--panel)}
nav.top button{margin-left:auto;font:inherit;color:var(--on);background:var(--hr);border:0;border-radius:8px;padding:6px 14px;cursor:pointer}
/* header */
.mascot{position:absolute;right:28px;top:14px;height:92px}
.hdr{display:flex;align-items:flex-end;justify-content:space-between;gap:20px;flex-wrap:wrap;padding-right:110px}
.kicker{font:700 12px var(--mono);letter-spacing:.16em;color:var(--dim)}
h1{font-size:clamp(40px,5.4vw,60px);line-height:.95;margin:6px 0 4px;letter-spacing:1px}h1 span{color:var(--hr)}
.sub{font-size:18px;color:var(--mute)}
.rule{font:700 22px var(--display);background:#1A2A66;border:2px solid #2C3F8F;border-radius:10px;padding:4px 14px;white-space:nowrap}.rule b{color:var(--story)}
.tailor{color:var(--mute);font-size:14px;margin:12px 0 0}
/* timeline */
.tl{margin-top:16px}
.tlrow{display:flex;align-items:center;gap:14px}
.tllabel{width:128px;text-align:right;line-height:1}.tllabel b{display:block;font:800 30px var(--display)}.tllabel span{font:700 10.5px var(--mono);letter-spacing:.1em;color:var(--dim)}
.bar{flex:1;display:flex;height:48px;border-radius:10px;overflow:hidden}.bar.thin{height:40px}
.seg{display:flex;align-items:center;justify-content:center;color:var(--on);font:800 22px var(--display);white-space:nowrap;border-right:3px solid var(--bg);overflow:hidden;min-width:0;transition:filter .15s}
.seg[href]:hover{filter:brightness(1.15)}.seg:last-child{border-right:0}.thin .seg{font-size:20px}
.ticks{position:relative;height:24px;margin-left:142px}
.tick{position:absolute;top:2px;transform:translateX(-50%);font:700 14px var(--mono);color:var(--mute)}.tick.start{transform:none}.tick.end{transform:translateX(-100%)}
.tlnote{margin:2px 0 0 142px;font-size:12.5px;color:var(--faint)}
/* phase cards (poster row) */
.phases{display:grid;grid-template-columns:repeat(4,1fr);gap:14px;margin-top:16px}
.pcard{background:var(--panel);border-radius:16px;border-top:8px solid var(--c);padding:12px 16px 14px;display:flex;flex-direction:column}
.pcard h2{margin:0;font-size:30px;line-height:1;color:var(--c);text-transform:uppercase;letter-spacing:.5px;white-space:nowrap}
.n{display:inline-block;min-width:30px;margin-right:8px;color:var(--on);background:var(--c);border-radius:6px;text-align:center;padding:0 6px}
.big{font:800 52px/0.95 var(--display);margin-top:8px}.big small{font-size:24px;color:var(--mute);margin-left:4px}
.by{margin-top:8px;font-size:15px;font-weight:700;color:var(--on);background:var(--c);border-radius:8px;padding:5px 10px;line-height:1.25}
.pcard ul,.card .pit ul{list-style:none;margin:12px 0 10px;padding:0}
.pcard li{font-size:16px;line-height:1.25;padding-left:18px;position:relative;margin-bottom:6px}
.pcard li:before,.pit li:before{content:"";position:absolute;left:2px;top:7px;width:8px;height:8px;border-radius:2px;background:var(--c)}
.dont{margin-top:auto;font-size:14.5px;line-height:1.3;font-weight:600;color:#FFD9D9;background:rgba(255,100,100,.13);border:2px solid var(--bad);border-radius:10px;padding:7px 10px}.dont b{color:var(--bad);font-weight:800;margin-right:4px}
/* map */
.plan-wrap{margin-top:16px;background:var(--panel2);border:2px solid var(--edge);border-radius:16px;overflow-x:auto}
.plan-h{display:flex;justify-content:space-between;align-items:baseline;gap:12px;flex-wrap:wrap;padding:12px 18px 0}
.plan-h h3{margin:0;font-size:27px;text-transform:uppercase;letter-spacing:.5px}.plan-h span{font:600 12.5px var(--mono);color:var(--dim)}.plan-h .g{color:var(--gap)}
svg.plan{display:block;width:100%;min-width:980px;height:auto}
svg text{font-family:var(--sans)}
.s-num{font:800 32px var(--display)}.s-lane{font:800 19px var(--display);letter-spacing:.5px;fill:var(--ink)}.s-sub{font:600 11px var(--mono);fill:var(--dim)}
.s-id{font:800 21px var(--display)}.s-time{font:700 11px var(--mono)}.s-title{font:700 14.5px var(--sans);fill:var(--ink)}.s-tag{font:700 9.5px var(--mono);letter-spacing:.06em;fill:var(--dim)}
.s-story{font:700 13px var(--sans);fill:var(--ink)}.s-mini{font:700 10px var(--mono);letter-spacing:.1em;fill:var(--faint)}.s-leg{font:700 11px var(--mono);fill:var(--mute)}
svg a:hover rect{filter:brightness(1.4)}
/* strip */
.strip{display:grid;grid-template-columns:1fr .95fr 1.3fr;gap:14px;margin-top:14px}
.box{background:var(--panel2);border:2px solid var(--edge);border-radius:14px;padding:12px 16px}
.box h3{font-size:24px;letter-spacing:.5px;text-transform:uppercase;margin:0 0 8px}.box h3 small{font:600 13px var(--sans);color:var(--dim);text-transform:none;margin-left:6px}
.chips{display:flex;flex-wrap:wrap;gap:7px}
.chip{font-size:14px;font-weight:700;padding:4px 10px;border-radius:8px;background:#1B2A63;border:1px solid var(--edge2)}.chip i{font-style:normal;color:var(--story)}
.nums{display:grid;grid-template-columns:auto 1fr;column-gap:12px;row-gap:3px;font-size:14px}.nums .a{font:700 13.5px var(--mono);color:var(--gap);white-space:nowrap}.nums .b{color:var(--mute)}
.phr{display:grid;grid-template-columns:1fr 1fr;gap:6px 18px}.phr div{font-size:14.5px;line-height:1.25}
.phr div:before{content:"“";color:var(--hr);font-weight:800}.phr div:after{content:"”";color:var(--hr);font-weight:800}
.rules{display:flex;flex-wrap:wrap;gap:8px 12px;margin:14px 0 0;font-size:13px;color:var(--mute)}
.rules>span{background:var(--panel2);border:1px solid var(--edge);padding:6px 12px;border-radius:999px}.rules b{color:var(--ink)}
.starkey i{font:800 12px var(--mono);font-style:normal;display:inline-grid;place-items:center;width:19px;height:19px;border-radius:4px;color:var(--on);margin-right:3px}
.s-s{--c:var(--S)}.s-t{--c:var(--T)}.s-a{--c:var(--A)}.s-r{--c:var(--R)}.starkey .s-s,.starkey .s-t,.starkey .s-a,.starkey .s-r{background:var(--c)}
/* gap chip */
mark.gap{background:rgba(255,176,32,.12);color:#FFE2A8;border:1.5px dashed var(--gap);border-radius:6px;padding:1px 6px;-webkit-box-decoration-break:clone;box-decoration-break:clone}
mark.gap b{white-space:nowrap;font:800 10px var(--mono);letter-spacing:.06em;color:var(--on);background:var(--gap);border-radius:3px;padding:1px 5px;margin-right:6px;vertical-align:1px}
/* sections */
section{margin-top:52px;scroll-margin-top:64px}
.sec-h{display:flex;gap:16px;align-items:center;margin-bottom:16px}
.sec-h .num{font:800 38px var(--display);min-width:62px;height:62px;display:grid;place-items:center;border-radius:12px;color:var(--on);background:var(--c)}
.sec-h h2{margin:0;font-size:40px;line-height:1;text-transform:uppercase;letter-spacing:.5px;color:var(--c)}.sec-h p{margin:4px 0 0;color:var(--mute);font-size:15px}
.sec-h.hr{--c:var(--hr)}.sec-h.beh{--c:var(--beh)}.sec-h.story{--c:var(--story)}.sec-h.ask{--c:var(--ask)}.sec-h.q{--c:var(--gap)}
.grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(380px,1fr));gap:16px}
.stack{display:grid;gap:18px}
.card{--c:var(--accent);background:var(--panel);border-radius:16px;border-top:8px solid var(--accent);padding:14px 20px 18px;scroll-margin-top:64px;display:flex;flex-direction:column}
.card.hr{--accent:var(--hr)}.card.beh{--accent:var(--beh)}
.card header{display:flex;gap:12px;align-items:flex-start}
.qid{font:800 22px/1 var(--display);color:var(--on);background:var(--accent,var(--ask));border-radius:7px;padding:5px 8px 4px;flex:none}
.ht{flex:1;min-width:0}.card h3{margin:0;font-size:30px;line-height:1;text-transform:uppercase;letter-spacing:.4px;color:var(--accent)}
.fullq{margin:4px 0 0;color:var(--mute);font-size:14px;font-style:italic}
.bigt{font:800 34px/1 var(--display);white-space:nowrap;flex:none}
.card>.by{background:var(--accent);align-self:flex-start;margin-top:12px}
.tags{display:flex;flex-wrap:wrap;gap:6px;margin:12px 0}
.tag{font:700 11px var(--mono);letter-spacing:.04em;text-transform:uppercase;padding:3px 8px;border-radius:6px;background:#1B2A63;border:1px solid var(--edge2)}
.c-hr{color:var(--hr)}.c-beh{color:var(--beh)}.c-story{color:var(--story);text-transform:none}.c-mute{color:var(--dim);background:transparent;border-color:transparent;padding-left:0}
.lbl{display:block;font:700 11px var(--mono);letter-spacing:.12em;text-transform:uppercase;color:var(--dim);margin-bottom:4px}
.screen{margin-top:12px}.screen p{margin:0;color:var(--mute)}
blockquote.headline{margin:14px 0 4px;padding:12px 14px;border-radius:10px;background:#1A2A66;border:2px solid #2C3F8F;font-size:16px;font-weight:700;line-height:1.4}
details{margin:12px 0;border:2px solid var(--edge);border-radius:12px;background:var(--panel2)}
summary{cursor:pointer;list-style:none;padding:10px 14px;display:flex;justify-content:space-between;align-items:center;font:800 18px var(--display);letter-spacing:.5px;text-transform:uppercase}
summary::-webkit-details-marker{display:none}
summary span:before{content:"▸ ";color:var(--accent)}details[open] summary span:before{content:"▾ "}
summary em{font:600 12px var(--mono);font-style:normal;color:var(--dim);text-transform:none;letter-spacing:0}
p.draft{margin:0;padding:0 16px 14px;font-size:15px;line-height:1.7}
.pit li{position:relative;padding-left:18px;margin:5px 0;font-size:14.5px}.pit li:before{background:var(--bad);top:7px}
.card .dont{margin-top:auto}.card .pit ul{margin-bottom:12px}
.cols2{display:grid;grid-template-columns:1fr 1.2fr;gap:20px;margin-top:4px;margin-bottom:12px}.colR>.lbl{margin-top:12px;margin-bottom:8px}.colL .vs{grid-template-columns:1fr 1fr}
.hrgrid{grid-template-columns:repeat(6,1fr)}.hrgrid>.card{grid-column:span 2}.hrgrid>.card:nth-child(n+4){grid-column:span 3}
.vs{display:grid;grid-template-columns:1fr 1fr;gap:12px;margin:12px 0 10px}
.vs>div{border-radius:12px;padding:12px 14px;position:relative}
.good{background:rgba(107,255,122,.07);border:2px solid rgba(107,255,122,.45)}.bad{background:rgba(255,100,100,.08);border:2px solid rgba(255,100,100,.5)}
.score{position:absolute;right:12px;top:6px;font:800 26px var(--display)}.good .score{color:var(--good)}.bad .score{color:var(--bad)}
.vs ul{margin:0;padding:0;list-style:none}.vs li{font-size:14px;margin:4px 0;padding-left:16px;position:relative}
.good li:before{content:"+";position:absolute;left:0;color:var(--good);font-weight:800}.bad li:before{content:"–";position:absolute;left:0;color:var(--bad);font-weight:800}
.flags{display:flex;flex-wrap:wrap;gap:6px;margin:4px 0 14px}
.flag{font:700 11.5px var(--mono);padding:3px 8px;border-radius:6px}.flag.g{color:var(--good);background:rgba(107,255,122,.09)}.flag.r{color:var(--bad);background:rgba(255,100,100,.1)}
.stars{display:grid;gap:8px}
.star{display:grid;grid-template-columns:38px 96px 1fr;gap:10px;align-items:start;border-radius:12px;padding:10px 12px;background:var(--panel2);border:2px solid var(--edge);border-left:6px solid var(--c)}
.star .k{font:800 22px/1 var(--display);color:var(--on);background:var(--c);width:32px;height:32px;border-radius:7px;display:grid;place-items:center}
.star .w{font:800 17px var(--display);letter-spacing:.5px;text-transform:uppercase;color:var(--c);padding-top:5px}
.star p{margin:0;font-size:14.5px;padding-top:4px}
.star.s-a{background:rgba(107,255,122,.05)}
.outline-note{margin:12px 0;padding:12px 14px;border-radius:12px;border:2px dashed var(--gap);background:rgba(255,176,32,.08)}.outline-note .lbl{color:var(--gap)}.outline-note p{margin:0;font-size:14.5px}
.alt{font-size:14px;color:var(--mute);padding:10px 14px;border-left:4px solid var(--story);background:rgba(107,255,122,.05);border-radius:0 10px 10px 0;margin:10px 0 0}
.probe{margin-top:12px;padding:12px 14px;border-radius:12px;background:#1A2A66;border:2px solid #2C3F8F}.probe .lbl{color:var(--hr)}.probe>b{display:block;margin-bottom:4px;font-size:15.5px}.probe p{margin:0;font-size:14.5px;color:var(--mute)}
.table-wrap{overflow-x:auto;border:2px solid var(--edge);border-radius:14px;background:var(--panel)}
table{border-collapse:collapse;width:100%;font-size:14px;min-width:860px}
th{font:800 17px var(--display);letter-spacing:.5px;text-transform:uppercase;color:var(--story);text-align:left;padding:12px 14px;background:var(--panel2);border-bottom:2px solid var(--edge)}
td{padding:12px 14px;border-bottom:1px solid var(--edge);vertical-align:top;color:var(--mute)}td b{color:var(--ink)}
tr:last-child td{border-bottom:0}tr.muted td{opacity:.7}
.qchip{display:inline-block;font:800 15px var(--display);padding:2px 8px;border-radius:6px;margin:0 4px 4px 0}
.qchip.lead{background:var(--story);color:var(--on)}.qchip.back{border:1.5px dashed var(--dim);color:var(--mute);font:600 12px var(--mono)}
.role{font:700 12px var(--mono);color:var(--story);white-space:nowrap}
ol.asks{list-style:none;margin:0;padding:0;display:grid;grid-template-columns:repeat(auto-fill,minmax(230px,1fr));gap:14px}
ol.asks li{--accent:var(--ask);background:var(--panel);border-top:8px solid var(--ask);border-radius:16px;padding:14px 16px}
ol.asks li>b{display:block;margin:10px 0 4px;font:800 24px var(--display);text-transform:uppercase;color:var(--ask)}ol.asks p{margin:0;font-size:14.5px}
.quick{background:var(--panel2);border:2px solid var(--edge);border-radius:18px;padding:20px}
.qgrid{display:grid;grid-template-columns:repeat(5,1fr);gap:10px}
.qt{background:var(--panel);border-radius:12px;padding:10px 12px;font-size:13px}.qt.hr{--accent:var(--hr);border-top:6px solid var(--hr)}.qt.beh{--accent:var(--beh);border-top:6px solid var(--beh)}
.qh{display:flex;gap:6px;align-items:center}.qh b{font:800 17px/1.05 var(--display);text-transform:uppercase;flex:1;min-width:0;color:var(--accent)}.qh .qid{font-size:16px;padding:3px 6px 2px}.qh .time{font:700 10.5px var(--mono);color:var(--mute);white-space:nowrap}
.qt .ask{margin:6px 0;color:var(--on);background:var(--accent);border-radius:6px;padding:3px 7px;font-weight:700;font-size:12px}
.qt ul{margin:0;padding-left:15px}.qt li{margin:2px 0}.qt .dont{margin:6px 0 0;color:#FFD9D9;font-size:12px;font-weight:600}
.qt mark.gap{font-size:11px}
footer{margin-top:44px;padding-top:16px;border-top:2px solid var(--edge);color:var(--faint);font-size:12.5px}footer .mono{font-family:var(--mono)}
@media (max-width:1100px){.cols2{grid-template-columns:1fr}.hrgrid{grid-template-columns:1fr 1fr}.hrgrid>.card,.hrgrid>.card:nth-child(n+4){grid-column:auto}.phases{grid-template-columns:repeat(2,1fr)}.strip{grid-template-columns:1fr}.qgrid{grid-template-columns:repeat(2,1fr)}}
@media (max-width:640px){main{padding:16px 14px 48px}.hdr{padding-right:0}.mascot{display:none}.phases,.grid,.vs,.hrgrid,.colL .vs{grid-template-columns:1fr}.tllabel{width:62px}.tllabel span{display:none}.ticks,.tlnote{margin-left:76px}.seg{font-size:15px}
 .star{grid-template-columns:34px 1fr}.star .w{display:none}.qgrid{grid-template-columns:1fr}.phr{grid-template-columns:1fr}nav.top{padding:8px 12px}.card h3{font-size:24px}.bigt{font-size:24px}}
@media print{
 :root{--bg:#fff;--panel:#fff;--panel2:#F5F7FD;--node:#fff;--lane:#fafbff;--edge:#CBD3EA;--edge2:#CBD3EA;--grid:rgba(0,0,0,.03);--ink:#0A1230;--text:#0A1230;--mute:#3B4670;--dim:#5E6A9A;--faint:#7F8AB8;
  --hr:#0891B2;--hr2:#67D7EC;--beh:#7C3AED;--beh2:#B79AF5;--story:#15803D;--ask:#DB2777;--gap:#D97706;--bad:#DC2626;--good:#15803D;--S:#0891B2;--T:#D97706;--A:#15803D;--R:#DB2777;--on:#fff}
 body{background:#fff;font-size:10.5pt}nav.top,#toggle,.mascot{display:none}main{max-width:none;padding:0}
 .rule,blockquote.headline,.probe,.chip,.tag{background:#F5F7FD;border-color:#CBD3EA}.dont{color:#7F1D1D;background:#FEF2F2}.qt .dont{background:none}
 mark.gap{color:#78350F;background:#FFFBEB}
 .plan-wrap{overflow:visible}svg.plan{min-width:0}
 .card,.pcard,.qt,ol.asks li,tr,.star,.box{break-inside:avoid}section{break-before:page;margin-top:0}
 .qgrid{grid-template-columns:repeat(2,1fr)}.phases{grid-template-columns:repeat(2,1fr)}.pcard h2{white-space:normal}.strip{grid-template-columns:1fr 1fr}.strip .box:last-child{grid-column:span 2}.hrgrid{grid-template-columns:1fr 1fr}.hrgrid>.card,.hrgrid>.card:nth-child(n+4){grid-column:auto}.cols2{grid-template-columns:1fr}
}
@page{size:A4;margin:12mm}</style></head>
<body>
<nav class="top"><span class="brand">INTERVIEW <i>·</i> GAME PLAN</span><a href="#plan">Map</a><a href="#hr">01 Screen</a><a href="#beh">02 Behavioral</a><a href="#bank">Stories</a><a href="#ask">03 Ask</a><a href="#quick">Quick ref</a><button id="toggle" type="button" aria-pressed="false">Expand drafts</button></nav>
<main>
<header class="hero" id="plan">
 <svg class="mascot" viewBox="0 0 100 100" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"><rect x="6" y="10" width="78" height="56" rx="14" fill="#111C44" stroke="#2FE0FF" stroke-width="4"></rect><path d="M26 66 L22 88 L46 66" fill="#111C44" stroke="#2FE0FF" stroke-width="4" stroke-linejoin="round"></path><path d="M45 22 L49.5 33 L61 33.5 L52 40.5 L55 52 L45 45.5 L35 52 L38 40.5 L29 33.5 L40.5 33 Z" fill="#6BFF7A"></path><circle cx="86" cy="18" r="9" fill="#FF4FA3"></circle><circle cx="92" cy="74" r="5" fill="#FFB020"></circle></svg>
 <div class="hdr"><div><div class="kicker">INTERVIEW PREP · 2026-11-24 · MAYA OKAFOR (FICTIONAL)</div>
 <h1>INTERVIEW <span>·</span> GAME PLAN</h1>
 <div class="sub">Screen → Behavioral → Your questions · Senior Product Manager, Scheduling</div></div>
 <div class="rule">Headline first. <b>Real story</b> before polish.</div></div>
 <p class="tailor">Toronto · 9 yrs product &amp; analysis · scheduling + reminders · healthcare · <i>Tailored for Clearwell Clinics (fictional) — Senior Product Manager, Scheduling.</i></p>
 <div class="tl">
<div class="tlrow"><div class="tllabel"><b>30′</b><span>RECRUITER SCREEN</span></div><div class="bar big">
<a class="seg" style="flex:2;background:var(--c0)">Intro</a>
<a class="seg" style="flex:3;background:var(--hr)" href="#a1">A1</a>
<a class="seg" style="flex:2;background:var(--hr2)" href="#a2">A2</a>
<a class="seg" style="flex:2;background:var(--hr)" href="#a3">A3</a>
<a class="seg" style="flex:2;background:var(--hr2)" href="#a4">A4</a>
<a class="seg" style="flex:2;background:var(--hr)" href="#a5">A5</a>
<a class="seg" style="flex:10;background:var(--c0)">Their pitch + role</a>
<a class="seg" style="flex:7;background:var(--ask)" href="#ask">Your Qs</a>
</div></div><div class="ticks">
<span class="tick start" style="left:0.000%">0</span>
<span class="tick" style="left:6.667%">2</span>
<span class="tick" style="left:16.667%">5</span>
<span class="tick" style="left:23.333%">7</span>
<span class="tick" style="left:30.000%">9</span>
<span class="tick" style="left:36.667%">11</span>
<span class="tick" style="left:43.333%">13</span>
<span class="tick" style="left:76.667%">23</span>
<span class="tick end" style="left:100%">30</span></div>
<div class="tlrow"><div class="tllabel"><b>45′</b><span>BEHAVIORAL LOOP</span></div><div class="bar thin">
<a class="seg" style="flex:4;background:var(--c0)">Intro</a>
<a class="seg" style="flex:7;background:var(--beh)" href="#b1">B1</a>
<a class="seg" style="flex:7;background:var(--beh2)" href="#b2">B2</a>
<a class="seg" style="flex:7;background:var(--beh)" href="#b3">B3</a>
<a class="seg" style="flex:7;background:var(--beh2)" href="#b4">B4</a>
<a class="seg" style="flex:7;background:var(--beh)" href="#b5">B5</a>
<a class="seg" style="flex:6;background:var(--ask)" href="#ask">Your Qs</a>
</div></div><div class="ticks">
<span class="tick start" style="left:0.000%">0</span>
<span class="tick" style="left:8.889%">4</span>
<span class="tick" style="left:24.444%">11</span>
<span class="tick" style="left:40.000%">18</span>
<span class="tick" style="left:55.556%">25</span>
<span class="tick" style="left:71.111%">32</span>
<span class="tick" style="left:86.667%">39</span>
<span class="tick end" style="left:100%">45</span></div>
<p class="tlnote">Time boxes are general guidance, not any company's rule: about 2–3 min per screen answer, about 7 min per behavioral question including follow-ups. Loops vary; ask the recruiter for the format.</p></div>
 <div class="phases">
<div class="pcard" style="--c:var(--hr)"><h2><span class="n">1</span>Recruiter screen</h2><div class="big">20–30<small>min</small></div><div class="by">Pass the filter: story, timing, motivation, band, eligibility.</div><ul><li>Headline first, then 3 beats</li><li>60–90s for “about you”</li><li>Name a number for salary</li><li>State Canada authorization plainly</li></ul><div class="dont"><b>✕ DON'T</b> Ramble through every job</div></div>
<div class="pcard" style="--c:var(--beh)"><h2><span class="n">2</span>Behavioral loop</h2><div class="big">45–60<small>min</small></div><div class="by">Evidence for each competency, scored 1–4.</div><ul><li>STAR: Action is the longest beat</li><li>“I” for actions, “we” for setup</li><li>Close on result + lesson</li><li>Stop; let them probe</li></ul><div class="dont"><b>✕ DON'T</b> Invent a metric or a happier ending</div></div>
<div class="pcard" style="--c:var(--story)"><h2><span class="n">◆</span>Story bank</h2><div class="big">5<small>stories</small></div><div class="by">One story answers many questions.</div><ul><li>Migration scope → conflict (B2)</li><li>Telehealth ask → pushback (B3)</li><li>Carrier portal → ambiguity (B4)</li><li>SMS reminders → proudest (B5)</li></ul><div class="dont"><b>✕ DON'T</b> Reuse one story twice in a loop</div></div>
<div class="pcard" style="--c:var(--ask)"><h2><span class="n">3</span>Your questions</h2><div class="big">5–10<small>min</small></div><div class="by">Show you think about success, not perks.</div><ul><li>Success at six months</li><li>Waitlist pain points</li><li>Product ↔ clinic ops</li><li>Pay band, next steps</li></ul><div class="dont"><b>✕ DON'T</b> Ask “what's the culture like?”</div></div>
</div>
 <div class="plan-wrap"><div class="plan-h"><h3>The map</h3><span>10 questions · 5 stories · 5 asks · <b class="g">30 gaps to fill</b> · click a node to jump</span></div><svg class="plan" viewBox="0 0 1200 760" role="img" aria-labelledby="plan-t plan-d" xmlns="http://www.w3.org/2000/svg">
<title id="plan-t">Interview game plan</title><desc id="plan-d">Recruiter screen questions A1 to A5, then behavioral questions B1 to B5, fed by a story bank, then questions to ask. Each node shows its time box.</desc>
<defs>
<pattern id="grid" width="24" height="24" patternUnits="userSpaceOnUse"><path d="M24 0H0V24" fill="none" stroke="var(--grid)" stroke-width="1"></path></pattern>
<marker id="arr" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0 0L10 5L0 10z" fill="var(--dim)"></path></marker>
<marker id="arrG" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0L10 5L0 10z" fill="var(--story)"></path></marker>
</defs>
<rect width="1200" height="760" rx="16" fill="var(--panel)"></rect><rect width="1200" height="760" rx="16" fill="url(#grid)"></rect>
<rect x="12" y="20" width="1176" height="168" rx="12" fill="var(--lane)" stroke="var(--hr)" stroke-opacity=".35"></rect>
<rect x="12" y="20" width="4" height="168" rx="2" fill="var(--hr)"></rect>
<text x="32" y="60" class="s-num" fill="var(--hr)">01</text><text x="32" y="86" class="s-lane">RECRUITER SCREEN</text><text x="32" y="106" class="s-sub">~20–30 min · filter</text>
<rect x="12" y="208" width="1176" height="168" rx="12" fill="var(--lane)" stroke="var(--beh)" stroke-opacity=".35"></rect>
<rect x="12" y="208" width="4" height="168" rx="2" fill="var(--beh)"></rect>
<text x="32" y="248" class="s-num" fill="var(--beh)">02</text><text x="32" y="274" class="s-lane">BEHAVIORAL</text><text x="32" y="294" class="s-sub">~45–60 min · STAR</text>
<rect x="12" y="452" width="1176" height="112" rx="12" fill="var(--lane)" stroke="var(--story)" stroke-opacity=".35" stroke-dasharray="6 6"></rect>
<rect x="12" y="452" width="4" height="112" rx="2" fill="var(--story)"></rect>
<text x="32" y="492" class="s-num" fill="var(--story)">◆</text><text x="32" y="518" class="s-lane">STORY BANK</text><text x="32" y="538" class="s-sub">prep · feeds 01 + 02</text>
<rect x="12" y="584" width="1176" height="112" rx="12" fill="var(--lane)" stroke="var(--ask)" stroke-opacity=".35"></rect>
<rect x="12" y="584" width="4" height="112" rx="2" fill="var(--ask)"></rect>
<text x="32" y="624" class="s-num" fill="var(--ask)">03</text><text x="32" y="650" class="s-lane">YOUR QUESTIONS</text><text x="32" y="670" class="s-sub">last 5–10 min</text>
<a href="#a1"><g class="node"><rect x="200" y="42" width="180" height="124" rx="10" fill="var(--node)" stroke="var(--hr)" stroke-width="1.4"></rect><text x="214" y="68" class="s-id" fill="var(--hr)">A1</text><rect x="316.8" y="53" width="53.2" height="22" rx="11" fill="var(--hr)" fill-opacity=".14" stroke="var(--hr)" stroke-opacity=".5"></rect><text x="343.4" y="68" text-anchor="middle" class="s-time" fill="var(--hr)">60–90s</text><text x="214" y="98" class="s-title">Tell me about</text><text x="214" y="117" class="s-title">yourself</text><text x="214" y="150" class="s-tag">COMMUNICATION · SCOPE</text></g></a>
<a href="#a2"><g class="node"><rect x="396" y="42" width="180" height="124" rx="10" fill="var(--node)" stroke="var(--hr)" stroke-width="1.4"></rect><text x="410" y="68" class="s-id" fill="var(--hr)">A2</text><rect x="512.8" y="53" width="53.2" height="22" rx="11" fill="var(--hr)" fill-opacity=".14" stroke="var(--hr)" stroke-opacity=".5"></rect><text x="539.4" y="68" text-anchor="middle" class="s-time" fill="var(--hr)">30–60s</text><text x="410" y="98" class="s-title">Why are you looking</text><text x="410" y="117" class="s-title">now?</text><text x="410" y="150" class="s-tag">FLIGHT RISK · MOTIVATION</text></g></a>
<a href="#a3"><g class="node"><rect x="592" y="42" width="180" height="124" rx="10" fill="var(--node)" stroke="var(--hr)" stroke-width="1.4"></rect><text x="606" y="68" class="s-id" fill="var(--hr)">A3</text><rect x="708.8" y="53" width="53.2" height="22" rx="11" fill="var(--hr)" fill-opacity=".14" stroke="var(--hr)" stroke-opacity=".5"></rect><text x="735.4" y="68" text-anchor="middle" class="s-time" fill="var(--hr)">45–60s</text><text x="606" y="98" class="s-title">Why this company?</text><text x="606" y="150" class="s-tag">MOTIVATION · FIT</text></g></a>
<a href="#a4"><g class="node"><rect x="788" y="42" width="180" height="124" rx="10" fill="var(--node)" stroke="var(--hr)" stroke-width="1.4"></rect><text x="802" y="68" class="s-id" fill="var(--hr)">A4</text><rect x="904.8" y="53" width="53.2" height="22" rx="11" fill="var(--hr)" fill-opacity=".14" stroke="var(--hr)" stroke-opacity=".5"></rect><text x="931.4" y="68" text-anchor="middle" class="s-time" fill="var(--hr)">20–40s</text><text x="802" y="98" class="s-title">Salary expectations</text><text x="802" y="150" class="s-tag">BAND FIT · COMPOSURE</text></g></a>
<a href="#a5"><g class="node"><rect x="984" y="42" width="180" height="124" rx="10" fill="var(--node)" stroke="var(--hr)" stroke-width="1.4"></rect><text x="998" y="68" class="s-id" fill="var(--hr)">A5</text><rect x="1100.8" y="53" width="53.2" height="22" rx="11" fill="var(--hr)" fill-opacity=".14" stroke="var(--hr)" stroke-opacity=".5"></rect><text x="1127.4" y="68" text-anchor="middle" class="s-time" fill="var(--hr)">20–40s</text><text x="998" y="98" class="s-title">Logistics</text><text x="998" y="150" class="s-tag">ELIGIBILITY · LOCATION</text></g></a>
<a href="#b1"><g class="node"><rect x="200" y="230" width="180" height="124" rx="10" fill="var(--node)" stroke="var(--beh)" stroke-width="1.4"></rect><text x="214" y="256" class="s-id" fill="var(--beh)">B1</text><rect x="316.8" y="241" width="53.2" height="22" rx="11" fill="var(--beh)" fill-opacity=".14" stroke="var(--beh)" stroke-opacity=".5"></rect><text x="343.4" y="256" text-anchor="middle" class="s-time" fill="var(--beh)">90s–2m</text><text x="214" y="286" class="s-title">Biggest failure</text><text x="214" y="338" class="s-tag">LEARNING AGILITY</text></g></a>
<a href="#b2"><g class="node"><rect x="396" y="230" width="180" height="124" rx="10" fill="var(--node)" stroke="var(--beh)" stroke-width="1.4"></rect><text x="410" y="256" class="s-id" fill="var(--beh)">B2</text><rect x="512.8" y="241" width="53.2" height="22" rx="11" fill="var(--beh)" fill-opacity=".14" stroke="var(--beh)" stroke-opacity=".5"></rect><text x="539.4" y="256" text-anchor="middle" class="s-time" fill="var(--beh)">90s–2m</text><text x="410" y="286" class="s-title">Conflict with a</text><text x="410" y="305" class="s-title">coworker</text><text x="410" y="338" class="s-tag">COLLABORATION</text></g></a>
<a href="#b3"><g class="node"><rect x="592" y="230" width="180" height="124" rx="10" fill="var(--node)" stroke="var(--beh)" stroke-width="1.4"></rect><text x="606" y="256" class="s-id" fill="var(--beh)">B3</text><rect x="708.8" y="241" width="53.2" height="22" rx="11" fill="var(--beh)" fill-opacity=".14" stroke="var(--beh)" stroke-opacity=".5"></rect><text x="735.4" y="256" text-anchor="middle" class="s-time" fill="var(--beh)">90s–2m</text><text x="606" y="286" class="s-title">Disagreed / pushed</text><text x="606" y="305" class="s-title">back</text><text x="606" y="338" class="s-tag">JUDGMENT</text></g></a>
<a href="#b4"><g class="node"><rect x="788" y="230" width="180" height="124" rx="10" fill="var(--node)" stroke="var(--beh)" stroke-width="1.4"></rect><text x="802" y="256" class="s-id" fill="var(--beh)">B4</text><rect x="904.8" y="241" width="53.2" height="22" rx="11" fill="var(--beh)" fill-opacity=".14" stroke="var(--beh)" stroke-opacity=".5"></rect><text x="931.4" y="256" text-anchor="middle" class="s-time" fill="var(--beh)">90s–2m</text><text x="802" y="286" class="s-title">Ambiguity / tough</text><text x="802" y="305" class="s-title">deadline</text><text x="802" y="338" class="s-tag">OWNERSHIP</text></g></a>
<a href="#b5"><g class="node"><rect x="984" y="230" width="180" height="124" rx="10" fill="var(--node)" stroke="var(--beh)" stroke-width="1.4"></rect><text x="998" y="256" class="s-id" fill="var(--beh)">B5</text><rect x="1100.8" y="241" width="53.2" height="22" rx="11" fill="var(--beh)" fill-opacity=".14" stroke="var(--beh)" stroke-opacity=".5"></rect><text x="1127.4" y="256" text-anchor="middle" class="s-time" fill="var(--beh)">90s–2m</text><text x="998" y="286" class="s-title">Proudest / lead w/o</text><text x="998" y="305" class="s-title">authority</text><text x="998" y="338" class="s-tag">INFLUENCE</text></g></a>
<path d="M382 104H394" stroke="var(--dim)" stroke-width="1.5" marker-end="url(#arr)"></path><path d="M382 292H394" stroke="var(--dim)" stroke-width="1.5" marker-end="url(#arr)"></path>
<path d="M578 104H590" stroke="var(--dim)" stroke-width="1.5" marker-end="url(#arr)"></path><path d="M578 292H590" stroke="var(--dim)" stroke-width="1.5" marker-end="url(#arr)"></path>
<path d="M774 104H786" stroke="var(--dim)" stroke-width="1.5" marker-end="url(#arr)"></path><path d="M774 292H786" stroke="var(--dim)" stroke-width="1.5" marker-end="url(#arr)"></path>
<path d="M970 104H982" stroke="var(--dim)" stroke-width="1.5" marker-end="url(#arr)"></path><path d="M970 292H982" stroke="var(--dim)" stroke-width="1.5" marker-end="url(#arr)"></path>
<path d="M1074 166 V186 H290 V226" fill="none" stroke="var(--dim)" stroke-width="1.5" stroke-dasharray="3 4" marker-end="url(#arr)"></path>
<text x="682" y="200" text-anchor="middle" class="s-mini">PASS SCREEN → LOOP</text>
<path d="M437.6 470 C437.6 420 486 410 486 358" fill="none" stroke="var(--story)" stroke-width="2" marker-end="url(#arrG)"></path>
<path d="M601.2 470 C601.2 420 682 410 682 358" fill="none" stroke="var(--story)" stroke-width="2" marker-end="url(#arrG)"></path>
<path d="M764.8 470 C764.8 420 878 410 878 358" fill="none" stroke="var(--story)" stroke-width="2" marker-end="url(#arrG)"></path>
<path d="M928.4 470 C928.4 420 1074 410 1074 358" fill="none" stroke="var(--story)" stroke-width="2" marker-end="url(#arrG)"></path>
<path d="M274 470 C274 420 290 410 290 358" fill="none" stroke="var(--dim)" stroke-width="1.3" stroke-dasharray="4 4"></path>
<path d="M764.8 470 C764.8 420 1074 410 1074 358" fill="none" stroke="var(--dim)" stroke-width="1.3" stroke-dasharray="4 4"></path>
<text x="1176" y="560" text-anchor="end" class="s-mini">SOLID = LEAD STORY · DASHED = BACKUP / SEED</text>

<rect x="200" y="470" width="148" height="76" rx="10" fill="var(--node)" stroke="var(--story)" stroke-opacity="0.4" stroke-dasharray="4 3"></rect>
<text x="212" y="493" class="s-story">Lumen · quote</text>
<text x="212" y="510" class="s-story">calculator (seed)</text>
<text x="212" y="534" class="s-tag" fill="var(--story)">→ B1?</text>

<rect x="363.6" y="470" width="148" height="76" rx="10" fill="var(--node)" stroke="var(--story)" stroke-opacity="0.9"></rect>
<text x="375.6" y="493" class="s-story">Brightpath ·</text>
<text x="375.6" y="510" class="s-story">migration scope</text>
<text x="375.6" y="534" class="s-tag" fill="var(--story)">→ B2</text>

<rect x="527.2" y="470" width="148" height="76" rx="10" fill="var(--node)" stroke="var(--story)" stroke-opacity="0.9"></rect>
<text x="539.2" y="493" class="s-story">Brightpath ·</text>
<text x="539.2" y="510" class="s-story">telehealth ask</text>
<text x="539.2" y="534" class="s-tag" fill="var(--story)">→ B3</text>

<rect x="690.8" y="470" width="148" height="76" rx="10" fill="var(--node)" stroke="var(--story)" stroke-opacity="0.9"></rect>
<text x="702.8" y="493" class="s-story">Lumen · carrier</text>
<text x="702.8" y="510" class="s-story">onboarding</text>
<text x="702.8" y="534" class="s-tag" fill="var(--story)">→ B4 B5?</text>

<rect x="854.4" y="470" width="148" height="76" rx="10" fill="var(--node)" stroke="var(--story)" stroke-opacity="0.9"></rect>
<text x="866.4" y="493" class="s-story">Brightpath · SMS</text>
<text x="866.4" y="510" class="s-story">reminders</text>
<text x="866.4" y="534" class="s-tag" fill="var(--story)">→ B5 A1</text>

<a href="#ask"><rect x="200" y="604" width="180" height="72" rx="10" fill="var(--node)" stroke="var(--ask)" stroke-opacity=".8"></rect><text x="214" y="630" class="s-id" fill="var(--ask)">Q1</text><text x="214" y="656" class="s-title">Success</text></a>
<a href="#ask"><rect x="396" y="604" width="180" height="72" rx="10" fill="var(--node)" stroke="var(--ask)" stroke-opacity=".8"></rect><text x="410" y="630" class="s-id" fill="var(--ask)">Q2</text><text x="410" y="656" class="s-title">Waitlist</text></a>
<a href="#ask"><rect x="592" y="604" width="180" height="72" rx="10" fill="var(--node)" stroke="var(--ask)" stroke-opacity=".8"></rect><text x="606" y="630" class="s-id" fill="var(--ask)">Q3</text><text x="606" y="656" class="s-title">Clinic ops</text></a>
<a href="#ask"><rect x="788" y="604" width="180" height="72" rx="10" fill="var(--node)" stroke="var(--ask)" stroke-opacity=".8"></rect><text x="802" y="630" class="s-id" fill="var(--ask)">Q4</text><text x="802" y="656" class="s-title">Reminders</text></a>
<a href="#ask"><rect x="984" y="604" width="180" height="72" rx="10" fill="var(--node)" stroke="var(--ask)" stroke-opacity=".8"></rect><text x="998" y="630" class="s-id" fill="var(--ask)">Q5</text><text x="998" y="656" class="s-title">Next steps</text></a>
<rect x="32" y="718" width="12" height="12" rx="3" fill="var(--hr)"></rect><text x="52" y="729" class="s-leg">Recruiter screen</text>
<rect x="193.6" y="718" width="12" height="12" rx="3" fill="var(--beh)"></rect><text x="213.6" y="729" class="s-leg">Behavioral (STAR)</text>
<rect x="362.8" y="718" width="12" height="12" rx="3" fill="var(--story)"></rect><text x="382.8" y="729" class="s-leg">Story → question</text>
<rect x="524.4" y="718" width="12" height="12" rx="3" fill="var(--ask)"></rect><text x="544.4" y="729" class="s-leg">Questions to ask</text>
<rect x="686" y="718" width="12" height="12" rx="3" fill="var(--gap)"></rect><text x="706" y="729" class="s-leg">30 × [ADD DETAIL] to fill</text>
<text x="1180" y="729" text-anchor="end" class="s-leg">HEADLINE FIRST · 60–90s HR · 90s–2m STAR</text>
</svg></div>
 <div class="strip"><div class="box"><h3>Story toolbox</h3><div class="chips"><span class="chip">Brightpath <i>/ SMS reminders</i></span><span class="chip">Brightpath <i>/ migration scope</i></span><span class="chip">Brightpath <i>/ telehealth ask</i></span><span class="chip">Lumen <i>/ carrier portal</i></span><span class="chip">Lumen <i>/ quote calculator</i></span><span class="chip">Tidewater <i>/ SQL reporting</i></span></div></div><div class="box"><h3>Your numbers <small>only these, no new ones</small></h3><div class="nums"><div class="a">9 yrs</div><div class="b">product &amp; analysis</div><div class="a">Mar 2021 – now</div><div class="b">Brightpath, Senior PM</div><div class="a">−18%</div><div class="b">no-shows, two quarters</div><div class="a">3 clinics</div><div class="b">reminders pilot</div><div class="a">10 → 3 days</div><div class="b">carrier onboarding</div><div class="a">6 months</div><div class="b">quote calculator before sunset</div></div></div><div class="box"><h3>Say it out loud</h3><div class="phr"><div>“Let me give you the headline first.”</div><div>“I asked what problem it solved before I argued.”</div><div>“I proposed a smaller first step.”</div><div>“I don’t have that number, but I can tell you what shipped.”</div><div>“I was the PM on that, not the manager.”</div><div>“Want me to go deeper, or move on?”</div></div></div></div>
 <div class="rules"><span><b>Facts only</b>: nothing here is invented</span><span><mark class="gap"><b>ADD DETAIL</b></mark> = a fact you supply before saying it</span><span class="starkey"><i class="s-s">S</i><i class="s-t">T</i><i class="s-a">A</i><i class="s-r">R</i> Situation · Task · <b>Action</b> · Result</span></div>
</header>

<section id="hr"><div class="sec-h hr"><span class="num">01</span><div><h2>Recruiter screen</h2><p>Five filters: story, timing, motivation, band, eligibility. Aim for 60–90 seconds each.</p></div></div>
<div class="grid hrgrid">
<article class="card hr" id="a1">
 <header><span class="qid">A1</span><div class="ht"><h3>Tell me about yourself</h3><p class="fullq">“Tell me about yourself / walk me through your background”</p></div><div class="bigt">60–90s</div></header>
 <div class="by">Really asking: Coherent senior-PM story, not a CV</div>
 <div class="tags"><span class="tag c-hr">Communication</span><span class="tag c-hr">Scope</span><span class="tag c-hr">Level</span></div>
 <div class="screen"><span class="lbl">Really screening for</span><p>Can you tell a level-appropriate story in about a minute? They are checking whether your recent scope matches a senior scheduling PM, and whether you can lead with outcomes rather than job titles.</p></div>
 <blockquote class="headline"><span class="lbl">Open with</span>“I’m a Toronto-based senior product manager with nine years in product and analysis, most recently owning patient scheduling and reminders in healthcare.”</blockquote>
 <details><summary><span>Spoken draft</span><em>60–90s aloud</em></summary><p class="draft">I’m based in Toronto, and I’ve spent nine years in product and analysis. Since March 2021 I’ve been a Senior Product Manager at Brightpath Health, where I own patient scheduling and reminders for a clinic-booking app. The biggest thing I’ve shipped there is moving our appointment reminders off a third-party SMS vendor onto an in-house service, and our no-show rate fell 18% over two quarters. Before that I was a Product Manager at Lumen Freight, where I launched a self-serve carrier onboarding portal that took onboarding from ten days to three. I started as a business analyst at Tidewater Bank, doing requirements and SQL reporting. I’m looking for a senior role where scheduling is the core product, which is why Clearwell caught my eye. <mark class="gap"><b>ADD DETAIL</b><span>one line on what you want next, if more specific</span></mark></p></details>
 <div class="pit"><span class="lbl">Pitfalls</span><ul><li>Don’t start at Tidewater Bank; lead with Brightpath.</li><li>Don’t round 18% up, or claim it for all clinics if it wasn’t.</li><li>Don’t call yourself a group PM; the title is Senior PM.</li></ul></div>
 <div class="dont"><b>✕ DON'T</b> Recap every job in order</div>
</article>
<article class="card hr" id="a2">
 <header><span class="qid">A2</span><div class="ht"><h3>Why are you looking now?</h3><p class="fullq">“Why are you leaving, or why are you looking now?”</p></div><div class="bigt">30–60s</div></header>
 <div class="by">Really asking: Clean, unbitter timing</div>
 <div class="tags"><span class="tag c-hr">Flight risk</span><span class="tag c-hr">Motivation</span></div>
 <div class="screen"><span class="lbl">Really screening for</span><p>Flight risk and bitterness. They want a short, forward-looking reason, not a critique of Brightpath.</p></div>
 <blockquote class="headline"><span class="lbl">Open with</span>“I’ve shipped the reminders work I came to Brightpath to do, and I want scheduling to be the whole job next.”</blockquote>
 <details><summary><span>Spoken draft</span><em>30–60s aloud</em></summary><p class="draft">I’m still at Brightpath, and the reminders migration is done and holding. Scheduling has become the part of the work I care about most, and Clearwell is a company where booking, reminders and waitlist are the product rather than one feature. <mark class="gap"><b>ADD DETAIL</b><span>your real reason for looking now, in one sentence</span></mark></p></details>
 <div class="pit"><span class="lbl">Pitfalls</span><ul><li>Don’t invent a frustration story to sound decisive.</li><li>Don’t imply you’ve already left; the resume says Present.</li><li><mark class="gap"><b>ADD DETAIL</b><span>anything about timing you must mention, e.g. notice period</span></mark></li></ul></div>
 <div class="dont"><b>✕ DON'T</b> Criticize your current employer</div>
</article>
<article class="card hr" id="a3">
 <header><span class="qid">A3</span><div class="ht"><h3>Why this company?</h3><p class="fullq">“Why this company / why this role?”</p></div><div class="bigt">45–60s</div></header>
 <div class="by">Really asking: Did you read the posting?</div>
 <div class="tags"><span class="tag c-hr">Motivation</span><span class="tag c-hr">Fit</span></div>
 <div class="screen"><span class="lbl">Really screening for</span><p>Whether you chose Clearwell or are mass-applying. Tie the posting’s scope (booking, reminders, waitlist, clinic ops) to work you have actually done.</p></div>
 <blockquote class="headline"><span class="lbl">Open with</span>“The role is booking, reminders and waitlist — the exact problems I’ve owned at Brightpath.”</blockquote>
 <details><summary><span>Spoken draft</span><em>45–60s aloud</em></summary><p class="draft">Three things. First, scope: the posting is booking, reminders and waitlist, and I’ve owned scheduling and reminders at Brightpath since 2021. Second, the healthcare workflow: I’ve worked with clinics on rollouts, including piloting the reminders change with three clinics first. Third, <mark class="gap"><b>ADD DETAIL</b><span>something specific about Clearwell — product, patients, or a recent launch you read about</span></mark>.</p></details>
 <div class="pit"><span class="lbl">Pitfalls</span><ul><li>Don’t claim waitlist experience; it isn’t on the resume.</li><li>Don’t flatter a company you haven’t researched.</li></ul></div>
 <div class="dont"><b>✕ DON'T</b> Say “I love healthcare” with no specifics</div>
</article>
<article class="card hr" id="a4">
 <header><span class="qid">A4</span><div class="ht"><h3>Salary expectations</h3><p class="fullq">“What are your salary expectations?”</p></div><div class="bigt">20–40s</div></header>
 <div class="by">Really asking: Band fit</div>
 <div class="tags"><span class="tag c-hr">Band fit</span><span class="tag c-hr">Composure</span></div>
 <div class="screen"><span class="lbl">Really screening for</span><p>Whether you fit the budget, and whether you can name a number calmly. No band is posted, so ask for theirs and then anchor.</p></div>
 <blockquote class="headline"><span class="lbl">Open with</span>“I’m targeting <mark class="gap"><b>ADD DETAIL</b><span>your base number or range, in CAD</span></mark> base, depending on the full package.”</blockquote>
 <details><summary><span>Spoken draft</span><em>20–40s aloud</em></summary><p class="draft">Based on the scope, I’m targeting <mark class="gap"><b>ADD DETAIL</b><span>your number or range, CAD</span></mark> base. Is there a band for the role you can share, so I can make sure we’re aligned?</p></details>
 <div class="pit"><span class="lbl">Pitfalls</span><ul><li>Don’t say “I’m flexible” without a number.</li><li>Don’t quote a market rate you haven’t checked.</li></ul></div>
 <div class="dont"><b>✕ DON'T</b> Dodge with no number</div>
</article>
<article class="card hr" id="a5">
 <header><span class="qid">A5</span><div class="ht"><h3>Logistics</h3><p class="fullq">“Availability, start date, work authorization, location and work model”</p></div><div class="bigt">20–40s</div></header>
 <div class="by">Really asking: Can they hire you?</div>
 <div class="tags"><span class="tag c-hr">Eligibility</span><span class="tag c-hr">Location</span></div>
 <div class="screen"><span class="lbl">Really screening for</span><p>Eligibility, start date and work model. The posting is remote in Canada and you are authorized in Canada, so this should take 20 seconds.</p></div>
 <blockquote class="headline"><span class="lbl">Open with</span>“I’m in Toronto and authorized to work in Canada, so remote in Canada works.”</blockquote>
 <details><summary><span>Spoken draft</span><em>20–40s aloud</em></summary><p class="draft">I’m in Toronto, authorized to work in Canada, and remote in Canada suits me. I could start <mark class="gap"><b>ADD DETAIL</b><span>start date or notice period</span></mark>. <mark class="gap"><b>ADD DETAIL</b><span>any travel limits or time-zone needs</span></mark></p></details>
 <div class="pit"><span class="lbl">Pitfalls</span><ul><li>Don’t guess at a start date.</li><li>Don’t volunteer details they didn’t ask for.</li></ul></div>
 <div class="dont"><b>✕ DON'T</b> Leave authorization vague</div>
</article></div></section>

<section id="beh"><div class="sec-h beh"><span class="num">02</span><div><h2>Behavioral loop</h2><p>Each question is coded for competencies and scored 1–4 on evidence. The Action beat is yours; keep it the longest.</p></div></div>
<div class="stack">
<article class="card beh is-outline" id="b1">
 <header><span class="qid">B1</span><div class="ht"><h3>Biggest failure</h3><p class="fullq">“Tell me about your biggest failure (or a time the plan broke)”</p></div><div class="bigt">90s–2m</div></header>
 <div class="by">Really asking: Learning agility</div>
 <div class="tags"><span class="tag c-mute">CODED FOR</span><span class="tag c-beh">Learning agility</span><span class="tag c-beh">Judgment</span><span class="tag c-beh">Ownership</span><span class="tag c-story">◆ Outline only — Lumen quote calculator (seed)</span></div>
 <div class="cols2"><div class="colL">
 <div class="screen"><span class="lbl">How it's scored</span><p>Coded for learning agility and ownership. A 4 owns a real decision that didn’t work, explains why, and shows a changed habit. A 1 offers a disguised strength or blames others.</p></div>
 <div class="vs">
  <div class="good"><span class="score">4/4</span><span class="lbl">Strong answer</span><ul><li>A decision you owned, and why it failed</li><li>What you noticed and when</li><li>A concrete change in how you work</li></ul></div>
  <div class="bad"><span class="score">1/4</span><span class="lbl">Weak answer</span><ul><li>“I work too hard”</li><li>Blames engineering or users</li><li>No lesson, or a vague one</li></ul></div>
 </div>
 <div class="flags"><span class="flag g">▲ Owned the decision</span><span class="flag g">▲ Specific lesson</span><span class="flag r">▼ Humble-brag</span><span class="flag r">▼ Blame</span></div>
 <div class="probe"><span class="lbl">Likely follow-up</span><b>How did you decide to sunset it?</b><p><mark class="gap"><b>ADD DETAIL</b><span>who decided, what data you looked at, how long it ran (six months)</span></mark></p></div>
 </div><div class="colR"><span class="lbl">STAR answer</span>
 <div class="stars"><div class="star s-s"><span class="k">S</span><span class="w">Situation</span><p>At Lumen Freight I worked on a v1 quote calculator. <mark class="gap"><b>ADD DETAIL</b><span>your role in deciding to build it</span></mark></p></div><div class="star s-t"><span class="k">T</span><span class="w">Task</span><p><mark class="gap"><b>ADD DETAIL</b><span>what success was supposed to look like</span></mark></p></div><div class="star s-a"><span class="k">A</span><span class="w">Action</span><p><mark class="gap"><b>ADD DETAIL</b><span>what you did when adoption stayed low; who you talked to</span></mark></p></div><div class="star s-r"><span class="k">R</span><span class="w">Result</span><p>The calculator was sunset after six months of low adoption. <mark class="gap"><b>ADD DETAIL</b><span>the lesson you actually took from it</span></mark></p></div></div>
 <div class="outline-note"><span class="lbl">Outline only — no spoken draft yet</span><p>No confirmed failure story yet, only the resume line about sunsetting the calculator. Fill in the gaps and confirm it was your call before you rehearse it. End on the lesson, not on the sunset.</p></div>
 </div></div>
 <div class="dont"><b>✕ DON'T</b> Use it before filling the gaps</div>
</article>
<article class="card beh" id="b2">
 <header><span class="qid">B2</span><div class="ht"><h3>Conflict with a coworker</h3><p class="fullq">“Tell me about a conflict with a coworker”</p></div><div class="bigt">90s–2m</div></header>
 <div class="by">Really asking: Disagree without damage?</div>
 <div class="tags"><span class="tag c-mute">CODED FOR</span><span class="tag c-beh">Collaboration</span><span class="tag c-beh">Judgment</span><span class="tag c-beh">Communication</span><span class="tag c-story">◆ Brightpath · migration scope</span></div>
 <div class="cols2"><div class="colL">
 <div class="screen"><span class="lbl">How it's scored</span><p>Coded for collaboration and judgment. A 4 shows you understood the engineering lead’s constraint and reached a plan you both owned. A 1 makes engineering the obstacle.</p></div>
 <div class="vs">
  <div class="good"><span class="score">4/4</span><span class="lbl">Strong answer</span><ul><li>Names the disagreement plainly</li><li>Shows the lead’s real concern</li><li>Ends on the phased rollout you both agreed</li></ul></div>
  <div class="bad"><span class="score">1/4</span><span class="lbl">Weak answer</span><ul><li>“Engineering was slowing us down”</li><li>All “we”, no “I”</li><li>No outcome</li></ul></div>
 </div>
 <div class="flags"><span class="flag g">▲ Sought the constraint</span><span class="flag g">▲ Shared plan</span><span class="flag r">▼ Villain framing</span><span class="flag r">▼ Invented detail</span></div>
 <div class="probe"><span class="lbl">Likely follow-up</span><b>What was the engineering lead worried about?</b><p><mark class="gap"><b>ADD DETAIL</b><span>their actual concern, e.g. risk or capacity, only if you know it</span></mark></p></div>
 </div><div class="colR"><span class="lbl">STAR answer</span>
 <div class="stars"><div class="star s-s"><span class="k">S</span><span class="w">Situation</span><p>At Brightpath we were moving appointment reminders off a third-party SMS vendor onto an in-house service.</p></div><div class="star s-t"><span class="k">T</span><span class="w">Task</span><p>I owned the reminders product, and the engineering lead and I disagreed on how much to migrate at once.</p></div><div class="star s-a"><span class="k">A</span><span class="w">Action</span><p>I set up time with the lead to understand their concern, <mark class="gap"><b>ADD DETAIL</b><span>what you learned</span></mark>. I proposed starting with a pilot of three clinics, then expanding once the pilot held.</p></div><div class="star s-r"><span class="k">R</span><span class="w">Result</span><p>We agreed on the phased rollout, and the full migration was followed by an 18% drop in no-shows over two quarters. Lesson: <mark class="gap"><b>ADD DETAIL</b><span>your lesson</span></mark></p></div></div>
 <details><summary><span>Spoken draft</span><em>90s–2m aloud</em></summary><p class="draft">At Brightpath Health I own scheduling and reminders, and we decided to move our appointment reminders off a third-party SMS vendor onto our own service. The engineering lead and I disagreed on scope: I wanted to move faster, and they saw it differently. Instead of escalating, I sat down with them to understand the concern, and <mark class="gap"><b>ADD DETAIL</b><span>what the concern was</span></mark>. That changed my view. I proposed a phased rollout, starting with three clinics as a pilot and expanding only once the pilot held, and we both signed up for it. The migration went ahead that way, and over the following two quarters our no-show rate fell 18%. What I took from it is <mark class="gap"><b>ADD DETAIL</b><span>your lesson in one sentence</span></mark>.</p></details>
 </div></div>
 <div class="dont"><b>✕ DON'T</b> Make engineering the villain</div>
</article>
<article class="card beh" id="b3">
 <header><span class="qid">B3</span><div class="ht"><h3>Disagreed / pushed back</h3><p class="fullq">“Tell me about a time you disagreed with a manager, or pushed back”</p></div><div class="bigt">90s–2m</div></header>
 <div class="by">Really asking: Judgment under pressure</div>
 <div class="tags"><span class="tag c-mute">CODED FOR</span><span class="tag c-beh">Judgment</span><span class="tag c-beh">Influence</span><span class="tag c-story">◆ Brightpath · telehealth request</span></div>
 <div class="cols2"><div class="colL">
 <div class="screen"><span class="lbl">How it's scored</span><p>Coded for judgment and communication. A 4 pushes back with a better alternative and gets agreement. A 1 either complies silently or just says no.</p></div>
 <div class="vs">
  <div class="good"><span class="score">4/4</span><span class="lbl">Strong answer</span><ul><li>Explains why mid-quarter was risky</li><li>Offers the two-week discovery</li><li>Shows it was approved</li></ul></div>
  <div class="bad"><span class="score">1/4</span><span class="lbl">Weak answer</span><ul><li>“I just said no”</li><li>No alternative offered</li><li>Outcome invented</li></ul></div>
 </div>
 <div class="flags"><span class="flag g">▲ Offered an alternative</span><span class="flag g">▲ Respectful dissent</span><span class="flag r">▼ Stonewalling</span><span class="flag r">▼ Overclaiming</span></div>
 <div class="probe"><span class="lbl">Likely follow-up</span><b>What did the discovery find?</b><p><mark class="gap"><b>ADD DETAIL</b><span>discovery outcome — only if you know it</span></mark></p></div>
 </div><div class="colR"><span class="lbl">STAR answer</span>
 <div class="stars"><div class="star s-s"><span class="k">S</span><span class="w">Situation</span><p>Mid-quarter, I was asked to add a telehealth waiting room to the app. <mark class="gap"><b>ADD DETAIL</b><span>who asked</span></mark></p></div><div class="star s-t"><span class="k">T</span><span class="w">Task</span><p>I had to protect the roadmap without dismissing the request.</p></div><div class="star s-a"><span class="k">A</span><span class="w">Action</span><p>I pushed back on building it straight away and proposed a two-week discovery instead. <mark class="gap"><b>ADD DETAIL</b><span>what you said to make the case</span></mark></p></div><div class="star s-r"><span class="k">R</span><span class="w">Result</span><p>The discovery was approved. <mark class="gap"><b>ADD DETAIL</b><span>what happened next</span></mark></p></div></div>
 <details><summary><span>Spoken draft</span><em>90s–2m aloud</em></summary><p class="draft">Mid-quarter at Brightpath, I was asked to add a telehealth waiting room. Rather than say yes and blow up the quarter, or just say no, I proposed a two-week discovery so we could find out what problem the waiting room would solve. <mark class="gap"><b>ADD DETAIL</b><span>how you made the case</span></mark>. The discovery was approved. <mark class="gap"><b>ADD DETAIL</b><span>what came out of it</span></mark>.</p></details>
 </div></div>
 <div class="dont"><b>✕ DON'T</b> Sound like you refused work</div>
</article>
<article class="card beh" id="b4">
 <header><span class="qid">B4</span><div class="ht"><h3>Ambiguity / tough deadline</h3><p class="fullq">“Tell me about a tough deadline, or a time you had to deliver through ambiguity”</p></div><div class="bigt">90s–2m</div></header>
 <div class="by">Really asking: Own an unclear problem</div>
 <div class="tags"><span class="tag c-mute">CODED FOR</span><span class="tag c-beh">Ownership</span><span class="tag c-beh">Bias for action</span><span class="tag c-story">◆ Lumen · carrier onboarding</span></div>
 <div class="cols2"><div class="colL">
 <div class="screen"><span class="lbl">How it's scored</span><p>Coded for ownership and bias for action. A 4 shows how you created structure with no spec and shipped a measurable result.</p></div>
 <div class="vs">
  <div class="good"><span class="score">4/4</span><span class="lbl">Strong answer</span><ul><li>Starts with no spec</li><li>Shows how you defined scope</li><li>Lands on 10 days → 3</li></ul></div>
  <div class="bad"><span class="score">1/4</span><span class="lbl">Weak answer</span><ul><li>Waited for requirements</li><li>Vague “we figured it out”</li><li>No result</li></ul></div>
 </div>
 <div class="flags"><span class="flag g">▲ Created structure</span><span class="flag g">▲ Real metric</span><span class="flag r">▼ Passive</span><span class="flag r">▼ Inflated scope</span></div>
 <div class="probe"><span class="lbl">Likely follow-up</span><b>How did you decide what went in v1?</b><p><mark class="gap"><b>ADD DETAIL</b><span>how you prioritized v1 scope</span></mark></p></div>
 </div><div class="colR"><span class="lbl">STAR answer</span>
 <div class="stars"><div class="star s-s"><span class="k">S</span><span class="w">Situation</span><p>Lumen Freight onboarded carriers by hand, and there was no existing spec for a self-serve portal.</p></div><div class="star s-t"><span class="k">T</span><span class="w">Task</span><p>As PM, I had to define and launch the self-serve onboarding portal.</p></div><div class="star s-a"><span class="k">A</span><span class="w">Action</span><p><mark class="gap"><b>ADD DETAIL</b><span>how you gathered requirements</span></mark> I defined the scope and launched the portal.</p></div><div class="star s-r"><span class="k">R</span><span class="w">Result</span><p>Carrier onboarding time fell from 10 days to 3.</p></div></div>
 <details><summary><span>Spoken draft</span><em>90s–2m aloud</em></summary><p class="draft">At Lumen Freight, carriers were onboarded by hand and there was no spec for a self-serve portal. I owned defining and launching it. <mark class="gap"><b>ADD DETAIL</b><span>how you gathered requirements and set scope</span></mark>. We launched the portal, and onboarding time went from ten days to three.</p></details>
 </div></div>
 <div class="dont"><b>✕ DON'T</b> Invent team size or timeline</div>
</article>
<article class="card beh" id="b5">
 <header><span class="qid">B5</span><div class="ht"><h3>Proudest / lead w/o authority</h3><p class="fullq">“Tell me about your proudest achievement, or a time you led without formal authority”</p></div><div class="bigt">90s–2m</div></header>
 <div class="by">Really asking: End-to-end senior impact</div>
 <div class="tags"><span class="tag c-mute">CODED FOR</span><span class="tag c-beh">Influence</span><span class="tag c-beh">Ownership</span><span class="tag c-story">◆ Brightpath · in-house reminders</span></div>
 <div class="cols2"><div class="colL">
 <div class="screen"><span class="lbl">How it's scored</span><p>Coded for influence and ownership. A 4 shows you led across teams without being their manager, with a defensible result.</p></div>
 <div class="vs">
  <div class="good"><span class="score">4/4</span><span class="lbl">Strong answer</span><ul><li>Clear before/after</li><li>Your actions across teams</li><li>18% drop in no-shows</li></ul></div>
  <div class="bad"><span class="score">1/4</span><span class="lbl">Weak answer</span><ul><li>Team story with no “I”</li><li>Claims a manager role</li><li>Inflated metric</li></ul></div>
 </div>
 <div class="flags"><span class="flag g">▲ Owned the outcome</span><span class="flag g">▲ Credited others</span><span class="flag r">▼ Title inflation</span><span class="flag r">▼ Vague result</span></div>
 <div class="probe"><span class="lbl">Likely follow-up</span><b>How did you measure no-shows?</b><p><mark class="gap"><b>ADD DETAIL</b><span>how the 18% was measured and over which clinics</span></mark></p></div>
 </div><div class="colR"><span class="lbl">STAR answer</span>
 <div class="stars"><div class="star s-s"><span class="k">S</span><span class="w">Situation</span><p>Brightpath sent appointment reminders through a third-party SMS vendor.</p></div><div class="star s-t"><span class="k">T</span><span class="w">Task</span><p>I owned reminders and led the move to an in-house service.</p></div><div class="star s-a"><span class="k">A</span><span class="w">Action</span><p>I aligned engineering on a phased rollout, piloted with three clinics, then expanded. <mark class="gap"><b>ADD DETAIL</b><span>who else you coordinated with</span></mark></p></div><div class="star s-r"><span class="k">R</span><span class="w">Result</span><p>No-show rate fell 18% over two quarters.</p></div></div>
 <details><summary><span>Spoken draft</span><em>90s–2m aloud</em></summary><p class="draft">The work I’m proudest of is moving Brightpath’s appointment reminders in-house. I owned reminders as a Senior PM, without managing the engineers. I worked through a phased plan with the engineering lead, piloted with three clinics, and then expanded. <mark class="gap"><b>ADD DETAIL</b><span>one more action you personally took</span></mark>. Over two quarters our no-show rate fell 18%.</p></details><p class="alt"><span class="lbl">Alternate</span>Alternate: Lumen carrier onboarding portal (10 days → 3), if B4 uses a different story.</p>
 </div></div>
 <div class="dont"><b>✕ DON'T</b> Claim you managed the team</div>
</article></div></section>

<section id="bank"><div class="sec-h story"><span class="num">◆</span><div><h2>Story bank</h2><p>One story, many questions. Green chips are the lead use; grey chips are backups.</p></div></div>
<div class="table-wrap"><table><thead><tr><th>Story</th><th>Confirmed facts</th><th>Answers</th><th>Use</th><th>Open gaps</th></tr></thead><tbody>
<tr><td><b>Lumen · quote calculator (seed)</b></td><td>v1 quote calculator sunset after six months of low adoption.</td><td><a class="qchip back" href="#b1">B1</a></td><td><span class="role">Seed only · failure</span></td><td><mark class="gap"><b>ADD DETAIL</b><span>Your role in building and sunsetting it</span></mark></td></tr>
<tr><td><b>Brightpath · migration scope</b></td><td>Disagreed with eng lead on reminders migration scope; agreed phased rollout, 3-clinic pilot.</td><td><a class="qchip lead" href="#b2">B2</a></td><td><span class="role">Lead · conflict</span></td><td><mark class="gap"><b>ADD DETAIL</b><span>The lead’s concern; your lesson</span></mark></td></tr>
<tr><td><b>Brightpath · telehealth request</b></td><td>Mid-quarter telehealth waiting-room request; proposed two-week discovery; approved.</td><td><a class="qchip lead" href="#b3">B3</a></td><td><span class="role">Lead · pushback</span></td><td><mark class="gap"><b>ADD DETAIL</b><span>Who asked; discovery outcome</span></mark></td></tr>
<tr><td><b>Lumen · carrier onboarding</b></td><td>Self-serve carrier portal with no spec; onboarding 10 days → 3.</td><td><a class="qchip lead" href="#b4">B4</a><a class="qchip back" href="#b5">B5</a></td><td><span class="role">Lead · ambiguity</span></td><td><mark class="gap"><b>ADD DETAIL</b><span>How you gathered requirements</span></mark></td></tr>
<tr><td><b>Brightpath · SMS reminders</b></td><td>Reminders moved from SMS vendor to in-house; no-shows −18% in two quarters.</td><td><a class="qchip lead" href="#b5">B5</a><a class="qchip lead" href="#a1">A1</a></td><td><span class="role">Lead · proudest</span></td><td><mark class="gap"><b>ADD DETAIL</b><span>How 18% was measured</span></mark></td></tr>
<tr class="muted"><td><b>Tidewater · mortgage reporting</b></td><td>Requirements and SQL reporting for the mortgage team</td><td><span class="qchip back">Data fluency follow-ups</span></td><td><span class="role">Unused backup</span></td><td>—</td></tr>
</tbody></table></div></section>

<section id="ask"><div class="sec-h ask"><span class="num">03</span><div><h2>Questions to ask them</h2><p>Specific to Clearwell’s Scheduling posting.</p></div></div>
<ol class="asks"><li><span class="qid">Q1</span><b>Success</b><p>What would success look like for this role in the first six months?</p></li><li><span class="qid">Q2</span><b>Waitlist</b><p>How does the waitlist work today, and what is the biggest pain point for clinic ops?</p></li><li><span class="qid">Q3</span><b>Clinic ops</b><p>How do product and clinic operations decide what to build next?</p></li><li><span class="qid">Q4</span><b>Reminders</b><p>What channels do you use for reminders today, and how do you measure no-shows?</p></li><li><span class="qid">Q5</span><b>Next steps</b><p>What are the next steps, and is there a pay band you can share?</p></li></ol></section>

<section id="quick" class="quick"><div class="sec-h q"><span class="num">≡</span><div><h2>One-screen quick reference</h2><p>Second-monitor view. Really asking → beats → don't.</p></div></div>
<div class="qgrid">
<div class="qt hr"><div class="qh"><span class="qid">A1</span><b>Tell me about yourself</b><span class="time">60–90s</span></div><p class="ask">Coherent senior-PM story, not a CV</p><ul><li>Toronto · 9 yrs product</li><li>Brightpath Sr PM since 2021</li><li>SMS reminders in-house: −18% no-shows</li><li>Lumen: onboarding 10 → 3 days</li></ul><p class="dont">✕ Recap every job in order</p></div>
<div class="qt hr"><div class="qh"><span class="qid">A2</span><b>Why are you looking now?</b><span class="time">30–60s</span></div><p class="ask">Clean, unbitter timing</p><ul><li>Reminders work shipped</li><li>Want scheduling as the job</li><li><mark class="gap"><b>ADD DETAIL</b><span>real reason</span></mark></li></ul><p class="dont">✕ Criticize your current employer</p></div>
<div class="qt hr"><div class="qh"><span class="qid">A3</span><b>Why this company?</b><span class="time">45–60s</span></div><p class="ask">Did you read the posting?</p><ul><li>Booking + reminders = my scope</li><li>3-clinic pilot experience</li><li><mark class="gap"><b>ADD DETAIL</b><span>Clearwell specific</span></mark></li></ul><p class="dont">✕ Say “I love healthcare” with no specifics</p></div>
<div class="qt hr"><div class="qh"><span class="qid">A4</span><b>Salary expectations</b><span class="time">20–40s</span></div><p class="ask">Band fit</p><ul><li><mark class="gap"><b>ADD DETAIL</b><span>your number, CAD</span></mark></li><li>Ask for their band</li><li>Anchor, then stop</li></ul><p class="dont">✕ Dodge with no number</p></div>
<div class="qt hr"><div class="qh"><span class="qid">A5</span><b>Logistics</b><span class="time">20–40s</span></div><p class="ask">Can they hire you?</p><ul><li>Toronto · authorized in Canada</li><li>Remote Canada OK</li><li><mark class="gap"><b>ADD DETAIL</b><span>start date</span></mark></li></ul><p class="dont">✕ Leave authorization vague</p></div>
<div class="qt beh"><div class="qh"><span class="qid">B1</span><b>Biggest failure</b><span class="time">90s–2m</span></div><p class="ask">Learning agility</p><ul><li>Outline only: quote calculator</li><li>Sunset after six months</li><li><mark class="gap"><b>ADD DETAIL</b><span>the lesson</span></mark></li></ul><p class="dont">✕ Use it before filling the gaps</p></div>
<div class="qt beh"><div class="qh"><span class="qid">B2</span><b>Conflict with a coworker</b><span class="time">90s–2m</span></div><p class="ask">Disagree without damage?</p><ul><li>Disagreed on migration scope</li><li>Asked the lead’s concern</li><li>Phased: 3-clinic pilot</li></ul><p class="dont">✕ Make engineering the villain</p></div>
<div class="qt beh"><div class="qh"><span class="qid">B3</span><b>Disagreed / pushed back</b><span class="time">90s–2m</span></div><p class="ask">Judgment under pressure</p><ul><li>Telehealth ask mid-quarter</li><li>Proposed 2-week discovery</li><li>Approved</li></ul><p class="dont">✕ Sound like you refused work</p></div>
<div class="qt beh"><div class="qh"><span class="qid">B4</span><b>Ambiguity / tough deadline</b><span class="time">90s–2m</span></div><p class="ask">Own an unclear problem</p><ul><li>No spec for carrier portal</li><li>Defined scope, launched</li><li>Onboarding 10 → 3 days</li></ul><p class="dont">✕ Invent team size or timeline</p></div>
<div class="qt beh"><div class="qh"><span class="qid">B5</span><b>Proudest / lead w/o authority</b><span class="time">90s–2m</span></div><p class="ask">End-to-end senior impact</p><ul><li>Reminders in-house</li><li>Led without authority</li><li>−18% no-shows, 2 quarters</li></ul><p class="dont">✕ Claim you managed the team</p></div></div></section>

<footer><p>Built from a fictional test resume and a fictional Clearwell Clinics posting. Waitlist experience is not in the resume, so it is not claimed. 1–4 scale is a teaching device, not any company's official rubric.</p><p class="mono">Generated by the Interview Prep Cheat Sheet prompt</p></footer>
</main>
<script>
(function(){var b=document.getElementById('toggle');function all(o){document.querySelectorAll('details').forEach(function(d){d.open=o});}
if(b){b.addEventListener('click',function(){var o=b.getAttribute('aria-pressed')!=='true';all(o);b.setAttribute('aria-pressed',o);b.textContent=o?'Collapse drafts':'Expand drafts';});}
window.addEventListener('beforeprint',function(){all(true)});})();
</script>

</body></html>

## Output format: Markdown (fallback, only if requested)

If the output format is markdown, output valid Markdown only, using exactly the Part A / B / C structure above with these headings: ### Part A, #### A1., and so on. Bold the labels. Prefer bullets and tables. Skip the diagram, but start with a one-line plan: Screen (A1-A5, ~30 min) to Behavioral (B1-B5, ~45 min) to Your questions.

## Formatting (both formats)

- Keep each spoken draft readable aloud. If you must cut, cut background, not the Action and Result.
- If you tailor to a company, say so once near the top in a single italic line: Tailored for [company] - [role], [level]. If you did not, say: Generic screen; add a job description to tailor "why this company" and story emphasis.
- No preamble before the document and no recap after it.

```

---

## STAR, and how interviewers score behavioral answers

Most behavioral questions are a request for evidence, not a personality test. A trained interviewer is mapping your story onto a small set of competencies (ownership, collaboration, judgment, learning agility, and so on) and scoring that evidence, often against a rubric they share with other interviewers. That is what people mean when they say a question is "coded" for a competency.

**STAR** is the most common way to structure the evidence:

- **Situation** — the context, tight and specific (company, problem, constraints).
- **Task** — what you were responsible for, or what success looked like.
- **Action** — what *you* did. This is the center of the answer. "We" is fine for setup; the actions should be yours.
- **Result** — what changed, in facts you can stand behind. A short lesson belongs here when the question is about failure, conflict, or a change of mind.

Two well-known variations add an explicit learning beat, which is useful for failure and conflict questions:

- **STARL** — STAR plus **Learning** (what you changed afterward).
- **CARL** — **Context, Action, Result, Learning**. Same idea, with task folded into context.

You do not need to name the framework in the interview. You do need the beats.

**Structured scoring.** Many companies train interviewers to ask the same questions, take notes on evidence, and rate a competency on a short scale rather than on charisma. Google's popularization of structured interviewing, and Amazon's use of Leadership Principles with behavioral examples, are the widely known versions of this idea. This prompt uses a simple **1 to 4** scale as a teaching device, not as any one company's official form:

- **1/4 (weak):** no real example, a vague "we," blame, or a story that never reaches a result.
- **2/4:** a situation is present, but action and result are thin, generic, or not clearly yours.
- **3/4:** a complete STAR, at a reasonable scope, with a real result.
- **4/4 (strong):** specific, personally owned actions, a result you can defend, a credible lesson or change in behavior, and a scope that matches the level you are interviewing for.

A strong answer is not the same as a success story. For failure and conflict, interviewers are usually scoring judgment and learning agility: did you get the real constraint, change your mind, and own your part? For ownership and leadership without authority, they are scoring whether you unblocked work without ignoring other people or inflating your title.

Keep answers inside confirmed facts. If you do not have a result number, say what happened and stop. A clean "I don't have the adoption figure, but I can tell you what shipped" is stronger than a made-up metric.

---

## Worked example: Joel Kinman

*Generic senior full-stack screen; no job description was supplied, so "why this company" is a structure to fill. This example was built from the standard resume (pdftotext of `joel-kinman-resume-standard.pdf`) plus confirmed stories already in [[Answer Bank (full)]], [[Answer Bank - Cheat Sheet]], and [[Answer Bank]]. It does not invent metrics.*

**Caveats used in this example (not all are on the resume file):**

- The standard resume lists Highspot as "2023-04 — Current." Confirmed fact used here: Highspot ended 25 Aug 2026. Sugar Glider was founded May 2026 and is current. Where the two sources disagree on "current," this sheet uses the confirmed end date and marks the resume wording.
- Title in the materials is Senior (and Founder / Principal Developer at Sugar Glider). Do not claim Staff.
- React / TypeScript experience on this resume is **8+ years**, not a higher figure.
- Confirmed spoken stories used below: Recon friends-list vs legal risk; Highspot role-play lifecycle dashboard vs the platform-team backlog (including the Amazon / Snowflake / New Relic / production-log context already in the story bank). Resume-only projects (Article design system, Highspot LLM gateway, Sugar Glider) are used where the resume supports them.
- There is still no confirmed "biggest failure" writeup in the interview answer bank. The failure section is structured, not invented. A related "plan broke" seed (Recon NPAPI) is noted as a candidate only.

### Part A — Top 5 HR / recruiter screen questions

#### A1. Tell me about yourself / walk me through your background

- **What they are really screening for:** Can you tell a coherent, level-appropriate story in about a minute? Do you sound like a senior IC who owns work end to end, or like a list of job titles? Communication, scope, and whether your recent work matches the role.
- **Tailored answer:**
  - Headline: "I'm a Vancouver full-stack engineer with 12 years in software, 8+ years in React and TypeScript, and recent work shipping LLM-powered product and infrastructure."
  - Spoken draft: "I'm based in Vancouver. I have 12 years in software, mostly full-stack web, with 8+ years in React and TypeScript. Most recently I was a Senior Full Stack Engineer at Highspot, from April 2023 to August 2026, on a Rails and React monolith, with TypeScript AI work as well. I designed an internal LLM gateway that centralized model access across teams, and I shipped LLM-powered product features, including an AI-generated lesson wizard. In May 2026 I also founded Sugar Glider, a product that evaluates job postings against a person's history and helps write applications. It runs as a set of agents over a shared work queue, with a web app, a Chrome extension, and an MCP server. Before Highspot I built a Figma-to-code pipeline and a multi-theme component system at Article that was used by 10+ internal applications, and I have earlier lead-frontend and platform work at companies like Appnovation, 1QBit, and Recon Instruments. I'm looking at senior full-stack roles where I can keep owning product and AI-in-production work. [ADD DETAIL: one sentence on what you want next if you have a more specific target than 'senior full-stack, product and AI in production.']"
- **Pitfalls:**
  - Do not walk through every job from Radical Games forward. The resume is long; the screen is not.
  - Do not say 10+ years of React if you are using this standard resume (it says 8+).
  - Do not claim a Staff title, or that Highspot is still current, if you are going to mention August 2026 as an end date.
  - Do not turn Sugar Glider into a detour that hides the Highspot work.

#### A2. Why are you leaving, or why are you looking now?

- **What they are really screening for:** Flight risk, bitterness, and whether your timing is clean. They want a short, factual reason and a forward-looking close, not a teardown of your last employer.
- **Tailored answer:**
  - Headline: "Highspot ended in August 2026. I'm already building, and I'm looking for the next full-time role."
  - Spoken draft: "My last day at Highspot was 25 August 2026. I had already started Sugar Glider in May 2026, and I'm continuing that work, but I'm also looking for the next full-time engineering role — senior full-stack work where I can own product features and AI in production. I'm not in a rush to take the wrong seat, and I am actively interviewing. [ADD DETAIL: your own one- or two-sentence 'why now / what you want next.' Do not invent a frustration narrative about Highspot or a claim about why the role ended. Keep it factual and brief.]"
- **Pitfalls:**
  - Do not bad-mouth Highspot or invent a reason the role ended.
  - Do not leave the impression you can only do startup-founder work now, unless that is the job you want.
  - If they ask whether Sugar Glider is a conflict, have a plain sentence ready: [ADD DETAIL: whether you would pause, continue nights-and-weekends, or wind down paid work on it].

#### A3. Why this company / why this role?

- **What they are really screening for:** Did you do any work, or are you mass-applying? Motivation and basic fit. Without a job description, they are also testing whether you can talk about the kind of role you want.
- **Tailored answer:**
  - Headline: "I look for senior full-stack work where I already have the stack and can own AI-in-production problems."
  - Spoken draft: "I look for roles where the work is close to what I already do: React and TypeScript, full-stack ownership, and shipping AI as part of the product rather than as a side experiment. Highspot's LLM gateway and product features, and Sugar Glider, are the most recent examples. [ADD DETAIL: two or three concrete reasons tied to this company's product, customers, stack, or team — only after you have a job description. Examples to fill in: a posted Rails/React stack, a Vancouver or Canada-remote location, a product you actually use or understand, a clearly stated AI-in-production expectation.] If the posting is in Vancouver or Canada-remote, I already live in Vancouver and do not need relocation or sponsorship."
- **Pitfalls:**
  - Do not flatter a company you have not looked up.
  - Do not claim you have used their product unless you have.
  - Do not stretch your stack to match a posting (for example, do not lean on Python, Django, or React Native as primary experience).

#### A4. What are your salary expectations?

- **What they are really screening for:** Whether you will fit the band, and whether you can talk about money calmly. This is a filter, not a negotiation class.
- **Tailored answer:**
  - Headline: "I'm looking at about CA$200,000, and I will work with a posted band."
  - Spoken draft: "My usual expectation for a senior full-stack role in Canada is about CA$200,000 base. If you have a posted range, I'm happy to work within it: if the top of the band is below that, I would look at the top of the band; if the posted band starts above it, I would start at the bottom of that band. [ADD DETAIL: whether this conversation is in CAD or USD, and whether you want to mention total compensation, equity, or a floor of CA$170,000.] I'm more interested in the work and a clean fit than in optimizing a first-screen number."
- **Pitfalls:**
  - Do not say "I'm flexible" with no number. You will get anchored.
  - Do not invent a USD conversion on the fly.
  - Do not quote a number below a posted minimum or above a posted maximum unless you have decided to do that on purpose.
  - Do not apologize for the number.

#### A5. Logistics: availability, work authorization, location

- **What they are really screening for:** Can they actually hire you for this posting? Authorization, location, start date, and whether hybrid or onsite is real for you.
- **Tailored answer:**
  - Headline: "I live in Vancouver, I am authorized to work in Canada, and I do not need sponsorship."
  - Spoken draft: "I live in Vancouver, British Columbia. I am authorized to work in Canada and I would not need visa sponsorship now or in the future. I am not authorized to work in the United States. Vancouver onsite or hybrid is workable because I already live here; I am not relocating to another city. [ADD DETAIL: start date — the form-answer bank has used 'two weeks after an offer,' and some applications have used 2026-12-15 when a date was required; confirm what you want to say in a live screen.] [ADD DETAIL: if this job is US-remote, whether the company can employ you in Canada; if it is hybrid in Toronto or another hub, say plainly that you are not relocating.]"
- **Pitfalls:**
  - Do not blur US and Canadian work authorization.
  - Do not say yes to a relocation you will not do.
  - Do not over-explain citizenship documents unless they ask.

### Part B — Top 5 behavioral questions

#### B1. Tell me about your biggest failure (or a time the plan broke)

- **Competency this is coded against:** Learning agility, judgment, and ownership. Interviewers are scoring whether you can name a real miss, own your part, and show a change in behavior — not whether you have never failed.
- **What a strong (4/4) answer looks like:** A specific miss you were inside of; what you did and what you missed at the time; a real consequence; a lesson you actually applied later. Calm, no self-flagellation and no blame-shift.
- **What a weak (1/4) answer looks like:** "I work too hard," a failure that is actually a humblebrag, blaming tools or other people, or a story with no lesson.
- **Green flags / red flags:** Green: you say what you would do differently, in concrete terms. Red: you cannot think of a failure; you invent a heroic recovery that the materials do not support; you expose a legal or personnel story you should not tell.
- **STAR answer:** No confirmed "biggest failure" writeup is in the interview answer bank yet, so this section is a structure, not a story to memorize as-is.

  - **Situation:** [ADD DETAIL: pick a real miss. A possible seed, only if you decide it is a failure story you want to tell, is the Recon Instruments NPAPI plugin: the site had to talk to wearable hardware for data download and firmware updates; a C++ NPAPI browser plugin provided that access; about a month after launch, browsers dropped NPAPI and a core feature broke. Those facts live in [[Answer Bank]] as a difficult-project / plan-broke story, not as a drafted failure answer.]
  - **Task:** [ADD DETAIL: what you personally owned in the original approach, and what "good" looked like.]
  - **Action:** [ADD DETAIL: what you did when it broke. Confirmed recovery facts, if you use the NPAPI seed: the team built a small local client app that opened a port on the user's machine and talked to the website, restoring data download and firmware updates.]
  - **Result:** [ADD DETAIL: outcome you can stand behind. Confirmed, if you use that seed: users kept the product working; the lesson already written down is not to put a core feature on a platform the company does not control. Add only what you actually believe was *your* failure (for example, the platform bet), not a fictional delay, revenue loss, or blame story.]
  - **Spoken draft:** Do not use a drafted paragraph in the interview until you have filled the facts and decided this is the story you want. If you use the NPAPI seed, keep it as a plan that broke, own the platform bet only if that was yours, and end on the lesson you already have. Do not invent a post-mortem that is not in the bank.

- **Likely follow-up probe:** "What would you do differently at the start?" Answer only from a lesson you actually hold. If you use the NPAPI seed, the confirmed lesson is: do not make a core feature depend on a platform you do not control. [ADD DETAIL: one sentence on how that changed a later design choice, only if true.]

#### B2. Tell me about a conflict with a coworker

- **Competency this is coded against:** Collaboration, judgment, and communication. This is often coded as "what level do you operate at?": can you get the real constraint, or are you trying to win an engineering argument?
- **What a strong (4/4) answer looks like:** A real disagreement; you made your case; you sought the why; you changed your mind or committed when the company-level reason was clear; no villain.
- **What a weak (1/4) answer looks like:** "I don't do conflict." A story about how the other person was wrong. Sulking after a decision. Invented legal or policy details.
- **Green flags / red flags:** Green: you asked why, and you can live with a business or legal constraint. Red: you keep lobbying after the reason is clear; you invent the legal issue; you make product or legal sound blocking for no reason.
- **STAR answer:** Lead story from [[Answer Bank (full)]] — Recon Instruments, friends list vs legal risk.

  - **Situation:** At Recon Instruments I was building a platform for people to view their ski runs, and I believed a friends list was a linchpin feature.
  - **Task:** I wanted it in the product and was pushing hard, including offering to work overtime, against what product was prioritizing.
  - **Action:** I met with the product managers to make the case. I learned the real blocker was a legal issue: they felt building the feature would increase risk to the company, not that it was a matter of effort or taste. [ADD DETAIL: the nature of the legal risk, only if you actually know it. The one-line cheat sheet mentions that sharing live data is a tricky legal risk to mitigate. Do not go further than you can defend. Also add when this was, and what you worked on instead, only if useful and true.]
  - **Result:** Once I understood the why, I was happy to deprioritize it and drop the push. I had been arguing from an engineering and product-instinct point of view, and I had missed a company-level constraint.
  - **Spoken draft (about 90 seconds):** "At Recon Instruments I was building a platform for people to view their ski runs. I really thought a friends list was a linchpin for the whole system, and I was pushing hard to get it in. I even offered to work overtime to make it happen. The disagreement was with product. They were not prioritizing it, and I thought they were underestimating how important it was. So I sat down with the product managers to make the case. That is when I learned the real blocker was not effort or roadmap taste. It was legal. They felt that building a friends list would increase risk to the company, and that was why it was off the table. Once I understood that, I was happy to deprioritize it. I had been looking at it as an engineer, and I had missed a company-level constraint. After that I dropped the push and committed to what we could ship. The habit I kept from it is to ask why before I push harder."

- **Likely follow-up probe:** "What was the legal risk?" If you know it, say it in one sentence. If you only knew it increased company risk — or that sharing live data was hard to mitigate — say that, and that you trusted product and legal rather than guessing. Do not invent a policy or statute.

#### B3. Tell me about a time you disagreed with a manager, or pushed back

- **Competency this is coded against:** Judgment, ownership, and communication. Interviewers want pushback that includes a risk assessment and a request, not a lone-wolf workaround and not silence.
- **What a strong (4/4) answer looks like:** You named a real tradeoff, took it to the right person, got permission, stayed inside a lower-risk boundary, and delivered. You did not pretend there was no tension.
- **What a weak (1/4) answer looks like:** You went around a team. You changed a production, client-facing path on your own. You have no memory of ever disagreeing.
- **Green flags / red flags:** Green: permission first, a clear reason the risk was acceptable, respect for the other team's backlog. Red: "I just did it"; inflating the result; claiming a customer-facing production change was fair game.
- **STAR answer:** Backup / lead for ownership-and-pushback from [[Answer Bank (full)]] — Highspot role-play lifecycle dashboard vs the platform team's backlog. Use this as the disagreement / priority story. Use Recon as the conflict lead, so the two answers do not repeat.

  - **Situation:** At Highspot I was building the role-play lifecycle dashboard, a lifecycle dashboard for Amazon that stitched Snowflake, New Relic, and production logs so we could see what happened in an in-app session. [ADD DETAIL: whether you want to name Amazon in the room, or say "a large customer account."]
  - **Task:** I needed integrations that involved the platform team, which had a large backlog. I had to get the data in a reasonable time without creating an ownership or production-risk problem.
  - **Action:** I did not just do the work on my own. I went to my manager, explained the tradeoff — work that took me two weeks would have taken about six months on the platform team's schedule — and asked for permission to make the change myself, because this was not a production, client-facing part of the app. [ADD DETAIL: if you kept the platform team informed, asked them to review, or handed ownership back later, say so. That is the cleanest way to show you did not go around them. Also add what the change actually was, only if you want a tighter technical beat.]
  - **Result:** I got the go-ahead and delivered the work in two weeks instead of waiting on a much longer platform queue. Do not add adoption or impact numbers you do not have.
  - **Spoken draft (about 90 seconds to 2 minutes):** "At Highspot I was building the role-play lifecycle dashboard, which stitched Snowflake, New Relic, and production logs so we could see what happened in an in-app session. To get that data I needed integrations that involved the platform team, and they had a big backlog. If I waited on their schedule, work that took me two weeks would have taken about six months. That was a real disagreement over priorities and ownership. Their backlog was real, and I still needed the data sooner. I did not just go do the work. I went to my manager, explained the tradeoff, and asked for permission to make the change myself. The reason that was acceptable was that this was not a production, client-facing part of the app, so the risk was lower than changing a customer path. I got the go-ahead, made the change, and had it done in two weeks instead of waiting on a much longer platform queue. [ADD DETAIL: optional closing beat, only if true — I also kept the platform team informed / asked them to review.]"

- **Likely follow-up probe:** "How did the platform team feel about that?" If you looped them in, say so. If you do not know how they felt, do not invent a happy ending. Say what you did to respect their ownership, then stop. If they ask whether you would do the same on a customer-facing production path, the honest pointer is no: that higher risk is why you assessed it first.

#### B4. Tell me about a tough deadline, or a time you had to deliver through ambiguity

- **Competency this is coded against:** Ownership, bias for action, and comfort with incomplete requirements. Interviewers want to see you make progress before the spec is finished, without being reckless.
- **What a strong (4/4) answer looks like:** A fuzzy problem, your first cuts, what you shipped, and how you checked that it was good enough.
- **What a weak (1/4) answer looks like:** "I just stayed late." No decision-making. A story with no ambiguity, only crunch.
- **Green flags / red flags:** Green: you name a constraint and a decision. Red: you invent a six-week death march; you take credit for a whole company's launch.
- **STAR answer:** Resume-backed ownership story — Highspot internal LLM gateway — with gaps marked. This is not as fully written as the Recon and dashboard stories, so keep it conservative.

  - **Situation:** At Highspot I was a Senior Full Stack Engineer during a company-wide AI transformation. Teams needed model access, and I designed and implemented an internal LLM gateway to centralize that access.
  - **Task:** Give teams a common way to use models, rather than leaving every team to wire up vendors on their own. [ADD DETAIL: who asked for this, what the starting state was, and what "done" meant.]
  - **Action:** I designed and implemented the gateway and used it as part of the broader AI transformation work, alongside shipping LLM-powered product features. [ADD DETAIL: the main design choices, who you worked with, and any guardrails, auth, or observability you actually built. Do not invent scale numbers or a vendor list unless they are on your materials.]
  - **Result:** The gateway centralized AI model access across teams. [ADD DETAIL: who used it, what got easier, and any later iteration you can stand behind. No invented seat counts or latency numbers.]
  - **Spoken draft (aim for 90 seconds; add detail only after you fill gaps):** "At Highspot, during the company-wide AI transformation, I designed and implemented an internal LLM gateway so teams had a centralized way to get to models instead of each team wiring that up on its own. I treated it as infrastructure other people would depend on, and I was also shipping LLM-powered product features in the same period, including an AI-generated lesson wizard in React and TypeScript. [ADD DETAIL: one concrete design choice and one concrete result.] That's the kind of ambiguity I am comfortable in: the destination was clear — safer, shared model access — and the path had to be designed, shipped, and then used by other teams."

- **Likely follow-up probe:** "How did you decide what to put in the gateway versus leave to product teams?" [ADD DETAIL: your actual rule of thumb.] Do not improvise a platform philosophy you did not have.

#### B5. Tell me about your proudest achievement, or a time you led without formal authority

- **Competency this is coded against:** Ownership and influence without authority. For a senior IC, they want end-to-end scope and evidence that other people could use what you built — not a people-manager story you do not have.
- **What a strong (4/4) answer looks like:** A project you can walk through from problem to result, at a scope that matches a senior IC. If you talk about multiplying others, use a confirmed example, not a generic "I mentored the team."
- **What a weak (1/4) answer looks like:** A title upgrade. A "we shipped everything" tour. Mentoring stories with no names, no change, and no facts.
- **Green flags / red flags:** Green: you can say what you personally built and who it helped. Red: you claim Staff scope; you invent adoption metrics; you use games-era revenue as the headline unless asked about that period.
- **STAR answer:** Two resume-backed options. Lead with the one that best matches the job. For a platform or design-systems leaning role, use Article. For an AI-in-production role, use the Highspot gateway (B4) or Sugar Glider. Below is the Article version, which is distinct from B4.

  - **Situation:** At Article I was a Senior Frontend Developer, from 2021 to 2022, working on the design-to-code bottleneck between design and several frontend teams.
  - **Task:** Get design resources out of Figma and into something frontend teams could consume automatically, across more than one theme.
  - **Action:** I built an automated ETL pipeline that read Figma exports and generated themed TypeScript plugins, and a multi-theme component system on top of that work. [ADD DETAIL: confirm, if you want the more precise count you have used in conversation, "12 internal apps and 1 client app, with Figma as the single source of truth." The standard resume says "10+ internal applications." Do not say 12 unless you are comfortable that is accurate.]
  - **Result:** The pipeline removed a manual design-to-code bottleneck and the component system was used by 10+ internal applications. [ADD DETAIL: what got faster, and whether you want to name the client app.]
  - **Spoken draft (about 90 seconds):** "A project I am proud of is the design-to-code work at Article. I built an automated pipeline that took Figma exports and generated themed TypeScript plugins, so frontend teams were not hand-translating design resources. On top of that I created a multi-theme component system that was used by 10+ internal applications. The point of the work was not a one-off set of components. It was to make Figma something the engineering teams could actually consume, and to stop the design-to-code handoff from being a bottleneck. [ADD DETAIL: one sentence on the result in practice, without inventing a percentage.] I was a senior frontend engineer on that work, not a formal manager, and the impact was other teams being able to use the system."

  Alternate lead, if they want something you founded: Sugar Glider, started May 2026. You built and shipped it end to end on Next.js, TypeScript, and PostgreSQL, as a hybrid event-driven system with a shared work queue claimed by Vercel and by an on-prem server, plus a web app, a Chrome extension, and an MCP server, live at sugarglider.work. Use this when the role cares about agency, AI products, or end-to-end ownership. Do not inflate it into a large-team or revenue story.

- **Likely follow-up probe:** "How did you get multiple teams to adopt it?" [ADD DETAIL: the actual adoption path. Do not invent a governance committee or a percentage rollout.] If they ask about mentoring or force-multiplying more broadly, a confirmed example in [[Answer Bank]] is Highspot AI-transformation work: teaching a plan-first LLM workflow (question the model until you understand every step, put the plan into tickets, ship small reviewed changes) and running lunch-and-learns. Use that only if they go there; do not volunteer a mentoring epic.

### Part C — Story bank, questions to ask, and one-screen reference

#### Story bank

| Story | Confirmed facts relied on | Questions it can answer | Lead or backup | Open `[ADD DETAIL]` |
|---|---|---|---|---|
| Recon, friends list vs legal risk | Pushed hard for a friends list on the ski-run platform, including overtime; met with PMs; learned the blocker was legal risk to the company; happily deprioritized | B2 conflict (lead); also "a time you changed your mind," "disagree and commit" | Lead for conflict | Nature of the legal risk, only if known; what you worked on instead |
| Highspot, role-play lifecycle dashboard | Amazon lifecycle dashboard stitching Snowflake, New Relic, and production logs; platform backlog meant ~6 months vs 2 weeks; manager permission; not production client-facing; shipped in two weeks | B3 disagreement / pushback (lead); also ownership, influence without authority, priorities | Lead for pushback; backup for conflict | Whether to name Amazon; whether you looped the platform team in; what the change actually was |
| Highspot, internal LLM gateway | Designed and implemented a gateway centralizing model access across teams during the AI transformation; also shipped LLM-powered product features | B4 ambiguity / ownership; A1 background; proudest, if the role is AI-heavy | Lead for ambiguity; backup for proudest | Users, design choices, concrete result |
| Article, Figma-to-code and design system | ETL from Figma exports to themed TypeScript plugins; multi-theme component system used by 10+ internal applications | B5 proudest / leadership without authority; design-systems interviews | Lead for proudest on platform-leaning roles | Confirm 12 internal + 1 client if you want that count; adoption path |
| Sugar Glider, founder (May 2026) | Founded and shipped end to end: Next.js, TypeScript, Postgres, agents on a shared work queue, web app, Chrome extension, MCP server, live product | A1 background; B5 alternate proudest; "something you built end to end" | Backup for proudest / ownership | Whether you would mention it as a conflict with full-time work; any result beyond "it shipped" |
| Recon, NPAPI plugin (plan broke) | NPAPI C++ plugin for hardware data and firmware; browsers dropped NPAPI about a month after launch; replaced with a local client app talking to the browser; lesson about platform dependence | B1 failure / plan broke, only if you choose to frame it that way | Candidate seed, not a drafted failure | Your personal ownership of the original bet; whether you want this as "failure" vs "the plan broke" |
| Highspot, AI lesson wizard | React/TypeScript lesson wizard, Polar design system, validation, feature-flag rollout | A1 and cross-functional product questions | Unused backup | Impact beyond "it shipped" |
| Appnovation, COVID-19 workforce tracker | Led frontend; deployed to four Canadian provinces | Tough deadline / public-sector delivery, if asked | Unused backup | Your exact role vs the wider program |
| Mentoring, Highspot AI workflow | Confirmed in [[Answer Bank]]: taught a plan-first LLM workflow, including to senior engineers, and ran lunch-and-learns | Force-multiplier / mentoring follow-ups | Use only if asked | Names and what changed, only if you want them |

#### Questions to ask them

These are general senior-IC questions for a recruiter screen or first behavioral, since this example has no job description. Swap in company-specific ones when you have a posting.

1. What does success look like in the first six months for this role, and how will that be judged?
2. How is the team using AI in production today — product features, internal tooling, or day-to-day coding — and how do you evaluate that work?
3. What does the engineering shape of the role actually look like: product features, platform, or a mix — and who would I work with most?
4. For a Vancouver or Canada-remote hire, what is the real expectation for time in an office or in another time zone?
5. What are the next steps in the process, and is there a posted pay band you can share so I can stay aligned?

#### One-screen quick reference

*Generic senior full-stack screen. Headline first, then 3–5 bullets. About 60–90 seconds for A, 90 seconds to 2 minutes for B.*

**A1. Tell me about yourself**
*Really asking: coherent senior-IC story, not your CV.*
- Vancouver; 12 years software; 8+ years React/TypeScript.
- Highspot Senior FSE, Apr 2023–Aug 2026: LLM gateway, AI product features, Rails/React.
- Founded Sugar Glider, May 2026: agents, web app, extension, MCP server.
- Earlier: Article design-to-code; lead frontend / platform work.
- **Don't:** recap every job; claim Staff; say Highspot is current if you are using the August 2026 end date.

**A2. Why leaving / why now**
*Really asking: clean, unbitter timing.*
- Highspot ended 25 Aug 2026.
- Sugar Glider is underway; I am also looking for the next full-time senior full-stack role.
- **Don't:** invent a frustration story. [ADD DETAIL: your own one-line "what I want next."]

**A3. Why this company**
*Really asking: did you do the work?*
- I look for senior full-stack work with product ownership and AI in production.
- [ADD DETAIL: two specifics from the posting.]
- Vancouver-based, Canada authorized, no sponsorship, no relocation.
- **Don't:** flatter a company you have not read about.

**A4. Salary**
*Really asking: band fit.*
- About CA$200,000 base.
- Work within a posted band (top if the max is lower; bottom if the min is higher).
- **Don't:** say "flexible" with no number; invent a USD conversion.

**A5. Logistics**
*Really asking: can they hire you?*
- Live in Vancouver; authorized in Canada; no sponsorship; not authorized in the US.
- Vancouver hybrid/onsite is fine; I will not relocate to another city.
- [ADD DETAIL: start date.]
- **Don't:** blur US and Canadian authorization.

**B1. Biggest failure**
*Really asking: learning agility, not a perfect record.*
- No confirmed failure writeup yet — do not improvise a polished miss.
- Possible seed only: Recon NPAPI plugin broke a month after launch when browsers dropped NPAPI; replaced with a local client app; lesson is not to put a core feature on a platform you do not control.
- **Don't:** use this until you have decided it is the story and filled [ADD DETAIL].

**B2. Conflict with a coworker — Recon friends list**
*Really asking: what level do you operate at?*
- Ski-run platform. I pushed hard for a friends list, including overtime.
- Sat with PMs; the real blocker was legal risk to the company, not effort.
- Once I understood the why, I deprioritized and committed.
- Close: "Now I ask why before I push harder."
- **Don't:** sulk; invent the legal detail; make product the villain.

**B3. Disagreed / pushed back — Highspot dashboard**
*Really asking: ownership with permission, not a workaround.*
- Role-play lifecycle dashboard (Snowflake, New Relic, production logs).
- Platform backlog: two weeks of work would have been about six months.
- Asked my manager first; acceptable because it was not production client-facing.
- Shipped in two weeks. [ADD DETAIL: looping the platform team in, only if true.]
- **Don't:** sound like you went around a team; invent impact numbers.

**B4. Ambiguity / tough delivery — Highspot LLM gateway**
*Really asking: can you own an unclear platform problem?*
- Designed and implemented an internal LLM gateway to centralize model access.
- Also shipped LLM-powered product features in the same period.
- [ADD DETAIL: one design choice and one result.]
- **Don't:** invent scale, vendor lists, or seat counts.

**B5. Proudest / lead without authority — Article design system**
*Really asking: end-to-end senior-IC impact.*
- Figma-to-code ETL generating themed TypeScript plugins.
- Multi-theme component system used by 10+ internal applications.
- [ADD DETAIL: confirm 12 internal + 1 client if you want that count.]
- Alternate: Sugar Glider, shipped end to end.
- **Don't:** claim a Staff or manager title; invent adoption percentages.

---

## Sugar Glider integration notes

The product already has a scoped, not-yet-built Interview Prep feature: [[SugarGlider - Interview Prep Feature]]. That note is the source of truth for the story bank, anti-fabrication rules, MVP, and prompt-file layout under `prompts/interview-prep/`. This document does not change any code. It is the generation contract for one output: a full cheat sheet a seeker can export or use as a first draft.

If you want this built into Sugar Glider, you can give a coding agent a prompt like the following (adjust paths to the current repo, `jkinman/workcraft-next`):

```text
Add an Interview Prep "generate cheat sheet" path to Sugar Glider, following
[[SugarGlider - Interview Prep Feature]] and the generation contract in
[[Interview Prep Cheat Sheet Prompt]].

Do not start from a blank product. Reuse the feature note's data model,
guardrails, and planned prompt files (propose-stories, draft-answer,
tailor-to-role) under prompts/interview-prep/, loaded through the existing
prompt loader. Do not invent a second prompt system.

Inputs, in this order of preference:
- the seeker's stored resume (parsed_cv / raw_cv), plus any confirmed story
  facts and fill-ins already in the story bank
- the optional job posting and evaluation for one pipeline role
- role level if we have it (recruiter screen, senior, staff, and so on)

Output: a per-application (or generic, if no role is selected) Markdown
cheat sheet that matches the three-part contract in "Interview Prep Cheat
Sheet Prompt": Part A (top 5 HR screen questions), Part B (top 5 behavioral
questions with competency coding, 4/4 vs 1/4, flags, STAR, follow-up), and
Part C (story bank table, 3–5 questions to ask, one-screen reference).

Hard rules, same as tailor-resume and the feature note:
- use only stored facts; never invent metrics, employers, titles, dates,
  or outcomes
- emit [ADD DETAIL] / [fill in: …] for gaps, and do not put those facts
  into the spoken draft
- do not upgrade titles
- if there is no confirmed failure (or other) story, output a skeleton
  instead of inventing one
- the job description may tailor emphasis; it is not a source for the
  seeker's past

MVP shape:
- a "Generate cheat sheet" action on /interview-prep, and from a pipeline
  role that is Applied or Interviewing
- show the sheet in the existing cheat-sheet view (glanceable, one screen
  per question or a tight scroll) and allow Markdown / PDF export using
  the existing document renderer
- default to draft status; the seeker edits and marks answers ready
- do not auto-submit anything, do not coach a live call, and do not add
  a fifth nav tab unless product already decided that

Follow DESIGN.md, existing Shell / Desk primitives, and the Hunter/Pro
MCP access rules in the feature note. Stop after the generate-and-review
loop works for one seeker and one role. No live mock interviews in MVP.
```

That is enough to start a scoped implementation conversation. The feature note still owns MVP boundaries, schema, and open product questions.
