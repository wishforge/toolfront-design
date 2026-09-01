# ToolFront V5 Design System

> **Version**: 5.0 (Free & Open Edition)
> **Status**: Candidate Best — 2026-08-30
> **License**: SIL Open Font License (OFL 1.1) for all fonts
> **Positioning**: Free & Open · No subscription · Developer-first

---

## Table of Contents

1. [Design Philosophy](#1-design-philosophy)
2. [Typography](#2-typography)
3. [Color Palette](#3-color-palette)
4. [Spacing & Layout](#4-spacing--layout)
5. [Borders & Radius](#5-borders--radius)
6. [Shadow System](#6-shadow-system)
7. [Buttons & CTAs](#7-buttons--ctas)
8. [Card System](#8-card-system)
9. [Icon System](#9-icon-system)
10. [Motion & Animation](#10-motion--animation)
11. [Component Patterns](#11-component-patterns)
12. [Responsive Breakpoints](#12-responsive-breakpoints)
13. [Accessibility](#13-accessibility)

---

## 1. Design Philosophy

### Core Principles

| Principle | Description |
|-----------|-------------|
| **Motion = Evidence** | Animations demonstrate product functionality, not decoration. One-shot scan replay shows what the tool does. |
| **Developer-first** | Monospace for data, code samples in dark theme, technical accuracy over marketing fluff. |
| **Trust through typography** | Serif body text (Source Serif 4) conveys authority and care — not another SaaS landing page. |
| **Glow = Interactive** | Blue glow borders signal "this card is alive" — report cards, featured cards, interactive elements. |
| **Open & Transparent** | Light footer, no pricing wall, "Notify me" instead of "Get early access". |

### Visual Identity Keywords

- **Cool navy ink** — deep, trustworthy, technical
- **Electric blue accent** — action-oriented, WebMCP/agent-themed
- **Warm paper backgrounds** — approachable, not cold SaaS
- **Gradient CTAs** — premium feel without subscription price tag

---

## 2. Typography

### Three-Tier Font Architecture

```
┌─────────────────────────────────────────────────────┐
│  TIER 1: UI / Actions    →  Space Grotesk           │
│  TIER 2: Body / Headings →  Source Serif 4          │
│  TIER 3: Data / Metadata  →  JetBrains Mono         │
│  FALLBACK (Chinese):      →  Noto Sans SC / Noto    │
│                            │  Serif SC               │
└─────────────────────────────────────────────────────┘
```

### CSS Custom Properties

```css
:root {
  --sans:  "Space Grotesk", "Noto Sans SC", sans-serif;
  --serif: "Source Serif 4", "Noto Serif SC", serif;
  --mono:  "JetBrains Mono", ui-monospace, "SF Mono", Menlo, monospace;
}
```

### Font Loading (Google Fonts)

```html
<link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&family=Source+Serif+4:ital,opsz,wght@0,8..60,300..900;1,8..60,300..900&family=JetBrains+Mono:wght@400;600;700&family=Noto+Sans+SC:wght@300;400;500;600;700&family=Noto+Serif+SC:wght@400;600&display=swap" rel="stylesheet">
```

### Type Scale

| Element | Font | Weight | Size | Line-height | Letter-spacing | Usage |
|---------|------|--------|------|-------------|----------------|-------|
| **H1 (Hero)** | `var(--serif)` | 420 | clamp(38px, 5vw, 58px) | 1.05 | -0.025em | Main headline |
| **H2 (Section)** | `var(--serif)` | 430 | clamp(26px, 3.5vw, 42px) | 1.15 | -0.01em | Section titles |
| **H3 (Card)** | `var(--sans)` | 600-700 | 14.5–17.5px | 1.25 | -0.015em | Card headings |
| **Body (Lede)** | `var(--serif)` | 340 | 17px | 1.63 | — | Hero subhead |
| **Body (Text)** | `var(--serif)` | 340 | 13.5–14.5px | 1.54–1.62 | — | Descriptions |
| **Body (UI)** | `var(--sans)` | 400 | 15px | 1.62 | — | Default body |
| **Label (Kicker)** | `var(--mono)` | 600 | 11px | — | 0.12–0.15em uppercase | Section labels |
| **Label (Meta)** | `var(--mono)` | 600 | 10.5–11.5px | — | 0.08–0.13em uppercase | Tags, badges |
| **Data (Score)** | `var(--mono)` | 700 | 23–32px | — | -0.03em | Scores, numbers |
| **Code (Inline)** | `var(--mono)` | 600 | 12–13.5px | — | -0.01em | Code snippets |
| **Nav Link** | `var(--sans)` | 500 | 13px | — | — | Navigation |
| **Wordmark** | `var(--mono)` | 700 | 16–17px | — | -0.02em | Logo |

### Optical Sizing

Source Serif 4 uses `font-optical-sizing: auto` for automatic optical size adjustment across sizes.

### Font Smoothing

```css
body {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-rendering: optimizeLegibility;
}
```

---

## 3. Color Palette

### Core Colors (CSS Variables)

```css
:root {
  /* ── Backgrounds ── */
  --paper:        #FAFBFC;   /* Main background */
  --paper-soft:   #F1F4F8;   /* Secondary bg / sections */
  --paper-warm:   #FFFDF9;   /* Warm variant (rarely used) */
  --card:         #FFFFFF;   /* Card surface */

  /* ── Ink (Text) Hierarchy ── */
  --ink:    #0C1222;  /* Primary text — cool navy */
  --ink-2:  #374151;  /* Secondary text */
  --ink-3:  #6B7280;  /* Tertiary / muted */
  --ink-4:  #9CA3AF;  /* Placeholder / disabled */
  --ink-5:  #D1D5DB;  /* Borders (lightest) */

  /* ── Lines & Dividers ── */
  --line:        #E2E6EE;  /* Default border */
  --line-light:  #F0F2F5;  /* Subtle divider */

  /* ── Accent: Electric Blue ── */
  --accent:       #2563EB;  /* Primary action */
  --accent-deep:  #1D4ED8;  /* Hover state */
  --accent-soft:  #EFF6FF;  /* Tinted background */
  --accent-glow:  rgba(37,99,235,0.12);  /* Glow effect base */

  /* ── Semantic: Good / Pass ── */
  --good:       #059669;  /* Primary success */
  --good-deep:  #047857;  /* Success hover/text */
  --good-soft:  #ECFDF5;  /* Success background */

  /* ── Semantic: Mid / Warning ── */
  --mid:       #D97706;  /* Warning */
  --mid-soft:  #FFFBEB;  /* Warning background */

  /* ── Semantic: Bad / Fail ── */
  --bad:       #DC2626;  /* Error / fail */
  --bad-soft:  #FEF2F2;  /* Error background */

  /* ── Semantic: Info ── */
  --info:       #0891B2;  /* Informational */
  --info-soft:  #ECFEFF;  /* Info background */

  /* ── Dark Surface ── */
  --surface-dark: #0F172A;  /* Dark sections / CTA / code blocks */
}
```

### Color Usage Map

| Color | Where Used | Emotional Cue |
|-------|-----------|---------------|
| `--ink` (#0C1222) | Headlines, primary text | Authority, depth |
| `--accent` (#2563EB) | CTAs, links, active states | Action, technology |
| `--good` (#059669) | Pass states, live badges, positive deltas | Success, ready |
| `--mid` (#D97706) | Partial scores, warnings | Attention needed |
| `--bad` (#DC2626) | Fail states, D/F grades | Urgency, gap |
| `--surface-dark` (#0F172A) | CTA sections, code blocks | Technical, premium |

### Gradient System

```css
/* Primary CTA gradient (135° three-stop) */
--grad-primary: linear-gradient(135deg, #1E3A8A 0%, #2563EB 50%, #3B82F6 100%);

/* Primary hover (darker variant) */
--grad-primary-hover: linear-gradient(135deg, #1E40AF 0%, #1D4ED8 50%, #2563EB 100%);

/* Dark gradient (footer CTA, dark buttons) */
--grad-dark: linear-gradient(135deg, #0F172A 0%, #1E293B 100%);
--grad-dark-hover: linear-gradient(135deg, #1E293B 0%, #334155 100%);
```

### Score Track Gradient (F→A Scale)

```css
background: linear-gradient(90deg,
  var(--bad)       0% 30%,    /* F: 0-30  opaque */
  var(--mid)      30% 50%,    /* D: 30-50 */
  #F59E0B        50% 70%,    /* C: 50-70 */
  var(--good-deep) 70% 85%,    /* B: 70-85 */
  var(--good)     85% 100%    /* A: 85-100 agent-ready */
);
```

---

## 4. Spacing & Layout

### Base Unit: 4px Grid

All spacing values are multiples of 4px:

```css
:root {
  /* Radius scale (4px base) */
  --r-1:    4px;    /* Inline elements, focus rings */
  --r-2:    8px;    /* Small containers, inputs */
  --r-3:    12px;   /* Cards, buttons */
  --r-4:    16px;   /* Large cards, panels */
  --r-5:    20px;   /* Modals, hero cards */
  --r-full: 9999px; /* Pills, badges, avatars */
}
```

### Layout Constants

| Property | Value | Usage |
|----------|-------|-------|
| Max width | `1160px` | Content container |
| Page padding horizontal | `clamp(24px, 4vw, 40px)` | Sections |
| Section padding vertical | `clamp(52px, 8vw, 92px)` | Major sections |
| Grid gap | `20px` (cards), `12px` (features), `44px` (dogfood) | Component-dependent |
| Hero grid | `1.08fr 0.92fr` | Left text + right card |

### Report Page Layout

| Property | Value | Usage |
|----------|-------|-------|
| Max width | `900px` | Report container (narrower for readability) |
| Page padding bottom | `72px` | Space before colophon |
| Card margin-bottom | `20px` | Between cards |

---

## 5. Borders & Radius

### Border Widths

| Context | Width | Style |
|---------|-------|-------|
| Default card border | `1px` | Solid, subtle |
| Input / button border | `1.5px` | Solid |
| Glow border (report card) | `1px` | Semi-transparent blue |
| Popular price card | `2px` | Solid accent |
| Grade badge | `2–2.5px` | Solid semantic color |
| Divider (dashed) | `1px` | Dashed `var(--line)` |
| Chrome bar separator | `1px` | Solid `var(--line-light)` |

### Border Colors

| State | Color | Variable |
|-------|-------|----------|
| Default | `rgba(37,99,235,0.08)` | Semi-transparent accent |
| Hover | `rgba(37,99,235,0.18–0.22)` | More opaque |
| Focus | `var(--accent)` | Full opacity with glow ring |
| Disabled / Muted | `var(--line)` or `var(--line-light)` | Neutral |

---

## 6. Shadow System

### Layered Shadow Tokens

```css
:root {
  /* Elevation scale (ink-based, warm) */
  --shadow-xs:  0 1px 2px rgba(12,18,34,0.04);
  --shadow-sm:  0 2px 8px -2px rgba(12,18,34,0.06),
                 0 1px 3px rgba(12,18,34,0.04);
  --shadow-md:  0 4px 16px -4px rgba(12,18,34,0.08),
                 0 2px 6px -2px rgba(12,18,34,0.04);
  --shadow-lg:  0 10px 40px -8px rgba(12,18,34,0.12),
                 0 4px 12px -4px rgba(12,18,34,0.06);
  --shadow-xl:  0 20px 60px -12px rgba(12,18,34,0.18),
                 0 8px 24px -6px rgba(12,18,34,0.08);

  /* Specialized shadows */
  --shadow-report:  0 24px 56px -16px rgba(12,18,34,.22),
                    0 0 0 1px rgba(12,18,34,.04),
                    inset 0 1px 0 rgba(255,255,255,.6);

  /* Accent glow (for icons on hover) */
  --shadow-glow-accent:  0 0 20px -4px var(--accent-glow),
                         0 0 40px -8px rgba(37,99,235,0.06);

  /* Popular/highlight card shadow */
  --shadow-popular:  0 8px 32px -4px rgba(37,99,235,0.18),
                      0 0 0 1px rgba(37,99,235,0.15);
}
```

### Glow Border Shadow System (Kiro-Inspired)

The signature visual element of V5 — a multi-layer blue halo around interactive cards:

```css
/* Default state: subtle blue presence */
--shadow-report-glow:
  0 0 0 1px   rgba(37,99,235,0.08),    /* Thin blue border */
  0 0 20px -2px rgba(37,99,235,0.10),   /* Inner glow */
  0 0 48px -8px rgba(37,99,235,0.06),   /* Outer glow */
  0 24px 56px -16px rgba(12,18,34,.22); /* Drop shadow */

/* Hover state: expanded glow + lift */
--shadow-report-glow-hover:
  0 0 0 1px   rgba(37,99,235,0.16),    /* Stronger border */
  0 0 28px -2px rgba(37,99,235,0.15),   /* Brighter inner */
  0 0 60px -8px rgba(37,99,235,0.10),   /* Wider outer */
  0 24px 64px -12px rgba(12,18,34,.26); /* Deeper drop */
```

### When to Use Each Shadow

| Shadow | Use Case |
|--------|----------|
| `--shadow-xs` | Subtle lifts, inline elements |
| `--shadow-sm` | Buttons on hover, small cards |
| `--shadow-md` | Cards on hover, BA cards |
| `--shadow-lg` | Step cards, feature items, dogfood card |
| `--shadow-xl` | Dogfood card hover, elevated modals |
| `--shadow-report-glow` | Report cards, hero preview card |
| `--shadow-popular` | Highlighted/featured tier cards |
| `--shadow-glow-accent` | Feature icon hover state |

---

## 7. Buttons & CTAs

### Button Hierarchy

| Variant | Class | Background | Border | Text | Shadow | Use Case |
|---------|-------|------------|--------|------|--------|----------|
| **Primary Gradient** | `.btn-nav-solid`, `.scan-btn`, `.email-btn`, `.acts .primary` | `var(--grad-primary)` | None | White `#FFF` | `0 2px 10px rgba(37,99,235,0.18–0.25)` | Main CTAs |
| **Ghost** | `.btn-nav-ghost` | Transparent | `1.5px solid var(--line)` | `var(--ink)` | None | Secondary actions |
| **Outline** | `.btn-price-outline`, `.acts button` | Transparent | `1.5px solid var(--line)` | `var(--inch)` | None | Tertiary actions |
| **Dark** | `.btn-price-primary` | `var(--grad-dark)` | None | White | `--shadow-xs` | Dark context CTAs |

### Primary Button Specifications

```css
.btn-primary {
  font-family: var(--sans);
  font-size: 12.5–13.5px;
  font-weight: 600;
  padding: 7px 20px (nav) / 13px 24px (card) / 14px 30px (email);
  border-radius: var(--r-full);  /* Pill shape */
  background: var(--grad-primary);
  color: #FFF;
  letter-spacing: -0.01em;
  transition: all var(--dur-fast) ease;
}

.btn-primary:hover {
  background: var(--grad-primary-hover);
  box-shadow: 0 4px 16–20px rgba(37,99,235,0.28–0.35),
              0 0 24–32px rgba(37,99,235,0.08–0.12);
  transform: translateY(-1px);
}

.btn-primary:active {
  transform: translateY(0);
}
```

### Scan Form Input Button Pattern

Connected input + button group (no gap):

```html
<form class="scan-form">
  <input class="scan-input" placeholder="yourdomain.com">
  <button class="scan-btn">Scan free</button>
</form>
```

```css
.scan-input {
  border: 1.5px solid var(--line);
  border-right: 0;
  border-radius: var(--r-3) 0 0 var(--r-3);
  font-family: var(--mono);
  font-size: 13.5px;
}
.scan-btn {
  background: var(--grad-primary);
  border-radius: 0 var(--r-3) var(--r-3) 0;
  box-shadow: 0 2px 12px rgba(37,99,235,0.20),
              inset 0 1px 0 rgba(255,255,255,.15);
}
```

---

## 8. Card System

### Standard Card

```css
.card {
  background: var(--card);
  border: 1px solid var(--line);
  border-radius: var(--r-4);
  box-shadow: var(--shadow-sm); /* or --shadow-md for elevated */
  transition: box-shadow var(--dur-normal) var(--ease-out),
              transform var(--dur-normal) var(--ease-out);
}
.card:hover {
  box-shadow: var(--shadow-lg);
  transform: translateY(-2px to -4px);
}
```

### Glow Border Card (Report / Featured)

```css
.report-card {
  border: 1px solid rgba(37,99,235,0.10);
  border-radius: var(--r-4);
  box-shadow: var(--shadow-report-glow);
  overflow: hidden;
  transition: box-shadow var(--dur-normal) var(--ease-out),
              border-color var(--dur-normal) ease,
              transform var(--dur-normal) var(--ease-out);
}
.report-card:hover {
  box-shadow: var(--shadow-report-glow-hover);
  border-color: rgba(37,99,235,0.22);
  transform: translateY(-4px);
}
```

### Card Internal Structure

```
┌──────────────────────────────────────────┐
│  .cbar (chrome bar)                       │  ← macOS-style dots + label
│  ┌───┬───┬───┐  Report summary           │
├──────────────────────────────────────────┤
│  .cbody                                  │
│  ┌────────────────────────────────┐      │
│  │  .hero-row                     │      │
│  │  [Grade D]  Score 37/100  ...  │      │
│  │             Verdict text →     │      │
│  ├────────────────────────────────┤      │
│  │  .trackwrap (score track F→A)  │      │
│  │  ████████████░░░░░░░░░░░░░░░░  │      │
│  ├────────────────────────────────┤      │
│  │  .pills (tag row)              │      │
│  │  [✓ pass] [~ mid] [✕ fail]    │      │
│  ├────────────────────────────────┤      │
│  │  .vs / .acts                   │      │
│  └────────────────────────────────┘      │
└──────────────────────────────────────────┘
```

### Chrome Bar (macOS Window Dressing)

```css
.cbar {
  display: flex;
  gap: 6px;
  padding: 11–12px 14–20px;
  border-bottom: 1px solid var(--line-light);
  background: linear-gradient(180deg, var(--paper) 0%, var(--paper-soft) 100%);
}
/* Traffic light dots */
.rp-dot { width: 9px; height: 9px; border-radius: 50%; }
.rp-dot:nth-child(1) { background: #FF5F57; }  /* Red */
.rp-dot:nth-child(2) { background: #FEBC2E; }  /* Yellow */
.rp-dot:nth-child(3) { background: #28C840; }  /* Green */
```

---

## 9. Icon System

### Approach: Inline SVG (No Icon Library)

All icons are inline `<svg>` elements — no external dependency, no sprite sheet, no icon font.

### SVG Conventions

| Attribute | Value | Notes |
|-----------|-------|-------|
| `viewBox` | `0 0 16 16` (small) or `0 0 20 20` (standard) or `0 0 24 24` (large) | Consistent grid |
| `fill` | `none` | Stroke-based |
| `stroke` | `currentColor` | Inherits from parent color |
| `stroke-width` | `1.4–1.8` | Adjust for visual weight |
| `stroke-linecap` | `round` | Rounded ends |
| `stroke-linejoin` | `round` | Rounded corners |

### Icon Sizes

```css
.icon    { width: 20px; height: 20px; }  /* Default */
.icon-sm { width: 16px; height: 16px; }  /* Inline with text */
.icon-lg { width: 24px; height: 24px; }  /* Feature icons */
.pill .ic { width: 14px; height: 14px; }  /* Inside pill tags */
.trust-icon-wrap svg { width: 22px; height: 22px; }  /* Trust grid */
.feat-icon svg { width: 20px; height: 20px; }  /* Feature list */
```

### Common Icon Patterns

**Check / Pass:**
```svg
<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
  <path d="M13 6l-5 5L4 7"/>
</svg>
```

**Cross / Fail:**
```svg
<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
  <circle cx="8" cy="8" r="6"/>
  <path d="m5 5 6 6m0-6-6 6"/>
</svg>
```

**Partial / Mid:**
```svg
<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round">
  <path d="M4 10h12M4 6h12M8 2v12"/>
</svg>
```

**Arrow Right:**
```svg
<svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5">
  <path d="M3 8h10m-3-3 3 3-3 3"/>
</svg>
```

### Feature Icon Container

```css
.feat-icon {
  width: 44px; height: 44px; min-width: 44px;
  border-radius: var(--r-3);
  display: flex; align-items: center; justify-content: center;
  background: linear-gradient(145deg, var(--accent-soft) 0%, #F0F4FF 100%);
  color: var(--accent);
  transition: all var(--normal) var(--ease-out);
}
.feat-item:hover .feat-icon {
  background: linear-gradient(145deg, var(--accent) 0%, var(--accent-deep) 100%);
  color: #FFF;
  box-shadow: var(--shadow-sm), var(--shadow-glow-accent);
  transform: scale(1.05) rotate(-3deg);
}
```

---

## 10. Motion & Animation

### Transition Tokens

```css
:root {
  --ease-out:   cubic-bezier(0.16, 1, 0.3, 1);   /* Smooth deceleration */
  --ease-spring: cubic-bezier(0.34, 1.56, 0.64, 1); /* Spring bounce */
  --dur-fast:   150ms;   /* Hover, focus */
  --dur-normal: 250ms;   /* Card transitions */
  --dur-slow:   400ms;   /* Complex animations */
}
```

### Animation Catalog

| Animation Name | Duration | Delay | Easing | Trigger | Effect |
|---------------|----------|-------|--------|---------|--------|
| `sweepOnce` | 1.05s | 0.15s | `cubic-bezier(.4,0,.2,1)` | Page load (`.anim` body) | Scan line sweeps top→bottom once |
| `popIn` | 0.38s | 0.9s | `cubic-bezier(.2,.9,.3,1.2)` | Page load | Grade badge scales up with overshoot |
| `fadeUp` | 0.4s | 1.05–2.15s staggered | `ease` | Page load | Elements fade up from below |
| `stampIn` | 0.3s | 1.5–2.0s staggered | `cubic-bezier(.2,.9,.3,1.15)` | Page load | Pills stamp in with scale |
| `deltaIn` | 0.6s | 0s | `var(--ease-spring)` | Insertion | Delta badge slides in |
| `float-in` | 0.5s | 0.8s | `var(--ease-spring)` | Page load | Floating card springs up |
| `pulse-dot` | 2s infinite | 0s | — | Always | Kicker dot pulses |
| `pulse` | 1.5s infinite | 0s | — | Always | Live badge dot pulses |

### Scan Line Animation (Signature Effect)

```css
.scanline {
  position: absolute; left: 0; right: 0; height: 48px; top: -48px;
  background: linear-gradient(180deg,
    transparent            0%,
    rgba(37,99,235,0.02)  35%,
    rgba(37,99,235,0.06)  55%,
    rgba(37,99,235,0.12)  75%,
    rgba(37,99,235,0.18)  90%,
    rgba(59,130,246,0.25) 100%
  );
  border-bottom: 2px solid rgba(37,99,235,0.50);
  animation: sweep 3s cubic-bezier(.4,0,.2,1) infinite;
  filter: blur(0.3px);
  /* Glow trail behind scanline */
  box-shadow:
    0 0 20px 4px rgba(37,99,235,0.08),
    0 0 40px 8px rgba(37,99,235,0.04);
}
@keyframes sweep {
  0%   { top: -48px }
  55%, 100% { top: 105% }
}
```

### Staged Reveal Sequence (Report Page)

```
0.00s  ── page loads
0.15s  ── scan-fx sweepOnce starts (1.05s duration)
0.90s  ── grade popIn
1.05s  ── nums fadeUp + score counter starts (1s duration)
1.20s  ── verdict fadeUp
1.30s  ── trackwrap fadeUp
1.35s  ── cursor starts sliding to position (1s duration)
1.50s–2.0s ── pills stampIn (staggered 0.1s each)
2.15s  ── vs section + acts buttons fadeUp
```

### Functional Motion (Interactive)

- **Checkbox projection**: Checking fix items re-calculates the potential score bar via CSS transition (`width` transition 0.45s)
- **Score counter**: `requestAnimationFrame` loop with cubic ease-out, 0→BASE over 1000ms
- **Cursor slide**: CSS `transition: left 1s cubic-bezier(.3,.7,.2,1)`

### Reduced Motion

```css
@media (prefers-reduced-motion: reduce) {
  .scanline { display: none; }
  /* All staged reveals become static */
  body.anim .grade, body.anim .nums, body.anim .verdict,
  body.anim .trackwrap, body.anim .pills .pill,
  body.anim .vs, body.anim .acts, body.anim .card:not(.replay) {
    animation: none;
  }
  body.anim .track .cursor { left: 37%; transition: none; }
  body.anim .card.replay .scan-fx { animation: none; }
  .potential .mini i { transition: none; }
}
```

---

## 11. Component Patterns

### Wordmark (Logo)

```css
.wordmark {
  font-family: var(--mono);
  font-weight: 700;
  font-size: 16–17px;
  color: var(--ink);
  letter-spacing: -0.02em;
}
.wordmark em {
  font-style: normal;
  color: var(--accent);
  position: relative;
}
.wordmark em::after {
  content: '';
  position: absolute;
  bottom: -1px; left: 0; right: 0;
  height: 2px;
  background: var(--accent);
  opacity: 0.5;  /* Underline accent on the "_" */
}
/* Renders as: toolfront_  (the _ is blue with underline) */
```

### Kicker (Section Label)

```css
.kicker {
  font-family: var(--mono);
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 0.12–0.15em;
  text-transform: uppercase;
  color: var(--accent);
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 4px 12px;
  background: var(--accent-soft);
  border-radius: var(--r-full);
}
.kicker::before {
  content: '';
  width: 6px; height: 6px;
  border-radius: 50%;
  background: var(--accent);
  animation: pulse-dot 2s infinite;
}
/* Renders as: ● Agent-readiness scan · free · ~5s */
```

### Grade Badge

```css
.grade-badge {
  width: 68px; height: 68px; min-width: 68px;
  border-radius: var(--r-3);
  display: flex; align-items: center; justify-content: center;
  font-family: var(--sans); font-weight: 800; font-size: 36px;
  color: var(--bad);
  background: linear-gradient(145deg, var(--bad-soft) 0%, #FCE8E8 100%);
  border: 2px solid var(--bad);
  box-shadow: 0 2px 8px rgba(220,38,38,0.12),
              inset 0 1px 0 rgba(255,255,255,.6);
  position: relative;
}
.grade-badge::after {
  content: 'GRADE';
  position: absolute; bottom: -8px;
  font-family: var(--mono); font-size: 7px; font-weight: 700;
  letter-spacing: 0.15em; color: var(--bad); opacity: 0.5;
}
```

### Pill Tags

```css
.pill {
  display: inline-flex; align-items: center; gap: 4–6px;
  font-family: var(--mono); font-size: 10.5–11.5px; font-weight: 600;
  padding: 4–5px 10–13px;
  border-radius: var(--r-full);
  border: 1px solid transparent;
  transition: transform var(--dur-fast) ease;
}
.pill:hover { transform: translateY(-1px); }

/* Variants */
.pill.p { color: var(--good-deep); background: var(--good-soft); }  /* Pass */
.pill.m { color: #92400E;      background: var(--mid-soft); }  /* Partial/Mid */
.pill.f { color: #B91C1C;      background: var(--bad-soft); }  /* Fail */
.pill.x { color: var(--ink-4);  background: var(--paper-soft); }  /* Neutral */
```

### Status Badges

```css
.trust-status {
  display: inline-block;
  margin-top: 10px;
  padding: 3px 10px;
  border-radius: var(--r-full);
  font-family: var(--mono);
  font-size: 9.5px;
  font-weight: 700;
  letter-spacing: 0.05em;
  text-transform: uppercase;
}
.status-live    { background: var(--good-soft); color: var(--good); }
.status-preview { background: var(--mid-soft);  color: var(--mid); }
```

### Delta Badge (Score Change)

```css
.delta-badge {
  display: inline-flex; align-items: center; gap: 3px;
  margin-left: 10px;
  padding: 3px 10px;
  font-family: var(--mono); font-size: 11px; font-weight: 700;
  color: var(--good-deep);  /* or var(--bad) for negative */
  background: var(--good-soft);  /* or var(--bad-soft) */
  border-radius: var(--r-full);
  border: 1px solid rgba(5,150,105,0.12);
}
```

### Floating Featured Card (V2 Contribution)

```css
.floating-card {
  position: absolute;
  bottom: -16px; right: -12px;
  width: 260px;
  background: var(--card);
  border: 1px solid var(--line);
  border-radius: var(--r-4);
  padding: 18px 20px;
  box-shadow: var(--shadow-lg);
  z-index: 15;
  animation: float-in 0.5s var(--ease-spring) both;
  animation-delay: 0.8s;
}
@keyframes float-in {
  from { opacity: 0; transform: translateY(12px) scale(0.96); }
  to   { opacity: 1; transform: translateY(0) scale(1); }
}
```

### Footer (V5 Lightweight)

```css
.footer-v5 {
  border-top: 1px solid var(--line);
  background: var(--paper-soft);  /* Light, NOT dark */
  padding: 40px clamp(24px, 4vw, 44px) 32px;
}
.footer-v5-inner {
  max-width: 1160px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-wrap: wrap;
  gap: 28px;
}
/* 3 columns: Brand (260px max) | Links | Meta (right-aligned) */
```

### Email Collection (V5 Left-Aligned)

```css
.email-section-v5 {
  max-width: 1160px;
  margin: 0 auto;
  padding: clamp(40px, 6vw, 72px) clamp(24px, 4vw, 48px);
  border-top: 1px solid var(--line-light);
}
.email-v5-inner {
  display: grid;
  grid-template-columns: 1.2fr 1fr;  /* Text left, form right */
  gap: 36px;
  align-items: center;
}
```

---

## 12. Responsive Breakpoints

| Breakpoint | Trigger | Key Changes |
|------------|---------|-------------|
| **Desktop** | > 920px | Full layout: hero grid, trust 4-col, code 2-col |
| **Tablet** | ≤ 920px | Hero stacks vertically, floating card becomes static, nav menu hides, trust 2-col |
| **Mobile** | ≤ 680px | Pricing 1-col, pills stack vertical, email form stacks, footer stacks, grade badge shrinks to 72px |

### Key Responsive Rules

```css
@media (max-width: 920px) {
  .hero { grid-template-columns: 1fr; gap: 44px; }
  .hero-right { position: static; }
  .floating-card { position: static; width: 100%; animation-delay: 0; }
  .ba-grid { grid-template-columns: 1fr; }
  .step-grid { grid-template-columns: 1fr; }
  .code-grid { grid-template-columns: 1fr; }
  .trust-grid { grid-template-columns: repeat(2, 1fr); }
  .nav-menu { display: none; }
}

@media (max-width: 680px) {
  .trust-grid { grid-template-columns: 1fr; }
  .email-v5-inner { grid-template-columns: 1fr; }
  .footer-v5-inner { flex-direction: column; }
  .hero-row { flex-direction: column; }
  .grade { width: 72px; height: 72px; font-size: 38px; }
}
```

---

## 13. Accessibility

### Focus States

```css
:focus-visible {
  outline: 2px solid var(--accent);
  outline-offset: 2px;
  border-radius: var(--r-1);
}
```

### Reduced Motion

All animations respect `prefers-reduced-motion: reduce` — see [Motion & Animation](#10-motion--animation) section.

### Print Styles

```css
@media print {
  body { background: #fff; }
  .top, .acts, .cta, .colo { display: none; }
  .scan-fx { display: none !important; }
}
```

### Semantic HTML

- Use `<section>` with clear headings for content regions
- Use `<article>` for self-contained step cards
- Use `<nav>` with `<ul>` for navigation
- Use `aria-label` on interactive elements (report card, forms)
- Use `<label>` for checkbox associations

### Color Contrast

All text/background combinations meet WCAG AA minimum contrast ratios:
- `--ink` (#0C1222) on `--paper` (#FAFBFC): **17.2:1** ✓
- `--ink-2` (#374151) on `--paper`: **9.7:1** ✓
- `--ink-3` (#6B7280) on `--paper`: **4.6:1** ✓
- `--accent` (#2563EB) on white: **4.8:1** ✓ (large text OK)
- White on `--grad-primary`: **5.4:1** ✓

---

## Appendix A: Quick Reference — CSS Variable Dump

```css
:root {
  /* Colors */
  --paper: #FAFBFC; --paper-soft: #F1F4F8; --paper-warm: #FFFDF9;
  --ink: #0C1222; --ink-2: #374151; --ink-3: #6B7280;
  --ink-4: #9CA3AF; --ink-5: #D1D5DB;
  --line: #E2E6EE; --line-light: #F0F2F5;
  --accent: #2563EB; --accent-deep: #1D4ED8;
  --accent-soft: #EFF6FF; --accent-glow: rgba(37,99,235,0.12);
  --good: #059669; --good-deep: #047857; --good-soft: #ECFDF5;
  --mid: #D97706; --mid-soft: #FFFBEB;
  --bad: #DC2626; --bad-soft: #FEF2F2;
  --info: #0891B2; --info-soft: #ECFEFF;
  --card: #FFFFFF; --surface-dark: #0F172A;

  /* Shadows */
  --shadow-xs: 0 1px 2px rgba(12,18,34,0.04);
  --shadow-sm: 0 2px 8px -2px rgba(12,18,34,0.06), 0 1px 3px rgba(12,18,34,0.04);
  --shadow-md: 0 4px 16px -4px rgba(12,18,34,0.08), 0 2px 6px -2px rgba(12,18,34,0.04);
  --shadow-lg: 0 10px 40px -8px rgba(12,18,34,0.12), 0 4px 12px -4px rgba(12,18,34,0.06);
  --shadow-xl: 0 20px 60px -12px rgba(12,18,34,0.18), 0 8px 24px -6px rgba(12,18,34,0.08);

  /* Gradients */
  --grad-primary: linear-gradient(135deg, #1E3A8A 0%, #2563EB 50%, #3B82F6 100%);
  --grad-primary-hover: linear-gradient(135deg, #1E40AF 0%, #1D4ED8 50%, #2563EB 100%);
  --grad-dark: linear-gradient(135deg, #0F172A 0%, #1E293B 100%);
  --grad-dark-hover: linear-gradient(135deg, #1E293B 0%, #334155 100%);

  /* Radius */
  --r-1: 4px; --r-2: 8px; --r-3: 12px;
  --r-4: 16px; --r-5: 20px; --r-full: 9999px;

  /* Typography */
  --sans: "Space Grotesk", "Noto Sans SC", sans-serif;
  --serif: "Source Serif 4", "Noto Serif SC", serif;
  --mono: "JetBrains Mono", ui-monospace, "SF Mono", Menlo, monospace;

  /* Motion */
  --ease-out: cubic-bezier(0.16, 1, 0.3, 1);
  --ease-spring: cubic-bezier(0.34, 1.56, 0.64, 1);
  --dur-fast: 150ms; --dur-normal: 250ms; --dur-slow: 400ms;
}
```

---

## Appendix B: File Inventory

| File | Path | Purpose |
|------|------|---------|
| Landing Page V5 | `toolfront-design-v5.html` | Free & Open edition (candidate best) |
| Report Page V5 | `toolfront-design-v5-report.html` | Aligned scan report |
| Design Spec (this file) | `design-system-v5.md` | This document |

---

*Generated: 2026-08-30 · Based on V5 Free & Open Edition*

---

## 14. Document / Legal Pages

> Added 2026-08-30 (audit finding F3): the spec had no chapter for document-style
> pages — `privacy.html`, `terms.html`, `security.html`, `bot.html` — which is how
> their tokens drifted from V5 in the first place.

### Applies to

Long-form reading pages: legal text, bot/scanner declaration, security policy.

### Rules

| Aspect | Value | Rationale |
|--------|-------|-----------|
| Container width | **760px** | Reading comfort beats the 1160px marketing grid; deliberately narrower than the report page's 900px |
| Body text | `var(--serif)` 340 / 15.5px / line-height 1.75 | Trust through typography — serif reads as a considered document, not a SaaS screen |
| Headings | `var(--serif)` — H1 430, H2 600 | Optical sizing on; H2 heavier than H1 for scannability inside long text |
| Links / emphasis | `var(--accent)` (#2563EB) | Same action color as the rest of the product |
| Wordmark | Trailing `_` in accent with 2px underline (`opacity .5`) | The V5 signature must appear on every page, documents included |
| Code / paths | `var(--mono)` 12–13px on `--paper-soft` | Paths like `/llms.txt` are data, not prose |
| Icons | None required | Documents are read, not scanned for icons; add inline SVG only for status badges |
| Focus | `:focus-visible` 2px accent ring, offset 2px | WCAG AA across all pages |

### Non-goals

- No glow borders, gradients or motion on document pages — they are read, not sold.
- No marketing CTA blocks; a single footer with plain links is correct.
