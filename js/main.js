$(function () {
  var mixer = mixitup(".gallery__items");
});

document.querySelector(".menu__btn").addEventListener("click", function () {
  this.classList.toggle("active");
  document.querySelector(".menu__list").classList.toggle("menu__list--active");
});

document.querySelector(".menu__list").addEventListener("click", function () {
  this.classList.toggle("active");
  document.querySelector(".menu__list").classList.toggle("menu__list--active");
});

var header = document.querySelector(".menu");
var stickyOffset = header.offsetTop;

window.onscroll = function showHeader() {
  if (window.scrollY > stickyOffset) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
};
