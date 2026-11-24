const express = require('express');
const fs = require('fs');
const path = require('path');
const { marked } = require('marked');
const hljs = require('highlight.js');
const { v4: uuidv4 } = require('uuid');

const app = express();
const PORT = process.env.PORT || 8082;

marked.setOptions({
  highlight: (code, lang) => {
    if (lang && hljs.getLanguage(lang))
      return hljs.highlight(code, { language: lang }).value;
    return code;
  }
});

const CHEAT_SHEET_PATH = path.join(__dirname, 'content', 'cheat-sheet-prompt.md');
let cheatSheetRaw = '';
try { cheatSheetRaw = fs.readFileSync(CHEAT_SHEET_PATH, 'utf-8'); }
catch (e) { console.error('Failed to load cheat sheet:', e.message); process.exit(1); }

function extractPrompt(raw) {
  const m = raw.match(/```markdown\n([\s\S]*?)\n```/);
  return m ? m[1] : raw;
}

/* Build the hero HTML (prompt + instructions + copy button) */
function heroHTML(uuid, shareUrl, isRoot) {
  const newId = uuidv4().split('-')[0];
  return `<div class="hero">
<h2>Interview Prep Cheat Sheet</h2>
<p class="sub">Paste the URL into Claude or ChatGPT. The AI will ask for your resume and job details with 3 short questions, then produce a concise interview cheat sheet — not a 20-page document.</p>
<div class="pb"><div class="l">The prompt</div><div class="pv">You are an expert interview coach… Ask first, generate second. Keep it short.</div></div>
<div class="copy-row">
<button class="cb" onclick="cp()">📋 Copy URL</button>
<button class="cb cb2" onclick="cpt()">📝 Copy prompt text</button>
</div>
<div style="margin-top:10px;font-size:13px;color:rgba(255,255,255,0.5);text-align:center">URL works in Claude/ChatGPT with browsing. Prompt text works anywhere — paste it into any LLM chat.</div>
<div class="in"><h3>How it works</h3><ul>
<li><span class="n">1</span> Click <strong>Copy URL</strong> (Claude/ChatGPT with browsing) or <strong>Copy prompt text</strong> (any LLM).</li>
<li><span class="n">2</span> Paste into <strong>Claude, ChatGPT, or any LLM</strong>.</li>
<li><span class="n">3</span> The AI asks for your <strong>resume</strong> (1 message).</li>
<li><span class="n">4</span> Then asks about the <strong>job description</strong> (1 message).</li>
<li><span class="n">5</span> Then asks <strong>1-3 short questions</strong> about the interview format.</li>
<li><span class="n">6</span> AI generates a <strong>concise cheat sheet</strong> — HR questions, behavioral STARs, quick reference.</li>
</ul></div>
<div class="ref">Share: <code onclick="navigator.clipboard.writeText(this.textContent)">${shareUrl}</code>${isRoot ? ` · <a href="/${newId}">New shareable version</a>` : ' · <a href="/">Home</a>'}</div>
</div>`;
}

function renderPage(content, uuid, promptBlock) {
  const isRoot = uuid === 'index';
  const shareUrl = `https://interviewprep.kinman.dev/${uuid}`;
  const hero = heroHTML(uuid, shareUrl, isRoot);

  // Escape prompt for embedding in page
  const pEsc = promptBlock.replace(/\\/g, '\\\\').replace(/`/g, '\\`').replace(/\$/g, '\\$').replace(/<\/script>/g, '<\\/script>');

  return `<!DOCTYPE html><html lang="en"><head>
<meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<title>Interview Prep Cheat Sheet</title>
<style>
*{margin:0;padding:0;box-sizing:border-box}
body{font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Oxygen,sans-serif;line-height:1.7;color:#1a1a2e;background:#f8f9fa}
.top{background:#1a1a2e;color:#fff;padding:12px 24px;display:flex;align-items:center;justify-content:space-between;position:sticky;top:0;z-index:100}
.top h1{font-size:18px;font-weight:600}
.top .s{font-size:13px;color:#9ca3af}
.top .s code{background:rgba(255,255,255,0.1);padding:2px 8px;border-radius:4px;cursor:pointer}
.top .s code:hover{background:rgba(255,255,255,0.2)}
.w{max-width:880px;margin:0 auto;padding:0 24px 80px}
.hero{background:linear-gradient(135deg,#1a1a2e,#2d2a5e);color:#fff;padding:40px 40px 48px;border-radius:0 0 24px 24px;margin:0 -24px 32px}
.hero h2{font-size:26px;font-weight:700;margin:0 0 6px}
.hero .sub{color:#a5b4fc;font-size:15px;margin-bottom:24px}
.hero .pb{background:rgba(255,255,255,0.08);border:1px solid rgba(255,255,255,0.12);border-radius:12px;padding:20px 24px;margin-bottom:20px}
.hero .pb .l{font-size:12px;font-weight:600;text-transform:uppercase;letter-spacing:.5px;color:#a5b4fc;margin-bottom:8px}
.hero .pb .pv{font-family:'SF Mono','Fira Code',monospace;font-size:13px;color:#c7d2fe;line-height:1.5;max-height:120px;overflow:hidden;position:relative}
.hero .pb .pv::after{content:'';position:absolute;bottom:0;left:0;right:0;height:40px;background:linear-gradient(transparent,rgba(255,255,255,0.08))}
.copy-row{display:flex;gap:10px}
.hero .cb,.hero .cb2{display:inline-flex;align-items:center;gap:8px;background:#6366f1;color:#fff;border:none;padding:14px 20px;border-radius:8px;font-size:16px;font-weight:600;cursor:pointer;flex:1;justify-content:center;transition:background .15s}
.hero .cb:hover,.hero .cb2:hover{background:#4f46e5}
.hero .cb.d,.hero .cb2.d{background:#059669}
.hero .cb2{background:rgba(255,255,255,0.12);border:1px solid rgba(255,255,255,0.2)}
.hero .cb2:hover{background:rgba(255,255,255,0.2)}
.in{margin-top:24px;padding:20px 24px;background:rgba(255,255,255,0.06);border-radius:12px;border:1px solid rgba(255,255,255,0.1)}
.in h3{font-size:14px;font-weight:600;color:#a5b4fc;margin-bottom:12px;text-transform:uppercase;letter-spacing:.5px}
.in ul{list-style:none;padding:0;margin:0;display:grid;gap:10px}
.in li{display:flex;gap:12px;align-items:flex-start;font-size:14px;color:#e0e7ff;line-height:1.5}
.in li .n{display:inline-flex;align-items:center;justify-content:center;min-width:24px;height:24px;background:rgba(99,102,241,0.3);border-radius:50%;font-size:12px;font-weight:700;color:#a5b4fc;flex-shrink:0}
.in li code{background:rgba(255,255,255,0.1);padding:1px 6px;border-radius:4px;font-size:13px}
.hero .ref{margin-top:16px;font-size:13px;color:#7c8a9f;text-align:center}
.hero .ref code{background:rgba(255,255,255,0.08);padding:2px 8px;border-radius:4px;cursor:pointer;font-size:12px}
.hero .ref a{color:#a5b4fc;text-decoration:none}.hero .ref a:hover{text-decoration:underline}
.c{background:#fff;padding:32px 40px;border-radius:12px;box-shadow:0 1px 3px rgba(0,0,0,0.08)}
.c h1{font-size:28px;margin:0 0 16px;color:#1a1a2e}
.c h2{font-size:22px;margin:32px 0 12px;padding-bottom:8px;border-bottom:2px solid #e5e7eb}
.c h3{font-size:18px;margin:24px 0 8px;color:#374151}
.c h4{font-size:16px;margin:20px 0 6px;color:#374151}
.c p{margin:12px 0}
.c ul,.c ol{margin:8px 0 8px 24px}
.c li{margin:4px 0}
.c code{background:#f3f4f6;padding:2px 6px;border-radius:4px;font-size:.9em}
.c pre{background:#1a1a2e;color:#e5e7eb;padding:16px 20px;border-radius:8px;overflow-x:auto;margin:16px 0}
.c pre code{background:none;padding:0;font-size:14px}
.c blockquote{border-left:4px solid #6366f1;padding-left:16px;margin:16px 0;color:#6b7280}
.c table{width:100%;border-collapse:collapse;margin:16px 0;font-size:14px}
.c th,.c td{border:1px solid #e5e7eb;padding:8px 12px;text-align:left}
.c th{background:#f9fafb;font-weight:600}
.ft{text-align:center;padding:40px 24px;color:#9ca3af;font-size:13px}
.ft a{color:#6366f1;text-decoration:none}
@media(max-width:640px){.w{padding:0 12px 80px}.c{padding:20px}.c h1{font-size:22px}.hero{padding:24px 20px 32px}.hero h2{font-size:20px}.top{flex-direction:column;gap:6px;text-align:center}}
</style></head><body>
<div class="top"><h1>Interview Prep Cheat Sheet</h1>${isRoot ? `<span class="s">Share: <code onclick="cs()">${shareUrl}</code></span>` : `<span class="s"><code>${uuid}</code></span>`}</div>
<div class="w">${hero}<div class="c">${content}</div></div>
<div class="ft">Built from <a href="https://github.com/jkinman/interviewprep">interviewprep</a></div>
<span id="pt" style="display:none">${pEsc}</span>
<script>
function cp(){var b=document.querySelector('.hero .cb'),u='${shareUrl}';navigator.clipboard.writeText(u).then(function(){b.textContent='✅ Copied!';b.classList.add('d');setTimeout(function(){b.textContent='📋 Copy URL';b.classList.remove('d')},2000)}).catch(function(){b.textContent='❌ Failed';setTimeout(function(){b.textContent='📋 Copy URL';b.classList.remove('d')},3000)})}
function cpt(){var b=document.querySelector('.hero .cb2'),t=document.getElementById('pt').textContent;navigator.clipboard.writeText(t).then(function(){b.textContent='✅ Copied!';b.classList.add('d');setTimeout(function(){b.textContent='📝 Copy prompt text';b.classList.remove('d')},2000)}).catch(function(){b.textContent='❌ Failed';setTimeout(function(){b.textContent='📝 Copy prompt text';b.classList.remove('d')},3000)})}
function cs(){var e=document.querySelector('.top .s code');navigator.clipboard.writeText(e.textContent);e.textContent='Copied!';setTimeout(function(){e.textContent='${shareUrl}'},1500)}
</script></body></html>`;
}

app.get('/health', (req, res) => res.json({ ok: true }));

app.get('/:uuid?', (req, res) => {
  const uuid = req.params.uuid || 'index';
  const promptBlock = extractPrompt(cheatSheetRaw);
  const html = marked(cheatSheetRaw);
  res.send(renderPage(html, uuid, promptBlock));
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Interview Prep server running on http://0.0.0.0:${PORT}`);
  console.log(`Content loaded: ${cheatSheetRaw.length} bytes`);
});