# Aurelia Fine Jewellery — Luxury Multi-Page Showcase Website

A high-conversion, ultra-aesthetic, fully responsive showcase website built for luxury fine jewellery businesses. Built with **Vite + React + Tailwind CSS + GSAP + Lenis + React Router**, featuring haute joaillerie aesthetics, ivory canvases, champagne gold accents, bilingual support (English & Hindi), and comprehensive WhatsApp concierge integrations.

---

## 🗺️ Multi-Page Architecture & Routes

The application has been modularized into distinct, dedicated routes with instant scroll restoration and active navigation states:

| Route | Page Component | Key Features & Content |
| :--- | :--- | :--- |
| **`/`** | [HomePage.jsx](file:///d:/jewellary/src/pages/HomePage.jsx) | Cinematic Hero with gold dust sparkle canvas, Brand Marquee, Curated Collections preview, Occasion guide, Spotlight Masterpieces, Craftsmanship story teaser, Testimonials slider, and Showroom visit prompt. |
| **`/collections`** | [CollectionsPage.jsx](file:///d:/jewellary/src/pages/CollectionsPage.jsx) | Full 12-piece jewellery catalogue, instant search bar, category tabs, metal filter, occasion & budget filters, sorting by weight/newest, animated reflow, Quick-View zoom modal, and WhatsApp price inquiry buttons. |
| **`/heritage`** | [HeritagePage.jsx](file:///d:/jewellary/src/pages/HeritagePage.jsx) | Atelier craftsmanship story, sticky goldsmith visual, Karatmeter spectrometer purity assurance, BIS 916 hallmarking standards, animated heritage counters, and Editorial Lookbook. |
| **`/bespoke`** | [BespokePage.jsx](file:///d:/jewellary/src/pages/BespokePage.jsx) | 4-step custom creation journey (Consultation, 3D CAD, Hand-forging, Hallmarking), interactive Custom Design Consultation form, and direct WhatsApp photo consultation link. |
| **`/visit`** | [VisitPage.jsx](file:///d:/jewellary/src/pages/VisitPage.jsx) | Dual showroom details (South Mumbai Flagship & Jaipur Heritage Atelier), salon timings, Google Directions, interactive Google Maps iframe, and Private VIP Visit booking. |
| **`/care-guide`** | [CareGuidePage.jsx](file:///d:/jewellary/src/pages/CareGuidePage.jsx) | Embedded interactive Ring Size Calculator (mm / inches), Indian Bangle Size Chart (2-2 to 2-10), Accordion FAQs, and Heirloom Jewellery Care tips. |

---

## 🌟 Key Features

### 1. WhatsApp Concierge Integration
- **Direct WhatsApp Chat Links**: Every conversion point generates a pre-formatted message via `https://wa.me/[NUMBER]?text=...` configured in [src/config.js](file:///d:/jewellary/src/config.js) and handled by [src/utils/whatsapp.js](file:///d:/jewellary/src/utils/whatsapp.js).
- **Product-Specific Inquiries**: Each piece sends its item code, purity, and name directly into the WhatsApp chat.
- **Floating WhatsApp FAB**: Fixed bottom-right pulsing button with interactive tooltip and analytics tracking.
- **Mobile Action Bar**: Sticky mobile bottom bar with instant WhatsApp, Direct Phone Call, Showroom Directions, and Wishlist Drawer trigger.

### 2. Wishlist System
- Saved in `localStorage` (with error handling).
- Count badge in navbar and mobile action bar.
- Slide-over Wishlist Drawer with image previews and item removal.
- **"Send Wishlist on WhatsApp"**: Compiles all saved pieces into a single WhatsApp inquiry.

### 3. Bespoke Custom Design Request
- Dedicated page at `/bespoke` with an interactive consultation form (Name, WhatsApp, Occasion, Metal/Stones, Budget, Design Notes).
- Directly opens WhatsApp with structured project parameters and guidance on attaching reference sketches in chat.

### 4. VIP Store Visit Booking
- Dedicated page at `/visit` with showroom selection (Mumbai / Jaipur), Date Picker, and Time-slot chips.
- Dispatches confirmed appointment details straight to WhatsApp.

### 5. Interactive Sizing Calculators
- Dedicated page at `/care-guide` with an interactive **Ring Size Calculator** (enter finger circumference in mm or inches to get the exact Indian gauge and US equivalent) and **Bangle Sizing Chart** (2-2 to 2-10).

### 6. Full Bilingual Support (English & Hindi)
- Instant toggle in navbar (`EN` / `हिन्दी`).
- User preference persisted in `localStorage`.
- All text localized in [src/i18n/en.js](file:///d:/jewellary/src/i18n/en.js) and [src/i18n/hi.js](file:///d:/jewellary/src/i18n/hi.js).

---

## 🚀 Running Locally

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build locally
npm run preview
```
Dev server is active at **http://localhost:5173/**.

---

## 🛠️ How to Customize

1. **Shop Name, WhatsApp Number & Rates**: Edit [src/config.js](file:///d:/jewellary/src/config.js).
2. **Product Catalog**: Edit [src/data/products.js](file:///d:/jewellary/src/data/products.js).
3. **Translations**: Edit [src/i18n/en.js](file:///d:/jewellary/src/i18n/en.js) and [src/i18n/hi.js](file:///d:/jewellary/src/i18n/hi.js).
