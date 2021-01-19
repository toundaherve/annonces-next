import React from "react";

const NoResultsAlert = ({ query, templateMsg }) => (
  <div className="alert alert-info" role="alert">
    {templateMsg ? templateMsg : `There is no offer for ${query}.`}
  </div>
);

export default NoResultsAlert;
