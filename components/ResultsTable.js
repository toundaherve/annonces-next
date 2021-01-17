import React from "react";

const ResultsTable = ({ data }) => {
  return (
    <table className="table align-middle">
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
              <td className="fw-normal" scope="row">
                {ad.title}
              </td>
              <td>{ad.price}</td>
              <td>Location</td>
              <td>Time</td>
              <td>
                <a
                  href={`/item?id=${ad.id}`}
                  className="btn btn-outline-primary"
                >
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
