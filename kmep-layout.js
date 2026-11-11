/* ==========================================================
   KMEP shared layout: <kmep-header> and <kmep-footer>
   Edit the CONFIG below; every page updates.
   ========================================================== */
const KMEP = {
  logo: "IMAGES/logo.png",
  // second logo (Pvt Ltd). Set to null to hide it.
  logo2: null,
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

const kmepPage = () =>
  (location.pathname.split("/").pop() || "index.html").toLowerCase();

/* ---------------- HEADER ---------------- */
class KmepHeader extends HTMLElement {
  connectedCallback() {
    const page = kmepPage();
    const on = (file) => (page === file ? " is-on" : "");
    const companyOn = KMEP.company.some(([, f]) => f === page) ? " is-on" : "";
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
      <a href="index.html" class="${on("index.html").trim()}">Home</a>
      <div class="k-dd">
        <a href="about.html" class="${companyOn.trim()}">Company<i class="fas fa-chevron-down"></i></a>
        <div class="k-dd-panel">${dd}</div>
      </div>
      <div class="k-dd">
        <a href="services.html" class="${on("services.html").trim()}">Services<i class="fas fa-chevron-down"></i></a>
        <div class="k-dd-panel">${sd}</div>
      </div>
      <a href="index.html#work">Projects</a>
      <a href="contact-us.html" class="${on("contact-us.html").trim()}">Contact Us</a>
    </nav>
    <a href="contact-us.html" class="k-btn is-brand">Get a quote</a>
  </div>
</header>`;

    const burger = this.querySelector("#kBurger");
    const nav = this.querySelector("#kNav");
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
customElements.define("kmep-footer", KmepFooter);
