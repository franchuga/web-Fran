// 3D Globe language selector
(function () {
  const SENYERA = 'data:image/svg+xml,' + encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 27"><rect width="40" height="27" fill="#FCDD09"/><rect y="3" width="40" height="3" fill="#DA121A"/><rect y="9" width="40" height="3" fill="#DA121A"/><rect y="15" width="40" height="3" fill="#DA121A"/><rect y="21" width="40" height="3" fill="#DA121A"/></svg>');

  const COUNTRIES = [
    { id: 'es', label: 'Español',   lat:  40.4, lon:  -3.7,  flagUrl: 'https://flagcdn.com/w40/es.png' },
    { id: 'en', label: 'English',   lat:  38.0, lon:  -97.0, flagUrl: 'https://flagcdn.com/w40/us.png' },
    { id: 'fr', label: 'Français',  lat:  46.2, lon:   2.3,  flagUrl: 'https://flagcdn.com/w40/fr.png' },
    { id: 'de', label: 'Deutsch',   lat:  51.2, lon:  10.5,  flagUrl: 'https://flagcdn.com/w40/de.png' },
    { id: 'it', label: 'Italiano',  lat:  41.9, lon:  12.5,  flagUrl: 'https://flagcdn.com/w40/it.png' },
    { id: 'ca', label: 'Català',    lat:  41.4, lon:   2.0,  flagUrl: SENYERA                          },
    { id: 'zh', label: '中文',       lat:  35.9, lon: 104.2,  flagUrl: 'https://flagcdn.com/w40/cn.png' },
    { id: 'ja', label: '日本語',     lat:  36.2, lon: 138.3,  flagUrl: 'https://flagcdn.com/w40/jp.png' },
    { id: 'pt', label: 'Português', lat: -10.0, lon:  -51.9, flagUrl: 'https://flagcdn.com/w40/br.png' },
  ];

  const THREE_URL = 'https://unpkg.com/three@0.160.0/build/three.min.js';
  const EARTH_TEX = 'https://unpkg.com/three-globe/example/img/earth-day.jpg';

  let modal = null, canvasWrap = null;
  let renderer = null, scene, camera, globeMesh, animId;
  let flagEls = [];
  let SIZE = 320;
  let isDragging = false, lastX = 0, lastY = 0;

  function latLonToVec3(lat, lon, r) {
    const phi   = (90 - lat) * Math.PI / 180;
    const theta = (lon + 180) * Math.PI / 180;
    return new THREE.Vector3(
      -r * Math.sin(phi) * Math.cos(theta),
       r * Math.cos(phi),
       r * Math.sin(phi) * Math.sin(theta)
    );
  }

  function loadThree(cb) {
    if (window.THREE) { cb(); return; }
    const s = document.createElement('script');
    s.src = THREE_URL;
    s.onload = cb;
    s.onerror = () => console.error('No se pudo cargar Three.js');
    document.head.appendChild(s);
  }

  function buildModal() {
    modal = document.createElement('div');
    modal.id = 'langModal';
    modal.innerHTML = `
      <div class="lang-modal__box">
        <button class="lang-modal__close" aria-label="Cerrar">✕</button>
        <p class="lang-modal__hint">Gira el globo y haz clic en una bandera para elegir idioma</p>
        <div class="lang-modal__canvas-wrap" id="globeWrap">
          <canvas id="globeCanvas"></canvas>
        </div>
        <div class="lang-modal__tip" id="globeTip"></div>
        <div class="lang-modal__flags">
          <button class="lang-modal__flag" data-lang="es"><img src="https://flagcdn.com/w20/es.png" alt=""> Español</button>
          <button class="lang-modal__flag" data-lang="en"><img src="https://flagcdn.com/w20/gb.png" alt=""> English</button>
          <button class="lang-modal__flag" data-lang="fr"><img src="https://flagcdn.com/w20/fr.png" alt=""> Français</button>
          <button class="lang-modal__flag" data-lang="de"><img src="https://flagcdn.com/w20/de.png" alt=""> Deutsch</button>
          <button class="lang-modal__flag" data-lang="it"><img src="https://flagcdn.com/w20/it.png" alt=""> Italiano</button>
          <button class="lang-modal__flag" data-lang="ca"><img src="${SENYERA}" alt=""> Català</button>
          <button class="lang-modal__flag" data-lang="zh"><img src="https://flagcdn.com/w20/cn.png" alt=""> 中文</button>
          <button class="lang-modal__flag" data-lang="ja"><img src="https://flagcdn.com/w20/jp.png" alt=""> 日本語</button>
          <button class="lang-modal__flag" data-lang="pt"><img src="https://flagcdn.com/w20/pt.png" alt=""> Português</button>
        </div>
      </div>`;
    document.body.appendChild(modal);
    canvasWrap = modal.querySelector('#globeWrap');

    modal.querySelector('.lang-modal__close').addEventListener('click', closeModal);
    modal.addEventListener('click', e => { if (e.target === modal) closeModal(); });
    modal.querySelectorAll('.lang-modal__flag').forEach(btn => {
      btn.addEventListener('click', () => { setLanguage(btn.dataset.lang); closeModal(); });
    });
  }

  function openModal() {
    if (!modal) buildModal();
    modal.style.display = 'flex';
    requestAnimationFrame(() => requestAnimationFrame(() => loadThree(initGlobe)));
  }

  function closeModal() {
    if (modal) modal.style.display = 'none';
    if (animId) { cancelAnimationFrame(animId); animId = null; }
    if (renderer) { renderer.dispose(); renderer = null; }
    flagEls.forEach(f => f.el.remove());
    flagEls = [];
  }

  function initGlobe() {
    const canvas = document.getElementById('globeCanvas');
    if (!canvas || renderer) return;

    const raw = canvasWrap.offsetWidth || canvasWrap.getBoundingClientRect().width || 380;
    SIZE = Math.max(200, Math.min(raw - 20, 360));

    // Size the wrap to match the canvas so absolute flag positions align
    canvasWrap.style.width  = SIZE + 'px';
    canvasWrap.style.height = SIZE + 'px';
    canvas.width  = SIZE;
    canvas.height = SIZE;
    canvas.style.width  = SIZE + 'px';
    canvas.style.height = SIZE + 'px';

    renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
    renderer.setSize(SIZE, SIZE);
    renderer.setPixelRatio(Math.min(devicePixelRatio, 2));
    renderer.setClearColor(0x000000, 0);

    scene  = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(50, 1, 0.1, 100);
    camera.position.z = 2.4;

    scene.add(new THREE.AmbientLight(0xffffff, 0.7));
    const sun = new THREE.DirectionalLight(0xffffff, 1.2);
    sun.position.set(5, 3, 5);
    scene.add(sun);

    const geo = new THREE.SphereGeometry(1, 64, 64);
    const mat = new THREE.MeshPhongMaterial({ color: 0x2266aa, shininess: 15 });
    globeMesh = new THREE.Mesh(geo, mat);
    scene.add(globeMesh);

    new THREE.TextureLoader().load(
      EARTH_TEX,
      tex => { mat.map = tex; mat.color.set(0xffffff); mat.needsUpdate = true; },
      undefined,
      () => { /* texture failed — blue fallback stays */ }
    );

    // HTML flag overlays
    const tip = document.getElementById('globeTip');
    COUNTRIES.forEach(c => {
      const pos3d = latLonToVec3(c.lat, c.lon, 1.12);

      const el = document.createElement('img');
      el.className = 'globe-flag-pin';
      el.src = c.flagUrl;
      el.alt = c.label;
      el.title = c.label;
      canvasWrap.appendChild(el);

      el.addEventListener('click', () => { setLanguage(c.id); closeModal(); });
      el.addEventListener('mouseenter', () => { tip.textContent = c.label; });
      el.addEventListener('mouseleave', () => { tip.textContent = ''; });

      flagEls.push({ el, pos3d });
    });

    setupDrag(canvas);
    animate();
  }

  function animate() {
    animId = requestAnimationFrame(animate);
    if (renderer) renderer.render(scene, camera);

    // Update flag HTML positions each frame
    globeMesh.updateMatrixWorld();
    const toCamera = camera.position.clone().normalize();

    flagEls.forEach(({ el, pos3d }) => {
      // World position of this pin (accounts for globe rotation)
      const world = pos3d.clone().applyMatrix4(globeMesh.matrixWorld);

      // Hide before reaching the visible limb of the globe (limb is at ~0.42 with camera at z=2.4)
      if (world.clone().normalize().dot(toCamera) < 0.5) {
        el.style.display = 'none';
        return;
      }
      el.style.display = 'block';

      // Project world → NDC → canvas pixels
      const ndc = world.clone().project(camera);
      const x = ( ndc.x + 1) / 2 * SIZE;
      const y = (-ndc.y + 1) / 2 * SIZE;
      el.style.left = x + 'px';
      el.style.top  = y + 'px';
    });
  }

  function setupDrag(canvas) {
    canvas.addEventListener('mousedown', e => {
      isDragging = true;
      lastX = e.clientX; lastY = e.clientY;
      canvas.style.cursor = 'grabbing';
    });
    canvas.addEventListener('mousemove', e => {
      if (!isDragging) return;
      globeMesh.rotation.y += (e.clientX - lastX) * 0.008;
      globeMesh.rotation.x += (e.clientY - lastY) * 0.008;
      lastX = e.clientX; lastY = e.clientY;
    });
    window.addEventListener('mouseup', () => {
      isDragging = false;
      canvas.style.cursor = 'grab';
    });

    canvas.addEventListener('touchstart', e => {
      e.preventDefault();
      if (e.touches.length === 2) {
        pinchDist = Math.hypot(
          e.touches[0].clientX - e.touches[1].clientX,
          e.touches[0].clientY - e.touches[1].clientY
        );
      } else {
        isDragging = true;
        lastX = e.touches[0].clientX; lastY = e.touches[0].clientY;
      }
    }, { passive: false });

    canvas.addEventListener('touchmove', e => {
      e.preventDefault();
      if (!isDragging) return;
      globeMesh.rotation.y += (e.touches[0].clientX - lastX) * 0.008;
      globeMesh.rotation.x += (e.touches[0].clientY - lastY) * 0.008;
      lastX = e.touches[0].clientX; lastY = e.touches[0].clientY;
    }, { passive: false });

    canvas.addEventListener('touchend', () => { isDragging = false; });
  }

  window.openLangModal = openModal;
})();
