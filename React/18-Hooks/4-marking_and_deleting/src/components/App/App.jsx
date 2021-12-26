import React, { useState } from "react";
import Checkbox from "../Checkbox/Checkbox";
import "./App.css";

const LIST = ["one", "two", "three", "four", "five"];

function App() {
  const [checkedArr, setChecked] = useState(
    LIST.map((item) => {
      return [item, false];
    })
  );

  const handleDelete = () => {
    console.log(checkedArr);
    setChecked(checkedArr.filter((item) => !item[1]));
  };

  const handleReset = () => {
    setChecked(
      LIST.map((item) => {
        return [item, false];
      })
    );
  };

  function toggleChecked(e) {
    const title = e.target.name;
    const currIndex = checkedArr.findIndex((item) => {
      return item[0] === title;
    });
    console.log("currIndex", currIndex);
    setChecked((prevChecked) => {
      const tempArr = [...prevChecked];
      tempArr[currIndex] = [title, !tempArr[currIndex][1]];
      return tempArr;
    });
  }

  function generateItems() {
    console.log(checkedArr);
    return checkedArr.map((item, i) => (
      <Checkbox
        label={item[0]}
        checked={item[1]}
        key={i}
        toggleChecked={toggleChecked}
      />
    ));
  }

  return (
    <div className="App">
      <button onClick={handleDelete}>Delete</button>
      <button onClick={handleReset}>Reset</button>
      {generateItems()}
    </div>
  );
}

export default App;
