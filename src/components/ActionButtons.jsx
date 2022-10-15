import React from "react";
import Edit from "./Edit";
import Delete from "./Delete";
const ActionButtons = ({ rate, deleteFeedback }) => {
  return (
    <div className="action-btn-container">
      <Edit /> <Delete deleteFeedback={() => deleteFeedback(rate)} />
    </div>
  );
};

export default ActionButtons;
