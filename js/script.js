/**
 * TechNova — Premium Electronics E-Commerce Website
 * Master JavaScript File
 * Handles: Product Catalog, Shopping Cart (localStorage), Filtering, 
 * Sorting, Search, Dynamic Product Details, Form Validations, and Toasts.
 */

// ==========================================================================
// 1. Product Database (12+ Premium Electronics)
// ==========================================================================
const PRODUCTS = [
  {
    id: "tn-phone-01",
    name: "NovaPhone 16 Pro Max",
    category: "smartphones",
    categoryLabel: "Smartphones",
    price: 1199,
    originalPrice: 1299,
    rating: 4.9,
    reviewsCount: 384,
    badge: "Best Seller",
    badgeType: "sale",
    image: "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?auto=format&fit=crop&w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1580910051074-3eb694886505?auto=format&fit=crop&w=800&q=80"
    ],
    description: "The NovaPhone 16 Pro Max represents the pinnacle of mobile engineering. Built with an aerospace-grade titanium frame, an ultra-fluid 120Hz ProMotion Super Retina XDR display, and the revolutionary A18 Pro 3nm bionic chip. Capture cinema-grade 4K ProRes log video with our periscope quad-lens optical system.",
    specs: {
      "Display": "6.7\" Super Retina XDR OLED (120Hz ProMotion)",
      "Processor": "Nova A18 Pro Bionic (3nm architecture)",
      "Storage": "256GB / 512GB / 1TB High-speed NVMe",
      "Camera System": "48MP Main Quad-Pixel + 48MP Ultra-Wide + 12MP 5x Telephoto",
      "Battery Life": "Up to 29 hours video playback",
      "Materials": "Titanium chassis with Ceramic Shield front",
      "Connectivity": "5G Ultra-Wideband, Wi-Fi 7, Satellite SOS"
    },
    colors: [
      { name: "Titanium Black", hex: "#1E293B" },
      { name: "Natural Titanium", hex: "#94A3B8" },
      { name: "Deep Cobalt", hex: "#2563EB" }
    ],
    isFeatured: true
  },
  {
    id: "tn-laptop-01",
    name: "NovaBook Ultra 16 M3",
    category: "laptops",
    categoryLabel: "Laptops",
    price: 1899,
    originalPrice: 2099,
    rating: 4.95,
    reviewsCount: 512,
    badge: "Flagship",
    badgeType: "new",
    image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1541807084-5c52b6b3adef?auto=format&fit=crop&w=800&q=80"
    ],
    description: "Engineered for creators, developers, and power users who refuse compromises. The NovaBook Ultra 16 is powered by the groundbreaking Nova M3 Max Silicon with 16 CPU cores and 40 GPU cores. Features a dazzling 16.2-inch Liquid Retina XDR Mini-LED display with 1600 nits peak HDR brightness and an astonishing 22-hour battery life.",
    specs: {
      "Display": "16.2\" Liquid Retina XDR (3456 x 2234 at 120Hz)",
      "Processor": "Nova M3 Max with 16 CPU / 40 GPU cores",
      "Memory": "36GB Unified Ultra-Bandwidth RAM",
      "Storage": "1TB PCIe Gen 4 SSD (up to 7.4GB/s)",
      "Battery": "100Wh Lithium-Polymer, up to 22 hours",
      "Ports": "3x Thunderbolt 4, HDMI 2.1, SDXC slot, MagSafe 3",
      "Audio": "Six-speaker sound system with force-cancelling woofers"
    },
    colors: [
      { name: "Space Gray", hex: "#334155" },
      { name: "Silver", hex: "#E2E8F0" },
      { name: "Midnight Black", hex: "#0F172A" }
    ],
    isFeatured: true
  },
  {
    id: "tn-audio-01",
    name: "AeroTune Max ANC Headphones",
    category: "audio",
    categoryLabel: "Audio",
    price: 349,
    originalPrice: 399,
    rating: 4.8,
    reviewsCount: 290,
    badge: "Trending",
    badgeType: "blue",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1484704849700-f032a568e944?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1546435770-a3e426bf472b?auto=format&fit=crop&w=800&q=80"
    ],
    description: "Immerse yourself in breathtaking studio fidelity with the AeroTune Max. Engineered with custom 40mm beryllium dynamic drivers, dual high-precision DAC chips, and Active Noise Cancellation with Transparency mode that cancels up to 98% of ambient noise.",
    specs: {
      "Drivers": "40mm Custom Beryllium Dynamic Drivers",
      "Noise Cancellation": "Active Hybrid ANC with 8 beamforming mics",
      "Battery Life": "40 hours with ANC on (Fast Charge: 5 mins = 4 hrs)",
      "Frequency Response": "10Hz - 40,000Hz (Hi-Res Audio Certified)",
      "Weight": "250g Ultra-light memory foam headband",
      "Codecs": "LDAC, AAC, aptX HD, SBC"
    },
    colors: [
      { name: "Matte Black", hex: "#111827" },
      { name: "Cloud Silver", hex: "#CBD5E1" },
      { name: "Nordic Blue", hex: "#1D4ED8" }
    ],
    isFeatured: true
  },
  {
    id: "tn-watch-01",
    name: "NovaPulse Chrono Titanium Watch",
    category: "wearables",
    categoryLabel: "Wearables",
    price: 429,
    originalPrice: 479,
    rating: 4.85,
    reviewsCount: 195,
    badge: "Popular",
    badgeType: "blue",
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1546868871-7041f2a55e12?auto=format&fit=crop&w=800&q=80"
    ],
    description: "Precision timekeeping meets cutting-edge biometric monitoring. Crafted from Grade 5 aerospace titanium with sapphire crystal glass, the NovaPulse Chrono tracks ECG, blood oxygen, deep sleep cycles, VO2 Max, and high-intensity workout performance with military-grade ruggedness.",
    specs: {
      "Case Size": "46mm Grade 5 Titanium",
      "Display": "1.43\" AMOLED Sapphire (2,000 nits peak)",
      "Sensors": "ECG, Optical Heart Rate, SpO2, Skin Temp, Barometer",
      "Water Resistance": "10 ATM / 100 meters diving rated",
      "Battery Life": "Up to 14 days typical use (65 hours GPS)",
      "GPS": "Dual-frequency multi-satellite GNSS"
    },
    colors: [
      { name: "Obsidian Titanium", hex: "#1F2937" },
      { name: "Brushed Silver", hex: "#E5E7EB" },
      { name: "Solar Orange", hex: "#F97316" }
    ],
    isFeatured: true
  },
  {
    id: "tn-gaming-01",
    name: "ApexPro RGB Mechanical Keyboard",
    category: "gaming",
    categoryLabel: "Gaming",
    price: 189,
    originalPrice: 219,
    rating: 4.9,
    reviewsCount: 420,
    badge: "Esports Edition",
    badgeType: "sale",
    image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1595225476474-87563907a212?auto=format&fit=crop&w=800&q=80"
    ],
    description: "Dominate the competition with the ApexPro. Features ultra-responsive OmniPoint magnetic Hall Effect switches with adjustable actuation points from 0.1mm to 4.0mm, per-key RGB backlighting, aircraft-grade aluminum top plate, and PBT double-shot keycaps.",
    specs: {
      "Switches": "OmniPoint Magnetic Hall Effect (Rapid Trigger)",
      "Actuation Range": "0.1mm - 4.0mm customizable in 0.1mm increments",
      "Polling Rate": "8,000Hz hyper-polling (0.125ms latency)",
      "Layout": "Tenkeyless (TKL) 80% format",
      "Keycaps": "Double-shot PBT shine-through",
      "Connectivity": "Detachable braided USB-C"
    },
    colors: [
      { name: "Stealth Black", hex: "#0F172A" },
      { name: "Arctic White", hex: "#F8FAFC" }
    ],
    isFeatured: true
  },
  {
    id: "tn-tablet-01",
    name: "NovaTab Pro 13 Liquid OLED",
    category: "tablets",
    categoryLabel: "Tablets",
    price: 899,
    originalPrice: 999,
    rating: 4.88,
    reviewsCount: 164,
    badge: "New Release",
    badgeType: "new",
    image: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?auto=format&fit=crop&w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1561154464-82e9adf32764?auto=format&fit=crop&w=800&q=80"
    ],
    description: "The thinnest, most powerful creative canvas TechNova has ever created. Measuring just 5.1mm thin, the NovaTab Pro 13 features an Ultra Retina Tandem OLED display with million-to-one contrast, Nova M3 chip performance, and precision stylus support with haptic feedback.",
    specs: {
      "Display": "13.0\" Tandem OLED (2752 x 2064, 120Hz ProMotion)",
      "Thickness": "5.1mm ultra-slim unibody aluminum",
      "Chip": "Nova M3 Silicon with 8-core CPU / 10-core GPU",
      "Storage": "256GB / 512GB / 1TB / 2TB",
      "Cameras": "12MP Wide back camera with LiDAR scanner, 12MP Ultra-wide front",
      "Stylus Support": "Nova Pencil Pro with barrel roll & haptic engine"
    },
    colors: [
      { name: "Space Black", hex: "#18181B" },
      { name: "Silver", hex: "#E4E4E7" }
    ],
    isFeatured: true
  },
  {
    id: "tn-acc-01",
    name: "OmniDock 14-in-1 Thunderbolt 4 Dock",
    category: "accessories",
    categoryLabel: "Accessories",
    price: 249,
    originalPrice: 299,
    rating: 4.75,
    reviewsCount: 110,
    badge: "Essential",
    badgeType: "blue",
    image: "https://images.unsplash.com/photo-1622445262464-84b1456045b6?auto=format&fit=crop&w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1622445262464-84b1456045b6?auto=format&fit=crop&w=800&q=80"
    ],
    description: "Transform your laptop into an all-powerful workstation with a single cable. Features dual 4K @ 120Hz or single 8K display support, 96W Power Delivery host charging, 2.5 Gigabit Ethernet, UHS-II SD card slot, and 40Gbps Thunderbolt 4 data transfers.",
    specs: {
      "Host Connection": "Thunderbolt 4 / USB4 (up to 40Gbps)",
      "Charging": "Up to 96W smart dynamic host power delivery",
      "Display Outputs": "2x HDMI 2.1, 1x DisplayPort 1.4, 1x Downstream TB4",
      "Network": "2.5G RJ-45 Ethernet port",
      "Card Reader": "UHS-II SD & microSD concurrent card slots",
      "Build": "Anodized aluminum heat-dissipating housing"
    },
    colors: [
      { name: "Space Gray", hex: "#475569" }
    ],
    isFeatured: false
  },
  {
    id: "tn-display-01",
    name: "VisionPro 32\" 4K HDR Studio Display",
    category: "accessories",
    categoryLabel: "Accessories",
    price: 1299,
    originalPrice: 1449,
    rating: 4.92,
    reviewsCount: 88,
    badge: "Pro Choice",
    badgeType: "new",
    image: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&w=800&q=80"
    ],
    description: "Designed for color grading, professional visual artists, and software architects. Features 100% DCI-P3 color gamut, hardware calibration, Thunderbolt daisy-chaining, integrated 4K studio webcam with Center Stage tracking, and studio-grade 3-mic array.",
    specs: {
      "Panel": "32-inch 4K UHD (3840 x 2160) IPS Black Technology",
      "Contrast Ratio": "2000:1 deep contrast ratio",
      "Color Accuracy": "Delta E < 1 factory pre-calibrated",
      "Peak Brightness": "600 nits HDR600 certified",
      "Integrated Tech": "4K Center Stage webcam + dual noise-cancelling mics",
      "Stand": "Height, tilt, and 90-degree pivot adjustable aluminum stand"
    },
    colors: [
      { name: "Silver Aluminum", hex: "#E2E8F0" }
    ],
    isFeatured: false
  },
  {
    id: "tn-audio-02",
    name: "AeroBuds Pro 2 Wireless Earbuds",
    category: "audio",
    categoryLabel: "Audio",
    price: 199,
    originalPrice: 229,
    rating: 4.86,
    reviewsCount: 310,
    badge: "Sale",
    badgeType: "sale",
    image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?auto=format&fit=crop&w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?auto=format&fit=crop&w=800&q=80"
    ],
    description: "Next-generation audio in your pocket. Features Adaptive Audio that seamlessly blends Active Noise Cancellation and Transparency mode as your environment changes. Spatial Audio with dynamic head tracking places sound all around you.",
    specs: {
      "Noise Reduction": "Up to 2x more active noise cancellation",
      "Battery Life": "6 hours listening on one charge, 30 hours with MagSafe Case",
      "Case": "MagSafe and Qi wireless charging with built-in speaker for Find My",
      "Water Resistance": "IP54 dust, sweat, and water resistant",
      "Ear Tips": "4 pairs of silicone tips (XS, S, M, L)"
    },
    colors: [
      { name: "Pure White", hex: "#FFFFFF" },
      { name: "Graphite", hex: "#1E293B" }
    ],
    isFeatured: false
  },
  {
    id: "tn-mouse-01",
    name: "ApexPrecision Wireless Gaming Mouse",
    category: "gaming",
    categoryLabel: "Gaming",
    price: 129,
    originalPrice: 149,
    rating: 4.82,
    reviewsCount: 230,
    badge: "Ultralight",
    badgeType: "blue",
    image: "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?auto=format&fit=crop&w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?auto=format&fit=crop&w=800&q=80"
    ],
    description: "Zero drag. Zero lag. At just 49 grams, the ApexPrecision is engineered in partnership with top esports champions. Features the Focus Pro 35K optical sensor, Gen-3 optical mouse switches rated for 90 million clicks, and frictionless 100% PTFE mouse feet.",
    specs: {
      "Weight": "49 grams featherlight unibody design",
      "Sensor": "NovaFocus Pro 35,000 DPI Optical Sensor",
      "Max Acceleration": "70G max acceleration / 750 IPS",
      "Switches": "Optical Gen-3 with zero debounce delay (90M clicks)",
      "Battery Life": "Up to 90 hours continuous competitive gaming",
      "Polling": "Up to 4000Hz wireless polling rate supported"
    },
    colors: [
      { name: "Matte Black", hex: "#0B1220" },
      { name: "Arctic White", hex: "#F8FAFC" }
    ],
    isFeatured: false
  },
  {
    id: "tn-phone-02",
    name: "NovaFold 5 Ultra Dual-Screen",
    category: "smartphones",
    categoryLabel: "Smartphones",
    price: 1699,
    originalPrice: 1849,
    rating: 4.89,
    reviewsCount: 140,
    badge: "Innovative",
    badgeType: "new",
    image: "https://images.unsplash.com/photo-1565849904461-04a58ad377e0?auto=format&fit=crop&w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1565849904461-04a58ad377e0?auto=format&fit=crop&w=800&q=80"
    ],
    description: "Unfold a world of limitless productivity. Compact 6.3\" phone on the outside, expansive 7.8\" foldable OLED tablet on the inside. Crafted with a zero-crease titanium tear-drop hinge rated for over 400,000 folds.",
    specs: {
      "Main Display": "7.8\" Foldable Dynamic LTPO AMOLED 2X (1-120Hz)",
      "Cover Display": "6.3\" Super AMOLED (1-120Hz)",
      "Hinge": "Zero-gap Titanium Armor Flex Hinge",
      "Processor": "Snapdragon 8 Gen 3 for Nova",
      "Camera": "Triple 50MP + 12MP Ultra-wide + 10MP 3x Optical Zoom",
      "Durability": "IPX8 water resistant"
    },
    colors: [
      { name: "Phantom Black", hex: "#0F172A" },
      { name: "Titanium Gray", hex: "#64748B" }
    ],
    isFeatured: false
  },
  {
    id: "tn-charger-01",
    name: "NovaPower 140W GaN Triple Charger",
    category: "accessories",
    categoryLabel: "Accessories",
    price: 79,
    originalPrice: 99,
    rating: 4.94,
    reviewsCount: 350,
    badge: "Top Rated",
    badgeType: "sale",
    image: "https://images.unsplash.com/photo-1583863788434-e58a36330cf0?auto=format&fit=crop&w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1583863788434-e58a36330cf0?auto=format&fit=crop&w=800&q=80"
    ],
    description: "Fast-charge your laptop, smartphone, and smartwatch simultaneously. Powered by cutting-edge Gallium Nitride (GaN III) technology, this compact powerhouse delivers full 140W USB-C Power Delivery 3.1 in a body 45% smaller than standard chargers.",
    specs: {
      "Total Output": "140W Max Smart Power Distribution",
      "Ports": "2x USB-C (PD 3.1 / QC 4.0), 1x USB-A (Fast Charge)",
      "Technology": "GaN III (Gallium Nitride) Semiconductor",
      "Safety": "ActiveShield 2.0 temperature monitoring 3 million times/day",
      "Compatibility": "Laptops, Tablets, Smartphones, Drones, Consoles"
    },
    colors: [
      { name: "Space Gray", hex: "#334155" },
      { name: "Glacier White", hex: "#F1F5F9" }
    ],
    isFeatured: false
  }
];

// ==========================================================================
// 2. LocalStorage Cart System
// ==========================================================================
const CART_STORAGE_KEY = "technova_cart_v1";

function getCart() {
  try {
    const data = localStorage.getItem(CART_STORAGE_KEY);
    return data ? JSON.parse(data) : [];
  } catch (e) {
    console.error("Error reading cart from localStorage", e);
    return [];
  }
}

function saveCart(cart) {
  try {
    localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cart));
    updateCartBadges();
  } catch (e) {
    console.error("Error saving cart to localStorage", e);
  }
}

function addToCart(productId, quantity = 1, color = null) {
  const product = PRODUCTS.find(p => p.id === productId);
  if (!product) {
    showToast("Product not found", "Could not locate this product in catalog.", "error");
    return;
  }

  const selectedColor = color || (product.colors && product.colors[0] ? product.colors[0].name : "Standard");
  let cart = getCart();

  const existingIndex = cart.findIndex(item => item.id === productId && item.color === selectedColor);

  if (existingIndex > -1) {
    cart[existingIndex].quantity += quantity;
  } else {
    cart.push({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      category: product.categoryLabel,
      color: selectedColor,
      quantity: quantity
    });
  }

  saveCart(cart);
  showToast("Added to Cart!", `${product.name} (${selectedColor}) x ${quantity} added to your cart.`, "success");
}

function removeFromCart(productId, color) {
  let cart = getCart();
  cart = cart.filter(item => !(item.id === productId && item.color === color));
  saveCart(cart);
  showToast("Item Removed", "Product was removed from your shopping cart.", "info");
}

function updateCartQuantity(productId, color, delta) {
  let cart = getCart();
  const item = cart.find(i => i.id === productId && i.color === color);
  if (!item) return;

  item.quantity += delta;
  if (item.quantity <= 0) {
    removeFromCart(productId, color);
    return;
  }

  saveCart(cart);
}

function getCartCount() {
  const cart = getCart();
  return cart.reduce((total, item) => total + item.quantity, 0);
}

function getCartTotal() {
  const cart = getCart();
  return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
}

function clearCart() {
  localStorage.removeItem(CART_STORAGE_KEY);
  updateCartBadges();
}

function updateCartBadges() {
  const count = getCartCount();
  const badges = document.querySelectorAll(".cart-counter-badge");
  badges.forEach(badge => {
    badge.textContent = count;
    badge.classList.remove("bump");
    // Trigger CSS bump animation
    void badge.offsetWidth;
    badge.classList.add("bump");
  });
}

// ==========================================================================
// 3. Modern Toast Notification System
// ==========================================================================
function ensureToastContainer() {
  let container = document.getElementById("technova-toast-container");
  if (!container) {
    container = document.createElement("div");
    container.id = "technova-toast-container";
    container.className = "toast-container-custom";
    document.body.appendChild(container);
  }
  return container;
}

function showToast(title, message, type = "info") {
  const container = ensureToastContainer();
  const toast = document.createElement("div");
  toast.className = "toast-custom";

  let iconClass = "bi-info-circle";
  if (type === "success") iconClass = "bi-check2-circle";
  if (type === "error") iconClass = "bi-exclamation-triangle";

  toast.innerHTML = `
    <div class="toast-icon ${type}">
      <i class="bi ${iconClass}"></i>
    </div>
    <div class="toast-content">
      <div class="toast-title">${title}</div>
      <p class="toast-msg">${message}</p>
    </div>
    <button type="button" class="btn-close btn-close-sm ms-2" aria-label="Close"></button>
  `;

  container.appendChild(toast);

  // Trigger animation
  requestAnimationFrame(() => {
    toast.classList.add("show");
  });

  const closeBtn = toast.querySelector(".btn-close");
  const dismiss = () => {
    toast.classList.remove("show");
    setTimeout(() => {
      if (toast.parentNode) toast.parentNode.removeChild(toast);
    }, 400);
  };

  closeBtn.addEventListener("click", dismiss);
  setTimeout(dismiss, 4000);
}

// ==========================================================================
// 4. Shared Navbar & Scroll Behavior
// ==========================================================================
function initNavbar() {
  updateCartBadges();

  const navbar = document.querySelector(".navbar-technova");
  if (navbar) {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 20) {
        navbar.classList.add("scrolled");
      } else {
        navbar.classList.remove("scrolled");
      }
    });
  }

  // Active navigation link detection based on path
  const currentPath = window.location.pathname.split("/").pop() || "index.html";
  const navLinks = document.querySelectorAll(".nav-link-tech");
  navLinks.forEach(link => {
    const href = link.getAttribute("href");
    if (href === currentPath || (currentPath === "" && href === "index.html")) {
      link.classList.add("active");
    } else {
      link.classList.remove("active");
    }
  });

  // Mobile menu close on link click
  const navCollapse = document.getElementById("navbarTechNovaNav");
  if (navCollapse) {
    const bsCollapse = bootstrap.Collapse.getInstance(navCollapse) || new bootstrap.Collapse(navCollapse, { toggle: false });
    const links = navCollapse.querySelectorAll(".nav-link");
    links.forEach(l => {
      l.addEventListener("click", () => {
        if (window.innerWidth < 992 && navCollapse.classList.contains("show")) {
          bsCollapse.hide();
        }
      });
    });
  }
}

// ==========================================================================
// 5. Product Card HTML Template Builder
// ==========================================================================
function renderProductCard(product) {
  let badgeHtml = "";
  if (product.badge) {
    const badgeClass = product.badgeType === "sale" ? "badge-sale" :
                       product.badgeType === "new" ? "badge-new" : "badge-blue";
    badgeHtml = `<div class="product-badge-float badge-pill-custom ${badgeClass}">${product.badge}</div>`;
  }

  const ratingStars = Array(5).fill(0).map((_, i) => {
    if (i < Math.floor(product.rating)) {
      return '<i class="bi bi-star-fill"></i>';
    } else if (i < product.rating) {
      return '<i class="bi bi-star-half"></i>';
    } else {
      return '<i class="bi bi-star"></i>';
    }
  }).join("");

  return `
    <div class="col-12 col-sm-6 col-lg-4 col-xl-3 mb-4">
      <div class="product-card">
        <div class="product-thumb-container">
          ${badgeHtml}
          <a href="product-details.html?id=${product.id}" class="d-block w-100 h-100">
            <img src="${product.image}" alt="${product.name}" loading="lazy">
          </a>
          <div class="product-actions-hover">
            <a href="product-details.html?id=${product.id}" class="btn btn-sm btn-dark w-100">
              <i class="bi bi-eye"></i> View Details
            </a>
          </div>
        </div>
        <div class="product-body">
          <span class="product-category-sub">${product.categoryLabel}</span>
          <h3 class="product-title">
            <a href="product-details.html?id=${product.id}">${product.name}</a>
          </h3>
          <div class="product-rating">
            ${ratingStars}
            <span class="rating-count">(${product.reviewsCount})</span>
          </div>
          <div class="product-pricing">
            <span class="current-price">$${product.price.toLocaleString()}</span>
            ${product.originalPrice ? `<span class="original-price">$${product.originalPrice.toLocaleString()}</span>` : ""}
          </div>
          <div class="product-card-footer">
            <button class="btn btn-sm btn-primary w-100 btn-add-cart" data-id="${product.id}">
              <i class="bi bi-bag-plus"></i> Add to Cart
            </button>
            <a href="product-details.html?id=${product.id}" class="btn btn-sm btn-outline-custom" title="View Specifications">
              <i class="bi bi-arrow-right"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  `;
}

// ==========================================================================
// 6. Homepage Specific Logic
// ==========================================================================
function initHomePage() {
  const featuredContainer = document.getElementById("featured-products-container");
  if (!featuredContainer) return;

  const featured = PRODUCTS.slice(0, 6);
  featuredContainer.innerHTML = featured.map(p => renderProductCard(p)).join("");

  // Attach Add to Cart listener
  featuredContainer.addEventListener("click", (e) => {
    const btn = e.target.closest(".btn-add-cart");
    if (btn) {
      const id = btn.getAttribute("data-id");
      addToCart(id, 1);
    }
  });
}

// ==========================================================================
// 7. Products Page Logic (Filtering, Search, Sorting)
// ==========================================================================
function initProductsPage() {
  const container = document.getElementById("products-catalog-grid");
  if (!container) return;

  const searchInput = document.getElementById("product-search-input");
  const sortSelect = document.getElementById("product-sort-select");
  const categoryFilters = document.querySelectorAll(".category-filter-item");
  const priceFilterInputs = document.querySelectorAll("input[name='priceFilter']");
  const resultsCountEl = document.getElementById("results-count-text");
  const resetFiltersBtn = document.getElementById("reset-filters-btn");

  // Read URL Params (e.g. ?category=smartphones or ?search=laptop)
  const urlParams = new URLSearchParams(window.location.search);
  let activeCategory = urlParams.get("category") || "all";
  let searchQuery = urlParams.get("search") || "";
  let activePriceRange = "all";
  let activeSort = "featured";

  if (searchInput && searchQuery) {
    searchInput.value = searchQuery;
  }

  // Update active state in category list
  categoryFilters.forEach(item => {
    const cat = item.getAttribute("data-category");
    if (cat === activeCategory) {
      item.classList.add("active");
    } else {
      item.classList.remove("active");
    }
  });

  function applyFiltersAndRender() {
    let filtered = [...PRODUCTS];

    // Category Filter
    if (activeCategory !== "all") {
      filtered = filtered.filter(p => p.category.toLowerCase() === activeCategory.toLowerCase());
    }

    // Search Query Filter
    if (searchQuery.trim() !== "") {
      const q = searchQuery.toLowerCase().trim();
      filtered = filtered.filter(p => 
        p.name.toLowerCase().includes(q) || 
        p.description.toLowerCase().includes(q) ||
        p.categoryLabel.toLowerCase().includes(q)
      );
    }

    // Price Filter
    if (activePriceRange !== "all") {
      if (activePriceRange === "under-200") {
        filtered = filtered.filter(p => p.price < 200);
      } else if (activePriceRange === "200-500") {
        filtered = filtered.filter(p => p.price >= 200 && p.price <= 500);
      } else if (activePriceRange === "500-1000") {
        filtered = filtered.filter(p => p.price > 500 && p.price <= 1000);
      } else if (activePriceRange === "over-1000") {
        filtered = filtered.filter(p => p.price > 1000);
      }
    }

    // Sorting
    if (activeSort === "price-low") {
      filtered.sort((a, b) => a.price - b.price);
    } else if (activeSort === "price-high") {
      filtered.sort((a, b) => b.price - a.price);
    } else if (activeSort === "name-az") {
      filtered.sort((a, b) => a.name.localeCompare(b.name));
    } else if (activeSort === "rating") {
      filtered.sort((a, b) => b.rating - a.rating);
    }

    // Update result count
    if (resultsCountEl) {
      resultsCountEl.textContent = `Showing ${filtered.length} of ${PRODUCTS.length} products`;
    }

    // Render Grid
    if (filtered.length === 0) {
      container.innerHTML = `
        <div class="col-12 py-5 text-center">
          <div class="empty-cart-icon mx-auto mb-3">
            <i class="bi bi-search"></i>
          </div>
          <h4 class="fw-bold mb-2">No Matching Products Found</h4>
          <p class="text-muted mb-4">Try adjusting your search terms or clearing your selected filters.</p>
          <button id="clear-filters-action" class="btn btn-primary">
            <i class="bi bi-arrow-clockwise"></i> Reset All Filters
          </button>
        </div>
      `;
      const clearBtn = document.getElementById("clear-filters-action");
      if (clearBtn) {
        clearBtn.addEventListener("click", resetAll);
      }
    } else {
      container.innerHTML = filtered.map(p => renderProductCard(p)).join("");
    }
  }

  function resetAll() {
    activeCategory = "all";
    searchQuery = "";
    activePriceRange = "all";
    activeSort = "featured";

    if (searchInput) searchInput.value = "";
    if (sortSelect) sortSelect.value = "featured";

    categoryFilters.forEach(item => {
      if (item.getAttribute("data-category") === "all") {
        item.classList.add("active");
      } else {
        item.classList.remove("active");
      }
    });

    const allPriceRadio = document.querySelector("input[name='priceFilter'][value='all']");
    if (allPriceRadio) allPriceRadio.checked = true;

    // Clear URL parameters
    window.history.replaceState({}, document.title, window.location.pathname);
    applyFiltersAndRender();
  }

  // Event Listeners
  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      searchQuery = e.target.value;
      applyFiltersAndRender();
    });
  }

  if (sortSelect) {
    sortSelect.addEventListener("change", (e) => {
      activeSort = e.target.value;
      applyFiltersAndRender();
    });
  }

  categoryFilters.forEach(item => {
    item.addEventListener("click", () => {
      categoryFilters.forEach(i => i.classList.remove("active"));
      item.classList.add("active");
      activeCategory = item.getAttribute("data-category");
      applyFiltersAndRender();
    });
  });

  priceFilterInputs.forEach(radio => {
    radio.addEventListener("change", (e) => {
      if (e.target.checked) {
        activePriceRange = e.target.value;
        applyFiltersAndRender();
      }
    });
  });

  if (resetFiltersBtn) {
    resetFiltersBtn.addEventListener("click", resetAll);
  }

  // Container delegation for Add to Cart
  container.addEventListener("click", (e) => {
    const btn = e.target.closest(".btn-add-cart");
    if (btn) {
      const id = btn.getAttribute("data-id");
      addToCart(id, 1);
    }
  });

  // Initial Run
  applyFiltersAndRender();
}

// ==========================================================================
// 8. Product Details Page Logic
// ==========================================================================
function initProductDetailsPage() {
  const detailWrapper = document.getElementById("product-detail-view");
  if (!detailWrapper) return;

  const urlParams = new URLSearchParams(window.location.search);
  const productId = urlParams.get("id") || "tn-laptop-01"; // Default to flagship laptop

  const product = PRODUCTS.find(p => p.id === productId) || PRODUCTS[1];

  // Set document title
  document.title = `${product.name} — TechNova Electronics`;

  // Update Breadcrumb
  const breadcrumbCategory = document.getElementById("breadcrumb-category");
  const breadcrumbProduct = document.getElementById("breadcrumb-product");
  if (breadcrumbCategory) {
    breadcrumbCategory.textContent = product.categoryLabel;
    breadcrumbCategory.setAttribute("href", `products.html?category=${product.category}`);
  }
  if (breadcrumbProduct) {
    breadcrumbProduct.textContent = product.name;
  }

  // Populate Details
  const titleEl = document.getElementById("detail-product-title");
  const priceEl = document.getElementById("detail-product-price");
  const originalPriceEl = document.getElementById("detail-original-price");
  const descEl = document.getElementById("detail-product-desc");
  const ratingEl = document.getElementById("detail-rating-stars");
  const reviewCountEl = document.getElementById("detail-review-count");
  const mainImgEl = document.getElementById("detail-main-img");
  const thumbsContainer = document.getElementById("detail-thumbnails");
  const colorsContainer = document.getElementById("detail-colors");
  const specsTableEl = document.getElementById("detail-specs-table");

  if (titleEl) titleEl.textContent = product.name;
  if (priceEl) priceEl.textContent = `$${product.price.toLocaleString()}`;
  if (originalPriceEl) {
    if (product.originalPrice) {
      originalPriceEl.textContent = `$${product.originalPrice.toLocaleString()}`;
      originalPriceEl.style.display = "inline";
    } else {
      originalPriceEl.style.display = "none";
    }
  }
  if (descEl) descEl.textContent = product.description;
  if (reviewCountEl) reviewCountEl.textContent = `(${product.reviewsCount} customer reviews)`;

  // Rating Stars
  if (ratingEl) {
    ratingEl.innerHTML = Array(5).fill(0).map((_, i) => {
      if (i < Math.floor(product.rating)) {
        return '<i class="bi bi-star-fill text-warning"></i>';
      } else if (i < product.rating) {
        return '<i class="bi bi-star-half text-warning"></i>';
      } else {
        return '<i class="bi bi-star text-warning"></i>';
      }
    }).join("");
  }

  // Main Image & Thumbnails
  if (mainImgEl) {
    mainImgEl.src = product.image;
    mainImgEl.alt = product.name;
  }

  if (thumbsContainer && product.images) {
    thumbsContainer.innerHTML = product.images.map((imgSrc, idx) => `
      <div class="gallery-thumb ${idx === 0 ? 'active' : ''}" data-src="${imgSrc}">
        <img src="${imgSrc}" alt="${product.name} angle ${idx + 1}">
      </div>
    `).join("");

    const thumbs = thumbsContainer.querySelectorAll(".gallery-thumb");
    thumbs.forEach(thumb => {
      thumb.addEventListener("click", () => {
        thumbs.forEach(t => t.classList.remove("active"));
        thumb.classList.add("active");
        if (mainImgEl) mainImgEl.src = thumb.getAttribute("data-src");
      });
    });
  }

  // Color Options
  let selectedColor = product.colors && product.colors[0] ? product.colors[0].name : "Standard";
  if (colorsContainer && product.colors) {
    colorsContainer.innerHTML = product.colors.map((c, idx) => `
      <div class="color-option-btn ${idx === 0 ? 'active' : ''}" 
           style="background-color: ${c.hex};" 
           data-name="${c.name}" 
           title="${c.name}"></div>
    `).join("");

    const colorButtons = colorsContainer.querySelectorAll(".color-option-btn");
    const colorLabel = document.getElementById("selected-color-label");
    if (colorLabel) colorLabel.textContent = selectedColor;

    colorButtons.forEach(btn => {
      btn.addEventListener("click", () => {
        colorButtons.forEach(b => b.classList.remove("active"));
        btn.classList.add("active");
        selectedColor = btn.getAttribute("data-name");
        if (colorLabel) colorLabel.textContent = selectedColor;
      });
    });
  }

  // Quantity Stepper
  let quantity = 1;
  const qtyInput = document.getElementById("detail-quantity-input");
  const qtyMinus = document.getElementById("detail-qty-minus");
  const qtyPlus = document.getElementById("detail-qty-plus");

  if (qtyMinus && qtyPlus && qtyInput) {
    qtyMinus.addEventListener("click", () => {
      if (quantity > 1) {
        quantity--;
        qtyInput.value = quantity;
      }
    });

    qtyPlus.addEventListener("click", () => {
      if (quantity < 10) {
        quantity++;
        qtyInput.value = quantity;
      }
    });
  }

  // Add to Cart Button
  const addToCartBtn = document.getElementById("detail-add-to-cart-btn");
  if (addToCartBtn) {
    addToCartBtn.addEventListener("click", () => {
      addToCart(product.id, quantity, selectedColor);
    });
  }

  // Buy Now Button
  const buyNowBtn = document.getElementById("detail-buy-now-btn");
  if (buyNowBtn) {
    buyNowBtn.addEventListener("click", () => {
      addToCart(product.id, quantity, selectedColor);
      window.location.href = "cart.html";
    });
  }

  // Technical Specs Table
  if (specsTableEl && product.specs) {
    specsTableEl.innerHTML = Object.entries(product.specs).map(([key, val]) => `
      <tr>
        <th scope="row">${key}</th>
        <td>${val}</td>
      </tr>
    `).join("");
  }

  // Related Products Grid (Same category or other high ratings)
  const relatedContainer = document.getElementById("related-products-grid");
  if (relatedContainer) {
    const related = PRODUCTS.filter(p => p.id !== product.id && p.category === product.category).slice(0, 4);
    // If not enough in category, fill with popular items
    if (related.length < 4) {
      const extra = PRODUCTS.filter(p => p.id !== product.id && !related.includes(p)).slice(0, 4 - related.length);
      related.push(...extra);
    }
    relatedContainer.innerHTML = related.map(p => renderProductCard(p)).join("");

    relatedContainer.addEventListener("click", (e) => {
      const btn = e.target.closest(".btn-add-cart");
      if (btn) {
        const id = btn.getAttribute("data-id");
        addToCart(id, 1);
      }
    });
  }
}

// ==========================================================================
// 9. Shopping Cart Page Logic
// ==========================================================================
let appliedPromoCode = null;

function initCartPage() {
  const cartTableBody = document.getElementById("cart-table-items");
  const emptyCartState = document.getElementById("cart-empty-view");
  const cartFilledView = document.getElementById("cart-filled-view");

  if (!cartTableBody || !emptyCartState || !cartFilledView) return;

  // Demo auto-seed if requested via URL param (e.g. cart.html?demo=true) and cart is empty
  const urlParams = new URLSearchParams(window.location.search);
  if (urlParams.get("demo") === "true" && getCart().length === 0) {
    addToCart("tn-laptop-01", 1, "Space Gray");
    addToCart("tn-audio-01", 1, "Matte Black");
  }

  function renderCart() {
    const cart = getCart();

    if (cart.length === 0) {
      emptyCartState.style.display = "block";
      cartFilledView.style.display = "none";
      return;
    }

    emptyCartState.style.display = "none";
    cartFilledView.style.display = "block";

    cartTableBody.innerHTML = cart.map(item => `
      <tr>
        <td>
          <div class="d-flex align-items-center gap-3">
            <img src="${item.image}" alt="${item.name}" class="cart-item-img">
            <div>
              <h5 class="mb-1 fw-bold fs-6">
                <a href="product-details.html?id=${item.id}" class="text-dark">${item.name}</a>
              </h5>
              <span class="badge bg-light text-muted border">${item.color}</span>
            </div>
          </div>
        </td>
        <td>
          <span class="fw-bold text-dark">$${item.price.toLocaleString()}</span>
        </td>
        <td>
          <div class="quantity-stepper">
            <button class="cart-qty-btn" data-id="${item.id}" data-color="${item.color}" data-delta="-1">-</button>
            <input type="text" value="${item.quantity}" readonly>
            <button class="cart-qty-btn" data-id="${item.id}" data-color="${item.color}" data-delta="1">+</button>
          </div>
        </td>
        <td>
          <span class="fw-bold text-dark">$${(item.price * item.quantity).toLocaleString()}</span>
        </td>
        <td class="text-end">
          <button class="btn btn-sm btn-outline-danger btn-remove-item" data-id="${item.id}" data-color="${item.color}" title="Remove Item">
            <i class="bi bi-trash3"></i>
          </button>
        </td>
      </tr>
    `).join("");

    calculateSummary();
  }

  function calculateSummary() {
    const subtotal = getCartTotal();
    const shipping = subtotal > 100 || subtotal === 0 ? 0 : 15;
    const tax = Math.round(subtotal * 0.08); // 8% sales tax

    let discount = 0;
    if (appliedPromoCode === "TECHNOVA10") {
      discount = Math.round(subtotal * 0.10);
    } else if (appliedPromoCode === "SPRING25") {
      discount = Math.round(subtotal * 0.25);
    }

    const grandTotal = Math.max(0, subtotal - discount + shipping + tax);

    const subtotalEl = document.getElementById("summary-subtotal");
    const shippingEl = document.getElementById("summary-shipping");
    const taxEl = document.getElementById("summary-tax");
    const discountRow = document.getElementById("summary-discount-row");
    const discountEl = document.getElementById("summary-discount");
    const totalEl = document.getElementById("summary-total");

    if (subtotalEl) subtotalEl.textContent = `$${subtotal.toLocaleString()}`;
    if (shippingEl) shippingEl.textContent = shipping === 0 ? "FREE" : `$${shipping.toFixed(2)}`;
    if (taxEl) taxEl.textContent = `$${tax.toLocaleString()}`;

    if (discountRow && discountEl) {
      if (discount > 0) {
        discountRow.style.display = "flex";
        discountEl.textContent = `-$${discount.toLocaleString()}`;
      } else {
        discountRow.style.display = "none";
      }
    }

    if (totalEl) totalEl.textContent = `$${grandTotal.toLocaleString()}`;
  }

  // Stepper & Remove Click Listeners
  cartTableBody.addEventListener("click", (e) => {
    const stepperBtn = e.target.closest(".cart-qty-btn");
    if (stepperBtn) {
      const id = stepperBtn.getAttribute("data-id");
      const color = stepperBtn.getAttribute("data-color");
      const delta = parseInt(stepperBtn.getAttribute("data-delta"), 10);
      updateCartQuantity(id, color, delta);
      renderCart();
      return;
    }

    const removeBtn = e.target.closest(".btn-remove-item");
    if (removeBtn) {
      const id = removeBtn.getAttribute("data-id");
      const color = removeBtn.getAttribute("data-color");
      removeFromCart(id, color);
      renderCart();
      return;
    }
  });

  // Promo Code Form
  const promoForm = document.getElementById("promo-code-form");
  const promoInput = document.getElementById("promo-code-input");
  const promoFeedback = document.getElementById("promo-code-feedback");

  if (promoForm && promoInput) {
    promoForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const code = promoInput.value.trim().toUpperCase();

      if (code === "TECHNOVA10") {
        appliedPromoCode = "TECHNOVA10";
        promoFeedback.innerHTML = `<span class="text-success"><i class="bi bi-check-circle"></i> Coupon "TECHNOVA10" applied! 10% discount subtracted.</span>`;
        calculateSummary();
        showToast("Coupon Applied", "10% TechNova welcome discount applied!", "success");
      } else if (code === "SPRING25") {
        appliedPromoCode = "SPRING25";
        promoFeedback.innerHTML = `<span class="text-success"><i class="bi bi-check-circle"></i> Coupon "SPRING25" applied! 25% discount subtracted.</span>`;
        calculateSummary();
        showToast("Coupon Applied", "25% VIP promotional discount applied!", "success");
      } else {
        appliedPromoCode = null;
        promoFeedback.innerHTML = `<span class="text-danger"><i class="bi bi-x-circle"></i> Invalid coupon code. Try "TECHNOVA10".</span>`;
        calculateSummary();
      }
    });
  }

  // Checkout Modal Submission
  const checkoutForm = document.getElementById("checkout-demo-form");
  if (checkoutForm) {
    checkoutForm.addEventListener("submit", (e) => {
      e.preventDefault();
      if (!checkoutForm.checkValidity()) {
        checkoutForm.classList.add("was-validated");
        return;
      }

      // Hide checkout modal
      const modalEl = document.getElementById("checkoutModal");
      const modalInstance = bootstrap.Modal.getInstance(modalEl);
      if (modalInstance) modalInstance.hide();

      // Show success modal or toast
      const orderNumber = "TN-" + Math.floor(100000 + Math.random() * 900000);
      clearCart();
      renderCart();

      const successModalEl = document.getElementById("orderSuccessModal");
      if (successModalEl) {
        document.getElementById("order-number-display").textContent = orderNumber;
        const successModal = new bootstrap.Modal(successModalEl);
        successModal.show();
      } else {
        showToast("Order Confirmed!", `Thank you! Order #${orderNumber} placed successfully.`, "success");
      }
    });
  }

  // Clear Cart Button
  const clearCartBtn = document.getElementById("clear-cart-all-btn");
  if (clearCartBtn) {
    clearCartBtn.addEventListener("click", () => {
      if (confirm("Are you sure you want to empty your shopping cart?")) {
        clearCart();
        renderCart();
        showToast("Cart Cleared", "All items have been removed from your cart.", "info");
      }
    });
  }

  // Initial Cart Render
  renderCart();
}

// ==========================================================================
// 10. Contact Form & Newsletter Validation
// ==========================================================================
function initContactPage() {
  const form = document.getElementById("technova-contact-form");
  const alertContainer = document.getElementById("contact-form-alert");

  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    if (!form.checkValidity()) {
      e.stopPropagation();
      form.classList.add("was-validated");
      return;
    }

    const name = document.getElementById("contactName").value;

    if (alertContainer) {
      alertContainer.innerHTML = `
        <div class="alert alert-success d-flex align-items-center gap-2 mb-4" role="alert">
          <i class="bi bi-check-circle-fill fs-5"></i>
          <div>
            <strong>Thank you, ${name}!</strong> Your message has been sent successfully. A TechNova specialist will contact you within 24 hours.
          </div>
        </div>
      `;
      alertContainer.scrollIntoView({ behavior: 'smooth' });
    }

    showToast("Message Sent", "We received your message and will respond shortly.", "success");
    form.reset();
    form.classList.remove("was-validated");
  });
}

function initNewsletters() {
  const forms = document.querySelectorAll(".newsletter-form");
  forms.forEach(form => {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const emailInput = form.querySelector("input[type='email']");
      if (emailInput && emailInput.value.trim() && emailInput.checkValidity()) {
        showToast("Subscribed!", "You're now on the TechNova insider VIP newsletter.", "success");
        emailInput.value = "";
      } else {
        showToast("Invalid Email", "Please enter a valid email address.", "error");
      }
    });
  });
}

// ==========================================================================
// 11. Global Initialization
// ==========================================================================
document.addEventListener("DOMContentLoaded", () => {
  initNavbar();
  initHomePage();
  initProductsPage();
  initProductDetailsPage();
  initCartPage();
  initContactPage();
  initNewsletters();
});

