# Terminal Interactiva Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Anadir un widget de terminal interactiva en el hero de index.html donde el visitante puede escribir comandos para explorar el portfolio y ver datos en vivo de GitHub.

**Architecture:** Un archivo nuevo `terminal.js` contiene todo el motor (estado, comandos, typing effect, API fetch). El HTML del widget se inserta en `.hero` de `index.html` reemplazando los botones CTA. Los estilos se añaden al final de `style.css` reutilizando las variables CSS existentes.

**Tech Stack:** Vanilla JS (ES2020), Fetch API, GitHub REST API (sin auth), CSS custom properties

---

## File Map

| Archivo | Accion | Responsabilidad |
|---|---|---|
| `style.css` | Modificar — anadir al final | Estilos del widget y mobile toggle |
| `index.html` | Modificar — hero section | HTML del widget + mobile toggle button + script tag |
| `terminal.js` | Crear | Motor completo: estado, comandos, typing, API, historial, tab |

---

### Task 1: Estilos del widget en style.css

**Files:**
- Modify: `style.css` (añadir al final)

- [ ] **Step 1: Añadir los estilos del widget al final de style.css**

Abre `style.css` y añade este bloque al final del archivo:

```css
/* ── Terminal widget ── */
.terminal-toggle {
    display: none;
    font-family: var(--font-mono);
    font-size: 0.75rem;
    color: var(--accent);
    background: none;
    border: 1px solid var(--border);
    border-radius: 6px;
    padding: 0.4rem 1rem;
    cursor: pointer;
    letter-spacing: 0.08em;
    transition: border-color 0.2s, color 0.2s;
    margin-top: 0.5rem;
}
.terminal-toggle:hover {
    border-color: var(--accent);
}
@media (max-width: 600px) {
    .terminal-toggle { display: inline-block; }
}

.terminal {
    width: 100%;
    max-width: 560px;
    background: #010409;
    border: 1px solid var(--border);
    border-radius: 10px;
    overflow: hidden;
    text-align: left;
    margin-top: 0.5rem;
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.5);
}

.terminal__titlebar {
    background: var(--surface);
    border-bottom: 1px solid var(--border);
    padding: 0.55rem 0.85rem;
    display: flex;
    align-items: center;
    gap: 0.45rem;
}

.terminal__dot {
    width: 11px;
    height: 11px;
    border-radius: 50%;
    flex-shrink: 0;
}
.terminal__dot--red    { background: #ff5f57; }
.terminal__dot--yellow { background: #febc2e; }
.terminal__dot--green  { background: #28c840; }

.terminal__title {
    flex: 1;
    text-align: center;
    font-family: var(--font-mono);
    font-size: 0.68rem;
    color: var(--text-dim);
    margin-right: 2rem;
}

.terminal__output {
    padding: 1rem 1.1rem;
    font-family: var(--font-mono);
    font-size: 0.78rem;
    line-height: 1.75;
    min-height: 160px;
    max-height: 260px;
    overflow-y: auto;
}

.terminal__output .t-line {
    display: block;
    white-space: pre-wrap;
    word-break: break-all;
}
.terminal__output .t-prompt { color: var(--accent); }
.terminal__output .t-cmd    { color: var(--text); }
.terminal__output .t-out    { color: var(--text-dim); }
.terminal__output .t-ok     { color: #3fb950; }
.terminal__output .t-err    { color: #f85149; }
.terminal__output .t-dim    { color: #484f58; }

.terminal__input-row {
    display: flex;
    align-items: center;
    gap: 0.4rem;
    padding: 0.4rem 1.1rem 0.75rem;
    border-top: 1px solid var(--border);
}

.terminal__prompt {
    font-family: var(--font-mono);
    font-size: 0.78rem;
    color: var(--accent);
    white-space: nowrap;
    flex-shrink: 0;
}

.terminal__input {
    flex: 1;
    background: none;
    border: none;
    outline: none;
    color: var(--text);
    font-family: var(--font-mono);
    font-size: 0.78rem;
    caret-color: var(--accent);
}
```

- [ ] **Step 2: Verificar en el navegador**

Abre `index.html` en el navegador. Los estilos aun no tienen efecto visible porque el HTML no existe todavia — solo verificar que la pagina siga cargando sin errores de CSS en la consola.

- [ ] **Step 3: Commit**

```bash
git add style.css
git commit -m "feat: add terminal widget styles to style.css"
```

---

### Task 2: HTML del widget en index.html

**Files:**
- Modify: `index.html` — seccion `.hero` y final del `<body>`

- [ ] **Step 1: Localizar la seccion hero y los botones CTA**

En `index.html`, la seccion hero tiene esta estructura actual:

```html
<section class="hero">
    <h1 class="hero__name">Francesc Guillemat Arrabal</h1>
    <p class="hero__title" data-i18n="index.subtitle">Desarrollador de Aplicaciones Web</p>
    <div class="hero__actions">
        <a href="proyectos.html" class="btn btn-primary" data-i18n="index.btn.projects">Ver proyectos</a>
        <a href="contacto.html" class="btn btn-secondary" data-i18n="index.btn.contact">Contactar</a>
    </div>
</section>
```

- [ ] **Step 2: Reemplazar el contenido del hero**

Sustituye toda la seccion `<section class="hero">` por:

```html
<section class="hero">
    <h1 class="hero__name">Francesc Guillemat Arrabal</h1>
    <p class="hero__title" data-i18n="index.subtitle">Desarrollador de Aplicaciones Web</p>

    <button class="terminal-toggle" id="termToggle" aria-expanded="true" aria-controls="terminal">[ ocultar ]</button>

    <div class="terminal" id="terminal" aria-label="Terminal interactiva" role="region">
        <div class="terminal__titlebar">
            <span class="terminal__dot terminal__dot--red"></span>
            <span class="terminal__dot terminal__dot--yellow"></span>
            <span class="terminal__dot terminal__dot--green"></span>
            <span class="terminal__title">fga@portfolio ~ zsh</span>
        </div>
        <div class="terminal__output" id="termOutput" aria-live="polite"></div>
        <div class="terminal__input-row">
            <span class="terminal__prompt">fga@portfolio:~$</span>
            <input class="terminal__input" id="termInput" type="text"
                   autocomplete="off" spellcheck="false" aria-label="Comando">
        </div>
    </div>
</section>
```

- [ ] **Step 3: Añadir el script tag antes del cierre de body**

Justo antes de `<script src="theme.js">` (que ya existe cerca del final del body), añade:

```html
<script src="terminal.js"></script>
```

El bloque de scripts al final del body debe quedar en este orden:
```html
<script src="terminal.js"></script>
<script src="theme.js"></script>
<script src="i18n.js"></script>
<script src="globe-modal.js"></script>
<script src="animations.js"></script>
```

- [ ] **Step 4: Verificar en el navegador**

Abre `index.html`. Debes ver:
- El widget de terminal en el hero con la barra de titulos (puntos rojo/amarillo/verde)
- El area de output vacia
- El campo de input en la parte inferior
- En desktop: el boton toggle NO es visible (display:none en > 600px)
- En movil (o con DevTools a < 600px): el boton toggle "[ ocultar ]" es visible encima del widget
- Error en consola: `terminal.js: 404` — normal, aun no existe el archivo

- [ ] **Step 5: Commit**

```bash
git add index.html
git commit -m "feat: add terminal widget HTML to hero section"
```

---

### Task 3: Motor base de terminal.js

**Files:**
- Create: `terminal.js`

- [ ] **Step 1: Crear terminal.js con el esqueleto del motor**

Crea el archivo `terminal.js` en la raiz del proyecto:

```js
(function () {
    'use strict';

    const TYPING_SPEED = 18; // ms por caracter

    const output = document.getElementById('termOutput');
    const input  = document.getElementById('termInput');

    if (!output || !input) return; // no estamos en index.html

    const state = {
        history:      [],
        historyIndex: -1,
        isTyping:     false,
    };

    // ── Utilidades de output ──────────────────────────────────────

    function appendLine(html, cssClass) {
        const span = document.createElement('span');
        span.className = 't-line' + (cssClass ? ' ' + cssClass : '');
        span.innerHTML = html;
        output.appendChild(span);
        output.scrollTop = output.scrollHeight;
    }

    function printPrompt(cmd) {
        appendLine(
            '<span class="t-prompt">fga@portfolio</span>' +
            '<span class="t-dim">:~$</span> ' +
            '<span class="t-cmd">' + escHtml(cmd) + '</span>'
        );
    }

    function escHtml(str) {
        return str
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;');
    }

    // ── Typing effect ─────────────────────────────────────────────

    function printLines(lines) {
        return new Promise(resolve => {
            if (!lines.length) { resolve(); return; }

            let lineIndex = 0;

            function nextLine() {
                if (lineIndex >= lines.length) {
                    state.isTyping = false;
                    input.focus();
                    resolve();
                    return;
                }
                const { text, cls } = typeof lines[lineIndex] === 'string'
                    ? { text: lines[lineIndex], cls: 't-out' }
                    : lines[lineIndex];

                const span = document.createElement('span');
                span.className = 't-line ' + cls;
                output.appendChild(span);
                output.scrollTop = output.scrollHeight;

                let charIndex = 0;
                function nextChar() {
                    if (charIndex >= text.length) {
                        lineIndex++;
                        nextLine();
                        return;
                    }
                    span.textContent += text[charIndex++];
                    output.scrollTop = output.scrollHeight;
                    setTimeout(nextChar, TYPING_SPEED);
                }
                nextChar();
            }

            state.isTyping = true;
            nextLine();
        });
    }

    // ── Manejo de input ───────────────────────────────────────────

    async function handleInput(raw) {
        const cmd = raw.trim();
        if (!cmd) return;

        state.history.unshift(cmd);
        state.historyIndex = -1;

        printPrompt(cmd);

        const handler = COMMANDS[cmd];
        if (!handler) {
            await printLines([{ text: 'bash: ' + cmd + ': command not found', cls: 't-err' }]);
            return;
        }

        const result = await handler();
        if (result && result.length) {
            await printLines(result);
        }
    }

    input.addEventListener('keydown', async e => {
        if (e.key === 'Enter') {
            if (state.isTyping) return;
            const val = input.value;
            input.value = '';
            await handleInput(val);
            return;
        }
        if (e.key === 'ArrowUp') {
            e.preventDefault();
            if (state.historyIndex < state.history.length - 1) {
                state.historyIndex++;
                input.value = state.history[state.historyIndex];
            }
            return;
        }
        if (e.key === 'ArrowDown') {
            e.preventDefault();
            if (state.historyIndex > 0) {
                state.historyIndex--;
                input.value = state.history[state.historyIndex];
            } else {
                state.historyIndex = -1;
                input.value = '';
            }
            return;
        }
        if (e.key === 'Tab') {
            e.preventDefault();
            tabComplete(input.value);
        }
    });

    // ── Tab completion ────────────────────────────────────────────

    function tabComplete(partial) {
        if (!partial.trim()) return;
        const keys = Object.keys(COMMANDS);
        const matches = keys.filter(k => k.startsWith(partial));
        if (matches.length === 1) {
            input.value = matches[0];
        } else if (matches.length > 1) {
            printPrompt(partial);
            appendLine(matches.join('    '), 't-out');
        }
    }

    // ── Comandos ──────────────────────────────────────────────────

    const COMMANDS = {
        help: cmdHelp,
        whoami: cmdWhoami,
        'ls projects': cmdProjects,
        skills: cmdSkills,
        'github --stats': cmdGithub,
        contact: cmdContact,
        clear: cmdClear,
    };

    function cmdHelp() {
        return [
            { text: 'Comandos disponibles:', cls: 't-ok' },
            { text: '  help             — muestra esta lista', cls: 't-out' },
            { text: '  whoami           — quien soy', cls: 't-out' },
            { text: '  ls projects      — lista de proyectos', cls: 't-out' },
            { text: '  skills           — tecnologias que domino', cls: 't-out' },
            { text: '  github --stats   — datos en vivo de GitHub', cls: 't-out' },
            { text: '  contact          — como contactarme', cls: 't-out' },
            { text: '  clear            — limpia la pantalla', cls: 't-out' },
        ];
    }

    function cmdWhoami() {
        return [
            { text: 'Francesc Guillemat Arrabal', cls: 't-ok' },
            { text: 'Estudiante DAW  ·  Tarragona  ·  18 anos', cls: 't-out' },
            { text: 'Especialidad: desarrollo web full-stack', cls: 't-out' },
        ];
    }

    function cmdProjects() {
        return [
            { text: 'web-instituto/      WordPress · Linux · seguridad', cls: 't-out' },
            { text: 'poka-iot/           ESP32 · Node-RED · dashboard', cls: 't-out' },
            { text: 'viorcam-pedidos/    Java · SQL · gestion de pedidos', cls: 't-out' },
        ];
    }

    function cmdSkills() {
        return [
            { text: 'Lenguajes:    HTML · CSS · JavaScript · Java · SQL · Python', cls: 't-out' },
            { text: 'Frameworks:   Spring Boot · WordPress', cls: 't-out' },
            { text: 'Herramientas: Git · GitHub · Node-RED · MongoDB · XML · JSON', cls: 't-out' },
        ];
    }

    async function cmdGithub() {
        appendLine('Conectando con GitHub...', 't-dim');
        output.scrollTop = output.scrollHeight;
        try {
            const res = await fetch('https://api.github.com/users/francescguillematarrabal');
            if (!res.ok) throw new Error('HTTP ' + res.status);
            const data = await res.json();
            return [
                { text: 'Repositorios publicos: ' + data.public_repos, cls: 't-ok' },
                { text: 'Seguidores:            ' + data.followers,     cls: 't-out' },
                { text: 'Siguiendo:             ' + data.following,     cls: 't-out' },
                { text: 'Perfil:                ' + data.html_url,      cls: 't-out' },
            ];
        } catch {
            return [{ text: 'Error: no se pudo conectar con GitHub.', cls: 't-err' }];
        }
    }

    function cmdContact() {
        return [
            { text: 'Email:  deadmanjdf@gmail.com',               cls: 't-out' },
            { text: 'GitHub: github.com/francescguillematarrabal', cls: 't-out' },
        ];
    }

    function cmdClear() {
        output.innerHTML = '';
        return [];
    }

    // ── Init ──────────────────────────────────────────────────────

    function init() {
        appendLine('Bienvenido. Escribe <span class="t-ok">help</span> para ver los comandos disponibles.', 't-dim');

        const isMobile = window.matchMedia('(max-width: 600px)').matches;
        if (!isMobile) input.focus();
    }

    init();

})();
```

- [ ] **Step 2: Verificar en el navegador**

Abre `index.html`. Comprueba:
- El mensaje de bienvenida aparece en el output: "Bienvenido. Escribe help para ver los comandos disponibles."
- En desktop, el cursor esta en el campo de input automaticamente
- Escribe `help` y pulsa Enter — deben aparecer los 7 comandos con typing effect
- Escribe `desconocido` y pulsa Enter — debe aparecer en rojo `bash: desconocido: command not found`
- Escribe `whoami` → debe mostrar nombre, ubicacion, edad
- Escribe `clear` → el output se limpia

- [ ] **Step 3: Verificar historial**

- Escribe `whoami` + Enter, luego `help` + Enter
- Pulsa ArrowUp → debe aparecer `help`
- Pulsa ArrowUp de nuevo → debe aparecer `whoami`
- Pulsa ArrowDown → debe volver a `help`
- Pulsa ArrowDown de nuevo → el input queda vacio

- [ ] **Step 4: Verificar tab-completion**

- Escribe `wh` y pulsa Tab → el input debe completarse a `whoami`
- Borra y escribe `l` + Tab → debe completarse a `ls projects`
- Borra y escribe `c` + Tab → debe mostrar las opciones: `clear    contact`

- [ ] **Step 5: Verificar GitHub API**

- Escribe `github --stats` + Enter
- Debe aparecer "Conectando con GitHub..." y luego los datos reales (repos, seguidores, etc.)
- Si no hay conexion, debe aparecer el mensaje de error en rojo sin romper la pagina

- [ ] **Step 6: Verificar mobile toggle**

- Abre DevTools y pon el viewport a 375px de ancho
- Debe aparecer el boton "[ ocultar ]" encima del widget
- El boton aun no funciona (el JS del toggle se añade en Task 4)

- [ ] **Step 7: Commit**

```bash
git add terminal.js
git commit -m "feat: add terminal.js with commands, typing effect, history, tab-complete and GitHub API"
```

---

### Task 4: Mobile toggle JS

**Files:**
- Modify: `terminal.js` — añadir logica del toggle al final de `init()`

- [ ] **Step 1: Añadir logica del toggle dentro de init()**

Localiza la funcion `init()` al final de `terminal.js`. Reemplazala por esta version ampliada:

```js
function init() {
    appendLine('Bienvenido. Escribe <span class="t-ok">help</span> para ver los comandos disponibles.', 't-dim');

    const isMobile = window.matchMedia('(max-width: 600px)').matches;
    if (!isMobile) input.focus();

    const toggle  = document.getElementById('termToggle');
    const termEl  = document.getElementById('terminal');
    if (!toggle || !termEl) return;

    let visible = true;

    toggle.addEventListener('click', () => {
        visible = !visible;
        termEl.style.display  = visible ? 'block' : 'none';
        toggle.textContent    = visible ? '[ ocultar ]' : '[ terminal ]';
        toggle.setAttribute('aria-expanded', visible ? 'true' : 'false');
    });
}
```

- [ ] **Step 2: Verificar en el navegador (mobile)**

Con DevTools a < 600px:
- Pulsa "[ ocultar ]" → el widget desaparece y el boton cambia a "[ terminal ]"
- Pulsa "[ terminal ]" → el widget reaparece y el boton vuelve a "[ ocultar ]"

En desktop (> 600px): el boton no es visible — verificar que el toggle no interfiere.

- [ ] **Step 3: Commit**

```bash
git add terminal.js
git commit -m "feat: add mobile toggle to show/hide terminal widget"
```

---

## Self-Review

**Spec coverage:**
- [x] Widget en el hero — Task 2
- [x] Barra de titulos estilo macOS (puntos) — Task 3 HTML
- [x] Comando `help` — Task 3
- [x] Comando `whoami` — Task 3
- [x] Comando `ls projects` — Task 3
- [x] Comando `skills` — Task 3
- [x] Comando `github --stats` con Fetch API — Task 3
- [x] Comando `contact` — Task 3
- [x] Comando `clear` — Task 3
- [x] Comando desconocido → error rojo — Task 3
- [x] Typing effect 18ms/caracter — Task 3
- [x] isTyping bloquea input durante typing — Task 3 (Enter bloqueado)
- [x] Historial ArrowUp/Down — Task 3
- [x] Tab-completion — Task 3
- [x] Foco automatico (omitido en movil) — Task 3 init()
- [x] Mensaje de bienvenida sin typing effect — Task 3 (appendLine directo)
- [x] Mobile toggle visible/oculto — Task 4
- [x] aria-label, aria-live, aria-expanded — Task 2 + Task 4
- [x] Sin dependencias externas — solo vanilla JS
- [x] Compatible con tema claro/oscuro (usa variables CSS) — Task 1

**Placeholders:** ninguno.

**Consistencia de tipos:**
- `printLines()` acepta `string[]` o `{text, cls}[]` — ambos formatos usados correctamente en todos los comandos.
- `appendLine(html, cssClass)` — usado consistentemente en `init()` y `cmdGithub()`.
- `output`, `input` referenciados por ID — coinciden con los IDs del HTML en Task 2.
