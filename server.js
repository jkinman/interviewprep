const express = require('express');
const fs = require('fs');
const path = require('path');
const { marked } = require('marked');
const hljs = require('highlight.js');
const { v4: uuidv4 } = require('uuid');

let SG_LOGO_B64 = '';
try {
  const logoBuf = fs.readFileSync(path.join(__dirname, 'static', 'sugar-glider-logo-48.png'));
  SG_LOGO_B64 = logoBuf.toString('base64');
  console.log(`Logo loaded: ${SG_LOGO_B64.length}b64`);
} catch (e) {
  console.warn('No logo found, skipping.');
}

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

function renderPage(content, uuid, promptBlock) {
  const isRoot = uuid === 'index';
  const shareUrl = `https://interviewprep.kinman.dev/${uuid}`;
  const newId = uuidv4().split('-')[0];
  const pEsc = promptBlock.replace(/\\/g, '\\\\').replace(/`/g, '\\`').replace(/\$/g, '\\$').replace(/<\/script>/g, '<\\/script>');

  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>Interview Prep · Sugar Glider</title>
<style>
:root{
  --bg:#0A1230;--panel:#111C44;--panel2:#0E173A;--edge:#22306A;--ink:#F4F6FF;--mute:#AEB8DC;--dim:#7F8AB8;
  --hr:#2FE0FF;--beh:#B98BFF;--story:#6BFF7A;--ask:#FF4FA3;--gap:#FFB020;--bad:#FF6464;
  --fd:"Barlow Condensed","Avenir Next Condensed","Roboto Condensed","Arial Narrow",sans-serif;
  --fb:system-ui,-apple-system,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;
  --fm:ui-monospace,"SF Mono",Menlo,Consolas,monospace;
}
*{margin:0;padding:0;box-sizing:border-box}
html{background:var(--bg)}body{font:15px/1.6 var(--fb);color:var(--ink);background:radial-gradient(1000px 500px at 80% -10%,#16245A 0%,transparent 60%),var(--bg);-webkit-font-smoothing:antialiased;min-height:100vh}
a{color:var(--hr);text-decoration:none}a:hover{opacity:.85}
code,.mono{font-family:var(--fm);font-size:.9em}
.nav{position:sticky;top:0;z-index:100;display:flex;align-items:center;gap:12px;padding:10px 28px;background:rgba(10,18,48,.88);backdrop-filter:blur(10px);border-bottom:1px solid var(--edge);font-family:var(--fm);font-size:12px}
.nav-brand{display:flex;align-items:center;gap:8px;font-family:var(--fd);font-size:18px;font-weight:800;letter-spacing:.5px;margin-right:auto}
.nav-brand img{width:26px;height:26px;border-radius:4px}
.nav-brand i{font-style:normal;color:var(--hr)}
.nav a{color:var(--mute);padding:4px 10px;border-radius:6px}
.nav a:hover{color:var(--ink);background:var(--panel)}
.nav .share{color:var(--dim);margin-left:8px}
.nav .share code{background:var(--panel2);padding:2px 8px;border-radius:4px;cursor:pointer;border:1px solid var(--edge);color:var(--mute);font-size:11px}
.hero{max-width:1100px;margin:0 auto;padding:40px 28px 20px;text-align:center}
.hero .kicker{font:700 11px var(--fm);letter-spacing:.18em;color:var(--dim);margin-bottom:4px}
.hero h1{font:800 clamp(32px,5vw,52px)/.95 var(--fd);letter-spacing:1px;margin:4px 0 6px}
.hero h1 span{color:var(--hr)}
.hero .sub{font-size:17px;color:var(--mute);margin-bottom:28px}
.hero .sub strong{color:var(--ink)}
.btn-row{display:flex;gap:10px;justify-content:center;flex-wrap:wrap;margin-bottom:16px}
.btn{display:inline-flex;align-items:center;gap:8px;padding:14px 28px;border-radius:8px;font:600 15px var(--fb);border:0;cursor:pointer;transition:all .15s;min-width:180px;justify-content:center}
.btn-p{background:var(--hr);color:#0A1230}.btn-p:hover{background:#8CEFFF}
.btn-s{background:var(--panel);color:var(--ink);border:1px solid var(--edge)}.btn-s:hover{background:var(--panel2);border-color:var(--dim)}
.btn.done{background:var(--story);color:#0A1230}
.instructions{max-width:700px;margin:20px auto 0;padding:24px 28px;background:var(--panel);border:1px solid var(--edge);border-radius:12px;text-align:left}
.instructions h3{font:700 13px var(--fm);letter-spacing:.12em;color:var(--hr);text-transform:uppercase;margin-bottom:14px}
.instructions ul{list-style:none;display:grid;gap:10px}
.instructions li{display:flex;gap:12px;font-size:14px;color:var(--mute);line-height:1.5}
.instructions li .num{display:inline-flex;align-items:center;justify-content:center;min-width:24px;height:24px;background:rgba(47,224,255,0.15);border-radius:50%;font:700 12px var(--fm);color:var(--hr);flex-shrink:0}
.instructions li code{background:var(--panel2);padding:1px 6px;border-radius:4px;font-family:var(--fm);font-size:12px;border:1px solid var(--edge)}
.instructions .note{margin-top:12px;padding:10px 14px;background:var(--panel2);border-radius:8px;font-size:13px;color:var(--dim);border:1px dashed var(--edge)}
.skill-box{margin-top:16px;padding:12px 16px;background:var(--panel2);border-radius:8px;font-size:12px;color:var(--dim);text-align:center;border:1px solid var(--edge)}
.skill-box code{background:var(--panel);padding:2px 8px;border-radius:4px;cursor:pointer;font-family:var(--fm);border:1px solid var(--edge)}
.share-row{text-align:center;margin-top:16px;font-size:13px;color:var(--dim)}
.share-row code{background:var(--panel2);padding:2px 8px;border-radius:4px;cursor:pointer;font-family:var(--fm);border:1px solid var(--edge);color:var(--mute)}
.share-row a{color:var(--hr);margin:0 4px}
.content{max-width:880px;margin:20px auto 60px;padding:0 28px}
.content h1{font:800 28px var(--fd);color:var(--hr);margin:28px 0 8px}
.content h2{font:700 22px var(--fd);color:var(--beh);margin:24px 0 8px;padding-bottom:6px;border-bottom:1px solid var(--edge)}
.content h3{font:700 18px var(--fd);color:var(--ink);margin:20px 0 6px}
.content h4{font:700 15px var(--fd);color:var(--mute);margin:16px 0 4px}
.content p{margin:10px 0;color:var(--mute)}
.content ul,.content ol{margin:6px 0 6px 20px}
.content li{margin:3px 0;color:var(--mute)}
.content code{background:var(--panel2);padding:1px 6px;border-radius:4px;font-size:.85em;border:1px solid var(--edge);color:var(--hr)}
.content pre{background:var(--panel2);padding:14px 18px;border-radius:8px;overflow-x:auto;margin:12px 0;border:1px solid var(--edge)}
.content pre code{background:none;border:0;padding:0;color:var(--ink)}
.content blockquote{border-left:3px solid var(--hr);padding-left:14px;margin:12px 0;color:var(--dim)}
.content table{width:100%;border-collapse:collapse;margin:12px 0;font-size:13px}
.content th,.content td{border:1px solid var(--edge);padding:6px 10px;text-align:left;color:var(--mute)}
.content th{background:var(--panel);font-weight:600;color:var(--ink)}
.content strong{color:var(--ink)}
.content em{color:var(--dim)}
.ft{text-align:center;padding:32px 24px 48px;color:var(--dim);font-size:12px;border-top:1px solid var(--edge);max-width:1100px;margin:0 auto}
.ft a{color:var(--mute)}.ft a:hover{color:var(--ink)}
@media(max-width:640px){
  .nav{padding:8px 14px;flex-wrap:wrap;gap:6px}
  .hero{padding:24px 14px 16px}
  .hero h1{font-size:28px}
  .btn{min-width:0;width:100%;padding:12px 16px;font-size:14px}
  .content{padding:0 14px}
  .instructions{padding:16px}
}
</style>
</head>
<body>
<div class="nav">
  <div class="nav-brand">
    <img src="data:image/png;base64,${SG_LOGO_B64}" alt="">
    <span>Sugar Glider <i>·</i> Interview Prep</span>
  </div>
  <a href="#how">How to use</a>
  ${isRoot ? `<span class="share">Share: <code onclick="cs()">${shareUrl}</code></span>` : `<span class="share"><code>${uuid}</code></span>`}
</div>
<div class="hero">
  <div class="kicker">INTERVIEW PREP · ${new Date().toISOString().slice(0,10)}</div>
  <h1>INTERVIEW · <span>GAME PLAN</span></h1>
  <p class="sub">Paste this link into <strong>Claude</strong>, <strong>ChatGPT</strong>, or any AI &rarr; it asks for your resume &rarr; produces a gorgeous HTML cheat sheet with a game-plan map, story bank, and spoken drafts.</p>
  <div class="btn-row">
    <button class="btn btn-p" onclick="cpl()">📋 Copy URL</button>
    <button class="btn btn-s" onclick="cpt()">📝 Copy as skill text</button>
  </div>
  <div class="instructions" id="how">
    <h3>▸ How to use</h3>
    <ul>
      <li><span class="num">1</span> Click <strong>Copy URL</strong> (if your AI can browse) or <strong>Copy as skill text</strong> (works everywhere).</li>
      <li><span class="num">2</span> Paste into <strong>Claude, ChatGPT, Grok, or any LLM</strong>.</li>
      <li><span class="num">3</span> The AI asks for your <strong>resume or LinkedIn</strong> (1 message).</li>
      <li><span class="num">4</span> Then asks about the <strong>job description &amp; company</strong> if you have one.</li>
      <li><span class="num">5</span> Then asks <strong>1–3 short clarifying questions</strong> about format.</li>
      <li><span class="num">6</span> AI generates a <strong>dark-navy interactive HTML cheat sheet</strong> — game-plan map, 10 questions with spoken drafts, story bank, quick reference.</li>
    </ul>
    <div class="note">💡 On phone? Tap <strong>"Copy as skill text"</strong> — paste into any AI chat app. The full prompt fits in one message.</div>
  </div>
  <div class="skill-box">
    Install as a reusable CLI skill: <code onclick="navigator.clipboard.writeText('npx skills add @jkinman/interviewprep')">npx skills add @jkinman/interviewprep</code>
  </div>
  <div class="share-row">
    Share: <code onclick="navigator.clipboard.writeText(this.textContent)">${shareUrl}</code>
    ${isRoot ? `· <a href="/${newId}">New share link</a>` : `· <a href="/">Home</a>`}
  </div>
</div>
<div class="content">
${content}
</div>
<div class="ft">
  <a href="https://github.com/jkinman/interviewprep">interviewprep</a> · a <a href="https://sugarglider.work">Sugar Glider</a> tool
</div>
<span id="pt" style="display:none">${pEsc}</span>
<script>
function cpl(){var b=document.querySelector('.btn-p'),u='${shareUrl}';navigator.clipboard.writeText(u).then(function(){b.textContent='✅ Copied!';b.classList.add('done');setTimeout(function(){b.textContent='📋 Copy URL';b.classList.remove('done')},2000)}).catch(function(){b.textContent='❌ Failed';setTimeout(function(){b.textContent='📋 Copy URL';b.classList.remove('done')},3000)})}
function cpt(){var b=document.querySelector('.btn-s'),t=document.getElementById('pt').textContent;navigator.clipboard.writeText(t).then(function(){b.textContent='✅ Copied!';b.classList.add('done');setTimeout(function(){b.textContent='📝 Copy as skill text';b.classList.remove('done')},2000)}).catch(function(){b.textContent='❌ Failed';setTimeout(function(){b.textContent='📝 Copy as skill text';b.classList.remove('done')},3000)})}
function cs(){var e=document.querySelector('.nav .share code');navigator.clipboard.writeText(e.textContent);e.textContent='Copied!';setTimeout(function(){e.textContent='${shareUrl}'},1500)}
</script>
</body>
</html>`;
}

app.get('/health', (req, res) => res.json({ ok: true }));
app.use('/static', express.static(path.join(__dirname, 'static')));

app.get('/:uuid?', (req, res) => {
  const uuid = req.params.uuid || 'index';
  const promptBlock = extractPrompt(cheatSheetRaw);
  const html = marked(cheatSheetRaw);
  res.send(renderPage(html, uuid, promptBlock));
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Interview Prep on http://0.0.0.0:${PORT}`);
  console.log(`Content: ${cheatSheetRaw.length}b`);
});