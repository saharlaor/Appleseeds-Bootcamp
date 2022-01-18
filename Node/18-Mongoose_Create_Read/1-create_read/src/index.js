const { Product } = require("./models/product.js");
const express = require("express");
require("./db/mongoose");

const PORT = 8001;

const app = express();
app.use(express.json());

app.get("/products/", (req, res) => {
  try {
    Product.find(
      req.query && {
        "details.price": { $gt: req.query.min, $lt: req.query.max },
      }
    )
      .then((products) => res.send(products))
      .catch((e) => {
        res.status(404).send(e);
        throw e;
      });
  } catch (err) {
    console.error(e);
  }
});

app.get("/products/active", (req, res) => {
  try {
    Product.find({ isActive: true })
      .then((products) => res.send(products))
      .catch((e) => {
        res.status(404).send(e);
        throw e;
      });
  } catch (err) {
    console.error(e);
  }
});

app.get("/products/:id", (req, res) => {
  try {
    Product.findOne({ _id: req.params.id })
      .then((product) => res.send(product))
      .catch((e) => {
        res.status(404).send(e);
        throw e;
      });
  } catch (err) {
    console.error(e);
  }
});

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});

// main();
