// Search — Workshop Template
// Client-side full-text search using a pre-built index

document.addEventListener("DOMContentLoaded", () => {
  const trigger = document.getElementById("searchTrigger");
  const modal = document.getElementById("searchModal");
  const overlay = document.getElementById("searchOverlay");
  const input = document.getElementById("searchInput");
  const results = document.getElementById("searchResults");

  let searchIndex = null;
  let focusedIndex = -1;

  // Open/close modal
  function openSearch() {
    modal.classList.add("open");
    input.value = "";
    results.innerHTML = "";
    focusedIndex = -1;
    setTimeout(() => input.focus(), 50);
    loadSearchIndex();
  }
  function closeSearch() {
    modal.classList.remove("open");
  }

  trigger?.addEventListener("click", openSearch);
  overlay?.addEventListener("click", closeSearch);

  // Keyboard shortcuts
  document.addEventListener("keydown", (e) => {
    if ((e.ctrlKey || e.metaKey) && e.key === "k") {
      e.preventDefault();
      if (modal.classList.contains("open")) {
        closeSearch();
      } else {
        openSearch();
      }
    }
    if (e.key === "Escape" && modal.classList.contains("open")) {
      closeSearch();
    }
  });

  // Load search index
  async function loadSearchIndex() {
    if (searchIndex) return;
    try {
      const res = await fetch("/search-index.json");
      searchIndex = await res.json();
    } catch {
      searchIndex = [];
    }
  }

  // Search input handler
  input?.addEventListener("input", () => {
    const query = input.value.trim().toLowerCase();
    focusedIndex = -1;
    if (!query || !searchIndex) {
      results.innerHTML = "";
      return;
    }
    const matched = searchIndex
      .filter(
        (item) =>
          item.title.toLowerCase().includes(query) ||
          item.content.toLowerCase().includes(query)
      )
      .slice(0, 10);

    if (matched.length === 0) {
      results.innerHTML =
        '<div class="search-no-results">No results found.</div>';
      return;
    }

    results.innerHTML = matched
      .map((item) => {
        const excerpt = getExcerpt(item.content, query);
        return `<a href="${item.url}" class="search-result-item">
          <div class="search-result-title">${highlightMatch(item.title, query)}</div>
          <div class="search-result-excerpt">${excerpt}</div>
        </a>`;
      })
      .join("");
  });

  // Keyboard navigation in results
  input?.addEventListener("keydown", (e) => {
    const items = results.querySelectorAll(".search-result-item");
    if (e.key === "ArrowDown") {
      e.preventDefault();
      focusedIndex = Math.min(focusedIndex + 1, items.length - 1);
      updateFocus(items);
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      focusedIndex = Math.max(focusedIndex - 1, 0);
      updateFocus(items);
    } else if (e.key === "Enter" && focusedIndex >= 0 && items[focusedIndex]) {
      items[focusedIndex].click();
    }
  });

  function updateFocus(items) {
    items.forEach((item, i) => {
      item.classList.toggle("focused", i === focusedIndex);
    });
  }

  function getExcerpt(content, query) {
    const index = content.toLowerCase().indexOf(query);
    if (index === -1) return content.slice(0, 120) + "...";
    const start = Math.max(0, index - 40);
    const end = Math.min(content.length, index + query.length + 80);
    let excerpt = "";
    if (start > 0) excerpt += "...";
    excerpt += content.slice(start, end);
    if (end < content.length) excerpt += "...";
    return highlightMatch(excerpt, query);
  }

  function highlightMatch(text, query) {
    if (!query) return text;
    const escaped = query.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    const regex = new RegExp(`(${escaped})`, "gi");
    return text.replace(regex, "<mark>$1</mark>");
  }
});
