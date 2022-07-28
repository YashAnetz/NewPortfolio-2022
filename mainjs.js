let menu = document.querySelector(".menu");
let menuButton = document.querySelector(".toggle");
let active = document.querySelector(".active");
let skillsScreen = document.querySelector(".skillcon");
let skillClass = document.querySelector(".skills");
let overlay = document.querySelector(".overlay");
let scrollButton = document.querySelector(".scr");
let frontscreen = document.querySelector(".showcase");
let projectbutton = document.querySelector(".topro");
let loading = document.querySelector(".loading");

menuButton.addEventListener("click", function () {
  menu.classList.toggle("active");
  menuButton.classList.toggle("active");
});

document.addEventListener("scroll", function () {
  showFunction();
});

scrollButton.addEventListener("click", function () {
  showFunction();
  document.getElementById("first").scrollIntoView();
});

function showFunction() {
  skillsScreen.classList.add("AfterScroll");
  skillsScreen.classList.remove("BeforeScroll");
}
