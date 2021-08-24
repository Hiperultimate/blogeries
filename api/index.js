const express = require("express");
const dotenv = require("dotenv");
const app = express();
const mongoose = require("mongoose");

dotenv.config();
const PORT = 5000;

mongoose.connect(process.env.MONGO_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
}).then(console.log("Connected to database")).catch(err => console.log(err));

app.get("/", (req, res) => {
  res.send("Homepage");
});

app.listen(PORT, (err) => {
  if (err) {
    console.log(err);
  }
  console.log(`Backend is running at ${PORT}`);
});
