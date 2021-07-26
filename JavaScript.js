window.addEventListener("scroll", function () {
  let header = document.querySelector("header");
  let windowPosition = window.scrollY > 0;
  header.classList.toggle("scrolling-active", windowPosition);
});

const hamburger = document.getElementById("hamburger");
const nav_list = document.getElementById("nav_list");
const logo = document.getElementById("logo");
const second_nav = document.querySelector(".second_nav");
const cos=document.querySelector("nav");

hamburger.addEventListener("click", () => {
  nav_list.classList.toggle("cos");
  second_nav.classList.toggle("cos");
});

