# Visual Effects Group 2 — Design Spec
**Date:** 2026-04-22

## Overview

Dos efectos visuales para el portfolio: transiciones suaves entre páginas (fade) y un Dev Mode toggle activado con la tecla `D`. Ambos en vanilla JS, sin dependencias, compatibles con desktop y móvil.

## Archivos afectados

| Archivo | Acción | Responsabilidad |
|---|---|---|
| `page-transitions.js` | Crear | Overlay fade entre páginas |
| `dev-mode.js` | Crear | Toggle Dev Mode con outlines, tooltips y badge |
| `style.css` | Modificar | CSS para overlay y dev mode |
| `index.html` | Modificar | Añadir script tags |
| `proyectos.html` | Modificar | Añadir script tags |
| `estudios.html` | Modificar | Añadir script tags |
| `aficiones.html` | Modificar | Añadir script tags |
| `contacto.html` | Modificar | Añadir script tags |

---

## Feature 1 — Page Transitions (`page-transitions.js`)

### Comportamiento

Al cargar cualquier página:
1. El overlay `#page-overlay` existe en el DOM con `opacity: 1` (página tapada)
2. Hace fade-out a `opacity: 0` en 300ms — el contenido aparece suavemente
3. Al hacer click en cualquier enlace interno (mismo origen, extensión `.html` o sin extensión), el overlay hace fade-in a `opacity: 1` en 300ms
4. Tras la transición de salida, el browser navega a la URL destino

### Implementación JS (`page-transitions.js`)

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

        // Fade in on load (overlay starts opaque, fades out)
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

### CSS (`style.css`)

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

### Script tag en cada HTML

Añadir antes de `</body>` en las 5 páginas:

```html
<script src="page-transitions.js"></script>
```

Añadir también `<script src="dev-mode.js"></script>` en el mismo bloque (ver Feature 2).

---

## Feature 2 — Dev Mode Toggle (`dev-mode.js`)

### Comportamiento

- Tecla `D` (fuera de `<input>`, `<textarea>`, elementos `contenteditable`) activa/desactiva Dev Mode
- El estado persiste en `sessionStorage` — si el usuario recarga la página con Dev Mode activo, sigue activo
- Al activarse:
  - Clase `dev-mode` añadida a `<body>`
  - CSS aplica outlines de color por tipo de elemento
  - Badge fijo en esquina inferior derecha: `DEV MODE` en rojo
  - Al hacer hover sobre cualquier elemento con clases: tooltip mostrando sus clases CSS

### Outlines por tipo (CSS)

| Selector | Color |
|---|---|
| `div`, `section`, `article`, `main`, `aside` | Azul `rgba(88, 166, 255, 0.5)` |
| `a`, `button`, `[role="button"]` | Verde `rgba(63, 185, 80, 0.7)` |
| `h1`, `h2`, `h3`, `h4`, `h5`, `h6` | Rosa `rgba(219, 109, 230, 0.7)` |
| `p`, `span`, `li` | Naranja `rgba(210, 153, 34, 0.5)` |

### Tooltip de clases

El tooltip es un `<div id="dev-tooltip">` creado por JS. Se posiciona sobre el elemento hovered y muestra `.clase1 .clase2`. Solo se muestra cuando el elemento tiene al menos una clase.

### Implementación JS (`dev-mode.js`)

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

### CSS (`style.css`)

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

---

## Constraints

- Vanilla JS — sin dependencias
- Compatible desktop y móvil (las transiciones funcionan en touch también)
- `page-transitions.js` y `dev-mode.js` son independientes — si uno falla, el otro y el resto del site no se ven afectados
- Dev Mode no persiste entre sesiones (usa `sessionStorage`, no `localStorage`)
- Los outlines de Dev Mode no desplazan el layout (se usan `outline`, no `border`)
