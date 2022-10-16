import React, { useContext } from "react";
import PropTypes from "prop-types";
import { EditedDataContext } from "../App";

const Input = ({ getTextData, text }) => {
  const editedVal = useContext(EditedDataContext);
  return (
    <div>
      <input
        type="text"
        placeholder="Write your feedback comments"
        onChange={(e) => getTextData(e)}
        value={text}
      />
    </div>
  );
};

Input.defaultProps = {
  getTextData: () => {},
  text: "",
};
Input.propTypes = {
  getTextData: PropTypes.func,
  text: PropTypes.string,
};

export default React.memo(Input);
