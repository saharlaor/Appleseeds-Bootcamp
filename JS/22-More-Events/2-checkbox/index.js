const checkBox = document.querySelector("input[type=checkbox]");
const imgEl = document.querySelector("img");

checkBox.addEventListener("input", (e) => imgEl.classList.toggle("show"));
