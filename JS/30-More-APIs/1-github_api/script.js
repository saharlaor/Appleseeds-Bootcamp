const GITHUB_URL = "https://api.github.com/users/";

const users = [];

const usersContainerEl = document.querySelector(".users__container");
const [searchTxt, searchBtn] =
  document.querySelector(".search__container").children;
const errorEl = document.querySelector(".error__container");

const getUserData = async (username) => {
  const reqUrl = `${GITHUB_URL}${username}`;
  try {
    const req = await fetch(reqUrl);
    if (req.status === 404) {
      throw new Error(`User ${username} Not found`);
    }
    const data = await req.json();
    return {
      username: username,
      displayName: data.name,
      image: data.avatar_url,
      url: data.html_url,
      publicRepos: data.public_repos,
    };
  } catch (err) {
    return err;
  }
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
  errorEl.textContent = "";
  const username = searchTxt.value;
  searchTxt.value = "";
  if (users.includes(username)) {
    return;
  } else {
    users.push(username);
  }
  try {
    const userData = await getUserData(username);
    if (userData instanceof Error) {
      throw userData;
    }
    const userCard = getUserCard(userData);
    usersContainerEl.append(userCard);
  } catch (err) {
    errorEl.textContent = err;
  }
  searchTxt.focus();
};

function main() {
  searchBtn.addEventListener("click", searchUser);
  searchTxt.addEventListener(
    "keydown",
    (e) => e.key === "Enter" && searchUser()
  );
}

main();
