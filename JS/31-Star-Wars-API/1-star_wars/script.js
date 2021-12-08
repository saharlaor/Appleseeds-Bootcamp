const PROXY_URL = "https://intense-mesa-62220.herokuapp.com/";
const API_URL = "https://swapi.dev/api/people/";
const TABLE_TITLE_KEYS = {
  name: "",
  height: "",
  hair: "",
  homeworld: "",
  name: "",
  population: "",
};

const getPlanet = async (url) => {
  try {
    const req = await fetch(`${PROXY_URL}${url}`);
    if (req.status === 404) {
      throw new Error(`Non-existent planet in the url ${url}`);
    }
    const data = await req.json();
    return data;
  } catch (err) {
    return err;
  }
};

const getCharacter = async (index) => {
  try {
    const req = await fetch(`${PROXY_URL}${API_URL}${index}`);
    if (req.status === 404) {
      throw new Error(`Non-existent person index ${index}`);
    }
    const data = await req.json();

    const planet = await getPlanet(data.homeworld);
    if (planet instanceof Error) {
      throw planet;
    }

    return {
      name: data.name,
      height: data.height,
      hair: data.hair_color,
      homeworld: {
        name: planet.name,
        population: planet.population,
      },
    };
  } catch (err) {
    return err;
  }
};

const fetchCharacters = (characters) => {
  // Push characters 1-10 from the api
  let retVal;
  retVal = new Promise((resolve, reject) => {
    const characterArr = [...Array(10).keys()].map(async (i) => {
      const character = await getCharacter(i + 1);
      if (character instanceof Error) {
        reject(character);
      }
      return character;
    });
    resolve(characterArr);
  });

  return retVal;
};

const generateTable = (characters) => {
  // Construct a table
  const tableEl = document.createElement("table");
  const tHeadEl = document.createElement("thead");
  const tBodyEl = document.createElement("tbody");

  const trHeadEl = document.createElement("tr");
  ["name", "hair", "height", "planet name", "planet population"].forEach(
    (title) => {
      const thEl = document.createElement("th");
      thEl.textContent = title;
      trHeadEl.append(thEl);
    }
  );
  tHeadEl.append(trHeadEl);
  tableEl.append(tHeadEl);

  characters.forEach(async (character) => {
    const trEl = document.createElement("tr");
    const characterContent = await character;
    ["name", "hair", "height", "planet name", "planet population"].forEach(
      (title) => {
        const tdEl = document.createElement("td");
        const titleArr = title.split(" ");
        let content;
        if (titleArr.length === 1) {
          content = characterContent[titleArr[0]];
        } else {
          content = characterContent["homeworld"][titleArr[1]];
        }
        tdEl.textContent = content;
        trEl.append(tdEl);
      }
    );
    tBodyEl.append(trEl);
  });
  tableEl.append(tBodyEl);
  return tableEl;
};

const main = () => {
  const errorEl = document.querySelector(".error__container");
  const characters = [];

  fetchCharacters(characters)
    .then((arr) => {
      console.log(arr);
      document.body.append(generateTable(arr));
    })
    .catch((err) => (errorEl.textContent = err));
};

main();
