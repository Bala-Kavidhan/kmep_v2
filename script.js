// script.js

// class KmepHeader extends HTMLElement {
//   connectedCallback() {
//     this.innerHTML = `
// <style>
//   /* ── Scoped reset ───────────────────────────────────── */
//   kmep-header *, kmep-header *::before, kmep-header *::after {
//     box-sizing: border-box; margin: 0; padding: 0;
//   }

//   /* ── Tokens ─────────────────────────────────────────── */
//  :root {
//     --kh-navy:   #0c1e35;
//     --kh-blue:   #1558b0;
//     --kh-blue2:  #1a6fd4;
//     --kh-sky:    #0ea5e9;
//     --kh-teal:   #0d9488;
//     --kh-off:    #f7f9fc;
//     --kh-off2:   #eef2f7;
//     --kh-slate:  #5a6a7e;
//     --kh-muted:  #94a3b8;
//     --kh-border: #dde4ed;
//     --kh-h:      60px;
//   }
//   /* ── Bar ─────────────────────────────────────────────── */
//   .kh-bar {
//     position: fixed; top: 0; left: 0; right: 0; z-index: 1000;
//     height: var(--kh-h);
//     background: #fff;
//     border-bottom: 1px solid var(--kh-border);
//     transition: box-shadow .35s ease;
//   }
//   .kh-bar.scrolled {
//     box-shadow: 0 4px 28px rgba(12,30,53,0.08);
//   }

//   /* ── Inner ───────────────────────────────────────────── */
//   .kh-inner {
//     width: 100%; padding: 0 48px;
//     height: 100%; display: flex; align-items: center; gap: 4px;
//   }

//   /* ── Logo ────────────────────────────────────────────── */
// .kh-logo {
//     display: flex; align-items: flex-end; gap: 10px;
//     text-decoration: none; flex-shrink: 0; margin-right: 12px;
//     height: 100%;
//     padding-bottom: 8px;
//   }
//   .kh-logo img {
//     height: clamp(34px, 4vw, 48px);
//     width: auto;
//     object-fit: contain;
//   }
//   .kh-logo-text {
//     display: flex;
//     flex-direction: column;
//     justify-content: center;
//     line-height: 1;
//   }
//  .kh-logo-title {
//     font-family: "Outfit", sans-serif;
//     font-weight: 700;
//     font-size: clamp(18px, 2.2vw, 24px);
//     letter-spacing: 2px;
//     color: #7b2d8e;
//     white-space: nowrap;
//     line-height: 1;
//   }
//   .kh-logo-sub {
//     font-family: "Outfit", sans-serif;
//     font-weight: 500;
//     font-size: clamp(9px, 1.1vw, 11px);
//     letter-spacing: 3.5px;
//     color: #7b2d8e;
//     white-space: nowrap;
//     line-height: 1;
//     margin-top: 4px;
//   }

//   /* ── Desktop nav ─────────────────────────────────────── */
// .kh-nav {
//     display: flex; align-items: stretch; gap: 4px;
//     height: 100%;
//     margin-left: auto;
//   }
//   /* Plain link */
//   .kh-link {
//     display: flex; align-items: center; gap: 5px;
//     padding: 0 18px; border-radius: 0;
//     font-family: "Outfit", sans-serif;
//     font-size: 15px; font-weight: 500;
//     color: var(--kh-slate);
//     text-decoration: none !important; white-space: nowrap;
//     transition: color .2s; cursor: pointer;
//     border: none; background: none; height: 100%;
//     position: relative;
//   }
//   .kh-link::after {
//     content: none;
//   }
//   .kh-link:hover { color: var(--kh-navy); }
// .kh-chev {
//     font-size: 9px; opacity: .5; flex-shrink: 0;
//     transition: transform .25s, opacity .25s;
//   }
//   .kh-link .kh-chev {
//     display: none;
//   }

//   /* ── Dropdown wrapper ────────────────────────────────── */
//   .kh-dd { position: relative; display: flex; align-items: stretch; height: 100%; }
//   .kh-dd:hover > .kh-link .kh-chev { transform: rotate(180deg); opacity: 1; }

//   /* ── Mega panel ──────────────────────────────────────── */
// .kh-panel {
//   position: absolute;
//   top: calc(100% + 2px); left: 50%;
//   transform: translateX(-50%) translateY(8px);
//   width: max-content; background: #fff;
//   border-radius: 10px; border: 1px solid var(--kh-border);
//   box-shadow: 0 20px 64px rgba(12,30,53,0.13);
//   padding: 10px 8px;
//   display: flex; align-items: center; gap: 2px;
//   opacity: 0; visibility: hidden; pointer-events: none;
//   transition: opacity .2s ease, transform .2s ease, visibility .2s;
//   z-index: 200;
// }
//   .kh-dd:hover .kh-panel {
//     opacity: 1; visibility: visible; pointer-events: auto;
//     transform: translateX(-50%) translateY(0);
//   }
//   /* Caret */
//   .kh-panel::before {
//     content: ""; position: absolute;
//     top: -7px; left: 50%; transform: translateX(-50%);
//     border-left: 8px solid transparent;
//     border-right: 8px solid transparent;
//     border-bottom: 7px solid var(--kh-border);
//   }
//   .kh-panel::after {
//     content: ""; position: absolute;
//     top: -6px; left: 50%; transform: translateX(-50%);
//     border-left: 7px solid transparent;
//     border-right: 7px solid transparent;
//     border-bottom: 6px solid #fff;
//   }

//   /* Section label */
// .kh-panel-label { display: none; }

//   /* Panel item */
//  .kh-pitem {
//   display: flex; align-items: center; gap: 0;
//   padding: 10px 18px; border-radius: 7px;
//   text-decoration: none; cursor: pointer;
//   white-space: nowrap;
//   transition: background .18s;
// }
//   .kh-pitem:hover { background: var(--kh-off2); }
//   .kh-pitem-ico { display: none; }
//   .kh-pitem:hover .kh-pitem-ico {
//     background: linear-gradient(135deg, var(--kh-blue), var(--kh-blue2));
//     color: #fff;
//   }
//  .kh-pitem-title {
//   font-family: "Outfit", sans-serif;
//   font-size: 14px; font-weight: 600; color: var(--kh-slate);
//   margin-bottom: 0; transition: color .18s;
// }
//   .kh-pitem-sub { display: none; }

//   /* ── Hamburger ───────────────────────────────────────── */
//   .kh-ham {
//     display: none; flex-direction: column; align-items: center; justify-content: center;
//     width: 40px; height: 40px; border-radius: 8px;
//     gap: 5px; cursor: pointer; margin-left: auto;
//     background: transparent; border: none; padding: 0; flex-shrink: 0;
//   }
//  .kh-ham span {
//     display: block; width: 22px; height: 2px;
//     background: var(--kh-navy); border-radius: 2px; transition: all .3s;
//   }
//   .kh-ham.open span:nth-child(1) { transform: translateY(7px) rotate(45deg); }
//   .kh-ham.open span:nth-child(2) { opacity: 0; transform: scaleX(0); }
//   .kh-ham.open span:nth-child(3) { transform: translateY(-7px) rotate(-45deg); }

//   /* ── Mobile drawer ───────────────────────────────────── */
//   .kh-drawer-overlay {
//     display: none; position: fixed;
//     inset: 0; z-index: 999;
//     background: transparent;
//   }
//   .kh-drawer-overlay.open { display: block; }

//   .kh-drawer {
//     position: fixed;
//     top: calc(var(--kh-h) + 8px);
//     right: 16px;
//     width: 260px;
//     max-width: calc(100vw - 32px);
//     max-height: calc(100vh - var(--kh-h) - 24px);
//     background: #fff; border-radius: 14px;
//     box-shadow: 0 20px 60px rgba(12,30,53,0.25);
//     overflow-y: auto;
//     display: flex; flex-direction: column;
//   }

//   .kh-dr-link {
//     display: flex; align-items: center; justify-content: space-between;
//     padding: 16px 24px; border-bottom: 1px solid var(--kh-border);
//     font-family: "Outfit", sans-serif;
//     font-size: 16px; font-weight: 600; color: var(--kh-navy);
//     text-decoration: none; cursor: pointer;
//     transition: color .2s, background .2s;
//     background: none; border-left: none; border-right: none; border-top: none; width: 100%;
//   }
//   .kh-dr-link:hover { color: var(--kh-blue); background: var(--kh-off2); }
//   .kh-dr-link .kh-chev { display: none; }

//   /* Accordion sub */
//   .kh-dr-sub {
//     display: none; flex-direction: column;
//     background: var(--kh-off2);
//     border-bottom: 1px solid var(--kh-border);
//   }
//   .kh-dr-sub.open { display: flex; }
//   .kh-dr-sub a {
//     padding: 13px 24px 13px 40px;
//     font-family: "Outfit", sans-serif;
//     font-size: 14px; font-weight: 600; color: var(--kh-slate);
//     text-decoration: none; transition: color .2s, background .2s;
//     display: flex; align-items: center; gap: 10px;
//     border-bottom: 1px solid var(--kh-border);
//   }
//   .kh-dr-sub a:last-child { border-bottom: none; }
//   .kh-dr-sub a i { color: var(--kh-sky); font-size: 12px; width: 14px; flex-shrink: 0; }
//   .kh-dr-sub a:hover { color: var(--kh-blue); background: #fff; }

//   /* Drawer CTA */
//   .kh-dr-cta {
//     padding: 24px;
//   }
//   .kh-dr-cta a {
//     display: flex; align-items: center; justify-content: center; gap: 9px;
//     background: var(--kh-navy); color: #fff;
//     padding: 15px 24px; border-radius: 10px;
//     font-family: "Outfit", sans-serif;
//     font-size: 15px; font-weight: 700; text-decoration: none;
//     transition: background .2s;
//   }
//   .kh-dr-cta a:hover { background: var(--kh-blue2); }

//   /* ── Breakpoints ─────────────────────────────────────── */
//   @media (max-width: 1080px) {
//     .kh-inner { padding: 0 32px; }
//   }
//   @media (max-width: 860px) {
//     :root { --kh-h: 66px; }
//     .kh-inner { padding: 0 24px; }
//     .kh-nav   { display: none; }
//     .kh-ham   { display: flex; }
//     .kh-logo img { height: 34px; width: auto; }
//     .kh-logo-title { font-size: 15px; }
//     .kh-logo-sub { font-size: 7px; letter-spacing: 2.5px; }
//   }
//   @media (max-width: 480px) {
//     :root { --kh-h: 60px; }
//     .kh-inner { padding: 0 18px; }
//   }
// </style>

// <!-- BAR -->
// <header class="kh-bar" id="khBar" role="banner">
//   <div class="kh-inner">

//     <!-- Logo -->
//     <a href="index.html" class="kh-logo" aria-label="KMEP Home">
//       <img src="IMAGES/logo.png" alt="KMEP Logo" />
//       <span class="kh-logo-text">
//         <span class="kh-logo-title">KEERTHAN</span>
//         <span class="kh-logo-sub">MEP ENGINEERS</span>
//       </span>
//     </a>

//     <!-- Desktop nav -->
//     <nav class="kh-nav" role="navigation" aria-label="Main navigation">
//       <a href="index.html" class="kh-link">Home</a>
//       <div class="kh-dd">
//         <a class="kh-link" tabindex="0">Company</a>
//         <div class="kh-panel">
//           <div style="display: flex; flex-direction: column;">
//             <a href="about.html" class="kh-pitem"><span class="kh-pitem-title">About Us</span></a>
//             <a href="leadership.html" class="kh-pitem"><span class="kh-pitem-title">Leadership</span></a>
//             <a href="team.html" class="kh-pitem"><span class="kh-pitem-title">Our Team</span></a>
//             <a href="our_delivery_process.html" class="kh-pitem"><span class="kh-pitem-title"> Our Delivery Process</a>
//              <a href="careers.html" class="kh-pitem"><span class="kh-pitem-title"> Careers</a>
//           </div>
//         </div>
//       </div>
//       <a href="services.html" class="kh-link">Services</a>
//       <a href="contact-us.html" class="kh-link">Contact Us</a>
//     </nav>

//     <!-- Hamburger -->
//     <button class="kh-ham" id="khHam" aria-label="Open navigation menu" aria-expanded="false" aria-controls="khDrawer">
//       <span></span><span></span><span></span>
//     </button>

//   </div>
// </header>

// <!-- Mobile drawer -->
// <div class="kh-drawer-overlay" id="khDrawerOverlay" aria-hidden="true">
//   <nav class="kh-drawer" id="khDrawer" role="navigation" aria-label="Mobile navigation">

//  <a href="index.html" class="kh-dr-link">Home</a>
//   <button type="button" class="kh-dr-link kh-dr-accordion-toggle">
//     Company <i class="fas fa-chevron-down kh-chev"></i>
//   </button>
//   <div class="kh-dr-sub" id="khCompanySub">
//     <a href="about.html"><i class="fas fa-arrow-right"></i> About Us</a>
//     <a href="leadership.html"><i class="fas fa-arrow-right"></i> Leadership</a>
//     <a href="team.html"><i class="fas fa-arrow-right"></i> Our Team</a>
//     <a href="our_delivery_process.html"><i class="fas fa-arrow-right"></i> Our Delivery Process</a>
//     <a href="careers.html"><i class="fas fa-arrow-right"></i>Careers</a>
//   </div>
//   <a href="services.html" class="kh-dr-link">Services</a>
//   <a href="contact-us.html" class="kh-dr-link">Contact Us</a>

//   </nav>
// </div>
//     `;

//     this._init();
//   }

//   _init() {
//     const bar = this.querySelector("#khBar");
//     const ham = this.querySelector("#khHam");
//     const overlay = this.querySelector("#khDrawerOverlay");
//     const drawer = this.querySelector("#khDrawer");

//     const closeDrawer = () => {
//       ham.classList.remove("open");
//       ham.setAttribute("aria-expanded", false);
//       overlay.classList.remove("open");
//       overlay.setAttribute("aria-hidden", true);
//       document.body.style.overflow = "";
//     };
//     /* Scroll → .scrolled */
//     const onScroll = () =>
//       bar.classList.toggle("scrolled", window.scrollY > 10);
//     window.addEventListener("scroll", onScroll, { passive: true });
//     onScroll();

//     /* Hamburger */
//     ham.addEventListener("click", () => {
//       const open = ham.classList.toggle("open");
//       ham.setAttribute("aria-expanded", open);
//       overlay.classList.toggle("open", open);
//       overlay.setAttribute("aria-hidden", !open);
//       document.body.style.overflow = open ? "hidden" : "";
//     });

//     /* Close on overlay background click */
//     overlay.addEventListener("click", (e) => {
//       if (e.target === overlay) closeDrawer();
//     });

//     /* Accordion toggle for Company (mobile) */
//     const companyToggle = this.querySelector(".kh-dr-accordion-toggle");
//     const companySub = this.querySelector("#khCompanySub");
//     if (companyToggle && companySub) {
//       companyToggle.addEventListener("click", () => {
//         const open = companySub.classList.toggle("open");
//         companyToggle.querySelector(".kh-chev").style.transform = open
//           ? "rotate(180deg)"
//           : "rotate(0deg)";
//       });
//     }

//     /* Close on nav link click (skip the accordion toggle itself) */
//     drawer
//       .querySelectorAll("a")
//       .forEach((a) => a.addEventListener("click", closeDrawer));

//     /* Close on Escape */
//     document.addEventListener("keydown", (e) => {
//       if (e.key === "Escape" && overlay.classList.contains("open")) {
//         closeDrawer();
//       }
//     });
//   }
// }
// customElements.define("kmep-header", KmepHeader);
class KmepHeader extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
  <style>
    kmep-header *, kmep-header *::before, kmep-header *::after {
      box-sizing: border-box; margin: 0; padding: 0;
    }

    :root {
      --kh-navy:   #2a1135;
      --kh-blue:   #722a8a;
      --kh-blue2:  #8e3aa8;
      --kh-sky:    #a352c4;
      --kh-teal:   #0d9488;
      --kh-off:    #f7f9fc;
      --kh-off2:   #efe9df;
      --kh-slate:  #5b5266;
      --kh-muted:  #94a3b8;
      --kh-border: #e4ddd0;
      --kh-h:      60px;
      --kh-cream:  #f3f0e9;
    }

    .kh-bar {
      position: fixed; top: 0; left: 0; right: 0; z-index: 1000;
      height: var(--kh-h);
      background: var(--kh-cream);
      border-bottom: 1px solid var(--kh-border);
      transition: box-shadow .35s ease;
    }
    .kh-bar.scrolled { box-shadow: 0 4px 28px rgba(12,30,53,0.08); }

    .kh-inner {
      width: 100%; padding: 0 48px;
      height: 100%; display: flex; align-items: center; gap: 4px;
    }

    /* ── Logos ───────────────────────────────────────────── */
    .kh-logo {
      display: flex; align-items: flex-end; gap: 10px;
      text-decoration: none; flex-shrink: 0; margin-right: 12px;
      height: 100%;
      padding-bottom: 8px;
    }
    .kh-logo img {
      height: clamp(34px, 4vw, 48px);
      width: auto;
      object-fit: contain;
      mix-blend-mode: multiply;
    }
    .kh-logo-text {
      display: flex; flex-direction: column; justify-content: center;
      line-height: 1;
    }
    .kh-logo-title {
      font-family: "Outfit", sans-serif;
      font-weight: 700;
      font-size: clamp(18px, 2.2vw, 24px);
      letter-spacing: 2px;
      color: #722a8a;
      white-space: nowrap;
      line-height: 1;
    }
    .kh-logo-sub {
      font-family: "Outfit", sans-serif;
      font-weight: 500;
      font-size: clamp(9px, 1.1vw, 11px);
      letter-spacing: 3.5px;
      color: #722a8a;
      white-space: nowrap;
      line-height: 1;
      margin-top: 4px;
    }
    .kh-logo-divider {
      width: 1px; height: 34px; background: var(--kh-border);
      margin: 0 14px 8px 2px; align-self: flex-end; flex-shrink: 0;
    }
    .kh-logo2 .kh-logo-sub { letter-spacing: 2px; }
    /* Different colour for company 2? Uncomment and set:
    .kh-logo2 .kh-logo-title, .kh-logo2 .kh-logo-sub { color: #0d9488; } */

    /* ── Desktop nav ─────────────────────────────────────── */
    .kh-nav {
      display: flex; align-items: stretch; gap: 4px;
      height: 100%;
      margin-left: auto;
    }
    .kh-link {
      display: flex; align-items: center; gap: 5px;
      padding: 0 18px; border-radius: 0;
      font-family: "Outfit", sans-serif;
      font-size: 15px; font-weight: 500;
      color: var(--kh-slate);
      text-decoration: none !important; white-space: nowrap;
      transition: color .2s; cursor: pointer;
      border: none; background: none; height: 100%;
      position: relative;
    }
    .kh-link::after { content: none; }
    .kh-link:hover { color: var(--kh-navy); }
    .kh-chev {
      font-size: 9px; opacity: .5; flex-shrink: 0;
      transition: transform .25s, opacity .25s;
    }
    .kh-link .kh-chev { display: none; }

    .kh-dd { position: relative; display: flex; align-items: stretch; height: 100%; }
    .kh-dd:hover > .kh-link .kh-chev { transform: rotate(180deg); opacity: 1; }

    .kh-panel {
      position: absolute;
      top: calc(100% + 2px); left: 50%;
      transform: translateX(-50%) translateY(8px);
      width: max-content; background: var(--kh-cream);
      border-radius: 10px; border: 1px solid var(--kh-border);
      box-shadow: 0 20px 64px rgba(12,30,53,0.13);
      padding: 10px 8px;
      display: flex; align-items: center; gap: 2px;
      opacity: 0; visibility: hidden; pointer-events: none;
      transition: opacity .2s ease, transform .2s ease, visibility .2s;
      z-index: 200;
    }
    .kh-dd:hover .kh-panel {
      opacity: 1; visibility: visible; pointer-events: auto;
      transform: translateX(-50%) translateY(0);
    }
    .kh-panel::before {
      content: ""; position: absolute;
      top: -7px; left: 50%; transform: translateX(-50%);
      border-left: 8px solid transparent;
      border-right: 8px solid transparent;
      border-bottom: 7px solid var(--kh-border);
    }
    .kh-panel::after {
      content: ""; position: absolute;
      top: -6px; left: 50%; transform: translateX(-50%);
      border-left: 7px solid transparent;
      border-right: 7px solid transparent;
      border-bottom: 6px solid var(--kh-cream);
    }

    .kh-panel-label { display: none; }

    .kh-pitem {
      display: flex; align-items: center; gap: 0;
      padding: 10px 18px; border-radius: 7px;
      text-decoration: none; cursor: pointer;
      white-space: nowrap;
      transition: background .18s;
    }
    .kh-pitem:hover { background: var(--kh-off2); }
    .kh-pitem-ico { display: none; }
    .kh-pitem:hover .kh-pitem-ico {
      background: linear-gradient(135deg, var(--kh-blue), var(--kh-blue2));
      color: #fff;
    }
    .kh-pitem-title {
      font-family: "Outfit", sans-serif;
      font-size: 14px; font-weight: 600; color: var(--kh-slate);
      margin-bottom: 0; transition: color .18s;
    }
    .kh-pitem-sub { display: none; }

    /* ── Hamburger ───────────────────────────────────────── */
    .kh-ham {
      display: none; flex-direction: column; align-items: center; justify-content: center;
      width: 40px; height: 40px; border-radius: 8px;
      gap: 5px; cursor: pointer; margin-left: auto;
      background: transparent; border: none; padding: 0; flex-shrink: 0;
    }
    .kh-ham span {
      display: block; width: 22px; height: 2px;
      background: var(--kh-blue); border-radius: 2px; transition: all .3s;
    }
    .kh-ham.open span:nth-child(1) { transform: translateY(7px) rotate(45deg); }
    .kh-ham.open span:nth-child(2) { opacity: 0; transform: scaleX(0); }
    .kh-ham.open span:nth-child(3) { transform: translateY(-7px) rotate(-45deg); }

    /* ── Mobile drawer ───────────────────────────────────── */
    .kh-drawer-overlay {
      display: none; position: fixed;
      inset: 0; z-index: 999;
      background: transparent;
    }
    .kh-drawer-overlay.open { display: block; }

    .kh-drawer {
      position: fixed;
      top: calc(var(--kh-h) + 8px);
      right: 16px;
      width: 260px;
      max-width: calc(100vw - 32px);
      max-height: calc(100vh - var(--kh-h) - 24px);
      background: var(--kh-cream); border-radius: 14px;
      box-shadow: 0 20px 60px rgba(12,30,53,0.25);
      overflow-y: auto;
      display: flex; flex-direction: column;
    }

    .kh-dr-link {
      display: flex; align-items: center; justify-content: space-between;
      padding: 16px 24px; border-bottom: 1px solid var(--kh-border);
      font-family: "Outfit", sans-serif;
      font-size: 16px; font-weight: 600; color: var(--kh-navy);
      text-decoration: none; cursor: pointer;
      transition: color .2s, background .2s;
      background: none; border-left: none; border-right: none; border-top: none; width: 100%;
    }
    .kh-dr-link:hover { color: var(--kh-blue); background: var(--kh-off2); }
    .kh-dr-link .kh-chev { display: none; }

    .kh-dr-sub {
      display: none; flex-direction: column;
      background: var(--kh-off2);
      border-bottom: 1px solid var(--kh-border);
    }
    .kh-dr-sub.open { display: flex; }
    .kh-dr-sub a {
      padding: 13px 24px 13px 40px;
      font-family: "Outfit", sans-serif;
      font-size: 14px; font-weight: 600; color: var(--kh-slate);
      text-decoration: none; transition: color .2s, background .2s;
      display: flex; align-items: center; gap: 10px;
      border-bottom: 1px solid var(--kh-border);
    }
    .kh-dr-sub a:last-child { border-bottom: none; }
    .kh-dr-sub a i { color: var(--kh-sky); font-size: 12px; width: 14px; flex-shrink: 0; }
    .kh-dr-sub a:hover { color: var(--kh-blue); background: #fff; }

    .kh-dr-cta { padding: 24px; }
    .kh-dr-cta a {
      display: flex; align-items: center; justify-content: center; gap: 9px;
      background: var(--kh-navy); color: #fff;
      padding: 15px 24px; border-radius: 10px;
      font-family: "Outfit", sans-serif;
      font-size: 15px; font-weight: 700; text-decoration: none;
      transition: background .2s;
    }
    .kh-dr-cta a:hover { background: var(--kh-blue2); }

    /* ── Breakpoints ─────────────────────────────────────── */
    @media (max-width: 1080px) {
      .kh-inner { padding: 0 32px; }
    }
    @media (max-width: 1000px) {
      .kh-logo-sub { letter-spacing: 2px; }
      .kh-logo2 .kh-logo-sub { letter-spacing: 1.5px; }
    }
    @media (max-width: 860px) {
      :root { --kh-h: 66px; }
      .kh-inner { padding: 0 24px; }
      .kh-nav   { display: none; }
      .kh-ham   { display: flex; }
      .kh-logo img { height: 34px; width: auto; }
      .kh-logo-title { font-size: 15px; }
      .kh-logo-sub { font-size: 7px; letter-spacing: 2.5px; }
      .kh-logo { margin-right: 8px; gap: 8px; }
      .kh-logo-sub { font-size: 7px; letter-spacing: 2px; }
      .kh-logo2 .kh-logo-sub { font-size: 6.5px; letter-spacing: 1.5px; }
      .kh-logo-divider { height: 28px; margin: 0 8px 8px 0; }
    }
    @media (max-width: 480px) {
      :root { --kh-h: 60px; }
      .kh-inner { padding: 0 14px; }
      .kh-logo { margin-right: 4px; gap: 6px; }
      .kh-logo img { height: 28px; }
      .kh-logo-title { font-size: 11px; letter-spacing: 1px; }
      .kh-logo-sub { font-size: 5.5px; letter-spacing: 1.2px; margin-top: 3px; }
      .kh-logo2 .kh-logo-sub { font-size: 5px; letter-spacing: 1px; }
      .kh-logo-divider { height: 22px; margin: 0 6px 8px 0; }
      .kh-ham { width: 34px; }
    }
    @media (max-width: 360px) {
      .kh-inner { padding: 0 10px; }
      .kh-logo img { height: 24px; }
      .kh-logo-title { font-size: 10px; }
      .kh-logo-sub { font-size: 5px; }
      .kh-logo2 .kh-logo-sub { font-size: 4.5px; letter-spacing: .8px; }
    }
  </style>

  <!-- BAR -->
  <header class="kh-bar" id="khBar" role="banner">
    <div class="kh-inner">

      <!-- Logo 1: Keerthan MEP Engineers -->
      <a href="index.html" class="kh-logo" aria-label="Keerthan MEP Engineers Home">
        <img src="IMAGES/logo.png" alt="Keerthan MEP Engineers Logo" />
        <span class="kh-logo-text">
          <span class="kh-logo-title">KEERTHAN</span>
          <span class="kh-logo-sub">MEP ENGINEERS</span>
        </span>
      </a>

      <span class="kh-logo-divider" aria-hidden="true"></span>

      <!-- Logo 2: Keerthan MEP Engineers Pvt Ltd -->
      <a href="#" class="kh-logo kh-logo2" aria-label="Keerthan MEP Engineers Pvt Ltd Home">
        <img src="IMAGES/logo.png" alt="Keerthan MEP Engineers Pvt Ltd Logo" />
        <span class="kh-logo-text">
          <span class="kh-logo-title">KEERTHAN</span>
          <span class="kh-logo-sub">MEP ENGINEERS PVT LTD</span>
        </span>
      </a>

      <!-- Desktop nav -->
      <nav class="kh-nav" role="navigation" aria-label="Main navigation">
        <a href="index.html" class="kh-link">Home</a>
        <div class="kh-dd">
          <a class="kh-link" tabindex="0">Company</a>
          <div class="kh-panel">
            <div style="display: flex; flex-direction: column;">
              <a href="about.html" class="kh-pitem"><span class="kh-pitem-title">About Us</span></a>
              <a href="leadership.html" class="kh-pitem"><span class="kh-pitem-title">Leadership</span></a>
              <a href="team.html" class="kh-pitem"><span class="kh-pitem-title">Our Team</span></a>
              <a href="our_delivery_process.html" class="kh-pitem"><span class="kh-pitem-title">Our Delivery Process</span></a>
              <a href="careers.html" class="kh-pitem"><span class="kh-pitem-title">Careers</span></a>
            </div>
          </div>
        </div>
        <a href="services.html" class="kh-link">Services</a>
        <a href="contact-us.html" class="kh-link">Contact Us</a>
      </nav>

      <!-- Hamburger -->
      <button class="kh-ham" id="khHam" aria-label="Open navigation menu" aria-expanded="false" aria-controls="khDrawer">
        <span></span><span></span><span></span>
      </button>

    </div>
  </header>

  <!-- Mobile drawer -->
  <div class="kh-drawer-overlay" id="khDrawerOverlay" aria-hidden="true">
    <nav class="kh-drawer" id="khDrawer" role="navigation" aria-label="Mobile navigation">

      <a href="index.html" class="kh-dr-link">Home</a>
      <button type="button" class="kh-dr-link kh-dr-accordion-toggle">
        Company <i class="fas fa-chevron-down kh-chev"></i>
      </button>
      <div class="kh-dr-sub" id="khCompanySub">
        <a href="about.html"><i class="fas fa-arrow-right"></i> About Us</a>
        <a href="leadership.html"><i class="fas fa-arrow-right"></i> Leadership</a>
        <a href="team.html"><i class="fas fa-arrow-right"></i> Our Team</a>
        <a href="our_delivery_process.html"><i class="fas fa-arrow-right"></i> Our Delivery Process</a>
        <a href="careers.html"><i class="fas fa-arrow-right"></i> Careers</a>
      </div>
      <a href="services.html" class="kh-dr-link">Services</a>
      <a href="contact-us.html" class="kh-dr-link">Contact Us</a>

    </nav>
  </div>
      `;

    this._init();
  }

  _init() {
    const bar = this.querySelector("#khBar");
    const ham = this.querySelector("#khHam");
    const overlay = this.querySelector("#khDrawerOverlay");
    const drawer = this.querySelector("#khDrawer");

    const closeDrawer = () => {
      ham.classList.remove("open");
      ham.setAttribute("aria-expanded", false);
      overlay.classList.remove("open");
      overlay.setAttribute("aria-hidden", true);
      document.body.style.overflow = "";
    };

    /* Scroll → .scrolled */
    const onScroll = () =>
      bar.classList.toggle("scrolled", window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    /* Hamburger */
    ham.addEventListener("click", () => {
      const open = ham.classList.toggle("open");
      ham.setAttribute("aria-expanded", open);
      overlay.classList.toggle("open", open);
      overlay.setAttribute("aria-hidden", !open);
      document.body.style.overflow = open ? "hidden" : "";
    });

    /* Close on overlay background click */
    overlay.addEventListener("click", (e) => {
      if (e.target === overlay) closeDrawer();
    });

    /* Accordion toggle for Company (mobile) */
    const companyToggle = this.querySelector(".kh-dr-accordion-toggle");
    const companySub = this.querySelector("#khCompanySub");
    if (companyToggle && companySub) {
      companyToggle.addEventListener("click", () => {
        const open = companySub.classList.toggle("open");
        companyToggle.querySelector(".kh-chev").style.transform = open
          ? "rotate(180deg)"
          : "rotate(0deg)";
      });
    }

    /* Close on nav link click */
    drawer
      .querySelectorAll("a")
      .forEach((a) => a.addEventListener("click", closeDrawer));

    /* Close on Escape */
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && overlay.classList.contains("open")) {
        closeDrawer();
      }
    });
  }
}
customElements.define("kmep-header", KmepHeader);
/* ============================================================
    FOOTER
  ============================================================ */
class KmepFooter extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
  <style>
    kmep-footer *, kmep-footer *::before, kmep-footer *::after {
      box-sizing: border-box; margin: 0; padding: 0;
    }

    .kf-root {
      background: #0c1e35;
      font-family: "Outfit", sans-serif;
      color: rgba(255,255,255,0.38);
      border-top: 1px solid rgba(255,255,255,0.06);
    }

    /* ── Top band ────────────────────────────────────────── */
    .kf-top {
      border-bottom: 1px solid rgba(255,255,255,0.07);
      padding: 24px 0;
    }
    .kf-top-inner {
      max-width: 1240px; margin: 0 auto; padding: 0 48px;
      display: flex; align-items: center; justify-content: center;
      gap: 48px; flex-wrap: wrap;
    }
    .kf-brand {
      display: flex; align-items: center; gap: 12px; text-decoration: none; flex-shrink: 0;
    }
    .kf-brand img {
      width: 54px; height: 54px; border-radius: 10px; object-fit: contain;
    }
    .kf-brand-name {
      font-weight: 750; font-size: 20px; letter-spacing: 2px;
      color: rgb(255, 255, 255); line-height: 1;
    }
  .kf-tagline {
      font-size: 14.5px; color: rgba(255,255,255,0.6);
      padding-top: 10px;
      line-height: 1.75; max-width: 560px; flex: 1; min-width: 220px;
    }
  .kf-tagline .kf-brand-name {
    display: block;
    font-size: 22px;
    letter-spacing: -0.5px;
    margin-bottom: 8px;
  }
    .kf-top-cta {
      display: inline-flex; align-items: center; gap: 8px;
      background: #722a8a; color: #fff;
      padding: 11px 26px; border-radius: 9px;
      font-size: 14px; font-weight: 700; text-decoration: none; white-space: nowrap;
      flex-shrink: 0;
      transition: background .2s, transform .2s, box-shadow .2s;
    }
    .kf-top-cta:hover {
      background: #8e3aa8; transform: translateY(-1px);
      box-shadow: 0 6px 20px rgba(114,42,138,0.35);
    }

    /* ── Columns ─────────────────────────────────────────── */
    .kf-cols {
      max-width: 1240px; margin: 0 auto; padding: 52px 48px;
      display: grid;
      grid-template-columns: 2fr 1fr 1fr 1fr;
      gap: 52px;
      border-bottom: 1px solid rgba(255,255,255,0.07);
    }

    .kf-about-desc {
      font-size: 13px; color: rgba(255,255,255,0.3); line-height: 1.85;
      margin-bottom: 26px; max-width: 280px;
    }
  .kf-contacts { display: flex; flex-direction: column; gap: 12px; }
    .kf-contacts a {
      font-size: 13.5px; color: rgba(255,255,255,0.42);
      display: flex; align-items: flex-start; gap: 10px;
      text-decoration: none; transition: color .2s; line-height: 1.6;
    }
    .kf-contacts a:hover { color: rgba(255,255,255,0.9); }
    .kf-contacts a i {
      color: #722a8a; font-size: 11px; width: 14px;
      flex-shrink: 0; margin-top: 3px;
    }

  .kf-col-head {
      display: block; font-size: 11px; font-weight: 700;
      letter-spacing: 2px; text-transform: uppercase;
      color: rgba(255,255,255,0.5); margin-bottom: 18px;
    }
    .kf-col a {
      display: block; font-size: 13.5px; color: rgba(255,255,255,0.42);
      padding: 6px 0; text-decoration: none; transition: color .2s;
    }
    .kf-col a:hover { color: rgba(255,255,255,0.9); }

    /* ── Bottom ──────────────────────────────────────────── */
    .kf-bottom {
      max-width: 1240px; margin: 0 auto; padding: 20px 48px;
      display: flex; justify-content: space-between; align-items: center;
      flex-wrap: wrap; gap: 8px;
    }
  .kf-copy    { font-size: 12.5px; color: rgba(255,255,255,0.32); }
    .kf-address { font-size: 12px;   color: rgba(255,255,255,0.28); text-align: right; }
    .kf-powered-row {
      max-width: 1240px; margin: 0 auto; padding: 14px 48px 0;
      display: flex; justify-content: flex-end;
    }
  .kf-powered {
      font-size: 12px; font-weight: 600; color: #0ea5e9;
      text-decoration: none; transition: color .2s;
    }
    .kf-powered:hover { color: #38bdf8; }

    /* ── Responsive ──────────────────────────────────────── */
    @media (max-width: 1080px) {
      .kf-top-inner, .kf-cols, .kf-bottom, .kf-powered-row { padding-left: 32px; padding-right: 32px; }
      .kf-cols { grid-template-columns: 1fr 1fr; gap: 36px; }
      .kf-cols > div:first-child { grid-column: 1 / -1; }
      .kf-about-desc { max-width: 100%; }
      .kf-contacts { flex-direction: row; flex-wrap: wrap; column-gap: 24px; }
    }
  @media (max-width: 680px) {
      .kf-top-inner, .kf-cols, .kf-bottom { padding-left: 24px; padding-right: 24px; }
      .kf-top-inner { flex-direction: column; align-items: flex-start; }
      .kf-top-cta   { width: 100%; justify-content: center; }
      .kf-bottom      { flex-direction: column; align-items: flex-start; }
      .kf-address     { text-align: left; }
      .kf-powered-row { justify-content: flex-start; padding-left: 24px; padding-right: 24px; }
      .kf-contacts  { flex-direction: column; }
    }
  @media (max-width: 440px) {
      .kf-top-inner, .kf-cols, .kf-bottom, .kf-powered-row { padding-left: 18px; padding-right: 18px; }
      .kf-cols { grid-template-columns: 1fr; }
    }
  </style>

  <style>
    /* ── Cream theme overrides ───────────────────────────── */
    .kf-root { background: #f3f0e9; color: #5b5266; border-top: 1px solid #e4ddd0; }
    .kf-top, .kf-cols { border-bottom-color: #e4ddd0; }
    .kf-tagline { color: #5b5266; }
    .kf-tagline .kf-brand-name { color: #2a1135; }
    .kf-about-desc { color: #5b5266; }
    .kf-contacts a, .kf-col a { color: #5b5266; }
    .kf-contacts a:hover, .kf-col a:hover { color: #722a8a; }
    .kf-col-head { color: #722a8a; }
    .kf-copy, .kf-address { color: #9a90a6; }
    .kf-powered { color: #722a8a; }
    .kf-powered:hover { color: #8e3aa8; }
  </style>

  <footer class="kf-root" role="contentinfo">

    <!-- Top band -->
    <div class="kf-top">
    <div class="kf-top-inner">
        <p class="kf-tagline">
        <span class="kf-brand-name" style="font-family: 'Outfit', sans-serif;">Your Vision. Engineered to Perform.</span><br>
          Partner with Keerthan MEP to transform your requirements into efficient, reliable, and future-ready engineering solutions.
        </p>
        <a href="contact-us.html" class="kf-top-cta">
          <i class="fas fa-paper-plane" aria-hidden="true"></i> Start a Conversation
        </a>
      </div>
    </div>

    <!-- Main columns -->
    <div class="kf-cols">

      <div>
        <p class="kf-about-desc">
          Integrated MEP engineering under one roof — from design and installation
          through commissioning and 24/7 after-sales support. Authorized representative
          for Dunham Bush (DB-Aire India Pvt. Ltd.) and LG Electronics India Pvt. Ltd.
        </p>
        <div class="kf-contacts">
          <a href="tel:+919710439000">
            <i class="fas fa-phone" aria-hidden="true"></i> +91 97104 39000
          </a>
          <a href="tel:+919176670447">
            <i class="fas fa-phone" aria-hidden="true"></i> +91 91766 70447
          </a>
          <a href="mailto:rajesh@kmep.co.in">
            <i class="fas fa-envelope" aria-hidden="true"></i> rajesh@kmep.co.in
          </a>
          <a href="https://maps.app.goo.gl/yT5Em1M9PeMGubSJ7" target="_blank" rel="noopener">
            <i class="fas fa-map-marker-alt" aria-hidden="true"></i> 15/123, Loganathan Street, Krishnapuram,<br> Ambattur, Chennai – 600 063, Tamil Nadu, India 
          </a>
        </div>
      </div>

      <div class="kf-col">
        <span class="kf-col-head">Services</span>
        <a href="services.html">HVAC Systems</a>
        <a href="services.html">Mechanical Engineering</a>
        <a href="services.html">Electrical Works</a>
        <a href="services.html">Plumbing Solutions</a>
        <a href="services.html">Energy Audit &amp; Management</a>
      </div>

      <div class="kf-col">
        <span class="kf-col-head">Company</span>
        <a href="about.html">About Us</a>
        <a href="leadership.html">Leadership</a>
        <a href="team.html">Our Team</a> 
        <a href="our_delivery_process.html">Our Delivery Process</a>
        <a href="careers.html">Careers</a>
        <a href="contact-us.html">Contact Us</a>
      </div>

      <div class="kf-col">
        <span class="kf-col-head">Offices</span>
        <a href="https://www.google.com/maps/place/Keerthan+Mep+Engineers/@13.1199706,80.1461864,49m/data=!3m1!1e3!4m6!3m5!1s0x3a5263abb4e165e9:0x98da22f28bfc6f8f!8m2!3d13.1199677!4d80.1463515!16s%2Fg%2F11vhqjmgxm?entry=ttu&g_ep=EgoyMDI2MDcxMi4wIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noopener">Chennai</a>
        <a href="#" target="_blank" rel="noopener">Hosur</a>
        <a href="#" target="_blank" rel="noopener">Tiruchirappalli</a>
        <a href="#" target="_blank" rel="noopener">Bangalore</a>
      </div>
    </div>

    <div class="kf-powered-row">
      <a href="#" target="_blank" rel="noopener" class="kf-powered">
        Powered by Kavidhan Global Solutions <br> 9876543210 / 9876543210
      </a>
    </div>

    <!-- Bottom bar -->
    <div class="kf-bottom">
      <span class="kf-copy">© 2026 KMEP — Keerthan MEP Engineers &amp; Keerthan MEP Engineers Pvt Ltd. All rights reserved.</span>
      <span class="kf-address">
        15/123, Loganathan Street, Krishnapuram, Ambattur, Chennai – 600 063, Tamil Nadu, India
      </span>
    </div>

  </footer>
      `;
  }
}
customElements.define("kmep-footer", KmepFooter);

/* ============================================================
    SCROLL REVEAL  (.rv / .rv-l / .rv-r)
  ============================================================ */
(function initScrollReveal() {
  const els = document.querySelectorAll(".rv, .rv-l, .rv-r");
  if (!els.length) return;
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add("on");
          io.unobserve(e.target);
        }
      });
    },
    { threshold: 0.1 },
  );
  els.forEach((el) => io.observe(el));
})();

/* ============================================================
    SIDE-NAV DOTS  (#sideNav)
  ============================================================ */
document.addEventListener("DOMContentLoaded", () => {
  const sideNav = document.getElementById("sideNav");
  if (!sideNav) return;

  const dots = sideNav.querySelectorAll(".dot");
  const darkSections = ["hero", "stats", "clients"];

  dots.forEach((dot) => {
    dot.addEventListener("click", () => {
      const target = document.getElementById(dot.dataset.target);
      if (target) target.scrollIntoView({ behavior: "smooth" });
    });
  });

  window.addEventListener("scroll", () => {
    const mid = window.scrollY + window.innerHeight / 2;
    dots.forEach((dot) => {
      const s = document.getElementById(dot.dataset.target);
      if (!s) return;
      dot.classList.toggle(
        "on",
        mid >= s.offsetTop && mid < s.offsetTop + s.offsetHeight,
      );
    });
    const onDark = darkSections.some((id) => {
      const s = document.getElementById(id);
      if (!s) return false;
      const mid2 = window.scrollY + window.innerHeight / 2;
      return mid2 >= s.offsetTop && mid2 < s.offsetTop + s.offsetHeight;
    });
    sideNav.classList.toggle("dk", onDark);
  });
});

/* ============================================================
    HERO ANIMATE  (#hero — index.html only)
  ============================================================ */
document.addEventListener("DOMContentLoaded", () => {
  const hero = document.getElementById("hero");
  if (!hero) return;
  hero.classList.add("hero-animate");
  setTimeout(() => hero.classList.remove("hero-animate"), 1800);
});

/* ============================================================
    CONTACT FORM — submit feedback (contact-us.html only)
  ============================================================ */
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("kmepContactForm");
  if (!form) return;
  const btn = form.querySelector(".form-submit");
  if (!btn) return;
  const originalHTML = btn.innerHTML;
  form.addEventListener("submit", () => {
    btn.disabled = true;
    btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending…';
  });
  if (new URLSearchParams(window.location.search).get("sent") === "true") {
    const sub = form.querySelector(".form-sub");
    if (sub) {
      sub.textContent =
        "Thanks — your message was sent. We'll be in touch within 24 hours.";
      sub.style.color = "#16a34a";
      sub.style.fontWeight = "700";
    }
  }
});

/* ============================================================
    DISABLE COPY / RIGHT-CLICK / DEVTOOLS SHORTCUTS
  ============================================================ */
(function lockDownSite() {
  // Disable right-click context menu
  document.addEventListener("contextmenu", (e) => e.preventDefault());

  // Disable text selection
  document.addEventListener("selectstart", (e) => e.preventDefault());

  // Disable copy, cut, paste
  document.addEventListener("copy", (e) => e.preventDefault());
  document.addEventListener("cut", (e) => e.preventDefault());
  document.addEventListener("paste", (e) => e.preventDefault());

  // Disable dragging images/links
  document.addEventListener("dragstart", (e) => e.preventDefault());

  // Block common devtools / view-source / save shortcuts
  document.addEventListener("keydown", (e) => {
    const k = e.key.toUpperCase();
    if (
      e.key === "F12" ||
      (e.ctrlKey && e.shiftKey && ["I", "J", "C"].includes(k)) || // devtools panels
      (e.ctrlKey && ["U", "S", "P"].includes(k)) || // view-source, save, print
      (e.metaKey && e.altKey && ["I", "J", "C"].includes(k)) // Mac devtools
    ) {
      e.preventDefault();
    }
  });
})();
