import React from "react";

const ResultsSummary = ({ totalCount, limit, data, page, query }) => {
  return (
    <div className="h5 mb-1 fw-normal">
      Offers{" "}
      <span className="fw-bold">
        {" "}
        {limit * (page + 1) - limit + 1} -{" "}
        {limit * (page + 1) - limit + 1 + data.length - 1}{" "}
      </span>
      of <span className="fw-bold">{totalCount}</span> found for :{" "}
      <span className="fw-bold">"{query}"</span>
      {/* <br />[<a href="#1">Modifier la recherche</a>] */}
    </div>
  );
};

export default ResultsSummary;
