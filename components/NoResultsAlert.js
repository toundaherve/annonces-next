import React from "react";

const NoResultsAlert = ({ query, templateMsg }) => (
  <div className="alert alert-danger" role="alert">
    {templateMsg ? templateMsg : `There is no offer for ${query}.`}
  </div>
);

export default NoResultsAlert;
