const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const router = require("./routes/index.js");

const app = express();

app.use(cors());
app.use("/static", express.static("static"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(router);

const port = 4200;

app.listen(port, () => {
  console.log("Server running on port " + port);
});
