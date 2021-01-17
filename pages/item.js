import React from "react";
import ItemPageContainer from "../components/ItemPageContainer";
import Annonce from "../db/models/Annonce";

const Item = (props) => {
  return <ItemPageContainer {...props} />;
};

export default Item;

export async function getServerSideProps(context) {
  const id = context.query.id;

  const ad = await Annonce.findOne({ where: { id } });

  return {
    props: {
      ad: {
        id: ad.id,
        category: ad.category,
        title: ad.title,
        description: ad.description,
        price: ad.price,
        contact: ad.contact,
        createdAt: ad.createdAt.toString(),
        updatedAt: ad.updatedAt.toString(),
      },
    },
  };
}
