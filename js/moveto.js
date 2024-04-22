"use strict";
const moveTo = new MoveTo();
const linkArray = document.querySelectorAll(".nav-a");

linkArray.forEach((item) => {
  item.addEventListener("click", handleClick);
});

function handleClick(e) {
  e.preventDefault();

  console.log(this);
  const scrollElement = document.querySelector(this.getAttribute("href"));

  moveTo.move(scrollElement);
}
