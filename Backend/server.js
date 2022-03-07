
if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

const express = require("express");
const app = express();
const dotEnv = require("dotenv");
dotEnv.config({path: "../.env"})

const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/shoeStore", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;
db.on("error", (err) => console.log(err));
db.once("open", () => console.log("Connnected to database"));


const itemRouter = require("./Routes/item");

app.use("/items", itemRouter);

app.listen(process.env.PORT, (req, res) => {
  console.log("Server listening");
})
