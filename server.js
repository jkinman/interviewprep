const express = require('express');
const fs = require('fs');
const path = require('path');

let SG_LOGO_B64 = '';
try {
  const logoBuf = fs.readFileSync(path.join(__dirname, 'static', 'sugar-glider-logo-48.png'));
  SG_LOGO_B64 = logoBuf.toString('base64');
} catch (e) {
  console.warn('No logo found, skipping.');
}

const app = express();
const PORT = process.env.PORT || 8082;
const SKILL_CMD = 'npx skills add https://github.com/jkinman/interviewprep';

const CHEAT_SHEET_PATH = path.join(__dirname, 'content', 'cheat-sheet-prompt.md');
let cheatSheetRaw = '';
try { cheatSheetRaw = fs.readFileSync(CHEAT_SHEET_PATH, 'utf-8'); }
catch (e) { console.error('Failed to load cheat sheet:', e.message); process.exit(1); }

function extractPrompt(raw) {
  const m = raw.match(/```markdown\n([\s\S]*?)\n```/);
  return m ? m[1] : raw;
}

function renderPage() {
  const logo = SG_LOGO_B64
    ? `<img src="data:image/png;base64,${SG_LOGO_B64}" alt="">`
    : '';
  const promptJson = JSON.stringify(extractPrompt(cheatSheetRaw)).replace(/</g, '\\u003c');

  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>Interview Game Plan</title>
<meta name="description" content="Cryptic HR questions. How to answer them from your resume and the job description. Copy the prompt or install the skill.">
<style>
:root{
  --bg:#0A1230;--panel:#111C44;--panel2:#0E173A;--edge:#22306A;--edge2:#33468F;
  --ink:#F4F6FF;--mute:#AEB8DC;--dim:#7F8AB8;--faint:#5E6A9A;
  --hr:#2FE0FF;--story:#6BFF7A;--ask:#FF4FA3;--bad:#FF6464;--on:#0A1230;
  --display:"Barlow Condensed","Avenir Next Condensed","Roboto Condensed","Arial Narrow",sans-serif;
  --sans:system-ui,-apple-system,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;
  --mono:ui-monospace,"SF Mono",Menlo,Consolas,monospace}
*{box-sizing:border-box}
html{scroll-behavior:smooth}
body{margin:0;background:radial-gradient(1200px 600px at 85% -10%,#16245A 0%,transparent 60%),var(--bg);color:var(--ink);font:16px/1.5 var(--sans);-webkit-font-smoothing:antialiased}
a{color:inherit;text-decoration:none}
h1,h2,.disp{font-family:var(--display);font-weight:800}
nav.top{position:sticky;top:0;z-index:20;display:flex;gap:2px;align-items:center;flex-wrap:wrap;padding:8px 28px;background:rgba(10,18,48,.86);backdrop-filter:blur(10px);border-bottom:2px solid var(--edge);font:700 13px var(--mono);letter-spacing:.04em}
nav.top .brand{display:flex;align-items:center;gap:8px;font:800 20px var(--display);letter-spacing:1px;margin-right:14px}
nav.top .brand i{font-style:normal;color:var(--hr)}
nav.top .brand img{width:26px;height:26px;border-radius:6px}
nav.top a{color:var(--mute);padding:5px 10px;border-radius:7px}
nav.top a:hover{color:var(--ink);background:var(--panel)}
main{max-width:1100px;margin:0 auto;padding:28px 28px 64px;position:relative}
.mascot{position:absolute;right:28px;top:8px;height:92px}
.hdr{display:flex;align-items:flex-end;justify-content:space-between;gap:20px;flex-wrap:wrap;padding-right:110px}
.kicker{font:700 12px var(--mono);letter-spacing:.16em;color:var(--dim)}
h1{font-size:clamp(46px,6vw,68px);line-height:.92;margin:6px 0 4px;letter-spacing:1px}
h1 span{color:var(--hr)}
.sub{font-size:clamp(22px,2.6vw,28px);font-weight:650;color:var(--ink);max-width:760px;line-height:1.3;margin:12px 0 0}
.sub b{color:var(--hr);font-weight:800}
.rule{font:700 22px var(--display);background:#1A2A66;border:2px solid #2C3F8F;border-radius:10px;padding:8px 14px;white-space:nowrap}
.rule b{color:var(--story)}
.tailor{color:var(--mute);font-size:15px;margin:16px 0 0}
.actions{display:flex;flex-wrap:wrap;gap:14px;align-items:center;margin-top:18px}
.or{font:800 20px var(--display);letter-spacing:.12em;color:var(--ink);text-transform:uppercase}
button.copy,a.copy{font:800 22px var(--display);letter-spacing:.4px;color:var(--on);background:var(--hr);border:0;border-radius:10px;padding:10px 18px;cursor:pointer}
a.copy.skill{background:var(--story)}
button.copy:hover{background:#8CEFFF}
button.copy.done{background:var(--story)}
.url{font:700 14px var(--mono);color:var(--ink);background:var(--panel2);border:2px solid var(--edge);border-radius:10px;padding:10px 14px}
.phases{display:grid;grid-template-columns:1fr auto 1fr;gap:14px;align-items:stretch;margin-top:28px}
.choice-or{align-self:center;font:800 28px var(--display);letter-spacing:.14em;color:var(--ink)}
.pcard{background:var(--panel);border-radius:16px;border-top:8px solid var(--c);padding:14px 16px 16px;display:flex;flex-direction:column;min-width:0}
.pcard h2{margin:0;font-size:28px;line-height:1;color:var(--c);text-transform:uppercase;letter-spacing:.5px}
.n{display:inline-block;min-width:30px;margin-right:8px;color:var(--on);background:var(--c);border-radius:6px;text-align:center;padding:0 6px}
.by{margin-top:10px;font-size:15px;font-weight:700;color:var(--on);background:var(--c);border-radius:8px;padding:6px 10px;line-height:1.25}
.pcard ul{list-style:none;margin:14px 0 0;padding:0}
.pcard li{font-size:15.5px;line-height:1.3;padding-left:18px;position:relative;margin:0 0 8px}
.pcard li:before{content:"";position:absolute;left:2px;top:7px;width:8px;height:8px;border-radius:2px;background:var(--c)}
.cmd{margin-top:14px;font:700 15px/1.4 var(--mono);color:var(--ink);background:var(--panel2);border:2px solid var(--hr);border-radius:10px;padding:14px 18px}
.cmd span{display:block}
.pcard button.copy{margin-top:12px;align-self:flex-start;font-size:18px;padding:8px 14px;background:var(--c);color:var(--on)}
.pcard button.copy:hover{filter:brightness(1.08)}
.note{margin-top:auto;padding-top:12px;font-size:14px;color:var(--mute)}
.plug{display:flex;justify-content:space-between;align-items:center;gap:16px;flex-wrap:wrap;margin-top:22px;padding:16px 18px;border-radius:14px;background:var(--panel);border:2px solid var(--ask);color:var(--ink);font:800 26px/1.15 var(--display);letter-spacing:.3px}
.plug b{color:var(--ask)}
.plug .go{font:700 13px var(--mono);color:var(--ask);letter-spacing:.06em}
.plug:hover{background:#241433}
footer{margin-top:28px;padding-top:16px;border-top:2px solid var(--edge);color:var(--faint);font-size:13px}
footer a{color:var(--mute)}
footer a:hover{color:var(--ink)}
@media(max-width:900px){
  .phases{grid-template-columns:1fr}
  .choice-or{text-align:center}
  .hdr{padding-right:0}
  .mascot{display:none}
  .rule{white-space:normal}
}
@media(max-width:640px){
  nav.top,main{padding-left:14px;padding-right:14px}
  h1{font-size:42px}
}
</style>
</head>
<body>
<nav class="top">
  <span class="brand">${logo}INTERVIEW <i>·</i> GAME PLAN</span>
  <a href="#prompt">Copy prompt</a>
  <a href="#skill">Install skill</a>
</nav>
<main>
  <header class="hero">
    <svg class="mascot" viewBox="0 0 100 100" aria-hidden="true"><rect x="6" y="10" width="78" height="56" rx="14" fill="#111C44" stroke="#2FE0FF" stroke-width="4"/><path d="M26 66 L22 88 L46 66" fill="#111C44" stroke="#2FE0FF" stroke-width="4" stroke-linejoin="round"/><path d="M45 22 L49.5 33 L61 33.5 L52 40.5 L55 52 L45 45.5 L35 52 L38 40.5 L29 33.5 L40.5 33 Z" fill="#6BFF7A"/><circle cx="86" cy="18" r="9" fill="#FF4FA3"/><circle cx="92" cy="74" r="5" fill="#FFB020"/></svg>
    <div class="hdr">
      <div>
        <div class="kicker">INTERVIEW PREP · SUGAR GLIDER</div>
        <h1>INTERVIEW <span>·</span> GAME PLAN</h1>
        <p class="sub"><b>Cryptic HR questions.</b> How to answer them from your resume and the job description.</p>
      </div>
      <div class="rule">Copy the prompt <b>or</b> install the skill.</div>
    </div>
    <p class="tailor">Pick one. Then send your resume and the job description.</p>
    <div class="actions">
      <button class="copy" type="button" id="copy-prompt">Copy prompt</button>
      <span class="or">or</span>
      <a class="copy skill" href="#skill">Install skill</a>
    </div>
  </header>
  <div class="phases">
    <article class="pcard" id="prompt" style="--c:var(--hr)">
      <h2>Copy the prompt</h2>
      <div class="by">Paste it into Claude, ChatGPT, or any AI.</div>
      <ul>
        <li>Copy the prompt</li>
        <li>Paste it into the chat</li>
        <li>Send your resume and the job description</li>
        <li>It opens the page for you</li>
      </ul>
      <button class="copy" type="button" id="copy-prompt-card">Copy prompt</button>
      <p class="note">You get a dark poster: a map, ten spoken answers, a story bank, and a one-screen quick reference.</p>
    </article>
    <div class="choice-or">OR</div>
    <article class="pcard" id="skill" style="--c:var(--story)">
      <h2>Install the skill</h2>
      <div class="by">For Claude, Cursor, and other agents.</div>
      <code class="cmd"><span>npx skills add</span><span>https://github.com/<br>jkinman/interviewprep</span></code>
      <button class="copy" type="button" id="copy-cmd" data-copy="${SKILL_CMD}">Copy command</button>
      <p class="note">Run that once. Then ask for an interview game plan and give it your resume and the job description.</p>
    </article>
  </div>
  <a class="plug" href="https://sugarglider.work">
    <span>Land the job. Let <b>Sugar Glider</b> do the work.</span>
    <span class="go">sugarglider.work</span>
  </a>
  <footer>
    <a href="https://github.com/jkinman/interviewprep">interviewprep</a>
    · a <a href="https://sugarglider.work">Sugar Glider</a> tool
  </footer>
</main>
<script type="application/json" id="prompt-json">${promptJson}</script>
<script>
function copyText(b, text){
  var label = b.getAttribute('data-label') || b.textContent;
  b.setAttribute('data-label', label);
  function mark(word){
    b.textContent = word;
    b.classList.add('done');
    setTimeout(function(){ b.textContent = label; b.classList.remove('done'); }, 1600);
  }
  navigator.clipboard.writeText(text).then(function(){ mark('Copied'); }).catch(function(){ mark('Copy failed'); });
}
var promptText = JSON.parse(document.getElementById('prompt-json').textContent);
document.getElementById('copy-prompt').addEventListener('click', function(){ copyText(this, promptText); });
document.getElementById('copy-prompt-card').addEventListener('click', function(){ copyText(this, promptText); });
document.getElementById('copy-cmd').addEventListener('click', function(){ copyText(this, this.getAttribute('data-copy')); });
</script>
</body>
</html>`;
}

app.get('/health', (req, res) => res.json({ ok: true }));
app.get('/prompt', (req, res) => {
  res.type('text/plain; charset=utf-8');
  res.send(extractPrompt(cheatSheetRaw));
});
app.use('/static', express.static(path.join(__dirname, 'static')));
app.get('/:uuid?', (req, res) => {
  res.type('html');
  res.send(renderPage());
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Interview Prep on http://0.0.0.0:${PORT}`);
});
