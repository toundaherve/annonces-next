import React from "react";
import { Op } from "sequelize";

import ResultPageContainer from "../components/ResultPageContainer";
import Annonce from "../db/models/Annonce";

const Result = (props) => {
  return <ResultPageContainer {...props} />;
};

export async function getServerSideProps(context) {
  const query = context.query.search;
  const words = query.split(" ");
  const clauses = {};

  words.forEach((word) => {
    clauses[Op.iLike] = `%${word}%`;
  });

  const ads = await Annonce.findAll({
    where: {
      title: {
        [Op.and]: clauses,
      },
    },
    offset: 0,
    limit: 5,
  });

  const totalCount = await Annonce.count({
    where: {
      title: {
        [Op.and]: clauses,
      },
    },
  });

  const data = ads.map(({ category, title, description, price, contact }) => {
    return { category, title, description, price, contact };
  });

  return {
    props: {
      data,
      totalCount,
      query,
    },
  };
}

export default Result;
