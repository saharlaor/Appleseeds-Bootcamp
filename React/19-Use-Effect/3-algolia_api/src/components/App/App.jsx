import React, { useEffect, useState } from "react";
import algolia from "../../api/algolia";
import "./App.css";

function App() {
  const [query, setQuery] = useState("hooks");
  const [term, setTerm] = useState("hooks");
  const [results, setResults] = useState([]);

  useEffect(() => {
    (async () => {
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
      console.log(`hits`, hits);
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
      <ul>{generateListItems()}</ul>
    </div>
  );
}

export default App;
