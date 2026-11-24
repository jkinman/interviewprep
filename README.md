# Interview Prep Cheat Sheet

A reusable prompt that turns a resume and job description into a scannable interview cheat sheet — HR screen answers, behavioral STAR stories, and a one-screen reference. Built for anyone to paste into Claude, ChatGPT, or any capable LLM.

**Live at: [interviewprep.kinman.dev](https://interviewprep.kinman.dev)**

## How it works

1. Open the site and click **Copy prompt for AI**
2. Paste the prompt into Claude, ChatGPT, or any LLM
3. Replace `{{RESUME_OR_LINKEDIN}}` with your resume text
4. Optionally fill in `{{JOB_DESCRIPTION}}`, `{{COMPANY}}`, `{{ROLE_LEVEL}}`
5. Get back: Top 5 HR questions + Top 5 behavioral questions (with STAR answers) + One-screen quick reference

## Structure

- `/` — Main cheat sheet prompt
- `/:uuid` — Shareable URL (any UUID works; same content)
- `/health` — Health check endpoint

## Run locally

```bash
npm install
npm start
```

Listens on port 8082.

## Tech

- Plain Node.js with Express
- Markdown rendered with `marked` + `highlight.js`
- Served behind a Cloudflare tunnel at `interviewprep.kinman.dev`
- Raspberry Pi 5 host via systemd

## License

MIT