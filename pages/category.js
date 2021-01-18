import React from "react";
import Annonce from "../db/models/Annonce";
import extractAdsFromDbResults from "../utils/extractAdsFromDbResults";

import CategoryPageContainer from "../components/CategoryPageContainer";

const Category = (props) => {
  return <CategoryPageContainer {...props} />;
};

export default Category;

export async function getServerSideProps(context) {
  const category = context.query.category;
  const limit = 15;

  const results = await Annonce.findAll({
    where: {
      category,
    },
    limit,
  });

  const totalCount = await Annonce.count({
    where: {
      category,
    },
  });

  const data = extractAdsFromDbResults(results);

  return {
    props: {
      data,
      category,
      query: category,
      totalCount,
      limit,
    },
  };
}
