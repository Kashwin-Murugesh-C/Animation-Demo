# Animation-Demo: Sony Multi-Product Scrollytelling Interactive Experience

This is a practice session and production-grade project to create a 3D animation web page and showcase interactive product scrollytelling.

An authentic, ultra-premium Sony scrollytelling web experience featuring 60–120fps canvas-driven scrub animations, pure edge-free product visualizers, sequential marketing narrative acts, and dynamic category state-switching across **Headphones**, **Camera**, and **Phones**.

---

## Features

- **Slim Glassmorphic Top Navbar**: Compact 60px header with semi-transparent black background, backdrop blur, hamburger menu button with subtle cyan glow outline, uppercase bold SONY wordmark, and dynamic active product-name pill badge.
- **Floating Category Dropdown Panel**: Smooth animated floating card beneath the navbar with active indicator dot and smooth dismissal via backdrop click-catcher or `Escape` key.
- **Multi-Product State Swapping**: Instant client-side transition between categories (**Headphones: WH-1000XM6**, **Phones: Xperia 1 VI**, **Camera: Alpha 1 II**) updating the 300-frame sequence, narrative copy, specs, and dynamic theme accents without a hard page reload.
- **Pure Canvas Visualization**: Pinned full-screen canvas rendering pure product animations with zero text overlays, edge-free background blending, forward/reverse scrubbing, and a static hero hold before unpinning.
- **Dedicated Story Acts**: 5 sequential content blocks placed directly beneath the canvas in standard document flow, revealed via smooth `IntersectionObserver` scroll-into-view animations.
- **Interactive Labs**:
  - Real-time Active Noise Cancellation (ANC) dual-wave mathematical superposition simulator with environment presets.
  - Interactive 360 Reality Audio spatial radar.
  - Interactive colorway studio switcher.
  - Web Audio API ambient pink-noise sound stage and frequency synthesizers.

---

## Getting Started

### Prerequisites
- Node.js (v18+)
- npm

### Installation

```bash
# Clone the repository
git clone https://github.com/Kashwin-Murugesh-C/Animation-Demo.git

# Navigate to project folder
cd Animation-Demo

# Install dependencies
npm install

# Start development server
npm run dev
```

### Production Build

```bash
npm run build
npm run preview
```

---

## Tech Stack
- HTML5 / Canvas 2D
- Vanilla CSS (Glassmorphism, CSS Custom Properties)
- JavaScript (ES Modules, Web Audio API, IntersectionObserver)
- Vite
