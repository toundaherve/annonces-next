import React from "react";

const NoResultsAlert = ({ query, templateMsg }) => (
  <div className="alert alert-info" role="alert">
    {templateMsg
      ? templateMsg
      : `There are no items wanted yet for "${query}".`}
  </div>
);

export default NoResultsAlert;
