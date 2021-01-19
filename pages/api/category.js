import Annonce from "../../db/models/Annonce";

async function handleQuery(req, res) {
  const search = req.query.search;
  const LIMIT = req.query.limit;
  const OFFSET = req.query.offset;

  try {
    const ads = await Annonce.findAll({
      where: {
        category: search,
      },
      offset: OFFSET,
      limit: LIMIT,
    });

    const data = ads.map(
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
          createdAt,
          updatedAt,
        };
      }
    );

    res.statusCode = 200;
    res.end(JSON.stringify(data));
  } catch (error) {
    console.log(error);
    res.statusCode = 500;
    res.end(JSON.stringify("Internal server error"));
  }
}

export default (req, res) => {
  handleQuery(req, res);
};
