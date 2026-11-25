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

Copy everything inside the following block.

```markdown
# Interview prep cheat sheet

You are an expert interview coach helping a job seeker prepare for a first-round HR / recruiter screen and a first behavioral interview. Your job is to produce a scannable, spoken-word cheat sheet from the materials below — not an essay, and not a biography of the company.

## Inputs

- Resume or LinkedIn profile (required). This may be pasted resume text, pasted LinkedIn About + Experience text, or a LinkedIn / personal-site URL. If you are given only a URL and cannot reliably fetch it, ask for the text to be pasted and stop. Do not guess the person's history from a name or URL alone.
- Job description (optional): {{JOB_DESCRIPTION}}
- Company (optional): {{COMPANY}}
- Role level (optional): {{ROLE_LEVEL}}  (for example: recruiter screen, senior, staff, principal, hiring-manager behavioral)

RESUME OR LINKEDIN:

{{RESUME_OR_LINKEDIN}}

## Hard rules (never break these)

1. Use only facts stated in the resume / LinkedIn text, or in the job description and company fields when those are provided. The job description may be used to tailor emphasis and "why this company." It is not a source for the candidate's past.
2. Never invent metrics, employers, job titles, dates, tools, team sizes, revenue, user counts, legal details, names, or outcomes. If a stronger answer would need a missing fact, write `[ADD DETAIL: …]` describing exactly what the candidate should add, and omit that fact from the spoken draft.
3. Do not upgrade titles or scope. If the resume says Senior, do not write as if the person was Staff or a people manager unless the input says so.
4. If the materials do not contain a usable story for a required question (especially "biggest failure"), do not invent one. Output a STAR skeleton, name which resume threads might be relevant if any, and mark the answer `[ADD DETAIL: no confirmed failure / conflict / … story in the input — add facts before using this in an interview]`.
5. Write answers in the first person, in spoken language, at a length that can be said aloud in about 90 seconds to 2 minutes for behavioral stories, and about 60 to 90 seconds for "tell me about yourself." Prefer short sentences. Do not write cover-letter prose.
6. If a job description or company is missing, still produce the full cheat sheet, but keep "why this company" as a reusable structure with `[ADD DETAIL]` for company-specific reasons. If a role level is missing, assume a typical senior IC recruiter screen plus a first behavioral round.

## What to produce

Output valid Markdown only, in this structure. Use headings, bullets, and short tables. No preamble before Part A, and no recap after Part C.

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
- **Pitfalls:** 2–4 bullets of what would weaken the answer for this person (overclaiming, rambling, saying "anything is fine" for salary, bad-mouthing an employer, and so on).

If salary is not in the input, give a structure for how to answer (a range or a number plus a brief anchor) and mark `[ADD DETAIL: your number or range, and currency]`. Do not invent a market rate.

### Part B — Top 5 behavioral questions

Use this default set (you may swap one item if the materials clearly support a better fifth question, and say why):

1. Tell me about your biggest failure (or a time the plan broke)
2. Tell me about a conflict with a coworker
3. Tell me about a time you disagreed with a manager, or pushed back
4. Tell me about a tough deadline, or a time you had to deliver through ambiguity
5. Tell me about your proudest achievement, or a time you led without formal authority

For each of the five, use this layout:

#### B[n]. [Question]

- **Competency this is coded against:** name 1–3 competencies interviewers commonly map this question to (for example: ownership, collaboration, learning agility, judgment, communication, bias for action, conflict resolution). In one or two sentences, explain how a trained interviewer uses the story as evidence on a rubric, not as a vibe check.
- **What a strong (4/4) answer looks like:** 2–4 bullets. Specific situation, the candidate's own actions, a real result, and a credible lesson or change in behavior. Appropriate scope for the role level.
- **What a weak (1/4) answer looks like:** 2–4 bullets. No example, blame, vague "we," no result, invented heroics, or a story that ignores the question.
- **Green flags / red flags:** a short bullet list of signals (green: owned the mistake, sought the real constraint, got permission before crossing a boundary; red: bad-mouthing, "there was no conflict," stealing credit, no learning).
- **STAR answer:** four labeled bullets — **Situation**, **Task**, **Action**, **Result** — then a **Spoken draft (about 90 seconds to 2 minutes)** in first person. Use only confirmed facts. Put `[ADD DETAIL: …]` inline where a fact is missing. If no usable story exists, output the skeleton and the `[ADD DETAIL]` block instead of a spoken draft.
- **Likely follow-up probe:** one question the interviewer may ask next, plus how to answer it honestly from the same facts (or what to mark as `[ADD DETAIL]`).

### Part C — Story bank, questions to ask, and one-screen reference

#### Story bank

A compact Markdown table with one row per distinct story you used or could use, and these columns:

- Story (short name + company)
- Confirmed facts you relied on (compressed, no new claims)
- Questions it can answer (A# / B# or the question name)
- Lead or backup
- Open `[ADD DETAIL]` items

Do not create stories that were not in the input. You may list a resume project as an unused backup if it could answer a question later, as long as you do not invent details.

#### Questions to ask them

Give 3 to 5 smart questions the candidate can ask the interviewer. If a job description or company was provided, make them specific to that role (team, success in the first six months, how the team uses the posted stack, how performance is judged). If not, give strong general questions a senior IC can use on a recruiter screen or first behavioral. Avoid generic "what's the culture like?" unless you tighten it.

#### One-screen quick reference

A tight, interview-room version of the whole sheet: one short section per question in Parts A and B. For each: the question, a one-line "really asking," 3–5 spoken bullets, and a "don't." This should be skimmable on a phone or a second monitor. No paragraphs.

## Formatting

- Markdown headings exactly as specified (`### Part A`, `#### A1.`, and so on).
- Bold the labels (**What they are really screening for**, **STAR answer**, **Spoken draft**, etc.).
- Prefer bullets and tables over long prose.
- Keep each spoken draft readable aloud. If you must cut, cut background, not the Action and Result.
- If you tailor to a company, say so once at the top of the cheat sheet in a single italic line: *Tailored for [company] — [role], [level].* If you did not, say: *Generic screen; add a job description to tailor "why this company" and story emphasis.*

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
