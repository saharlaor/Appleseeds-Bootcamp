const path = require("path");
const express = require("express");
const cors = require("cors");
const { geocode, forecast } = require("./utils/utils");

const app = express();

// Define paths for Express config
const publicDirectoryPath = path.join(__dirname, "../../client/public");

// Setup static directory to serve
app.use(express.static(publicDirectoryPath));
app.use(cors());
app.options("*", cors());

app.get("/api/weather", (req, res) => {
  if (!req.query.address) {
    return res.send({
      error: "You must provide an address!",
    });
  }

  geocode(
    req.query.address,
    (error, { latitude, longitude, location } = {}) => {
      if (error) {
        return res.send({ error });
      }

      forecast(latitude, longitude, (error, forecastData) => {
        if (error) {
          return res.send({ error });
        }

        res.send({
          forecast: forecastData,
          location,
          address: req.query.address,
        });
      });
    }
  );
});

app.listen(8001, () => {
  console.log("Server is up on port 8001.");
});
