/**
 * Simple enhancements for the static site.
 */
(function () {
  const yearEl = document.getElementById("footer-year");
  if (yearEl) {
    yearEl.textContent = `© ${new Date().getFullYear()} Simple Task Manager`;
  }
})();
