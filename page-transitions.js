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
