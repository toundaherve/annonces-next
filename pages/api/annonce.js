import Annonce from "../../db/models/Annonce";

function handlePOST(req, res) {
  const data = req.body;

  if (!data) {
    res.setHeader("Content-Type", "application/json");
    res.statusCode = 400;
    return res.end(
      JSON.stringify({
        code: 400,
        type: "string",
        message: "Bad request",
      })
    );
  }

  return Annonce.build(data)
    .save()
    .then(() => {
      res.setHeader("Content-Type", "application/json");
      res.statusCode = 200;
      res.end(
        JSON.stringify({
          code: 200,
          type: "string",
          message: "Success annonce creation",
        })
      );
    })
    .catch((err) => {
      console.log(err);
      res.setHeader("Content-Type", "application/json");
      res.statusCode = 500;
      res.end(
        JSON.stringify({
          code: 500,
          type: "string",
          message: "Internal server error",
        })
      );
    });
}

export default (req, res) => {
  Annonce.sync();

  switch (req.method) {
    case "POST":
      handlePOST(req, res);
      break;

    default:
      res.end();
      break;
  }
};
