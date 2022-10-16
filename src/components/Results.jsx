import React, { useState, useEffect } from "react";
import ActionButtons from "./ActionButtons";
import Delete from "./Delete";
import Edit from "./Edit";
import { RatePointsContext } from "./PointsContainer";

const Results = ({ data, avg, deleteFeedbackFn, editFeedbackFn }) => {
  return (
    <div>
      <div className="rating-header">
        <h4>Results {data.length}</h4>
        <h4>Average Rating {avg}</h4>
      </div>
      <span>
        {data.rate !== null ? (
          data.map((el, index) => (
            <div key={index} className="rating-container">
              <div className="rating-content">
                <span className="rating">{el.rate}</span> {el.text}
                <ActionButtons
                  deleteFeedback={() => deleteFeedbackFn(el.rate)}
                  editFeedback={() => editFeedbackFn(el)}
                  item={el}
                  data={data}
                />
              </div>
            </div>
          ))
        ) : (
          <>No data</>
        )}
      </span>
      <span></span>
    </div>
  );
};

export default React.memo(Results);
