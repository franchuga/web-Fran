# Portfolio Web Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a 4-page professional portfolio website for Francesc Guillemat Arrabal with Dark Pro styling, no build tools, and a playable Pong game.

**Architecture:** Multi-page static site (pure HTML/CSS/JS). One shared `style.css` with CSS custom properties for the Dark Pro theme. Each HTML page imports that stylesheet and shares the same navbar/footer structure. No frameworks, no dependencies beyond optional Google Fonts.

**Tech Stack:** HTML5, CSS3 (custom properties, grid, flexbox), vanilla JavaScript (Canvas API for Pong)

---

## File Map

| File | Responsibility |
|---|---|
| `style.css` | All shared styles: reset, CSS vars, navbar, footer, buttons, badges, cards, timeline, responsive |
| `index.html` | Hero section with name, title, tech badges, two CTA buttons |
| `proyectos.html` | Project cards grid (3 cards) |
| `estudios.html` | Vertical education timeline (2 entries) |
| `game.html` | Pong canvas game with score and controls |

---

### Task 1: style.css — Base, variables, navbar, footer

**Files:**
- Create: `style.css`

- [ ] **Step 1: Write style.css with CSS variables, reset, navbar and footer**

```css
/* style.css */
*, *::before, *::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

:root {
  --bg:        #0d1117;
  --surface:   #161b22;
  --border:    #21262d;
  --accent:    #58a6ff;
  --accent-dim:#1f6feb;
  --text:      #c9d1d9;
  --text-dim:  #8b949e;
  --green:     #3fb950;
  --font-sans: 'Segoe UI', system-ui, sans-serif;
  --font-mono: 'Courier New', monospace;
}

html { scroll-behavior: smooth; }

body {
  background: var(--bg);
  color: var(--text);
  font-family: var(--font-sans);
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

a { color: var(--accent); text-decoration: none; }
a:hover { text-decoration: underline; }

/* ── Navbar ── */
.navbar {
  position: sticky;
  top: 0;
  z-index: 100;
  background: var(--surface);
  border-bottom: 1px solid var(--border);
  padding: 0 2rem;
  height: 56px;
  display: flex;
  align-items: center;
  gap: 2rem;
}

.navbar__logo {
  font-family: var(--font-mono);
  font-weight: 700;
  font-size: 1.1rem;
  color: var(--accent);
  letter-spacing: 1px;
}

.navbar__links {
  margin-left: auto;
  display: flex;
  gap: 1.5rem;
  list-style: none;
}

.navbar__links a {
  color: var(--text-dim);
  font-size: 0.9rem;
  transition: color 0.2s;
}

.navbar__links a:hover,
.navbar__links a.active {
  color: var(--text);
  text-decoration: none;
}

/* ── Footer ── */
.footer {
  margin-top: auto;
  background: var(--surface);
  border-top: 1px solid var(--border);
  text-align: center;
  padding: 1.25rem;
  color: var(--text-dim);
  font-size: 0.8rem;
}

/* ── Buttons ── */
.btn {
  display: inline-block;
  padding: 0.6rem 1.4rem;
  border-radius: 6px;
  font-size: 0.9rem;
  font-weight: 600;
  cursor: pointer;
  transition: opacity 0.2s, background 0.2s;
  border: none;
}

.btn-primary {
  background: var(--accent);
  color: #0d1117;
}

.btn-primary:hover {
  opacity: 0.85;
  text-decoration: none;
  color: #0d1117;
}

.btn-secondary {
  background: transparent;
  color: var(--accent);
  border: 1px solid var(--accent);
}

.btn-secondary:hover {
  background: var(--accent-dim);
  color: var(--text);
  text-decoration: none;
}

/* ── Tech badges ── */
.badges {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.badge {
  background: var(--surface);
  border: 1px solid var(--border);
  color: var(--text);
  font-family: var(--font-mono);
  font-size: 0.78rem;
  padding: 0.25rem 0.7rem;
  border-radius: 20px;
}

/* ── Page title ── */
.page-header {
  padding: 3rem 2rem 1.5rem;
  max-width: 900px;
  margin: 0 auto;
  width: 100%;
}

.page-header h1 {
  font-size: 2rem;
  color: var(--text);
}

.page-header h1 span {
  color: var(--accent);
}

/* ── Project cards ── */
.cards-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
  gap: 1.5rem;
  padding: 0 2rem 3rem;
  max-width: 900px;
  margin: 0 auto;
  width: 100%;
}

.card {
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: 8px;
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  transition: border-color 0.2s;
}

.card:hover { border-color: var(--accent); }

.card__title {
  font-size: 1rem;
  font-weight: 700;
  color: var(--text);
}

.card__desc {
  color: var(--text-dim);
  font-size: 0.88rem;
  line-height: 1.5;
  flex: 1;
}

/* ── Timeline ── */
.timeline {
  padding: 0 2rem 3rem;
  max-width: 700px;
  margin: 0 auto;
  width: 100%;
  position: relative;
}

.timeline::before {
  content: '';
  position: absolute;
  left: 2.5rem;
  top: 0;
  bottom: 0;
  width: 2px;
  background: var(--border);
}

.timeline-item {
  position: relative;
  padding-left: 4rem;
  margin-bottom: 2.5rem;
}

.timeline-item::before {
  content: '';
  position: absolute;
  left: calc(2.5rem - 6px);
  top: 6px;
  width: 14px;
  height: 14px;
  border-radius: 50%;
  background: var(--accent);
  border: 2px solid var(--bg);
}

.timeline-item__years {
  font-family: var(--font-mono);
  font-size: 0.78rem;
  color: var(--accent);
  margin-bottom: 0.3rem;
}

.timeline-item__title {
  font-size: 1rem;
  font-weight: 700;
  color: var(--text);
}

.timeline-item__school {
  font-size: 0.85rem;
  color: var(--text-dim);
  margin-top: 0.25rem;
}

.timeline-item__tag {
  display: inline-block;
  margin-top: 0.5rem;
  font-size: 0.75rem;
  color: var(--green);
  border: 1px solid var(--green);
  padding: 0.1rem 0.5rem;
  border-radius: 3px;
}

/* ── Responsive ── */
@media (max-width: 768px) {
  .navbar { padding: 0 1rem; gap: 1rem; }
  .navbar__links { gap: 1rem; }
  .page-header { padding: 2rem 1rem 1rem; }
  .cards-grid { padding: 0 1rem 2rem; }
  .timeline { padding: 0 1rem 2rem; }
}
```

- [ ] **Step 2: Open index.html in browser and verify CSS file loads without errors (no 404 in devtools)**

---

### Task 2: index.html — Home / Hero

**Files:**
- Modify: `index.html`

- [ ] **Step 1: Write index.html**

```html
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Francesc Guillemat — Desarrollador Web</title>
  <link rel="stylesheet" href="style.css">
  <style>
    .hero {
      flex: 1;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      text-align: center;
      padding: 4rem 2rem;
      gap: 1.25rem;
    }

    .hero__label {
      font-family: var(--font-mono);
      font-size: 0.82rem;
      color: var(--text-dim);
      letter-spacing: 2px;
      text-transform: uppercase;
    }

    .hero__name {
      font-size: clamp(2rem, 5vw, 3.5rem);
      font-weight: 800;
      color: var(--text);
      line-height: 1.1;
    }

    .hero__title {
      font-size: clamp(1rem, 2.5vw, 1.3rem);
      color: var(--accent);
      font-weight: 400;
    }

    .hero__actions {
      display: flex;
      gap: 1rem;
      flex-wrap: wrap;
      justify-content: center;
      margin-top: 0.5rem;
    }
  </style>
</head>
<body>
  <nav class="navbar">
    <span class="navbar__logo">FGA</span>
    <ul class="navbar__links">
      <li><a href="index.html" class="active">Inicio</a></li>
      <li><a href="proyectos.html">Proyectos</a></li>
      <li><a href="estudios.html">Estudios</a></li>
      <li><a href="game.html">Jugar</a></li>
    </ul>
  </nav>

  <main class="hero">
    <p class="hero__label">Portfolio</p>
    <h1 class="hero__name">Francesc Guillemat Arrabal</h1>
    <p class="hero__title">Desarrollador de Aplicaciones Web</p>
    <div class="badges">
      <span class="badge">HTML</span>
      <span class="badge">CSS</span>
      <span class="badge">JavaScript</span>
      <span class="badge">SQL</span>
      <span class="badge">Java</span>
    </div>
    <div class="hero__actions">
      <a href="proyectos.html" class="btn btn-primary">Ver proyectos</a>
      <a href="game.html" class="btn btn-secondary">Jugar al Pong</a>
    </div>
  </main>

  <footer class="footer">
    <p>Francesc Guillemat Arrabal &mdash; 2025</p>
  </footer>
</body>
</html>
```

- [ ] **Step 2: Open index.html in browser. Verify:**
  - Dark background visible
  - Name and title centered
  - 5 tech badges displayed
  - Both buttons visible and styled
  - Navbar links visible (other pages will 404 until built — that is expected)

---

### Task 3: proyectos.html — Project cards

**Files:**
- Create: `proyectos.html`

- [ ] **Step 1: Create proyectos.html**

```html
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Proyectos — Francesc Guillemat</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <nav class="navbar">
    <span class="navbar__logo">FGA</span>
    <ul class="navbar__links">
      <li><a href="index.html">Inicio</a></li>
      <li><a href="proyectos.html" class="active">Proyectos</a></li>
      <li><a href="estudios.html">Estudios</a></li>
      <li><a href="game.html">Jugar</a></li>
    </ul>
  </nav>

  <div class="page-header">
    <h1><span>//</span> Proyectos</h1>
  </div>

  <main class="cards-grid">

    <article class="card">
      <h2 class="card__title">Web del Institut</h2>
      <p class="card__desc">
        Redisseny de la web del centre educatiu utilitzant WordPress.
        Creació de la identitat visual, estructura de continguts i adaptació per a dispositius mobils.
      </p>
      <div class="badges">
        <span class="badge">WordPress</span>
        <span class="badge">CSS</span>
      </div>
    </article>

    <article class="card">
      <h2 class="card__title">Sistema de Fitxatges</h2>
      <p class="card__desc">
        Aplicació de control de presencia que registra entrades i sortides i sincronitza les dades automaticament amb Google Sheets.
      </p>
      <div class="badges">
        <span class="badge">JavaScript</span>
        <span class="badge">Google Sheets API</span>
      </div>
    </article>

    <article class="card">
      <h2 class="card__title">App de Pedidos</h2>
      <p class="card__desc">
        Aplicacion de gestion de pedidos con interfaz de usuario, base de datos relacional y logica de negocio en backend.
      </p>
      <div class="badges">
        <span class="badge">Java</span>
        <span class="badge">SQL</span>
      </div>
    </article>

  </main>

  <footer class="footer">
    <p>Francesc Guillemat Arrabal &mdash; 2025</p>
  </footer>
</body>
</html>
```

- [ ] **Step 2: Open proyectos.html in browser. Verify:**
  - 3 cards displayed in a grid
  - Cards have dark surface with border
  - Border turns blue on hover
  - Badges visible inside each card
  - Navbar "Proyectos" link is highlighted

---

### Task 4: estudios.html — Education timeline

**Files:**
- Create: `estudios.html`

- [ ] **Step 1: Create estudios.html**

```html
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Estudios — Francesc Guillemat</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <nav class="navbar">
    <span class="navbar__logo">FGA</span>
    <ul class="navbar__links">
      <li><a href="index.html">Inicio</a></li>
      <li><a href="proyectos.html">Proyectos</a></li>
      <li><a href="estudios.html" class="active">Estudios</a></li>
      <li><a href="game.html">Jugar</a></li>
    </ul>
  </nav>

  <div class="page-header">
    <h1><span>//</span> Formació</h1>
  </div>

  <main class="timeline">

    <div class="timeline-item">
      <p class="timeline-item__years">2023 &ndash; 2025</p>
      <h2 class="timeline-item__title">Sistemes Microinformatics i Xarxes</h2>
      <p class="timeline-item__school">Institut Francesc Vidal i Barraquer</p>
      <span class="timeline-item__tag">Completat</span>
    </div>

    <div class="timeline-item">
      <p class="timeline-item__years">2025 &ndash; 2027</p>
      <h2 class="timeline-item__title">Desenvolupament d&rsquo;Aplicacions Web</h2>
      <p class="timeline-item__school">Institut Francesc Vidal i Barraquer</p>
      <span class="timeline-item__tag">En curs</span>
    </div>

  </main>

  <footer class="footer">
    <p>Francesc Guillemat Arrabal &mdash; 2025</p>
  </footer>
</body>
</html>
```

- [ ] **Step 2: Open estudios.html in browser. Verify:**
  - Vertical line visible on the left
  - Two blue dot markers on the line
  - Year labels in accent color
  - "Completat" and "En curs" tags visible in green

---

### Task 5: game.html — Pong

**Files:**
- Create: `game.html`

- [ ] **Step 1: Create game.html**

```html
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Pong — Francesc Guillemat</title>
  <link rel="stylesheet" href="style.css">
  <style>
    .game-wrapper {
      flex: 1;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      padding: 2rem;
      gap: 1.5rem;
    }

    .game-title {
      font-family: var(--font-mono);
      font-size: 1rem;
      color: var(--text-dim);
      letter-spacing: 3px;
      text-transform: uppercase;
    }

    #pongCanvas {
      border: 2px solid var(--border);
      border-radius: 6px;
      display: block;
      background: #000;
    }

    .game-controls {
      color: var(--text-dim);
      font-size: 0.82rem;
      text-align: center;
      font-family: var(--font-mono);
    }

    .game-score {
      font-family: var(--font-mono);
      font-size: 1.4rem;
      color: var(--text);
      letter-spacing: 4px;
    }
  </style>
</head>
<body>
  <nav class="navbar">
    <span class="navbar__logo">FGA</span>
    <ul class="navbar__links">
      <li><a href="index.html">Inicio</a></li>
      <li><a href="proyectos.html">Proyectos</a></li>
      <li><a href="estudios.html">Estudios</a></li>
      <li><a href="game.html" class="active">Jugar</a></li>
    </ul>
  </nav>

  <div class="game-wrapper">
    <p class="game-title">Pong</p>
    <div class="game-score">
      <span id="scorePlayer">0</span>
      &nbsp;&mdash;&nbsp;
      <span id="scoreCpu">0</span>
    </div>
    <canvas id="pongCanvas" width="640" height="400"></canvas>
    <p class="game-controls">W / S &nbsp;&nbsp;o&nbsp;&nbsp; Arriba / Abajo &nbsp;&nbsp;para mover &nbsp;&nbsp;|&nbsp;&nbsp; Pulsa cualquier tecla para empezar</p>
    <a href="index.html" class="btn btn-secondary">Volver al inicio</a>
  </div>

  <footer class="footer">
    <p>Francesc Guillemat Arrabal &mdash; 2025</p>
  </footer>

  <script>
    const canvas = document.getElementById('pongCanvas');
    const ctx = canvas.getContext('2d');
    const scorePlayerEl = document.getElementById('scorePlayer');
    const scoreCpuEl = document.getElementById('scoreCpu');

    const W = canvas.width;
    const H = canvas.height;
    const PADDLE_W = 12;
    const PADDLE_H = 80;
    const BALL_SIZE = 10;
    const PADDLE_SPEED = 5;
    const CPU_SPEED = 3.5;
    const BALL_START_SPEED = 4;

    let started = false;
    let scorePlayer = 0;
    let scoreCpu = 0;

    const player = { x: 20, y: H / 2 - PADDLE_H / 2, w: PADDLE_W, h: PADDLE_H, dy: 0 };
    const cpu    = { x: W - 20 - PADDLE_W, y: H / 2 - PADDLE_H / 2, w: PADDLE_W, h: PADDLE_H };

    const ball = { x: W / 2, y: H / 2, vx: BALL_START_SPEED, vy: BALL_START_SPEED };

    const keys = {};
    document.addEventListener('keydown', e => {
      keys[e.key] = true;
      if (!started) started = true;
    });
    document.addEventListener('keyup', e => { keys[e.key] = false; });

    function resetBall(towardPlayer) {
      ball.x = W / 2;
      ball.y = H / 2;
      const angle = (Math.random() * 0.6 - 0.3);
      const dir = towardPlayer ? -1 : 1;
      ball.vx = dir * BALL_START_SPEED * Math.cos(angle);
      ball.vy = BALL_START_SPEED * Math.sin(angle);
    }

    function updatePlayer() {
      if (keys['w'] || keys['W'] || keys['ArrowUp']) {
        player.y -= PADDLE_SPEED;
      }
      if (keys['s'] || keys['S'] || keys['ArrowDown']) {
        player.y += PADDLE_SPEED;
      }
      player.y = Math.max(0, Math.min(H - PADDLE_H, player.y));
    }

    function updateCpu() {
      const center = cpu.y + PADDLE_H / 2;
      if (center < ball.y - 10) cpu.y += CPU_SPEED;
      else if (center > ball.y + 10) cpu.y -= CPU_SPEED;
      cpu.y = Math.max(0, Math.min(H - PADDLE_H, cpu.y));
    }

    function updateBall() {
      ball.x += ball.vx;
      ball.y += ball.vy;

      // Top / bottom wall
      if (ball.y <= 0) { ball.y = 0; ball.vy *= -1; }
      if (ball.y + BALL_SIZE >= H) { ball.y = H - BALL_SIZE; ball.vy *= -1; }

      // Player paddle collision
      if (
        ball.x <= player.x + PADDLE_W &&
        ball.x >= player.x &&
        ball.y + BALL_SIZE >= player.y &&
        ball.y <= player.y + PADDLE_H
      ) {
        ball.x = player.x + PADDLE_W;
        const hit = (ball.y + BALL_SIZE / 2 - (player.y + PADDLE_H / 2)) / (PADDLE_H / 2);
        const angle = hit * 0.75;
        const speed = Math.sqrt(ball.vx * ball.vx + ball.vy * ball.vy) + 0.3;
        ball.vx = Math.abs(speed * Math.cos(angle));
        ball.vy = speed * Math.sin(angle);
      }

      // CPU paddle collision
      if (
        ball.x + BALL_SIZE >= cpu.x &&
        ball.x + BALL_SIZE <= cpu.x + PADDLE_W &&
        ball.y + BALL_SIZE >= cpu.y &&
        ball.y <= cpu.y + PADDLE_H
      ) {
        ball.x = cpu.x - BALL_SIZE;
        const hit = (ball.y + BALL_SIZE / 2 - (cpu.y + PADDLE_H / 2)) / (PADDLE_H / 2);
        const angle = hit * 0.75;
        const speed = Math.sqrt(ball.vx * ball.vx + ball.vy * ball.vy) + 0.3;
        ball.vx = -Math.abs(speed * Math.cos(angle));
        ball.vy = speed * Math.sin(angle);
      }

      // Score
      if (ball.x < 0) {
        scoreCpu++;
        scoreCpuEl.textContent = scoreCpu;
        resetBall(false);
      }
      if (ball.x > W) {
        scorePlayer++;
        scorePlayerEl.textContent = scorePlayer;
        resetBall(true);
      }
    }

    function draw() {
      ctx.clearRect(0, 0, W, H);

      // Center dashed line
      ctx.setLineDash([8, 8]);
      ctx.strokeStyle = '#333';
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(W / 2, 0);
      ctx.lineTo(W / 2, H);
      ctx.stroke();
      ctx.setLineDash([]);

      // Paddles
      ctx.fillStyle = '#58a6ff';
      ctx.fillRect(player.x, player.y, player.w, player.h);
      ctx.fillStyle = '#c9d1d9';
      ctx.fillRect(cpu.x, cpu.y, cpu.w, cpu.h);

      // Ball
      ctx.fillStyle = '#ffffff';
      ctx.fillRect(ball.x, ball.y, BALL_SIZE, BALL_SIZE);

      // "Press a key" overlay
      if (!started) {
        ctx.fillStyle = 'rgba(0,0,0,0.55)';
        ctx.fillRect(0, 0, W, H);
        ctx.fillStyle = '#c9d1d9';
        ctx.font = '18px monospace';
        ctx.textAlign = 'center';
        ctx.fillText('Pulsa cualquier tecla para empezar', W / 2, H / 2);
      }
    }

    function loop() {
      if (started) {
        updatePlayer();
        updateCpu();
        updateBall();
      }
      draw();
      requestAnimationFrame(loop);
    }

    loop();
  </script>
</body>
</html>
```

- [ ] **Step 2: Open game.html in browser. Verify:**
  - Black canvas visible with "Pulsa cualquier tecla para empezar" overlay
  - Press a key — ball starts moving
  - Player paddle moves with W/S and arrow keys
  - CPU paddle follows ball
  - Score increments when ball exits left/right
  - Ball bounces off top/bottom walls
  - Ball bounces off both paddles
  - "Volver al inicio" button navigates back to index.html

---

### Task 6: Final cross-page check

**Files:** none (verification only)

- [ ] **Step 1: Open index.html and click every navbar link — all 4 pages must load without errors**

- [ ] **Step 2: Verify navbar highlights the correct active link on each page**

- [ ] **Step 3: On mobile viewport (DevTools, 375px width) verify:**
  - Navbar links don't overflow
  - Cards stack to single column
  - Timeline text readable
  - Pong canvas scrollable (canvas is fixed width, that is acceptable)

- [ ] **Step 4: Scan all 4 HTML files — confirm zero emoji characters anywhere in visible text**
