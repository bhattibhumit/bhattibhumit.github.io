// Renders SITE_DATA (from data.js) into the page.
// You shouldn't need to edit this file — change content in data.js instead.

function el(tag, opts = {}, children = []) {
  const e = document.createElement(tag);
  if (opts.class) e.className = opts.class;
  if (opts.text) e.textContent = opts.text;
  if (opts.html) e.innerHTML = opts.html;
  if (opts.attrs) Object.entries(opts.attrs).forEach(([k, v]) => e.setAttribute(k, v));
  children.forEach(c => c && e.appendChild(c));
  return e;
}

function renderIdentity(d) {
  document.title = `${d.name} — ${d.role}`;
  document.querySelectorAll("[data-name]").forEach(n => n.textContent = d.name);
  document.querySelectorAll("[data-role]").forEach(n => n.textContent = d.role);
  document.querySelectorAll("[data-location]").forEach(n => n.textContent = d.location);
}

function renderHero(d) {
  document.getElementById("hero-name").textContent = d.name;
  document.getElementById("hero-intro").textContent = d.heroIntro;
  const statWrap = document.querySelector(".hero-stat");
  if (d.heroStat && d.heroStat.value) {
    document.getElementById("stat-value").textContent = d.heroStat.value;
    document.getElementById("stat-label").textContent = d.heroStat.label;
  } else if (statWrap) {
    statWrap.style.display = "none";
  }

  const resumeBtn = document.getElementById("resume-btn");
  if (d.resumeUrl) {
    resumeBtn.href = d.resumeUrl;
  } else {
    resumeBtn.style.display = "none";
  }

  const emailBtn = document.getElementById("email-btn");
  if (d.socials.email) {
    emailBtn.href = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(d.socials.email)}`;
    emailBtn.target = "_blank";
    emailBtn.rel = "noopener";
  } else {
    emailBtn.style.display = "none";
  }
}

function renderAbout(d) {
  document.getElementById("about-text").textContent = d.about;
}

function renderSkills(d) {
  const wrap = document.getElementById("skills-wrap");
  d.skills.forEach(group => {
    const groupEl = el("div", { class: "skill-group" }, [
      el("h3", { text: group.group }),
      el("div", { class: "chip-row" }, group.items.map(item => el("span", { class: "chip", text: item })))
    ]);
    wrap.appendChild(groupEl);
  });
}

function renderProjects(d) {
  const wrap = document.getElementById("projects-wrap");
  document.getElementById("projects-count").textContent = `${d.projects.length} projects`;

  d.projects.forEach(p => {
    const statusClass = p.status === "Completed" ? "completed" : "progress";
    const links = [];
    if (p.github) links.push(el("a", { text: "View on GitHub →", attrs: { href: p.github, target: "_blank", rel: "noopener" } }));
    if (p.demo) links.push(el("a", { text: "View walkthrough →", attrs: { href: p.demo, target: "_blank", rel: "noopener" } }));

    const row = el("div", { class: "project-row" }, [
      el("div", { class: "project-top" }, [
        el("div", { class: "project-title", text: p.title }),
        el("span", { class: `status ${statusClass}`, text: p.status })
      ]),
      el("p", { class: "project-desc", text: p.description }),
      el("div", { class: "project-tags" }, p.tags.map(t => el("span", { class: "chip", text: t }))),
      el("div", { class: "project-links" }, links)
    ]);
    wrap.appendChild(row);
  });
}

function renderCertifications(d) {
  const wrap = document.getElementById("certifications-wrap");
  if (!d.certifications || d.certifications.length === 0) {
    document.getElementById("certifications").style.display = "none";
    return;
  }
  d.certifications.forEach(c => {
    const row = el("div", { class: "cert-row" }, [
      el("div", { class: "cert-main" }, [
        el("div", { class: "cert-name", text: c.name }),
        el("div", { class: "cert-issuer", text: c.issuer })
      ]),
      el("div", { class: "cert-meta" }, [
        el("span", { class: "cert-year", text: c.year }),
        c.credentialUrl ? el("a", { class: "cert-link", text: "Show credential →", attrs: { href: c.credentialUrl, target: "_blank", rel: "noopener" } }) : null
      ])
    ]);
    wrap.appendChild(row);
  });
}

function renderEducation(d) {
  const wrap = document.getElementById("education-wrap");
  d.education.forEach(e => {
    wrap.appendChild(el("div", { class: "edu-row" }, [
      el("div", {}, [
        el("div", { class: "edu-degree", text: e.degree }),
        el("div", { class: "edu-institute", text: e.institute })
      ]),
      el("div", { class: "edu-year", text: e.year })
    ]));
  });
}

function renderContact(d) {
  const wrap = document.getElementById("contact-links");
  if (d.socials.github) wrap.appendChild(el("a", { text: "GitHub", attrs: { href: d.socials.github, target: "_blank", rel: "noopener" } }));
  if (d.socials.linkedin) wrap.appendChild(el("a", { text: "LinkedIn", attrs: { href: d.socials.linkedin, target: "_blank", rel: "noopener" } }));
  if (d.socials.email) wrap.appendChild(el("a", { text: "Email", attrs: { href: `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(d.socials.email)}`, target: "_blank", rel: "noopener" } }));
}

function renderFooter(d) {
  document.getElementById("footer-name").textContent = d.name;
  document.getElementById("footer-year").textContent = new Date().getFullYear();
}

function highlightActiveNav() {
  const links = document.querySelectorAll(".sidebar nav a, .mobile-topbar nav a");
  const sections = Array.from(links).map(l => document.querySelector(l.getAttribute("href")));

  let ticking = false;
  const update = () => {
    let current = sections[0];
    sections.forEach(s => {
      if (s && window.scrollY >= s.offsetTop - 120) current = s;
    });
    links.forEach(l => l.classList.toggle("active", l.getAttribute("href") === `#${current.id}`));
    ticking = false;
  };
  const onScroll = () => {
    if (!ticking) {
      requestAnimationFrame(update);
      ticking = true;
    }
  };
  document.addEventListener("scroll", onScroll, { passive: true });
  update();
}

function initScrollReveal() {
  const targets = document.querySelectorAll(".reveal");
  if (!("IntersectionObserver" in window) || targets.length === 0) {
    targets.forEach(t => t.classList.add("in-view"));
    return;
  }
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("in-view");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });
  targets.forEach(t => observer.observe(t));
}

function initMobileNav() {
  const toggle = document.getElementById("menu-toggle");
  const nav = document.getElementById("mobile-nav");
  if (!toggle || !nav) return;

  const setOpen = (isOpen) => {
    nav.classList.toggle("open", isOpen);
    toggle.classList.toggle("open", isOpen);
    toggle.setAttribute("aria-expanded", String(isOpen));
  };

  toggle.addEventListener("click", () => setOpen(!nav.classList.contains("open")));
  nav.querySelectorAll("a").forEach(link => link.addEventListener("click", () => setOpen(false)));
}

document.addEventListener("DOMContentLoaded", () => {
  renderIdentity(SITE_DATA);
  renderHero(SITE_DATA);
  renderAbout(SITE_DATA);
  renderSkills(SITE_DATA);
  renderProjects(SITE_DATA);
  renderCertifications(SITE_DATA);
  renderEducation(SITE_DATA);
  renderContact(SITE_DATA);
  renderFooter(SITE_DATA);
  highlightActiveNav();
  initScrollReveal();
  initMobileNav();
});
