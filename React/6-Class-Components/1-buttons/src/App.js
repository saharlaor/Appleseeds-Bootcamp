import "./App.css";
import Button from "./components/Button";

function App() {
  return (
  <div className="App">
    <Button content="Important" bold="true" />
    <Button content="Not Important" />
  </div>
  );
}

export default App;
