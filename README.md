# Interview Prep Cheat Sheet

A reusable prompt that turns a resume and job description into a scannable interview cheat sheet — HR screen answers, behavioral STAR stories, and a one-screen reference. Built for anyone to paste into Claude, ChatGPT, or any capable LLM.

**Live at: [interviewprep.kinman.dev](https://interviewprep.kinman.dev)**

## How it works

1. Open the site and click **Copy prompt**
2. Paste it into Claude, ChatGPT, or any LLM
3. Send your resume and the job description when it asks
4. The page opens in the browser

Or install the skill: `npx skills add https://github.com/jkinman/interviewprep`

## Structure

- `/` — Instruction page: copy the prompt, or install the skill
- `/prompt` — The prompt as plain text
- `/health` — Health check endpoint

## Run locally

```bash
npm install
npm start
```

Listens on port 8082.

## Tech

- Plain Node.js with Express
- Served behind a Cloudflare tunnel at `interviewprep.kinman.dev`
- Raspberry Pi 5 host via systemd

## License

MIT