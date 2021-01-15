const { Sequelize, DataTypes, Model } = require("sequelize");
const sequelize = new Sequelize(process.env.DATABASE_URL);

class Annonce extends Model {}

Annonce.init(
  {
    // Model attributes are defined here
    category: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
    },
    price: {
      type: DataTypes.DECIMAL,
      allowNull: false,
    },
    contact: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
  },
  {
    // Other model options go here
    sequelize, // We need to pass the connection instance
    modelName: "Annonce", // We need to choose the model name
  }
);

export default (req, res) => {
  Annonce.sync();

  res.setHeader("Content-Type", "application/json");

  if (req.method === "POST") {
    handlePOST(req, res);
    return;
  }
};

function handlePOST(req, res) {
  const data = req.body;

  if (!data) {
    res.statusCode = 400;
    return res.end(
      JSON.stringify({
        error: "Body is empty",
      })
    );
  }

  Annonce.build(data)
    .save()
    .then(() => {
      res.statusCode = 200;
      res.end();
    })
    .catch((err) => {
      res.statusCode = 400;
      res.end(JSON.stringify({ error: err.message }));
    });

  return;
}
