const h2El = document.querySelector("h2");
const pEl = document.querySelector("p");

document.querySelector("button").addEventListener("click", async function (e) {
  const req = await fetch("https://api.jokes.one/jod");
  const reqBody = await req.json();
  const joke = reqBody.contents.jokes[0].joke;
  h2El.innerText = joke.title;
  pEl.innerText = joke.text;
});
