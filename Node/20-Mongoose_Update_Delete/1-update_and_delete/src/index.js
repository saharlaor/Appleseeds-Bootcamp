const express = require("express");
const { Product } = require("./models/product.js");
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

app.put("/products/activate/:id", async (req, res) => {
  try {
    const product = await Product.findByIdAndUpdate(req.params.id, {
      isActive: true,
    });
    if (!product) throw Error(`Product not found - ${req.params.id}`);
    res.send(product);
  } catch (err) {
    res.status(404).send(err);
    console.error(err);
  }
});

app.put("/products/deactivate/:id", async (req, res) => {
  try {
    const product = await Product.findByIdAndUpdate(req.params.id, {
      isActive: false,
    });
    if (!product) throw Error(`Product not found - ${req.params.id}`);
    res.send(product);
  } catch (err) {
    res.status(404).send(err);
    console.error(err);
  }
});

app.put("/products/discount/:id", async (req, res) => {
  try {
    const product = await Product.findByIdAndUpdate(req.params.id, {
      "details.discount": req.body.value,
    });
    if (!product) throw Error(`Product not found - ${req.params.id}`);
    res.send(product);
  } catch (err) {
    res.status(404).send(err);
    console.error(err);
  }
});

app.delete("/products/", async (req, res) => {
  try {
    const response = await Product.deleteMany();
    res.send(response);
  } catch (err) {
    res.status(404).send(err);
    console.error(err);
  }
});

app.delete("/products/:id", async (req, res) => {
  try {
    const response = await Product.deleteOne({ _id: req.params.id });
    res.send(response);
  } catch (err) {
    res.status(404).send(err);
    console.error(err);
  }
});

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
