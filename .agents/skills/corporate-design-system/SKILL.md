---
name: corporate-design-system
description: >-
  Premier design system and aesthetic standards for institutional, corporate,
  and top-tier professional services websites (law firms, private equity,
  investment banks, strategic consultancies). Covers typography hierarchy,
  bespoke color palettes, micro-interactions, layout density, and mobile responsiveness.
---

# Premier Corporate & Legal Design System

This skill defines the visual architecture, typography rules, layout discipline, and animation standards for high-trust corporate websites—specifically top-tier commercial law firms, financial institutions, and advisory practices.

---

## 1. Core Design Philosophy: Dignified Restraint

High-stakes commercial clients (multinational general counsels, board directors, institutional investors) seek **uncompromising competence, stability, and intellectual clarity**.

### Golden Rules
1. **Understated Elegance over Gimmicks**:
   - Never use childish 3D illustrations, bouncing cartoon icons, or garish rainbow gradients.
   - Employ geometric hair-line borders, subtle corner brackets, warm metallic highlights, and balanced whitespace.
2. **Architectural Structure**:
   - Layouts should resemble fine editorial publications (e.g. *The Financial Times*, *Architectural Digest*, *Harvard Law Review*).
   - Use crisp grid alignments, thin 1px dividers (`border-navy-800/20` or `border-gold-500/30`), and proportional padding (`py-20`, `py-28`).
3. **Typography as Voice**:
   - **Serif (Headings)**: Editorial serif (Playfair Display, Cormorant Garamond, or Georgia) conveying heritage, gravitas, and jurisprudential authority.
   - **Sans-Serif (Body & Data)**: Clean grotesque sans (Inter) tuned for optimal legibility, clean tabular figures, and rapid scanning.

---

## 2. Design Tokens & Color Matrix

```scss
// Primary Palette
$navy-950: #050E1A;   // Deepest Midnight (Hero, dark surfaces, headers)
$navy-900: #0B1F3A;   // Signature Corporate Navy (Primary brand color)
$navy-800: #132D52;   // Slate Navy (Borders, card hovers, subtle contrasts)

// Ivory & Parchment Tones
$ivory-50:  #FFFFFF;  // Clean white
$ivory-100: #FCFAF6;  // Soft parchment
$ivory-200: #FAF8F3;  // Warm Ivory Canvas (Default page background)
$ivory-300: #F2EDE2;  // Subtle separator background
$ivory-400: #E5DCCE;  // Hairline border tone

// Warm Metallic / Gold Accents
$gold-300: #D5BA94;   // Pale champagne gold
$gold-400: #C4A271;   // Muted gold highlight
$gold-500: #B08D57;   // Primary Muted Brass / Gold (Accent, active states)
$gold-600: #9A7846;   // Deep antique bronze (Text links, hover)

// Typography & Charcoal
$charcoal-900: #111827; // Deepest text
$charcoal-800: #1F2937; // Primary body text
$charcoal-600: #4B5563; // Secondary descriptions
$charcoal-400: #9CA3AF; // Metadata, subtle timestamps
```

---

## 3. Micro-Interactions & Animation (Motion)

When implementing animations:
- Keep durations snappy yet gentle: `duration: 0.4s` to `0.7s`, `ease: [0.16, 1, 0.3, 1]` (custom cubic ease-out).
- Animate only transform (`y`, `scale`) and opacity (`opacity: 0` $\to$ `1`).
- Avoid jarring loops or aggressive spinning. Use subtle shimmer, soft opacity reveals, and understated link hover underlines.

---

## 4. Component Patterns

### Initials Avatars
- Use rich multi-stop gradients matching the firm's navy and bronze palette.
- Overlay a delicate corner brass notch (`w-1.5 h-1.5 border-t border-r border-gold-400/60`).
- Render serif initials in gold/champagne typography.

### Hairline Grid & Card Borders
- Wrap prominent cards with `border border-ivory-400/80 hover:border-gold-500/60 transition-all duration-300`.
- Use a slight lift `hover:-translate-y-0.5 hover:shadow-md` for interactive states.

### Data Verification Badges
- Keep compliance and regulatory seals understated: emerald or gold tint, subtle 1px border, bold uppercase monospace or sans tracking (`tracking-wider text-[10px]`).

---

## 5. Accessibility & Performance Checklist
- Contrast ratio $\ge 4.5:1$ on all body text against `#FAF8F3` and `#0B1F3A`.
- Visible `:focus-visible` golden ring with `outline-offset: 2px`.
- Semantic HTML tags (`<header>`, `<main>`, `<article>`, `<nav>`, `<footer>`, `<section>`).
- Full responsive support from 320px mobile viewport up to 4K ultra-wide screens.
