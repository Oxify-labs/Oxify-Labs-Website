# 3D Animations & Elements - End-to-End Integration

This document outlines all 3D/animation elements integrated throughout the Oxify Labs website.

## Animation Components

### 1. **Intro Animation** (`components/intro-animation.tsx`)
- **Type**: CSS-based letter reveal animation
- **Trigger**: Page load (automatically)
- **Timeline**: 
  - Letters spell "OXIFY" with staggered blur and scale transforms
  - Letters fade in over 700ms each with 90ms stagger
  - Hold for 300ms
  - Background curtain retracts upward (1.3s cubic-bezier)
  - Total duration: ~2.5s
- **Exports**: `INTRO_DURATION_MS`, `HERO_REVEAL_MS` for syncing other animations
- **Integration**: Syncs hero content reveal and video zoom via these exported timing constants

### 2. **Hero Section Animation**
- **Type**: Video background with blur layers and content reveal
- **Triggers**: 
  - Video auto-plays on page load
  - Zooms in (scale 0.85 → 1.05) over 2s when intro animation ends
  - Hero title and stats fade in and blur-resolve with staggered timing
- **CSS Keyframes Used**: None (CSS transforms and transitions)
- **Performance**: 60fps smooth transitions

### 3. **Pixel Icons** (`components/pixel-icon.tsx`)
- **Type**: Canvas-based animated pixel art
- **Icons**:
  1. **Platform** - Rotating node graph with orbiting nodes
  2. **Agents** - Running humanoid figure (8-frame animation)
  3. **Workflow** - Hourglass with flowing sand fill
  4. **Integrations** - Grid of tiles lighting up in sequence
  5. **Pricing** - Three stacked bars growing/shrinking
  6. **Engagements** *(NEW)* - Three connected circles with pulsing effect
- **Rendering**: Canvas with requestAnimationFrame at 60fps
- **Used in Sections**:
  - Studio (platform icon)
  - Capabilities (agents icon) 
  - Process (workflow icon)
  - Stack (integrations icon)
  - Engagements (engagements icon)
  - Active Builds (agents icon)

### 4. **Stacking Agent Cards** (`components/stacking-agent-cards.tsx`)
- **Type**: 3D card stacking animation
- **Interaction**: Scroll-triggered reveal
- **Animation**: Cards stack with perspective transform on scroll
- **Cards**: 4 discipline cards (Architect, Engineer, Researcher, Builder)

### 5. **DevEx Section** (`components/devex-section.tsx`)
- **Type**: Interactive code example reveal
- **Interaction**: Click on step cards to show corresponding code
- **Animation**: Code lines fade in with staggered timing (logIn keyframe)
- **Features**:
  - 4 clickable step cards with state management
  - Syntax-highlighted code examples
  - Live diff highlighting
  - Smooth transitions on card selection

### 6. **Live Agent Feed** (`components/live-agent-feed.tsx`)
- **Type**: Simulated real-time agent activity display
- **Components**:
  - **Live Agent Counter**: Animating counter badge
  - **Agent List**: Rows with progress bars, status indicators, scrolling animation
  - **Mini Visualizations**: Bar graphs, sparklines, and dot graphs using canvas
- **Animations**:
  - Counter increments with easing
  - Progress bars animate with lerp smoothing
  - Sparkline and bar graphs redraw at 60fps with live data
  - Status indicator has ping animation (defined in globals.css)

### 7. **Agent Interface** (`components/agent-interface.tsx`)
- **Type**: Complex dashboard with multiple synchronized animations
- **Sub-animations**:
  - PR list auto-scrolling
  - Code review progress bars animating
  - Activity heatmap cells fading in
  - Review lines appearing with logIn animation
  - Cursor blinking
  - Counters incrementing
- **Canvas Elements**: 
  - MiniBarGraph (20 bars with smooth transitions)
  - LiveSparkline (24-point area chart with gradient)
  - MiniDotGraph (18-point line with dashes)
- **Render Performance**: All canvas elements use requestAnimationFrame with smooth lerp interpolation

### 8. **Glitch Background** (`components/glitch-background.tsx`)
- **Type**: Three.js shader-based glitch effect
- **Features**:
  - WebGL shader with wave-based glitch animation
  - Chromatic aberration
  - Scan-line tears
  - Texture layering with blend modes
- **Current Status**: *(Not currently active in page layout)*
- **Available for**: Future interactive sections with hover-based glitch effects

### 9. **Section Reveal Animations**
- **Type**: Intersection Observer + CSS transforms
- **Bento Cards**: Fade up with blur resolve on scroll
- **Text Reveals**: RevealText component animates words with staggered timing
- **Trigger Threshold**: 15% of element in viewport

## CSS Keyframes (in `app/globals.css`)

```css
@keyframes word-reveal - Text appears with blur and translateY
@keyframes fade-up - Section cards slide up from below
@keyframes shimmer - Hover glow effect on bento cards
@keyframes pulse-dot - Pulsing animation for live indicators
@keyframes glitch-shift - Glitch layer horizontal displacement
@keyframes glitch-opacity - Glitch opacity flicker
@keyframes marqueeLeft/Right - Scrolling text (if used)
@keyframes logIn - Code line fade-in from left *(ADDED)*
@keyframes ping - Live dot expanding pulse *(ADDED)*
```

## Animation Timeline Synchronization

```
0ms   ─────────────────────────────────────────────────────────
      │ Intro Animation starts (OXIFY letters)
      │
~700ms ─ First letter in, staggered entrance
      │
~1500ms ─ All letters visible, holding
      │ Background curtain starts retracting
~2400ms ─ Curtain fully retracted
      │ Hero REVEAL_MS (~2250ms): Hero content fades in
      │ Video background starts zoom
~2600ms ─ All intro animations complete
      │
      └─ User sees fully revealed page with animations

On Scroll:
      ├─ Sections trigger Intersection Observer
      ├─ Bento cards fade up with 120-200ms stagger
      ├─ Text reveals word by word
      ├─ Canvas graphs animate in
      └─ Pixel icons continuously animate (always 60fps)
```

## Performance Considerations

1. **Canvas Rendering**: All canvas-based animations use requestAnimationFrame
2. **GPU Acceleration**: CSS transforms and transitions use GPU acceleration
3. **Memory**: Canvas elements are disposed/cleaned up in useEffect returns
4. **DPR Handling**: Device pixel ratio is accounted for in canvas rendering
5. **Smooth Scrolling**: HTML scroll-behavior: smooth (CSS)
6. **No Jank**: All animations use cubic-bezier easing for smooth curves

## Browser Compatibility

- **Three.js**: WebGL support required for GlitchBackground
- **Canvas**: All modern browsers (IE11+ with fallbacks)
- **CSS Transforms**: Hardware acceleration in all modern browsers
- **RequestAnimationFrame**: Standard in all modern browsers

## Integration Checklist

✅ Intro animation synced to hero reveal timing
✅ All pixel icons rendering with frame timing
✅ Live feeds with canvas-based visualizations
✅ DevEx section with interactive code blocks
✅ Section reveals with intersection observer
✅ All missing CSS keyframes added (logIn, ping)
✅ New "engagements" icon type added to PixelIcon
✅ All components properly cleanup in useEffect returns
✅ No layout shifts or animation conflicts
✅ End-to-end animation flow complete

## Future Enhancements

- Integrate GlitchBackground as hover effect in hero section
- Add ThreeJS scene for 3D interactive elements
- Implement WebGL particles for section transitions
- Add haptic feedback on interaction (mobile)
- Optimize canvas rendering for mobile devices
