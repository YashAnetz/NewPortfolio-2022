let introbutton = document.querySelector(".introbutton");
let timelinebutton = document.querySelector(".timelinebutton");

let Intro = document.querySelector(".Intro");
let tl = document.querySelector(".tl");

introbutton.addEventListener("click", function () {
  console.log("intro");
  Intro.classList.remove("hide");
  tl.classList.add("hide");
});

timelinebutton.addEventListener("click", function () {
  console.log("tl");
  Intro.classList.add("hide");
  tl.classList.remove("hide");
});
