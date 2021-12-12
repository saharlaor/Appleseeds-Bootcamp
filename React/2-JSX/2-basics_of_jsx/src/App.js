import logo from "./logo.svg";
import "./App.css";

function App() {
  const data = ["hello", "world"];

  const number1 = 5;
  const number2 = 6;

  const string = "I love React!";
  return (
    <div className="App">
      <main>
        <p>
          {data.map((str) => str[0].toUpperCase() + str.slice(1)).join(" ")}
        </p>
        <p>{`${number1} + ${number2} = ${number1 + number2}`}</p>
        <p>{`The string’s length is ${string.length}`}</p>
      </main>
    </div>
  );
}

export default App;
