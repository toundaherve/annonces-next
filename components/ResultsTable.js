import React from "react";
import ReactPaginate from "react-paginate";

const ResultsTable = ({ data, page, totalCount, limit, onPageClick }) => {
  const pagesCount = Math.ceil(totalCount / limit);

  return (
    <div>
      <div className="table-responsive-sm">
        <table className="table align-middle">
          <thead>
            <tr>
              <th scope="col">Title</th>
              <th scope="col ">Price</th>
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
                  <td className="text-center">{ad.price}</td>
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
};

export default ResultsTable;
