const siteRoot = new URL("./", document.currentScript.src);

const sharedHeader = `
<header class="site-header">
  <nav aria-label="Primary navigation">
    <a class="site-name" href="${siteRoot}index.html">Medini Narasimha Bailkeri</a>
    <span class="site-nav-links">
      <a href="${siteRoot}drawings.html" data-page="drawings.html">drawings</a>
      <a href="${siteRoot}blogs.html" data-page="blogs.html">blogs</a>
    </span>
  </nav>
  <p class="last-updated">last updated Aug 2026</p>
</header>`;

document.querySelectorAll("[data-shared-header]").forEach((placeholder) => {
  placeholder.outerHTML = sharedHeader;
});

const currentPath = window.location.pathname;
const currentPage = currentPath.includes("/articles/")
  ? "blogs.html"
  : currentPath.split("/").pop() || "index.html";
const currentLink = document.querySelector(`[data-page="${currentPage}"]`);
currentLink?.setAttribute("aria-current", "page");
