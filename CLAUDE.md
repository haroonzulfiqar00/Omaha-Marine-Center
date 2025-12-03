# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Omaha Marine is a static HTML website for a boat dealership/marine service business. This is a traditional multi-page site with no build tools or package management—all HTML, CSS, and JavaScript are served directly.

## Development Workflow

**No Build Step Required** - This is a static site. To develop:
- Edit HTML, CSS, and JavaScript files directly
- Test locally using a simple HTTP server:
  - Python: `python -m http.server`
  - Node.js: `npx http-server`
- No npm install, npm build, or compilation commands needed

## Project Structure

```
Omaha-Marine/
├── home.html              # Main landing page
├── header.html            # Header component template
├── footer.html            # Footer component template
└── assets/
    ├── css/
    │   └── style.css      # Single stylesheet for entire site
    ├── js/
    │   └── script.js      # Custom JavaScript (carousel init, interactions)
    ├── fonts/
    │   └── segoe-ui/      # Self-hosted Segoe UI font family (4 variants)
    ├── images/
    │   └── Home/          # Homepage-specific images
    └── videos/            # Hero/promotional videos
```

## Technologies & Libraries

**Loaded via CDN (in order):**
1. Bootstrap 4.6.2 - Grid system and responsive utilities
2. jQuery 3.7.1 - DOM manipulation and event handling
3. Popper.js 1.16.1 - Tooltip positioning for Bootstrap
4. Owl Carousel 2.3.4 - Primary carousel library
5. Slick Carousel 1.8.1 - Alternative carousel option
6. Font Awesome 4.7.0 - Icon library

**Typography:**
- Primary font: Segoe UI (self-hosted via @font-face)
- Font weights: 400 (regular, italic) and 700 (bold, bold-italic)
- All font declarations are in `assets/css/style.css`

## CSS Architecture

### Color System (CSS Variables in :root)
```css
--black-color: #111
--white-color: #fff
--Light-Blue: #b4e3f6
--Back-Blue: #161a1f
--Blue1: #0d3d64
--Navy-Blue: #0e233a
```

### Typography Scale
- **h1:** 80px / 88px line-height (Segoe UI Bold)
- **h2:** 40px / 48px line-height (Segoe UI Black 900)
- **h3:** 40px / 48px line-height (Segoe UI Black 900, centered)
- **h4:** 24px / 32px line-height (Segoe UI Black 900)
- **h5:** 22px / 24px line-height (Segoe UI Medium)
- **p:** 16px / 24px line-height (Segoe UI Regular)

### Utility Classes
- Margin: `.mb-40`, `.mb-30`, `.mt-40`, `.mt-30`, `.my-40`, `.my-30`, `.my-80`
- Padding: `.py-120`
- Buttons: `.blue-btn` (primary CTA), `.darkblue-btn` (secondary)

### Button Styles
- `.blue-btn`: Background #4D91D5, hover: #1e4770
- `.darkblue-btn`: Background #131439, hover: #00012b
- Border radius: 20px, Font weight: 700

## Common Development Patterns

### Adding New Pages
1. Create new `.html` file in root directory
2. Copy structure from `home.html` (includes all CDN links)
3. Ensure proper script load order at bottom of `<body>`
4. Link stylesheet: `<link rel="stylesheet" href="./assets/css/style.css">`

### Working with Images
- Place page-specific images in `assets/images/[PageName]/`
- Use relative paths: `./assets/images/Home/banner.jpg`
- Maintain naming convention: descriptive kebab-case names

### Carousel Implementation
Initialize carousels in `assets/js/script.js` using Owl Carousel:
```javascript
$('.owl-carousel').owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    responsive: {
        0: { items: 1 },
        600: { items: 2 },
        1000: { items: 3 }
    }
});
```

### Responsive Design
- Use Bootstrap 4.6.2 grid system (`.container`, `.row`, `.col-*`)
- Standard breakpoints: 576px, 768px, 992px, 1200px
- Mobile-first approach: design for small screens first

## File Modification Guidelines

### CSS Changes
- All styles go in `assets/css/style.css`
- Use existing CSS variables for colors
- Add utility classes following existing patterns
- Keep Segoe UI as primary font family

### JavaScript Changes
- Custom code goes in `assets/js/script.js`
- jQuery is available globally
- Bootstrap, Owl Carousel, and Slick libraries are pre-loaded
- Script loads last (after all HTML content)

### Font Updates
- Font files: `assets/fonts/segoe-ui/`
- @font-face declarations at top of `style.css`
- Currently using 4 Segoe UI variants (regular, italic, bold, bold-italic)

## Important Notes

- **No preprocessors**: CSS is written directly, no SASS/LESS compilation
- **No module bundler**: All JavaScript is vanilla or jQuery, no webpack/rollup
- **CDN dependencies**: All third-party libraries loaded from CDN, not npm
- **Self-hosted fonts**: Segoe UI fonts are local for performance and consistency
- **Universal font**: Segoe UI applied globally via universal selector (`*`)

## Design Consistency

- Maintain rounded button style (20px border-radius)
- Use blue color palette (#4D91D5, #131439) for CTAs
- Follow typography hierarchy (h1-h5 have specific weights/sizes)
- Keep white/light backgrounds with dark blue text for readability
