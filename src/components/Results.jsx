import React, { useState, useEffect } from "react";
import Edit from "./Edit";
import { RatePointsContext } from "./PointsContainer";

const Results = ({ value }) => {
  const { rate, text } = value;
  const [data, setData] = useState([{ rate: null, text: null }]);
  const [results, setResults] = useState({ total: 0, avg: 0 });

  const calculateAverage = (data) => {
    let sum = 0;
    const arr = [...data];
    arr.map((el) => {
      sum += el.rate;
    });
    let avg = sum / data.length;
  };

  const calculateData = () => {
    let arr = [...data];
    arr = arr.filter((el) => el.rate !== null);
    arr.push({ rate, text });
    setData(arr);
    console.log(data);
  };

  useEffect(() => {
    console.log(data.length);
    calculateData();
  }, [rate, text]);

  return (
    <div>
      <h3>Results {results.total}</h3>
      <h4>Average Rating {results.avg}</h4>
      <div>
        <span>
          {data.length > 1 ? (
            data.map((el, index) => (
              <div key={index}>
                <ul>
                  <li>
                    {el.rate} {el.text} <Edit />
                  </li>
                </ul>
              </div>
            ))
          ) : (
            <>No data</>
          )}
        </span>
        <span></span>
      </div>
    </div>
  );
};

export default React.memo(Results);
