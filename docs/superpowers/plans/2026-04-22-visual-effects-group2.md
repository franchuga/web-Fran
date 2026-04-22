# Visual Effects Group 2 Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add fade page transitions and a Dev Mode overlay toggle (key `D`) to the portfolio.

**Architecture:** Two independent vanilla JS files (`page-transitions.js`, `dev-mode.js`) injected into all 5 HTML pages. CSS for both features appended to `style.css`. No shared state between the two features.

**Tech Stack:** Vanilla JS (ES5 IIFE pattern), CSS custom properties, `sessionStorage`, `requestAnimationFrame`

---

### Task 1: CSS for page transitions and Dev Mode in `style.css`

**Files:**
- Modify: `style.css` (append at end, current last line is `outline-offset: 2px;` inside `.terminal-toggle:focus-visible`)

No automated tests — this is CSS. Verify absence of parse errors via browser DevTools after appending.

- [ ] **Step 1: Append page transition CSS to the end of `style.css`**

```css
/* ── Page overlay (transitions) ── */
#page-overlay {
    position: fixed;
    inset: 0;
    background: var(--bg);
    z-index: 9998;
    pointer-events: none;
    transition: opacity 0.3s ease;
}
```

- [ ] **Step 2: Append Dev Mode CSS immediately after (still same edit)**

```css
/* ── Dev Mode ── */
body.dev-mode div,
body.dev-mode section,
body.dev-mode article,
body.dev-mode main,
body.dev-mode aside   { outline: 1px dashed rgba(88, 166, 255, 0.5); }

body.dev-mode a,
body.dev-mode button,
body.dev-mode [role="button"] { outline: 1px dashed rgba(63, 185, 80, 0.7); }

body.dev-mode h1, body.dev-mode h2, body.dev-mode h3,
body.dev-mode h4, body.dev-mode h5, body.dev-mode h6 { outline: 1px dashed rgba(219, 109, 230, 0.7); }

body.dev-mode p,
body.dev-mode span,
body.dev-mode li      { outline: 1px dashed rgba(210, 153, 34, 0.5); }

#dev-badge {
    position: fixed;
    bottom: 1rem;
    right: 1rem;
    background: #da3633;
    color: #fff;
    font-family: var(--font-mono);
    font-size: 0.65rem;
    font-weight: 700;
    letter-spacing: 0.1em;
    padding: 0.3rem 0.6rem;
    border-radius: 4px;
    z-index: 10000;
    pointer-events: none;
    display: none;
}
body.dev-mode #dev-badge { display: block; }

#dev-tooltip {
    position: fixed;
    background: rgba(0, 0, 0, 0.85);
    color: #58a6ff;
    font-family: var(--font-mono);
    font-size: 0.7rem;
    padding: 0.25rem 0.5rem;
    border-radius: 4px;
    z-index: 10001;
    pointer-events: none;
    display: none;
    max-width: 260px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}
```

- [ ] **Step 3: Commit**

```bash
git add style.css
git commit -m "feat: add page transition and dev mode CSS"
```

---

### Task 2: Create `page-transitions.js`

**Files:**
- Create: `page-transitions.js` (project root `c:\Users\Bigpi\Desktop\WebFran\`)

- [ ] **Step 1: Create `page-transitions.js` with this exact content**

```js
(function () {
    'use strict';

    var DURATION = 300;

    function isInternalLink(a) {
        return (
            a.hostname === window.location.hostname &&
            !a.hasAttribute('target') &&
            a.href.indexOf('mailto:') !== 0 &&
            a.href.indexOf('tel:') !== 0 &&
            a.href !== window.location.href + '#' &&
            a.getAttribute('href') &&
            a.getAttribute('href').charAt(0) !== '#'
        );
    }

    function createOverlay() {
        var el = document.createElement('div');
        el.id = 'page-overlay';
        document.body.insertBefore(el, document.body.firstChild);
        return el;
    }

    function initTransitions() {
        var overlay = createOverlay();

        // Fade in on load: overlay starts opaque, fades to transparent
        overlay.style.opacity = '1';
        requestAnimationFrame(function () {
            requestAnimationFrame(function () {
                overlay.style.opacity = '0';
            });
        });

        // Intercept internal link clicks
        document.addEventListener('click', function (e) {
            var a = e.target.closest('a');
            if (!a || !isInternalLink(a)) return;

            e.preventDefault();
            var href = a.href;

            overlay.style.opacity = '1';
            setTimeout(function () {
                window.location.href = href;
            }, DURATION);
        });
    }

    document.addEventListener('DOMContentLoaded', initTransitions);
})();
```

- [ ] **Step 2: Manual smoke test**

Open `index.html` in browser. On page load the page should fade in smoothly (not appear instantly). Click a nav link — the page should fade to the background color and then load the next page which also fades in. No JS errors in console.

- [ ] **Step 3: Commit**

```bash
git add page-transitions.js
git commit -m "feat: add page fade transitions"
```

---

### Task 3: Create `dev-mode.js`

**Files:**
- Create: `dev-mode.js` (project root `c:\Users\Bigpi\Desktop\WebFran\`)

- [ ] **Step 1: Create `dev-mode.js` with this exact content**

```js
(function () {
    'use strict';

    var SESSION_KEY = 'devMode';
    var tooltip;

    function createBadge() {
        var badge = document.createElement('div');
        badge.id = 'dev-badge';
        badge.textContent = 'DEV MODE';
        document.body.appendChild(badge);
    }

    function createTooltip() {
        tooltip = document.createElement('div');
        tooltip.id = 'dev-tooltip';
        document.body.appendChild(tooltip);
    }

    function enable() {
        document.body.classList.add('dev-mode');
        sessionStorage.setItem(SESSION_KEY, '1');
    }

    function disable() {
        document.body.classList.remove('dev-mode');
        sessionStorage.removeItem(SESSION_KEY);
        if (tooltip) tooltip.style.display = 'none';
    }

    function isActive() {
        return document.body.classList.contains('dev-mode');
    }

    function isEditable(el) {
        var tag = el.tagName.toLowerCase();
        return tag === 'input' || tag === 'textarea' || el.isContentEditable;
    }

    function showTooltip(e) {
        if (!isActive()) return;
        var el = e.target;
        if (!el.classList.length) { tooltip.style.display = 'none'; return; }
        var classes = Array.from(el.classList).map(function (c) { return '.' + c; }).join(' ');
        tooltip.textContent = classes;
        tooltip.style.display = 'block';
        var x = e.clientX + 12;
        var y = e.clientY - 28;
        if (x + 200 > window.innerWidth) x = e.clientX - 210;
        if (y < 8) y = e.clientY + 16;
        tooltip.style.left = x + 'px';
        tooltip.style.top  = y + 'px';
    }

    function hideTooltip() {
        if (tooltip) tooltip.style.display = 'none';
    }

    function initDevMode() {
        createBadge();
        createTooltip();

        if (sessionStorage.getItem(SESSION_KEY) === '1') enable();

        document.addEventListener('keydown', function (e) {
            if (e.key !== 'd' && e.key !== 'D') return;
            if (isEditable(document.activeElement)) return;
            if (e.metaKey || e.ctrlKey || e.altKey) return;
            isActive() ? disable() : enable();
        });

        document.addEventListener('mousemove', showTooltip);
        document.addEventListener('mouseleave', hideTooltip);
    }

    document.addEventListener('DOMContentLoaded', initDevMode);
})();
```

- [ ] **Step 2: Manual smoke test**

Open `index.html` in browser. Press `D` — colored outlines should appear on all elements (blue on divs/sections, green on links/buttons, purple on headings, orange on paragraphs). A red `DEV MODE` badge should appear bottom-right. Move mouse over elements — a tooltip showing `.class-names` should follow the cursor. Press `D` again — outlines and badge disappear. Reload page — dev mode should be off (sessionStorage not persisted on first load). Enable dev mode, reload — should stay enabled.

- [ ] **Step 3: Commit**

```bash
git add dev-mode.js
git commit -m "feat: add dev mode toggle (D key)"
```

---

### Task 4: Add script tags to all 5 HTML pages

**Files:**
- Modify: `index.html` (current last scripts around line 739-743)
- Modify: `proyectos.html` (current last scripts around lines 114-117)
- Modify: `estudios.html` (current last scripts around lines 75-78)
- Modify: `aficiones.html` (current last scripts around lines 98-101)
- Modify: `contacto.html` (current last scripts around lines 93-95 / 159)

Each page currently ends with `<script src="animations.js"></script>` then `</body>`. Add both new scripts after `animations.js` in each page.

- [ ] **Step 1: Update `index.html`**

Current end of file:
```html
    <script src="animations.js"></script>
</body>
```

Change to:
```html
    <script src="animations.js"></script>
    <script src="page-transitions.js"></script>
    <script src="dev-mode.js"></script>
</body>
```

- [ ] **Step 2: Update `proyectos.html`**

Current end of file:
```html
  <script src="animations.js"></script>
</body>
```

Change to:
```html
  <script src="animations.js"></script>
  <script src="page-transitions.js"></script>
  <script src="dev-mode.js"></script>
</body>
```

- [ ] **Step 3: Update `estudios.html`**

Current end of file:
```html
  <script src="animations.js"></script>
</body>
```

Change to:
```html
  <script src="animations.js"></script>
  <script src="page-transitions.js"></script>
  <script src="dev-mode.js"></script>
</body>
```

- [ ] **Step 4: Update `aficiones.html`**

Current end of file:
```html
  <script src="animations.js"></script>
</body>
```

Change to:
```html
  <script src="animations.js"></script>
  <script src="page-transitions.js"></script>
  <script src="dev-mode.js"></script>
</body>
```

- [ ] **Step 5: Update `contacto.html`**

Current end of file:
```html
  <script src="animations.js"></script>
</body>
```

Change to:
```html
  <script src="animations.js"></script>
  <script src="page-transitions.js"></script>
  <script src="dev-mode.js"></script>
</body>
```

- [ ] **Step 6: Full smoke test**

Open `index.html` in browser:
1. Page fades in on load
2. Click every nav link — all transitions fade out/in smoothly
3. Press `D` — dev mode outlines appear on every page visited
4. Dev mode persists when navigating between pages (sessionStorage)
5. No JS errors in console on any page

- [ ] **Step 7: Commit**

```bash
git add index.html proyectos.html estudios.html aficiones.html contacto.html
git commit -m "feat: wire page-transitions and dev-mode scripts to all pages"
```
