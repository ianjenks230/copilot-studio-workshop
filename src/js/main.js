// Main JavaScript — Workshop Template

document.addEventListener("DOMContentLoaded", () => {
  initTheme();
  initMobileMenu();
  initReturnToTop();
  initTocHighlight();
  initCopyButtons();
});

/* ---------- Theme Toggle ---------- */
function initTheme() {
  const toggle = document.getElementById("themeToggle");
  const saved = localStorage.getItem("workshop-theme");
  if (saved) {
    document.documentElement.setAttribute("data-theme", saved);
  } else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
    document.documentElement.setAttribute("data-theme", "dark");
  }
  toggle?.addEventListener("click", () => {
    const current = document.documentElement.getAttribute("data-theme");
    const next = current === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", next);
    localStorage.setItem("workshop-theme", next);
  });
}

/* ---------- Mobile Menu ---------- */
function initMobileMenu() {
  const menuToggle = document.getElementById("menuToggle");
  const sidebar = document.getElementById("sidebar");

  // Create overlay
  const overlay = document.createElement("div");
  overlay.className = "sidebar-overlay";
  document.body.appendChild(overlay);

  function openSidebar() {
    sidebar.classList.add("open");
    overlay.classList.add("active");
  }
  function closeSidebar() {
    sidebar.classList.remove("open");
    overlay.classList.remove("active");
  }

  menuToggle?.addEventListener("click", () => {
    if (sidebar.classList.contains("open")) {
      closeSidebar();
    } else {
      openSidebar();
    }
  });
  overlay.addEventListener("click", closeSidebar);
}

/* ---------- Return to Top ---------- */
function initReturnToTop() {
  const btn = document.getElementById("returnToTop");
  if (!btn) return;

  window.addEventListener("scroll", () => {
    if (window.scrollY > 400) {
      btn.classList.add("visible");
    } else {
      btn.classList.remove("visible");
    }
  });

  btn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

/* ---------- TOC Active Highlight ---------- */
function initTocHighlight() {
  const tocLinks = document.querySelectorAll(".toc-link");
  if (tocLinks.length === 0) return;

  const headings = [];
  tocLinks.forEach((link) => {
    const id = link.getAttribute("href")?.slice(1);
    const el = document.getElementById(id);
    if (el) headings.push({ el, link });
  });

  function updateActive() {
    let current = null;
    for (const { el } of headings) {
      if (el.getBoundingClientRect().top <= 100) {
        current = el;
      }
    }
    tocLinks.forEach((l) => l.classList.remove("active"));
    if (current) {
      const match = headings.find((h) => h.el === current);
      match?.link.classList.add("active");
    }
  }

  window.addEventListener("scroll", updateActive, { passive: true });
  updateActive();
}

/* ---------- Copy Buttons on Code Blocks ---------- */
function initCopyButtons() {
  document.querySelectorAll(".content pre").forEach((pre) => {
    const btn = document.createElement("button");
    btn.className = "code-copy-btn";
    btn.textContent = "Copy";
    btn.addEventListener("click", async () => {
      const code = pre.querySelector("code")?.textContent || pre.textContent;
      try {
        await navigator.clipboard.writeText(code);
        btn.textContent = "Copied!";
        setTimeout(() => (btn.textContent = "Copy"), 2000);
      } catch {
        btn.textContent = "Failed";
        setTimeout(() => (btn.textContent = "Copy"), 2000);
      }
    });
    pre.style.position = "relative";
    pre.appendChild(btn);
  });
}
