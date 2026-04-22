# Terminal Interactiva en el Hero
**Date:** 2026-04-22

## Overview

Anadir un widget de terminal interactiva en el hero de `index.html`. El visitante puede escribir comandos para explorar el portfolio (proyectos, habilidades, datos personales) y ejecutar `github --stats` para obtener datos en vivo de la API publica de GitHub. Objetivo: demostrar habilidades tecnicas reales de forma memorable y unica.

## Goal

Showcase / experimentacion tecnica. La terminal es el portfolio en si misma: demuestra DOM manipulation, async JS, fetch API, y UX de linea de comandos, todo sin frameworks.

## Posicion en la pagina

El widget vive en la seccion `.hero` de `index.html`, debajo del nombre y subtitulo, en lugar de los botones CTA actuales. Los botones CTA se eliminan del hero (la llamada a contacto ya existe en la seccion `.cta-section` mas abajo).

En movil (< 600px) el widget ocupa el ancho completo.

## Archivos afectados

| Archivo | Cambio |
|---|---|
| `terminal.js` | Nuevo — motor completo de la terminal |
| `index.html` | Anadir HTML del widget en `.hero` + `<script src="terminal.js">` |
| `style.css` | Anadir estilos del widget usando variables CSS existentes |

Ningun otro archivo se toca.

## HTML del widget

```html
<div class="terminal" id="terminal" aria-label="Terminal interactiva">
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
```

## Estilos (style.css)

Variables existentes reutilizadas: `--bg` (#0d1117), `--surface` (#161b22), `--border` (#21262d), `--accent` (#58a6ff), `--text` (#c9d1d9), `--text-dim` (#8b949e), `--font-mono`.

Clases nuevas:
- `.terminal` — contenedor con borde, border-radius 10px, max-width 560px, sombra
- `.terminal__titlebar` — fondo `--surface`, flex, gap, border-bottom
- `.terminal__dot` — 11px circulo; colores: #ff5f57 / #febc2e / #28c840
- `.terminal__title` — texto centrado, monospace, color `--text-dim`
- `.terminal__output` — padding, font-mono, font-size 0.78rem, line-height 1.75, min-height 160px, max-height 260px, overflow-y auto
- `.terminal__input-row` — flex, align-items center, border-top `--border`, padding
- `.terminal__prompt` — color `--accent`, monospace, white-space nowrap
- `.terminal__input` — flex 1, background none, border none, outline none, color `--text`, font-mono, caret-color `--accent`

Clases de output (aplicadas a `<span>` dentro de lineas):
- `.t-prompt` — color `--accent`
- `.t-cmd` — color `--text`
- `.t-out` — color `--text-dim`
- `.t-ok` — color #3fb950 (verde)
- `.t-err` — color #f85149 (rojo)

## Motor — terminal.js

### Estructura

```
terminal.js
├── COMMANDS (objeto con handlers sincrono/async)
├── state: { history[], historyIndex, isTyping }
├── init() — mensaje bienvenida + foco automatico
├── handleInput(cmd) — parsea y ejecuta comando
├── printLines(lines[]) — typing effect linea a linea
├── printPrompt(cmd) — imprime la linea de prompt + comando ejecutado
├── fetchGitHub() — async, llama a la API de GitHub
├── tabComplete(partial) — completa el comando con Tab
└── listeners: keydown (Enter, ArrowUp/Down, Tab)
```

### Comandos disponibles

| Comando | Descripcion | Tipo |
|---|---|---|
| `help` | Lista todos los comandos | Sincrono |
| `whoami` | Nombre, rol, ubicacion, edad | Sincrono |
| `ls projects` | Lista los tres proyectos | Sincrono |
| `skills` | Tecnologias dominadas | Sincrono |
| `github --stats` | Repositorios y lenguajes via API | Async |
| `contact` | Email y GitHub | Sincrono |
| `clear` | Limpia el output | Sincrono |

Comando desconocido → `bash: <cmd>: command not found` en rojo.

### Typing effect

`printLines(lines)` imprime cada linea caracter a caracter con `setTimeout`. Velocidad: 18ms por caracter (configurable con la constante `TYPING_SPEED`). Durante el typing, `state.isTyping = true` bloquea nuevos inputs. Al terminar, hace foco en el input.

### Historial de comandos

Array `state.history[]`. ArrowUp recorre hacia atras, ArrowDown hacia adelante. El indice se resetea al ejecutar un nuevo comando.

### Tab-completion

Al pulsar Tab con texto parcial en el input, `tabComplete()` busca el primer comando que empiece por ese texto y lo rellena. Si hay mas de una coincidencia, muestra la lista de opciones.

### GitHub API

```js
async function fetchGitHub() {
  const res = await fetch('https://api.github.com/users/francescguillematarrabal');
  if (!res.ok) return ['Error: no se pudo conectar con GitHub.'];
  const data = await res.json();
  return [
    `Repositorios publicos: ${data.public_repos}`,
    `Seguidores: ${data.followers}`,
    `Siguiendo: ${data.following}`,
    `Perfil: ${data.html_url}`
  ];
}
```

Sin autenticacion — limite de 60 peticiones/hora por IP, suficiente para un portfolio. Si falla (red, rate limit), se muestra un mensaje de error limpio en rojo.

### Foco automatico

Al cargar la pagina, `termInput.focus()`. El input es invisible para el usuario (esta dentro del widget) pero recibe el teclado directamente. En movil, el foco automatico se omite para no abrir el teclado virtual al entrar.

### Mensaje de bienvenida

Al `init()`:
```
Bienvenido. Escribe "help" para ver los comandos disponibles.
```
Impreso sin typing effect para que sea inmediato.

## Accesibilidad

- `aria-label="Terminal interactiva"` en el contenedor
- `aria-live="polite"` en el output para lectores de pantalla
- El input tiene `aria-label="Comando"`
- El widget es completamente opcional — el resto del contenido del hero sigue siendo accesible

## i18n

El texto de los comandos se hardcodea en castellano en `terminal.js`. No se integra con `i18n.js` para mantener la implementacion simple. Si en el futuro se quiere traducir, los strings se pueden extraer a un objeto de traducciones.

## Constraints

- Vanilla JS — sin dependencias externas
- No rompe ningun archivo existente
- Funciona sin conexion a internet (GitHub API es un extra, no un requisito)
- Compatible con el tema claro/oscuro existente (usa variables CSS)
