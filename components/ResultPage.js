import React, { useEffect, useRef } from "react";
import ReactPaginate from "react-paginate";
import Layout from "./layout";

const ResultPage = ({
  page,
  totalCount,
  data,
  query,
  limit,
  onPageClick,
  requestError,
}) => {
  const pagesCount = Math.ceil(totalCount / limit);
  const hasResults = data.length > 0 ? true : false;

  const Results = () => (
    <div>
      <div className="h5 mb-1 fw-normal">
        Annonces{" "}
        <span className="fw-bold">
          {" "}
          {data.length * (page + 1) - data.length + 1} -{" "}
          {data.length * (page + 1)}{" "}
        </span>
        sur <span className="fw-bold">{totalCount}</span> trouve pour :{" "}
        <span className="fw-bold">"{query}"</span>
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

      {pagesCount > 1 && (
        <div className="mt-4">
          <ReactPaginate
            disableInitialCallback
            pageCount={Math.ceil(totalCount / limit)}
            marginPagesDisplayed={1}
            pageRangeDisplayed={3}
            initialPage={page}
            onPageChange={onPageClick}
            breakLabel={"..."}
            containerClassName={"pagination"}
            pageClassName={"page-item"}
            pageLinkClassName={"page-link"}
            activeClassName={"active"}
            previousClassName={"page-item"}
            previousLinkClassName={"page-link"}
            nextClassName={"page-item"}
            nextLinkClassName={"page-link"}
            disabledClassName={"disabled"}
            breakClassName={"page-item"}
            breakLinkClassName={"page-link"}
          />
        </div>
      )}
    </div>
  );

  const NoResults = () => (
    <div className="alert alert-danger" role="alert">
      There is no offer for this "{query}".
    </div>
  );

  const Failure = () => (
    <div className="alert alert-danger" role="alert">
      {`Sorry but the operation could not be performed: ${requestError.errorMsg}`}
    </div>
  );

  return (
    <Layout>
      {requestError.error ? (
        <Failure />
      ) : hasResults ? (
        <Results />
      ) : (
        <NoResults />
      )}
    </Layout>
  );
};

export default ResultPage;
