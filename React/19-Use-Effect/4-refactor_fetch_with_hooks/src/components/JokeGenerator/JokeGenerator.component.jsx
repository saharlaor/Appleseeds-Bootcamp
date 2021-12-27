import React, { useEffect, useState } from "react";
import chuckNorris from "../../api/chuckNorris";
import Categories from "../Categories/Categories.component";

const JokeGenerator = () => {
  const [joke, setJoke] = useState("");
  const [categories, setCategories] = useState([]);
  const [category, setCategory] = useState(false);

  useEffect(() => {
    (async () => {
      const data = await getCategories();
      setCategories(data);
    })();
  }, []);

  const getCategories = async () => {
    const { data } = await chuckNorris.get("/jokes/categories");
    return ["Pick a category", ...data];
  };

  const handleGetJoke = async () => {
    let uri = "/jokes/random";
    if (category) uri += `?category=${category}`;
    const { data } = await chuckNorris.get(uri);
    setJoke(data.value);
  };

  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
  };

  console.log(`categories`, categories);
  return (
    <>
      <button onClick={handleGetJoke}>Get Joke</button>
      {categories.length && (
        <Categories
          categories={categories}
          handleSelectChange={handleCategoryChange}
        />
      )}
      <div className="joke-text">{joke}</div>
    </>
  );
};

export default JokeGenerator;
