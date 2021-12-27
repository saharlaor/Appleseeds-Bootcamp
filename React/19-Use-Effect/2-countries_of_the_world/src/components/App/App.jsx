import React, { useEffect, useState } from "react";
import countriesAPI from "../../api/countriesAPI";
import "./App.css";

function App() {
  const [countries, setCountries] = useState(null);
  const [term, setTerm] = useState("");

  useEffect(() => {
    (async () => {
      const { data } = await countriesAPI.get();
      console.log(`data`, data);
      setCountries(data.map((country) => [country.name, country.alpha2Code]));
    })();
  }, []);

  const displayCountries = () => {
    const filteredCountries = countries.filter((country) =>
      country[0].toLowerCase().startsWith(term.toLowerCase())
    );
    return filteredCountries.map((country) => (
      <li key={country[1]}>{country[0]}</li>
    ));
  };

  if (!countries) return <div className="App"></div>;
  return (
    <div className="App">
      <input
        type="text"
        value={term}
        onChange={(e) => setTerm(e.target.value)}
      />
      <ul>{displayCountries()}</ul>
    </div>
  );
}

export default App;
