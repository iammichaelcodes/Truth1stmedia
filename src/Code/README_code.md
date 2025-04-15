
# Code Reference – TruthFirstMedia

This folder contains React and Tailwind-ready snippets designed to plug directly into the existing TruthFirst Media front-end template.

## Files

### Header.jsx
Hero banner component. Uses `truthfirst_hero_banner.png` as background. Includes core tagline and CTA buttons.

### HomepageSections.jsx
Drops two core sections into homepage: Governance and Donate. Integrates with `/icons/` and `/specs/` assets.

### tailwind.config.js
Extends brand colors and fonts:
- `truth`: #1F1F1F
- `highlight`: #FFD700
- `resistance`: #38B2AC

Also sets content paths for pages and components.

### walletUtils.js
Solana Wallet Adapter hook for wallet connection, status check, and disconnect functionality. Used in any component that requires gating or wallet detection.

## Usage

1. Import `Header.jsx` into your homepage layout.
2. Import `HomepageSections.jsx` under your hero or in main content area.
3. Update Tailwind config.
4. Use `walletUtils.js` in any gated content or header bar.
5. Drop supporting images/icons into `/public/` or your static folder.

---

If integrating with Next.js or Vite, adjust imports accordingly.
