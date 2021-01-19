import React from "react";

const NoResultsAlert = ({ query, templateMsg }) => (
  <div className="alert alert-info" role="alert">
    {templateMsg ? templateMsg : `There is no wants for "${query}".`}
  </div>
);

export default NoResultsAlert;
