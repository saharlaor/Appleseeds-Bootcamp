import React, { useEffect, useState } from "react";
import algolia from "../../api/algolia";
import Spinner from "../Spinner/Spinner";
import "./App.css";

function App() {
  const [query, setQuery] = useState("hooks");
  const [term, setTerm] = useState("hooks");
  const [results, setResults] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    (async () => {
      setIsLoading(true);
      const {
        data: { hits },
      } = await algolia.get("", {
        params: {
          query: query,
        },
      });
      setResults(
        hits.map((hit) => {
          return { title: hit.title, url: hit.url, id: hit.objectID };
        })
      );
      setIsLoading(false);
    })();
  }, [query]);

  const generateListItems = () => {
    return results.map((item) => {
      return (
        <li key={item.id}>
          <a href={item.url}>{item.title}</a>
        </li>
      );
    });
  };

  return (
    <div className="App">
      <input
        type="text"
        value={term}
        onChange={(e) => setTerm(e.target.value)}
      />
      <button onClick={() => setQuery(term)}>Search</button>
      {isLoading && <Spinner />}
      <ul>{generateListItems()}</ul>
    </div>
  );
}

export default App;
