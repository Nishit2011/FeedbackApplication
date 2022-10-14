import React from "react";

const Button = ({ submitHandler }) => {
  const submitFn = () => {};
  return (
    <div>
      <button onClick={(e) => submitHandler(e)}>Submit</button>
    </div>
  );
};

export default React.memo(Button);
