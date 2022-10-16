import logo from "./logo.svg";
import "./App.css";
import PointsContainer from "./components/PointsContainer";
import Results from "./components/Results";
import { useEffect, useState, createContext } from "react";

export const EditedDataContext = createContext();

function App() {
  const [text, setText] = useState("");
  const [value, setValue] = useState([{ id: 0, rate: 0, text: null }]);
  const [loading, setLoading] = useState(true);
  const [avg, setAvg] = useState(0);
  const [editedData, setEditedData] = useState();

  let total = 0;

  const getValue = ({ rate, text }) => {
    if (rate !== null) setLoading(false);
    let arr = [...value];
    arr.push({ rate: Number(rate), text });
    arr = arr.filter((el) => el.rate !== 0);

    setValue(arr);
  };
  const calculateAvg = () => {
    const arr = [...value];
    console.log(arr);
    arr.map((el) => (total += el.rate));
    let average = (total / arr.length).toFixed(2);
    setAvg(average);
    console.log("avg---", average);
  };
  const deleteFeedback = (val) => {
    let arr = [...value];
    // console.log("val--", typeof val);
    arr = arr.filter((el) => Number(el.rate) !== val);
    console.log("delete arr--->", arr);
    setValue(arr);
  };

  const editFeedback = (item) => {
    setEditedData(item);
  };

  useEffect(() => {
    calculateAvg();
  }, [value]);

  return (
    <div className="App">
      <header>Feedback Application</header>
      <EditedDataContext.Provider value={editedData}>
        <PointsContainer getValue={(val) => getValue(val)} />

        {!loading ? (
          <Results
            data={value}
            avg={avg !== NaN ? avg : 0}
            deleteFeedbackFn={(item) => deleteFeedback(item)}
            editFeedbackFn={(item) => editFeedback(item)}
          />
        ) : (
          <></>
        )}
      </EditedDataContext.Provider>
    </div>
  );
}

export default App;
