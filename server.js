const express = require("express");
const { default: mongoose } = require("mongoose");
require('dotenv/config')
const app = express();

// Middleware
const skillsRoute = require('./routes/skills')
const usersRoute = require('./routes/users')

app.use('/skills', skillsRoute)
app.use('/users', usersRoute)

// this the middleware for authentication
// app.use(auth)

// Routes
app.get("/", (req, res) => {
  res.send("We are on Home");
});

// Connect to mongoDB
mongoose.connect(
  process.env.DB_CONNECTION,
  () => console.log("Connected to DB!")
);
// How do we start listening to the server
app.listen(process.env.PORT);
