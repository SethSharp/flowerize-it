
const express = require('express');
const item = require('../models/item');
const router = express.Router()
const Item = require("../models/item");

router.get('/', (req, res) => {
  console.log("Default router of item")
});

router.post("/save", async (req, res) => {
  const item = new Item(req.body);
  item.save().then((item) => {
      res.json(item);
  })
  .catch((err) => console.log(err));
});

router.get("/getAll", (req, res) => {
  Item.find({}, (err, items) => {
    if (err) {
      console.log(err);
      return;
    }
    res.json(items);
  })
})
module.exports = router
