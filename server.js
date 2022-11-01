const express = require("express");

const app = express();

// Routes
app.get("/", (req, res) => {
  res.send("We are on Home");
});

// How do we start listening to the server
app.listen(3000);
