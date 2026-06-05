# Shungite Shield — EMF Protection Store
> Standalone Product Landing Page for GO-BRICS Business Lab

A premium, high-performance, and mobile-responsive product landing page for **Shungite Shield**, an Ayurvedic and wellness brand selling authentic Type II Karelian Shungite EMF protection products.

---

## 🎨 Design System & Aesthetics
- **Primary Color**: Deep Black (`#0A0A0A`)
- **Accent Color**: Metallic Gold (`#C9A84C`)
- **Secondary Color**: Dark Charcoal (`#1A1A1A`)
- **Typography**: Playfair Display (Headings) + Inter (Body Text) loaded directly from Google Fonts.
- **Aesthetic Tone**: Premium, trustworthy, wellness-focused, combining scientific elements with spiritual grounding. Includes subtle radial gradients and CSS keyframe-based ambient background glowing particles.

---

## 📱 Page Sections (In Sequence)
1. **Top Banner & Sticky Navigation**: Transparent-to-blur sticky header displaying the custom gold carbon hexagon (`⬡`) logo, smooth-scroll navigations, and an interactive hamburger menu for mobile viewports.
2. **Hero Section**: Gold radial gradient backdrop, Playfair Display heading, call-to-actions (with gradient hovers and shadows), and a single-row responsive badge system (🔬 Lab Tested | 🌍 Sourced | ✅ Authentic).
3. **Product Feature Highlights**: A responsive grid containing 6 styled feature cards (EMF Protection, Water Purification, Energy Balancing, Nobel Prize-winning Scientific Study, 100% Natural, Home & Work). Cards use dark charcoal backgrounds and gold top border accents.
4. **Benefits Section**: Two-column layout showcasing a metallic gold C60 fullerene molecule SVG model on the left, a checklist of 7 user benefits on the right, and Dr. Robert Haag's conductive mineral quote in a custom gold box.
5. **Trust & Credibility Section**: A mobile-responsive 2x2 grid representing credentials (Certified Authentic, Lab Tested, 5000+ Customers, Mumbai Warehouse).
6. **Testimonials Section**: 3 star-rated customer testimonials featuring left-border accents.
7. **Pricing Section**: 3 distinct cards (Starter Pack, Pro Home Protection Set with custom gold borders/badges, and Wellness Studio Pack) with interactive anchors.
8. **Enquiry & Contact**: Validation-checked form utilizing React `useState` hooks. On submission, the form displays a gold success screen. The "Contact for B2B" button from pricing automatically scrolls to this section and pre-selects the "B2B / Wholesale" option.
9. **Footer**: Quick links, product menus, social connect links, and bottom copyright metadata.

---

## 🛠️ Technology Stack
- **Framework**: React 18 (TypeScript template)
- **Bundler & Dev Server**: Vite (HMR enabled)
- **Styling**: Tailwind CSS v3 (Pure configuration + custom CSS keyframe animations)
- **Fonts**: Playfair Display + Inter (Preconnected in HTML for fast page loads)

---

## ⚡ Performance Optimization & Mobile Responsiveness
- **Fast Page Load**: Compiles as a lightweight static asset with a stylesheet size of just 31 kB and JavaScript size of 242 kB.
- **Responsive Breakpoints**: Fully tested and styled for 375px (mobile), 768px (tablet), and 1280px (desktop) viewports.
- **Mobile grids**: Features are configured in a 2-column layout (`grid-cols-2`) and trust cards in a 2x2 layout on mobile.
- **Zoom Prevention**: Form text inputs are sized at `16px` (`text-base`) on mobile to prevent iOS Safari from automatically zooming into input boxes upon tap focus.

---

## 🚀 How to Run Locally

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Development Server (with Hot Reloading)
```bash
npm run dev
```

### 3. Build for Production
```bash
npm run build
```
The compiled assets will be built inside the `./dist` directory.
