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
    name: 'XPERIA PRO-I',
    fullName: 'Sony Xperia Pro-I',
    tagline: 'The 1.0-type sensor camera smartphone.',
    heroTag: '1.0-Type Exmor RS Sensor Phone',
    heroDesc: 'The camera phone for creators. Featuring a genuine 1.0-type Exmor RS image sensor with phase-detection autofocus, dual aperture F2.0 / F4.0, ZEISS Tessar optics, and 4K 120fps video.',
    framePrefix: '/Phones/phone-frame-',
    framePad: 3,
    frameExt: '.jpg',
    ctaLabel: 'Order Now',
    ctaPrice: '| $1,799',
    ctaButton: 'Experience Xperia Pro-I',
    theme: {
      primary: '#0055FF',
      secondary: '#00D6FF',
      glow: 'rgba(0, 214, 255, 0.28)',
      gradient: 'linear-gradient(135deg, #0055FF 0%, #00D6FF 100%)'
    },
    beats: {
      hero: {
        tag: 'Display & Architecture',
        title: 'Sony Xperia Pro-I',
        subtitle: 'The 1.0-type sensor camera smartphone.',
        desc: 'Engineered for dedicated creators. Combining a genuine 1.0-type Exmor RS sensor with ZEISS Tessar optics, dedicated shutter release button, and 4K 120fps recording.'
      },
      beat2: {
        tag: 'Display & Architecture',
        title: '4K HDR OLED. Precision wave chassis.',
        desc1: '6.5" 4K HDR 120Hz OLED display (3840 x 1644) tuned with BRAVIA technology delivers professional master monitor color reproduction.',
        desc2: 'Corning Gorilla Glass Victus and tactile wave-grooved aluminum edge frame form an ultra-rigid, secure chassis with integrated lanyard hole.',
        specs: [
          { label: 'Display', val: '6.5" 4K HDR 120Hz OLED' },
          { label: 'Chassis', val: 'Wave-Grooved CNC Aluminum' }
        ]
      },
      beat3: {
        tag: 'Performance & Core',
        title: 'Flagship compute. Pro imaging engine.',
        bullets: [
          '<strong>Snapdragon 888 5G</strong> platform with 12GB RAM and 512GB UFS 3.1 storage.',
          '<strong>Dedicated BIONZ X™ for Mobile</strong> engine powers 20fps AF/AE tracking burst.',
          '<strong>Multi-Layer HDI Logic Board</strong> features dedicated 3.5mm audiophile headphone jack circuitry.'
        ],
        chipLeft: 'SNAPDRAGON 888 5G',
        chipRight: 'BIONZ X IMAGING ENGINE'
      },
      beat4: {
        tag: 'Energy & Endurance',
        title: 'High-density endurance. Intelligent care.',
        desc1: '4,500 mAh battery with 30W USB PD fast charging (50% in 30 minutes) and H.S. Power Control to prevent overheating while filming.',
        desc2: 'Xperia Adaptive Charging and Battery Care technology keep the cell healthy past 3 years of daily heavy use.',
        badges: ['4,500 mAh Capacity', '30W USB PD Fast Charge', 'H.S. Power Control']
      },
      beat5: {
        tag: 'Camera & Optical Mastery',
        title: '1.0-Type Exmor RS.<br />The photographer\'s phone.',
        desc: 'Xperia Pro-I. A true 1.0-type sensor with 2.4µm pixels, ZEISS Tessar T* optics, mechanical dual aperture F2.0/F4.0, and 312 phase-detection AF points.',
        cta: 'Experience Xperia Pro-I'
      },
      hudStages: [
        'HERO 1.0-TYPE PROFILE',
        'ZEISS TESSAR T* OPTICS',
        'EXMOR RS 1.0-TYPE SENSOR',
        '4K HDR OLED 120Hz DISPLAY',
        'FULL REASSEMBLY READY'
      ]
    }
  }
};

// Precision Component Callouts Data for Headphones (Stage 2 & Stage 3)
const HEADPHONES_COMPONENTS = {
  headband: {
    id: 'headband',
    label: 'Headband Cushion',
    startFrame: 91,
    endFrame: 120,
    box: { normX: 0.27, normY: 0.02, normW: 0.46, normH: 0.38 },
    anchor: { normX: 0.73, normY: 0.14 },
    card: { normX: 0.76, normY: 0.12 },
    desc: 'Cushioned support structure distributing weight evenly to eliminate pressure points during extended listening sessions.',
    specs: [
      { label: 'Chassis', val: 'Seamless Magnesium Alloy Frame' },
      { label: 'Padding', val: 'Micro-Cellular Memory Foam' },
      { label: 'Slider', val: 'Stepless Silent Friction Slider' },
      { label: 'Clamping Force', val: 'Calibrated 3.2N Ergonomic Fit' }
    ]
  },
  cushion: {
    id: 'cushion',
    label: 'Ear Cushion Cover',
    startFrame: 121,
    endFrame: 150,
    box: { normX: 0.74, normY: 0.42, normW: 0.22, normH: 0.50 },
    anchor: { normX: 0.74, normY: 0.62 },
    card: { normX: 0.46, normY: 0.52 },
    desc: 'Soft protein-leather cushion on the outer chassis providing superior passive noise isolation and weightless all-day comfort.',
    specs: [
      { label: 'Material', val: 'Synthetic Soft-Fit Protein Leather' },
      { label: 'Core Foam', val: 'Thermo-Pressure Relieving Foam' },
      { label: 'Passive Seal', val: '-18 dB Acoustic Attenuation' },
      { label: 'Weight', val: '28g per ear-pad' }
    ]
  },
  pcb: {
    id: 'pcb',
    label: 'Circuit Board (PCB)',
    startFrame: 171,
    endFrame: 190,
    box: { normX: 0.65, normY: 0.36, normW: 0.16, normH: 0.36 },
    anchor: { normX: 0.65, normY: 0.52 },
    card: { normX: 0.26, normY: 0.30 },
    desc: 'The central high-density circuit board managing Bluetooth connectivity, active noise-cancelling processing, and power distribution.',
    specs: [
      { label: 'Processor', val: 'Dual Sony QN3 NC Processor' },
      { label: 'Connectivity', val: 'Bluetooth 5.3 + LE Audio & LDAC' },
      { label: 'Audio Engine', val: 'Edge-AI DSEE Extreme™ Realtime' },
      { label: 'Clock Speed', val: '700,000 Phase Corrections/sec' }
    ]
  },
  driver: {
    id: 'driver',
    label: 'Acoustic Driver Unit',
    startFrame: 211,
    endFrame: 250,
    box: { normX: 0.28, normY: 0.10, normW: 0.44, normH: 0.76 },
    anchor: { normX: 0.72, normY: 0.20 },
    card: { normX: 0.76, normY: 0.16 },
    desc: 'Custom-tuned dynamic driver delivering wide frequency response, studio-grade clarity, and explosive dynamic range.',
    specs: [
      { label: 'Diameter', val: '40mm High-Rigidity Dome' },
      { label: 'Diaphragm', val: 'Bio-Cellulose Carbon Composite' },
      { label: 'Frequency', val: '4 Hz – 40,000 Hz' },
      { label: 'Impedance', val: '48 Ω (Active) / 16 Ω (Passive)' }
    ]
  }
};

// Precision Component Callouts Data for Phones (User Specified Frame Ranges for Xperia Pro-I)
const PHONES_COMPONENTS = {
  front_glass: {
    id: 'front_glass',
    label: 'Front Glass Panel',
    startFrame: 21,
    endFrame: 26,
    box: { normX: 0.22, normY: 0.24, normW: 0.56, normH: 0.52 },
    anchor: { normX: 0.50, normY: 0.38 },
    card: { normX: 0.68, normY: 0.20 },
    desc: 'Corning® Gorilla® Glass Victus® front panel delivering superior scratch resistance and drop protection with an anti-reflective oleophobic coating.',
    specs: [
      { label: 'Material', val: 'Gorilla Glass Victus' },
      { label: 'Surface Coating', val: 'Oleophobic anti-fingerprint' },
      { label: 'Drop Resistance', val: 'Up to 2.0m onto hard surfaces' },
      { label: 'Touch Sampling', val: '240Hz High-Speed Scan' }
    ]
  },
  oled_display: {
    id: 'oled_display',
    label: 'OLED Display Panel',
    startFrame: 27,
    endFrame: 54,
    box: { normX: 0.18, normY: 0.22, normW: 0.64, normH: 0.56 },
    anchor: { normX: 0.52, normY: 0.44 },
    card: { normX: 0.68, normY: 0.18 },
    desc: '6.5" 4K HDR 120Hz OLED display (3840 x 1644) tuned with BRAVIA technology for professional master monitor color accuracy.',
    specs: [
      { label: 'Resolution', val: '4K HDR (3840 × 1644)' },
      { label: 'Aspect Ratio', val: '21:9 CinemaWide™' },
      { label: 'Refresh Rate', val: '120Hz Native' },
      { label: 'Color Gamut', val: '100% DCI-P3 / BT.2020' }
    ]
  },
  chassis_frame: {
    id: 'chassis_frame',
    label: 'Chassis Frame',
    startFrame: 64,
    endFrame: 73,
    box: { normX: 0.14, normY: 0.20, normW: 0.72, normH: 0.60 },
    anchor: { normX: 0.46, normY: 0.44 },
    card: { normX: 0.18, normY: 0.16 },
    desc: 'Tactile wave-grooved aluminum frame providing a firm grip, dedicated hardware two-stage shutter button, and IP65/68 water/dust resistance.',
    specs: [
      { label: 'Chassis', val: 'Ribbed CNC Aluminum Alloy' },
      { label: 'Hardware Controls', val: 'Two-stage Shutter + Video Key' },
      { label: 'Ingress Protection', val: 'IP65 / IP68 Submersible' },
      { label: 'Lanyard Hole', val: 'Integrated Wrist Strap Eyelet' }
    ]
  },
  processor_soc: {
    id: 'processor_soc',
    label: 'Processor (SoC)',
    startFrame: 98,
    endFrame: 118,
    box: { normX: 0.16, normY: 0.16, normW: 0.68, normH: 0.56 },
    anchor: { normX: 0.48, normY: 0.42 },
    card: { normX: 0.66, normY: 0.14 },
    desc: 'Qualcomm® Snapdragon™ 888 5G Mobile Platform with dedicated BIONZ X™ for mobile image processing engine for 20fps AF/AE tracking.',
    specs: [
      { label: 'SoC', val: 'Qualcomm Snapdragon 888 5G' },
      { label: 'Image Engine', val: 'BIONZ X™ for Mobile' },
      { label: 'Memory', val: '12GB LPDDR5 RAM' },
      { label: 'Storage', val: '512GB UFS 3.1 + MicroSD up to 1TB' }
    ]
  },
  logic_board: {
    id: 'logic_board',
    label: 'Logic Board (PCB)',
    startFrame: 143,
    endFrame: 180,
    box: { normX: 0.14, normY: 0.18, normW: 0.70, normH: 0.60 },
    anchor: { normX: 0.50, normY: 0.48 },
    card: { normX: 0.66, normY: 0.18 },
    desc: 'High-density multi-layer stacked PCB with copper-alloy thermal diffusion plates and integrated 3.5mm audiophile headphone jack circuitry.',
    specs: [
      { label: 'PCB Architecture', val: 'Multi-layer High Density Interconnect' },
      { label: 'Audio Out', val: '3.5mm Headphone Jack (<0.5% crosstalk)' },
      { label: 'Audio Codec', val: 'Hi-Res Audio, LDAC, 360 Reality' },
      { label: 'Thermal Shield', val: 'Multi-layer Graphite & Copper Sheet' }
    ]
  },
  battery_cell: {
    id: 'battery_cell',
    label: 'Battery Cell',
    startFrame: 181,
    endFrame: 200,
    box: { normX: 0.16, normY: 0.08, normW: 0.64, normH: 0.50 },
    anchor: { normX: 0.48, normY: 0.30 },
    card: { normX: 0.64, normY: 0.12 },
    desc: '4,500 mAh battery with Xperia Adaptive Charging and Battery Care technology to protect against battery degradation over years of use.',
    specs: [
      { label: 'Capacity', val: '4,500 mAh' },
      { label: 'Fast Charging', val: 'USB PD 30W (50% in 30 mins)' },
      { label: 'Battery Lifespan', val: '3+ Years Healthy Runtime' },
      { label: 'Power Delivery', val: 'H.S. Power Control (Bypass charging)' }
    ]
  },
  camera_module: {
    id: 'camera_module',
    label: 'Camera Module',
    startFrame: 254,
    endFrame: 300,
    box: { normX: 0.24, normY: 0.18, normW: 0.62, normH: 0.54 },
    anchor: { normX: 0.56, normY: 0.44 },
    card: { normX: 0.14, normY: 0.20 },
    desc: 'World-class 1.0-type Exmor RS® CMOS sensor with 2.4µm pixel pitch, ZEISS® Tessar T* anti-reflective optics, and dual aperture F2.0 / F4.0.',
    specs: [
      { label: 'Primary Sensor', val: '1.0-type Exmor RS CMOS' },
      { label: 'Pixel Pitch', val: '2.4µm Super Large Pixels' },
      { label: 'Dual Aperture', val: 'F2.0 / F4.0 Mechanical Dual' },
      { label: 'Autofocus', val: '312 Phase Detection Points (90% frame)' }
    ]
  }
};

// Precision Component Callouts Data for Alpha 1 II Camera
const CAMERA_COMPONENTS = {
  sensor: {
    id: 'sensor',
    label: '50.1MP Exmor RS Sensor',
    startFrame: 60,
    endFrame: 100,
    box: { normX: 0.25, normY: 0.20, normW: 0.50, normH: 0.60 },
    anchor: { normX: 0.75, normY: 0.22 },
    card: { normX: 0.78, normY: 0.20 },
    desc: 'Full-frame stacked CMOS image sensor with integrated memory delivering 30fps continuous shooting and 120 AF/AE calculations per second.',
    specs: [
      { label: 'Resolution', val: '50.1 Effective Megapixels' },
      { label: 'Sensor Type', val: '35mm Full-Frame Stacked Exmor RS' },
      { label: 'Continuous Speed', val: 'Up to 30 fps with AF/AE' },
      { label: 'Dynamic Range', val: '15+ Stops in S-Log3' }
    ]
  },
  bionz: {
    id: 'bionz',
    label: 'Dual BIONZ XR™ + AI Unit',
    startFrame: 120,
    endFrame: 160,
    box: { normX: 0.20, normY: 0.20, normW: 0.60, normH: 0.60 },
    anchor: { normX: 0.80, normY: 0.20 },
    card: { normX: 0.82, normY: 0.18 },
    desc: 'Cutting-edge image processing engine combined with dedicated deep-learning AI processing unit for human pose and animal/vehicle recognition.',
    specs: [
      { label: 'Architecture', val: 'Dual BIONZ XR Processors' },
      { label: 'AI Processing', val: 'Dedicated Deep Learning Unit' },
      { label: 'Subject Tracking', val: 'Humans, Animals, Birds, Vehicles' },
      { label: 'Readout Latency', val: '<3.3ms Ultra-Low Delay' }
    ]
  },
  ibis: {
    id: 'ibis',
    label: '8.5-Stop 5-Axis IBIS Unit',
    startFrame: 180,
    endFrame: 220,
    box: { normX: 0.20, normY: 0.20, normW: 0.60, normH: 0.60 },
    anchor: { normX: 0.80, normY: 0.24 },
    card: { normX: 0.82, normY: 0.22 },
    desc: 'Precision gyro sensors and stabilization algorithms deliver 8.5 stops of center stabilization and 7.0 stops at peripheral zones.',
    specs: [
      { label: 'Stabilization', val: '8.5 Stops Center / 7.0 Peripheral' },
      { label: 'Axes', val: 'Pitch, Yaw, Roll, X, Y Shift' },
      { label: 'Mode', val: 'Dynamic Active Mode for Video' },
      { label: 'Gyro Sampling', val: 'High-precision 10kHz Sensor' }
    ]
  },
  shutter: {
    id: 'shutter',
    label: 'Precision Shutter Mechanism',
    startFrame: 235,
    endFrame: 270,
    box: { normX: 0.22, normY: 0.20, normW: 0.56, normH: 0.60 },
    anchor: { normX: 0.22, normY: 0.24 },
    card: { normX: 0.04, normY: 0.20 },
    desc: 'Dual-drive shutter mechanism with carbon-fiber curtains tested to 500,000 cycles, capable of 1/400s flash sync speed.',
    specs: [
      { label: 'Max Speed', val: '1/32,000s (Electronic) / 1/8,000s (Mech)' },
      { label: 'Flash Sync', val: '1/400s Full-Frame (1/500s APS-C)' },
      { label: 'Durability', val: '500,000+ Actuations Tested' },
      { label: 'Curtain', val: 'Dual-Drive Carbon Fiber' }
    ]
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
  activeCategory: getCategoryFromHash() || 'phones',
  frames: {
    headphones: new Array(TOTAL_FRAMES + 1),
    camera: new Array(TOTAL_FRAMES + 1),
    phones: new Array(TOTAL_FRAMES + 1)
  },
  isInitialReady: false,
  isTransitioning: false,
  isDrawerOpen: false,
  activeCalloutKey: null,
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
  const preloaderTitle = document.getElementById('preloader-title');
  const preloaderSubtitle = document.getElementById('preloader-subtitle');

  const activeProduct = PRODUCTS[state.activeCategory];
  if (preloaderTitle && activeProduct) preloaderTitle.textContent = activeProduct.name;
  if (preloaderSubtitle && activeProduct) preloaderSubtitle.textContent = activeProduct.tagline;

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
  updateCallouts(state.currentFrameIndex, state.currentProgress);
  updateHeroTitleDocking(state.currentFrameIndex, state.currentProgress);
  if (typeof drawGalleryCanvasFrame === 'function') {
    drawGalleryCanvasFrame(galleryState.currentFrame);
  }
}

function getCanvasDrawMetrics() {
  if (!canvas || !canvas.parentElement) {
    return { width: 0, height: 0, drawW: 0, drawH: 0, drawX: 0, drawY: 0 };
  }
  const width = canvas.parentElement.clientWidth;
  const height = canvas.parentElement.clientHeight;
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

  return { width, height, drawW, drawH, drawX, drawY };
}

function renderCanvasFrame(frameIndex) {
  if (!canvas || !ctx) return;
  const metrics = getCanvasDrawMetrics();
  const { width, height, drawW, drawH, drawX, drawY } = metrics;

  // Clear with void background color #050505
  ctx.fillStyle = '#050505';
  ctx.fillRect(0, 0, width, height);

  const img = getBestAvailableFrame(state.activeCategory, frameIndex);
  if (!img) return;

  // Draw image
  ctx.drawImage(img, drawX, drawY, drawW, drawH);

  // Seamless radial edge vignette
  const gradient = ctx.createRadialGradient(
    width / 2, height / 2, Math.min(drawW, drawH) * 0.35,
    width / 2, height / 2, Math.max(drawW, drawH) * 0.58
  );
  gradient.addColorStop(0, 'rgba(5, 5, 5, 0)');
  gradient.addColorStop(0.85, 'rgba(5, 5, 5, 0)');
  gradient.addColorStop(1, 'rgba(5, 5, 5, 0.95)');

  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, width, height);
}

/* ==========================================================================
   2b. Precision Callout Markers & Component Detail Drawer Engine
   ========================================================================== */

// Stage 0: Hero Title (00-0 to 08-0 scroll & persistent section label docking)
function updateHeroTitleDocking(currentFrame, p) {
  const heroTitleEl = document.getElementById('hero-docking-title');
  if (!heroTitleEl) return;

  if (state.activeCategory === 'phones') {
    // Initial state: Display 'Sony Xperia Pro-I' centered on screen
    // As user scrolls, animate toward the top of the page and fade out completely (disappears like an animation)
    if (p <= 0.09) {
      heroTitleEl.style.display = 'block';
      const normProgress = Math.max(0, Math.min(1, p / 0.09));
      const ease = normProgress * normProgress * (3 - 2 * normProgress);

      const startTop = window.innerHeight * 0.50;
      const targetTop = 36; // Moves to top of viewport
      const currentTop = startTop + (targetTop - startTop) * ease;

      const scale = 1.0 - ease * 0.35; // Shrinks 1.0 -> 0.65 as it travels upward

      // Smoothly fade out as it reaches the top
      let opacity = 1.0;
      if (normProgress > 0.25) {
        opacity = Math.max(0, 1.0 - (normProgress - 0.25) / 0.75);
      }

      heroTitleEl.textContent = 'Sony Xperia Pro-I';
      heroTitleEl.style.letterSpacing = '-0.025em';
      heroTitleEl.style.textTransform = 'none';
      heroTitleEl.style.fontWeight = '800';
      heroTitleEl.style.top = `${currentTop.toFixed(1)}px`;
      heroTitleEl.style.left = '50%';
      heroTitleEl.style.transform = `translate(-50%, -50%) scale(${scale.toFixed(3)})`;
      heroTitleEl.style.opacity = opacity.toFixed(3);
    } else {
      // Disappears completely — no text overlaps or docks over the mobile
      heroTitleEl.style.display = 'none';
      heroTitleEl.style.opacity = '0';
    }
    return;
  }

  if (state.activeCategory === 'headphones') {
    if (currentFrame <= 90 && p <= 0.30) {
      heroTitleEl.style.display = 'block';
      const normProgress = Math.max(0, Math.min(1, (currentFrame - 1) / 89));
      const ease = normProgress * normProgress * (3 - 2 * normProgress);
      const startTop = window.innerHeight * 0.50;
      const targetTop = 40;
      const currentTop = startTop + (targetTop - startTop) * ease;
      const scale = 1.0 - ease * 0.35;
      let opacity = 1.0;
      if (normProgress > 0.60) {
        opacity = Math.max(0, 1.0 - (normProgress - 0.60) / 0.40);
      }
      heroTitleEl.textContent = 'Sony WH-1000XM6';
      heroTitleEl.style.letterSpacing = '-0.02em';
      heroTitleEl.style.textTransform = 'none';
      heroTitleEl.style.top = `${currentTop.toFixed(1)}px`;
      heroTitleEl.style.left = '50%';
      heroTitleEl.style.transform = `translate(-50%, -50%) scale(${scale.toFixed(3)})`;
      heroTitleEl.style.opacity = opacity.toFixed(3);
    } else {
      heroTitleEl.style.display = 'none';
      heroTitleEl.style.opacity = '0';
    }
    return;
  }

  heroTitleEl.style.display = 'none';
}

// Stage 2: Precision Component Callouts (SVG Bounding Boxes & Leader Lines)
function updateCallouts(currentFrame, p) {
  const overlayLayer = document.getElementById('callout-overlay-layer');
  const bbox = document.getElementById('callout-bbox');
  const line = document.getElementById('callout-line');
  const anchorDot = document.getElementById('callout-anchor-dot');
  const card = document.getElementById('component-callout-card');
  const nameLabel = document.getElementById('callout-component-name');
  const detailsBtn = document.getElementById('callout-details-btn');

  if (!overlayLayer || !bbox || !line || !anchorDot || !card) return;

  let compMap = null;
  let activeKey = null;

  if (state.activeCategory === 'phones') {
    compMap = PHONES_COMPONENTS;
    // Mark components based on current frame during scroll explosion
    if (p <= 0.92) {
      for (const key of Object.keys(PHONES_COMPONENTS)) {
        const comp = PHONES_COMPONENTS[key];
        if (currentFrame >= comp.startFrame && currentFrame <= comp.endFrame) {
          activeKey = key;
          break;
        }
      }
    }
  } else if (state.activeCategory === 'headphones') {
    compMap = HEADPHONES_COMPONENTS;
    if (p <= 0.88) {
      for (const key of Object.keys(HEADPHONES_COMPONENTS)) {
        const comp = HEADPHONES_COMPONENTS[key];
        if (currentFrame >= comp.startFrame && currentFrame <= comp.endFrame) {
          activeKey = key;
          break;
        }
      }
    }
  }

  if (!activeKey || !compMap) {
    // Fast fade-out (150ms)
    bbox.style.opacity = '0';
    line.style.opacity = '0';
    anchorDot.style.opacity = '0';
    card.classList.remove('visible');
    state.activeCalloutKey = null;
    return;
  }

  state.activeCalloutKey = activeKey;
  const comp = compMap[activeKey];
  const metrics = getCanvasDrawMetrics();
  const { width, height, drawW, drawH, drawX, drawY } = metrics;

  if (drawW <= 0 || drawH <= 0) return;

  // Calculate pixel coordinates for Bounding Box
  const boxX = drawX + comp.box.normX * drawW;
  const boxY = drawY + comp.box.normY * drawH;
  const boxW = comp.box.normW * drawW;
  const boxH = comp.box.normH * drawH;

  // For phone alone: remove the rectangle bounding box shape
  if (state.activeCategory === 'phones') {
    bbox.style.display = 'none';
    bbox.style.opacity = '0';
    bbox.setAttribute('width', '0');
    bbox.setAttribute('height', '0');
  } else {
    bbox.style.display = 'block';
    bbox.setAttribute('x', boxX.toFixed(1));
    bbox.setAttribute('y', boxY.toFixed(1));
    bbox.setAttribute('width', boxW.toFixed(1));
    bbox.setAttribute('height', boxH.toFixed(1));
    bbox.style.opacity = '1';
  }

  // Position Card
  let cardX = drawX + comp.card.normX * drawW;
  let cardY = drawY + comp.card.normY * drawH;

  // Viewport bounds checking so card is never clipped
  const cardMaxX = width - 260;
  if (cardX > cardMaxX) cardX = cardMaxX;
  if (cardX < 20) cardX = 20;
  if (cardY < 80) cardY = 80;
  if (cardY > height - 130) cardY = height - 130;

  card.style.left = `${cardX.toFixed(1)}px`;
  card.style.top = `${cardY.toFixed(1)}px`;
  if (nameLabel) nameLabel.textContent = comp.label;

  // Stage 1 confirmation callout has NO 'View More Details' button
  if (detailsBtn) {
    if (comp.isConfirmationOnly) {
      detailsBtn.style.display = 'none';
    } else {
      detailsBtn.style.display = 'inline-flex';
    }
  }

  card.classList.add('visible');

  // Anchor dot and Leader line calculation
  if (state.activeCategory === 'phones') {
    const anchorX = drawX + comp.anchor.normX * drawW;
    const anchorY = drawY + comp.anchor.normY * drawH;
    anchorDot.setAttribute('cx', anchorX.toFixed(1));
    anchorDot.setAttribute('cy', anchorY.toFixed(1));
    anchorDot.style.opacity = '1';

    // For phone, keep the line for animation part alone
    const cardMidX = cardX + 80;
    const lineStartX = cardMidX >= anchorX ? cardX : (cardX + (card.offsetWidth || 160));
    const lineStartY = cardY + 16;
    line.setAttribute('x1', lineStartX.toFixed(1));
    line.setAttribute('y1', lineStartY.toFixed(1));
    line.setAttribute('x2', anchorX.toFixed(1));
    line.setAttribute('y2', anchorY.toFixed(1));
    line.style.opacity = '1';
  } else {
    // Nearest bounding box border calculation: connects card to the near edge of the box
    // so lines never slice through components from one end to the other end
    const cardMidX = cardX + 80;
    const boxMidX = boxX + boxW / 2;
    const cardYCenter = cardY + 16;

    let anchorX, anchorY;
    let lineStartX, lineStartY;

    if (cardMidX >= boxMidX) {
      // Card is on the RIGHT side of the component:
      // Connect to the RIGHT border of the bounding box
      anchorX = boxX + boxW;
      anchorY = Math.max(boxY + 14, Math.min(boxY + boxH - 14, cardYCenter));
      lineStartX = Math.max(cardX, anchorX + 2);
      lineStartY = cardYCenter;
    } else {
      // Card is on the LEFT side of the component:
      // Connect to the LEFT border of the bounding box
      anchorX = boxX;
      anchorY = Math.max(boxY + 14, Math.min(boxY + boxH - 14, cardYCenter));
      const cardW = card.offsetWidth || 160;
      lineStartX = Math.min(cardX + cardW, anchorX - 2);
      lineStartY = cardYCenter;
    }

    anchorDot.setAttribute('cx', anchorX.toFixed(1));
    anchorDot.setAttribute('cy', anchorY.toFixed(1));
    anchorDot.style.opacity = '1';

    line.setAttribute('x1', lineStartX.toFixed(1));
    line.setAttribute('y1', lineStartY.toFixed(1));
    line.setAttribute('x2', anchorX.toFixed(1));
    line.setAttribute('y2', anchorY.toFixed(1));
    line.style.opacity = '1';
  }
}

// Stage 3: Slide-In Component Detail Drawer Controller
function initComponentDrawer() {
  const detailsBtn = document.getElementById('callout-details-btn');
  const drawer = document.getElementById('component-detail-drawer');
  const backdrop = document.getElementById('drawer-backdrop');
  const closeBtn = document.getElementById('drawer-close-btn');
  const bottomCloseBtn = document.getElementById('drawer-bottom-close-btn');

  if (detailsBtn) {
    detailsBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      const defaultKey = state.activeCategory === 'phones' ? 'front_glass' : 'headband';
      openComponentDrawer(state.activeCalloutKey || defaultKey);
    });
  }

  if (closeBtn) {
    closeBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      closeComponentDrawer();
    });
  }

  if (bottomCloseBtn) {
    bottomCloseBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      closeComponentDrawer();
    });
  }

  if (backdrop) {
    backdrop.addEventListener('click', () => {
      closeComponentDrawer();
    });
  }

  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && state.isDrawerOpen) {
      closeComponentDrawer();
    }
  });
}

function openComponentDrawer(key) {
  const compMap = state.activeCategory === 'phones' ? PHONES_COMPONENTS : (state.activeCategory === 'camera' ? CAMERA_COMPONENTS : HEADPHONES_COMPONENTS);
  const fallbackKey = state.activeCategory === 'phones' ? 'front_glass' : (state.activeCategory === 'camera' ? 'sensor' : 'headband');
  const comp = compMap[key] || compMap[fallbackKey];
  const drawer = document.getElementById('component-detail-drawer');
  const backdrop = document.getElementById('drawer-backdrop');
  const title = document.getElementById('drawer-title');
  const desc = document.getElementById('drawer-desc');
  const specsContainer = document.getElementById('drawer-specs');

  if (!drawer || !comp) return;

  state.isDrawerOpen = true;

  if (title) title.textContent = comp.label;
  if (desc) desc.textContent = comp.desc;
  if (specsContainer && comp.specs) {
    specsContainer.innerHTML = comp.specs.map(s => `
      <div class="drawer-spec-row">
        <span class="drawer-spec-label">${s.label}</span>
        <span class="drawer-spec-value">${s.val}</span>
      </div>
    `).join('');
  }

  drawer.classList.add('open');
  if (backdrop) backdrop.classList.add('open');
  playHapticSound(720, 0.08);
}

function closeComponentDrawer() {
  const drawer = document.getElementById('component-detail-drawer');
  const backdrop = document.getElementById('drawer-backdrop');

  state.isDrawerOpen = false;
  if (drawer) drawer.classList.remove('open');
  if (backdrop) backdrop.classList.remove('open');
  playHapticSound(480, 0.06);
}

/* ==========================================================================
   3. Scrollytelling Engine & Frame Mapping
   ========================================================================== */
function calculateScrollProgress() {
  if (state.isDrawerOpen) return; // Pause canvas scroll-scrubbing while drawer is open
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
  if (!state.isDrawerOpen) {
    // Lerp progress for buttery feel
    state.currentProgress += (state.targetProgress - state.currentProgress) * 0.12;

    const p = state.currentProgress;

    // Frame mapping logic:
    let targetFrame;
    if (state.activeCategory === 'phones') {
      // Stage 0: 0.00 -> 0.08: Hero title entrance, upward shrink & dock. Frame holds at 1.
      // Stage 1: 0.08 -> 0.15: Assembled phone reveal (frames 1 to 14), confirmation callout badge active.
      // Stage 2: 0.15 -> 0.95: Disassembly mapped smoothly from frame 15 to 300 with active precision callouts.
      // Stage 4: 0.95 -> 0.98: Reassembly glide from frame 300 back to frame 1.
      //          0.98 -> 1.00: Static hero pose at frame 1 before releasing into copy sections.
      if (p <= 0.92) {
        const normP = p / 0.92;
        targetFrame = 1 + normP * (TOTAL_FRAMES - 1);
      } else if (p <= 0.98) {
        const reassembleP = (p - 0.92) / 0.06;
        targetFrame = TOTAL_FRAMES - reassembleP * (TOTAL_FRAMES - 1);
      } else {
        targetFrame = 1;
      }

      if (canvas) {
        canvas.style.opacity = '1';
        canvas.style.transform = 'scale(1)';
      }
    } else if (state.activeCategory === 'headphones') {
      if (canvas) {
        canvas.style.opacity = '1';
        canvas.style.transform = 'scale(1)';
      }
      if (p <= 0.88) {
        const normP = p / 0.88;
        targetFrame = 1 + normP * (TOTAL_FRAMES - 1);
      } else if (p <= 0.95) {
        const reassembleP = (p - 0.88) / 0.07;
        targetFrame = TOTAL_FRAMES - reassembleP * (TOTAL_FRAMES - 1);
      } else {
        targetFrame = 1;
      }
    } else {
      if (canvas) {
        canvas.style.opacity = '1';
        canvas.style.transform = 'scale(1)';
      }
      if (p <= 0.85) {
        const normP = p / 0.85;
        targetFrame = 1 + normP * (TOTAL_FRAMES - 1);
      } else if (p <= 0.92) {
        const reassembleP = (p - 0.85) / 0.07;
        targetFrame = TOTAL_FRAMES - reassembleP * (TOTAL_FRAMES - 1);
      } else {
        targetFrame = 1;
      }
    }

    const roundedFrame = Math.max(1, Math.min(TOTAL_FRAMES, Math.round(targetFrame)));

    if (roundedFrame !== state.currentFrameIndex) {
      state.currentFrameIndex = roundedFrame;
      renderCanvasFrame(state.currentFrameIndex);
    }

    // Stage 0: Hero Title update (00-0 to 08-0 scroll & docking)
    updateHeroTitleDocking(state.currentFrameIndex, p);

    // Stage 1 & 2: Update precision component callouts
    updateCallouts(state.currentFrameIndex, p);
  }

  requestAnimationFrame(animationLoop);
}

/* ==========================================================================
   3b. Interactive Component Gallery & Small Square Thumbnails Controller
   (Under Animation, Above "The Next Standard in Silence")
   ========================================================================== */
const GALLERY_CONFIG = {
  phones: [
    { id: 'animation', label: 'Animation', isAnimation: true, frame: 1 },
    { id: 'front_glass', label: 'Front Glass', frame: 24, compKey: 'front_glass', thumbPosition: '50% 36%', thumbScale: 1.35 },
    { id: 'oled_display', label: 'OLED Display', frame: 40, compKey: 'oled_display', thumbPosition: '50% 44%', thumbScale: 1.35 },
    { id: 'chassis_frame', label: 'Chassis', frame: 68, compKey: 'chassis_frame', thumbPosition: '50% 45%', thumbScale: 1.35 },
    { id: 'processor_soc', label: 'Processor', frame: 108, compKey: 'processor_soc', thumbPosition: '48% 42%', thumbScale: 2.2 },
    { id: 'logic_board', label: 'Logic Board', frame: 160, compKey: 'logic_board', thumbPosition: '50% 48%', thumbScale: 1.6 },
    { id: 'battery_cell', label: 'Battery', frame: 190, compKey: 'battery_cell', thumbPosition: '48% 30%', thumbScale: 1.8 },
    { id: 'camera_module', label: 'Camera', frame: 275, compKey: 'camera_module', thumbPosition: '56% 44%', thumbScale: 2.0 }
  ],
  headphones: [
    { id: 'animation', label: 'Animation', isAnimation: true, frame: 1 },
    { id: 'headband', label: 'Headband', frame: 105, compKey: 'headband', thumbPosition: '50% 12%', thumbScale: 1.55 },
    { id: 'cushion', label: 'Cushion', frame: 135, compKey: 'cushion', thumbPosition: '84% 65%', thumbScale: 1.65 },
    { id: 'pcb', label: 'Circuit PCB', frame: 180, compKey: 'pcb', thumbPosition: '78% 50%', thumbScale: 1.85 },
    { id: 'driver', label: '40mm Driver', frame: 225, compKey: 'driver', thumbPosition: '50% 45%', thumbScale: 1.35 }
  ],
  camera: [
    { id: 'animation', label: 'Animation', isAnimation: true, frame: 1 },
    { id: 'sensor', label: '50MP Sensor', frame: 80, compKey: 'sensor', thumbPosition: '50% 45%', thumbScale: 1.7 },
    { id: 'bionz', label: 'BIONZ XR', frame: 140, compKey: 'bionz', thumbPosition: '50% 48%', thumbScale: 1.8 },
    { id: 'ibis', label: '8.5-Stop IBIS', frame: 200, compKey: 'ibis', thumbPosition: '50% 50%', thumbScale: 1.6 },
    { id: 'shutter', label: 'Shutter Unit', frame: 250, compKey: 'shutter', thumbPosition: '50% 45%', thumbScale: 1.7 }
  ]
};

const galleryState = {
  activeKey: 'animation',
  isPlaying: true,
  isVisible: false,
  currentFrame: 1,
  direction: 1,
  lastFrameTime: 0,
  animId: null,
  selectedCompKey: null
};

function initComponentGallery() {
  const section = document.getElementById('component-gallery-section');
  if (!section) return;

  const playToggleBtn = document.getElementById('gallery-play-toggle-btn');
  const returnAnimBtn = document.getElementById('gallery-return-anim-btn');
  const openDrawerBtn = document.getElementById('gallery-open-drawer-btn');

  if (playToggleBtn) {
    playToggleBtn.addEventListener('click', () => {
      galleryState.isPlaying = !galleryState.isPlaying;
      updateGalleryPlayBtnState();
      playHapticSound(520, 0.05);
    });
  }

  if (returnAnimBtn) {
    returnAnimBtn.addEventListener('click', () => {
      selectGalleryItem('animation', 1, null);
    });
  }

  if (openDrawerBtn) {
    openDrawerBtn.addEventListener('click', () => {
      if (galleryState.selectedCompKey) {
        openComponentDrawer(galleryState.selectedCompKey);
      }
    });
  }

  renderComponentGallery(state.activeCategory);

  // IntersectionObserver so animation only runs when visible
  const obs = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      galleryState.isVisible = entry.isIntersecting;
      if (entry.isIntersecting && galleryState.activeKey === 'animation') {
        drawGalleryCanvasFrame(galleryState.currentFrame);
      }
    });
  }, { threshold: 0.05 });
  obs.observe(section);

  if (!galleryState.animId) {
    galleryState.animId = requestAnimationFrame(galleryAnimationLoop);
  }

  drawGalleryCanvasFrame(1);
}

function updateGalleryPlayBtnState() {
  const playIcon = document.getElementById('gallery-play-icon');
  const pauseIcon = document.getElementById('gallery-pause-icon');
  const playText = document.getElementById('gallery-play-text');

  if (galleryState.isPlaying) {
    playIcon?.classList.add('hidden');
    pauseIcon?.classList.remove('hidden');
    if (playText) playText.textContent = 'Pause';
  } else {
    playIcon?.classList.remove('hidden');
    pauseIcon?.classList.add('hidden');
    if (playText) playText.textContent = 'Play';
  }
}

function renderComponentGallery(category) {
  const strip = document.getElementById('gallery-thumbnails-strip');
  const titleEl = document.getElementById('gallery-title');
  const eyebrowEl = document.getElementById('gallery-eyebrow');
  if (!strip) return;

  const product = PRODUCTS[category] || PRODUCTS.phones;
  if (titleEl) titleEl.textContent = `${product.fullName} Components`;
  if (eyebrowEl) eyebrowEl.textContent = `${product.name} ARCHITECTURE GALLERY`;

  const items = GALLERY_CONFIG[category] || GALLERY_CONFIG.phones;

  strip.innerHTML = items.map((item) => {
    const isAnim = item.isAnimation;
    const imgUrl = getFrameUrl(category, item.frame);
    const label = item.label;
    const isCurrentActive = galleryState.activeKey === item.id;

    if (isAnim) {
      return `
        <button
          type="button"
          class="gallery-thumb-btn ${isCurrentActive ? 'active' : ''}"
          data-key="${item.id}"
          data-frame="${item.frame}"
          role="tab"
          aria-selected="${isCurrentActive ? 'true' : 'false'}"
          aria-label="${label}"
          title="${label}"
        >
          <div class="gallery-thumb-media">
            <img src="${imgUrl}" alt="${label}" class="gallery-thumb-img" />
            <div class="gallery-thumb-play-overlay">
              <span class="gallery-thumb-play-badge">
                <svg class="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
              </span>
            </div>
          </div>
          <span class="gallery-thumb-label">${label}</span>
        </button>
      `;
    }

    return `
      <button
        type="button"
        class="gallery-thumb-btn ${isCurrentActive ? 'active' : ''}"
        data-key="${item.id}"
        data-frame="${item.frame}"
        data-comp="${item.compKey || ''}"
        role="tab"
        aria-selected="${isCurrentActive ? 'true' : 'false'}"
        aria-label="${label}"
        title="${label}"
      >
        <div class="gallery-thumb-media">
          <img
            src="${imgUrl}"
            alt="${label}"
            class="gallery-thumb-img"
            style="object-position: ${item.thumbPosition || '50% 50%'}; transform: scale(${item.thumbScale || 1}); transform-origin: ${item.thumbPosition || '50% 50%'};"
            loading="lazy"
          />
        </div>
        <span class="gallery-thumb-label">${label}</span>
      </button>
    `;
  }).join('');

  // Wire up thumbnail clicks
  strip.querySelectorAll('.gallery-thumb-btn').forEach((btn) => {
    btn.addEventListener('click', () => {
      const key = btn.getAttribute('data-key');
      const frame = parseInt(btn.getAttribute('data-frame'), 10);
      const compKey = btn.getAttribute('data-comp');
      selectGalleryItem(key, frame, compKey);
    });
  });
}

/**
 * Ensures the anchor dot is placed precisely on the bounding box perimeter.
 * If defaultAnchor is already on an edge of the box, returns it.
 * Otherwise, calculates the exact point where a line from (originX, originY)
 * towards the component center intersects the bounding box perimeter.
 */
function getBoxBorderPoint(box, originX, originY, defaultAnchor) {
  if (!box) {
    if (defaultAnchor) return { x: defaultAnchor.normX, y: defaultAnchor.normY };
    return { x: originX, y: originY };
  }

  const xMin = box.normX;
  const xMax = box.normX + box.normW;
  const yMin = box.normY;
  const yMax = box.normY + box.normH;
  const eps = 0.015;

  // Calculate ray intersection from (originX, originY) towards box center to find the nearest perimeter
  const cx = box.normX + box.normW / 2;
  const cy = box.normY + box.normH / 2;
  const dx = cx - originX;
  const dy = cy - originY;

  if (Math.abs(dx) < 1e-5 && Math.abs(dy) < 1e-5) {
    return { x: xMin, y: cy };
  }

  let bestT = Infinity;
  let borderX = xMin;
  let borderY = cy;

  // Left border: x = xMin
  if (dx > 0) {
    const t = (xMin - originX) / dx;
    if (t >= 0 && t < bestT) {
      const y = originY + t * dy;
      if (y >= yMin - eps && y <= yMax + eps) {
        bestT = t;
        borderX = xMin;
        borderY = Math.max(yMin, Math.min(yMax, y));
      }
    }
  }

  // Right border: x = xMax
  if (dx < 0) {
    const t = (xMax - originX) / dx;
    if (t >= 0 && t < bestT) {
      const y = originY + t * dy;
      if (y >= yMin - eps && y <= yMax + eps) {
        bestT = t;
        borderX = xMax;
        borderY = Math.max(yMin, Math.min(yMax, y));
      }
    }
  }

  // Top border: y = yMin
  if (dy > 0) {
    const t = (yMin - originY) / dy;
    if (t >= 0 && t < bestT) {
      const x = originX + t * dx;
      if (x >= xMin - eps && x <= xMax + eps) {
        bestT = t;
        borderX = Math.max(xMin, Math.min(xMax, x));
        borderY = yMin;
      }
    }
  }

  // Bottom border: y = yMax
  if (dy < 0) {
    const t = (yMax - originY) / dy;
    if (t >= 0 && t < bestT) {
      const x = originX + t * dx;
      if (x >= xMin - eps && x <= xMax + eps) {
        bestT = t;
        borderX = Math.max(xMin, Math.min(xMax, x));
        borderY = yMax;
      }
    }
  }

  return { x: borderX, y: borderY };
}

function selectGalleryItem(key, frame, compKey) {
  galleryState.activeKey = key;
  const strip = document.getElementById('gallery-thumbnails-strip');
  if (strip) {
    strip.querySelectorAll('.gallery-thumb-btn').forEach((btn) => {
      const bKey = btn.getAttribute('data-key');
      if (bKey === key) {
        btn.classList.add('active');
        btn.setAttribute('aria-selected', 'true');
      } else {
        btn.classList.remove('active');
        btn.setAttribute('aria-selected', 'false');
      }
    });
  }

  const animView = document.getElementById('gallery-animation-view');
  const photoView = document.getElementById('gallery-photo-view');
  const photoImg = document.getElementById('gallery-photo-img');
  const photoName = document.getElementById('gallery-photo-name');
  const photoDesc = document.getElementById('gallery-photo-desc');
  const photoSpecs = document.getElementById('gallery-photo-specs');
  const calloutBox = document.getElementById('gallery-callout-box');
  const calloutLine = document.getElementById('gallery-callout-line');
  const calloutDot = document.getElementById('gallery-callout-dot');

  if (key === 'animation') {
    // Hide callout mapping overlays
    if (calloutBox) calloutBox.style.opacity = '0';
    if (calloutLine) calloutLine.style.opacity = '0';
    if (calloutDot) calloutDot.style.opacity = '0';

    // Show Animation view
    if (photoView) photoView.classList.remove('active');
    if (animView) animView.classList.add('active');
    galleryState.isPlaying = true;
    updateGalleryPlayBtnState();
    playHapticSound(540, 0.05);
    drawGalleryCanvasFrame(galleryState.currentFrame);
    return;
  }

  // Show Photo view
  if (animView) animView.classList.remove('active');
  if (photoView) photoView.classList.add('active');

  const category = state.activeCategory;
  const compMap = category === 'phones' ? PHONES_COMPONENTS : (category === 'camera' ? CAMERA_COMPONENTS : HEADPHONES_COMPONENTS);
  const comp = compMap[compKey] || compMap[key];

  if (photoImg) {
    photoImg.src = getFrameUrl(category, frame);
  }

  if (comp) {
    if (photoName) photoName.textContent = comp.label;
    if (photoDesc) photoDesc.textContent = comp.desc;
    if (photoSpecs && comp.specs) {
      photoSpecs.innerHTML = comp.specs.slice(0, 3).map(s => `
        <span class="gallery-spec-chip">
          <span class="text-white/40">${s.label}:</span>
          <span class="font-semibold text-white/90">${s.val}</span>
        </span>
      `).join('');
    }

    // Render precision mapping callouts on the photo view
    const isPhone = category === 'phones';
    if (calloutBox && comp.box) {
      if (isPhone) {
        // No rectangle outline on phone
        calloutBox.style.opacity = '0';
      } else {
        calloutBox.setAttribute('x', `${(comp.box.normX * 100).toFixed(1)}%`);
        calloutBox.setAttribute('y', `${(comp.box.normY * 100).toFixed(1)}%`);
        calloutBox.setAttribute('width', `${(comp.box.normW * 100).toFixed(1)}%`);
        calloutBox.setAttribute('height', `${(comp.box.normH * 100).toFixed(1)}%`);
        calloutBox.style.opacity = '1';
      }
    }

    if (calloutDot && comp.box) {
      if (isPhone) {
        // For phone under image viewing, remove the blue dot also
        calloutDot.style.opacity = '0';
      } else {
        // Ensure the anchor dot is placed precisely on the bounding box border
        const borderPt = getBoxBorderPoint(comp.box, 0.22, 0.80, comp.anchor);
        const ax = `${(borderPt.x * 100).toFixed(1)}%`;
        const ay = `${(borderPt.y * 100).toFixed(1)}%`;
        calloutDot.setAttribute('cx', ax);
        calloutDot.setAttribute('cy', ay);
        calloutDot.style.opacity = '1';
      }

      if (calloutLine) {
        if (isPhone) {
          // For phones under image viewing, remove the leader line so it doesn't cross over the description text
          calloutLine.style.opacity = '0';
        } else {
          const borderPt = getBoxBorderPoint(comp.box, 0.22, 0.80, comp.anchor);
          const ax = `${(borderPt.x * 100).toFixed(1)}%`;
          const ay = `${(borderPt.y * 100).toFixed(1)}%`;
          calloutLine.setAttribute('x1', '22%');
          calloutLine.setAttribute('y1', '80%');
          calloutLine.setAttribute('x2', ax);
          calloutLine.setAttribute('y2', ay);
          calloutLine.style.opacity = '0.85';
        }
      }
    }
  } else {
    if (calloutBox) calloutBox.style.opacity = '0';
    if (calloutLine) calloutLine.style.opacity = '0';
    if (calloutDot) calloutDot.style.opacity = '0';
  }

  galleryState.selectedCompKey = compKey || key;
  playHapticSound(680, 0.06);
}

function drawGalleryCanvasFrame(frameIndex) {
  const canvas = document.getElementById('gallery-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  if (!ctx) return;

  const category = state.activeCategory;
  let img = state.frames[category] ? state.frames[category][frameIndex] : null;

  if (!img || !img.complete || img.naturalWidth === 0) {
    img = getBestAvailableFrame(category, frameIndex);
  }

  // Handle responsive canvas sizing & high-DPI scaling
  const dpr = Math.min(window.devicePixelRatio || 1, 2);
  const containerW = canvas.parentElement ? canvas.parentElement.clientWidth : canvas.width;
  const containerH = canvas.parentElement ? canvas.parentElement.clientHeight : canvas.height;
  if (containerW > 0 && containerH > 0) {
    const targetW = Math.round(containerW * dpr);
    const targetH = Math.round(containerH * dpr);
    if (canvas.width !== targetW || canvas.height !== targetH) {
      canvas.width = targetW;
      canvas.height = targetH;
    }
  }

  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = '#050507';
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  if (img && img.complete && img.naturalWidth > 0) {
    const scale = Math.min(canvas.width / img.naturalWidth, canvas.height / img.naturalHeight);
    const drawW = img.naturalWidth * scale;
    const drawH = img.naturalHeight * scale;
    const drawX = (canvas.width - drawW) / 2;
    const drawY = (canvas.height - drawH) / 2;
    ctx.drawImage(img, drawX, drawY, drawW, drawH);
  }
}

function galleryAnimationLoop(timestamp) {
  if (galleryState.activeKey === 'animation' && galleryState.isPlaying && galleryState.isVisible) {
    if (!galleryState.lastFrameTime) galleryState.lastFrameTime = timestamp;
    const elapsed = timestamp - galleryState.lastFrameTime;

    if (elapsed > 40) { // ~25 fps step
      galleryState.lastFrameTime = timestamp;
      galleryState.currentFrame += galleryState.direction * 2;

      if (galleryState.currentFrame >= TOTAL_FRAMES) {
        galleryState.currentFrame = TOTAL_FRAMES;
        galleryState.direction = -1;
      } else if (galleryState.currentFrame <= 1) {
        galleryState.currentFrame = 1;
        galleryState.direction = 1;
      }

      drawGalleryCanvasFrame(galleryState.currentFrame);
    }
  }

  galleryState.animId = requestAnimationFrame(galleryAnimationLoop);
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

  // 1. Close dropdown menu immediately (160ms) and close detail drawer
  closeCategoryMenu();
  closeComponentDrawer();

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

    closeComponentDrawer();
    updateHeroTitleDocking(1, 0);
    updateCallouts(1, 0);

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

    // Update Interactive Component Gallery
    renderComponentGallery(targetCategory);
    selectGalleryItem('animation', 1, null);
    galleryState.currentFrame = 1;

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
  // Determine initial category from URL hash or default to phones
  const initialCategory = getCategoryFromHash() || 'phones';
  state.activeCategory = initialCategory;
  const product = PRODUCTS[initialCategory];

  if (product) {
    applyProductNarrativeCopy(product);
    if (product.theme) {
      document.documentElement.style.setProperty('--accent-primary', product.theme.primary);
      document.documentElement.style.setProperty('--accent-secondary', product.theme.secondary);
      document.documentElement.style.setProperty('--accent-glow', product.theme.glow);
      document.documentElement.style.setProperty('--accent-gradient', product.theme.gradient);
    }
    const navCtaLabel = document.getElementById('nav-cta-label');
    const navCtaPrice = document.getElementById('nav-cta-price');
    if (navCtaLabel && product.ctaLabel) navCtaLabel.textContent = product.ctaLabel;
    if (navCtaPrice && product.ctaPrice) navCtaPrice.textContent = product.ctaPrice;

    const pill = document.getElementById('nav-product-pill');
    if (pill && product.name) pill.textContent = product.name;

    document.title = `${product.fullName} | ${product.tagline}`;
  }

  // Update active category dropdown indicators
  document.querySelectorAll('.category-item-btn').forEach((btn) => {
    const cat = btn.getAttribute('data-category');
    if (cat === initialCategory) {
      btn.setAttribute('aria-current', 'true');
      btn.classList.add('active');
    } else {
      btn.setAttribute('aria-current', 'false');
      btn.classList.remove('active');
    }
  });

  initPreloader();
  initNavbar();
  initCategoryMenu();
  initStoryActsObserver();
  initComponentGallery();
  initAncSimulator();
  initSpatialRadar();
  initColorways();
  initPreorderModal();
  initWebAudio();
  initComponentDrawer();
  updateHeroTitleDocking(1, 0);

  window.addEventListener('scroll', calculateScrollProgress, { passive: true });
  window.addEventListener('resize', resizeCanvas, { passive: true });

  resizeCanvas();
  calculateScrollProgress();
  animationLoop();
});
