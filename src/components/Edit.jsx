import React from "react";
import EditIcon from "../assets/edit.png";
import ReactTooltip from "react-tooltip";

const Edit = ({ editFeedback }) => {
  return (
    <>
      <img
        src={EditIcon}
        alt="Edit"
        data-tip
        data-for="editBtn"
        // onClick={editFeedback}
      />
      <ReactTooltip id="editBtn" place="top" effect="solid">
        Edit
      </ReactTooltip>
    </>
  );
};

export default Edit;
