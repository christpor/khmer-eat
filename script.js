(function () {
  "use strict";

  var root = document.documentElement;
  var LS_THEME = "khmer-eats-theme";
  var LS_LANG = "khmer-eats-lang";

  /* ============================================================
     THEME (light/dark) — no-flash handled by inline script in head
     ============================================================ */
  var themeBtn = document.getElementById("themeBtn");

  function setTheme(t) {
    root.setAttribute("data-theme", t);
    try { localStorage.setItem(LS_THEME, t); } catch (e) {}
    themeBtn.setAttribute("aria-label", t === "light" ? "Switch to dark mode" : "Switch to light mode");
  }

  themeBtn.addEventListener("click", function () {
    setTheme(root.getAttribute("data-theme") === "light" ? "dark" : "light");
  });
  setTheme(root.getAttribute("data-theme") || "light");

  /* ============================================================
     LANGUAGE (EN / KH)
     ============================================================ */
  var langBtn = document.getElementById("langBtn");
  var langLabel = document.getElementById("langLabel");

  function applyLang(l) {
    var nodes = document.querySelectorAll("[data-en][data-kh]");
    for (var i = 0; i < nodes.length; i++) {
      nodes[i].textContent = nodes[i].getAttribute("data-" + l);
    }
    root.setAttribute("data-lang", l);
    root.lang = l;
    langLabel.textContent = l === "en" ? "ខ្មែរ" : "EN";
    langBtn.setAttribute("aria-label", l === "en" ? "Switch to Khmer" : "Switch to English");
    try { localStorage.setItem(LS_LANG, l); } catch (e) {}
  }

  langBtn.addEventListener("click", function () {
    applyLang(root.getAttribute("data-lang") === "en" ? "kh" : "en");
  });

  var currentLang = root.getAttribute("data-lang") || "en";

  /* ============================================================
     MENU DATA (bilingual)
     ============================================================ */
  var DISHES = [
    {
      name: "Fish Amok", nameKh: "អាម៉ុកត្រី",
      area: "Sokun's Stall · Riverside", areaKh: "តូបសុខន · មាត់ទន្លេ",
      desc: "Steamed coconut fish curry, wrapped in banana leaf. The national dish, done right.",
      descKh: "ត្រីចំហុយក្នុងទឹកដូង រុំស្លឹកចេក។ ម្ហូបជាតិខ្មែរ ធ្វើតាមរូបមន្តពិតប្រាកដ។",
      price: "$4.50", eta: "26",
      img: "https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?auto=format&fit=crop&w=800&q=70",
      alt: "Steamed coconut fish curry bowl"
    },
    {
      name: "Beef Lok Lak", nameKh: "ឡុកឡាក់",
      area: "Dara's Grill · BKK1", areaKh: "អាំងដារ៉ា · បឹងកេងកង ១",
      desc: "Wok-tossed beef with lime-pepper dip and a fresh salad. Sizzling at your door.",
      descKh: "សាច់គោឆាជាមួយទឹកម្រេចក្រូចឆ្មារ និងសាឡាត់ស្រស់ៗ។",
      price: "$5.00", eta: "24",
      img: "https://images.unsplash.com/photo-1603360946369-dc9bb6258143?auto=format&fit=crop&w=800&q=70",
      alt: "Sliced grilled beef with pepper sauce"
    },
    {
      name: "Nom Banh Chok", nameKh: "នំបញ្ចុក",
      area: "Bopha's Morning · K. Krom", areaKh: "ព្រឹកភព្វា · កម្ពុជាក្រោម",
      desc: "Cold rice noodles in a rich fermented-fish green curry, fresh herbs on top.",
      descKh: "នំបញ្ចុកជាមួយទឹកប្រហុកបៃតង និងបន្លែស្រស់ៗនៅពីលើ។",
      price: "$2.50", eta: "20",
      img: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&w=800&q=70",
      alt: "Rice noodle bowl with green curry"
    },
    {
      name: "Kuy Teav", nameKh: "គុយទាវ",
      area: "Vibol's Cart · Olympic", areaKh: "រទេះវិបុល · អូឡាំពិក",
      desc: "Pork bone broth, rice noodles, tender pork, and a squeeze of lime. Hangover cure.",
      descKh: "ទំពាំងឆ្អឹងជ្រូក មីស្រស់ សាច់ជ្រូកទន់ៗ និងក្រូចឆ្មារ។",
      price: "$3.00", eta: "22",
      img: "https://images.unsplash.com/photo-1582878826629-29b7ad1cdc43?auto=format&fit=crop&w=800&q=70",
      alt: "Pork noodle soup bowl"
    },
    {
      name: "Num Pang", nameKh: "នំប៉័ង",
      area: "Malis · Psar Thmei", areaKh: "ម៉ាលីស · ផ្សារថ្មី",
      desc: "Grilled baguette, pâté, pickled papaya, and house chilli. Phnom Penh's street sandwich.",
      descKh: "នំប៉័ងអាំងជាមួយប៉ាទេ បន្លែជ្រក់ និងម្ទេសប្រហុក។ សាំងវិចតាមផ្លូវភ្នំពេញ។",
      price: "$2.00", eta: "18",
      img: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=800&q=70",
      alt: "Baguette sandwich with fillings"
    },
    {
      name: "Grilled Platter", nameKh: "សាច់អាំងចម្រុះ",
      area: "Rith's Fire · Toul Kork", areaKh: "ភ្លើងរិទ្ធ · ទួលគោក",
      desc: "Skewers of lemongrass beef and pork belly, charred over charcoal. One for the table.",
      descKh: "សាច់គោក្រូចឆ្មារ និងសាច់ជ្រូកដុតលើធ្យូង។ មួយសម្រាប់ទាំងតុ។",
      price: "$7.00", eta: "28",
      img: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=70",
      alt: "Charcoal grilled meat platter"
    }
  ];

  var ICON_PLUS = '<svg class="icon"><use href="#i-plus" /></svg>';
  var ICON_BIKE = '<svg class="icon"><use href="#i-bike" /></svg>';

  /* ============================================================
     RENDER MENU
     ============================================================ */
  var grid = document.getElementById("menuGrid");

  function renderMenu() {
    grid.innerHTML = DISHES.map(function (dish, i) {
      return (
        '<article class="dish" data-animate data-stagger="' + (i % 3) + '">' +
          '<div class="dish-img">' +
            '<img src="' + dish.img + '" alt="' + dish.alt + '" loading="lazy" />' +
            '<span class="dish-price mono">' + dish.price + '</span>' +
          '</div>' +
          '<div class="dish-body">' +
            '<div class="dish-top">' +
              '<h3 class="dish-name" data-en="' + dish.name + '" data-kh="' + dish.nameKh + '">' + dish.name + '</h3>' +
              '<span class="dish-area" data-en="' + dish.area + '" data-kh="' + dish.areaKh + '">' + dish.area + '</span>' +
            '</div>' +
            '<p class="dish-desc" data-en="' + dish.desc + '" data-kh="' + dish.descKh + '">' + dish.desc + '</p>' +
            '<div class="dish-foot">' +
              '<span class="dish-eta">' + ICON_BIKE + '<strong>' + dish.eta + '</strong> <span data-en="min" data-kh="នាទី">min</span></span>' +
              '<button class="add-btn btn-tactile" aria-label="Add ' + dish.name + '">' + ICON_PLUS + '</button>' +
            '</div>' +
          '</div>' +
        '</article>'
      );
    }).join("");
  }

  /* ============================================================
     CART
     ============================================================ */
  var cartCount = 0;
  var cartEl = document.getElementById("cartCount");

  function bumpCart() {
    cartCount += 1;
    cartEl.textContent = cartCount;
    cartEl.classList.remove("pop");
    void cartEl.offsetWidth; /* restart animation */
    cartEl.classList.add("pop");
  }

  grid.addEventListener("click", function (e) {
    var btn = e.target.closest(".add-btn");
    if (!btn) return;
    bumpCart();
    var card = btn.closest(".dish");
    card.animate(
      [
        { transform: "translateY(0) scale(1)" },
        { transform: "translateY(-3px) scale(0.985)" },
        { transform: "translateY(0) scale(1)" }
      ],
      { duration: 300, easing: "cubic-bezier(0.19, 1, 0.22, 1)" }
    );
  });

  /* ============================================================
     MOBILE NAV
     ============================================================ */
  var toggle = document.getElementById("navToggle");
  var links = document.querySelector(".nav-links");

  toggle.addEventListener("click", function () {
    toggle.classList.toggle("open");
    links.classList.toggle("open");
  });

  /* ============================================================
     NAV SCROLL STATE
     ============================================================ */
  var nav = document.getElementById("nav");
  window.addEventListener("scroll", function () {
    nav.classList.toggle("scrolled", window.scrollY > 8);
  }, { passive: true });

  /* ============================================================
     LIVE TRACKING — rider dot + countdowns
     ============================================================ */
  var routePath = document.querySelector(".track-progress");
  var rider = document.getElementById("riderDot");
  var trackEta = document.getElementById("trackEta");
  var heroEta = document.getElementById("heroEta");

  var trackSeconds = 18 * 60 + 42;
  var heroSeconds = 24 * 60;

  function fmt(sec) {
    var m = Math.floor(sec / 60);
    var s = sec % 60;
    return String(m).padStart(2, "0") + ":" + String(s).padStart(2, "0");
  }

  var riderAnim = null;
  var countdown = null;

  if (routePath && rider) {
    var pathLen = routePath.getTotalLength();
    var progress = 0.34; /* rider starts a third of the way in */

    function drawRider() {
      var pt = routePath.getPointAtLength(pathLen * progress);
      var ctm = rider.ownerSVGElement.createSVGPoint();
      ctm.x = pt.x;
      ctm.y = pt.y;
      var screen = ctm.matrixTransform(rider.ownerSVGElement.getScreenCTM().inverse());
      rider.setAttribute("transform", "translate(" + screen.x + "," + screen.y + ")");
      routePath.setAttribute("stroke-dasharray", (pathLen * progress) + " " + pathLen);
    }

    var trackPanel = document.querySelector(".track-panel");
    var trackVisible = false;

    function startTrack() {
      if (trackVisible || countdown) return;
      trackVisible = true;
      riderAnim = setInterval(function () {
        progress = Math.min(progress + 0.0022, 1);
        drawRider();
        if (progress >= 1) clearInterval(riderAnim);
      }, 100);
      countdown = setInterval(function () {
        trackSeconds = Math.max(0, trackSeconds - 1);
        trackEta.textContent = fmt(trackSeconds);
        heroSeconds = Math.max(0, heroSeconds - 1);
        heroEta.textContent = fmt(heroSeconds);
      }, 1000);
    }

    function stopTrack() {
      if (!trackVisible) return;
      trackVisible = false;
      clearInterval(riderAnim);
      clearInterval(countdown);
      riderAnim = null;
      countdown = null;
    }

    if ("IntersectionObserver" in window) {
      var io = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) startTrack();
          else stopTrack();
        });
      }, { threshold: 0.25 });
      io.observe(trackPanel);
    } else {
      startTrack();
    }
  }

  /* ============================================================
     BOOT
     ============================================================ */
  renderMenu();
  applyLang(currentLang);
  document.getElementById("year").textContent = new Date().getFullYear();
})();
