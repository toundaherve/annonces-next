import React from "react";
import Layout from "../components/layout";

const ResultPage = () => {
  return (
    <Layout>
      <div>
        <div className="h5 mb-1 fw-normal">
          Annonces <span className="fw-bold"> 1 - 20 </span>sur{" "}
          <span className="fw-bold">1'662</span> trouve pour :{" "}
          <span className="fw-bold">"iphone"</span>
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
              {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((n) => {
                return (
                  <tr key={n}>
                    <th className="fw-normal" scope="row">
                      Iphone 8 plus - 64GB ...
                    </th>
                    <td>$750</td>
                    <td>Leeds, UK</td>
                    <td>45 min</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        <div className="mt-4">
          <div className="row row-cols-auto justify-content-between">
            <div className="col">
              {[1, 2, 3, 4, 5].map((n) => (
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
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ResultPage;
