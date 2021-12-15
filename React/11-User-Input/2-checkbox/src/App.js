import "./App.css";
import CheckBox from "./components/CheckBox";

function App() {
  return (
    <div className="App">
      <CheckBox content="I read the terms of the app" checked={false} />
      <CheckBox content="I accept the terms of the app" checked={false} />
      <CheckBox content="I want to get the weekly news letter" checked={true} />
      <CheckBox content="I want to get sales and offers" checked={true} />
    </div>
  );
}

export default App;
