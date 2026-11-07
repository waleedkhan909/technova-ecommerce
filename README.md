# TechNova — Premium Electronics E-Commerce Website

> **Technology That Moves You Forward.**

A complete, premium, fully responsive multi-page electronics e-commerce website built with **HTML5**, **CSS3**, **Bootstrap 5**, and **Vanilla JavaScript** — no frameworks, no build tools, no npm required.

---

## 🌐 Live Preview

> Open `index.html` with [VS Code Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) to run the project locally.

---

## ✨ Features

- 🎨 **Cosmic Dark Purple Design System** — Custom CSS variables, Space Grotesk + Inter typography, electric purple gradients and glow effects
- 🛒 **Fully Functional Shopping Cart** — Add, update, remove items; persistent across page reloads via `localStorage`
- 🔍 **Live Product Search & Filters** — Real-time search, category filter, price range slider, and multi-criteria sorting
- 📄 **Dynamic Product Detail Pages** — URL parameter-driven (`?id=...`) product renderer with gallery, color picker, and specs table
- 🏷️ **Coupon Code Engine** — `TECHNOVA10` (10% off), `SPRING25` (25% off)
- 🔔 **Toast Notifications** — Non-intrusive slide-in cart feedback system
- 💌 **Validated Forms** — Contact and newsletter forms with inline Bootstrap validation
- 📱 **Fully Responsive** — Mobile (375px), Tablet (768px), Laptop (1024px), Desktop (1440px)

---

## 📂 Project Structure

```
technova-ecommerce/
│
├── index.html              # Homepage — Hero, Featured Products, Categories
├── products.html           # Product Catalog — Search, Filters, Sorting
├── product-details.html    # Product Detail — Gallery, Specs, Color Picker
├── about.html              # About Us — Brand Story, Team, Stats
├── contact.html            # Contact — Form, Cards, FAQ Accordion
├── cart.html               # Shopping Cart — Items, Coupon, Checkout
│
├── css/
│   └── style.css           # Complete design system & theme
│
└── js/
    └── script.js           # Product catalog, cart engine, search & filters
```

---

## 🛍️ Pages

| Page | File | Description |
| :--- | :--- | :--- |
| **Home** | `index.html` | Hero section, featured categories, product showcase, promo banner |
| **Products** | `products.html` | 12-product catalog with live search, filters, and sorting |
| **Product Details** | `product-details.html` | Dynamic product page with specs, gallery, and color options |
| **About** | `about.html` | Brand story, mission & vision, team, company stats |
| **Contact** | `contact.html` | Contact form, support info, FAQ accordion |
| **Cart** | `cart.html` | Full cart management, coupon codes, order summary |

---

## 🎨 Design System

| Token | Value |
| :--- | :--- |
| **Background** | `#0A0618` — Deep cosmic purple-black |
| **Card Surface** | `#150D31` — Nocturnal violet |
| **Primary Accent** | `#A855F7` — Electric purple |
| **Gradient** | `135deg, #A855F7 → #6366F1` |
| **Heading Font** | [Space Grotesk](https://fonts.google.com/specimen/Space+Grotesk) — 500, 600, 700 |
| **Body Font** | [Inter](https://fonts.google.com/specimen/Inter) — 400, 500, 600, 700, 800 |

---

## 🗃️ Data & Storage

Since this is a pure frontend project with no backend server:

| Component | Technical Term | Implementation |
| :--- | :--- | :--- |
| Product Catalog | In-Memory Mock Data Store | `const TECHNOVA_PRODUCTS = [...]` in `script.js` |
| Search & Filters | Client-Side Query Engine | JavaScript `.filter()`, `.sort()`, `.find()` |
| Product Detail Loader | URL Parameter Routing | `URLSearchParams(location.search).get('id')` |
| Shopping Cart | Persistent Client-Side State | `localStorage` key: `technova_cart_v1` |

---

## 🚀 Getting Started

1. **Clone the repository**
   ```bash
   git clone https://github.com/waleedkhan909/technova-ecommerce.git
   ```

2. **Open the project folder in VS Code**
   ```bash
   cd technova-ecommerce
   code .
   ```

3. **Launch with Live Server**
   - Right-click `index.html` → **Open with Live Server**
   - Or press `Alt + L` → `Alt + O`

---

## 🛠️ Tech Stack

| Technology | Purpose |
| :--- | :--- |
| HTML5 | Semantic markup and page structure |
| CSS3 | Custom design system, animations, responsive layout |
| Bootstrap 5 (CDN) | Grid system, components, utilities |
| Vanilla JavaScript (ES6+) | Product catalog, cart engine, DOM interactions |
| Google Fonts | Space Grotesk + Inter typography |
| Unsplash | High-quality product photography |
| localStorage API | Cart persistence across pages |

---

## 📦 Product Categories

- 📱 Smartphones
- 💻 Laptops
- 🎧 Audio / Headphones
- ⌚ Wearables / Smartwatches
- 🎮 Gaming Accessories
- 📟 Tablets
- 🖱️ Computer Accessories

---

## 👨‍💻 Author

**Waleed Khan**
- GitHub: [@waleedkhan909](https://github.com/waleedkhan909)

---

## 📄 License

This project is for educational purposes as part of a university assignment.

---

<p align="center">
  Built with 💜 by <strong>Waleed Khan</strong> &nbsp;|&nbsp; TechNova — Technology That Moves You Forward.
</p>
