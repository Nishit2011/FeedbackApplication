import React, { useState } from "react";
import Input from "../reusables/Input";
import Button from "../reusables/Button";
import { getValue } from "@testing-library/user-event/dist/utils";

const Form = ({ getValue, rate }) => {
  const [text, setText] = useState("");
  const getTextData = (e) => {
    setText(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(rate, text);
    getValue({ rate, text });
    setText("");
  };
  return (
    <div className="form-container">
      <Input getTextData={(e) => getTextData(e)} text={text} />
      <Button submitHandler={(e) => submitHandler(e)} />
    </div>
  );
};

export default Form;
