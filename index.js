document.addEventListener("DOMContentLoaded", () => {
  const menuLinks = document.querySelectorAll(".header__menu-link");

  menuLinks.forEach((link) => {
    link.addEventListener("click", (event) => {
      menuLinks.forEach((el) =>
        el.classList.remove("header__menu-link--active")
      );
      event.target.classList.add("header__menu-link--active");
    });
  });
});
