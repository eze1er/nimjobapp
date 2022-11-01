const express = require("express");
const { default: mongoose } = require("mongoose");
require('dotenv/config')
const app = express();

// Middleware
app.use("/skills", () => {
  console.log("this is the middleware running when we hit Skills");
});

// this the middleware for authentication
// app.use(auth)

// Routes
app.get("/", (req, res) => {
  res.send("We are on Home");
});

// app.get("/skills", (req, res) => {
//   res.send("We are on Skills");
// });

// Connect to mongoDB
mongoose.connect(
  process.env.DB_CONNECTION,
  () => console.log("Connected to DB!")
);
// How do we start listening to the server
app.listen(process.env.PORT);
