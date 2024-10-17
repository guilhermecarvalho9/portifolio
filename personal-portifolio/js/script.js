const sections = document.querySelectorAll("main section");
const breadcrumbContainer = document.querySelector(".breadcrumb-container");
const breadcrumbLinks = document.querySelectorAll(".breadcrumb-item a");

function updateActiveBreadcrumb() {
  let index = sections.length;

  while (--index && window.scrollY + 100 < sections[index].offsetTop) {}

  breadcrumbLinks.forEach(link => link.classList.remove("active"));
  breadcrumbLinks[index].classList.add("active");
}

function toggleShrinkBreadcrumb() {
  if (window.scrollY > 50) {
    breadcrumbContainer.classList.add("shrink");
  } else {
    breadcrumbContainer.classList.remove("shrink");
  }
}

window.addEventListener("scroll", () => {
  updateActiveBreadcrumb();
  toggleShrinkBreadcrumb();
});
