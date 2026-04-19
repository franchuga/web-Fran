(function () {
  'use strict';

  // Scroll-reveal: add .anim-up and observe with IntersectionObserver
  function initScrollReveal() {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -30px 0px' });

    // Cards and timeline items: staggered by index within container
    ['.cards-grid .card', '.timeline .timeline-item'].forEach(sel => {
      document.querySelectorAll(sel).forEach((el, i) => {
        el.classList.add('anim-up');
        el.style.transitionDelay = Math.min(i * 0.08, 0.4) + 's';
        observer.observe(el);
      });
    });

    // Other elements without stagger
    document.querySelectorAll('.form-group, .page-header').forEach(el => {
      el.classList.add('anim-up');
      observer.observe(el);
    });
  }

  // Stagger hero badge pop-in animations
  function initBadgeStagger() {
    document.querySelectorAll('.hero .badge').forEach((badge, i) => {
      badge.style.animationDelay = (0.08 * i + 0.75) + 's';
    });
  }

  // Typing effect for .hero__title
  let typingTimer = null;

  function typeText(el, text, initialDelay) {
    if (typingTimer) clearTimeout(typingTimer);
    el.textContent = '';
    el.classList.add('typing-cursor');
    let i = 0;
    function step() {
      if (i <= text.length) {
        el.textContent = text.slice(0, i++);
        typingTimer = setTimeout(step, 38);
      }
    }
    typingTimer = setTimeout(step, initialDelay || 400);
  }

  function initTyping() {
    const el = document.querySelector('.hero__title');
    if (!el) return;

    typeText(el, el.textContent.trim(), 400);

    // Re-type when language changes (i18n fires langchange after updating DOM)
    document.addEventListener('langchange', () => {
      setTimeout(() => typeText(el, el.textContent.trim(), 80), 100);
    });
  }

  document.addEventListener('DOMContentLoaded', () => {
    initScrollReveal();
    initBadgeStagger();
    initTyping();
  });
})();
