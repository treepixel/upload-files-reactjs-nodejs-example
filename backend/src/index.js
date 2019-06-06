require("dotenv").config();

const express = require("express");
const routes = require("./routes");
const morgan = require("morgan");
const mongoose = require("mongoose");

const app = express();

//Database setup
mongoose.connect("mongodb://localhost:27017/upload_db", {
  useNewUrlParser: true
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));

app.use(routes);

app.listen(3000);
