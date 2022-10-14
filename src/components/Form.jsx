import React, { useState } from "react";
import Input from "../reusables/Input";
import Button from "../reusables/Button";
import { getValue } from "@testing-library/user-event/dist/utils";

const Form = ({ getValue, rate }) => {
  const [text, setText] = useState("");
  const getTextData = (e) => {
    e.preventDefault();
    setText(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    getValue({ rate, text });
  };
  return (
    <div>
      <Input getTextData={getTextData} text={text} />
      <Button submitHandler={submitHandler} />
    </div>
  );
};

export default Form;
