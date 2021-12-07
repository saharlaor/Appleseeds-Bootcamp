const h2El = document.querySelector("h2");
const pEl = document.querySelector("p");

document.querySelector("button").addEventListener("click", (e) => {
  fetch("https://api.jokes.one/jod")
    .then((data) => data.json())
    .then((data) => {
      h2El.innerText = data.contents.jokes[0].joke.title;
      pEl.innerText = data.contents.jokes[0].joke.text;
    });
});
