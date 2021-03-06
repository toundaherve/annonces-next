import React from "react";
import { Op } from "sequelize";

import ResultPageContainer from "../components/ResultPageContainer";
import Annonce from "../db/models/Annonce";
import extractAdsFromDbResults from "../utils/extractAdsFromDbResults";

const Result = (props) => {
  return <ResultPageContainer {...props} />;
};

export async function getServerSideProps(context) {
  const query = context.query.search;
  const words = query.split(" ");
  const clauses = {};
  const limit = 15;

  words.forEach((word) => {
    clauses[Op.iLike] = `%${word}%`;
  });

  const results = await Annonce.findAll({
    where: {
      title: {
        [Op.and]: clauses,
      },
    },
    offset: 0,
    limit,
  });

  const totalCount = await Annonce.count({
    where: {
      title: {
        [Op.and]: clauses,
      },
    },
  });

  const data = extractAdsFromDbResults(results);

  return {
    props: {
      data,
      totalCount,
      query,
      limit,
    },
  };
}

export default Result;
