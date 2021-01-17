import React from "react";

const ResultsTable = ({ data }) => {
  return (
    <table className="table">
      <thead>
        <tr>
          <th scope="col">Title</th>
          <th scope="col">Price</th>
          <th scope="col">Location</th>
          <th scope="col">ETA</th>
          <th scope="col"></th>
        </tr>
      </thead>
      <tbody>
        {data.map((ad, idx) => {
          return (
            <tr key={idx}>
              <th className="fw-normal" scope="row">
                {ad.title}
              </th>
              <td>{ad.price}</td>
              <td>Location</td>
              <td>Time</td>
              <td>
                <a href={`/item?id=${ad.id}`} className="btn btn-primary">
                  View
                </a>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default ResultsTable;
