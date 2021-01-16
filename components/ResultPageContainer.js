import React from "react";
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

const ResultPageContainer = ({ data = mockData, totalCount, query }) => {
  const page = 1;
  return (
    <ResultPage
      page={page}
      details={null}
      data={data}
      totalCount={totalCount}
      query={query}
    />
  );
};

export default ResultPageContainer;
