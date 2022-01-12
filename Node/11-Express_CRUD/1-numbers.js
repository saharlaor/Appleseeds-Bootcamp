const express = require("express");
const app = express();
app.use(express.json());

const PORT = 8080;

const numbers = [2, 3, 5, 7, 11];

const cb = (req, res) => {
  res.send("Unimplemented");
};

app.get("/numbers", (req, res) => {
  res.send(numbers);
});

app.post("/numbers", (req, res) => {
  if (numbers.includes(req.body.number)) {
    res.status(400).send(`${req.body.number} is already present in the array`);
    return;
  }
  numbers.push(req.body.number);
  res.send(numbers);
});

app.delete("/numbers/:number", (req, res) => {
  console.log(`numbers`, numbers);
  console.log(`req.params.number`, req.params.number);
  if (!numbers.includes(parseInt(req.params.number))) {
    res.status(400).send(`${req.params.number} is not present in the array`);
    return;
  }
  const numberIndex = numbers.indexOf(parseInt(req.params.number));
  numbers.splice(numberIndex, 1);
  res.send(numbers);
});
app.put("/numbers/:number", (req, res) => {
  if (!numbers.includes(parseInt(req.params.number))) {
    res.status(400).send(`${req.params.number} is not present in the array`);
    return;
  }
  if (numbers.includes(req.body.number)) {
    res.status(400).send(`${req.body.number} is already present in the array`);
    return;
  }
  const numberIndex = numbers.indexOf(parseInt(req.params.number));
  numbers.splice(numberIndex, 1, req.body.number);
  res.send(numbers);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
