/**
 * Sony Scrollytelling & Interactive Experience
 * Core Engine: Multi-Product Category Switcher (Headphones, Camera, Phones),
 * Preloader & Progressive Frame Streamer, Canvas 2D Scrubber, Storytelling Controller,
 * Interactive ANC Simulator, 360 Spatial Radar, and Web Audio Synthesizer.
 */

// Global Configuration & Multi-Product Dictionary
const TOTAL_FRAMES = 300;

const PRODUCTS = {
  headphones: {
    id: 'headphones',
    name: 'WH-1000XM6',
    fullName: 'Sony WH-1000XM6',
    tagline: 'Silence, perfected.',
    heroTag: 'The Next Standard in Silence',
    heroDesc: 'Flagship wireless noise cancelling, re-engineered for a world that never stops. Featuring the breakthrough Dual QN3 processor and 40mm bio-cellulose drivers.',
    framePrefix: '/Headphones/ezgif-frame-',
    framePad: 3,
    frameExt: '.jpg',
    ctaLabel: 'Pre-order',
    ctaPrice: '| $449',
    ctaButton: 'Experience WH-1000XM6',
    theme: {
      primary: '#0050FF',
      secondary: '#00D6FF',
      glow: 'rgba(0, 214, 255, 0.25)',
      gradient: 'linear-gradient(135deg, #0050FF 0%, #00D6FF 100%)'
    },
    beats: {
      hero: {
        tag: 'The Next Standard in Silence',
        title: 'Sony WH-1000XM6',
        subtitle: 'Silence, perfected.',
        desc: 'Flagship wireless noise cancelling, re-engineered for a world that never stops. Featuring the breakthrough Dual QN3 processor and 40mm bio-cellulose drivers.'
      },
      beat2: {
        tag: 'Engineering Reveal',
        title: 'Precision-engineered for silence.',
        desc1: 'Custom drivers, sealed acoustic chambers, and optimized airflow deliver studio-grade clarity.',
        desc2: 'Every single mechanical component is tuned for structural acoustic balance, instantaneous transient response, and weightless all-day comfort.',
        specs: [
          { label: 'Chassis', val: 'Magnesium Die-cast' },
          { label: 'Acoustics', val: 'Dual-Port Cavity' }
        ]
      },
      beat3: {
        tag: 'Acoustic Isolation',
        title: 'Adaptive noise cancelling, redefined.',
        bullets: [
          '<strong>12-Microphone Array</strong> captures ambient sound in full spherical 360°.',
          '<strong>Dual QN3 Processors</strong> calculate anti-noise phase at 700,000 cycles per second.',
          'Your music stays pure—airplanes, subway rumbles, and voices vanish.'
        ],
        chipLeft: 'QN3 REAL-TIME INVERSION',
        chipRight: '-38 dB NOISE FLOOR'
      },
      beat4: {
        tag: 'Audiophile Heritage',
        title: 'Immersive, lifelike sound.',
        desc1: 'Specially engineered 40mm bio-cellulose drivers unlock micro-detail, deep sub-bass texture, and expansive spatial separation in every track.',
        desc2: 'Edge-AI DSEE Extreme™ upscales compressed digital audio in real time, dynamically restoring harmonic overtones lost in compression.',
        badges: ['LDAC 990kbps', 'Hi-Res Audio Wireless', '360 Reality Audio']
      },
      beat5: {
        tag: 'The Flagship Experience',
        title: 'Hear everything.<br />Feel nothing else.',
        desc: 'WH-1000XM6. Designed for focus, crafted for comfort. Engineered for airports, offices, and everything in between.',
        cta: 'Experience WH-1000XM6'
      },
      hudStages: [
        'HERO BEAUTY PERSPECTIVE',
        'EXPLODED ACOUSTIC CHASSIS',
        '12-MIC ARRAY & DUAL QN3',
        '40mm BIO-CELLULOSE DRIVER',
        'FULL REASSEMBLY COMPLETE'
      ]
    }
  },

  camera: {
    id: 'camera',
    name: 'ALPHA 1 II',
    fullName: 'Sony Alpha 1 II',
    tagline: 'The one. The only.',
    heroTag: 'Flagship Mirrorless Redefined',
    heroDesc: 'The pinnacle of imaging engineering. 50.1 MP full-frame stacked Exmor RS sensor, dedicated AI processing unit, 30 fps blackout-free continuous shooting, and 8.5-stop optical stabilization.',
    framePrefix: '/Camera/camera-frame-',
    framePad: 3,
    frameExt: '.jpg',
    ctaLabel: 'Inquire',
    ctaPrice: '| $6,498',
    ctaButton: 'Experience Alpha 1 II',
    theme: {
      primary: '#FF6B00',
      secondary: '#FFAE00',
      glow: 'rgba(255, 120, 0, 0.28)',
      gradient: 'linear-gradient(135deg, #FF5500 0%, #FFAE00 100%)'
    },
    beats: {
      hero: {
        tag: 'Flagship Mirrorless Redefined',
        title: 'Sony Alpha 1 II',
        subtitle: 'The one. The only.',
        desc: 'The pinnacle of imaging engineering. 50.1 MP full-frame stacked Exmor RS sensor, dedicated AI processing unit, 30 fps blackout-free continuous shooting, and 8.5-stop optical stabilization.'
      },
      beat2: {
        tag: '50.1MP Exmor RS',
        title: 'Stacked full-frame architecture.',
        desc1: 'Integrated memory and ultra-fast readout deliver 30 fps blackout-free continuous shooting with full AF/AE tracking.',
        desc2: 'Zero distortion electronic shutter operating up to 1/32,000 sec with sync speeds up to 1/400 sec for flash photography.',
        specs: [
          { label: 'Sensor', val: '50.1 MP Stacked BSI CMOS' },
          { label: 'Readout Speed', val: '120 AF/AE Calculations/s' }
        ]
      },
      beat3: {
        tag: 'Dual BIONZ XR + AI Unit',
        title: 'Next-generation subject recognition.',
        bullets: [
          '<strong>Dedicated AI Processing Unit</strong> recognizes humans, animals, birds, insects, vehicles, and airplanes.',
          '<strong>Pre-Capture & Speed Boost</strong> buffers up to 1 second before shutter release.',
          'Real-time subject pose estimation predicts fast-moving athletic movement.'
        ],
        chipLeft: 'AI PROCESSING CHIP',
        chipRight: '8.5 STOPS IN-BODY IS'
      },
      beat4: {
        tag: 'Cinema Heritage & Optical IS',
        title: 'Cinematic 8K 30p and 4K 120p.',
        desc1: 'Full-sensor 8.6K oversampling for rich 8K 30p and high-speed 4K 120p recording with 10-bit 4:2:2 All-Intra compression.',
        desc2: 'World-class 8.5-stop central image stabilization and Dynamic Active Mode for steady handheld cine production.',
        badges: ['8K 30p 10-Bit 4:2:2', 'S-Cinetone™', '9.44M-dot 240fps EVF']
      },
      beat5: {
        tag: 'The Ultimate Creative Tool',
        title: 'No compromise.<br />Absolute creative mastery.',
        desc: 'Alpha 1 II. Rugged magnesium alloy chassis, dual CFexpress Type A slots, 2.5Gbps Ethernet, and ergonomic 4-axis multi-angle monitor.',
        cta: 'Experience Alpha 1 II'
      },
      hudStages: [
        'ALPHA 1 II HERO PROFILE',
        '50.1MP EXMOR RS SENSOR',
        'BIONZ XR + AI UNIT CORE',
        '8.5-STOP 5-AXIS IBIS UNIT',
        'CHASSIS SEALED & READY'
      ]
    }
  },

  phones: {
    id: 'phones',
    name: 'XPERIA 1 VI',
    fullName: 'Sony Xperia 1 VI',
    tagline: 'Pro camera, pro display.',
    heroTag: 'Powered by Alpha Image Technology',
    heroDesc: 'The ultimate smartphone camera experience. Featuring real optical telephoto zoom (85-170mm), Exmor T for mobile 2-layer transistor pixel, and BRAVIA OLED display intelligence.',
    framePrefix: '/Phones/phone-frame-',
    framePad: 3,
    frameExt: '.jpg',
    ctaLabel: 'Order Now',
    ctaPrice: '| $1,399',
    ctaButton: 'Experience Xperia 1 VI',
    theme: {
      primary: '#0055FF',
      secondary: '#00D6FF',
      glow: 'rgba(0, 214, 255, 0.28)',
      gradient: 'linear-gradient(135deg, #0055FF 0%, #00D6FF 100%)'
    },
    beats: {
      hero: {
        tag: 'Powered by Alpha Image Technology',
        title: 'Sony Xperia 1 VI',
        subtitle: 'Pro camera, pro display.',
        desc: 'The ultimate smartphone camera experience. Featuring continuous optical telephoto zoom, Exmor T for mobile 2-layer transistor pixel, and BRAVIA OLED tuning.'
      },
      beat2: {
        tag: 'Optics Architecture',
        title: 'Continuous optical telephoto.',
        desc1: 'True optical zoom from 85mm to 170mm without digital degradation, engineered with periscope glass prisms.',
        desc2: 'Macro telephoto capability unlocks breathtaking close-up details at 4cm focusing distance with natural bokeh.',
        specs: [
          { label: 'Optical Range', val: '85mm – 170mm (3.5x–7.1x)' },
          { label: 'Macro Focus', val: '4cm Minimum Distance' }
        ]
      },
      beat3: {
        tag: 'Sensor Intelligence',
        title: 'Exmor T for mobile stacked sensor.',
        bullets: [
          '<strong>2-Layer Transistor Pixel</strong> separates photodiode and transistor for 2x low-light sensitivity.',
          '<strong>Real-time Eye AF & Pose Tracking</strong> powered by AI estimating human skeletal posture.',
          '4K HDR 120fps video recording on all rear focal lengths.'
        ],
        chipLeft: 'EXMOR T 48MP STACKED',
        chipRight: '2X LOW-LIGHT DYNAMIC RANGE'
      },
      beat4: {
        tag: 'Display & Audio Heritage',
        title: 'Powered by BRAVIA AI processing.',
        desc1: 'Variable 1Hz to 120Hz LTPO OLED display with Sunlight Vision technology produces crisp, accurate HDR imagery anywhere.',
        desc2: 'Front-facing symmetrical full-stage stereo speakers deliver wide soundfield separation and lossless 3.5mm headphone jack fidelity.',
        badges: ['Snapdragon 8 Gen 3', 'BRAVIA OLED 120Hz', 'Hi-Res Audio & 3.5mm']
      },
      beat5: {
        tag: 'Creator Companion',
        title: 'Precision in your pocket.<br />Pro cinema everywhere.',
        desc: 'Xperia 1 VI. Two-day battery life, vapor-chamber cooling, tactile shutter release button, and uncompromising Japanese craft.',
        cta: 'Experience Xperia 1 VI'
      },
      hudStages: [
        'HERO TELEPHOTO PROFILE',
        'PERISCOPE OPTICS ASSEMBLY',
        'EXMOR T DUAL-LAYER SENSOR',
        'BRAVIA OLED LTPO DISPLAY',
        'COMPACT REASSEMBLY READY'
      ]
    }
  }
};

// Helper: Determine category from URL hash
function getCategoryFromHash() {
  const hash = (window.location.hash || '').replace('#', '').toLowerCase();
  if (PRODUCTS[hash]) return hash;
  return null;
}

// State Container
const state = {
  activeCategory: getCategoryFromHash() || 'headphones',
  frames: {
    headphones: new Array(TOTAL_FRAMES + 1),
    camera: new Array(TOTAL_FRAMES + 1),
    phones: new Array(TOTAL_FRAMES + 1)
  },
  isInitialReady: false,
  isTransitioning: false,
  targetProgress: 0,
  currentProgress: 0,
  currentFrameIndex: 1,
  audioEnabled: false,
  ancMode: 'max',       // 'max' | 'ambient' | 'off'
  ancEnv: 'cabin',      // 'cabin' | 'metro' | 'cafe'
  spatial: { angle: 45, distance: 1.2, x: 0.75, y: 0.25 },
  selectedColor: 'black'
};

/* ==========================================================================
   1. Image Sequence Preloader (Staged Progressive Streaming)
   ========================================================================== */
function padZero(num, size) {
  let s = num + '';
  while (s.length < size) s = '0' + s;
  return s;
}

function getFrameUrl(category, frameIndex) {
  const product = PRODUCTS[category] || PRODUCTS.headphones;
  return `${product.framePrefix}${padZero(frameIndex, product.framePad)}${product.frameExt}`;
}

function initPreloader() {
  const progressBar = document.getElementById('loader-progress-bar');
  const percentText = document.getElementById('loader-percent');
  const preloaderEl = document.getElementById('preloader');

  // Priority load: First 25 evenly distributed keyframes so user gets immediate 60fps scrub
  const priorityIndices = [];
  for (let i = 1; i <= TOTAL_FRAMES; i += 12) {
    priorityIndices.push(i);
  }
  if (!priorityIndices.includes(TOTAL_FRAMES)) priorityIndices.push(TOTAL_FRAMES);

  let priorityLoaded = 0;
  const totalPriority = priorityIndices.length;

  function onPriorityLoaded() {
    priorityLoaded++;
    const pct = Math.round((priorityLoaded / totalPriority) * 100);
    if (progressBar) progressBar.style.width = `${pct}%`;
    if (percentText) percentText.textContent = `${pct}%`;

    if (priorityLoaded >= totalPriority && !state.isInitialReady) {
      state.isInitialReady = true;
      // Draw first frame immediately
      renderCanvasFrame(1);

      // Dissolve preloader
      setTimeout(() => {
        if (preloaderEl) {
          preloaderEl.style.opacity = '0';
          preloaderEl.style.pointerEvents = 'none';
          setTimeout(() => preloaderEl.remove(), 700);
        }
      }, 300);

      // Stream remaining frames for active product in background
      streamCategoryFrames(state.activeCategory);

      // Preload first 5 frames of neighboring categories on idle
      preloadAdjacentKeyframes();
    }
  }

  // Load Priority Frames for the active category
  priorityIndices.forEach((index) => {
    const img = new Image();
    img.src = getFrameUrl(state.activeCategory, index);
    img.onload = () => {
      state.frames[state.activeCategory][index] = img;
      onPriorityLoaded();
    };
    img.onerror = () => {
      console.warn(`Failed to load frame ${index} for ${state.activeCategory}`);
      onPriorityLoaded();
    };
  });
}

function streamCategoryFrames(category) {
  const targetCategoryFrames = state.frames[category];
  for (let i = 1; i <= TOTAL_FRAMES; i++) {
    if (!targetCategoryFrames[i]) {
      const img = new Image();
      img.src = getFrameUrl(category, i);
      img.onload = () => {
        targetCategoryFrames[i] = img;
      };
    }
  }
}

// Preload adjacent categories' first 5 frames on idle so the switch feels instantaneous
function preloadAdjacentKeyframes() {
  const idleCallback = window.requestIdleCallback || ((cb) => setTimeout(cb, 500));
  idleCallback(() => {
    Object.keys(PRODUCTS).forEach((cat) => {
      if (cat !== state.activeCategory) {
        const catFrames = state.frames[cat];
        for (let i = 1; i <= 5; i++) {
          if (!catFrames[i]) {
            const img = new Image();
            img.src = getFrameUrl(cat, i);
            img.onload = () => {
              catFrames[i] = img;
            };
          }
        }
      }
    });
  });
}

// Find closest loaded frame if scrubbing fast before all 300 are loaded
function getBestAvailableFrame(category, index) {
  index = Math.max(1, Math.min(TOTAL_FRAMES, Math.round(index)));
  const catFrames = state.frames[category] || state.frames.headphones;
  
  if (catFrames[index] && catFrames[index].complete) {
    return catFrames[index];
  }
  // Search nearest neighbor
  for (let delta = 1; delta <= 30; delta++) {
    const before = index - delta;
    if (before >= 1 && catFrames[before] && catFrames[before].complete) {
      return catFrames[before];
    }
    const after = index + delta;
    if (after <= TOTAL_FRAMES && catFrames[after] && catFrames[after].complete) {
      return catFrames[after];
    }
  }
  return catFrames[1] || null;
}

/* ==========================================================================
   2. High-Performance Canvas Renderer
   ========================================================================== */
const canvas = document.getElementById('product-canvas');
const ctx = canvas ? canvas.getContext('2d', { alpha: false }) : null;

function resizeCanvas() {
  if (!canvas || !ctx) return;
  const dpr = Math.min(window.devicePixelRatio || 1, 2);
  const width = canvas.parentElement.clientWidth;
  const height = canvas.parentElement.clientHeight;

  canvas.width = width * dpr;
  canvas.height = height * dpr;
  ctx.scale(dpr, dpr);

  renderCanvasFrame(state.currentFrameIndex);
}

function renderCanvasFrame(frameIndex) {
  if (!canvas || !ctx) return;
  const width = canvas.parentElement.clientWidth;
  const height = canvas.parentElement.clientHeight;

  // Clear with void background color
  ctx.fillStyle = '#030303';
  ctx.fillRect(0, 0, width, height);

  const img = getBestAvailableFrame(state.activeCategory, frameIndex);
  if (!img) return;

  // Standard 16:9 Aspect ratio contain calculation
  const imgAspect = 16 / 9;
  const canvasAspect = width / height;

  let drawW, drawH, drawX, drawY;

  if (canvasAspect > imgAspect) {
    drawH = height;
    drawW = height * imgAspect;
    drawX = (width - drawW) / 2;
    drawY = 0;
  } else {
    drawW = width;
    drawH = width / imgAspect;
    drawX = 0;
    drawY = (height - drawH) / 2;
  }

  // Draw image
  ctx.drawImage(img, drawX, drawY, drawW, drawH);

  // Seamless radial edge vignette
  const gradient = ctx.createRadialGradient(
    width / 2, height / 2, Math.min(drawW, drawH) * 0.35,
    width / 2, height / 2, Math.max(drawW, drawH) * 0.58
  );
  gradient.addColorStop(0, 'rgba(3, 3, 3, 0)');
  gradient.addColorStop(0.85, 'rgba(3, 3, 3, 0)');
  gradient.addColorStop(1, 'rgba(3, 3, 3, 0.95)');

  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, width, height);
}

/* ==========================================================================
   3. Scrollytelling Engine & Frame Mapping
   ========================================================================== */
function calculateScrollProgress() {
  const container = document.getElementById('scrollytelling-container');
  if (!container) return;

  const rect = container.getBoundingClientRect();
  const totalScrollable = container.offsetHeight - window.innerHeight;
  const scrolled = -rect.top;

  const progress = Math.max(0, Math.min(1, scrolled / totalScrollable));
  state.targetProgress = progress;
}

// Animation Loop (Lerped 60-120fps scrubbing)
function animationLoop() {
  // Lerp progress for buttery feel
  state.currentProgress += (state.targetProgress - state.currentProgress) * 0.12;

  // Frame mapping logic:
  // 0.00 -> 0.85: forwards from 1 -> 300 (explode, disassembly)
  // 0.85 -> 0.92: reverse from 300 -> 1 (reassemble back into hero resting pose)
  // 0.92 -> 1.00: hold static at frame 1 (clean visual anchor before unpinning)
  let targetFrame;
  const p = state.currentProgress;

  if (p <= 0.85) {
    const normP = p / 0.85;
    targetFrame = 1 + normP * (TOTAL_FRAMES - 1);
  } else if (p <= 0.92) {
    const reassembleP = (p - 0.85) / 0.07;
    targetFrame = TOTAL_FRAMES - reassembleP * (TOTAL_FRAMES - 1);
  } else {
    targetFrame = 1;
  }

  const roundedFrame = Math.max(1, Math.min(TOTAL_FRAMES, Math.round(targetFrame)));

  if (roundedFrame !== state.currentFrameIndex) {
    state.currentFrameIndex = roundedFrame;
    renderCanvasFrame(state.currentFrameIndex);
  }

  requestAnimationFrame(animationLoop);
}

/* ==========================================================================
   4. Story Acts Scroll Reveal Observer
   ========================================================================== */
let storyActsObserver = null;

function initStoryActsObserver() {
  if (storyActsObserver) {
    storyActsObserver.disconnect();
  }

  const blocks = document.querySelectorAll('.story-act-block');
  if (!blocks.length) return;

  storyActsObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-revealed');
      }
    });
  }, {
    threshold: 0.15,
    rootMargin: '0px 0px -40px 0px'
  });

  blocks.forEach((block) => {
    storyActsObserver.observe(block);
  });
}

/* ==========================================================================
   5. Category Switcher & Dynamic Scrollytelling State Swapping
   ========================================================================== */
function switchCategory(targetCategory, pushHistory = true) {
  if (state.isTransitioning || targetCategory === state.activeCategory || !PRODUCTS[targetCategory]) {
    return;
  }

  state.isTransitioning = true;
  const product = PRODUCTS[targetCategory];
  const oldCategory = state.activeCategory;

  // 1. Close dropdown menu immediately (160ms)
  closeCategoryMenu();

  // 2. Crossfade navbar pill badge to new product name (300ms)
  const pill = document.getElementById('nav-product-pill');
  if (pill) {
    pill.classList.add('crossfading');
    setTimeout(() => {
      pill.textContent = product.name;
      pill.classList.remove('crossfading');
    }, 150);
  }

  // 3. Update Dropdown Items Active Dot & Current Attributes
  document.querySelectorAll('.category-item-btn').forEach((btn) => {
    const cat = btn.getAttribute('data-category');
    if (cat === targetCategory) {
      btn.setAttribute('aria-current', 'true');
      btn.classList.add('active');
    } else {
      btn.setAttribute('aria-current', 'false');
      btn.classList.remove('active');
    }
  });

  // 4. Update URL Hash / Browser History cleanly without page reload
  if (pushHistory) {
    history.pushState({ category: targetCategory }, '', `#${targetCategory}`);
  }

  // 5. Trigger Canvas & Story Acts Fade-out & Scale-down (0.98, 250ms)
  const canvasEl = document.getElementById('product-canvas');
  const storyActsContainer = document.getElementById('story-acts-container');
  const swapLoader = document.getElementById('category-swap-loader');

  if (swapLoader) swapLoader.classList.add('active');
  if (canvasEl) canvasEl.classList.add('content-swapping-out');
  if (storyActsContainer) storyActsContainer.classList.add('content-swapping-out');

  // Smoothly reset scroll position to top
  window.scrollTo({ top: 0, behavior: 'smooth' });

  // Priority load initial frame of the new product if not ready
  if (!state.frames[targetCategory][1]) {
    const initialImg = new Image();
    initialImg.src = getFrameUrl(targetCategory, 1);
    initialImg.onload = () => {
      state.frames[targetCategory][1] = initialImg;
    };
  }

  // After 250ms fade-out, swap content, themes, and fade back in
  setTimeout(() => {
    state.activeCategory = targetCategory;
    state.currentProgress = 0;
    state.targetProgress = 0;
    state.currentFrameIndex = 1;

    // A. Update Document Title & Metadata
    document.title = `${product.fullName} | ${product.tagline}`;

    // B. Dynamically update CSS Accent Tokens
    document.documentElement.style.setProperty('--accent-primary', product.theme.primary);
    document.documentElement.style.setProperty('--accent-secondary', product.theme.secondary);
    document.documentElement.style.setProperty('--accent-glow', product.theme.glow);
    document.documentElement.style.setProperty('--accent-gradient', product.theme.gradient);

    // C. Update Navbar CTA
    const navCtaLabel = document.getElementById('nav-cta-label');
    const navCtaPrice = document.getElementById('nav-cta-price');
    if (navCtaLabel) navCtaLabel.textContent = product.ctaLabel;
    if (navCtaPrice) navCtaPrice.textContent = product.ctaPrice;

    // D. Update Story Acts Copy for All 5 Acts
    applyProductNarrativeCopy(product);

    // E. Draw frame 1 of new product
    renderCanvasFrame(1);

    // F. Animate Canvas and Story Acts back in (scale 0.98 -> 1.0, fade in)
    if (canvasEl) {
      canvasEl.classList.remove('content-swapping-out');
      canvasEl.classList.add('content-swapping-in');
    }
    if (storyActsContainer) {
      storyActsContainer.classList.remove('content-swapping-out');
      storyActsContainer.classList.add('content-swapping-in');
    }

    // Hide loading line after transition
    setTimeout(() => {
      if (swapLoader) swapLoader.classList.remove('active');
    }, 200);

    // Reset reveal states and re-observe story acts
    document.querySelectorAll('.story-act-block').forEach((block) => {
      block.classList.remove('is-revealed');
    });
    initStoryActsObserver();

    // Stream all frames of new category in background
    streamCategoryFrames(targetCategory);

    // Clean up animation classes after entrance finishes
    setTimeout(() => {
      if (canvasEl) canvasEl.classList.remove('content-swapping-in');
      if (storyActsContainer) storyActsContainer.classList.remove('content-swapping-in');
      state.isTransitioning = false;
    }, 300);

  }, 250);
}

function applyProductNarrativeCopy(product) {
  const b = product.beats;

  // Act 1: Hero
  const actHeroTag = document.getElementById('act-hero-tag');
  const actHeroTitle = document.getElementById('act-hero-title');
  const actHeroSubtitle = document.getElementById('act-hero-subtitle');
  const actHeroDesc = document.getElementById('act-hero-desc');

  if (actHeroTag) {
    actHeroTag.innerHTML = `<span class="w-1.5 h-1.5 rounded-full bg-sony-cyan animate-pulse"></span> ${b.hero.tag}`;
  }
  if (actHeroTitle) actHeroTitle.textContent = b.hero.title;
  if (actHeroSubtitle) actHeroSubtitle.textContent = b.hero.subtitle;
  if (actHeroDesc) actHeroDesc.textContent = b.hero.desc;

  // Act 2: Architecture / Optics / Sensor
  const act2Tag = document.getElementById('act-2-tag');
  const act2Title = document.getElementById('act-2-title');
  const act2Desc1 = document.getElementById('act-2-desc-1');
  const act2Desc2 = document.getElementById('act-2-desc-2');
  const act2Specs = document.getElementById('act-2-specs');

  if (act2Tag) {
    act2Tag.innerHTML = `<span class="w-2 h-0.5 bg-sony-cyan"></span> ${b.beat2.tag}`;
  }
  if (act2Title) act2Title.textContent = b.beat2.title;
  if (act2Desc1) act2Desc1.textContent = b.beat2.desc1;
  if (act2Desc2) act2Desc2.textContent = b.beat2.desc2;
  if (act2Specs && b.beat2.specs) {
    act2Specs.innerHTML = b.beat2.specs.map(spec => `
      <div class="act-spec-item">
        <span class="act-spec-label">${spec.label}</span>
        <span class="act-spec-val">${spec.val}</span>
      </div>
    `).join('');
  }

  // Act 3: Core / Isolation / Processing
  const act3Tag = document.getElementById('act-3-tag');
  const act3Title = document.getElementById('act-3-title');
  const act3Bullets = document.getElementById('act-3-bullets');
  const act3Chip = document.getElementById('act-3-chip');

  if (act3Tag) {
    act3Tag.innerHTML = `<span class="w-2 h-0.5 bg-sony-cyan"></span> ${b.beat3.tag}`;
  }
  if (act3Title) act3Title.textContent = b.beat3.title;
  if (act3Bullets && b.beat3.bullets) {
    act3Bullets.innerHTML = b.beat3.bullets.map(item => `
      <li class="flex items-start gap-2.5">
        <span class="w-1.5 h-1.5 rounded-full bg-sony-cyan mt-2 flex-shrink-0"></span>
        <span>${item}</span>
      </li>
    `).join('');
  }
  if (act3Chip) {
    act3Chip.innerHTML = `
      <span class="text-sony-cyan">${b.beat3.chipLeft}</span>
      <span class="text-green-400 font-bold">${b.beat3.chipRight}</span>
    `;
  }

  // Act 4: Sound / Display / Cinema Heritage
  const act4Tag = document.getElementById('act-4-tag');
  const act4Title = document.getElementById('act-4-title');
  const act4Desc1 = document.getElementById('act-4-desc-1');
  const act4Desc2 = document.getElementById('act-4-desc-2');
  const act4Badges = document.getElementById('act-4-badges');

  if (act4Tag) {
    act4Tag.innerHTML = `<span class="w-2 h-0.5 bg-sony-cyan"></span> ${b.beat4.tag}`;
  }
  if (act4Title) act4Title.textContent = b.beat4.title;
  if (act4Desc1) act4Desc1.textContent = b.beat4.desc1;
  if (act4Desc2) act4Desc2.textContent = b.beat4.desc2;
  if (act4Badges && b.beat4.badges) {
    act4Badges.innerHTML = b.beat4.badges.map(badge => `
      <span class="act-feature-pill">${badge}</span>
    `).join('');
  }

  // Act 5: Reassembly & Hero CTA
  const act5Tag = document.getElementById('act-5-tag');
  const act5Title = document.getElementById('act-5-title');
  const act5Desc = document.getElementById('act-5-desc');
  const act5CtaBtn = document.getElementById('act-5-cta-btn');

  if (act5Tag) act5Tag.textContent = b.beat5.tag;
  if (act5Title) act5Title.innerHTML = b.beat5.title;
  if (act5Desc) act5Desc.textContent = b.beat5.desc;
  if (act5CtaBtn) act5CtaBtn.textContent = b.beat5.cta;
}

/* ==========================================================================
   5. Top Navbar & Dropdown Menu Interactions
   ========================================================================== */
function initNavbar() {
  const header = document.getElementById('site-header');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 30) {
      header?.classList.add('scrolled');
    } else {
      header?.classList.remove('scrolled');
    }
  }, { passive: true });
}

function openCategoryMenu() {
  const btn = document.getElementById('category-menu-btn');
  const menu = document.getElementById('category-dropdown-menu');
  const backdrop = document.getElementById('dropdown-backdrop');

  if (!menu || !btn) return;
  menu.classList.add('open');
  backdrop?.classList.add('active');
  btn.setAttribute('aria-expanded', 'true');
  playHapticSound(620, 0.05);

  // Focus active item
  const activeItem = menu.querySelector('.category-item-btn[aria-current="true"]');
  if (activeItem) activeItem.focus();
}

function closeCategoryMenu() {
  const btn = document.getElementById('category-menu-btn');
  const menu = document.getElementById('category-dropdown-menu');
  const backdrop = document.getElementById('dropdown-backdrop');

  if (!menu || !btn) return;
  menu.classList.remove('open');
  backdrop?.classList.remove('active');
  btn.setAttribute('aria-expanded', 'false');
}

function initCategoryMenu() {
  const btn = document.getElementById('category-menu-btn');
  const menu = document.getElementById('category-dropdown-menu');
  const backdrop = document.getElementById('dropdown-backdrop');

  if (!btn || !menu) return;

  btn.addEventListener('click', (e) => {
    e.stopPropagation();
    const isOpen = menu.classList.contains('open');
    if (isOpen) {
      closeCategoryMenu();
    } else {
      openCategoryMenu();
    }
  });

  // Backdrop click closes dropdown
  if (backdrop) {
    backdrop.addEventListener('click', () => {
      closeCategoryMenu();
    });
  }

  // Click outside listener
  document.addEventListener('click', (e) => {
    if (!menu.contains(e.target) && !btn.contains(e.target)) {
      closeCategoryMenu();
    }
  });

  // Escape key closes dropdown
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && menu.classList.contains('open')) {
      closeCategoryMenu();
      btn.focus();
    }
  });

  // Category selection handlers
  const categoryItems = menu.querySelectorAll('.category-item-btn');
  categoryItems.forEach((item, index) => {
    item.addEventListener('click', (e) => {
      e.preventDefault();
      const targetCat = item.getAttribute('data-category');
      if (targetCat) {
        switchCategory(targetCat, true);
        playHapticSound(740, 0.05);
      }
    });

    // Keyboard navigation (Arrow keys, Enter, Space)
    item.addEventListener('keydown', (e) => {
      if (e.key === 'ArrowDown') {
        e.preventDefault();
        const next = categoryItems[(index + 1) % categoryItems.length];
        next.focus();
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        const prev = categoryItems[(index - 1 + categoryItems.length) % categoryItems.length];
        prev.focus();
      }
    });
  });

  // Listen for browser Back/Forward navigation
  window.addEventListener('popstate', () => {
    const cat = getCategoryFromHash() || 'headphones';
    if (cat !== state.activeCategory) {
      switchCategory(cat, false);
    }
  });

  // Initialize active item dot in menu and pill text matching state
  categoryItems.forEach((btn) => {
    const cat = btn.getAttribute('data-category');
    if (cat === state.activeCategory) {
      btn.setAttribute('aria-current', 'true');
      btn.classList.add('active');
    } else {
      btn.setAttribute('aria-current', 'false');
      btn.classList.remove('active');
    }
  });

  const pill = document.getElementById('nav-product-pill');
  if (pill && PRODUCTS[state.activeCategory]) {
    pill.textContent = PRODUCTS[state.activeCategory].name;
  }
}

/* ==========================================================================
   6. Interactive Active Noise Cancellation (ANC) Simulator
   ========================================================================== */
const ancCanvas = document.getElementById('anc-wave-canvas');
const ancCtx = ancCanvas ? ancCanvas.getContext('2d') : null;
let ancAnimTime = 0;

const envPresets = {
  cabin: { ambientDb: 84, residualDb: 42, reduction: -42, freq: 1.5, noiseAmp: 28 },
  metro: { ambientDb: 88, residualDb: 48, reduction: -40, freq: 2.2, noiseAmp: 34 },
  cafe:  { ambientDb: 76, residualDb: 44, reduction: -32, freq: 3.0, noiseAmp: 22 }
};

function initAncSimulator() {
  const modeButtons = document.querySelectorAll('.anc-mode-btn');
  const envButtons = document.querySelectorAll('.anc-env-btn');
  const ambientReadout = document.getElementById('ambient-db-readout');
  const residualReadout = document.getElementById('residual-db-readout');
  const reductionReadout = document.getElementById('reduction-db-readout');
  const statusIndicator = document.getElementById('anc-status-indicator');
  const statusText = document.getElementById('anc-status-text');

  function updateReadouts() {
    const preset = envPresets[state.ancEnv];
    let residual, reduction;

    if (state.ancMode === 'max') {
      residual = preset.residualDb;
      reduction = preset.reduction;
      if (statusIndicator) statusIndicator.className = 'inline-block w-1.5 h-1.5 rounded-full bg-green-400 mr-1.5 animate-pulse';
      if (statusText) statusText.textContent = 'DUAL QN3 PHASE SYNC ACTIVE';
    } else if (state.ancMode === 'ambient') {
      residual = preset.ambientDb - 15;
      reduction = -15;
      if (statusIndicator) statusIndicator.className = 'inline-block w-1.5 h-1.5 rounded-full bg-amber-400 mr-1.5 animate-pulse';
      if (statusText) statusText.textContent = 'AMBIENT VOICE PASSTHROUGH';
    } else {
      residual = preset.ambientDb;
      reduction = 0;
      if (statusIndicator) statusIndicator.className = 'inline-block w-1.5 h-1.5 rounded-full bg-red-400 mr-1.5';
      if (statusText) statusText.textContent = 'NOISE CANCELLING OFF';
    }

    if (ambientReadout) ambientReadout.textContent = `${preset.ambientDb} dB`;
    if (residualReadout) residualReadout.textContent = `${residual} dB`;
    if (reductionReadout) reductionReadout.textContent = `${reduction} dB`;
  }

  modeButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
      modeButtons.forEach((b) => b.classList.remove('active'));
      btn.classList.add('active');
      state.ancMode = btn.getAttribute('data-mode');
      updateReadouts();
      playHapticSound();
    });
  });

  envButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
      envButtons.forEach((b) => b.classList.remove('active'));
      btn.classList.add('active');
      state.ancEnv = btn.getAttribute('data-env');
      updateReadouts();
      playHapticSound();
    });
  });

  updateReadouts();
  animateAncWaveform();
}

function animateAncWaveform() {
  if (!ancCanvas || !ancCtx) return;

  const dpr = Math.min(window.devicePixelRatio || 1, 2);
  const width = ancCanvas.parentElement.clientWidth;
  const height = ancCanvas.parentElement.clientHeight;

  if (ancCanvas.width !== width * dpr || ancCanvas.height !== height * dpr) {
    ancCanvas.width = width * dpr;
    ancCanvas.height = height * dpr;
    ancCtx.scale(dpr, dpr);
  }

  ancCtx.fillStyle = 'rgba(5, 5, 8, 0.4)';
  ancCtx.fillRect(0, 0, width, height);

  ancAnimTime += 0.04;
  const centerY = height / 2;
  const preset = envPresets[state.ancEnv];
  const points = 180;

  // 1. External Ambient Wave (Amber)
  ancCtx.beginPath();
  ancCtx.strokeStyle = '#f59e0b';
  ancCtx.lineWidth = 1.8;
  for (let i = 0; i <= points; i++) {
    const x = (i / points) * width;
    const wave = Math.sin(i * 0.08 * preset.freq + ancAnimTime * 2) * preset.noiseAmp
               + Math.sin(i * 0.16 + ancAnimTime * 3.5) * (preset.noiseAmp * 0.4);
    const y = centerY + wave;
    if (i === 0) ancCtx.moveTo(x, y);
    else ancCtx.lineTo(x, y);
  }
  ancCtx.stroke();

  // 2. Anti-Noise Wave (Cyan, Inverted Phase)
  if (state.ancMode !== 'off') {
    const attenuation = state.ancMode === 'max' ? 1.0 : 0.45;
    ancCtx.beginPath();
    ancCtx.strokeStyle = '#00d6ff';
    ancCtx.lineWidth = 1.8;
    for (let i = 0; i <= points; i++) {
      const x = (i / points) * width;
      const wave = -(Math.sin(i * 0.08 * preset.freq + ancAnimTime * 2) * preset.noiseAmp
                   + Math.sin(i * 0.16 + ancAnimTime * 3.5) * (preset.noiseAmp * 0.4)) * attenuation;
      const y = centerY + wave;
      if (i === 0) ancCtx.moveTo(x, y);
      else ancCtx.lineTo(x, y);
    }
    ancCtx.stroke();
  }

  // 3. Resulting Wave At Eardrum (Green, Flat when cancelled)
  ancCtx.beginPath();
  ancCtx.strokeStyle = '#4ade80';
  ancCtx.lineWidth = 2.4;
  for (let i = 0; i <= points; i++) {
    const x = (i / points) * width;
    let wave;
    if (state.ancMode === 'max') {
      wave = Math.sin(i * 0.4 + ancAnimTime * 4) * 2.2;
    } else if (state.ancMode === 'ambient') {
      wave = (Math.sin(i * 0.08 * preset.freq + ancAnimTime * 2) * preset.noiseAmp) * 0.45;
    } else {
      wave = Math.sin(i * 0.08 * preset.freq + ancAnimTime * 2) * preset.noiseAmp
           + Math.sin(i * 0.16 + ancAnimTime * 3.5) * (preset.noiseAmp * 0.4);
    }
    const y = centerY + wave;
    if (i === 0) ancCtx.moveTo(x, y);
    else ancCtx.lineTo(x, y);
  }
  ancCtx.stroke();

  requestAnimationFrame(animateAncWaveform);
}

/* ==========================================================================
   7. Interactive 360 Reality Audio Spatial Radar
   ========================================================================== */
function initSpatialRadar() {
  const orb = document.getElementById('spatial-orb');
  const radar = orb ? orb.parentElement : null;
  const angleDisplay = document.getElementById('spatial-angle-display');
  const distanceDisplay = document.getElementById('spatial-distance-display');

  if (!orb || !radar) return;

  let isDragging = false;

  function updateOrbPosition(clientX, clientY) {
    const rect = radar.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const radius = rect.width / 2 - 20;

    let dx = clientX - centerX;
    let dy = clientY - centerY;
    const distance = Math.sqrt(dx * dx + dy * dy);

    if (distance > radius) {
      dx = (dx / distance) * radius;
      dy = (dy / distance) * radius;
    }

    const orbX = centerX + dx - rect.left;
    const orbY = centerY + dy - rect.top;

    orb.style.left = `${orbX}px`;
    orb.style.top = `${orbY}px`;

    let deg = Math.round(Math.atan2(dx, -dy) * (180 / Math.PI));
    let distMeters = ((distance / radius) * 2.0).toFixed(1);

    state.spatial.angle = deg;
    state.spatial.distance = distMeters;

    if (angleDisplay) angleDisplay.textContent = `${deg}°`;
    if (distanceDisplay) distanceDisplay.textContent = `${distMeters}m`;
  }

  radar.addEventListener('pointerdown', (e) => {
    isDragging = true;
    updateOrbPosition(e.clientX, e.clientY);
    playHapticSound();
  });

  window.addEventListener('pointermove', (e) => {
    if (!isDragging) return;
    updateOrbPosition(e.clientX, e.clientY);
  });

  window.addEventListener('pointerup', () => {
    if (isDragging) isDragging = false;
  });
}

/* ==========================================================================
   8. Colorway Studio Switcher
   ========================================================================== */
function initColorways() {
  const cards = document.querySelectorAll('.color-card');
  const modalOpts = document.querySelectorAll('.modal-color-opt');

  cards.forEach((card) => {
    card.addEventListener('click', () => {
      cards.forEach((c) => c.classList.remove('active'));
      card.classList.add('active');
      const color = card.getAttribute('data-color');
      state.selectedColor = color;

      modalOpts.forEach((opt) => {
        if (opt.getAttribute('data-color') === color) {
          opt.classList.add('active');
        } else {
          opt.classList.remove('active');
        }
      });

      playHapticSound();
    });
  });

  modalOpts.forEach((opt) => {
    opt.addEventListener('click', () => {
      modalOpts.forEach((o) => o.classList.remove('active'));
      opt.classList.add('active');
      state.selectedColor = opt.getAttribute('data-color');
      cards.forEach((c) => {
        if (c.getAttribute('data-color') === state.selectedColor) c.classList.add('active');
        else c.classList.remove('active');
      });
      playHapticSound();
    });
  });
}

/* ==========================================================================
   9. Pre-Order Modal / Drawer
   ========================================================================== */
function initPreorderModal() {
  const modal = document.getElementById('preorder-modal');
  const openButtons = document.querySelectorAll('#open-preorder-btn, .trigger-preorder-modal');
  const closeBtn = document.getElementById('close-preorder-btn');
  const backdrop = document.getElementById('modal-backdrop');
  const confirmBtn = document.getElementById('confirm-preorder-btn');
  const successMsg = document.getElementById('preorder-success-msg');

  function openModal() {
    if (!modal) return;
    modal.classList.add('open');
    if (successMsg) successMsg.classList.add('hidden');
    playHapticSound();
  }

  function closeModal() {
    if (!modal) return;
    modal.classList.remove('open');
  }

  openButtons.forEach((btn) => btn.addEventListener('click', openModal));
  if (closeBtn) closeBtn.addEventListener('click', closeModal);
  if (backdrop) backdrop.addEventListener('click', closeModal);

  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal?.classList.contains('open')) closeModal();
  });

  if (confirmBtn) {
    confirmBtn.addEventListener('click', () => {
      confirmBtn.textContent = 'Processing reservation...';
      confirmBtn.disabled = true;
      setTimeout(() => {
        confirmBtn.textContent = 'Reservation Confirmed';
        if (successMsg) successMsg.classList.remove('hidden');
        playCelebrationSound();
      }, 600);
    });
  }
}

/* ==========================================================================
   10. Web Audio API Ambient & Haptic Sound Engine
   ========================================================================== */
let audioCtx = null;
let ambientGain = null;

function initWebAudio() {
  const soundToggleBtn = document.getElementById('sound-toggle-btn');
  const iconOn = document.getElementById('sound-icon-on');
  const iconOff = document.getElementById('sound-icon-off');
  const textBtn = document.getElementById('sound-btn-text');

  if (!soundToggleBtn) return;

  soundToggleBtn.addEventListener('click', () => {
    if (!audioCtx) {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      audioCtx = new AudioContext();
      setupAmbientSynthesizer();
    }

    if (audioCtx.state === 'suspended') {
      audioCtx.resume();
    }

    state.audioEnabled = !state.audioEnabled;

    if (state.audioEnabled) {
      iconOn?.classList.remove('hidden');
      iconOff?.classList.add('hidden');
      if (textBtn) textBtn.textContent = 'Audio On';
      if (ambientGain) ambientGain.gain.setTargetAtTime(0.12, audioCtx.currentTime, 0.5);
      playHapticSound(880, 0.1);
    } else {
      iconOn?.classList.add('hidden');
      iconOff?.classList.remove('hidden');
      if (textBtn) textBtn.textContent = 'Audio Off';
      if (ambientGain) ambientGain.gain.setTargetAtTime(0, audioCtx.currentTime, 0.3);
    }
  });
}

function setupAmbientSynthesizer() {
  if (!audioCtx) return;

  const bufferSize = audioCtx.sampleRate * 2;
  const buffer = audioCtx.createBuffer(1, bufferSize, audioCtx.sampleRate);
  const data = buffer.getChannelData(0);
  let b0 = 0, b1 = 0, b2 = 0, b3 = 0, b4 = 0, b5 = 0, b6 = 0;

  for (let i = 0; i < bufferSize; i++) {
    const white = Math.random() * 2 - 1;
    b0 = 0.99886 * b0 + white * 0.0555179;
    b1 = 0.99332 * b1 + white * 0.0750759;
    b2 = 0.96900 * b2 + white * 0.1538520;
    b3 = 0.86650 * b3 + white * 0.3104856;
    b4 = 0.55000 * b4 + white * 0.5329522;
    b5 = -0.7616 * b5 - white * 0.0168980;
    data[i] = (b0 + b1 + b2 + b3 + b4 + b5 + b6 + white * 0.5362) * 0.04;
    b6 = white * 0.115926;
  }

  const noise = audioCtx.createBufferSource();
  noise.buffer = buffer;
  noise.loop = true;

  const lowpass = audioCtx.createBiquadFilter();
  lowpass.type = 'lowpass';
  lowpass.frequency.value = 220;

  ambientGain = audioCtx.createGain();
  ambientGain.gain.value = 0;

  noise.connect(lowpass);
  lowpass.connect(ambientGain);
  ambientGain.connect(audioCtx.destination);
  noise.start(0);
}

function playHapticSound(freq = 540, duration = 0.06) {
  if (!state.audioEnabled || !audioCtx) return;
  try {
    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();
    osc.type = 'sine';
    osc.frequency.setValueAtTime(freq, audioCtx.currentTime);
    gain.gain.setValueAtTime(0.08, audioCtx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + duration);

    osc.connect(gain);
    gain.connect(audioCtx.destination);
    osc.start();
    osc.stop(audioCtx.currentTime + duration);
  } catch (err) {
    // Silently ignore
  }
}

function playCelebrationSound() {
  if (!state.audioEnabled || !audioCtx) return;
  const notes = [440, 554.37, 659.25, 880];
  notes.forEach((freq, idx) => {
    setTimeout(() => playHapticSound(freq, 0.25), idx * 90);
  });
}

/* ==========================================================================
   11. Initialization & Listeners
   ========================================================================== */
window.addEventListener('DOMContentLoaded', () => {
  // If starting from a valid category hash in URL, initialize theme and copy immediately
  const initialCategory = getCategoryFromHash();
  if (initialCategory && initialCategory !== 'headphones') {
    state.activeCategory = initialCategory;
    applyProductNarrativeCopy(PRODUCTS[initialCategory]);
    const theme = PRODUCTS[initialCategory].theme;
    document.documentElement.style.setProperty('--accent-primary', theme.primary);
    document.documentElement.style.setProperty('--accent-secondary', theme.secondary);
    document.documentElement.style.setProperty('--accent-glow', theme.glow);
    document.documentElement.style.setProperty('--accent-gradient', theme.gradient);
  }

  initPreloader();
  initNavbar();
  initCategoryMenu();
  initStoryActsObserver();
  initAncSimulator();
  initSpatialRadar();
  initColorways();
  initPreorderModal();
  initWebAudio();

  window.addEventListener('scroll', calculateScrollProgress, { passive: true });
  window.addEventListener('resize', resizeCanvas, { passive: true });

  resizeCanvas();
  calculateScrollProgress();
  animationLoop();
});
