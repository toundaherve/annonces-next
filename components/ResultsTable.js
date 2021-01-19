import React from "react";
import ReactPaginate from "react-paginate";

const mockUsers = [
  "Sophie",
  "Sarah",
  "Tom",
  "Larry",
  "Cheryl",
  "Seth",
  "Joe",
  "Luke",
  "Charles",
  "Tyson",
  "Donald",
  "Destiny",
  "Louis",
  "Steven",
  "Dana",
];

const ResultsTable = ({ data, page, totalCount, limit, onPageClick }) => {
  const pagesCount = Math.ceil(totalCount / limit);

  const handleRowClick = (id) => {
    window.location = `/item?id=${id}`;
  };

  return (
    <div>
      <div className="table-responsive-sm">
        <table className="table align-middle table-hover">
          <thead>
            <tr>
              <th scope="col">User</th>
              <th scope="col">Want</th>
              <th scope="col" className="text-end">
                Pay
              </th>
              <th scope="col">Location</th>
              <th scope="col">ETA</th>
            </tr>
          </thead>
          <tbody>
            {data.map((ad, idx) => {
              return (
                <tr key={idx} onClick={() => handleRowClick(ad.id)}>
                  <td>{mockUsers[idx]}</td>
                  <td className="fw-normal" scope="row">
                    {ad.title}
                  </td>
                  <td className="text-end">${ad.price}</td>
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
            previousLabel="&laquo;"
            nextLabel="&raquo;"
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
