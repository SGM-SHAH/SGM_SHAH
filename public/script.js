/**
 * SGM Editorial Portfolio Script Engine
 * High-performance, accessible script controller
 * Features: Dual-theme switcher (localStorage + system sync), accessible modal specs, keyboard navigation
 */

// 1. PROJECT SPECIFICATIONS DATA
const projectSpecs = {
  rootmap: {
    title: 'RootMap',
    category: 'Geospatial & Civic Data',
    tagline: 'Interactive political and administrative atlas of India with 786-district directory',
    description: 'A responsive geospatial and administrative explorer of the Republic of India. Features complete profiles for all 28 States and 8 Union Territories, cabinet rosters, 786 administrative districts, and constitutional Seventh Schedule context.',
    architecture: 'Client-side SPA built with React 19, Three.js, and D3 Geo rendering interactive state boundaries, reactive demographic filtering, and instant search across administrative divisions.',
    keyModules: [
      'Geospatial boundary visualizer with interactive state and district geometry',
      'Executive cabinet profiles detailing Chief Ministers, Governors, and portfolios',
      'Complete 786-district directory with administrative headquarters and regional highlights',
      'Seventh Schedule constitutional guide detailing Union, State, and Concurrent distribution'
    ],
    technicalHighlights: [
      'Production deployment on Firebase Hosting with fast initial asset delivery',
      'Optimized client-side spatial datasets supporting instant multi-attribute search',
      'Responsive multi-modal interface with desktop dual-pane and mobile navigation'
    ],
    hardwareOrStack: 'React 19 / Three.js / D3 Geo / Tailwind CSS / Vite / Firebase Hosting',
    codeUrl: 'https://github.com/SGM-SHAH/ROOTMAP',
    liveUrl: 'https://rootmap-app.web.app'
  },
  ipl: {
    title: 'IPL Mega Auction Platform',
    category: 'Real-Time Distributed DB',
    tagline: 'Real-time multiplayer simulated cricket auction with live bidding mechanics',
    description: 'A real-time IPL Mega Auction platform that simulates competitive franchise bidding. Features team budget constraints, live team purse tracking, and real-time state sync across all participants.',
    architecture: 'Event-driven state synchronization architecture powered by Firebase Realtime Database with transaction validation on player bids and purse limits.',
    keyModules: [
      'Real-time bidding engine with multi-user concurrency control',
      'Live team purse and squad composition constraint validator',
      'Real-time bid broadcast pipeline reflecting updates across connected clients',
      'Complete player catalogue with filtering by role, nationality, and base price'
    ],
    technicalHighlights: [
      'Real-time synchronization across concurrent bidding participants',
      'Strict transaction guards preventing purse overflows and duplicate concurrent bids',
      'Production deployment on Firebase Hosting with instantaneous initial load'
    ],
    hardwareOrStack: 'Firebase Realtime DB / JavaScript ESNext / CSS Grid / Firebase Hosting',
    codeUrl: 'https://github.com/SGM-SHAH/IPL-AUCTION',
    liveUrl: 'https://ipl-auction-a81df.web.app'
  },
  campusx: {
    title: 'CampusX',
    category: 'AI / Multi-LLM Consensus',
    tagline: 'Multi-LLM consensus aggregation engine for grounded multi-model inference',
    description: 'An intelligent consensus aggregation platform that queries multiple LLM providers in parallel to cross-validate responses, compute semantic agreement, and drastically minimize hallucinations in student queries.',
    architecture: 'Distributed asynchronous FastAPI gateway with parallel fan-out RPC to diverse LLM endpoints, executing dynamic cosine similarity and token-level consensus voting.',
    keyModules: [
      'Parallel asynchronous client querying OpenAI, Anthropic, and open-weights models',
      'Vector agreement matrix evaluating semantic divergence across model outputs',
      'Automated fallback handler with heuristic confidence thresholds',
      'Telemetry logging inference latency, token usage, and cost economics'
    ],
    technicalHighlights: [
      'Parallel dispatch across multiple model providers reducing aggregate wait times',
      'Pydantic schema validation ensuring clean structured prompt returns',
      'Custom heuristic scoring algorithm weighting model domain expertise'
    ],
    hardwareOrStack: 'Python 3.11 / FastAPI / AsyncIO / Multi-LLM APIs / Pydantic / Uvicorn',
    codeUrl: 'https://github.com/SGM-SHAH/CampusX',
    liveUrl: null
  },
  voca: {
    title: 'VOCA',
    category: 'Speech AI & NLP',
    tagline: 'Interactive real-time speech evaluation and conversational language companion',
    description: 'Interactive speech evaluation platform built for Hack The Winter. Features live pronunciation analysis, accent cadence detection, and conversational scenarios.',
    architecture: 'Client-side Web Speech API capture feeding low-latency streaming audio buffers into LLM conversational evaluation pipelines with Firebase state persistence.',
    keyModules: [
      'Live acoustic feedback loop capturing phonetic cadence and pronunciation',
      'Conversational prompt engine generating contextual language practice drills',
      'Real-time grammar and vocabulary feedback badge generator',
      'Progress tracker synchronizing session metrics to Firebase'
    ],
    technicalHighlights: [
      'Real-time audio capture and speech recognition telemetry loop',
      'Dynamic vocabulary difficulty scaling based on user response fluency',
      'Resilient offline session caching with automatic cloud synchronization'
    ],
    hardwareOrStack: 'React 19 / Web Speech API / LLM Integration / Firebase / Tailwind CSS',
    codeUrl: 'https://github.com/SGM-SHAH/VOCA-SpeechAI',
    liveUrl: null
  },
  resume: {
    title: 'Dynamic Resume Writer',
    category: 'Web Productivity Tools',
    tagline: 'ATS-optimized resume generator with real-time reactive DOM preview',
    description: 'An interactive Resume Generator web application that lets users fill in structured career details and instantly preview a professionally formatted resume with vector print CSS.',
    architecture: 'Reactive dual-pane DOM architecture with real-time state synchronization between input schema controls and print-optimized PDF preview layouts.',
    keyModules: [
      'Dynamic reactive form parser supporting multi-section reordering',
      'Print-optimized CSS pagination ensuring pixel-perfect A4/Letter breaks',
      'JSON resume schema importer/exporter for instant profile backups',
      'Client-side print styling engine eliminating third-party rendering servers'
    ],
    technicalHighlights: [
      'Real-time reactive preview without layout shifting',
      'Strict adherence to ATS-friendly typography, hierarchy, and margins',
      'Fully responsive dual-view interface adapting cleanly to mobile and desktop'
    ],
    hardwareOrStack: 'JavaScript ESNext / HTML5 / CSS3 Print Engine / Vercel',
    codeUrl: 'https://github.com/SGM-SHAH/RESUME-WRITER',
    liveUrl: 'https://resume-writer-sigma.vercel.app/'
  },
  safeecho: {
    title: 'SafeEcho',
    category: 'Sentiment Analysis & Privacy',
    tagline: 'Empathy-focused sentiment analyzer and gentle coping companion',
    description: 'Privacy-first web application designed to analyze sentiment in personal logs and provide AI-guided coping techniques and grounding resources without transmitting user data.',
    architecture: 'Client-side sentiment analysis and classification engine operating without remote server logging to deliver grounding tools locally.',
    keyModules: [
      'Multi-tier lexical sentiment scoring pipeline detecting distress patterns',
      'Dynamic grounding exercise generator (breathing pacers, cognitive reframing)',
      'Emergency crisis resource routing with localized hotlines',
      'Localized encrypted journal storage ensuring 100% user privacy'
    ],
    technicalHighlights: [
      'Local-only data storage: sensitive sentiment logs remain strictly in local storage',
      'Calming, non-intrusive micro-interactions engineered to reduce cognitive overload',
      'Lightweight client bundle ensuring instant accessibility on any device'
    ],
    hardwareOrStack: 'JavaScript ESNext / Sentiment NLP / HTML5 / CSS3 / LocalStorage Security',
    codeUrl: 'https://github.com/SGM-SHAH/SafeEcho',
    liveUrl: null
  },
  flappy: {
    title: 'Flappy Bhai - SRM AP Edition',
    category: 'HTML5 Canvas & Physics',
    tagline: 'Custom campus-themed 2D canvas arcade game with global Firebase leaderboards',
    description: 'Arcade game simulation featuring custom SRM AP campus graphics, interactive obstacles, deterministic collision physics, and real-time Firebase global leaderboard synchronization.',
    architecture: 'Optimized requestAnimationFrame 2D canvas game loop with deterministic collision detection and cloud leaderboard sync.',
    keyModules: [
      'Delta-time normalized physics loop with velocity and gravity dampening',
      'AABB bounding box collision detection engine',
      'Global high-score telemetry integrated with Firebase Database',
      'Responsive canvas scaler preserving aspect ratios across mobile screens'
    ],
    technicalHighlights: [
      'Smooth 2D canvas execution with optimized memory lifecycle',
      'Anti-cheat client validation for submitted high-score runs',
      'Bespoke campus-inspired pixel art and responsive touch controls'
    ],
    hardwareOrStack: 'HTML5 Canvas / Vanilla JavaScript / Firebase Realtime DB',
    codeUrl: 'https://github.com/SGM-SHAH/Flappy-Bhai',
    liveUrl: 'https://sgm-shah.github.io/Flappy-Bhai/'
  }
};

// 2. THEME CONTROLLER (LIGHT / DARK SYSTEM)
(function initThemeEngine() {
  const toggleBtn = document.getElementById('theme-toggle');
  if (!toggleBtn) return;

  function getTheme() {
    return document.documentElement.className.includes('theme-light') ? 'theme-light' : 'theme-dark';
  }

  function applyTheme(theme) {
    document.documentElement.className = theme;
    document.body.className = theme;
    localStorage.setItem('sgm-theme', theme);
    const metaTheme = document.querySelector('meta[name="theme-color"]');
    if (metaTheme) {
      metaTheme.setAttribute('content', theme === 'theme-light' ? '#fbfbf9' : '#0e1015');
    }
  }

  toggleBtn.addEventListener('click', () => {
    const current = getTheme();
    const next = current === 'theme-light' ? 'theme-dark' : 'theme-light';
    applyTheme(next);
  });

  // Listen to OS theme changes if user has not explicitly chosen
  if (window.matchMedia) {
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
      if (!localStorage.getItem('sgm-theme')) {
        applyTheme(e.matches ? 'theme-dark' : 'theme-light');
      }
    });
  }
})();

// 3. ACCESSIBLE SPECIFICATION MODAL CONTROLLER
(function initProjectModal() {
  const backdrop = document.getElementById('project-story-backdrop');
  if (!backdrop) return;

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
  const modalCodeLink = document.getElementById('modal-code-link');

  let lastActiveElement = null;

  function openSpec(projectId, triggerBtn) {
    const spec = projectSpecs[projectId];
    if (!spec) return;

    lastActiveElement = triggerBtn || document.activeElement;

    if (modalCategory) modalCategory.textContent = spec.category.toUpperCase();
    if (modalTitle) modalTitle.textContent = spec.title;
    if (modalTagline) modalTagline.textContent = spec.tagline;
    if (modalDesc) modalDesc.textContent = spec.description;
    if (modalArch) modalArch.textContent = spec.architecture;

    if (modalModules) {
      modalModules.innerHTML = '';
      spec.keyModules.forEach(mod => {
        const li = document.createElement('li');
        li.className = 'modal-list-item';
        li.textContent = mod;
        modalModules.appendChild(li);
      });
    }

    if (modalHighlights) {
      modalHighlights.innerHTML = '';
      spec.technicalHighlights.forEach(hl => {
        const li = document.createElement('li');
        li.className = 'modal-list-item';
        li.textContent = hl;
        modalHighlights.appendChild(li);
      });
    }

    if (modalStack) modalStack.textContent = spec.hardwareOrStack;

    if (modalCodeLink) {
      if (spec.codeUrl) {
        modalCodeLink.style.display = 'inline-flex';
        modalCodeLink.href = spec.codeUrl;
      } else {
        modalCodeLink.style.display = 'none';
      }
    }

    if (modalLiveLink) {
      if (spec.liveUrl) {
        modalLiveLink.style.display = 'inline-flex';
        modalLiveLink.href = spec.liveUrl;
      } else {
        modalLiveLink.style.display = 'none';
      }
    }

    backdrop.classList.add('open');
    backdrop.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';

    // Focus close button
    if (closeBtn) closeBtn.focus();
  }

  function closeSpec() {
    backdrop.classList.remove('open');
    backdrop.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
    if (lastActiveElement && typeof lastActiveElement.focus === 'function') {
      lastActiveElement.focus();
    }
  }

  // Event Delegation for write-up buttons
  document.addEventListener('click', (e) => {
    const btn = e.target.closest('.btn-open-spec');
    if (btn) {
      const proj = btn.getAttribute('data-project');
      if (proj) {
        e.preventDefault();
        openSpec(proj, btn);
      }
    }
  });

  if (closeBtn) closeBtn.addEventListener('click', closeSpec);
  if (closeBtnBottom) closeBtnBottom.addEventListener('click', closeSpec);

  // Close on backdrop click outside dialog
  backdrop.addEventListener('click', (e) => {
    if (e.target === backdrop) closeSpec();
  });

  // Close on Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && backdrop.classList.contains('open')) {
      closeSpec();
    }
  });
})();

// 4. COPY EMAIL CONTROLLER
(function initCopyEmail() {
  const copyBtn = document.getElementById('copy-email-btn');
  const toast = document.getElementById('email-toast');
  const email = 'sgmshah07@gmail.com';

  if (!copyBtn) return;

  copyBtn.addEventListener('click', async () => {
    try {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        await navigator.clipboard.writeText(email);
      } else {
        const ta = document.createElement('textarea');
        ta.value = email;
        ta.style.position = 'fixed';
        ta.style.opacity = '0';
        document.body.appendChild(ta);
        ta.focus();
        ta.select();
        document.execCommand('copy');
        document.body.removeChild(ta);
      }

      if (toast) {
        toast.classList.add('show');
        setTimeout(() => toast.classList.remove('show'), 3000);
      }
    } catch (err) {
      console.error('Clipboard copy failed:', err);
    }
  });
})();

// 5. SIGNATURE MOMENT: LIVE IPL AUCTION SIMULATION TICKER
(function initIplAuctionTicker() {
  const highBidEl = document.getElementById('ipl-high-bid');
  const highTeamEl = document.getElementById('ipl-high-team');
  const teamPurseEl = document.getElementById('ipl-team-purse');
  const logEl = document.getElementById('ipl-bid-log');
  const userBidBtn = document.getElementById('ipl-user-bid-btn');
  const toggleBtn = document.getElementById('ipl-ticker-toggle-btn');

  if (!highBidEl || !userBidBtn) return;

  const franchises = [
    { name: 'Mumbai Indians', initialPurse: 120.0 },
    { name: 'Chennai Super Kings', initialPurse: 120.0 },
    { name: 'Royal Challengers Bengaluru', initialPurse: 120.0 },
    { name: 'Kolkata Knight Riders', initialPurse: 120.0 }
  ];

  let currentBidCr = 18.50;
  let currentLeader = 'Mumbai Indians';
  let isPaused = false;
  let tickerTimer = null;

  // Respect prefers-reduced-motion
  const prefersReducedMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (prefersReducedMotion) {
    isPaused = true;
    if (toggleBtn) toggleBtn.textContent = 'Resume';
  }

  function updateDisplay(team, bid, message) {
    currentBidCr = bid;
    currentLeader = team;
    highBidEl.textContent = `₹${bid.toFixed(2)} Cr`;
    highTeamEl.textContent = team;
    const remainingPurse = Math.max(0, 120.0 - bid);
    teamPurseEl.textContent = `₹${remainingPurse.toFixed(2)} Cr`;
    if (logEl) {
      logEl.textContent = message || `Live: ${team} holds high bid at ₹${bid.toFixed(2)} Cr`;
    }
  }

  function simulateNextBid() {
    if (isPaused) return;
    if (currentBidCr >= 25.0) {
      currentBidCr = 18.0;
    }
    const nextBid = +(currentBidCr + 0.50).toFixed(2);
    const otherTeams = franchises.filter(f => f.name !== currentLeader);
    const chosen = otherTeams[Math.floor(Math.random() * otherTeams.length)].name;
    updateDisplay(chosen, nextBid, `Live: ${chosen} raises bid to ₹${nextBid.toFixed(2)} Cr · Purse valid`);
  }

  userBidBtn.addEventListener('click', () => {
    const nextBid = +(currentBidCr + 0.50).toFixed(2);
    updateDisplay('Your Franchise (Bidder)', nextBid, `You placed bid of ₹${nextBid.toFixed(2)} Cr · Transaction verified`);
  });

  if (toggleBtn) {
    toggleBtn.addEventListener('click', () => {
      isPaused = !isPaused;
      toggleBtn.textContent = isPaused ? 'Resume' : 'Pause';
    });
  }

  // Auto-tick every 4.5 seconds if motion is enabled
  tickerTimer = setInterval(simulateNextBid, 4500);
})();
