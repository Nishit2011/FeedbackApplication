import React from "react";
import Edit from "./Edit";
import Delete from "./Delete";
const ActionButtons = ({ rate, deleteHandler }) => {
  return (
    <div className="action-btn-container">
      <Edit /> <Delete deleteHandler={() => deleteHandler(rate)} />
    </div>
  );
};

export default ActionButtons;
