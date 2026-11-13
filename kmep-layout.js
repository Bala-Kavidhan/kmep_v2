/* ==========================================================
   KMEP shared layout: <kmep-header> and <kmep-footer>
   Edit the CONFIG below; every page updates.
   ========================================================== */
const KMEP = {
  logo: "IMAGES/logo.png",
  phone: { label: "+91 91766 70447", href: "tel:+919176670447" },
  email: "rajesh@kmep.co.in",
  whatsapp: "https://wa.me/919710439000",
  whatsappLabel: "+91 97104 39000",
  address:
    "15/123, Loganathan Street, Krishnapuram, Ambattur, Chennai - 600 063, Tamil Nadu, India",
  offices: "Chennai · Hosur · Tiruchirappalli · Bangalore",
  company: [
    ["About Us", "about.html"],
    ["Leadership", "leadership.html"],
    ["Our Team", "team.html"],
    ["Our Delivery Process", "our_delivery_process.html"],
    ["Careers", "careers.html"],
  ],
  services: [
    ["HVAC", "services.html#hvac"],
    ["Mechanical", "services.html#mechanical"],
    ["Electrical", "services.html#electrical"],
    ["Plumbing", "services.html#plumbing"],
  ],
};

const KMEP_FOLDERS = {
  hvac: "HVAC",
  mechanical: "Mechanical",
  electrical: "Electrical",
  plumbing: "Plumbing",
};

const kmepPage = () =>
  (location.pathname.split("/").pop() || "index.html").toLowerCase();

const kmepDir = () =>
  (location.pathname.split("/").slice(-2, -1)[0] || "").toLowerCase();

/* ---------------- HEADER ---------------- */
class KmepHeader extends HTMLElement {
  connectedCallback() {
    const page = kmepPage();
    const on = (file) => (page === file ? "is-on" : "");
    const companyOn = KMEP.company.some(([, f]) => f === page) ? "is-on" : "";
    const servicesOn =
      page === "services.html" || Object.hasOwn(KMEP_FOLDERS, kmepDir())
        ? "is-on"
        : "";
    const dd = KMEP.company.map(([t, f]) => `<a href="${f}">${t}</a>`).join("");
    const sd =
      `<a class="k-all" href="services.html">All Services</a>` +
      KMEP.services.map(([t, f]) => `<a href="${f}">${t}</a>`).join("");

    this.innerHTML = `
<style>
  kmep-header { display: block; position: sticky; top: 0; z-index: 1000; }
  kmep-header .k-header { position: relative; top: 0; }
  .k-dd { position: relative; display: inline-flex; align-items: center; }
  .k-dd > a i { font-size: 9px; margin-left: 6px; opacity: .6; }
  .k-dd-panel {
    position: absolute; top: 100%; left: 0; min-width: 220px; z-index: 50;
    background: #fff; border: 1px solid #e4e0d8; border-radius: 10px;
    box-shadow: 0 16px 40px rgba(42,16,56,.16); padding: 8px;
    display: flex; flex-direction: column;
    opacity: 0; visibility: hidden; transform: translateY(6px);
    transition: opacity .2s, transform .2s, visibility .2s;
  }
  .k-dd:hover .k-dd-panel, .k-dd:focus-within .k-dd-panel {
    opacity: 1; visibility: visible; transform: translateY(0);
  }
  .k-dd-panel a { border: 0; padding: 10px 14px; border-radius: 7px; font-size: 14px; font-weight: 600; color: #2a1038; white-space: nowrap; }
  .k-dd-panel a:hover { background: #f1e4f8; color: #7b2d9b; }
  .k-all { display: none; }
  @media (max-width: 900px) {
    .k-nav { max-height: calc(100vh - 80px); overflow-y: auto; }
    .k-dd { display: block; width: 100%; }
    .k-nav .k-dd > a { display: flex; align-items: center; justify-content: space-between; width: 100%; box-sizing: border-box; padding: 16px var(--k-pad); border-bottom: 1px solid var(--k-line); }
    .k-dd > a i { font-size: 12px; opacity: .7; transition: transform .25s; }
    .k-dd.open > a i { transform: rotate(180deg); }
    .k-dd-panel { position: static; display: none; min-width: 0; opacity: 1; visibility: visible; transform: none; box-shadow: none; border: 0; border-radius: 0; background: #f7f6fa; padding: 0; }
    .k-dd.open .k-dd-panel { display: flex; }
    .k-nav .k-dd-panel a { display: block; padding: 14px calc(var(--k-pad) + 16px); border: 0; border-bottom: 1px solid var(--k-line); border-radius: 0; font-size: 14.5px; white-space: normal; }
    .k-all { display: block; }
  }
</style>
<header class="k-header">
  <div class="k-in">
    <a class="k-logo" href="index.html" aria-label="Keerthan MEP Engineers home">
      <img src="${KMEP.logo}" alt="" />
      <span><b>KEERTHAN</b><small>MEP ENGINEERS</small></span>
    </a>
    <button class="k-burger" id="kBurger" type="button" aria-label="Open menu" aria-expanded="false">
      <i class="fas fa-bars"></i>
    </button>
    <nav class="k-nav" id="kNav" aria-label="Main">
      <a href="index.html" class="${on("index.html")}">Home</a>
      <div class="k-dd">
        <a href="about.html" class="${companyOn}" aria-haspopup="true">Company<i class="fas fa-chevron-down"></i></a>
        <div class="k-dd-panel">${dd}</div>
      </div>
      <div class="k-dd">
        <a href="services.html" class="${servicesOn}" aria-haspopup="true">Services<i class="fas fa-chevron-down"></i></a>
        <div class="k-dd-panel">${sd}</div>
      </div>
      <a href="index.html#work">Projects</a>
      <a href="contact-us.html" class="${on("contact-us.html")}">Contact Us</a>
    </nav>
    <a href="contact-us.html" class="k-btn is-brand">Get a quote</a>
  </div>
</header>`;

    const burger = this.querySelector("#kBurger");
    const nav = this.querySelector("#kNav");

    // expose live header height so sticky bars / scroll offsets never hardcode it
    const headerEl = this.querySelector(".k-header");
    const syncHeight = () =>
      document.documentElement.style.setProperty(
        "--k-header-h",
        `${headerEl.offsetHeight}px`,
      );
    syncHeight();
    if ("ResizeObserver" in window)
      new ResizeObserver(syncHeight).observe(headerEl);
    else window.addEventListener("resize", syncHeight);
    burger.addEventListener("click", () => {
      const open = nav.classList.toggle("open");
      burger.setAttribute("aria-expanded", String(open));
    });
    nav.addEventListener("click", (e) => {
      const head = e.target.closest(".k-dd > a");
      if (head && window.matchMedia("(max-width: 900px)").matches) {
        e.preventDefault();
        const dd = head.parentElement;
        const wasOpen = dd.classList.contains("open");
        nav
          .querySelectorAll(".k-dd.open")
          .forEach((d) => d.classList.remove("open"));
        if (!wasOpen) dd.classList.add("open");
        return;
      }
      if (
        e.target.closest(".k-dd-panel a") ||
        (e.target.tagName === "A" && !e.target.closest(".k-dd"))
      ) {
        nav.classList.remove("open");
        burger.setAttribute("aria-expanded", "false");
      }
    });
  }
}
if (!customElements.get("kmep-header"))
  customElements.define("kmep-header", KmepHeader);

/* ---------------- FOOTER ---------------- */
class KmepFooter extends HTMLElement {
  connectedCallback() {
    const links = (arr) =>
      arr.map(([t, f]) => `<li><a href="${f}">${t}</a></li>`).join("");

    this.innerHTML = `
<style>
  kmep-footer { display:block; }
  kmep-footer *, kmep-footer *::before, kmep-footer *::after { box-sizing:border-box; margin:0; padding:0; }
  .kf { background:#2a1038; color:#d9c6e6; font-family:"Outfit",sans-serif; }
  .kf-in { max-width:1240px; margin:0 auto; padding:44px 32px 28px; display:grid; grid-template-columns:1.5fr 1fr 1fr 1.4fr; gap:48px; }
  .kf-brand { display:flex; align-items:center; gap:10px; text-decoration:none; margin-bottom:16px; }
  .kf-brand img { height:44px; width:auto; background:#f3f0e9; border-radius:8px; padding:4px; }
  .kf-brand b { display:block; font-size:20px; letter-spacing:2px; color:#fff; line-height:1; }
  .kf-brand small { display:block; font-size:10px; letter-spacing:3px; color:#e3b8f5; margin-top:4px; }
  .kf p { font-size:14.5px; line-height:1.75; }
  .kf h4 { color:#fff; font-size:14px; font-weight:700; letter-spacing:.14em; text-transform:uppercase; margin-bottom:18px; }
  .kf ul { list-style:none; display:grid; gap:8px; }
  .kf a { color:#d9c6e6; text-decoration:none; font-size:14.5px; line-height:1.4; transition:color .2s; }
  .kf li { line-height:1.4; }
  .kf a:hover { color:#fff; }
  .kf-ct { display:grid; gap:14px; }
  .kf-ct div { display:flex; gap:12px; align-items:flex-start; font-size:14.5px; line-height:1.6; }
  .kf-ct i { color:#e3b8f5; width:16px; margin-top:4px; flex-shrink:0; text-align:center; }
  .kf-bar { border-top:1px solid rgba(227,184,245,.18); }
  .kf-bar div { max-width:1240px; margin:0 auto; padding:16px 32px; display:flex; justify-content:space-between; gap:12px; flex-wrap:wrap; font-size:13px; color:#b89dc8; }
  @media (max-width:1000px) { .kf-in { grid-template-columns:1fr 1fr; gap:36px; } }
  @media (max-width:560px) {
    .kf-in { grid-template-columns:1fr 1fr; gap:24px 20px; padding:32px 20px 20px; }
    .kf-in > div:first-child { grid-column:1 / -1; }
    .kf-in > div:last-child { grid-column:1 / -1; }
    .kf h4 { margin-bottom:12px; font-size:13px; }
    .kf p { font-size:14px; line-height:1.6; }
    .kf a, .kf-ct div { font-size:14px; }
    .kf-ct { gap:10px; }
    .kf-brand { margin-bottom:12px; }
    .kf-bar div { padding:14px 20px 80px; flex-direction:column; gap:4px; }
  }
</style>

<footer class="kf">
  <div class="kf-in">
    <div>
      <a href="index.html" class="kf-brand">
        <img src="${KMEP.logo}" alt="" />
        <span><b>KEERTHAN</b><small>MEP ENGINEERS</small></span>
      </a>
      <p>Integrated HVAC, mechanical, electrical and plumbing engineering: design, installation, commissioning and lifecycle support.</p>
    </div>
    <div>
      <h4>Company</h4>
      <ul>${links(KMEP.company)}</ul>
    </div>
    <div>
      <h4>Services</h4>
      <ul>${links(KMEP.services)}<li><a href="index.html#work">Projects</a></li></ul>
    </div>
    <div>
      <h4>Contact</h4>
      <div class="kf-ct">
        <div><i class="fas fa-phone"></i><a href="${KMEP.phone.href}">${KMEP.phone.label}</a></div>
        <div><i class="fas fa-envelope"></i><a href="mailto:${KMEP.email}">${KMEP.email}</a></div>
        <div><i class="fab fa-whatsapp"></i><a href="${KMEP.whatsapp}" target="_blank" rel="noopener">${KMEP.whatsappLabel}</a></div>
        <div><i class="fas fa-location-dot"></i><span>${KMEP.address}</span></div>
      </div>
    </div>
  </div>
  <div class="kf-bar">
    <div>
      <span>© ${new Date().getFullYear()} Keerthan MEP Engineers. All rights reserved.</span>
      <span>${KMEP.offices}</span>
    </div>
  </div>
</footer>`;
  }
}

if (!customElements.get("kmep-footer"))
  customElements.define("kmep-footer", KmepFooter);

/* ---------------- DETAIL PAGES ---------------- */
document.addEventListener("DOMContentLoaded", () => {
  // decorative icons shouldn't be announced by screen readers
  document
    .querySelectorAll("i.fas, i.fab, i.far")
    .forEach((i) => i.setAttribute("aria-hidden", "true"));

  const hero = document.querySelector(".dt-hero");
  if (!hero) return;
  buildBreadcrumb(hero);
  applyHeroImage(hero);
  buildJumpBar(hero);
});

function buildBreadcrumb(hero) {
  const wrap = hero.querySelector(".wrap");
  if (!wrap || hero.querySelector(".dt-crumb")) return;

  const dir = kmepDir();
  const h1 = hero.querySelector("h1");
  const crumb = document.createElement("nav");
  crumb.className = "dt-crumb";
  crumb.setAttribute("aria-label", "Breadcrumb");

  const link = (href, text) => {
    const a = document.createElement("a");
    a.href = href;
    a.textContent = text;
    return a;
  };
  const sep = () => document.createTextNode(" › ");

  crumb.append(
    link("index.html", "Home"),
    sep(),
    link("services.html", "Services"),
  );
  if (Object.hasOwn(KMEP_FOLDERS, dir)) {
    crumb.append(sep(), link(`services.html#${dir}`, KMEP_FOLDERS[dir]));
  }
  if (h1) {
    const current = document.createElement("b");
    current.textContent = h1.textContent;
    crumb.append(sep(), current);
  }
  wrap.prepend(crumb);
}

function applyHeroImage(hero) {
  // hero background = the page's overview image
  const img = document.querySelector(".dt-over img");
  if (!img) return;
  const apply = () => {
    if (!img.naturalWidth) return;
    hero.style.setProperty("--hero-img", `url("${img.currentSrc || img.src}")`);
    hero.classList.add("has-img");
  };
  if (img.complete) apply();
  img.addEventListener("load", apply); // also fires after the onerror fallback swap
}

function buildJumpBar(hero) {
  const items = [...document.querySelectorAll(".dt-sec")]
    .map((sec, i) => {
      const eyebrow = sec.querySelector(".dt-eyebrow");
      if (!eyebrow) return null;
      sec.id = sec.id || `sec-${i}`;
      return { sec, label: eyebrow.textContent.trim(), link: null };
    })
    .filter(Boolean);
  if (items.length < 3) return;

  const nav = document.createElement("nav");
  nav.className = "dt-nav";
  nav.setAttribute("aria-label", "On this page");
  const wrap = document.createElement("div");
  wrap.className = "wrap";

  // <base href> would send a bare "#id" to the site root, so anchor to this page's own path
  const page = location.pathname + location.search;
  items.forEach((item) => {
    const a = document.createElement("a");
    a.href = `${page}#${item.sec.id}`;
    a.textContent = item.label;
    item.link = a;
    wrap.append(a);
  });
  nav.append(wrap);
  hero.after(nav);

  let ticking = false;
  let last = null;
  let locked = false; // true while a tab-click scroll is in progress
  let unlockTimer;

  const barBottom = () =>
    (parseFloat(
      getComputedStyle(document.documentElement).getPropertyValue(
        "--k-header-h",
      ),
    ) || 77) + nav.offsetHeight;

  const setActive = (current) => {
    items.forEach((item) => {
      const active = item === current;
      item.link.classList.toggle("on", active);
      if (active) item.link.setAttribute("aria-current", "true");
      else item.link.removeAttribute("aria-current");
    });

    if (current !== last) {
      last = current;
      // keep the active tab visible in the horizontally scrolling bar (mobile)
      wrap.scrollTo({
        left:
          current.link.offsetLeft -
          (wrap.clientWidth - current.link.offsetWidth) / 2,
        behavior: "smooth",
      });
    }
  };

  const spy = () => {
    ticking = false;
    if (locked) return;
    const offset = barBottom() + 24;

    let current = items[0];
    items.forEach((item) => {
      if (item.sec.getBoundingClientRect().top <= offset) current = item;
    });

    // at the very bottom the last section can't reach the bar, so force it active
    const atBottom =
      Math.ceil(window.innerHeight + window.scrollY) >=
      document.documentElement.scrollHeight - 2;
    if (atBottom) current = items[items.length - 1];

    setActive(current);
  };

  // resume the spy once scrolling has stopped
  const unlockSoon = () => {
    clearTimeout(unlockTimer);
    unlockTimer = setTimeout(() => {
      locked = false;
      spy();
    }, 200);
  };

  // clicking a tab: highlight it now and scroll to an exact position
  wrap.addEventListener("click", (e) => {
    const a = e.target.closest("a");
    const item = a && items.find((it) => it.link === a);
    if (!item) return;
    e.preventDefault();

    locked = true;
    setActive(item);
    unlockSoon();

    const reduce = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    const y =
      item.sec.getBoundingClientRect().top + window.scrollY - barBottom() + 1;
    window.scrollTo({
      top: Math.max(0, y),
      behavior: reduce ? "auto" : "smooth",
    });
    history.replaceState(null, "", `${page}#${item.sec.id}`);
  });

  window.addEventListener(
    "scroll",
    () => {
      if (locked) unlockSoon();
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(spy);
      }
    },
    { passive: true },
  );
  window.addEventListener("resize", spy);
  spy();
}
