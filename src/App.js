import logo from "./logo.svg";
import "./App.css";
import PointsContainer from "./components/PointsContainer";
import Results from "./components/Results";
import { useState } from "react";

function App() {
  const [text, setText] = useState("");
  const [value, setValue] = useState([{ rate: 0, text: null }]);
  const [loading, setLoading] = useState(true);
  const [avg, setAvg] = useState(0);

  let total = 0;

  const getValue = ({ rate, text }) => {
    if (rate !== null) setLoading(false);
    let arr = [...value];
    arr.push({ rate: Number(rate), text });
    arr = arr.filter((el) => el.rate !== 0);
    arr.map((el) => (total += el.rate));
    let average = (total / arr.length).toFixed(2);
    setAvg(average);
    setValue(arr);
  };
  return (
    <div className="App">
      <header>Feedback Application</header>
      <PointsContainer getValue={(val) => getValue(val)} />

      {!loading ? <Results data={value} avg={avg} /> : <></>}
    </div>
  );
}

export default App;
