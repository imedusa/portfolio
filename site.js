const siteRoot = new URL("./", document.currentScript.src);

const sharedHeader = `
<header class="site-header" id="page-top">
  <nav aria-label="Primary navigation">
    <a class="site-name" href="${siteRoot}index.html">Medini Narasimha Bailkeri</a>
    <span class="site-nav-links">
      <a href="${siteRoot}drawings.html" data-page="drawings.html">drawings</a>
      <a href="${siteRoot}animations.html" data-page="animations.html">animations</a>
      <a href="${siteRoot}blogs.html" data-page="blogs.html">blogs</a>
    </span>
  </nav>
  <p class="last-updated">last updated Sept 2026</p>
</header>`;

const sharedBlogFooter = `
<footer class="site-footer">
  <span><a href="${siteRoot}index.html">← back to about</a></span>
  <span class="blog-feedback">
    find something you think is wrong? <a href="mailto:medininb02@gmail.com">email me</a>
  </span>
</footer>`;

document.querySelectorAll("[data-shared-header]").forEach((placeholder) => {
  placeholder.outerHTML = sharedHeader;
});

document.querySelectorAll("[data-blog-footer]").forEach((placeholder) => {
  placeholder.outerHTML = sharedBlogFooter;
});

if (document.querySelector(".article-document, .blog-document")) {
  document.body.classList.add("blog-page");
}

const currentPath = window.location.pathname;
const currentPage = currentPath.includes("/articles/")
  ? "blogs.html"
  : currentPath.split("/").pop() || "index.html";
const currentLink = document.querySelector(`[data-page="${currentPage}"]`);
currentLink?.setAttribute("aria-current", "page");
