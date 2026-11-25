# Interview Prep Cheat Sheet — Installation Guide

## Option 1: Copy the prompt

1. Open https://interviewprep.kinman.dev
2. Click **Copy prompt**
3. Paste it into Claude, ChatGPT, or any other AI
4. Send your resume and the job description

Works with every LLM. No browsing required.

## Option 2: Give the AI the prompt URL

If the model can open a link, paste:

```
https://interviewprep.kinman.dev/prompt
```

That URL is the prompt as plain text. The homepage is only the instructions.

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

1. Click **Copy prompt** on https://interviewprep.kinman.dev and paste it into the chat
2. The AI reads the instructions and asks you for inputs

For the ChatGPT desktop app specifically, paste the URL and it will fetch the page content automatically. No need to download anything — the interactive flow handles the rest.