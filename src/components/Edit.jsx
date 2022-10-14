import React from "react";
import EditIcon from "../assets/edit.png";
import ReactTooltip from "react-tooltip";

const Edit = () => {
  return (
    <>
      <img src={EditIcon} alt="Edit" data-tip data-for="editBtn" />
      <ReactTooltip id="editBtn" place="top" effect="solid">
        Edit
      </ReactTooltip>
    </>
  );
};

export default Edit;
