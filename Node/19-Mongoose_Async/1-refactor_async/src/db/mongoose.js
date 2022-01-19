const mongoose = require("mongoose");
const SERVER_URL = "mongodb://127.0.0.1:27017/products";

mongoose.connect(SERVER_URL, { useNewUrlParser: true });
