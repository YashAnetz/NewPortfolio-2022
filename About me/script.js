let introbutton = document.querySelector(".introbutton");
let timelinebutton = document.querySelector(".timelinebutton");
let edubutton = document.querySelector(".edubutton");
let expbutton = document.querySelector(".expbutton");
let skillbutton = document.querySelector(".skillbutton");
let certbutton = document.querySelector(".certbutton");
let probutton = document.querySelector(".probutton");
let hobbutton = document.querySelector(".hobbutton");

let text = document.querySelector("h1");
let night = document.querySelector(".night");

let Intro = document.querySelector(".Intro");
let tl = document.querySelector(".tl");
let edu = document.querySelector(".edu");
let exp = document.querySelector(".Exp");
let skillss = document.querySelector(".skillss");
let cert = document.querySelector(".cert");
let pro = document.querySelector(".pro");
let hobby = document.querySelector(".hobby");

introbutton.addEventListener("click", function () {
  console.log("intro");
  Intro.classList.remove("hide");
  edu.classList.add("hide");
  cert.classList.add("hide");
  exp.classList.add("hide");
  hobby.classList.add("hide");
  pro.classList.add("hide");
  skillss.classList.add("hide");
  tl.classList.add("hide");
});

timelinebutton.addEventListener("click", function () {
  console.log("tl");
  Intro.classList.add("hide");
  exp.classList.add("hide");
  edu.classList.add("hide");
  pro.classList.add("hide");
  cert.classList.add("hide");
  hobby.classList.add("hide");
  skillss.classList.add("hide");
  tl.classList.remove("hide");
});

edubutton.addEventListener("click", function () {
  Intro.classList.add("hide");
  tl.classList.add("hide");
  hobby.classList.add("hide");
  cert.classList.add("hide");
  pro.classList.add("hide");
  skillss.classList.add("hide");
  exp.classList.add("hide");
  edu.classList.remove("hide");
});

expbutton.addEventListener("click", function () {
  Intro.classList.add("hide");
  tl.classList.add("hide");
  pro.classList.add("hide");
  cert.classList.add("hide");
  hobby.classList.add("hide");
  edu.classList.add("hide");
  skillss.classList.add("hide");
  exp.classList.remove("hide");
});

skillbutton.addEventListener("click", function () {
  Intro.classList.add("hide");
  tl.classList.add("hide");
  edu.classList.add("hide");
  cert.classList.add("hide");
  pro.classList.add("hide");
  hobby.classList.add("hide");
  exp.classList.add("hide");
  skillss.classList.remove("hide");
});

certbutton.addEventListener("click", function () {
  Intro.classList.add("hide");
  tl.classList.add("hide");
  edu.classList.add("hide");
  exp.classList.add("hide");
  hobby.classList.add("hide");
  skillss.classList.add("hide");
  pro.classList.add("hide");
  cert.classList.remove("hide");
});

probutton.addEventListener("click", function () {
  Intro.classList.add("hide");
  tl.classList.add("hide");
  edu.classList.add("hide");
  exp.classList.add("hide");
  skillss.classList.add("hide");
  hobby.classList.add("hide");
  cert.classList.add("hide");
  pro.classList.remove("hide");
});

hobbutton.addEventListener("click", function () {
  Intro.classList.add("hide");
  tl.classList.add("hide");
  edu.classList.add("hide");
  exp.classList.add("hide");
  skillss.classList.add("hide");
  cert.classList.add("hide");
  pro.classList.add("hide");
  hobby.classList.remove("hide");
});
