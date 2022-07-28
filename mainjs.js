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
let ProjectScreen = document.querySelector(".projects")


//Buttons
let allb = document.querySelector(".al");
let webb = document.querySelector(".we");
let jsb = document.querySelector(".js");
let androidb = document.querySelector(".an");
let pyb = document.querySelector(".py");
let gameb = document.querySelector(".ga");

//Screens
let alls = document.querySelector(".all");
let webs = document.querySelector(".web");
let jsbs = document.querySelector(".javascript");
let androids = document.querySelector(".android");
let pys = document.querySelector(".python");
let games = document.querySelector(".gaming");

menuButton.addEventListener("click", function () {
  menu.classList.toggle("active");
  menuButton.classList.toggle("active");
});

document.addEventListener("scroll", function () {
  showFunction();
  showFunction2();
});

scrollButton.addEventListener("click", function () {
  showFunction();
  document.getElementById("first").scrollIntoView();
});

function showFunction() {
  skillsScreen.classList.add("AfterScroll");
  skillsScreen.classList.remove("BeforeScroll");
}

function showFunction() {
  ProjectScreen.classList.add("AfterScroll");
  ProjectScreen.classList.remove("BeforeScroll");
}



allb.addEventListener("click", function () {
  console.log("hi");
  alls.classList.remove("hide");
  webs.classList.add("hide");
  jsbs.classList.add("hide");
  androids.classList.add("hide");
  games.classList.add("hide");
  pys.classList.add("hide");
});

webb.addEventListener("click", function () {
  console.log("hi");
  alls.classList.add("hide");
  webs.classList.remove("hide");
  jsbs.classList.add("hide");
  androids.classList.add("hide");
  games.classList.add("hide");
  pys.classList.add("hide");
});

jsb.addEventListener("click", function () {
  console.log("hi");
  alls.classList.add("hide");
  webs.classList.add("hide");
  jsbs.classList.remove("hide");
  androids.classList.add("hide");
  games.classList.add("hide");
  pys.classList.add("hide");
});

androidb.addEventListener("click", function () {
  console.log("hi");
  alls.classList.add("hide");
  webs.classList.add("hide");
  jsbs.classList.add("hide");
  androids.classList.remove("hide");
  games.classList.add("hide");
  pys.classList.add("hide");
});

pyb.addEventListener("click", function () {
  console.log("hi");
  alls.classList.add("hide");
  webs.classList.add("hide");
  jsbs.classList.add("hide");
  androids.classList.add("hide");
  games.classList.add("hide");
  pys.classList.remove("hide");
});

gameb.addEventListener("click", function () {
  console.log("hi");
  alls.classList.add("hide");
  webs.classList.add("hide");
  jsbs.classList.add("hide");
  androids.classList.add("hide");
  games.classList.remove("hide");
  pys.classList.add("hide");
});
