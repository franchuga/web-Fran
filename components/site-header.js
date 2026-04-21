class SiteHeader extends HTMLElement {
  connectedCallback() {
    const active = this.getAttribute('active') || '';

    const links = [
      { key: 'home',     href: 'index.html',    i18n: 'nav.home',     label: 'Inicio' },
      { key: 'projects', href: 'proyectos.html', i18n: 'nav.projects', label: 'Proyectos' },
      { key: 'studies',  href: 'estudios.html',  i18n: 'nav.studies',  label: 'Estudios y Trabajo' },
      { key: 'hobbies',  href: 'aficiones.html', i18n: 'nav.hobbies',  label: 'Aficiones' },
      { key: 'contact',  href: 'contacto.html',  i18n: 'nav.contact',  label: 'Contacto' },
    ];

    const lis = links.map(l =>
      `<li><a href="${l.href}"${active === l.key ? ' class="active"' : ''} data-i18n="${l.i18n}">${l.label}</a></li>`
    ).join('\n      ');

    this.innerHTML = `<nav class="navbar">
    <span class="navbar__logo">FG</span>
    <ul class="navbar__links">
      ${lis}
    </ul>
    <button id="themeToggle" class="theme-toggle" aria-label="Cambiar tema"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg></button>
    <button class="lang-toggle" onclick="openLangModal()" aria-label="Cambiar idioma"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg></button>
  </nav>`;
  }
}

customElements.define('site-header', SiteHeader);
