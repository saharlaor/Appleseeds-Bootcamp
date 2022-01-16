import React, { useState } from "react";
import "./Home.css";

function Home() {
  const [location, setLocation] = useState("");
  const [message1, setMessage1] = useState("");
  const [message2, setMessage2] = useState("");

  const handleLocationChange = (e) => {
    setLocation(e.target.value);
  };

  const handleSearchClick = (e) => {
    e.preventDefault();

    setMessage1("Loading...");
    setMessage2("");

    fetch("http://localhost:8001/api/weather?address=" + location).then(
      (response) => {
        response.json().then((data) => {
          if (data.error) {
            setMessage1(data.error);
          } else {
            setMessage1(data.location);
            setMessage2(data.forecast);
          }
        });
      }
    );
  };

  return (
    <div className="Home">
      <p>Use this site to get your weather!</p>
      <form>
        <input
          placeholder="Location"
          value={location}
          onChange={handleLocationChange}
        />
        <button onClick={handleSearchClick}>Search</button>
      </form>
      <p id="message-1">{message1}</p>
      <p id="message-2">{message2}</p>
    </div>
  );
}

export default Home;
