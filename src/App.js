import logo from "./logo.svg";
import "./App.css";
import PointsContainer from "./components/PointsContainer";
import Results from "./components/Results";
import { useState } from "react";

function App() {
  const [text, setText] = useState("");
  const [value, setValue] = useState({ rate: 0, text: "" });

  const getValue = ({ rate, text }) => {
    console.log(rate, text);
    setValue({ rate, text });
  };
  return (
    <div className="App">
      <header>Feedback Application</header>
      <PointsContainer getValue={(val) => getValue(val)} />
      <Results value={value} />
    </div>
  );
}

export default App;
