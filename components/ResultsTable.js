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

const mockLocations = [
  "Leeds",
  "London",
  "Manchester",
  "Wolverhampton",
  "Birmingham",
  "London",
  "Liverpool",
  "Newcastle",
  "Leeds",
  "London",
  "Cannock",
  "Bradford",
  "Norwich",
  "London",
  "Birmingham",
];

const mockETA = [
  "1day",
  "50min",
  "2days",
  "23min",
  "2d",
  "5h",
  "1d 5h",
  "50min",
  "4days 5min",
  "6h",
  "3h 45min",
  "9h 8min",
  "2days",
  "12min",
  "6h 8min",
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
              <th scope="col">Wanted</th>
              <th scope="col" className="text-end">
                Budget
              </th>
              <th scope="col">User</th>
              <th scope="col">Location</th>
              <th scope="col">ETA</th>
            </tr>
          </thead>
          <tbody>
            {data.map((ad, idx) => {
              return (
                <tr key={idx} onClick={() => handleRowClick(ad.id)}>
                  <td className="fw-normal" scope="row">
                    {ad.title}
                  </td>
                  <td className="text-end">£{ad.price}</td>
                  <td>{mockUsers[idx]}</td>

                  <td>{mockLocations[idx]}</td>
                  <td>{mockETA[idx]}</td>
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
