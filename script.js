/* =========================================================
   BREW HAVEN — SCRIPT
   Modular, commented, vanilla JS only.
   ========================================================= */

document.addEventListener('DOMContentLoaded', () => {

  /* =========================================================
     1. MENU DATA
     Single source of truth for the menu grid, search & filters.
     ========================================================= */
  const menuData = [
    // ---- Coffee ----
    { id: 1, name: 'Signature Flat White', category: 'coffee', price: 220,
      desc: 'Double ristretto shots with silky micro-foam steamed milk.',
      img: 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?q=80&w=600&auto=format&fit=crop',
      tags: ['Best Seller'], popular: true },
    { id: 2, name: 'Pour-Over Ethiopia', category: 'coffee', price: 260,
      desc: 'Single-origin, floral and bright, brewed to order.',
      img: 'https://images.unsplash.com/photo-1544787219-7f47ccb76574?q=80&w=600&auto=format&fit=crop',
      tags: ['Single Origin'] },
    { id: 3, name: 'Classic Cappuccino', category: 'coffee', price: 200,
      desc: 'Equal parts espresso, steamed milk and airy foam.',
      img: 'https://images.unsplash.com/photo-1534778101976-62847782c213?q=80&w=600&auto=format&fit=crop',
      tags: [] },
    { id: 4, name: 'Caramel Macchiato', category: 'coffee', price: 250,
      desc: 'Vanilla-kissed espresso layered with caramel drizzle.',
      img: 'https://images.unsplash.com/photo-1517701604599-bb29b565090c?q=80&w=600&auto=format&fit=crop',
      tags: ['Sweet'] },

    // ---- Fast Food ----
    { id: 5, name: 'Grilled Chicken Panini', category: 'fastfood', price: 340,
      desc: 'Herb-marinated chicken, mozzarella and basil pesto.',
      img: 'https://images.unsplash.com/photo-1528736235302-52922df5c122?q=80&w=600&auto=format&fit=crop',
      tags: [] },
    { id: 6, name: 'Loaded Cheese Fries', category: 'fastfood', price: 260,
      desc: 'Crispy fries, molten cheddar, jalapeños and chipotle mayo.',
      img: 'https://images.unsplash.com/photo-1585109649139-366815a0d713?q=80&w=600&auto=format&fit=crop',
      tags: ['Popular'], popular: true },
    { id: 7, name: 'Classic Beef Burger', category: 'fastfood', price: 380,
      desc: 'Smashed patty, aged cheddar, house sauce, brioche bun.',
      img: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=600&auto=format&fit=crop',
      tags: [] },
    { id: 8, name: 'Crispy Veg Wrap', category: 'fastfood', price: 240,
      desc: 'Tempura vegetables, slaw and sriracha mayo in a soft tortilla.',
      img: 'https://images.unsplash.com/photo-1626700051175-6818013e1d4f?q=80&w=600&auto=format&fit=crop',
      tags: ['Veg'] },

    // ---- Desserts ----
    { id: 9, name: 'Classic Tiramisu', category: 'desserts', price: 280,
      desc: 'Espresso-soaked ladyfingers, mascarpone, cocoa dust.',
      img: 'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?q=80&w=600&auto=format&fit=crop',
      tags: ['Best Seller'], popular: true },
    { id: 10, name: 'Belgian Waffle Stack', category: 'desserts', price: 300,
      desc: 'Warm waffles, whipped cream, seasonal berries, maple.',
      img: 'https://images.unsplash.com/photo-1562376552-0d160a2f238d?q=80&w=600&auto=format&fit=crop',
      tags: [] },
    { id: 11, name: 'Molten Chocolate Cake', category: 'desserts', price: 260,
      desc: 'Warm dark chocolate cake with a liquid center, vanilla scoop.',
      img: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?q=80&w=600&auto=format&fit=crop',
      tags: [] },
    { id: 12, name: 'New York Cheesecake', category: 'desserts', price: 270,
      desc: 'Baked classic with a buttery biscuit base and berry compote.',
      img: 'https://images.unsplash.com/photo-1533134242443-d4fd215305ad?q=80&w=600&auto=format&fit=crop',
      tags: [] },

    // ---- Beverages ----
    { id: 13, name: 'Iced Cold Brew', category: 'beverages', price: 220,
      desc: 'Slow-steeped eighteen hours for a smooth, bold finish.',
      img: 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?q=80&w=600&auto=format&fit=crop',
      tags: ['Iced'] },
    { id: 14, name: 'Fresh Watermelon Cooler', category: 'beverages', price: 190,
      desc: 'Chilled watermelon, mint and lime, no added sugar.',
      img: 'https://images.unsplash.com/photo-1546173159-315724a31696?q=80&w=600&auto=format&fit=crop',
      tags: ['Fresh'] },
    { id: 15, name: 'Matcha Latte', category: 'beverages', price: 250,
      desc: 'Ceremonial-grade matcha whisked with steamed oat milk.',
      img: 'https://images.unsplash.com/photo-1515823064-d6e0c04616a7?q=80&w=600&auto=format&fit=crop',
      tags: ['Vegan'] },
    { id: 16, name: 'Belgian Hot Chocolate', category: 'beverages', price: 230,
      desc: 'Rich melted dark chocolate with a cloud of whipped cream.',
      img: 'https://images.unsplash.com/photo-1517578239113-b03992dcdd25?q=80&w=600&auto=format&fit=crop',
      tags: [] },

    // ---- Special Dishes ----
    { id: 17, name: "Chef's Truffle Risotto", category: 'special', price: 480,
      desc: 'Slow-cooked arborio rice, wild mushrooms, truffle oil.',
      img: 'https://images.unsplash.com/photo-1476124369491-e7addf5db371?q=80&w=600&auto=format&fit=crop',
      tags: ["Chef's Special"], popular: true },
    { id: 18, name: 'Grilled Salmon & Greens', category: 'special', price: 540,
      desc: 'Pan-seared salmon, charred asparagus, lemon-butter sauce.',
      img: 'https://images.unsplash.com/photo-1467003909585-2f8a72700288?q=80&w=600&auto=format&fit=crop',
      tags: ['Signature'] },
    { id: 19, name: 'Slow-Braised Short Rib', category: 'special', price: 590,
      desc: 'Red wine braised beef short rib with creamy mash.',
      img: 'https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=600&auto=format&fit=crop',
      tags: [] },
    { id: 20, name: 'Wild Mushroom Toast', category: 'special', price: 320,
      desc: 'Sourdough, whipped ricotta, roasted wild mushrooms, thyme.',
      img: 'https://images.unsplash.com/photo-1525351484163-7529414344d8?q=80&w=600&auto=format&fit=crop',
      tags: ['Veg'] },
  ];

  const categoryLabels = {
    coffee: 'Coffee', fastfood: 'Fast Food', desserts: 'Desserts',
    beverages: 'Beverages', special: 'Special Dishes'
  };

  /* =========================================================
     2. RENDER MENU GRID
     ========================================================= */
  const menuGrid = document.getElementById('menuGrid');
  const menuEmpty = document.getElementById('menuEmpty');

  function formatPrice(p){ return `₹${p}`; }

  function renderMenu(items){
    menuGrid.innerHTML = items.map(item => `
      <div class="menu-card" data-category="${item.category}" data-name="${item.name.toLowerCase()}">
        <div class="menu-card-img">
          <img src="${item.img}" alt="${item.name}" loading="lazy">
          ${item.popular ? '<span class="menu-card-tag popular">Popular</span>' : (item.tags[0] ? `<span class="menu-card-tag">${item.tags[0]}</span>` : '')}
        </div>
        <div class="menu-card-body">
          <div class="menu-card-top">
            <h3>${item.name}</h3>
            <span class="menu-card-price">${formatPrice(item.price)}</span>
          </div>
          <p>${item.desc}</p>
          <div class="menu-card-meta">
            <span>${categoryLabels[item.category]}</span>
            ${item.tags.slice(item.popular ? 0 : 1).map(t => `<span>${t}</span>`).join('')}
          </div>
        </div>
      </div>
    `).join('');
  }
  renderMenu(menuData);

  /* =========================================================
     3. MENU FILTER + SEARCH (combined logic)
     ========================================================= */
  const filterPills = document.querySelectorAll('.filter-pill');
  const searchInput = document.getElementById('menuSearch');
  const clearSearchBtn = document.getElementById('clearSearch');
  let activeFilter = 'all';

  function applyMenuFilters(){
    const query = searchInput.value.trim().toLowerCase();
    clearSearchBtn.hidden = query.length === 0;

    const cards = document.querySelectorAll('.menu-card');
    let visibleCount = 0;

    cards.forEach(card => {
      const matchesCategory = activeFilter === 'all' || card.dataset.category === activeFilter;
      const matchesSearch = query === '' || card.dataset.name.includes(query);
      const show = matchesCategory && matchesSearch;
      card.classList.toggle('is-hidden', !show);
      if (show) visibleCount++;
    });

    menuEmpty.hidden = visibleCount !== 0;
  }

  filterPills.forEach(pill => {
    pill.addEventListener('click', () => {
      filterPills.forEach(p => p.classList.remove('active'));
      pill.classList.add('active');
      activeFilter = pill.dataset.filter;
      applyMenuFilters();
    });
  });

  searchInput.addEventListener('input', applyMenuFilters);
  clearSearchBtn.addEventListener('click', () => {
    searchInput.value = '';
    applyMenuFilters();
    searchInput.focus();
  });

  // Footer quick-links jump to menu and pre-select a category
  document.querySelectorAll('[data-filter-link]').forEach(link => {
    link.addEventListener('click', () => {
      const target = link.dataset.filterLink;
      const pill = document.querySelector(`.filter-pill[data-filter="${target}"]`);
      if (pill) pill.click();
    });
  });

  /* =========================================================
     4. DARK MODE (persisted via localStorage)
     ========================================================= */
  const themeToggle = document.getElementById('themeToggle');
  const themeIcon = document.getElementById('themeIcon');
  const root = document.documentElement;

  function setTheme(theme){
    if (theme === 'dark'){
      root.setAttribute('data-theme', 'dark');
      themeIcon.classList.remove('fa-moon');
      themeIcon.classList.add('fa-sun');
    } else {
      root.removeAttribute('data-theme');
      themeIcon.classList.remove('fa-sun');
      themeIcon.classList.add('fa-moon');
    }
    localStorage.setItem('brewhaven-theme', theme);
  }

  // Load saved theme, or fall back to OS preference
  const savedTheme = localStorage.getItem('brewhaven-theme');
  if (savedTheme) {
    setTheme(savedTheme);
  } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
    setTheme('dark');
  }

  themeToggle.addEventListener('click', () => {
    const isDark = root.getAttribute('data-theme') === 'dark';
    setTheme(isDark ? 'light' : 'dark');
  });

  /* =========================================================
     5. LOADING SCREEN
     ========================================================= */
  const loadingScreen = document.getElementById('loading-screen');
  window.addEventListener('load', () => {
    setTimeout(() => {
      loadingScreen.classList.add('hidden');
      document.body.style.overflow = '';
    }, 500);
  });

  /* =========================================================
     6. STICKY NAVBAR + SCROLL EFFECTS (navbar bg, back-to-top)
     ========================================================= */
  const navbar = document.getElementById('navbar');
  const backToTop = document.getElementById('backToTop');

  function handleScrollEffects(){
    const scrolled = window.scrollY > 40;
    navbar.classList.toggle('scrolled', scrolled);
    backToTop.classList.toggle('visible', window.scrollY > 500);
  }
  document.addEventListener('scroll', handleScrollEffects, { passive: true });
  handleScrollEffects();

  backToTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  /* =========================================================
     7. MOBILE NAV (hamburger toggle + close on link click)
     ========================================================= */
  const hamburger = document.getElementById('hamburger');
  const navLinksEl = document.getElementById('navLinks');

  function closeMobileNav(){
    navLinksEl.classList.remove('open');
    hamburger.classList.remove('open');
    hamburger.setAttribute('aria-expanded', 'false');
  }

  hamburger.addEventListener('click', () => {
    const isOpen = navLinksEl.classList.toggle('open');
    hamburger.classList.toggle('open', isOpen);
    hamburger.setAttribute('aria-expanded', String(isOpen));
  });

  document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', closeMobileNav);
  });

  /* =========================================================
     8. ACTIVE NAV HIGHLIGHT (IntersectionObserver on sections)
     ========================================================= */
  const sections = document.querySelectorAll('main section[id], .hero[id]');
  const navLinkMap = {};
  document.querySelectorAll('.nav-link[data-nav]').forEach(link => {
    navLinkMap[link.getAttribute('href').slice(1)] = link;
  });

  const navObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting){
        const id = entry.target.id;
        Object.values(navLinkMap).forEach(l => l.classList.remove('active'));
        if (navLinkMap[id]) navLinkMap[id].classList.add('active');
      }
    });
  }, { rootMargin: '-45% 0px -50% 0px', threshold: 0 });

  sections.forEach(sec => navObserver.observe(sec));

  /* =========================================================
     9. SCROLL REVEAL ANIMATIONS
     ========================================================= */
  const revealEls = document.querySelectorAll('.reveal');
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting){
        const delay = entry.target.dataset.revealDelay || 0;
        setTimeout(() => entry.target.classList.add('in-view'), delay);
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });

  revealEls.forEach(el => revealObserver.observe(el));

  /* =========================================================
     10. TESTIMONIALS SLIDER
     ========================================================= */
  const testiTrack = document.getElementById('testiTrack');
  const testiCards = document.querySelectorAll('.testi-card');
  const testiDotsWrap = document.getElementById('testiDots');
  const testiPrev = document.getElementById('testiPrev');
  const testiNext = document.getElementById('testiNext');
  let testiIndex = 0;
  let testiTimer = null;

  // Build dots dynamically
  testiCards.forEach((_, i) => {
    const dot = document.createElement('button');
    dot.setAttribute('aria-label', `Go to testimonial ${i + 1}`);
    if (i === 0) dot.classList.add('active');
    dot.addEventListener('click', () => goToTesti(i));
    testiDotsWrap.appendChild(dot);
  });
  const testiDots = testiDotsWrap.querySelectorAll('button');

  function goToTesti(index){
    testiIndex = (index + testiCards.length) % testiCards.length;
    testiTrack.style.transform = `translateX(-${testiIndex * 100}%)`;
    testiDots.forEach((d, i) => d.classList.toggle('active', i === testiIndex));
  }

  function startTestiAutoplay(){
    testiTimer = setInterval(() => goToTesti(testiIndex + 1), 5500);
  }
  function resetTestiAutoplay(){
    clearInterval(testiTimer);
    startTestiAutoplay();
  }

  testiNext.addEventListener('click', () => { goToTesti(testiIndex + 1); resetTestiAutoplay(); });
  testiPrev.addEventListener('click', () => { goToTesti(testiIndex - 1); resetTestiAutoplay(); });
  startTestiAutoplay();

  /* =========================================================
     11. RESERVATION FORM VALIDATION
     ========================================================= */
  const form = document.getElementById('reserveForm');
  const formSuccess = document.getElementById('formSuccess');

  const validators = {
    fullName: v => v.trim().length >= 2 || 'Please enter your full name.',
    email: v => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.trim()) || 'Enter a valid email address.',
    phone: v => /^[\d\s+()-]{7,15}$/.test(v.trim()) || 'Enter a valid phone number.',
    guests: v => v !== '' || 'Please select the number of guests.',
    date: v => {
      if (!v) return 'Please choose a date.';
      const today = new Date(); today.setHours(0,0,0,0);
      const chosen = new Date(v);
      return chosen >= today || 'Date cannot be in the past.';
    },
    time: v => v !== '' || 'Please choose a time.'
  };

  function validateField(field){
    const input = form.elements[field];
    const errorEl = document.getElementById(`err-${field}`);
    const result = validators[field](input.value);
    const group = input.closest('.form-group');

    if (result === true){
      group.classList.remove('invalid');
      errorEl.textContent = '';
      return true;
    } else {
      group.classList.add('invalid');
      errorEl.textContent = result;
      return false;
    }
  }

  // Live validation on blur
  Object.keys(validators).forEach(field => {
    form.elements[field].addEventListener('blur', () => validateField(field));
  });

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    let isValid = true;
    Object.keys(validators).forEach(field => {
      if (!validateField(field)) isValid = false;
    });

    if (!isValid){
      const firstInvalid = form.querySelector('.form-group.invalid input, .form-group.invalid select');
      if (firstInvalid) firstInvalid.focus();
      formSuccess.hidden = true;
      return;
    }

    // Simulate successful submission (no backend wired up)
    formSuccess.hidden = false;
    form.reset();
    document.querySelectorAll('.form-group').forEach(g => g.classList.remove('invalid'));
    setTimeout(() => { formSuccess.hidden = true; }, 6000);
  });

  // Prevent choosing a past date in the date picker itself
  const dateInput = document.getElementById('date');
  const todayISO = new Date().toISOString().split('T')[0];
  dateInput.setAttribute('min', todayISO);

  /* =========================================================
     12. FOOTER YEAR
     ========================================================= */
  document.getElementById('year').textContent = new Date().getFullYear();

  // Apply initial menu filter state (in case of reload with query in future)
  applyMenuFilters();
});
