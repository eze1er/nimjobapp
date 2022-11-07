const express = require('express')

const router = express.Router();
const Skills = require('../models/Skill')

router.get('/', (req, res) => {
  res.send("We are in skills on router")
})

router.post('/', (req, res) => {
  console.log(req.body);
})

// here we can add a skills specific or id

module.exports = router