// use express router to handle my product routes

const express = require('express');
const router = express.Router();

// Getting fake database
const products = require('../data');

router.get('/', (req, res) => {
  res.json(products);
})

module.exports = router;

