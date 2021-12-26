import React, { useState } from "react";
import TimeInput from "../TimeInput/TimeInput";
import "./App.css";

const MILLISECOND_RATIO = {
  seconds: 1000,
  minutes: 60000,
  hours: 3600000,
};

function App() {
  const [milliseconds, setMilliseconds] = useState(0);

  const handleChange = (timeMS) => {
    setMilliseconds(timeMS);
  };

  const generateInputs = () => {
    return ["seconds", "minutes", "hours"].map((unit) => (
      <TimeInput
        title={unit}
        milliseconds={milliseconds}
        ratio={MILLISECOND_RATIO[unit]}
        changeHandler={handleChange}
      />
    ));
  };

  const inputs = generateInputs();
  return <div className="App">{inputs}</div>;
}

export default App;
