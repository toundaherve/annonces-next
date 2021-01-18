import React from "react";

const FailureAlert = ({ requestError }) => (
  <div className="alert alert-danger" role="alert">
    {`Sorry but the operation could not be performed: ${requestError.errorMsg}`}
  </div>
);

export default FailureAlert;
