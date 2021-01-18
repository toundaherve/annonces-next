import React, { useRef, useState } from "react";
import CategoryPage from "./CategoryPage";

const CategoryPageContainer = ({
  data: dataInitial,
  totalCount,
  query,
  limit,
}) => {
  const [data, setData] = useState(dataInitial);
  const [requestError, setRequestError] = useState({
    error: false,
    errorMsg: "",
  });
  const page = useRef(0);

  function handleResponse(ok, data) {
    if (ok) {
      setData(data);
    } else {
      setRequestError({
        error: true,
        errorMsg: data,
      });
    }
  }

  function handleRequestFailure(error) {
    setRequestError({
      error: true,
      errorMsg: error.message,
    });
    window.scrollTo(0, 0);
  }

  function handlePageClick(paginationData) {
    const selected = paginationData.selected;
    const offset = Math.ceil(selected * limit);

    page.current = selected;

    getData(offset, limit, query, handleResponse, handleRequestFailure);
  }

  return (
    <CategoryPage
      page={page.current}
      details={null}
      data={data}
      totalCount={totalCount}
      query={query}
      limit={limit}
      onPageClick={handlePageClick}
      requestError={requestError}
    />
  );
};

function getData(offset, limit, query, onResponse, onFailure) {
  let ok;

  fetch(
    `http://192.168.1.68:3000/api/category?search=${query}&offset=${offset}&limit=${limit}`
  )
    .then((response) => {
      ok = response.ok;
      return response.json();
    })
    .then((data) => onResponse(ok, data))
    .catch((err) => {
      onFailure(err);
    });
}

export default CategoryPageContainer;
