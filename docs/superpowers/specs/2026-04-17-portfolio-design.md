# Portfolio Web — Francesc Guillemat Arrabal
**Date:** 2026-04-17

## Overview

Professional portfolio website for Francesc Guillemat Arrabal, a DAW student showcasing projects, education, and a Pong mini-game. Multi-page structure with shared Dark Pro visual style.

## Visual Style

- **Theme:** Dark Pro — dark background (#0d1117), secondary surfaces (#161b22), borders (#21262d)
- **Accent color:** Blue (#58a6ff)
- **Text:** Primary (#c9d1d9), secondary (#8b949e)
- **Font:** System monospace for code elements, sans-serif for body
- **No emojis anywhere** — use plain text or SVG icons only

## File Structure

```
index.html        — Home / Hero
proyectos.html    — Projects page
estudios.html     — Education timeline
game.html         — Pong mini-game
style.css         — Shared styles (Dark Pro theme)
```

## Pages

### index.html — Home
- Navbar: logo "FGA" left, nav links right (Inicio, Proyectos, Estudios, Jugar)
- Hero section: full-viewport-height, centered
  - Name: "Francesc Guillemat Arrabal"
  - Title: "Desarrollador de Aplicaciones Web"
  - Tech badges: HTML, CSS, JavaScript, SQL, Java
  - Two CTA buttons: "Ver proyectos" → proyectos.html, "Jugar al Pong" → game.html
- Footer: name + year

### proyectos.html — Projects
- Same navbar + footer
- Page title: "Proyectos"
- 3 project cards (dark card style, border on hover):
  1. **Web del Institut** — Rediseño de la web del instituto usando WordPress. Badge: WordPress
  2. **Sistema de Fitxatges** — Control de presencia vinculado a Google Sheets. Badge: JavaScript / Google Sheets
  3. **App de Pedidos** — Aplicación de gestión de pedidos. Badge: Java / SQL
- No external links (to be added later)

### estudios.html — Education
- Same navbar + footer
- Page title: "Formació"
- Vertical timeline (left line, dots):
  1. **Sistemes Microinformàtics i Xarxes** — Francesc Vidal i Barraquer — 2023–2025
  2. **Desenvolupament d'Aplicacions Web** — Francesc Vidal i Barraquer — 2025–2027 (en curs)

### game.html — Pong
- Same navbar (back to Inicio) + footer
- HTML5 Canvas Pong game
- Player (left paddle) vs CPU (right paddle)
- Controls: W/S keys or arrow keys (Up/Down)
- Visible score counter
- "Tornar a l'inici" / "Volver al inicio" button below canvas
- CPU has slight difficulty (not unbeatable)

## Shared style.css

CSS custom properties for the color palette. Styles for:
- Reset + base
- Navbar (fixed top, dark)
- Hero section
- Tech badges
- Buttons (primary + secondary)
- Project cards grid
- Education timeline
- Footer
- Responsive: mobile-friendly at 768px breakpoint

## Constraints

- Pure HTML/CSS/JS — no frameworks, no build tools
- No external dependencies except Google Fonts (optional)
- No emojis in any visible text or UI element
