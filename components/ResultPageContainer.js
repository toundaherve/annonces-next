import React, { useRef, useState } from "react";
import ResultPage from "./ResultPage";

const mockData = [
  {
    category: "Phones",
    title: "Iphone 8s plus",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam est laudantium vero nobis ad rem?",
    price: "$750.45",
    contact: "sarahcooper@cnn.com",
  },
  {
    category: "Cars",
    title: "BMW X5",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam est laudantium vero nobis ad rem?",
    price: "$27050.45",
    contact: "dancrenshaw@foxnews.com",
  },
];

const ResultPageContainer = ({
  data: dataInitial = mockData,
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
    window.scrollTo(0, 0);
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
    <ResultPage
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
    `http://192.168.1.68:3000/api/annonce?search=${query}&offset=${offset}&limit=${limit}`
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

export default ResultPageContainer;
