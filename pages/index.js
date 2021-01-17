import React from "react";
import Annonce from "../db/models/Annonce";
import HomePageContainer from "../components/HomePageContainer";

const Index = ({ data }) => {
  return <HomePageContainer latestAds={data} />;
};

export default Index;

export async function getServerSideProps(context) {
  const latestAds = await Annonce.findAll({
    order: [["createdAt", "DESC"]],
    limit: 10,
  });

  const data = latestAds.map(
    ({
      id,
      category,
      title,
      description,
      price,
      contact,
      createdAt,
      updatedAt,
    }) => {
      return {
        id,
        category,
        title,
        description,
        price,
        contact,
        createdAt: createdAt.toString(),
        updatedAt: updatedAt.toString(),
      };
    }
  );

  return {
    props: {
      data,
    },
  };
}
