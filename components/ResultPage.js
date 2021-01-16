import React from "react";
import Layout from "./layout";

const ResultPage = ({ page, totalCount, data, query }) => {
  return (
    <Layout>
      <div>
        <div className="h5 mb-1 fw-normal">
          Annonces{" "}
          <span className="fw-bold">
            {" "}
            {data.length * page - data.length + 1} - {data.length * page}{" "}
          </span>
          sur <span className="fw-bold">{totalCount}</span> trouve pour :{" "}
          <span className="fw-bold">"Iphone"</span>
          <br />[<a href="#1">Modifier la recherche</a>]
        </div>

        <div>
          <table className="table">
            <thead>
              <tr>
                <th scope="col">Titre</th>
                <th scope="col">Prix</th>
                <th scope="col">Ville</th>
                <th scope="col">Time</th>
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
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        <div className="mt-4">
          {/* <div className="row row-cols-auto justify-content-between">
            <div className="col">
              {buildPagination(details.total).map((n) => (
                <a className="p-2" key={n} href="#4">
                  {n}
                </a>
              ))}
              <span className="p-2" href="#4">
                ...
              </span>
              <a className="p-2" href="#4">
                {84}
              </a>
            </div>

            <div className="col">
              <a className="p-2" href="#4">
                page suivante <span>{">>"}</span>
              </a>
            </div>
          </div> */}
        </div>
      </div>
    </Layout>
  );
};

export default ResultPage;
