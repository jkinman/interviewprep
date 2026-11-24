const express = require('express');
const fs = require('fs');
const path = require('path');
const { marked } = require('marked');
const hljs = require('highlight.js');
const { v4: uuidv4 } = require('uuid');

const app = express();
const PORT = process.env.PORT || 8082;

// Configure marked with syntax highlighting
marked.setOptions({
  highlight: (code, lang) => {
    if (lang && hljs.getLanguage(lang)) {
      return hljs.highlight(code, { language: lang }).value;
    }
    return code;
  }
});

// Read the cheat sheet prompt
const CHEAT_SHEET_PATH = path.join(__dirname, 'content', 'cheat-sheet-prompt.md');
let cheatSheetRaw = '';
try {
  cheatSheetRaw = fs.readFileSync(CHEAT_SHEET_PATH, 'utf-8');
} catch (e) {
  console.error('Failed to load cheat sheet:', e.message);
  process.exit(1);
}

// Extract just the prompt block from the markdown (between ```markdown and ```)
function extractPrompt(raw) {
  const match = raw.match(/```markdown\n([\s\S]*?)\n```/);
  return match ? match[1] : raw;
}

// Render the full page
function renderPage(content, uuid, promptBlock) {
  const isRoot = uuid === 'index';
  const shareUrl = `https://interviewprep.kinman.dev/${uuid}`;

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Interview Prep Cheat Sheet</title>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.10.0/styles/github-dark.min.css">
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, sans-serif;
      line-height: 1.7;
      color: #1a1a2e;
      background: #f8f9fa;
      padding: 0;
    }
    .top-bar {
      background: #1a1a2e;
      color: #fff;
      padding: 12px 24px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      position: sticky;
      top: 0;
      z-index: 100;
    }
    .top-bar h1 {
      font-size: 18px;
      font-weight: 600;
    }
    .top-bar .share-link {
      font-size: 13px;
      color: #9ca3af;
    }
    .top-bar .share-link code {
      background: rgba(255,255,255,0.1);
      padding: 2px 8px;
      border-radius: 4px;
      cursor: pointer;
    }
    .top-bar .share-link code:hover { background: rgba(255,255,255,0.2); }
    .container {
      max-width: 880px;
      margin: 0 auto;
      padding: 32px 24px 80px;
    }
    .alert {
      background: #fff3cd;
      border: 1px solid #ffc107;
      color: #664d03;
      padding: 16px 20px;
      border-radius: 8px;
      margin-bottom: 24px;
      font-size: 14px;
    }
    .alert a { color: #1a1a2e; text-decoration: underline; }
    .content { background: #fff; padding: 32px 40px; border-radius: 12px; box-shadow: 0 1px 3px rgba(0,0,0,0.08); }
    .content h1 { font-size: 28px; margin: 0 0 16px; color: #1a1a2e; }
    .content h2 { font-size: 22px; margin: 32px 0 12px; padding-bottom: 8px; border-bottom: 2px solid #e5e7eb; }
    .content h3 { font-size: 18px; margin: 24px 0 8px; color: #374151; }
    .content h4 { font-size: 16px; margin: 20px 0 6px; color: #374151; }
    .content p { margin: 12px 0; }
    .content ul, .content ol { margin: 8px 0 8px 24px; }
    .content li { margin: 4px 0; }
    .content code { background: #f3f4f6; padding: 2px 6px; border-radius: 4px; font-size: 0.9em; }
    .content pre { background: #1a1a2e; color: #e5e7eb; padding: 16px 20px; border-radius: 8px; overflow-x: auto; margin: 16px 0; }
    .content pre code { background: none; padding: 0; font-size: 14px; }
    .content blockquote { border-left: 4px solid #6366f1; padding-left: 16px; margin: 16px 0; color: #6b7280; }
    .content table { width: 100%; border-collapse: collapse; margin: 16px 0; font-size: 14px; }
    .content th, .content td { border: 1px solid #e5e7eb; padding: 8px 12px; text-align: left; }
    .content th { background: #f9fafb; font-weight: 600; }
    .content strong { color: #1a1a2e; }
    .copy-bar {
      display: flex; gap: 8px; align-items: center;
      background: #f3f4f6;
      padding: 12px 16px;
      border-radius: 8px;
      margin: 24px 0 8px;
    }
    .copy-btn {
      background: #6366f1; color: #fff; border: none;
      padding: 10px 20px; border-radius: 6px;
      font-size: 14px; font-weight: 500; cursor: pointer;
      white-space: nowrap;
      transition: background 0.15s;
    }
    .copy-btn:hover { background: #4f46e5; }
    .copy-btn.copied { background: #059669; }
    .footer {
      text-align: center; padding: 40px 24px; color: #9ca3af; font-size: 13px;
    }
    .footer a { color: #6366f1; text-decoration: none; }
    @media (max-width: 640px) {
      .container { padding: 16px 12px 80px; }
      .content { padding: 20px; }
      .content h1 { font-size: 22px; }
      .top-bar { flex-direction: column; gap: 6px; text-align: center; }
    }
  </style>
</head>
<body>
<div class="top-bar">
  <h1>Interview Prep Cheat Sheet</h1>
  ${isRoot ? '<span class="share-link">Shareable link: <code onclick="navigator.clipboard.writeText(this.textContent)">' + shareUrl + '</code></span>' : '<span class="share-link">UUID: <code>' + uuid + '</code></span>'}
</div>
<div class="container">
  <div class="alert">
    <strong>👔 What is this?</strong> A reusable prompt that turns a resume (and optionally a job description) into a scannable interview cheat sheet. 
    Paste the prompt into any capable AI — Claude, ChatGPT, OpenRouter — then fill in your resume. 
    ${isRoot ? '<a href="/' + uuidv4().split('-')[0] + '">Open a shareable version →</a>' : ''}
  </div>
  <div class="content">
    ${content}
  </div>
  <div class="copy-bar">
    <button class="copy-btn" onclick="copyPrompt()">📋 Copy prompt for AI</button>
    <span style="font-size:13px;color:#6b7280;">Paste into Claude, ChatGPT, or any LLM</span>
  </div>
</div>
<div class="footer">
  Made from the <a href="https://github.com/jkinman/interviewprep">interviewprep</a> project &bull; 
  <a href="/">Home</a>
</div>
<script>
function copyPrompt() {
  const btn = document.querySelector('.copy-btn');
  const text = document.getElementById('prompt-text').textContent;
  navigator.clipboard.writeText(text).then(() => {
    btn.textContent = '✅ Copied!';
    btn.classList.add('copied');
    setTimeout(() => { btn.textContent = '📋 Copy prompt for AI'; btn.classList.remove('copied'); }, 2000);
  });
}
</script>
<span id="prompt-text" style="display:none">${promptBlock.replace(/`/g, '\\`').replace(/\$/g, '\\$')}</span>
</body>
</html>`;
}

// --- Routes ---

app.get('/health', (req, res) => res.json({ ok: true }));

// Home page — also serves as /:uuid for shareable links
app.get('/:uuid?', (req, res) => {
  const uuid = req.params.uuid || 'index';
  const promptBlock = extractPrompt(cheatSheetRaw);
  
  // Render everything before the prompt section as the page content
  // Show the prompt section itself inside the copy-bar area
  const html = marked(cheatSheetRaw);
  
  res.send(renderPage(html, uuid, promptBlock));
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Interview Prep server running on http://0.0.0.0:${PORT}`);
  console.log(`Content loaded: ${cheatSheetRaw.length} bytes`);
});