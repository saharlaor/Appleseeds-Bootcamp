import React, { useEffect, useState } from "react";
import swapi from "../../api/swapi";
import "./App.css";

function App() {
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    (async () => {
      const {
        data: { title, director },
      } = await swapi.get();
      setMovie({ title, director });
    })();
  }, []);

  if (!movie) return <div className="App"></div>;
  return (
    <div className="App">
      <div className="title">Title: {movie.title}</div>
      <div className="title">Director: {movie.director}</div>
    </div>
  );
}

export default App;
