let menu = document.querySelector(".menu");
let menuButton = document.querySelector(".toggle");
let active = document.querySelector(".active");
let skillsScreen = document.querySelector(".skillcon");
let skillClass = document.querySelector(".skills");
let overlay = document.querySelector(".overlay");
let scrollButton = document.querySelector(".scr");

menuButton.addEventListener("click", function () {
  menu.classList.toggle("active");
  menuButton.classList.toggle("active");
});

document.addEventListener("scroll", function () {
  showFunction();
});

scrollButton.addEventListener("click", function () {
  showFunction();
  document.getElementById("grid").scrollIntoView();
});

function showFunction() {
  skillsScreen.classList.add("AfterScroll");
  skillsScreen.classList.remove("BeforeScroll");
}
