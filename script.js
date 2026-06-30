const header = document.querySelector(".site-header");
const backToTop = document.querySelector(".back-to-top");

function syncScrollState() {
  const isAwayFromTop = window.scrollY > 24;
  header.classList.toggle("is-scrolled", isAwayFromTop);
  backToTop.classList.toggle("is-visible", window.scrollY > 520);
}

window.addEventListener("scroll", syncScrollState, { passive: true });
window.addEventListener("load", syncScrollState);

backToTop.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
