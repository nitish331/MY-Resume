const menu = document.querySelector("#menu-btn");
const header = document.querySelector(".header");
menu.addEventListener("click", function () {
  menu.classList.toggle("fa-times");
  header.classList.toggle("active");
});

const theme = document.querySelector("#theme-toggler");
theme.addEventListener("click", function () {
  theme.classList.toggle("fa-sun");
  if (theme.classList.contains("fa-sun")) {
    document.body.classList.add("active");
  } else {
    document.body.classList.remove("active");
  }
});
