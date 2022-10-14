import React, { useEffect, useState } from "react";
import Button from "../reusables/Button";
import Input from "../reusables/Input";
import Form from "./Form";
import Results from "./Results";

const PointsContainer = ({ getValue }) => {
  const [rate, setRate] = useState();
  const getItem = (e) => {
    e.preventDefault();
    setRate(e.target.id);
  };

  return (
    <div>
      <h3>Please provide a rating to our service</h3>

      <ul onClick={(e) => getItem(e)}>
        <li id={1}>1</li>
        <li id={2}>2</li>
        <li id={3}>3</li>
        <li id={4}>4</li>
        <li id={5}>5</li>
        <li id={6}>6</li>
        <li id={7}>7</li>
        <li id={8}>8</li>
        <li id={9}>9</li>
        <li id={10}>10</li>
      </ul>
      <Form getValue={(val) => getValue(val)} rate={rate} />
    </div>
  );
};

export default React.memo(PointsContainer);
