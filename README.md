# RPG Fresh — React + Tailwind

Landing page for **RPG Fresh** built with **Vite + React + Tailwind CSS**, converted from the original HTML design with the same look and feel.

## Project Structure

```
rpg-fresh/
├── index.html                  # Entry HTML with Google Fonts + Material Symbols
├── package.json
├── vite.config.js
├── tailwind.config.js          # Custom theme (colors, fonts, spacing) ported from original
├── postcss.config.js
└── src/
    ├── main.jsx                # React entry point
    ├── App.jsx                 # Mounts Navbar + Landing + Footer
    ├── index.css               # Tailwind directives + custom keyframes/utilities
    ├── components/
    │   ├── Navbar.jsx          # Sticky top nav with logo + links + CTA
    │   ├── Landing.jsx         # Full landing page (hero, vision, mission, etc.)
    │   └── Footer.jsx          # Footer with brand, navigation, produce, contact
    └── hooks/
        └── useScrollReveal.js  # IntersectionObserver hook for scroll-fade animation
```

## Three components

As requested, the project is split into exactly three components:

1. **`Navbar.jsx`** — top navigation bar
2. **`Landing.jsx`** — full landing page content (hero, vision, mission, why choose us, products, certifications)
3. **`Footer.jsx`** — site footer

## Setup

```bash
# 1. Install dependencies
npm install

# 2. Start the dev server
npm run dev

# 3. Open the URL printed in the terminal (usually http://localhost:5173)
```

## Build

```bash
npm run build      # outputs to dist/
npm run preview    # preview the production build
```

## Notes

- The original HTML used the Tailwind CDN with an inline custom theme. That theme has been moved into `tailwind.config.js` so all custom colors (`secondary`, `on-surface`, `surface-container`, etc.) and custom fonts (`font-headline-lg`, `font-headline-xl`, etc.) work in JSX class names.
- Custom CSS (`hero-gradient`, `glass-card`, `highlight-green`, `material-symbols-outlined`) lives in `src/index.css`.
- The `reveal-on-scroll` fade-in animation uses an IntersectionObserver mounted via the `useScrollReveal` hook.
- All section images use the same URLs as the original HTML — replace them with your own assets when ready.
