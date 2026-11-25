---
name: interview-prep
description: Interactive interview prep cheat sheet generator. Paste URL or prompt into any LLM, AI asks for resume + job details + 3 clarifying questions, then produces concise cheat sheet.
author: jkinman
source: https://github.com/jkinman/interviewprep
homepage: https://interviewprep.kinman.dev
tags:
  - interview
  - career
  - job-search
  - cheat-sheet
  - behavioral
category: career
version: 1.0.0
---

# Interview Prep Cheat Sheet

An interactive prompt that turns any resume into a concise interview cheat sheet. The AI asks for inputs step by step, then produces a focused cheat sheet with HR questions, behavioral STAR answers, and a quick reference.

## How it works

Paste the URL `https://interviewprep.kinman.dev` into any LLM (Claude, ChatGPT, Gemini, etc.) or copy the prompt text directly. The AI will:

1. Ask for your **resume** or LinkedIn profile
2. Ask for the **job description** (required — do not generate without it)
3. Ask **1-3 short clarifying questions** about interview format, timing, and focus areas
4. Write the HTML cheat sheet and open it in the browser. The user should not have to open the file. The sheet has:
   - Top 5 HR/recruiter screen questions with answers
   - Top 5 behavioral questions with STAR answers
   - One-screen quick reference

## Install as a skill

```bash
npx skills add https://github.com/jkinman/interviewprep
```

Or add the URL as project knowledge in Claude/Cursor/Copilot.

## Requirements

- Any capable LLM (Claude, ChatGPT, Gemini, OpenRouter)
- Your resume text (paste it when the AI asks)
- The job description (required)

## Format

The cheat sheet output includes:
- **Part A** — 5 recruiter screen questions with screening context and spoken answers
- **Part B** — 5 behavioral questions with competency coding, STAR structures, and spoken drafts
- **Part C** — Story bank table, questions to ask the interviewer, one-screen reference

The HTML page is not a free layout. Clone the canonical sample embedded in the prompt in `content/cheat-sheet-prompt.md`: same stylesheet, same class names, same map. Replace only the candidate's facts. Do not hand-write a different page.

## Rules

- Uses only facts from the resume — never invents metrics, titles, or outcomes
- Marks missing facts as `[ADD DETAIL]` rather than fabricating
- Keeps output concise — fits 5-8 minutes of reading