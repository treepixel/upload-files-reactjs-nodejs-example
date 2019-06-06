require("dotenv").config();

const express = require("express");
const routes = require("./routes");
const morgan = require("morgan");
const mongoose = require("mongoose");
const path = require("path");

const app = express();

//Database setup
mongoose.connect(process.env.URL_MONGO, {
  useNewUrlParser: true
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));

app.use(
  "/files",
  express.static(path.resolve(__dirname, "..", "tmp", "uploads"))
);

app.use(routes);

app.listen(3000);
