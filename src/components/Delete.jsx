import React from "react";
import DeleteIcon from "../assets/delete.png";
import ReactTooltip from "react-tooltip";

const Delete = ({ deleteFeedback }) => {
  const deleteFn = () => {};
  return (
    <>
      <img
        src={DeleteIcon}
        alt="Delete"
        onClick={(val) => deleteFeedback(val)}
        data-tip
        data-for="deleteBtn"
      />

      <ReactTooltip id="deleteBtn" place="top" effect="solid">
        Delete
      </ReactTooltip>
    </>
  );
};

export default Delete;
