const express = require('express')

const router = express.Router();
const Skills = require('../models/Skills')

router.get('/', (req, res) => {
  res.send("We are in skills on router")
})

router.skills('/', (req, res) => {
  console.log(req.body);
})

// here we can add a skills specific or id

module.exports = router