import { Op } from "sequelize";
import Annonce from "../../db/models/Annonce";

function handlePOST(req, res) {
  const data = req.body;

  if (!data) {
    res.setHeader("Content-Type", "application/json");
    res.statusCode = 400;
    return res.end(JSON.stringify("Empty body"));
  }

  return Annonce.build(data)
    .save()
    .then(() => {
      res.setHeader("Content-Type", "application/json");
      res.statusCode = 200;
      res.end(JSON.stringify("Success creating ad"));
    })
    .catch((err) => {
      console.log(err);
      res.setHeader("Content-Type", "application/json");
      res.statusCode = 500;
      res.end(JSON.stringify("Internal server error"));
    });
}

async function handleQuery(req, res) {
  const query = req.query.search;
  const words = query.split(" ");
  const clauses = {};
  const LIMIT = req.query.limit;
  const OFFSET = req.query.offset;

  words.forEach((word) => {
    clauses[Op.iLike] = `%${word}%`;
  });

  try {
    const ads = await Annonce.findAll({
      where: {
        title: {
          [Op.and]: clauses,
        },
      },
      offset: OFFSET,
      limit: LIMIT,
    });

    const data = ads.map(({ category, title, description, price, contact }) => {
      return { category, title, description, price, contact };
    });

    res.statusCode = 200;
    res.end(JSON.stringify(data));
  } catch (error) {
    console.log(error);
    res.statusCode = 500;
    res.end(JSON.stringify("Internal server error"));
  }
}

export default (req, res) => {
  Annonce.sync();

  switch (req.method) {
    case "POST":
      handlePOST(req, res);
      break;

    case "GET":
      if (req.query) {
        handleQuery(req, res);
      } else {
        res.statusCode = 400;
        res.end();
      }

      break;

    default:
      res.end();
      break;
  }
};
