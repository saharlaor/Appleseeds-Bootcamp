const GITHUB_URL = "https://api.github.com/users/";

const users = [];

const usersContainerEl = document.querySelector(".users__container");
const [searchTxt, searchBtn] =
  document.querySelector(".search__container").children;

const getUserData = async (username) => {
  const reqUrl = `${GITHUB_URL}${username}`;
  const req = await fetch(reqUrl);
  const data = await req.json();
  return {
    username: username,
    displayName: data.name,
    image: data.avatar_url,
    url: data.html_url,
    publicRepos: data.public_repos,
  };
};

const getUserCard = (data) => {
  const cardEl = document.createElement("a");
  const imgEl = document.createElement("img");
  const headingEl = document.createElement("h3");
  const reposEl = document.createElement("span");

  cardEl.classList.add("card");
  cardEl.setAttribute("href", data.url);

  imgEl.setAttribute("src", data.image);

  headingEl.textContent = `${data.username} (${data.displayName})`;

  reposEl.textContent = data.publicRepos;

  cardEl.append(imgEl, headingEl, reposEl);
  return cardEl;
};

const searchUser = async (_) => {
  const username = searchTxt.value;
  const userData = await getUserData(username);
  const userCard = getUserCard(userData);
  usersContainerEl.append(userCard);
};

function main() {
  searchBtn.addEventListener("click", searchUser);
}

main();
