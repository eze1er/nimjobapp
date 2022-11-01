const express = require('express')

const router = express.Router();

router.get('/', (req, res) => {
  res.send("We are in users on router")
})

// here we can add a skills specific or id

module.exports = router