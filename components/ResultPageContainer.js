import React, { useState } from "react";
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
  const page = 1;

  function handlePageClick(paginationData) {
    const selected = paginationData.selected;
    const offset = Math.ceil(selected * limit);

    getData(
      offset,
      limit,
      query,
      (data) => {
        setData(data);
      },
      () => {
        alert(error);
      }
    );
  }

  return (
    <ResultPage
      page={page}
      details={null}
      data={data}
      totalCount={totalCount}
      query={query}
      limit={limit}
      onPageClick={handlePageClick}
    />
  );
};

function getData(offset, limit, query, onSuccess, onFail) {
  fetch(
    `http://192.168.1.68:3000/api/annonce?search=${query}&offset=${offset}&limit=${limit}`
  )
    .then((response) => response.json())
    .then((data) => onSuccess(data))
    .catch((err) => {
      onFail(err);
    });
}

export default ResultPageContainer;
