import "./menu.js";

const nojsElements = document.querySelectorAll(".nojs");

nojsElements.forEach((element) => {
  element.classList.remove("nojs")
})
