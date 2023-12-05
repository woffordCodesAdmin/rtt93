const express = require("express");
const app = express();
const PORT = 3001;
const cors = require("cors");
const mongoose = require('mongoose')

app.use(cors());
// Sets up Cross-Origin for Requests sent to backend from different PORT
app.use(express.json())
// Allows Express to accept JSON data from Form

mongoose.connect('mongodb://localhost:27017')
// ++++++++++ {19:01 - https://www.youtube.com/watch?v=Ejg7es3ba2k} ++++++++++

app.post("/api/register", (req, res) => {
  console.log(req.body);
  res.json({ status: "ok" });
});

app.listen("3001", () => {
  console.log(`Listening on PORT ${PORT}`);
});
