import React from "react";
import Edit from "./Edit";
import Delete from "./Delete";
const ActionButtons = ({ rate, deleteFeedback, editFeedback, item }) => {
  return (
    <div className="action-btn-container">
      {/* <Edit editFeedback={() => editFeedback(item)} />{" "} */}
      <Delete deleteFeedback={() => deleteFeedback(rate)} />
    </div>
  );
};

export default ActionButtons;
