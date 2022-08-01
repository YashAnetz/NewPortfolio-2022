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

let projects = document.querySelector(".projects");

let youtubesectionandcontact = document.querySelector(
  ".youtubesectionandcontact"
);

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
let spotifyCard = document.querySelector(".spotify");

let spotifyLogo = document.querySelector(".spotifylogo");

//song buttons

let grey = document.querySelector(".s1");
let red = document.querySelector(".s2");
let yellow = document.querySelector(".s3");
let blue = document.querySelector(".s4");
let green = document.querySelector(".s5");

let spotify = document.querySelector(".spot");

menuButton.addEventListener("click", function () {
  menu.classList.toggle("active");
  menuButton.classList.toggle("active");
});

scrollButton.addEventListener("click", function () {
  showFunction();
  showFunction2();
  showFunction3();
  document.getElementById("first").scrollIntoView();
});

document.addEventListener("scroll", showFunction());

function showFunction() {
  skillClass.classList.add("AfterScroll");
  skillClass.classList.remove("BeforeScroll");
}

function showFunction2() {
  projects.classList.add("AfterScroll");
  projects.classList.remove("BeforeScroll");
}

function showFunction3() {
  youtubesectionandcontact.classList.add("AfterScroll");
  youtubesectionandcontact.classList.remove("BeforeScroll");
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

grey.addEventListener("click", function () {
  console.log("hi");
  spotifyCard.style = " background-color: #3c3b3e; border: 2px #3c3b3e solid;";
  spotifyLogo.style = " background-color: #3c3b3e; box-shadow: none;";

  spotify.src =
    "https://open.spotify.com/embed/track/7BKLCZ1jbUBVqRi2FVlTVw?utm_source=generator&theme=0";
});

red.addEventListener("click", function () {
  console.log("hi");
  spotifyCard.style = " background-color:tomato; border: 2px tomato solid;";
  spotifyLogo.style = " background-color: tomato; box-shadow: none;";

  spotify.src =
    "https://open.spotify.com/embed/track/5d6Mjuu2uCGRPYpFjGpCX5?utm_source=generator";
});

yellow.addEventListener("click", function () {
  console.log("hi");

  spotifyCard.style = " background-color:#f0db4f;border: 2px #f0db4f solid;";
  spotifyLogo.style = " background-color: #f0db4f; box-shadow: none;";

  spotify.src =
    "https://open.spotify.com/embed/track/2dpaYNEQHiRxtZbfNsse99?utm_source=generator";
});

blue.addEventListener("click", function () {
  console.log("hi");

  spotifyCard.style = " background-color: #4b8bbe;border: 2px #4b8bbe solid;";
  spotifyLogo.style = " background-color: #4b8bbe; box-shadow: none;";

  spotify.src =
    "https://open.spotify.com/embed/track/3DamFFqW32WihKkTVlwTYQ?utm_source=generator";
});

green.addEventListener("click", function () {
  console.log("hi");

  spotifyCard.style = " background-color: #3ddc84;border: 2px #3ddc84 solid;";
  spotifyLogo.style = " background-color: #3ddc84; box-shadow: none;";

  spotify.src =
    "https://open.spotify.com/embed/track/34gCuhDGsG4bRPIf9bb02f?utm_source=generator";
});

function myFunction() {
  /* Copy the text inside the text field */
  navigator.clipboard.writeText("https://yashahire.netlify.app/");

  /* Alert the copied text */
  alert("📋Copied Site Link to Clipboard");
}
