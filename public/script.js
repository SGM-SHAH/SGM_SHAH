/* ===================================================
   HAUTE EDITORIAL ARCHITECTURAL SCRIPT ENGINE
   Shaik Ghouse Mohiddin Shah
   Inspired by kulprakashsingh.vercel.app
=================================================== */

// PROJECT SPECIFICATIONS DATA
const projectSpecs = {
  campusx: {
    title: 'CampusX',
    category: 'AI / MULTI-LLM CONSENSUS // PRJ-AI-01',
    tagline: 'Multi-LLM consensus aggregation engine for zero-hallucination inference',
    description: 'An intelligent consensus aggregation platform that queries multiple LLM providers simultaneously to cross-validate AI answers, compute semantic agreement, and drastically reduce hallucinations. Co-developed as a core teammate.',
    architecture: 'Distributed asynchronous FastAPI gateway with parallel fan-out RPC to diverse LLM endpoints, executing dynamic cosine similarity and token-level consensus voting.',
    keyModules: [
      'Parallel asynchronous client querying OpenAI, Anthropic, and open-weights models',
      'Vector agreement matrix evaluating semantic divergence across outputs',
      'Automated fallback handler with heuristic confidence thresholds',
      'Telemetry dashboard logging inference latency and token economics'
    ],
    technicalHighlights: [
      'Sub-second parallel dispatch reducing aggregate query wait times',
      'Robust schema validation ensuring zero malformed prompt returns',
      'Custom heuristic scoring algorithm weighting model domain expertise'
    ],
    hardwareOrStack: 'Python 3.11 / FastAPI / AsyncIO / Multi-LLM APIs / Pydantic / Uvicorn',
    liveUrl: 'https://github.com'
  },
  voca: {
    title: 'VOCA',
    category: 'SPEECH AI & NLP // PRJ-VOX-02',
    tagline: 'Interactive real-time speech evaluation and conversational language companion',
    description: 'Interactive AI language learning platform built for Hack The Winter. Features live speech evaluation, accent detection, and dynamic conversational scenarios.',
    architecture: 'Client-side Web Speech API capture feeding low-latency streaming audio buffers into LLM conversational evaluation pipelines with Firebase state persistence.',
    keyModules: [
      'Live acoustic feedback loop capturing phonetic cadence and pronunciation',
      'Conversational prompt engine generating contextual language practice drills',
      'Real-time grammar and vocabulary feedback badge generator',
      'Progress tracker synchronizing session metrics to Firebase'
    ],
    technicalHighlights: [
      'Low-latency real-time voice recognition and audio waveform telemetry',
      'Dynamic vocabulary difficulty scaling based on user response fluency',
      'Resilient offline session caching with automatic cloud synchronization'
    ],
    hardwareOrStack: 'React 19 / Web Speech API / LLM Integration / Firebase / Tailwind CSS',
    liveUrl: 'https://github.com'
  },
  safeecho: {
    title: 'SafeEcho',
    category: 'NLP SENTIMENT & EMPATHY // PRJ-PSY-03',
    tagline: 'Empathy-focused sentiment analyzer and gentle coping companion',
    description: 'Empathy-focused web application designed to analyze sentiment in user logs and provide gentle, AI-guided coping techniques and supportive resources in real time.',
    architecture: 'Client-side sentiment analysis and classification engine operating with strict zero-logging privacy standards to deliver gentle guidance and grounding tools.',
    keyModules: [
      'Multi-tier lexical sentiment scoring pipeline detecting distress patterns',
      'Dynamic grounding exercise generator (breathing pacers, cognitive reframing)',
      'Emergency crisis resource routing with localized hotlines',
      'Localized encrypted journal storage ensuring 100% user privacy'
    ],
    technicalHighlights: [
      'Zero telemetry data leakage: all sensitive sentiment logs remain strictly in local storage',
      'Calming, non-intrusive micro-interactions engineered to reduce cognitive overload',
      'Lightweight client bundle ensuring instant accessibility even on low-bandwidth networks'
    ],
    hardwareOrStack: 'JavaScript ESNext / Sentiment NLP / HTML5 / CSS3 / LocalStorage Security',
    liveUrl: 'https://github.com'
  },
  ipl: {
    title: 'IPL Mega Auction Platform',
    category: 'REAL-TIME DB SYSTEMS // PRJ-DAT-04',
    tagline: 'Real-time multiplayer simulated cricket auction with live bidding mechanics',
    description: 'A real-time IPL Mega Auction platform that simulates the bidding process for cricket teams. Features live auction mechanics and team purse management. Deployed on Firebase.',
    architecture: 'Event-driven state synchronization architecture powered by Firebase Realtime Database with atomic transaction locking on player bids and budget caps.',
    keyModules: [
      'Atomic bidding engine with multi-user concurrency control',
      'Live team purse and player slot constraint validator',
      'Real-time bid broadcast pipeline reflecting updates across all connected clients',
      'Complete player catalogue with filtering by role, nationality, and base price'
    ],
    technicalHighlights: [
      'Sub-50ms websocket synchronization across simultaneous bidding participants',
      'Strict transaction guards preventing purse overshoots or duplicate bids',
      'Production deployment on Firebase Hosting with zero cold-start latency'
    ],
    hardwareOrStack: 'Firebase Realtime DB / JavaScript ESNext / CSS Grid / Firebase Hosting',
    liveUrl: 'https://ipl-auction-a81df.web.app'
  },
  resume: {
    title: 'Dynamic Resume Writer',
    category: 'PRODUCTIVITY SYSTEMS // PRJ-DOC-05',
    tagline: 'Instantaneous LaTeX-inspired resume generator and real-time formatting previewer',
    description: 'A dynamic Resume Generator web app that lets users fill in their details and instantly preview a professionally formatted resume. Built with a clean, interactive UI.',
    architecture: 'Reactive dual-pane DOM architecture with real-time state synchronization between input schema controls and print-optimized PDF preview layouts.',
    keyModules: [
      'Dynamic reactive form parser supporting multi-section reordering',
      'Print-optimized CSS pagination ensuring pixel-perfect letter/A4 page breaks',
      'JSON resume schema importer/exporter for instant profile backups',
      'Instant client-side PDF generation pipeline'
    ],
    technicalHighlights: [
      'Real-time reactive preview with zero render lag or layout shifting',
      'Strict adherence to professional ATS-friendly typography and margins',
      'Fully responsive dual-view interface adapting to mobile and desktop displays'
    ],
    hardwareOrStack: 'JavaScript ESNext / HTML5 / CSS3 Print Engine / Vercel',
    liveUrl: 'https://resume-writer-sigma.vercel.app/'
  },
  flappy: {
    title: 'Flappy Bhai - SRM AP Edition',
    category: 'CANVAS ARCADE & LEADERBOARDS // PRJ-GAME-06',
    tagline: 'Custom campus-themed 60FPS canvas arcade game with global Firebase leaderboards',
    description: 'Arcade game simulation featuring custom SRM AP campus graphics, interactive obstacles, and real-time Firebase global leaderboard.',
    architecture: 'Optimized requestAnimationFrame 60FPS 2D canvas game loop with deterministic collision detection and cloud leaderboard sync.',
    keyModules: [
      'Delta-time normalized physics loop with velocity and gravity dampening',
      'AABB bounding box collision detection engine',
      'Global high-score telemetry integrated with Firebase Database',
      'Responsive canvas scaler preserving aspect ratios across mobile screens'
    ],
    technicalHighlights: [
      'Smooth 60FPS execution with zero garbage collection spikes',
      'Anti-cheat client validation for submitted high-score runs',
      'Bespoke campus-inspired pixel art and responsive touch controls'
    ],
    hardwareOrStack: 'HTML5 Canvas / Vanilla JavaScript / Firebase Realtime DB',
    liveUrl: 'https://github.com'
  }
};

// PROJECT MODAL CONTROLLER
(function initProjectModal() {
  const backdrop = document.getElementById('project-story-backdrop');
  const closeBtn = document.getElementById('modal-close-btn');
  const closeBtnBottom = document.getElementById('modal-close-btn-bottom');
  const modalCategory = document.getElementById('modal-category');
  const modalTitle = document.getElementById('modal-title');
  const modalTagline = document.getElementById('modal-tagline');
  const modalDesc = document.getElementById('modal-desc');
  const modalArch = document.getElementById('modal-architecture');
  const modalModules = document.getElementById('modal-modules');
  const modalHighlights = document.getElementById('modal-highlights');
  const modalStack = document.getElementById('modal-stack');
  const modalLiveLink = document.getElementById('modal-live-link');

  if (!backdrop) return;

  function openSpec(projectId) {
    const spec = projectSpecs[projectId];
    if (!spec) return;

    modalCategory.textContent = spec.category;
    modalTitle.textContent = spec.title;
    modalTagline.textContent = spec.tagline;
    modalDesc.textContent = spec.description;
    modalArch.textContent = spec.architecture;

    modalModules.innerHTML = '';
    spec.keyModules.forEach(mod => {
      const li = document.createElement('li');
      li.className = 'project-story-modal__list-item';
      li.textContent = mod;
      modalModules.appendChild(li);
    });

    modalHighlights.innerHTML = '';
    spec.technicalHighlights.forEach(hl => {
      const li = document.createElement('li');
      li.className = 'project-story-modal__list-item';
      li.textContent = hl;
      modalHighlights.appendChild(li);
    });

    modalStack.textContent = spec.hardwareOrStack;
    modalLiveLink.href = spec.liveUrl;

    backdrop.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function closeSpec() {
    backdrop.classList.remove('open');
    document.body.style.overflow = '';
  }

  document.querySelectorAll('.btn-open-spec').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const id = btn.dataset.project;
      openSpec(id);
    });
  });

  if (closeBtn) closeBtn.addEventListener('click', closeSpec);
  if (closeBtnBottom) closeBtnBottom.addEventListener('click', closeSpec);

  backdrop.addEventListener('click', (e) => {
    if (e.target === backdrop) closeSpec();
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && backdrop.classList.contains('open')) {
      closeSpec();
    }
  });
})();

// STAT COUNTER ANIMATION
(function initStatCounters() {
  const statElements = document.querySelectorAll('.stat-num[data-target]');
  if (!statElements.length) return;

  const statObs = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        const el = e.target;
        const target = +el.dataset.target;
        let start = null;
        const dur = 1200;

        function step(ts) {
          if (!start) start = ts;
          const prog = Math.min((ts - start) / dur, 1);
          const ease = 1 - Math.pow(1 - prog, 3);
          el.textContent = Math.round(target * ease);
          if (prog < 1) {
            requestAnimationFrame(step);
          } else {
            el.textContent = target;
          }
        }

        requestAnimationFrame(step);
        statObs.unobserve(el);
      }
    });
  }, { threshold: 0.3 });

  statElements.forEach(el => statObs.observe(el));
})();

// NAVIGATION TOGGLE
(function initNavigation() {
  const toggleBtn = document.getElementById('nav-toggle-btn');
  const drawer = document.getElementById('nav-mobile-drawer');

  if (toggleBtn && drawer) {
    toggleBtn.addEventListener('click', () => {
      const isOpen = drawer.classList.toggle('open');
      toggleBtn.textContent = isOpen ? 'CLOSE' : 'MENU';
      toggleBtn.setAttribute('aria-expanded', isOpen);
    });

    drawer.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        drawer.classList.remove('open');
        toggleBtn.textContent = 'MENU';
        toggleBtn.setAttribute('aria-expanded', 'false');
      });
    });
  }
})();

// SMOOTH SCROLL FOR ANCHOR LINKS
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const targetId = this.getAttribute('href');
    if (!targetId || targetId === '#') return;
    const targetEl = document.querySelector(targetId);
    if (targetEl) {
      e.preventDefault();
      targetEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

// BACK TO TOP
const backToTopBtn = document.getElementById('back-to-top-btn');
if (backToTopBtn) {
  backToTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

// EMAIL COPY BUTTON
(function initEmailCopy() {
  const copyBtn = document.getElementById('copy-email-btn');
  const hint = document.getElementById('copy-email-hint');
  const toast = document.getElementById('email-toast');

  if (!copyBtn) return;

  copyBtn.addEventListener('click', () => {
    const email = 'sgmshah07@gmail.com';
    navigator.clipboard.writeText(email).then(() => {
      if (hint) hint.textContent = '[COPIED // 200 OK]';
      if (toast) toast.classList.add('show');

      setTimeout(() => {
        if (hint) hint.textContent = '[CLICK TO COPY]';
        if (toast) toast.classList.remove('show');
      }, 2500);
    }).catch(err => {
      console.error('Clipboard copy failed', err);
    });
  });
})();

// AUDIO PLAYLIST CONTROLLER
(function initAudioPlayer() {
  let currentAudio = null;
  let currentTrack = null;
  let animFrame = null;

  function formatTime(s) {
    if (isNaN(s)) return '0:00';
    const m = Math.floor(s / 60);
    const sec = Math.floor(s % 60);
    return m + ':' + (sec < 10 ? '0' : '') + sec;
  }

  function updateProgress() {
    if (!currentAudio || !currentTrack) return;
    const fill = currentTrack.querySelector('.track-progress-fill');
    const timeEl = currentTrack.querySelector('.track-time');
    if (currentAudio.duration) {
      const pct = (currentAudio.currentTime / currentAudio.duration) * 100;
      if (fill) fill.style.width = pct + '%';
    }
    if (timeEl) timeEl.textContent = formatTime(currentAudio.currentTime);
    animFrame = requestAnimationFrame(updateProgress);
  }

  function stopCurrent() {
    if (currentAudio) {
      currentAudio.pause();
      currentAudio.currentTime = 0;
      cancelAnimationFrame(animFrame);
      if (currentTrack) {
        const play = currentTrack.querySelector('.track-play');
        if (play) play.textContent = '▶';
        currentTrack.classList.remove('playing');
        const fill = currentTrack.querySelector('.track-progress-fill');
        if (fill) fill.style.width = '0%';
        const timeEl = currentTrack.querySelector('.track-time');
        if (timeEl) timeEl.textContent = '0:00';
      }
      currentAudio = null;
      currentTrack = null;
    }
  }

  document.querySelectorAll('.track[data-src]').forEach(t => {
    t.addEventListener('click', () => {
      const src = t.dataset.src;
      const play = t.querySelector('.track-play');

      // If clicking current track -> toggle pause/play
      if (currentTrack === t && currentAudio) {
        if (currentAudio.paused) {
          currentAudio.play();
          if (play) play.textContent = '⏸';
          t.classList.add('playing');
          animFrame = requestAnimationFrame(updateProgress);
        } else {
          currentAudio.pause();
          if (play) play.textContent = '▶';
          t.classList.remove('playing');
          cancelAnimationFrame(animFrame);
        }
        return;
      }

      // Stop previous
      stopCurrent();

      // Start new
      currentTrack = t;
      currentAudio = new Audio(src);
      currentAudio.play();
      if (play) play.textContent = '⏸';
      t.classList.add('playing');
      animFrame = requestAnimationFrame(updateProgress);

      currentAudio.addEventListener('ended', () => {
        stopCurrent();
      });
    });
  });
})();

// INTERACTIVE 3D PORTRAIT FLIP
(function initPortraitFlip() {
  const card = document.getElementById('portrait-flip-card');
  const flipper = document.getElementById('portrait-flipper');
  const hint = document.getElementById('portrait-flip-hint');
  if (!card || !flipper) return;

  function toggleFlip(e) {
    if (e.target.closest('a, button')) return;
    flipper.classList.toggle('is-flipped');
    const isFlipped = flipper.classList.contains('is-flipped');
    if (hint) {
      hint.textContent = isFlipped ? 'CLICK TO FLIP' : 'CLICK TO FLIP';
    }
  }

  card.addEventListener('click', toggleFlip);
  card.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      toggleFlip(e);
    }
  });
})();
