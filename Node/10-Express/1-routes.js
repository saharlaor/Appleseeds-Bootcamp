const express = require("express");
const app = express();

const PORT = 8080;

const cb = (req, res) => {
  res.send(`<h2>Success using ${req.method}</h2>`);
};

app.get("/numbers", cb);
app.post("/numbers", cb);
app.delete("/numbers", cb);
app.put("/numbers", cb);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
