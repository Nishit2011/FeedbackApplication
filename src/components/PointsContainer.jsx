import React, { useEffect, useState } from "react";

import Form from "./Form";

const PointsContainer = ({ getValue }) => {
  const [rate, setRate] = useState(null);
  const [isActive, setIsActive] = useState(false);
  const getItem = (e) => {
    e.preventDefault();
    setRate(e.target.id);
  };

  const renderItems = () => {
    let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    return arr.map((el, index) => {
      return (
        <li
          key={index}
          onClick={(e) => getItem(e)}
          id={el}
          className={el === Number(rate) ? "active" : "inactive"}
        >
          {el}
        </li>
      );
    });
  };

  return (
    <div className="container">
      <h4>Please provide a rating to our service</h4>

      <ul className="points-list">{renderItems()}</ul>
      <Form getValue={(val) => getValue(val)} rate={rate} />
    </div>
  );
};

export default React.memo(PointsContainer);
