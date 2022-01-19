const { Product } = require("./models/product.js");
const express = require("express");
require("./db/mongoose");

const PORT = 8001;

const app = express();
app.use(express.json());

app.get("/products/", async (req, res) => {
  try {
    const products =
      req.query.min && req.query.max
        ? await Product.find({
            "details.price": { $gt: req.query.min, $lt: req.query.max },
          })
        : await Product.find();
    res.send(products);
  } catch (err) {
    res.status(404).send(err);
    console.error(err);
  }
});

app.get("/products/active", async (req, res) => {
  try {
    const products = await Product.find({ isActive: true });
    res.send(products);
  } catch (err) {
    res.status(404).send(err);
    console.error(err);
  }
});

app.get("/products/:id", async (req, res) => {
  try {
    const product = await Product.findOne({ _id: req.params.id });
    res.send(product);
  } catch (err) {
    res.status(404).send(err);
    console.error(err);
  }
});

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
