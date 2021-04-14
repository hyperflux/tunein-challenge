import React from "react";

const ErrorDisplay = ({ errorMsg }) => {
  return (
    <div className="App-text-sm App-text-error">
      <p>
        <b>Sorry, there was an error loading your radio stations.</b>
      </p>
      <p>{errorMsg}</p>
    </div>
  );
};

export default ErrorDisplay;
