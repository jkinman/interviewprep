# Interview Prep Cheat Sheet — Installation Guide

## Option 1: Web URL (easiest)

Paste this URL into any LLM that can browse the web:

```
https://interviewprep.kinman.dev
```

Works with: **Claude** (with web search), **ChatGPT** (with browsing), **Gemini**, **Perplexity**

## Option 2: Paste the prompt text directly

1. Go to https://interviewprep.kinman.dev
2. Click **Copy prompt text**
3. Paste into any LLM chat

Works with: **Every LLM** — no browsing required

## Option 3: Install as a skill

### Claude / Claude Code
```bash
npx skills add https://github.com/jkinman/interviewprep
```

### ChatGPT (Custom GPT)
Create a new GPT with this instruction in the system prompt:
```
You are an interview prep coach. Read the prompt at https://interviewprep.kinman.dev and follow its instructions. Ask the user for their resume, job description, and clarifying questions before generating a cheat sheet.
```

### Cursor / Copilot
Add to your project's `.cursor/rules/` or `.github/copilot-instructions.md`:
```markdown
When asked about interview prep, read the prompt at https://interviewprep.kinman.dev and follow its interactive flow.
```

## ChatGPT Desktop App (or any LLM with system access)

If your AI can access local files, the simplest approach is:

1. Copy this page's **URL** and paste it into the chat
2. The AI reads the instructions and asks you for inputs

For the ChatGPT desktop app specifically, paste the URL and it will fetch the page content automatically. No need to download anything — the interactive flow handles the rest.