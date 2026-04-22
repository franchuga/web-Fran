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
