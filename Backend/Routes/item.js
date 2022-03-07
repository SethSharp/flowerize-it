const express = require('express')
const router = express.Router()
const Author = require('../models/item')

// All Authors Route
router.get('/', (req, res) => {
  console.log("Default router of item")
});

module.exports = router
