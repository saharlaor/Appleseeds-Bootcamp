let start_here = document.querySelector(".start-here");
let [outerUl, innerUl] = document.querySelectorAll("ul");
let title = document.querySelector("title");
let p = document.querySelector("p");

start_here.innerHTML = "main title";

innerUl.appendChild(document.createElement("li"));
innerUl.lastChild.innerHTML = "sub title 4";

console.log(outerUl.firstChild);
outerUl.removeChild(outerUl.lastElementChild);

title.innerHTML = "Master Of The Dom";

p.innerHTML = "Finland is Awesome";
