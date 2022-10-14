import React from "react";
import PropTypes from "prop-types";

const Input = ({ getTextData, text }) => {
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
