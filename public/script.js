/* ===================================================
   BESPOKE EDITORIAL ENGINEERING SCRIPT ENGINE
   Shaik Ghouse Mohiddin Shah
   Inspired by Linear / Vercel modern developer platforms
=================================================== */

// PROJECT SPECIFICATIONS DATA
const projectSpecs = {
  campusx: {
    title: 'CampusX',
    category: 'AI / Multi-LLM Consensus',
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
    liveUrl: 'https://github.com/SGM-SHAH/CampusX'
  },
  voca: {
    title: 'VOCA',
    category: 'Speech AI & NLP',
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
    liveUrl: 'https://github.com/SGM-SHAH/VOCA-SpeechAI'
  },
  safeecho: {
    title: 'SafeEcho',
    category: 'Sentiment Analysis & Privacy',
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
    liveUrl: 'https://github.com/SGM-SHAH/SafeEcho'
  },
  ipl: {
    title: 'IPL Mega Auction Platform',
    category: 'Real-Time Distributed DB',
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
    category: 'Web Productivity Tools',
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
    category: 'HTML5 Canvas & Physics',
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
    liveUrl: 'https://sgm-shah.github.io/Flappy-Bhai/'
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
    const data = projectSpecs[projectId];
    if (!data) return;

    if (modalCategory) modalCategory.textContent = data.category;
    if (modalTitle) modalTitle.textContent = data.title;
    if (modalTagline) modalTagline.textContent = data.tagline;
    if (modalDesc) modalDesc.textContent = data.description;
    if (modalArch) modalArch.textContent = data.architecture;

    if (modalModules) {
      modalModules.innerHTML = '';
      data.keyModules.forEach(mod => {
        const li = document.createElement('li');
        li.textContent = mod;
        modalModules.appendChild(li);
      });
    }

    if (modalHighlights) {
      modalHighlights.innerHTML = '';
      data.technicalHighlights.forEach(hl => {
        const li = document.createElement('li');
        li.textContent = hl;
        modalHighlights.appendChild(li);
      });
    }

    if (modalStack) modalStack.textContent = data.hardwareOrStack;

    if (modalLiveLink) {
      modalLiveLink.href = data.liveUrl;
      const isRepo = data.liveUrl.includes('github.com');
      modalLiveLink.textContent = isRepo ? 'VIEW REPOSITORY ↗' : 'LAUNCH LIVE APP ↗';
    }

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

// STAT COUNTER ANIMATION (SUPPORTS DECIMALS LIKE 8.2)
(function initStatCounters() {
  const statElements = document.querySelectorAll('.stat-num[data-target]');
  if (!statElements.length) return;

  const statObs = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        const el = e.target;
        const target = parseFloat(el.dataset.target);
        const isDecimal = el.dataset.decimals === '1';
        let start = null;
        const dur = 1200;

        function step(ts) {
          if (!start) start = ts;
          const prog = Math.min((ts - start) / dur, 1);
          const ease = 1 - Math.pow(1 - prog, 3);
          const currentVal = target * ease;
          el.textContent = isDecimal ? currentVal.toFixed(1) : Math.round(currentVal);
          if (prog < 1) {
            requestAnimationFrame(step);
          } else {
            el.textContent = isDecimal ? target.toFixed(1) : target;
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
      toggleBtn.textContent = isOpen ? 'Close' : 'Menu';
      toggleBtn.setAttribute('aria-expanded', isOpen);
    });

    drawer.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        drawer.classList.remove('open');
        toggleBtn.textContent = 'Menu';
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

    if (targetId === '#top') {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    const targetEl = document.querySelector(targetId);
    if (targetEl) {
      e.preventDefault();
      const nav = document.querySelector('.portfolio-navigation');
      const navHeight = nav ? nav.offsetHeight : 72;
      const targetPos = targetEl.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: Math.max(0, targetPos - navHeight),
        behavior: 'smooth'
      });
    }
  });
});

// EMAIL COPY BUTTON
(function initEmailCopy() {
  const copyBtn = document.getElementById('copy-email-btn');
  const hint = document.getElementById('copy-email-hint');
  const toast = document.getElementById('email-toast');

  if (!copyBtn) return;

  copyBtn.addEventListener('click', () => {
    const email = 'sgmshah07@gmail.com';
    navigator.clipboard.writeText(email).then(() => {
      if (hint) hint.textContent = 'Copied to clipboard!';
      if (toast) toast.classList.add('show');

      setTimeout(() => {
        if (hint) hint.textContent = 'Copy Email';
        if (toast) toast.classList.remove('show');
      }, 2500);
    }).catch(err => {
      console.error('Clipboard copy failed', err);
    });
  });
})();

// INTERACTIVE CONTACT FAN CARD (UIVERSE-INSPIRED)
(function initContactFanCard() {
  const fanCard = document.getElementById('contact-fan-card');
  if (!fanCard) return;

  fanCard.addEventListener('click', (e) => {
    if (e.target.closest('.box')) return;
    fanCard.classList.toggle('is-active');
  });

  fanCard.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      if (document.activeElement === fanCard) {
        e.preventDefault();
        fanCard.classList.toggle('is-active');
      }
    }
  });

  document.addEventListener('click', (e) => {
    if (!fanCard.contains(e.target)) {
      fanCard.classList.remove('is-active');
    }
  });
})();

// CARD SCROLL REVEAL ENTRANCE ANIMATION
(function initCardScrollReveal() {
  const cardSelectors = [
    '.editorial-project',
    '.about-editorial-card',
    '.education-card-featured',
    '.capability-row',
    '.recognition-card'
  ];

  const cards = document.querySelectorAll(cardSelectors.join(', '));
  if (!cards.length) return;

  cards.forEach(card => card.classList.add('card-revealing'));

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('card-revealed');
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08, rootMargin: '0px 0px -20px 0px' });

  cards.forEach(card => observer.observe(card));
})();
