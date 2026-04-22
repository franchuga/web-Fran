(function () {
    'use strict';

    const TYPING_SPEED = 18; // ms per character
    const GITHUB_USER = 'francescguillematarrabal';

    const output = document.getElementById('termOutput');
    const input  = document.getElementById('termInput');

    if (!output || !input) return; // not on index.html

    const state = {
        history:      [],
        historyIndex: -1,
        isTyping:     false,
        isLoading:    false,
    };

    // ── Output utilities ──────────────────────────────────────────

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
            if (!lines.length) { input.focus(); resolve(); return; }

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

    // ── Input handling ────────────────────────────────────────────

    async function handleInput(raw) {
        const cmd = raw.trim();
        if (!cmd || state.isTyping || state.isLoading) return;

        state.isLoading = true;

        if (state.history[0] !== cmd) {
            state.history.unshift(cmd);
            if (state.history.length > 50) state.history.pop();
        }
        state.historyIndex = -1;

        printPrompt(cmd);

        const handler = COMMANDS[cmd];
        if (!handler) {
            await printLines([{ text: 'bash: ' + cmd + ': command not found', cls: 't-err' }]);
            state.isLoading = false;
            return;
        }

        try {
            const result = await handler();
            if (result && result.length) {
                await printLines(result);
            }
        } finally {
            state.isLoading = false;
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
            const m = matches[0];
            input.value = m.includes(' ') ? m : m + ' ';
        } else if (matches.length > 1) {
            printPrompt(partial);
            appendLine(matches.join('    '), 't-out');
        }
    }

    // ── Commands ──────────────────────────────────────────────────

    const COMMANDS = {
        help:            cmdHelp,
        whoami:          cmdWhoami,
        'ls projects':   cmdProjects,
        skills:          cmdSkills,
        'github --stats': cmdGithub,
        contact:         cmdContact,
        clear:           cmdClear,
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
            const res = await fetch('https://api.github.com/users/' + GITHUB_USER);
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
        input.focus();
        return [];
    }

    // ── Init ──────────────────────────────────────────────────────

    function init() {
        appendLine('Bienvenido. Escribe <span class="t-ok">help</span> para ver los comandos disponibles.', 't-dim');

        const isMobile = window.matchMedia('(max-width: 600px)').matches;
        if (!isMobile) input.focus();

        const toggle = document.getElementById('termToggle');
        const termEl = document.getElementById('terminal');
        if (!toggle || !termEl) return;

        let visible = true;

        toggle.addEventListener('click', () => {
            visible = !visible;
            termEl.style.display = visible ? 'block' : 'none';
            toggle.textContent   = visible ? '[ ocultar ]' : '[ terminal ]';
            toggle.setAttribute('aria-expanded', visible ? 'true' : 'false');
        });
    }

    init();

})();
