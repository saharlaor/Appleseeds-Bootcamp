const APIKEY = "61d09e55";
const MOVIES_API = `https://www.omdbapi.com/?apikey=${APIKEY}`;

const moviesContainerEl = document.querySelector(".movies__container");
const [searchTxt, searchBtn] =
  document.querySelector(".search__container").children;
const errorEl = document.querySelector(".error__container");

const getMovieData = async (title) => {
  const reqUrl = `${MOVIES_API}&t=${title}`;
  try {
    const req = await fetch(reqUrl);
    if (req.status === 404) {
      throw new Error(`The movie ${title} Not found`);
    }
    const data = await req.json();
    return {
      title: data.Title,
      poster: data.Poster,
      genre: data.Genre,
      year: data.Year,
      plot: data.Plot,
      director: data.Director,
      actors: data.Actors,
      ratings: data.Ratings,
    };
  } catch (err) {
    return err;
  }
};

const getMovieCard = (data) => {
  const cardEl = document.createElement("div");
  const imgEl = document.createElement("img");
  const headingEl = document.createElement("h3");
  const infoEl = document.createElement("span");

  cardEl.classList.add("card");

  imgEl.setAttribute("src", data.poster);

  headingEl.textContent = `${data.title}`;

  const fullInfo = `Genre: ${data.genre}
  Year: ${data.year}<br>
  Plot: ${data.plot}<br>
  Director: ${data.director}<br>
  Actors: ${data.actors}<br>
  Ratings: ${data.ratings
    .map((rating) => "<br>&emsp; " + rating.Source + ": " + rating.Value)
    .join("")}`;
  infoEl.innerHTML = fullInfo;
  cardEl.append(imgEl, headingEl, infoEl);
  return cardEl;
};

const searchMovie = async (_) => {
  const movieTitle = searchTxt.value;
  searchTxt.value = "";
  errorEl.textContent = "";

  try {
    const movieData = await getMovieData(movieTitle);
    if (movieData instanceof Error) {
      throw movieData;
    }
    const movieCard = getMovieCard(movieData);

    [...moviesContainerEl.children].forEach((element) => {
      element.remove();
    });
    moviesContainerEl.append(movieCard);
  } catch (err) {
    errorEl.textContent = err;
  }
  searchTxt.focus();
};

function main() {
  searchBtn.addEventListener("click", searchMovie);
  searchTxt.addEventListener(
    "keydown",
    (e) => e.key === "Enter" && searchMovie()
  );
}

main();
