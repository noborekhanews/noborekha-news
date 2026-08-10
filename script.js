function toggleMenu() {
  const menu = document.getElementById("navMenu");
  if (menu) {
    menu.classList.toggle("open");
  }
}

document.addEventListener("DOMContentLoaded", function () {
  const year = document.getElementById("year");

  if (year) {
    year.textContent = new Date().getFullYear();
  }

  const links = document.querySelectorAll("#navMenu a");

  links.forEach(function (link) {
    link.addEventListener("click", function () {
      const menu = document.getElementById("navMenu");

      if (menu) {
        menu.classList.remove("open");
      }
    });
  });
});
